"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"
import Link from "next/link"

interface FlagshipEventProps {
  title: string
  description: string
  variant: "blue" | "orange"
  buttonText?: string
}

export function FlagshipEvent({ title, description, variant, buttonText = "COMPLETE DETAILS" }: FlagshipEventProps) {
  const isBlue = variant === "blue"
  const eventSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-")

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative py-16 md:py-20 ${isBlue ? "bg-[#1B4F9C]" : "bg-[#FDB913]"}`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isBlue ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12`}>
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: isBlue ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-2xl group">
              {/* Decorative Corner */}
              <div
                className={`absolute top-0 left-0 w-20 h-20 ${isBlue ? "bg-[#FDB913]" : "bg-[#1B4F9C]"} transform -translate-x-4 -translate-y-4 transition-all duration-500 group-hover:scale-110`}
              />
              <div
                className={`absolute bottom-0 right-0 w-32 h-32 ${isBlue ? "bg-[#1B4F9C]" : "bg-[#FDB913]"} transform translate-x-8 translate-y-8 transition-all duration-500 group-hover:scale-110`}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: isBlue ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isBlue ? "text-[#FDB913]" : "text-white"}`}>
              {title}
            </h2>
            <p className={`text-base md:text-lg leading-relaxed ${isBlue ? "text-white" : "text-white"}`}>
              {description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href={`/events/${eventSlug}`}>
                <Button
                  className={`${
                    isBlue ? "bg-white text-[#1B4F9C] hover:bg-gray-100" : "bg-[#1B4F9C] text-white hover:bg-[#0F2E5C]"
                  } font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl px-6 py-6 text-sm md:text-base`}
                >
                  {buttonText}
                </Button>
              </Link>
              <Button
                className={`${
                  isBlue
                    ? "bg-[#FDB913] text-[#1B4F9C] hover:bg-[#E5A500]"
                    : "bg-[#1B4F9C] text-white hover:bg-[#0F2E5C]"
                } font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl px-6 py-6`}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute top-0 ${isBlue ? "left-0" : "right-0"} w-24 md:w-32 h-24 md:h-32 ${
          isBlue ? "bg-[#FDB913]" : "bg-[#1B4F9C]"
        } transform ${isBlue ? "-translate-x-12 -translate-y-12" : "translate-x-12 -translate-y-12"}`}
      />
      <div
        className={`absolute bottom-0 ${isBlue ? "right-0" : "left-0"} w-32 md:w-40 h-32 md:h-40 ${
          isBlue ? "bg-[#FDB913]" : "bg-[#1B4F9C]"
        } transform ${isBlue ? "translate-x-16 translate-y-16" : "-translate-x-16 translate-y-16"}`}
      />
    </motion.section>
  )
}
