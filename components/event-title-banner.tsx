"use client"

import { motion } from "framer-motion"

interface EventTitleBannerProps {
  title: string
}

export function EventTitleBanner({ title }: EventTitleBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center min-h-[200px] md:min-h-[250px]"
      >
        {/* Blue Section with Title */}
        <div className="w-full md:w-2/3 bg-[#1B4F9C] p-8 md:p-16 relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">{title}</h1>
          {/* Diagonal Cut */}
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[200px] md:border-t-[250px] border-t-transparent border-r-[80px] md:border-r-[120px] border-r-[#FDB913]" />
        </div>

        {/* Orange Section */}
        <div className="hidden md:block w-1/3 bg-[#FDB913] h-[200px] md:h-[250px]" />
      </motion.div>
    </section>
  )
}
