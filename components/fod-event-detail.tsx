"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface FodEventDetailProps {
  title: string
  description: string[]
  image?: string
  gallery: string[]
}

export function FodEventDetail({ title, description, image, gallery }: FodEventDetailProps) {
  return (
    <>
      {/* Hero Section with Diagonal Split */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4">
                <span className="bg-[#1B4F9C] text-white px-4 py-2 text-sm font-semibold tracking-wide">
                  MARCH 1-2, 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B4F9C] mb-6 leading-tight">
                Rotary Forum of
                <span className="block text-[#FDB913]">Diplomacy 2025</span>
              </h1>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
                {description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#1B4F9C] hover:bg-[#163D7C] text-white px-8 py-6 text-base font-semibold">
                  Register Now
                </Button>
                <Link href="https://www.linkedin.com/company/rotary-club-of-bengal-presidency/" target="_blank">
                  <Button
                    variant="outline"
                    className="border-2 border-[#1B4F9C] text-[#1B4F9C] hover:bg-[#1B4F9C] hover:text-white px-8 py-6 text-base font-semibold bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Image with Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 max-w-md mx-auto">
                {image && (
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain p-8" />
                  </div>
                )}
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#FDB913] rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#1B4F9C] rounded-full opacity-20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Unique Layout */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F9C] mb-4">Event Highlights</h2>
            <p className="text-gray-600 text-lg">Moments from our previous Model UN conferences</p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-4">
            {/* Top row - 3 square images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl"
              >
                <div className="relative aspect-square">
                  <Image src={gallery[0] || "/placeholder.svg"} alt="FOD Event 1" fill className="object-cover" />
                  <div className="absolute inset-0 bg-[#1B4F9C]/0 group-hover:bg-[#1B4F9C]/20 transition-all duration-300" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl"
              >
                <div className="relative aspect-square">
                  <Image src={gallery[1] || "/placeholder.svg"} alt="FOD Event 2" fill className="object-cover" />
                  <div className="absolute inset-0 bg-[#1B4F9C]/0 group-hover:bg-[#1B4F9C]/20 transition-all duration-300" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl"
              >
                <div className="relative aspect-square">
                  <Image src={gallery[3] || "/placeholder.svg"} alt="FOD Event 4" fill className="object-cover" />
                  <div className="absolute inset-0 bg-[#1B4F9C]/0 group-hover:bg-[#1B4F9C]/20 transition-all duration-300" />
                </div>
              </motion.div>
            </div>

            {/* Bottom row - 1 centered rectangular image */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl w-full md:w-2/3 lg:w-1/2"
              >
                <div className="relative aspect-[16/9]">
                  <Image src={gallery[2] || "/placeholder.svg"} alt="FOD Event 3" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold text-lg">Team Photo</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
