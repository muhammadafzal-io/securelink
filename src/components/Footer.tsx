import Link from "next/link";
import {
    ArrowRight,
    MoveUpRight,
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Linkedin,
    InstagramIcon,
    FacebookIcon,
} from "lucide-react";
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
    tagline: string;
    cta: string;
    copyright: string;
};

type FooterSocial = {
    title: string;
    links: FooterLink[];
};

type FooterData = {
    company: FooterCompany;
    sections: FooterSection[];
    social: FooterSocial;
    legal: { label: string; href: string }[];
};

// Dynamic data for the footer
const footerData: FooterData = {
    company: {
        name: "KalTech",
        tagline: "Guiding You Through Every Step, From Concept To Launch.",
        cta: "Get a Free AI Audit",
        copyright: "2025 KalTech. All rights reserved.",
    },
    sections: [
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/about-us" },
                {
                    label: "Company Profile",
                    href: "/KalTech%20Pitch%20Deck.pdf",
                    new: true,
                },
                { label: "Contact Us", href: "/contact-us" },
            ],
        },
        {
            title: "Services",
            links: [
                { label: "AI-Powered Solutions", href: "/ai-solutions" },
                {
                    label: "Custom Development Solutions",
                    href: "/custom-development",
                },
            ],
        },
        {
            title: "Products",
            links: [
                { label: "Loan Management System", href: "/loan-management-system" },
                {
                    label: "BECS",
                    href: "/becs",
                },
            ],
        },
        {
            title: "Contact Us",
            links: [
                {
                    label: "New Castle, Delaware, USA",
                    href: "#",
                    icon: <MapPin className="ms-1 size-3.5" />,
                },
                // {
                //     label: "(+92) 3216033066",
                //     href: "#",
                //     icon: <Phone className="ms-1 size-3.5" />,
                // },
                {
                    label: "shershah@kaltech.online",
                    href: "#",
                    icon: <Mail className="ms-1 size-3.5" />,
                },
            ],
        },
    ],
    social: {
        title: "Follow Us",
        links: [
            {
                label: <Linkedin />,
                href: "https://www.linkedin.com/company/kal-tech",
                icon: <MoveUpRight className="ms-1 size-3.5" />,
            },
            {
                label: <InstagramIcon />,
                href: "https://www.instagram.com/kaltech.ai/",
                icon: <MoveUpRight className="ms-1 size-3.5" />,
            },
            {
                label: <FacebookIcon />,
                href: "https://www.facebook.com/KalTechai/",
                icon: <MoveUpRight className="ms-1 size-3.5" />,
            },
        ],
    },
    legal: [
        { label: "Terms & Condition", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
    ],
};

export function Footer() {
    return (
        <footer className="w-full bg-surface-footer text-foreground ">
            <div className="custom-container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 ">
                    {/* Company Info - Takes full width on mobile, 1/3 on desktop */}
                    <div className="col-span-2 lg:col-span-3">
                        <Link href="/" className="inline-block mb-6">
                            <BrandLogo width={130} height={19} />
                        </Link>
                        <p className="text-[16px] sm:text-[24px] mb-6">
                            {footerData.company.tagline}
                        </p>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-2 text-[12px] sm:text-[18px] hover:text-primary transition-colors"
                        >
                            {footerData.company.cta}
                            <ArrowRight className="size-4 text-primary" />
                        </Link>
                    </div>

                    {/* Navigation Sections - Stack on mobile, side by side on desktop */}
                    <div className="col-span-2 lg:col-span-9 grid grid-cols-2 min-[30rem]:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-8">
                        {footerData.sections.map((section) => (
                            <div key={section.title}>
                                <h3 className="font-medium mb-4 text-[14px] sm:text-1[8px">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2">
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            {link.new ? (
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground hover:text-foreground transition-colors text-[12px] sm:text-[16px] flex items-center"
                                                >
                                                    <span className="mr-1">
                                                        {link.icon}
                                                    </span>
                                                    {link.label}
                                                </a>
                                            ) : (
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
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div>
                            <h3 className="font-medium mb-4">
                                {footerData.social.title}
                            </h3>
                            <ul className="space-y-2">
                                {footerData.social.links.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.label}{" "}
                                            <span className="ml-1">
                                                {link.icon}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-12 pt-6 border-t border-border text-xs text-muted-foreground">
                    <p>© {footerData.company.copyright}</p>
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        {footerData.legal.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
