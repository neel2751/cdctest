"use client";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { useState } from "react";

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
            <div className="flex flex-col space-y-4">
              <img
                src="/images/logo.png"
                alt="CDC Construction"
                className="h-12 w-auto mb-6 filter drop-shadow-md"
              />

              <p className="text-sm text-gray-600 leading-relaxed">
                With over two decades of excellence in construction and
                development, we transform spaces into extraordinary environments
                that inspire and endure.
              </p>
            </div>

            {/* Contact Information */}

            <div className="space-y-4">
              <div className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100">
                  <Phone className="h-4 w-4 text-red-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-500 font-medium">Call Us</p>

                  <a
                    href="tel:020-8004-3327"
                    className="text-sm text-gray-900 font-semibold hover:text-red-500"
                  >
                    020-8004-3327
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100">
                  <Mail className="h-4 w-4 text-red-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-500 font-medium">Email Us</p>

                  <a
                    href="mailto:info@cdc.construction"
                    className="text-sm text-gray-900 font-semibold hover:text-red-500"
                  >
                    info@cdc.construction
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100">
                  <MapPin className="h-4 w-4 text-red-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-500 font-medium">Visit Us</p>

                  <p className="text-sm text-gray-900 font-semibold">
                    595a Cranbrook Road,
                    <br />
                    Ilford, IG2 6JZ
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:translate-x-1">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100">
                  <Clock className="h-4 w-4 text-red-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-500 font-medium">
                    Working Hours
                  </p>

                  <p className="text-sm text-gray-900 font-semibold">
                    Mon - Sat: 9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-red-500 after:mt-2">
              Company
            </h3>

            <ul className="space-y-3">
              {[
                "Home",

                "About Us",

                "Our Projects",

                "Meet the Team",

                "Careers",

                "Contact",

                "Sitemap",
              ].map((item) => (
                <li key={item} className="group">
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                    {item}
                  </a>
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
              {[
                "Architectural Design",

                "Design and Build",

                "Loft Conversions",

                "Luxury Renovation",

                "Basement Conversions",

                "New Build Projects",

                "Home Extension",

                "Commercial Fit-Out",
              ].map((service) => (
                <li key={service} className="group">
                  <a
                    href={`/services/${service
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                    {service}
                  </a>
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
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-200"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
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
                <img
                  src="/images/master.png"
                  alt="Master Builders"
                  className="h-16 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />

                <img
                  src="/images/trustmark.png"
                  alt="Trustmark"
                  className="h-16 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm">
                <a
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Terms
                </a>

                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Privacy
                </a>

                <a
                  href="/cookie"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Cookies
                </a>
              </div>
            </div>

            {/* Social Links */}

            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },

                { icon: Instagram, href: "#" },

                { icon: Youtube, href: "#" },

                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-200"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}

          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} CDC Construction. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
