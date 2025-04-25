"use client";
import React, { useState } from "react";

import {
  Info,
  Wrench,
  Shield,
  HelpCircle,
  Plus,
  Minus,
  School,
  Headset,
  Leaf,
} from "lucide-react";
import SmallCTA from "../cta/smallCTA";
import Heading from "../header/heading";
import Link from "next/link";

const FAQSection = () => {
  const faqCategories = [
    {
      title: "General Information",

      icon: Info,

      description:
        "Creative Design & Construction Limited provides architectural and construction services in United Kingdom, focusing on sustainable projects since 2018.",

      questions: [
        {
          q: "What services does Creative Design & Construction Limited provide?",

          a: "CDC is able to provide a full service from architectural design, design and build service, loft conversions renovations, basement conversions, new builds, extensions and commercial fit out. We focus on residential and commercial projects throughout London and the surrounding regions.",
        },

        {
          q: "How long has CDC been in business?",

          a: "CDC is a team established in 2018 with over 30 years of combined experience in the industry focused on high-performance, energy-efficient, and sustainable building projects.",
        },

        {
          q: "What areas does CDC serve?",

          a: "CDC operates in London and the surrounding areas, and their main office address is 595a Cranbrook Road, Ilford, IG2 6JZ, United Kingdom.",
        },
      ],
    },

    {
      title: "Insurance and Warranties",

      icon: Wrench,

      description:
        "Creative Design & Construction Limited offers up to £10 million in coverage and a upto 10-year structural warranty, ensuring quality and peace of mind for clients.",

      questions: [
        {
          q: "What types of coverage does CDC carry?",

          a: "CDC has complete coverage up to £10 million, so full peace of mind for all clients from start to finish on their construction projects.",
        },

        {
          q: "Does CDC provide warranties?",

          a: "CDC offers a upto 10-year structural warranty on their work, showcasing their dedication to quality and long-lasting customer satisfaction.",
        },
      ],
    },

    {
      title: "Project Management and Quality",

      icon: Shield,

      description:
        "Creative Design & Construction Limited ensures project quality through dedicated site engineers and strict quality assurance, while maintaining timelines with effective management and client communication.",

      questions: [
        {
          q: "Q: How does CDC ensure project quality?",

          a: "At CDC we ensure high quality by having dedicated site engineers to supervise works to ensure that the quality of work is realised through strict quality assurance process and a focus for detail. All projects are built to HSA and building code.",
        },

        {
          q: "What is CDC approach to project timelines?",

          a: "We ensure that projects are on-time through effective project management, and regular supervision and communication with the clients during the construction process.",
        },
      ],
    },

    {
      title: "Services Specific",

      icon: School,

      description:
        "Creative Design & Construction Limited handles commercial office projects, including fit-outs and new builds, and offers residential services like renovations and extensions, alongside comprehensive architectural design services.",

      questions: [
        {
          q: "What types of commercial projects does CDC handle?",

          a: "CDC is focused on building commercial office space with a mix of work from fit-outs, renovations and new construction. Among the noteworthy projects is the work at Harbour Exchange Square in Canary Wharf and Centro Office Space in Guildford.",
        },

        {
          q: "What residential services does CDC offer?",

          a: "We offer residential services including full house renovations, loft conversions, basement conversions, extensions and new builds. We take projects from design through construction.",
        },
        {
          q: "Does CDC provide architectural design services?",

          a: "Absolutely, with the ability to communicate with a design team early on, CDC can facilitate design choices that can enhance the project without blowing the budget; we can bring your vision into physical reality",
        },
      ],
    },

    {
      title: "Customer Support",

      icon: Headset,

      description:
        "Creative Design & Construction Limited provides comprehensive after-care support and offers free quotes via phone, email, or their website contact form.",

      questions: [
        {
          q: "What kind of after-care support does CDC provide?",

          a: "CDC offers comprehensive after-care services to ensure a smooth transition into new spaces and provides ongoing support for all completed projects.",
        },

        {
          q: "Q: How can I get a quote for my construction project?",

          a: "A: You can request a free quote by contacting Creative Design & Construction Limited at 020-8004-3327, emailing info@cdc.construction, or filling out the contact form on their website.",
        },
      ],
    },

    {
      title: "Technical Expertise",

      icon: Leaf,

      description:
        "Creative Design & Construction Limited emphasizes sustainability through energy-efficient building practices, offers tailored construction solutions, and distinguishes itself with exceptional customer service and quality control.",

      questions: [
        {
          q: "What steps does CDC take to become more sustainable?",

          a: "CDC focuses on creating energy-efficient, sustainable buildings by incorporating the latest manufacturing technologies and current methods in construction.",
        },

        {
          q: "What customization can CDC provide for a project?",

          a: "We developed tailored construction solutions as per each project, collaborating with clients to customize designs and specifications to their particular needs and vision.",
        },
        {
          q: "What makes CDC different than any other contractor?",

          a: "CDC stands out due to its focus on customer service, successful projects history, full insurance coverage, experienced professionals, and quality control.",
        },
      ],
    },
  ];
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleQuestion = (categoryIndex, questionIndex) => {
    setExpandedQuestions((prev) => ({
      ...prev,

      [`${categoryIndex}-${questionIndex}`]:
        !prev[`${categoryIndex}-${questionIndex}`],
    }));
  };

  return (
    <section
      className={`bg-gradient-to-b from-gray-50 to-white py-24 transition-opacity duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header with Animation */}

        <div
          className={`text-center mb-20 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <SmallCTA text={"Knowledge Center"} />
          <Heading title={"Frequently Asked"} subtitle={"Questions"} />

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Discover how Creative Design & Construction is setting new standards
            in premium construction and architectural excellence.
          </p>
        </div>

        {/* Enhanced FAQ Categories with Animations */}

        <div className="grid grid-cols-1 gap-10">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform

${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-md

transform transition-transform duration-500 hover:scale-105"
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>

                    <p className="text-gray-600 mt-1">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Questions with Smooth Animations */}

              <div className="space-y-6">
                {category.questions.map((item, questionIndex) => (
                  <div
                    key={questionIndex}
                    className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50 hover:bg-gray-100

transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    <button
                      className="w-full text-left px-8 py-6 flex items-center justify-between

transition-colors duration-300"
                      onClick={() =>
                        toggleQuestion(categoryIndex, questionIndex)
                      }
                    >
                      <span className="font-semibold text-lg text-gray-900 pr-8">
                        {item.q}
                      </span>

                      <span className="ml-6 flex-shrink-0 transition-transform duration-300">
                        {expandedQuestions[
                          `${categoryIndex}-${questionIndex}`
                        ] ? (
                          <Minus className="w-6 h-6 text-red-500 transform rotate-0" />
                        ) : (
                          <Plus className="w-6 h-6 text-gray-400 transform rotate-90" />
                        )}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden

${
  expandedQuestions[`${categoryIndex}-${questionIndex}`]
    ? "max-h-[1000px] opacity-100"
    : "max-h-0 opacity-0"
}`}
                    >
                      <div className="px-8 pb-6">
                        <div className="prose prose-lg max-w-none">
                          {item.a.split("\n\n").map((paragraph, i) => (
                            <p
                              key={i}
                              className="text-gray-600 whitespace-pre-line transform transition-all duration-500"
                              style={{ transitionDelay: `${i * 100}ms` }}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA with Animation */}

        <div
          className={`mt-20 text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12

transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Premium Project?
          </h3>

          <p className="text-gray-300 mb-8 text-lg">
            Connect with our expert team to discuss your vision and explore the
            possibilities.
          </p>

          <div className="space-x-4">
            <Link
              href="/contactus"
              className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-lg font-semibold rounded-xl

text-white bg-red-500 hover:bg-red-600 hover:border-red-600 transition-all duration-300

transform hover:scale-105 hover:-translate-y-1"
            >
              Schedule a Consultation
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-xl

text-white hover:bg-white hover:text-gray-900 transition-all duration-300

transform hover:scale-105 hover:-translate-y-1"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
