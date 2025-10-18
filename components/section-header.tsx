"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  variant?: "blue-gold" | "gold-blue"
}

export function SectionHeader({ title, variant = "blue-gold" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: variant === "blue-gold" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative h-20 md:h-24 overflow-hidden"
    >
      <div className="absolute inset-0 flex">
        {variant === "blue-gold" ? (
          <>
            <div className="w-1/4 md:w-1/3 bg-[#1B4F9C] transform skew-x-[-10deg] origin-bottom-left -ml-8" />
            <div className="flex-1 bg-[#FDB913]" />
          </>
        ) : (
          <>
            <div className="w-1/4 md:w-1/3 bg-[#FDB913] transform skew-x-[-10deg] origin-bottom-left -ml-8" />
            <div className="flex-1 bg-[#1B4F9C]" />
          </>
        )}
      </div>
      <div className="relative h-full flex items-center justify-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white text-center px-4">{title}</h2>
      </div>
    </motion.div>
  )
}
