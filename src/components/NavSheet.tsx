"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavItem } from "./TopNav";
import { BrandLogo } from "./brand-logo";

interface NavSheetProps {
  navItems: NavItem[];
}

export default function NavSheet({ navItems }: NavSheetProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="size-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[350px] p-0 overflow-y-auto"
      >
        <div className="py-6 px-6 border-b">
          <SheetTitle className="sr-only" />
          <BrandLogo />
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems?.map((item, index) => (
              <li key={index} className="">
                {item.type === "link" ? (
                  <SheetClose asChild>
                    <Link
                      href={item.link || "/"}
                      className="block py-2 px-4 text-lg font-medium hover:bg-muted rounded-md transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ) : (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-b-0"
                    >
                      <AccordionTrigger className="py-2 px-4 text-lg font-medium hover:bg-muted rounded-md transition-colors cursor-pointer">
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="pl-4 space-y-1">
                          {item.items?.map((subItem, subIndex) => (
                            <li key={subIndex} className="py-1">
                              <SheetClose asChild>
                                <Link
                                  href={subItem.link}
                                  className="block py-2 px-3 rounded-md transition-colors hover:underline"
                                  onClick={() => setOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
