"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Heart, Users, DollarSign, Home } from "lucide-react"

interface CancerEventDetailProps {
  title: string
  description: string[]
  image: string
}

export function CancerEventDetail({ title, description, image }: CancerEventDetailProps) {
  const supportTypes = [
    {
      icon: DollarSign,
      title: "Financial Support",
      description: "Covering treatment costs so families can focus on what matters most—their child's recovery.",
      color: "from-emerald-500 to-teal-600",
      accent: "border-emerald-200 hover:border-emerald-400",
    },
    {
      icon: Heart,
      title: "Post-Discharge Care",
      description: "Because healing doesn't stop at the hospital doors. We're here for the journey ahead.",
      color: "from-rose-500 to-pink-600",
      accent: "border-rose-200 hover:border-rose-400",
    },
    {
      icon: Home,
      title: "Free Accommodation",
      description: "A safe place to stay for families traveling from far away, because no one should face this alone.",
      color: "from-amber-500 to-orange-600",
      accent: "border-amber-200 hover:border-amber-400",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Building a network of care, compassion, and hope for children and their families.",
      color: "from-blue-500 to-indigo-600",
      accent: "border-blue-200 hover:border-blue-400",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Full-Width Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] md:h-[70vh] w-full"
      >
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-3xl"
            >
              <div className="inline-block bg-[#FDB913] text-[#1B4F9C] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Rotary Club Initiative
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">{title}</h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light">No child should die of cancer</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {supportTypes.map((support, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`group relative bg-white rounded-2xl p-8 shadow-md border-2 ${support.accent} transition-all duration-300 overflow-hidden`}
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform translate-x-8 -translate-y-8">
                <support.icon className="w-full h-full" />
              </div>

              <div className="relative z-10">
                <div
                  className={`bg-gradient-to-br ${support.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <support.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{support.title}</h3>
                <p className="text-gray-600 leading-relaxed">{support.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="space-y-6 mb-16">
          {description.map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? "rounded-tl-none" : "rounded-tr-none"} max-w-4xl border-l-4 ${index % 2 === 0 ? "border-[#FDB913]" : "border-[#1B4F9C]"}`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`${index % 2 === 0 ? "bg-[#FDB913]" : "bg-[#1B4F9C]"} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <span className={`${index % 2 === 0 ? "text-[#1B4F9C]" : "text-[#FDB913]"} font-bold`}>
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{paragraph}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#1B4F9C] via-[#2563B8] to-[#1B4F9C] rounded-3xl p-10 md:p-16 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDB913] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Every Act of Kindness Counts
            </h2>
            <p className="text-gray-100 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Your support transforms lives. Whether through donations, volunteering, or spreading awareness, you're
              helping families find hope in their darkest moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button className="bg-[#FDB913] hover:bg-[#E5A500] text-[#1B4F9C] font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl px-10 py-7 text-lg rounded-xl">
                Make a Donation
              </Button>
              <Link href="https://www.linkedin.com/company/rotary-club-of-bengal-presidency/" target="_blank">
                <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 font-semibold transition-all duration-300 hover:scale-105 px-10 py-7 text-lg rounded-xl">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
