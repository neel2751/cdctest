"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Mail } from "lucide-react";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }
    setError("");
    console.log("Form submitted with email:", email);
    // Handle form submission
  };

  return (
    <section className="relative w-full overflow-hidden max-w-7xl mx-auto rounded-2xl mb-10 min-h-[500px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070")',

          backgroundSize: "cover",

          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Container */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12 text-center">
          {/* Heading with Red Shadow */}

          <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_5px_20px_rgba(239,68,68,0.7)] md:text-5xl lg:text-6xl max-w-3xl">
            Transform your vision into reality with our help
          </h2>

          {/* Description */}

          <p className="max-w-2xl text-lg text-gray-200">
            Ready to turn your vision into solid ground? We're more than
            builders, we're partners. Let's collaborate, innovate, and craft a
            space that exceeds your wildest dreams.
          </p>

          {/* Form Section */}

          <div className="w-full max-w-md">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 md:flex-row md:gap-3"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);

                    setError("");
                  }}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                />

                {error && (
                  <span className="absolute -bottom-6 left-0 text-sm text-red-400">
                    {error}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="group flex min-w-[140px] items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-white transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 md:px-6"
              >
                <span className="whitespace-nowrap">Get Started</span>

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Additional Contact Info */}

          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-200">
            <Mail className="h-5 w-5" />

            <span>Or contact us directly at: </span>

            <a
              href="mailto:info@cdc.construction"
              className="text-red-400 hover:text-red-300 hover:underline"
            >
              info@cdc.construction
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export { CTA };
