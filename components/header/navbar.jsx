"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Residential Construction", href: "/services/residential" },
  { name: "Commercial Construction", href: "/services/commercial" },
  { name: "Renovation", href: "/services/renovation" },
  { name: "Project Management", href: "/services/project-management" },
];

const portfolioItems = [
  { name: "Completed Projects", href: "/portfolio/completed" },
  { name: "Ongoing Projects", href: "/portfolio/ongoing" },
  { name: "Case Studies", href: "/portfolio/case-studies" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              ConstructCo
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
            <NavLink href="/">Home</NavLink>
            <DropdownNavLink href="/services" items={services}>
              Services
            </DropdownNavLink>
            <DropdownNavLink href="/portfolio" items={portfolioItems}>
              Portfolio
            </DropdownNavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contactus">Contact Us</NavLink>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Get a Quote
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileDropdownNavLink href="/services" items={services}>
              Services
            </MobileDropdownNavLink>
            <MobileDropdownNavLink href="/portfolio" items={portfolioItems}>
              Portfolio
            </MobileDropdownNavLink>
            <MobileNavLink href="/blog">Blog</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/contactus">Contact Us</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-red-300 hover:text-gray-700"
  >
    {children}
  </Link>
);

const DropdownNavLink = ({ href, items, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={href}
        className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-red-300 hover:text-gray-700"
      >
        {children}
        <ChevronDown className="ml-1 h-4 w-4" />
      </Link>
      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700"
                role="menuitem"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileNavLink = ({ href, children }) => (
  <Link
    href={href}
    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-red-50 hover:border-red-300 hover:text-red-700"
  >
    {children}
  </Link>
);

const MobileDropdownNavLink = ({ href, items, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-red-50 hover:border-red-300 hover:text-red-700"
      >
        {children}
        <ChevronDown className="h-4 w-4" />
      </button>
      {isOpen && (
        <div className="bg-gray-50 pl-6">
          <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-red-50 hover:text-red-700"
          >
            All {children}
          </Link>
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-red-50 hover:text-red-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
