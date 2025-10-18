"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface EventDetailSectionProps {
  title: string
  description: string[]
  image?: string
  variant?: "blue" | "orange"
}

export function EventDetailSection({ title, description, image, variant = "blue" }: EventDetailSectionProps) {
  const isBlue = variant === "blue"

  return (
    <section className="relative overflow-hidden">
      <div className={`flex flex-col ${isBlue ? "md:flex-row" : "md:flex-row-reverse"} min-h-[600px]`}>
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: isBlue ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`w-full md:w-1/3 ${isBlue ? "bg-[#FDB913]" : "bg-[#1B4F9C]"} p-8 md:p-12 flex items-center justify-center relative`}
        >
          <div className="relative w-full max-w-sm">
            {/* Decorative Corner */}
            <div className={`absolute -top-4 -left-4 w-20 h-20 ${isBlue ? "bg-[#FDB913]" : "bg-[#1B4F9C]"} z-10`} />
            <div className={`absolute -bottom-4 -right-4 w-20 h-20 ${isBlue ? "bg-[#1B4F9C]" : "bg-[#FDB913]"} z-10`} />

            {/* Dynamic Image Support */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 relative shadow-2xl overflow-hidden"
            >
              {image && <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: isBlue ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`w-full md:w-2/3 ${isBlue ? "bg-[#1B4F9C]" : "bg-[#FDB913]"} p-8 md:p-16 flex flex-col justify-center`}
        >
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 ${isBlue ? "text-[#FDB913]" : "text-white"}`}>
            {title}
          </h2>

          <div className="space-y-6 mb-8">
            {description.map((paragraph, index) => (
              <p key={index} className="text-white text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              className={`${
                isBlue ? "bg-white text-[#1B4F9C] hover:bg-gray-100" : "bg-white text-[#FDB913] hover:bg-gray-100"
              } font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg px-6 py-6 text-sm md:text-base`}
            >
              Join Us
            </Button>
            <Link href="https://www.linkedin.com/company/rotary-club-of-bengal-presidency/" target="_blank">
              <Button
                className={`${
                  isBlue
                    ? "bg-[#FDB913] hover:bg-[#E5A500] text-[#1B4F9C]"
                    : "bg-[#1B4F9C] hover:bg-[#163D7C] text-white"
                } font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg px-6 py-6 text-sm md:text-base`}
              >
                LinkedIn
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
