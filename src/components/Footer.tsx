import Link from "next/link";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import type { ReactNode } from "react";

type FooterLink = {
    new?: boolean;
    label: string | React.ReactNode;
    href: string;
    icon?: ReactNode;
};

type FooterSection = {
    title: string;
    links: FooterLink[];
};

type FooterCompany = {
    name: string;
    slogan: string;
    tagline: string;
    cta: string;
    copyright: string;
};

type FooterData = {
    company: FooterCompany;
    sections: FooterSection[];
};

// Dynamic data for the footer
const footerData: FooterData = {
    company: {
        name: "Secure Link",
        slogan: "Integrating Technology with Security",
        tagline: "Websites, software, and AI automation for modern UAE businesses.",
        cta: "Start a Project",
        copyright: "2025 Secure Link. All rights reserved.",
    },
    sections: [
        {
            title: "Company",
            links: [
                { label: "About", href: "/about-us" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact-us" },
            ],
        },
        {
            title: "Services",
            links: [
                { label: "Web Development", href: "/web-development" },
                { label: "AI Automation", href: "/ai-automation" },
                { label: "Custom Software Development", href: "/custom-software-development" },
            ],
        },
        {
            title: "Contact",
            links: [
                {
                    label: "Address — TBD",
                    href: "#",
                    icon: <MapPin className="ms-1 size-3.5" />,
                },
                {
                    label: "Email — TBD",
                    href: "#",
                    icon: <Mail className="ms-1 size-3.5" />,
                },
            ],
        },
    ],
};

export function Footer() {
    return (
        <footer className="w-full bg-surface-footer text-foreground relative overflow-hidden">
            <div
                aria-hidden="true"
                className="h-[3px] w-full bg-brand"
            />

            {/* CTA banner */}
            <div className="custom-container mx-auto px-4 pt-10">
                <div className="rounded-2xl border border-brand/20 bg-[linear-gradient(120deg,color-mix(in_oklch,var(--brand)_14%,transparent)_0%,color-mix(in_oklch,var(--brand)_4%,transparent)_100%)] px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-[20px] sm:text-[28px] font-semibold text-foreground">
                            Have a project in mind?
                        </h3>
                        <p className="text-muted-foreground text-[12px] sm:text-[16px] mt-1">
                            Tell us what you're building — we'll follow up with next steps.
                        </p>
                    </div>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 shrink-0 rounded-full bg-brand px-5 py-3 text-[13px] sm:text-[16px] font-medium text-white hover:bg-brand/90 transition-colors"
                    >
                        {footerData.company.cta}
                        <ArrowRight className="size-4" />
                    </Link>
                </div>
            </div>

            <div className="custom-container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 ">
                    {/* Company Info - Takes full width on mobile, 1/3 on desktop */}
                    <div className="col-span-2 lg:col-span-3">
                        <Link href="/" className="inline-block mb-6">
                            <BrandLogo variant="full" height={72} />
                        </Link>
                        <p className="text-[16px] sm:text-[24px] font-medium text-brand mb-2">
                            {footerData.company.slogan}
                        </p>
                        <p className="text-[13px] sm:text-[16px] text-muted-foreground">
                            {footerData.company.tagline}
                        </p>
                    </div>

                    {/* Navigation Sections - Stack on mobile, side by side on desktop */}
                    <div className="col-span-2 lg:col-span-9 grid grid-cols-2 min-[30rem]:grid-cols-2 sm:grid-cols-3 gap-5 gap-y-8">
                        {footerData.sections.map((section) => (
                            <div key={section.title}>
                                <h3 className="font-medium mb-4 text-[14px] sm:text-[18px]">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2">
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className={`text-muted-foreground hover:text-foreground transition-colors text-[12px] sm:text-[16px] flex items-center ${link.href === "#"
                                                        ? "pointer-events-none"
                                                        : ""
                                                    }`}
                                            >
                                                <span className="mr-1">
                                                    {link.icon}
                                                </span>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-12 pt-6 border-t border-border text-xs text-muted-foreground">
                    <p>© {footerData.company.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
