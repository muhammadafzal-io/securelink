"use client";
import { useState, type ChangeEvent, type MouseEvent } from "react";

const serviceOptions = [
  { value: "web-development", label: "Web Development" },
  { value: "ai-automation", label: "AI Automation" },
  { value: "custom-software", label: "Custom Software Development" },
  { value: "not-sure", label: "Not Sure Yet" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setSubmitError("Please fill in both name and email.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const urlParams = new URLSearchParams(window.location.search);
    const submissionData = {
      ...formData,
      sourcePage: window.location.pathname,
      utmSource: urlParams.get("utm_source"),
      utmMedium: urlParams.get("utm_medium"),
      utmCampaign: urlParams.get("utm_campaign"),
      utmTerm: urlParams.get("utm_term"),
      utmContent: urlParams.get("utm_content"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          resetForm();
          setIsSubmitted(false);
        }, 3000);
      } else {
        setSubmitError(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Failed to connect to the server. Please check your internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-elevated p-5 sm:p-8"
    >
      <div className="flex-none">
        <h1 className="text-[22px] sm:text-[28px] font-bold text-foreground mb-1">
          Start a Project
        </h1>
        <p className="text-muted-foreground text-[13px] sm:text-[16px] mb-6">
          Tell us a bit about what you need, we'll reply with next steps.
        </p>
      </div>

      <div className="flex-grow overflow-auto">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center h-full text-center mr-8 sm:mt-0">
            <h2 className="text-3xl font-bold text-brand mb-4">Thank You!</h2>
            <p className="text-foreground text-xl mb-2">
              Your message has been received.
            </p>
            <p className="text-muted-foreground">
              We&apos;ll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <div className="h-full overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-foreground text-[13px] sm:text-[15px] font-medium"
                >
                  Full Name<span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground text-[14px] sm:text-[16px] placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-foreground text-[13px] sm:text-[15px] font-medium"
                >
                  Email<span className="text-brand">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground text-[14px] sm:text-[16px] placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-foreground text-[13px] sm:text-[15px] font-medium"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+971 … (with country code)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground text-[14px] sm:text-[16px] placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-1.5 block text-foreground text-[13px] sm:text-[15px] font-medium"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground text-[14px] sm:text-[16px] placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="service"
                className="mb-1.5 block text-foreground text-[13px] sm:text-[15px] font-medium"
              >
                What do you need?
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground text-[14px] sm:text-[16px] placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 appearance-none"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-foreground">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-1.5 block text-foreground text-[13px] sm:text-[15px] font-medium"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground text-[14px] sm:text-[16px] placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
              ></textarea>
            </div>

            {submitError && (
              <p className="text-red-500 text-sm mb-4 text-center">{submitError}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full rounded-full bg-brand px-4 py-3.5 text-[14px] sm:text-[17px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>

            <p className="mt-4 text-center text-[12px] sm:text-[14px] text-muted-foreground">
              We respect your inbox. No spam, no sharing your details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
