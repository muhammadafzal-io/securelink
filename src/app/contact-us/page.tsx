import ContactForm from "@/components/sections/contact-us/ContactForm";
import Hero from "@/components/sections/contact-us/Hero";
import {
  Clock,
  Globe,
  Headset,
  Languages,
  Mail,
  MapPin,
  Megaphone,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { Faq } from "@/components/shared/Faq";
import { SectionHeading } from "@/components/shared/SectionHeading";

const channels: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Rocket,
    title: "New Projects",
    text: "Tell us what you're building (web, automation, or custom software) and we'll follow up with next steps.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    text: "Questions about an ongoing project or general support.",
  },
  {
    icon: Megaphone,
    title: "Media & Partnerships",
    text: "For press or partnership opportunities, reach out via the form.",
  },
];

const workingWithUs: { icon: LucideIcon; text: string }[] = [
  { icon: Globe, text: "Based in the UAE, working with clients worldwide" },
  { icon: Clock, text: "We reply within one business day" },
  { icon: Languages, text: "Communication in English and Arabic" },
];

export default function ContactUs() {
  const faqs = [
    {
      question: "Can I manage content on my site after launch?",
      answer:
        "Yes, we implement user-friendly content management systems that allow you to easily update and manage your website content without technical knowledge. Depending on your needs, we can set up custom admin panels or integrate established CMS platforms like WordPress, giving you full control over your content post-launch.",
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer:
        "We provide comprehensive post-launch support and maintenance packages to ensure your website continues to perform optimally. Our services include regular updates, security monitoring, performance optimization, content updates, and technical support. We offer flexible maintenance plans tailored to your specific needs and budget.",
    },
    {
      question: "What's your pricing model?",
      answer:
        "We offer flexible pricing models to accommodate different project needs and budgets. This includes fixed-price quotes for well-defined projects, hourly rates for ongoing development work, and retainer options for continuous support. During our initial consultation, we'll discuss your requirements and provide transparent pricing information based on your project scope.",
    },
    {
      question: "Will I have a dedicated team for my project?",
      answer:
        "Yes, we assign a dedicated team to your project based on its requirements. Your team typically includes a project manager, developers, and QA, ensuring consistent communication throughout.",
    },
  ];

  return (
    <div>
      <Hero />

      <section id="start" className="custom-container scroll-mt-24 py-12 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-10">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get In Touch"
              title="Let’s Build Smarter."
              accent="Together."
              description="Tell us about your project and we'll reply within one business day with next steps."
              className="mb-8"
            />
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-4 lg:pt-4">
            {channels.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-border bg-surface-elevated p-5 transition-colors hover:border-brand/40"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/25">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-[16px] sm:text-[18px] font-semibold text-foreground">{title}</h3>
                  <p className="mt-0.5 text-[13px] sm:text-[15px] text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-brand/30 bg-brand/10 p-5">
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-foreground">
                Working with us, wherever you are
              </h3>
              <ul className="mt-3 space-y-3">
                {workingWithUs.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-[13px] sm:text-[15px] text-foreground/90">
                    <Icon className="mt-0.5 size-4 shrink-0 text-brand" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface-elevated p-5">
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-foreground">Reach Out</h3>
              <ul className="mt-3 space-y-3 text-[13px] sm:text-[15px] text-muted-foreground">
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-brand" />
                  Address: TBD
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-brand" />
                  Email: TBD
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Faq faqs={faqs} ctaHref="#start" ctaLabel="Send a Message" />
    </div>
  );
}
