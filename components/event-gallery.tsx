"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface EventGalleryProps {
  images?: string[]
}

export function EventGallery({ images = [] }: EventGalleryProps) {
  const galleryImages =
    images.length > 0 ? images : Array.from({ length: 9 }, (_, i) => `/placeholder.svg?height=400&width=400&key=${i}`)

  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[800px]">
        {/* Left Side - Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 bg-[#FDB913] p-8 md:p-12 flex items-start justify-center"
        >
          <div className="mt-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Event
              <br />
              Gallery
            </h2>
          </div>
        </motion.div>

        {/* Right Side - Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-2/3 bg-[#1B4F9C] p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
            {/* Large Image - Top Left */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="col-span-2 row-span-2 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg cursor-pointer overflow-hidden group relative"
            >
              {galleryImages[0] && (
                <Image
                  src={galleryImages[0] || "/placeholder.svg"}
                  alt="Gallery image 1"
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-[#FDB913]/0 group-hover:bg-[#FDB913]/20 transition-all duration-500" />
            </motion.div>

            {/* Small Image - Top Right */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg cursor-pointer overflow-hidden group relative"
            >
              {galleryImages[1] && (
                <Image
                  src={galleryImages[1] || "/placeholder.svg"}
                  alt="Gallery image 2"
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-[#FDB913]/0 group-hover:bg-[#FDB913]/20 transition-all duration-500" />
            </motion.div>

            {/* Small Image - Middle Right */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg cursor-pointer overflow-hidden group relative"
            >
              {galleryImages[2] && (
                <Image
                  src={galleryImages[2] || "/placeholder.svg"}
                  alt="Gallery image 3"
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-[#FDB913]/0 group-hover:bg-[#FDB913]/20 transition-all duration-500" />
            </motion.div>

            {/* Bottom Row - Three Equal Images */}
            {[3, 4, 5].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg cursor-pointer overflow-hidden group relative"
              >
                {galleryImages[i] && (
                  <Image
                    src={galleryImages[i] || "/placeholder.svg"}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-[#FDB913]/0 group-hover:bg-[#FDB913]/20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
