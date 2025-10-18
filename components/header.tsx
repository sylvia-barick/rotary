"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "About RCBP", href: "/#about" },
    { label: "Events", href: "/events" }, // Updated Events link to point to dedicated events page
    { label: "Members", href: "/members" },
    { label: "Young Bengal", href: "/young-bengal" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/rotary-logo.png"
              alt="Rotary Club of Bengal Presidency - Unite for Good"
              width={320}
              height={90}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 font-medium hover:text-[#1B4F9C] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B4F9C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-[#1B4F9C] hover:bg-[#0F2E5C] text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
              Join Us
            </Button>
            <Button className="bg-[#FDB913] hover:bg-[#E5A500] text-[#1B4F9C] font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[#1B4F9C] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-[#1B4F9C] transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-[#1B4F9C] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-in-up">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-[#1B4F9C] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <Button className="bg-[#1B4F9C] hover:bg-[#0F2E5C] text-white">Join Us</Button>
                <Button className="bg-[#FDB913] hover:bg-[#E5A500] text-[#1B4F9C] font-semibold">Donate</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
