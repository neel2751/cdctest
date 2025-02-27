"use client";

import React, { useState, useEffect } from "react";

import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  Send,
  LinkedinIcon,
  FacebookIcon,
  Instagram,
  ArrowRight,
  Plus,
  MessageSquare,
} from "lucide-react";

const PremiumContactPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [activeTab, setActiveTab] = useState("message");

  const [formData, setFormData] = useState({
    name: "",

    email: "",

    phone: "",

    company: "",

    projectType: "",

    budget: "",

    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Add form submission logic here

    setTimeout(() => {
      setLoading(false);

      // Reset form
    }, 1500);
  };

  const contactOptions = [
    {
      id: "message",

      icon: MessageSquare,

      title: "Send Message",

      description: "Write to us about your project",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with new content */}

      <div className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
        {/* Background with Parallax */}

        <div
          className="absolute inset-0 bg-[url('/luxury-architecture.jpg')] bg-cover bg-center"
          style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

        {/* Hero Content */}

        <div className="relative container mx-auto px-4 text-center">
          <div
            className={`max-w-3xl mx-auto transition-all duration-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Get in Touch With Our Team
            </h1>

            <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto px-4 md:px-0">
              Have a question or need assistance? Our friendly team is always
              happy to help. Reach out to us and get the help you need quickly
              and easily.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a
                href="tel:020-8004-3327"
                className="w-full sm:w-auto bg-red-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium

hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2

group shadow-lg shadow-red-500/25"
              >
                <PhoneCall className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Call Us Now
              </a>

              <a
                href="mailto:info@cdc.construction"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-6 md:px-8 py-3 md:py-4 rounded-full

font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2

border border-white/20"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
          {/* Left Column - Contact Information */}

          <div className="space-y-8 md:space-y-12">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>

              <p className="text-gray-600 text-base md:text-lg">
                Experience the difference of working with London's premier
                architectural firm.
              </p>
            </div>

            {/* Contact Cards */}

            <div className="space-y-4 md:space-y-6">
              {/* Location Card */}

              <div
                className="group bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-2xl

hover:shadow-xl transition-all duration-500 cursor-pointer

border border-gray-100"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-red-500 p-3 md:p-4 rounded-xl group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      London Office
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      595a Cranbrook Road
                      <br />
                      Ilford, IG2 6JZ
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details Cards */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <a
                  href="tel:020-8004-3327"
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-2xl

hover:shadow-xl transition-all duration-500

border border-gray-100 group"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="bg-red-500 p-3 md:p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2">
                        Call Us
                      </h3>

                      <span className="text-gray-600 hover:text-red-500 transition-colors text-sm md:text-base">
                        020-8004-3327
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@cdc.construction"
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-2xl

hover:shadow-xl transition-all duration-500

border border-gray-100 group"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="bg-red-500 p-3 md:p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2">
                        Email
                      </h3>

                      <span className="text-gray-600 hover:text-red-500 transition-colors text-sm md:text-base">
                        info@cdc.construction
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Hours Card */}

              <div
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-2xl

hover:shadow-xl transition-all duration-500

border border-gray-100"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-red-500 p-3 md:p-4 rounded-xl">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      Business Hours
                    </h3>

                    <div className="space-y-2 text-sm md:text-base">
                      <p className="text-gray-600">
                        <span className="font-medium">Mon - Fri:</span> 9:00 AM
                        - 6:00 PM
                      </p>

                      <p className="text-gray-600">
                        <span className="font-medium">Saturday:</span> 10:00 AM
                        - 4:00 PM
                      </p>

                      <p className="text-gray-600">
                        <span className="font-medium">Sunday:</span> Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}

            <div className="pt-4 md:pt-6">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
                Connect With Us
              </h3>

              <div className="flex gap-3 md:gap-4">
                {[
                  { Icon: LinkedinIcon, url: "https://linkedin.com" },

                  { Icon: FacebookIcon, url: "https://facebook.com" },

                  { Icon: Instagram, url: "https://instagram.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 md:p-4 rounded-full hover:bg-red-500 hover:text-white

transition-all duration-300 group"
                  >
                    <social.Icon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}

          <div
            className={`transition-all duration-1000 delay-500 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
                Send Us a Message
              </h3>

              {/* Form */}

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200

focus:ring-2 focus:ring-red-500 focus:border-transparent

transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200

focus:ring-2 focus:ring-red-500 focus:border-transparent

transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200

focus:ring-2 focus:ring-red-500 focus:border-transparent

transition-all duration-300"
                      placeholder="+44 20 1234 5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company (Optional)
                    </label>

                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200

focus:ring-2 focus:ring-red-500 focus:border-transparent

transition-all duration-300"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>

                  <select
                    className="w-full px-4 py-3 rounded-xl border border-gray-200

focus:ring-2 focus:ring-red-500 focus:border-transparent

transition-all duration-300"
                  >
                    <option value="">Select Project Type</option>

                    <option value="residential">
                      Residential Construction
                    </option>

                    <option value="commercial">Commercial Construction</option>

                    <option value="renovation">Renovation</option>

                    <option value="interior">Interior Design</option>

                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Budget
                  </label>

                  <select
                    className="w-full px-4 py-3 rounded-xl border border-gray-200

focus:ring-2 focus:ring-red-500 focus:border-transparent

transition-all duration-300"
                  >
                    <option value="">Select Budget Range</option>

                    <option value="50k-100k">£50,000 - £100,000</option>

                    <option value="100k-250k">£100,000 - £250,000</option>

                    <option value="250k-500k">£250,000 - £500,000</option>

                    <option value="500k-1m">£500,000 - £1 million</option>

                    <option value="1m+">£1 million +</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>

                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200

focus:ring-2 focus:ring-red-500 focus:border-transparent

transition-all duration-300"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-500 text-white py-3 md:py-4 px-6 md:px-8 rounded-xl font-medium

hover:bg-red-600 transition-all duration-300

flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}

      <div className="relative h-[400px] md:h-[600px] mt-12 md:mt-24">
        <div className="absolute inset-0 bg-gray-900/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.8440528190837!2d0.0759397!3d51.5761083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a64b31b4b80b%3A0x7c39b7ea5b5e6b0a!2s595a%20Cranbrook%20Rd%2C%20Ilford%20IG2%206JZ%2C%20UK!5e0!3m2!1sen!2s!4v1624451234567!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Map Overlay Card - Mobile Responsive */}

        <div className="absolute bottom-0 left-0 right-0 md:top-1/2 md:left-24 md:-translate-y-1/2 md:right-auto p-4 md:p-0">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md mx-auto md:mx-0">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Visit Our Office
            </h3>

            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Experience our work firsthand and discuss your project in person.
            </p>

            <a
              href="https://www.google.com/maps/dir//595a+Cranbrook+Rd,+Ilford+IG2+6JZ,+UK"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-red-500 text-white px-4 md:px-6 py-3 rounded-xl font-medium

hover:bg-red-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Get Directions
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumContactPage;
