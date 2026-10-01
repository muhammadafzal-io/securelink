import Link from "next/link";
import { ArrowRight, ArrowUp, MapPin, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import type { ReactNode } from "react";

type FooterLink = {
    label: string;
    href: string;
    icon?: ReactNode;
};

type FooterSection = {
    title: string;
    links: FooterLink[];
};

const company = {
    name: "Secure Link",
    slogan: "Integrating Technology with Security",
    tagline: "Websites, software, and AI automation, built in the UAE, delivered worldwide.",
};

const sections: FooterSection[] = [
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
            { label: "Address: TBD", href: "#", icon: <MapPin className="size-4" /> },
            { label: "Email: TBD", href: "#", icon: <Mail className="size-4" /> },
        ],
    },
];

export function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-[color-mix(in_oklch,var(--brand)_38%,black)] text-white">
            {/* Solid brand accent line + flat blueprint grid (decorative, CSS only) */}
            <div aria-hidden="true" className="h-1 w-full bg-white/30" />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(color-mix(in oklch, white 6%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, white 6%, transparent) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />

            <div className="custom-container relative mx-auto px-4 pt-10 md:pt-12">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-12 lg:gap-8">
                    {/* Brand block */}
                    <div className="col-span-2 lg:col-span-5">
                        <Link href="/" className="inline-block rounded-2xl bg-white px-4 py-2 shadow-lg">
                            <BrandLogo variant="full" height={52} />
                        </Link>
                        <p className="mt-4 text-[18px] sm:text-[26px] font-bold leading-snug text-white">
                            {company.slogan}
                        </p>
                        <p className="mt-2 max-w-md text-[14px] sm:text-[17px] text-white/75">
                            {company.tagline}
                        </p>
                        <Link
                            href="/contact-us"
                            className="group mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[14px] sm:text-[16px] font-bold text-[color-mix(in_oklch,var(--brand)_45%,black)] shadow-lg transition-transform hover:-translate-y-0.5"
                        >
                            Start a Project
                            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Link columns */}
                    <nav
                        aria-label="Footer"
                        className="col-span-2 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:pl-8"
                    >
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h3 className="mb-3 text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-white">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2">
                                    {section.links.map((link) => {
                                        const placeholder = link.href === "#";
                                        return (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    aria-disabled={placeholder || undefined}
                                                    tabIndex={placeholder ? -1 : undefined}
                                                    className={`group inline-flex items-center gap-2 text-[13px] sm:text-[16px] transition-colors ${
                                                        placeholder
                                                            ? "pointer-events-none text-white/40"
                                                            : "text-white/75 hover:text-white"
                                                    }`}
                                                >
                                                    {link.icon}
                                                    <span className="bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                                                        {link.label}
                                                    </span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Oversized wordmark: fades out toward the bottom */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none mt-8 select-none whitespace-nowrap text-center text-white/[0.12] text-[9vw] font-black uppercase leading-[0.8] tracking-tighter sm:mt-10 min-[1700px]:text-[9rem]"
                >
                    Secure Link
                </div>

                {/* Trust strip */}
                <ul className="relative flex flex-wrap gap-x-8 gap-y-2 border-t border-white/20 pt-5 text-[12px] sm:text-[14px] font-medium text-white/90">
                    {["UAE-Based, Globally Delivered", "Web · Automation · Software", "Security-Minded by Default"].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-white" />
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Bottom bar */}
                <div className="relative flex flex-col-reverse items-start justify-between gap-4 py-4 text-[12px] sm:text-[14px] text-white/70 sm:flex-row sm:items-center">
                    <p>
                        © {new Date().getFullYear()} {company.name}. All rights reserved.
                    </p>
                    <a
                        href="#"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 transition-colors hover:border-white hover:bg-white hover:text-[color-mix(in_oklch,var(--brand)_45%,black)]"
                    >
                        Back to top
                        <ArrowUp className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
