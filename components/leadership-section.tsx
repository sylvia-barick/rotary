"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface LeadershipSectionProps {
  title: string
  description: string
  variant: "blue" | "gold"
  imageSide: "left" | "right"
}

export function LeadershipSection({ title, description, variant, imageSide }: LeadershipSectionProps) {
  const isBlue = variant === "blue"
  const isLeft = imageSide === "left"

  return (
    <section className={`py-16 ${isBlue ? "bg-[#1B4F9C]" : "bg-[#FDB913]"}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12`}>
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] bg-gray-300 rounded-lg overflow-hidden group">
              <div
                className={`absolute ${isLeft ? "top-0 left-0" : "bottom-0 right-0"} w-20 h-20 ${isBlue ? "bg-[#FDB913]" : "bg-[#1B4F9C]"} transition-all duration-500 group-hover:w-24 group-hover:h-24`}
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <span className="text-sm">Leadership Photo</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="space-y-6">
              <div>
                <p className={`text-sm font-semibold mb-2 ${isBlue ? "text-[#FDB913]" : "text-white"}`}>The</p>
                <h2 className={`text-4xl md:text-5xl font-bold ${isBlue ? "text-[#FDB913]" : "text-white"}`}>
                  {title}
                </h2>
              </div>
              <p className={`text-base leading-relaxed ${isBlue ? "text-white" : "text-[#1B4F9C]"}`}>{description}</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  variant="outline"
                  className={`${isBlue ? "border-white text-white hover:bg-white hover:text-[#1B4F9C]" : "border-[#1B4F9C] text-[#1B4F9C] hover:bg-[#1B4F9C] hover:text-white"} transition-all duration-300 hover:scale-105`}
                >
                  PRESIDENTIAL LETTER
                </Button>
                <Button
                  className={`${isBlue ? "bg-[#FDB913] hover:bg-[#E5A500] text-[#1B4F9C]" : "bg-[#1B4F9C] hover:bg-[#0F2E5C] text-white"} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
