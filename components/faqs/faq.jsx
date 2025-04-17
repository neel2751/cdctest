"use client";

import React, { useState } from "react";

import { ChevronDown } from "lucide-react";

const FAQSection = ({ faqItems }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center">
            <span className="px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-medium">
              FAQ
            </span>
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about our architectural design services
          </p>
        </div>

        {/* FAQ Items */}

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqItems?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left px-6 py-5 flex items-center gap-4"
                aria-expanded={expandedIndex === index}
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-grow">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-8">
                    {item.question}
                  </h3>
                </div>

                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  expandedIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-gray-600">{item.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
