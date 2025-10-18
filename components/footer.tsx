import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1B4F9C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-[#FDB913]">Contact Us</h3>
            <div className="space-y-3 text-sm leading-relaxed">
              <p className="font-semibold text-lg">Rotary Club of Bengal Presidency</p>
              <div className="flex items-start gap-2 text-white/90">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#FDB913]" />
                <div>
                  <p>97-B, Mittal Towers,</p>
                  <p>B Wing, 9th Floor, Nariman Point</p>
                  <p>Mumbai – 400021, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-[#FDB913]">Follow Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@rcbp.org"
                className="flex items-center gap-3 text-white/90 hover:text-[#FDB913] transition-all duration-300 hover:translate-x-2 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Email</span>
              </a>
              <a
                href="https://www.facebook.com/rotarybiswabangla/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-[#FDB913] transition-all duration-300 hover:translate-x-2 group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/rcbengalpresidency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-[#FDB913] transition-all duration-300 hover:translate-x-2 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/rotary-club-of-bengal-presidency/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-[#FDB913] transition-all duration-300 hover:translate-x-2 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-[#FDB913]">Location</h3>
            <div className="h-48 rounded-lg overflow-hidden border-2 border-white/20 hover:border-[#FDB913] transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.0847!2d72.8215!3d18.9253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c0c4d5c5b9%3A0x3b3c3c3c3c3c3c3c!2sMittal%20Towers%2C%20Nariman%20Point%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890&markers=color:red%7C18.9253,72.8215"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rotary Club of Bengal Presidency Location"
              />
            </div>
            <Button
              asChild
              className="w-full bg-[#FDB913] hover:bg-[#E5A500] text-[#1B4F9C] font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 py-6"
            >
              <a href="https://maps.app.goo.gl/MwcBn933FodUBq7s7" target="_blank" rel="noopener noreferrer">
                Locate Us
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Rotary Club of Bengal Presidency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
