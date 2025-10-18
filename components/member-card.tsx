"use client"

import { motion } from "framer-motion"

interface MemberCardProps {
  name?: string
  description?: string
  index: number
}

export function MemberCard({ name = "Full Name", description, index }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        {/* Image Placeholder */}
        <div className="aspect-[3/4] bg-gray-300 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            <span className="text-sm">Member Photo</span>
          </div>
          <div className="absolute inset-0 bg-[#1B4F9C]/0 group-hover:bg-[#1B4F9C]/10 transition-all duration-300" />
        </div>

        {/* Member Info */}
        <div className="bg-[#1B4F9C] p-4 text-white">
          <h3 className="font-bold text-lg mb-1">{name}</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            {description ||
              "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
