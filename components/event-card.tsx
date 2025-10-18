"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface EventCardProps {
  title: string
  image?: string
  index?: number
  slug?: string
}

export function EventCard({ title, image, index = 0, slug }: EventCardProps) {
  const eventSlug =
    slug ||
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <div className="h-56 md:h-64 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
        {slug === "forum-of-diplomacy" || slug === "fod" ? (
          <div className="absolute inset-0 bg-white flex items-center justify-center p-4">
            <Image src="/fod9.png" alt="Forum of Diplomacy" fill className="object-contain p-4" />
          </div>
        ) : slug === "life-beyond-cancer-donation" ? (
          <div className="absolute inset-0 bg-white flex items-center justify-center p-4">
            <Image src="/life-beyond-cancer-logo.png" alt="Life Beyond Cancer" fill className="object-contain p-3" />
          </div>
        ) : slug === "matri-samman-banner-launch" ? (
          <div className="absolute inset-0 bg-white flex items-center justify-center p-4">
            <Image src="/matri-samman-logo.png" alt="Matri Samman" fill className="object-contain p-4" />
          </div>
        ) : slug === "ryla" || slug === "ryla-2025" ? (
          <div className="absolute inset-0 bg-white flex items-center justify-center p-4">
            <Image src="/ryla-logo.png" alt="RYLA" fill className="object-contain p-4" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-[#1B4F9C]/0 group-hover:bg-[#1B4F9C]/10 transition-all duration-500" />
        )}
      </div>

      {/* Content */}
      <div className="p-4 bg-[#1B4F9C] flex items-center justify-between">
        <h3 className="text-white font-semibold text-sm md:text-base">{title}</h3>
        <Link href={`/events/${eventSlug}`}>
          <Button
            size="sm"
            className="bg-[#FDB913] hover:bg-[#E5A500] text-[#1B4F9C] font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg text-xs md:text-sm"
          >
            Details
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
