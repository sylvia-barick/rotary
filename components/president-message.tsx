import { SectionHeader } from "./section-header"
import Image from "next/image"

export function PresidentMessage() {
  return (
    <section className="py-16 bg-white">
      <SectionHeader title="Message from the President" variant="blue-gold" />

      <div className="container mx-auto px-4 mt-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image with decorative corners */}
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#FDB913] transition-all duration-300 group-hover:w-20 group-hover:h-20" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-[#1B4F9C] transition-all duration-300 group-hover:w-20 group-hover:h-20" />
            <div className="relative h-80 rounded-lg overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/president.jpeg"
                alt="Rtn. Sisanya Bandopadhyay - President 2025-26"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Quote */}
          <div className="space-y-6 animate-slide-in-up">
            <div className="relative">
              <span className="text-6xl text-[#FDB913] opacity-50 absolute -top-4 -left-2">❝</span>
              <p className="text-lg md:text-xl text-gray-700 italic pl-8 leading-relaxed">
                Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.
              </p>
              <span className="text-6xl text-[#FDB913] opacity-50 absolute -bottom-8 right-0">❞</span>
            </div>

            <div className="flex flex-col items-end gap-2 mt-8">
              <div className="bg-[#FDB913] text-[#1B4F9C] px-6 py-2 font-semibold rounded-l-full transition-all duration-300 hover:pr-8">
                Rtn. Sisanya Bandopadhyay
              </div>
              <div className="bg-[#1B4F9C] text-white px-6 py-2 font-semibold rounded-l-full transition-all duration-300 hover:pr-8">
                PRESIDENT (2025-26)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
