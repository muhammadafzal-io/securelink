import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit. Please try again later." },
      { status: 500 }
    );
  }
}
