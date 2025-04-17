import { Check, Download, UsersRound } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full overflow-hidden py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-red-800 via-red-700 to-red-600 rounded-3xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 relative">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-white/80 font-medium uppercase tracking-tight mb-4 text-sm">
                Ready to dive in?
              </p>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Contact us today and
                <br /> get a free consultation
              </h2>

              <p className="text-white/80 text-lg mb-10 max-w-lg">
                Our team is here to help you every step of the way. From
                consultation to implementation, we'll work with you to create a
                customized solution that meets your unique needs and goals.
              </p>

              {/* Horizontal feature list */}
              <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-white" />
                  <span className="text-white whitespace-nowrap">
                    Expert Guidance
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-white" />
                  <span className="text-white whitespace-nowrap">
                    Customized Solutions
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-white" />
                  <span className="text-white whitespace-nowrap">
                    Free Quote
                  </span>
                </div>
              </div>

              <div className="space-x-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-white text-red-700 font-medium hover:bg-red-600 hover:text-white transition-colors "
                >
                  <Link href={"/team"}>Meet Our Team</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent rounded-full h-12 font-medium text-white hover:bg-white hover:text-red-700 transition-colors"
                >
                  <Link href={"#"}>Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Right Content - UI Mockups */}
            <div className="relative h-full w-full">
              <img
                src="https://res.cloudinary.com/drcjzx0sw/image/upload/v1744819598/image_12_yrpigt.png"
                alt="UI Mockups"
                className="w-5/6 h-96 -bottom-2 right-0  object-cover rounded-tl-xl absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
