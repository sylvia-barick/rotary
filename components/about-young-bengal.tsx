"use client"

import { motion } from "framer-motion"

export function AboutYoungBengal() {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Left Side - Image with Orange Accent */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-[#FDB913] p-8 md:p-12 flex items-center justify-center relative"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Image Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-2xl" />
            {/* Decorative Corner - Blue */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1B4F9C] transition-all duration-500 hover:w-32 hover:h-32" />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-[#1B4F9C] p-8 md:p-12 flex flex-col justify-center"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">About</span>
              <br />
              <span className="text-[#FDB913]">Young Bengal</span>
            </h2>

            <div className="space-y-6 text-white leading-relaxed">
              <p>
                Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two
                things are infinite: the universe and human stupidity; and I'm not sure about the universe.
              </p>
              <p className="text-[#FDB913]">
                Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two
                things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things
                are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are
                infinite: the universe and human stupidity; and I'm not sure about the universe.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
