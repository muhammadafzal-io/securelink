"use client";
import ContactForm from "@/components/sections/contact-us/ContactForm";
import Hero from "@/components/sections/contact-us/Hero";
import { ArrowRight, ChevronRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

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
        "Yes, we assign a dedicated team to your project based on its requirements. Your team typically includes a project manager, developers, and QA — ensuring consistent communication throughout.",
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div>
      <Hero />
      <div className="flex w-full h-full pl-10 mt-8 md:mt-32 pb-6 md:flex-row flex-col justify-between">
        <div className="flex flex-col gap-16 pr-12 md:w-2/3 w-full">
          <div id="start" className="flex flex-col gap-8 max-w-full sm:items-start sm:justify-start items-center justify-center scroll-mt-24">
            <div className="flex flex-col gap-2">
              <h1 className="text-[32px] sm:text-[48px] font-bold text-foreground mb-1 text-center sm:text-start">
                Let’s Build Smarter.<br className="flex sm:hidden"></br>{" "}
                Together.
              </h1>
              <p className="text-muted-foreground text-[12px] sm:text-[16px] mb-2 md:mb-4 text-center sm:text-start">
                Tell us about your project and we'll reply within one
                business day with next steps.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
        <div className="flex flex-col md:gap-50 md:w-1/3 w-full md:mt-39 mt-8">
          <div className="flex w-[90%] flex-col gap-4 items-start justify-start">
            <div className="flex flex-col h-full w-full bg-card p-4 rounded-xl overflow-hidden">
              <p className="relative z-10 text-[16px] sm:text-[18px] font-medium text-foreground mt-2 text-center sm:text-start">
                Customer Support
              </p>
              <p className="relative z-10 py-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start">
                Reach out with any questions about an ongoing project or
                general support.
              </p>
            </div>
            <div className="flex flex-col h-full w-full bg-card p-4 rounded-xl overflow-hidden">
              <p className="relative z-10 text-[16px] sm:text-[18px] font-medium text-foreground mt-2 text-center sm:text-start">
                New Projects
              </p>
              <p className="relative z-10 py-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start">
                Tell us what you're building — web, automation, or custom
                software — and we'll follow up with next steps.
              </p>
            </div>
            <div className="flex flex-col h-full w-full bg-card p-4 rounded-xl overflow-hidden">
              <p className="relative z-10 text-[16px] sm:text-[18px] font-medium text-foreground mt-2 text-center sm:text-start">
                Media Inquiries
              </p>
              <p className="relative z-10 py-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start">
                For press or partnership opportunities, reach out via the
                form.
              </p>
            </div>
            <div className="flex flex-col h-full w-full bg-card pt-4 px-4 pb-4 md:pb-17 rounded-xl overflow-visible">
              <p className="relative z-10 text-[24px] sm:text-[30px] font-medium text-foreground mt-2 pb-4">
                Reach Out
              </p>
              <span className="flex flex-row gap-2 items-center">
                <MapPin className="ms-1 size-4.5" />
                <p className="relative z-10 py-2 text-[12px] sm:text-[20px] font-normal text-muted-foreground">
                  Address — TBD
                </p>
              </span>
              <span className="flex flex-row gap-2 items-center">
                <Mail className="ms-1 size-4.5" />
                <p className="relative z-10 py-2 text-[12px] sm:text-[20px] font-normal text-muted-foreground">
                  Email — TBD
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-surface-elevated text-foreground p-8 gap-8 md:mt-26">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col">
          <div className="flex flex-col gap-2 md:mb-18 mb-8">
            <h1 className="relative z-10 font-medidum text-foreground sm:text-[48px] text-[32px] capitalize text-center sm:text-left">
              Frequently Asked Questions
            </h1>
            <p className="text-foreground z-10 text-[12px] sm:text-[16px] font-[400] text-center sm:text-left">
              Still have questions?{" "}
              <span className="sm:underline">Drop us a line</span>
            </p>
          </div>
          <div className="flex flex-col items-center bg-surface-muted rounded-lg py-8 max-w-[767px] max-h-[235px]">
            <div className="mb-6">
              <h2 className="text-[16px] sm:text-4xl font-bold mb-4 text-center">
                Short on time?
              </h2>
              <p className="text-[12px] sm:text-[18px] text-muted-foreground text-center">
                Let's get started with a brief intro call.
              </p>
            </div>
            <Button
              className="group icon-btn-ghost-effect text-[12px] sm:text-[18px] md:h-11 rounded-full gap-2 pe-2"
              asChild
            >
              <Link href="#start">
                Send a Message
                <div className="icon">
                  <ArrowRight className="size-4 md:size-5" />
                </div>
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Section - FAQ Accordion */}
        <div className="md:w-1/2 md:mt-42">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface-muted rounded-lg min-h-[64px]">
                <button
                  className="w-full text-left py-5 px-2 flex justify-between items-center hover:bg-muted transition-all duration-200"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="pl-2 text-[12px] sm:text-[18px] font-[400] text-muted-foreground">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`transform transition-transform duration-200 ${
                      expandedIndex === index ? "rotate-90" : ""
                    }`}
                    size={20}
                  />
                </button>
                {expandedIndex === index && (
                  <div className="py-4 px-2 text-muted-foreground transition-all text-[12px] sm:text-[18px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
