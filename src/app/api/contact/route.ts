import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/data/contact";
import { services } from "@/data/services";

const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
const oneLine = (v: unknown) => String(v ?? "").replace(/[\r\n]+/g, " ").trim();

type Lead = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
};

const serviceLabel = (slug?: string) =>
  services.find((s) => s.slug === slug)?.name ?? (slug === "not-sure" ? "Not sure yet" : slug || "");

// Sends through the SendGrid v3 REST API (no SDK dependency).
async function sendMail(payload: Record<string, unknown>) {
  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`SendGrid ${res.status}: ${await res.text()}`);
}

async function sendLeadEmails(lead: Lead) {
  const from = { email: process.env.SENDGRID_FROM_EMAIL || CONTACT_EMAIL, name: COMPANY_NAME };
  const to = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
  const service = serviceLabel(lead.service);

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone || "-"],
    ["Company", lead.company || "-"],
    ["Service", service || "-"],
  ];
  const notifyHtml = `<h2>New enquiry from ${esc(lead.name)}</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`)
    .join("")}</table>
<p><b>Message</b></p><p style="white-space:pre-wrap">${esc(lead.message || "-")}</p>`;

  // 1) notify the team (reply goes straight to the visitor)
  await sendMail({
    personalizations: [{ to: [{ email: to }] }],
    from,
    reply_to: { email: lead.email, name: oneLine(lead.name) },
    subject: `New enquiry: ${oneLine(service) || "General"} (${oneLine(lead.name)})`,
    content: [{ type: "text/html", value: notifyHtml }],
  });

  // 2) confirmation to the visitor; a failure here must not fail the request
  try {
    await sendMail({
      personalizations: [{ to: [{ email: lead.email }] }],
      from,
      reply_to: { email: to },
      subject: `We received your message | ${COMPANY_NAME}`,
      content: [
        {
          type: "text/html",
          value: `<p>Hi ${esc(lead.name)},</p>
<p>Thanks for contacting ${esc(COMPANY_NAME)}. We have your message and will reply within one business day.</p>
<p>${esc(COMPANY_NAME)}<br>${esc(CONTACT_EMAIL)}</p>`,
        },
      ],
    });
  } catch (err) {
    console.error("Confirmation email failed:", err);
  }
}

// POST /api/contact
// Appends a new row to the configured Google Sheet with form data
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      service,
      message,
      sourcePage,
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
    } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const lead: Lead = { name, email, phone, company, service, message };
    const sheetsConfigured = Boolean(process.env.GOOGLE_SHEET_ID);
    const mailConfigured = Boolean(process.env.SENDGRID_API_KEY);

    if (!sheetsConfigured && !mailConfigured) {
      console.error("Neither GOOGLE_SHEET_ID nor SENDGRID_API_KEY is configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error." },
        { status: 500 }
      );
    }

    const saveToSheet = async () => {
      // Authenticate with Google Sheets API using service account
      const auth = new google.auth.JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      const sheetId = process.env.GOOGLE_SHEET_ID;
      if (!sheetId) {
        console.error("GOOGLE_SHEET_ID is not configured");
        return NextResponse.json(
          { success: false, error: "Server configuration error." },
          { status: 500 }
        );
      }

      // 1. Check if the sheet is empty to add headers
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: "Sheet1!A1:A1",
      });

      if (!response.data.values || response.data.values.length === 0) {
        const headers = [
          "Timestamp",
          "Full Name",
          "Email",
          "Phone",
          "Company",
          "Service",
          "Message",
          "Source Page",
          "UTM Source",
          "UTM Medium",
          "UTM Campaign",
          "UTM Term",
          "UTM Content",
        ];
        await sheets.spreadsheets.values.update({
          spreadsheetId: sheetId,
          range: "Sheet1!A1:M1",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [headers],
          },
        });
      }

      // 2. Append the row
      const timestamp = new Date().toISOString();
      const row = [
        timestamp,
        name,
        email,
        phone || "",
        company || "",
        service || "",
        message || "",
        sourcePage || "",
        utmSource || "",
        utmMedium || "",
        utmCampaign || "",
        utmTerm || "",
        utmContent || "",
      ];

      // Append the row to "Sheet1" (matching your spreadsheet)
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: "Sheet1!A:M",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [row],
        },
      });
    };

    const results = await Promise.allSettled([
      sheetsConfigured ? saveToSheet() : Promise.reject(new Error("sheet not configured")),
      mailConfigured ? sendLeadEmails(lead) : Promise.reject(new Error("email not configured")),
    ]);
    results.forEach((r, i) => {
      if (r.status === "rejected" && (i === 0 ? sheetsConfigured : mailConfigured)) {
        console.error(i === 0 ? "Sheet save failed:" : "Email send failed:", r.reason);
      }
    });
    // Success if the enquiry reached at least one destination.
    if (results.every((r) => r.status === "rejected")) {
      return NextResponse.json(
        { success: false, error: "Failed to submit. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit. Please try again later." },
      { status: 500 }
    );
  }
}
