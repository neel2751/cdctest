"use client";
import { FOOTERLINKS, LOGOS, navigation, services } from "@/data/data";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Input } from "../ui/input";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/data/icon";

const Footer = () => {
  const [email, setEmail] = useState("");

  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    setSubscribeStatus("subscribed");

    setTimeout(() => setSubscribeStatus(""), 3000);

    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50">
      {/* Top Decorative Line */}

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-red-500 to-gray-200"></div>

      {/* Main Footer Content */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Company Information Column */}

          <div className="space-y-8">
            <div className="flex flex-col items-start space-y-4">
              <img
                src="https://cdc.construction/images/CDC_LOGO.svg"
                alt="CDC Construction"
                title="CDC Construction"
                className="h-10 filter drop-shadow-md"
              />
              {/* <p className="text-sm text-gray-600 leading-relaxed">
                With over two decades of excellence in construction and
                development, we transform spaces into extraordinary environments
                that inspire and endure.
              </p> */}
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {FOOTERLINKS.map((item) => (
                <Link
                  href={item?.link}
                  key={item?.title}
                  className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-red-50 group-hover:bg-red-100">
                    <item.icon className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      {item.title}
                    </p>
                    <span className="text-sm text-gray-900 font-semibold group-hover:text-red-500">
                      {item?.text}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-red-500 after:mt-2">
              Company
            </h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item?.title} className="group">
                  <Link
                    href={item?.href}
                    className="inline-flex items-center text-sm text-gray-600 transition-colors duration-200 hover:border-b hover:border-red-600 hover:text-red-600"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-red-500 after:mt-2">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="group">
                  <Link
                    href={`services/${service?.href}`}
                    className="inline-flex items-center text-sm text-gray-600 transition-colors duration-200 hover:border-b hover:border-red-600 hover:text-red-600"
                  >
                    {service?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Certifications */}

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-red-500 after:mt-2">
                Newsletter
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </p>

              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex flex-col space-y-2">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full h-12 focus-visible:ring-1 focus-visible:ring-red-400 transition-all duration-200 appearance-none"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-red-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Subscribe</span>

                    {subscribeStatus === "subscribed" ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Certifications */}

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-red-500 after:mt-2">
                Certifications
              </h3>

              <div className="flex flex-wrap gap-4">
                {LOGOS.map((item, index) => (
                  <img
                    key={index}
                    src={item?.mainImageUrl}
                    alt={item?.alt}
                    title={item.alt}
                    className="h-16 w-auto filter hover:grayscale transition-all duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm">
                {["Terms", "Privacy", "Cookies"].map((item) => (
                  <Link
                    href={item.toLowerCase()}
                    key={item}
                    className="text-neutral-600 hover:text-red-800 hover:font-medium transition-colors duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-600 group cursor-pointer">
              © {new Date().getFullYear()}{" "}
              <span className="text-pretty font-medium group-hover:text-red-600 transition-colors duration-300">
                Creative Design & Construction.
              </span>{" "}
              All rights reserved.
            </div>

            {/* Social Links */}

            <div className="flex space-x-4">
              {[
                {
                  icon: <FacebookIcon />,
                  href: "https://www.facebook.com/cdcconstructionltd",
                },
                {
                  icon: <InstagramIcon />,
                  href: "https://instagram.com/cdc.constructionuk",
                },
                {
                  icon: <YouTubeIcon />,
                  href: "https://www.youtube.com/@CDCLtd",
                },
                {
                  icon: <LinkedInIcon />,
                  href: "https://www.linkedin.com/company/creative-design-and-construction-limited/",
                },
                {
                  icon: <TikTokIcon />,
                  href: "https://www.tiktok.com/@cdclimited",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-800 hover:bg-red-600 hover:text-white transition-all duration-200 p-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
