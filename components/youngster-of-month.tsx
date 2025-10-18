"use client"

import { motion } from "framer-motion"

export function YoungsterOfMonth() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative max-w-md mx-auto">
              {/* Image Placeholder */}
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-xl" />
              {/* Decorative Corners */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#FDB913] transition-all duration-500 hover:w-20 hover:h-20" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#1B4F9C] transition-all duration-500 hover:w-24 hover:h-24" />
            </div>
          </div>

          {/* Right Side - Quote */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl p-8 border-l-4 border-[#FDB913] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <span className="text-6xl text-[#FDB913] absolute -top-4 -left-2">"</span>
                <p className="text-gray-700 text-lg leading-relaxed pl-8 mb-6">
                  Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.
                </p>
              </div>

              <div className="mt-6">
                <div className="bg-[#FDB913] text-white px-6 py-3 rounded-t-lg">
                  <h3 className="font-bold text-xl">Soumodip Adhikary</h3>
                </div>
                <div className="bg-[#1B4F9C] text-white px-6 py-2 rounded-b-lg">
                  <p className="text-sm">Youngster (July)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
