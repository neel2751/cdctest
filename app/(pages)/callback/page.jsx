"use client";

import React, { useState } from "react";

import { Phone, Clock, Calendar, ArrowRight, X } from "lucide-react";

const RequestCallback = () => {
  const [formData, setFormData] = useState({
    name: "",

    phone: "",

    email: "",

    preferredTime: "",

    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Email configuration

  const EMAIL_CONFIG = {
    recipientEmail: "####@####.com", // Replace with actual email

    emailSubject: "New Callback Request",

    emailTemplate: (data) => `

New Callback Request Details:


Name: ${data.name}

Phone: ${data.phone}

Email: ${data.email}

Preferred Time: ${data.preferredTime}

Message: ${data.message || "No message provided"}


Submitted on: ${new Date().toLocaleString()}

`,
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s+()-]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please select your preferred time";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: value,
    }));

    // Clear error when user starts typing

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,

        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      try {
        // Send email API call

        const response = await fetch("/api/send-email", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...formData,

            subject: EMAIL_CONFIG.emailSubject,

            template: EMAIL_CONFIG.emailTemplate(formData),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send request");
        }

        setSubmitSuccess(true);

        setFormData({
          name: "",

          phone: "",

          email: "",

          preferredTime: "",

          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);

        alert("There was an error submitting your request. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const timeSlots = [
    "09:00 - 11:00",

    "11:00 - 13:00",

    "14:00 - 16:00",

    "16:00 - 18:00",
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 sm:py-16 max-w-7xl">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}

          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Request a Callback
            </h1>

            <p className="text-gray-600 text-base sm:text-lg">
              Leave your details and we'll call you back at your preferred time
            </p>
          </div>

          {/* Benefits Section */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Phone className="w-6 h-6 text-red-500" strokeWidth={1.5} />
              </div>

              <h3 className="font-semibold mb-2 text-gray-900">
                Expert Consultation
              </h3>

              <p className="text-gray-600 text-sm">
                Speak directly with our design specialists
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Clock className="w-6 h-6 text-red-500" strokeWidth={1.5} />
              </div>

              <h3 className="font-semibold mb-2 text-gray-900">
                Flexible Timing
              </h3>

              <p className="text-gray-600 text-sm">
                Choose a time that works best for you
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Calendar className="w-6 h-6 text-red-500" strokeWidth={1.5} />
              </div>

              <h3 className="font-semibold mb-2 text-gray-900">
                Quick Response
              </h3>

              <p className="text-gray-600 text-sm">
                Get a callback within 24 hours
              </p>
            </div>
          </div>

          {/* Form Section */}

          <div className="bg-white rounded-2xl shadow-sm border p-4 sm:p-8">
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Thank You!
                </h3>

                <p className="text-gray-600 mb-6">
                  We've received your request and will call you back at your
                  preferred time.
                </p>

                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors"
                >
                  Submit another request
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-base

${errors.name ? "border-red-500" : "border-gray-300"}`}
                      placeholder="Enter your full name"
                    />

                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-base

${errors.phone ? "border-red-500" : "border-gray-300"}`}
                      placeholder="Enter your phone number"
                    />

                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-base

${errors.email ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Enter your email address"
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Callback Time *
                  </label>

                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-base

${errors.preferredTime ? "border-red-500" : "border-gray-300"}`}
                  >
                    <option value="">Select a time slot</option>

                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>

                  {errors.preferredTime && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.preferredTime}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message (Optional)
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-base"
                    placeholder="Tell us about your project or any specific requirements"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-lg font-medium

hover:bg-red-600 transition-colors flex items-center justify-center min-h-[48px]

${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>

                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Request Callback"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Additional Information */}

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              By submitting this form, you agree to our{" "}
              <a href="/terms" className="text-red-500 hover:text-red-600">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-red-500 hover:text-red-600">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestCallback;
