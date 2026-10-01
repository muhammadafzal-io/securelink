"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
} from "@/components/ui/resizable-navbar";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowRight, ChevronDown } from "lucide-react";
import NavSheet from "./NavSheet";
import { ThemeToggle } from "./theme-toggle";

export type NavItem = {
  type: "link" | "multiple";
  name: string;
  link?: string;
  items?: {
    name: string;
    link: string;
  }[];
};

const navItems: NavItem[] = [
  { type: "link", name: "Home", link: "/" },
  { type: "link", name: "About", link: "/about-us" },
  {
    type: "multiple",
    name: "Services",
    items: [
      { name: "Web Development", link: "/web-development" },
      { name: "AI Automation", link: "/ai-automation" },
      { name: "Custom Software Development", link: "/custom-software-development" },
    ],
  },
  { type: "link", name: "Portfolio", link: "/portfolio" },
];

export function TopNav() {
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="border border-border/50 bg-background/70 backdrop-blur-md dark:bg-white/10 dark:border-white/10">
          <NavbarLogo />

          <div className="flex items-center gap-2 me-2">
            {navItems.map((item, index) =>
              item.type === "multiple" ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="group text-base">
                      {item.name}
                      <ChevronDown className="group-data-[state=open]:rotate-180 transition-transform duration-200" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="bg-background min-w-[14rem] rounded-xl"
                    align="start"
                  >
                    {item.items?.map((subItem, index) => (
                      <DropdownMenuItem asChild key={index}>
                        <Link href={subItem.link}> {subItem.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  variant={"ghost"}
                  className="text-base px-3"
                  asChild
                  key={index}
                >
                  <Link href={item.link || ""}> {item.name} </Link>
                </Button>
              )
            )}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <ConatctButton />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex min-w-0 items-center gap-1">
              <NavSheet navItems={navItems} />

              <NavbarLogo />
            </div>

            <div className="flex items-center gap-1">
              <ThemeToggle />
              <ConatctButton />
            </div>
          </MobileNavHeader>
        </MobileNav>
      </Navbar>
    </div>
  );
}

const ConatctButton = () => {
  return (
    <Button
      className="group icon-btn-ghost-effect md:text-lg md:h-11 rounded-full gap-2 pe-2 max-[400px]:ps-2"
      asChild
    >
      <Link href={"/contact-us"}>
        <span className="max-[400px]:sr-only">Contact Us</span>
        <div className="icon">
          <ArrowRight className="size-4 md:size-5" />
        </div>
      </Link>
    </Button>
  );
};
