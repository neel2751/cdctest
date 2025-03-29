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
  MapPlus,
  Phone,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/data/data";
import { Textarea } from "@/components/ui/textarea";
import AllHero from "@/components/hero/allHero";
import Link from "next/link";

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

  return (
    <>
      <AllHero />
      <ContactPage />
      <div className="relative h-[400px] md:h-[600px] mt-12 md:mt-24">
        <div className="absolute inset-0 bg-gray-900/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3850.524228814834!2d0.06901300195263127!3d51.57722264197568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dcb7228a39a247%3A0x33e592d499e9b793!2sCreative%20Design%20%26%20Construction%20Ltd.!5e0!3m2!1sen!2suk!4v1719829274379!5m2!1sen!2suk"
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
            <Link
              href="https://maps.app.goo.gl/qbBpiJ11NAzBEQHM9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-red-500 text-white px-4 md:px-6 py-3 rounded-xl font-medium
hover:bg-red-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Get Directions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumContactPage;

const ContactUsCard = () => {
  return (
    <div className="relative bg-white grid sm:grid-cols-2 grid-cols-1 rounded-xl my-6 mx-2 sm:p-0 max-w-5xl sm:mx-auto shadow-2xl">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_110%)]" />
      <div className="relative sm:bg-gradient-to-r bg-gradient-to-b from-red-700 to-red-500 space-y-2 p-6 md:p-8 sm:rounded-s-xl text-white">
        <span className="text-xs font-semibold tracking-wider">
          GET IN TOUCH
        </span>
        <h2 className="text-pretty text-lg max-w-xs tracking-tight font-semibold">
          Still have questions? We'd love to hear from you. Send us a message.
        </h2>
        <p className="text-base tracking-tight text-pretty font-medium leading-6 max-w-xs text-gray-100">
          Book a consultation with our team to discuss your project and receive
          a quote. Contact us via phone, email, or our contact form below.
          <br />
        </p>
        <p className="text-base font-semibold tracking-tight text-pretty">
          Your future project is just a message away.
        </p>
      </div>
      <div className="bg-white p-6 md:p-8 sm:rounded-e-xl rounded-b-xl text-black">
        <span className="text-xs font-semibold tracking-wider">
          CONTACT INFO
        </span>
        <div className="sm:flex items-center gap-4">
          <Image
            src="https://cdc.construction/images/CDC_LOGO.svg"
            alt="CDC Logo"
            height={100}
            width={100}
            className="size-16 sm:flex-shrink-0"
          />
          <h3 className="text-2xl tracking-tighter font-semibold text-pretty sm:block hidden">
            Creative Design & Construction
          </h3>
        </div>
        <div className="space-y-2">
          <div className="flex gap-2 items-center text-gray-800">
            <MapPlus className="size-4" />
            <span className="text-pretty font-semibold tracking-tight text-sm text-gray-700">
              Captain Kens Grove, Mitchlestown, CO Cork, Ireland
            </span>
          </div>
          <div className="flex gap-2 items-center text-gray-800">
            <Phone className="size-4" />
            <span className="text-pretty font-semibold tracking-tight text-sm text-gray-700">
              (+44) 020 8004 3327
            </span>
          </div>
          <div className="flex gap-2 items-center text-gray-800">
            <Mail className="size-4" />
            <span className="text-pretty font-semibold tracking-tight text-sm text-gray-700">
              info@cdc.construction
            </span>
          </div>
        </div>
        <div className="mt-4 space-x-4">
          <Button
            variant="secondary"
            className="rounded-full bg-red-600 text-white text-sm font-semibold px-6 py-5 tracking-tight text-pretty hover:bg-red-800"
          >
            <Mail />
            Send Mail
          </Button>
          <Button className="rounded-full text-white text-sm font-semibold px-6 py-5 tracking-tight text-pretty hover:bg-neutral-700">
            <PhoneCall />
            Call Us Now
          </Button>
        </div>
      </div>
    </div>
  );
};
const ContactInfo = {
  email: "info@cdc.construction",
  phone: "02080043327", // International format for href
  phoneDisplay: "020-8004-3327", // Display format
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-8xl mx-auto mt-10">
        {/* Main Content */}

        <div className="flex flex-col lg:flex-row mx-4 lg:mx-8 xl:mx-16 mb-20 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Panel */}

          <div className="lg:w-2/5 bg-gradient-to-br from-red-600 to-red-700 text-white p-12 xl:p-16">
            <div className="sticky top-16">
              <h2 className="text-3xl font-light mb-2">Get in touch</h2>

              <div className="h-1 w-20 bg-white mb-8"></div>
              <div className="space-y-6">
                {/* Phone Box */}
                <Link
                  href={`tel:${ContactInfo?.phone}`}
                  className="block bg-white/10 rounded-2xl p-4 border-2 border-white/20 hover:border-white transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-white p-2.5 rounded-lg group-hover:bg-red-50 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-red-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-white">
                        Call Us
                      </h3>

                      <p className="text-red-100 text-sm mb-1">
                        Monday to Saturday, 9am - 6pm
                      </p>

                      <span className="text-white font-medium inline-flex items-center space-x-2 group-hover:text-red-200">
                        {ContactInfo.phoneDisplay}
                      </span>
                    </div>
                  </div>
                </Link>
                {/* Email Box */}
                <Link
                  href={`mailto:${ContactInfo.email}`}
                  className="block bg-white/10 rounded-2xl p-4 border-2 border-white/20 hover:border-white transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-white p-2.5 rounded-lg group-hover:bg-red-50 transition-colors duration-300">
                      <MessageSquare className="w-5 h-5 text-red-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-white">
                        Email Us
                      </h3>

                      <p className="text-red-100 text-sm mb-1">
                        We'll get back to you within 24 hours
                      </p>

                      <span className="text-white font-medium inline-flex items-center space-x-2 group-hover:text-red-200">
                        {ContactInfo?.email}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Address Box */}
                <div className="bg-white/10 rounded-2xl p-4 border-2 border-white/20 hover:border-white transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start space-x-6">
                    <div className="bg-white p-2.5 rounded-lg group-hover:bg-red-50 transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-red-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-white">
                        Visit Us
                      </h3>

                      <p className="text-red-100 text-sm mb-1">
                        Our office is located at
                      </p>

                      <Link
                        href="https://maps.app.goo.gl/qbBpiJ11NAzBEQHM9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-200 font-medium group-hover:underline"
                      >
                        595a Cranbrook Road
                        <br />
                        Ilford, IG2 6JZ
                        <br />
                        United Kingdom
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Hours Box */}

                <div className="bg-white/10 rounded-2xl p-4 border-2 border-white/20 hover:border-white transition-all duration-300 group">
                  <div className="flex items-start space-x-6">
                    <div className="bg-white p-2.5 rounded-lg group-hover:bg-red-50 transition-colors duration-300">
                      <Clock className="w-5 h-5 text-red-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-white">
                        Office Hours
                      </h3>
                      <div className="text-red-100 space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>

                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}

          <div className="lg:w-3/5 bg-white p-12 xl:p-16">
            <h2 className="text-4xl font-light text-gray-900 mb-3">
              Begin Your Journey
            </h2>

            <div className="h-1 w-20 bg-red-500 mb-6"></div>

            <p className="text-gray-600 mb-9 text-lg">
              Our team is dedicated to providing you with the best possible
              experience. Share your vision with us, and let's create something
              extraordinary together.
            </p>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                <div className="space-y-1">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    className="w-full h-12 focus-visible:ring-1 focus-visible:ring-red-500  transition-all duration-300 appearance-none"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full h-12 focus-visible:ring-1 focus-visible:ring-red-500  transition-all duration-300 appearance-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="w-full h-12 focus-visible:ring-1 focus-visible:ring-red-500  transition-all duration-300 appearance-none"
                    placeholder="7012345678"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="Project Type">Project Type</Label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select Project Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      {[...services, { title: "Others" }].map((item, index) => (
                        <SelectItem key={index} value={item.title}>
                          {item.title}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="Project Description">Project Description</Label>
                <Textarea
                  rows={4}
                  required
                  className="w-full focus-visible:ring-1 focus-visible:ring-red-500  transition-all duration-300 appearance-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-red-500 text-white h-12 rounded-xl text-base font-semibold hover:bg-red-600 transition-all duration-300 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
