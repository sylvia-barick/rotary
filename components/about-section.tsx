import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image with decorative corners */}
          <div className="relative group order-2 md:order-1">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#FDB913] transition-all duration-300 group-hover:w-24 group-hover:h-24" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-8 border-r-8 border-[#1B4F9C] transition-all duration-300 group-hover:w-24 group-hover:h-24" />
            <div className="h-[500px] rounded-lg relative z-10 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden">
              <Image
                src="/rcbp.jpeg"
                alt="Rotary Club of Bengal Presidency group photo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 md:order-2 animate-slide-in-up">
            <div>
              <h3 className="text-[#FDB913] font-semibold text-lg mb-2">About</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B4F9C]">RCBP</h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two
                things are infinite: the universe and human stupidity; and I'm not sure about the universe.
              </p>
              <p>
                Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two
                things are infinite: the universe and human stupidity; and I'm not sure about the universe.
              </p>
              <p>Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="bg-white border-2 border-[#1B4F9C] text-[#1B4F9C] hover:bg-[#1B4F9C] hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
                Learn More
              </Button>
              <Button className="bg-[#FDB913] hover:bg-[#E5A500] text-[#1B4F9C] font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
