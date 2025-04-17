"use client";

import React from "react";

import { Shield } from "lucide-react";

const ProjectSidebarForm = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <Shield className="w-5 h-5 text-red-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          Book a Consultation
        </h3>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        Get advice on your project from our team.
      </p>
      <form
        action="https://formsubmit.co/5816823931b012af1e484db76c2780ac"
        method="POST"
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            type="hidden"
            name="submit_through"
            value="project_sidebar_form"
          />
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg transition-colors duration-200"
        >
          Book a Consultation
        </button>
      </form>
    </div>
  );
};

export default ProjectSidebarForm;
