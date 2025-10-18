import { Button } from "@/components/ui/button"
import { SectionHeader } from "./section-header"
import { Newspaper, Bell, Mail, Calendar } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-16 bg-gray-50">
      <SectionHeader title="Presidency Patrika- Our Newsletter" variant="gold-blue" />

      <div className="container mx-auto px-4 mt-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left animate-slide-in-up">
            <div className="inline-block">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">প্রেসিডেন্সি</h3>
              <h2 className="text-5xl md:text-6xl font-bold text-[#1B4F9C]">পত্রিকা</h2>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0">
              Stay connected with our club's latest activities, inspiring stories, and community impact through our
              monthly newsletter.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FDB913] to-[#E5A500] rounded-full text-[#1B4F9C] font-semibold shadow-lg animate-pulse">
              <Bell className="w-4 h-4" />
              <span>Coming Soon</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button disabled className="bg-gray-300 text-gray-500 cursor-not-allowed opacity-60">
                <Mail className="w-4 h-4 mr-2" />
                Notify Me
              </Button>
            </div>
          </div>

          <div className="relative group">
            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#1B4F9C] transition-all duration-300 group-hover:w-32 group-hover:h-32" />

            {/* Coming Soon Card */}
            <div className="h-96 bg-gradient-to-br from-[#1B4F9C] to-[#0F2E5C] rounded-lg transition-transform duration-500 group-hover:scale-[1.02] flex items-center justify-center relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-ping"
                  style={{ animationDuration: "3s" }}
                />
                <div
                  className="absolute bottom-10 right-10 w-24 h-24 border-4 border-[#FDB913] rounded-full animate-ping"
                  style={{ animationDuration: "4s", animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-white rounded-full animate-ping"
                  style={{ animationDuration: "5s", animationDelay: "2s" }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center space-y-6 p-8">
                <div className="flex justify-center">
                  <div className="relative">
                    <Newspaper
                      className="w-24 h-24 text-[#FDB913] animate-bounce"
                      style={{ animationDuration: "2s" }}
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FDB913] rounded-full flex items-center justify-center">
                      <span className="text-[#1B4F9C] text-xs font-bold">!</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white">Launching Soon</h3>
                  <p className="text-gray-300 text-sm">Our first edition is being crafted with care</p>
                </div>

                <div className="flex items-center justify-center gap-2 text-[#FDB913]">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-semibold">Stay Tuned</span>
                </div>

                {/* Decorative dots */}
                <div className="flex justify-center gap-2 pt-4">
                  <div className="w-2 h-2 bg-[#FDB913] rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-[#FDB913] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="w-2 h-2 bg-[#FDB913] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
