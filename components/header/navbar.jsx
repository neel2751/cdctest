"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const services = [
  {
    title: "Residential Construction",
    href: "/services/residential",
    description:
      "High-quality residential construction services for your dream home.",
  },
  {
    title: "Commercial Construction",
    href: "/services/commercial",
    description:
      "Professional commercial construction solutions for businesses.",
  },
  {
    title: "Renovation",
    href: "/services/renovation",
    description:
      "Complete renovation services for residential and commercial properties.",
  },
  {
    title: "Project Management",
    href: "/services/project-management",
    description:
      "Expert project management for construction projects of all sizes.",
  },
];

const portfolio = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const navigation = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services", items: services },
  { title: "Portfolio", href: "/portfolio", items: portfolio },
  { title: "About", href: "/aboutus" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contactus" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">
            <Image
              src="https://cdc.construction/images/CDC_LOGO.svg"
              alt="Logo"
              width={60}
              height={60}
            />
          </span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={"text-base"}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {services.map((service) => (
                    <ListItems
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItems>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">
                Portfolio
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {portfolio.map((item) => (
                    <ListItems
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItems>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navigation.slice(3).map((item) => (
              <NavigationMenuItem
                key={item.title}
                className="hover:font-semibold"
              >
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="text-base">{item.title}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button className="hidden lg:flex bg-red-600 hover:bg-red-700">
            Get a Quote
          </Button>
          <Button className="lg:hidden bg-red-600 hover:bg-red-700">
            Request a Quote
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="border-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-none border-0 pr-0 pl-0"
            >
              <SheetHeader className="px-6 pb-6 border-b">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    <span className="font-bold text-xl">ConstructCo</span>
                  </Link>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                </div>
              </SheetHeader>
              <div className="flex flex-col py-6">
                {navigation.map((item) => (
                  <React.Fragment key={item.title}>
                    {item.items ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.title)}
                          className="flex items-center justify-between px-6 py-4  w-full text-left"
                        >
                          <span className="text-lg">{item.title}</span>
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 text-muted-foreground transition-transform duration-200",
                              activeDropdown === item.title && "rotate-180"
                            )}
                          />
                        </button>
                        {activeDropdown === item.title && (
                          <div className="bg-accent/50 py-2">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => setOpen(false)}
                                className="block px-8 py-3 text-base text-muted-foreground hover:text-foreground"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between px-6 py-4"
                      >
                        <span className="text-lg">{item.title}</span>
                      </Link>
                    )}
                    <Separator />
                  </React.Fragment>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-background border-t">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Get a Quote
                </Button>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Talk to an expert:
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

const ListItems = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-base font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItems.displayName = "ListItems";
