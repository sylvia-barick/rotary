"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { image: "/home1.jpeg", alt: "Rotary Club Event 1" },
    { image: "/home2.jpeg", alt: "Rotary Club Event 2" },
    { image: "/home3.jpeg", alt: "Rotary Club Event 3" },
    { image: "/home4.jpeg", alt: "Rotary Club Event 4" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />

      {/* Text content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4 px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-in-up drop-shadow-lg">
            Welcome to RCBP
          </h1>
          <p
            className="text-lg md:text-xl text-white animate-slide-in-up drop-shadow-md"
            style={{ animationDelay: "0.2s" }}
          >
            Service Above Self
          </p>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
