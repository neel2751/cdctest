"use client";
import React, { useState } from "react";

import { Info, Wrench, Shield, HelpCircle, Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const faqCategories = [
    {
      title: "General Information",

      icon: Info,

      description:
        "Learn about CDC Construction's legacy of excellence and our commitment to innovative building solutions.",

      questions: [
        {
          q: "Who is CDC Construction?",

          a: "CDC Construction is an elite construction company established in 2018, renowned for delivering innovative, high-performance, and sustainable construction solutions. With a portfolio of prestigious projects across the UK, we combine architectural excellence with sustainable building practices to create exceptional spaces that stand the test of time.",
        },

        {
          q: "What services does CDC Construction offer?",

          a: "We provide comprehensive construction services tailored to discerning clients:\n\n• Architectural Design & Planning\n• Luxury Home Construction\n• High-end Commercial Development\n• Bespoke Renovations\n• Premium Loft Conversions\n• Sustainable Building Solutions\n• Commercial Fit-outs\n\nEach service is delivered with meticulous attention to detail and uncompromising quality standards.",
        },

        {
          q: "What makes CDC Construction unique?",

          a: "CDC Construction stands apart through our commitment to excellence:\n\n• Award-winning architectural designs\n• Innovative sustainable building practices\n• Premium material selection\n• Advanced construction technologies\n• Dedicated project management\n• Industry-leading warranties\n• Comprehensive after-care service\n\nOur holistic approach ensures every project exceeds expectations while maintaining the highest standards of craftsmanship.",
        },

        {
          q: "How experienced is CDC Construction?",

          a: "With over 30 years of combined industry expertise, our team has successfully delivered projects valued at over £100 million. Our portfolio includes landmark developments, luxury residences, and innovative commercial spaces across the UK. Each member of our leadership team brings specialized expertise from prestigious construction backgrounds, ensuring world-class execution on every project.",
        },
      ],
    },

    {
      title: "Premium Services",

      icon: Wrench,

      description:
        "Discover our comprehensive range of high-end construction and design services.",

      questions: [
        {
          q: "What distinguishes CDC Construction's architectural design services?",

          a: "Our architectural design service combines cutting-edge technology with timeless aesthetics:\n\n• 3D visualization and virtual reality walkthroughs\n• Sustainable design integration\n• Smart home technology planning\n• Custom material selection\n• Energy efficiency optimization\n• Biophilic design elements\n\nEach design is crafted to create spaces that inspire and endure.",
        },

        {
          q: "How does CDC Construction ensure project excellence?",

          a: "We maintain excellence through our comprehensive project management approach:\n\n• Dedicated project managers\n• Real-time progress tracking\n• Quality control at every stage\n• Regular client consultations\n• Detailed documentation\n• Strict timeline adherence\n• Budget optimization\n\nThis systematic approach ensures consistent delivery of exceptional results.",
        },

        {
          q: "What innovative technologies does CDC Construction employ?",

          a: "We leverage cutting-edge construction technologies:\n\n• BIM (Building Information Modeling)\n• Drone site surveys\n• 3D printing capabilities\n• Smart building systems\n• Energy modeling software\n• Advanced material testing\n• IoT integration\n\nThese technologies enable us to deliver superior results while optimizing efficiency.",
        },
      ],
    },

    {
      title: "Quality Assurance",

      icon: Shield,

      description:
        "Understanding our commitment to excellence and client protection.",

      questions: [
        {
          q: "What quality standards does CDC Construction maintain?",

          a: "We uphold the highest industry standards:\n\n• ISO 9001:2015 certification\n• BREEAM excellence ratings\n• RIBA compliance\n• Sustainable construction practices\n• Regular third-party audits\n• Comprehensive quality management system\n\nOur commitment to quality is unwavering and documented at every project stage.",
        },

        {
          q: "What warranties and guarantees does CDC Construction offer?",

          a: "Our comprehensive warranty package includes:\n\n• 10-year structural warranty\n• 5-year workmanship guarantee\n• 2-year mechanical systems warranty\n• Manufacturer warranties on all materials\n• Extended warranty options available\n• Regular maintenance programs\n\nAll backed by our substantial insurance coverage and financial stability.",
        },
      ],
    },

    {
      title: "Client Experience",

      icon: HelpCircle,

      description: "Experience our premium client service and support process.",

      questions: [
        {
          q: "What is the CDC Construction client journey?",

          a: "Our premium client experience includes:\n\n• Personal project consultant\n• Detailed design consultations\n• Regular progress updates\n• Virtual reality presentations\n• Material selection support\n• Timeline planning\n• Budget management\n• Post-completion care\n\nWe ensure a seamless and enjoyable journey from concept to completion.",
        },

        {
          q: "How does CDC Construction handle project communication?",

          a: "We maintain transparent and efficient communication through:\n\n• Dedicated client portal\n• Weekly progress reports\n• 24/7 emergency contact\n• Regular site meetings\n• Digital documentation access\n• Video conference updates\n• Professional photography\n\nEnsuring you're always informed and involved in your project's progress.",
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
          <div className="inline-block">
            <span
              className="px-4 py-1 rounded-full bg-red-50 text-red-600 text-sm font-semibold mb-4 inline-block

animate-fade-in-up"
            >
              Knowledge Center
            </span>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how CDC Construction is setting new standards in premium
            construction and architectural excellence.
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
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-lg font-semibold rounded-xl

text-white bg-red-500 hover:bg-red-600 hover:border-red-600 transition-all duration-300

transform hover:scale-105 hover:-translate-y-1"
            >
              Schedule a Consultation
            </a>

            <a
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-xl

text-white hover:bg-white hover:text-gray-900 transition-all duration-300

transform hover:scale-105 hover:-translate-y-1"
            >
              View Our Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
