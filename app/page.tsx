import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { SectionHeader } from "@/components/section-header"
import { EventCard } from "@/components/event-card"
import { PresidentMessage } from "@/components/president-message"
import { NewsletterSection } from "@/components/newsletter-section"
import { AboutSection } from "@/components/about-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <SectionHeader title="Our Upcoming Events" variant="blue-gold" />
        <div className="container mx-auto px-4 mt-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <EventCard title="RYLA" slug="ryla-2025" />
            <EventCard title="FOD 2025" slug="forum-of-diplomacy" />
          </div>
        </div>
      </section>

      <PresidentMessage />
      <NewsletterSection />
      <AboutSection />

      {/* Our Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1B4F9C] mb-12">Our Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <EventCard title="FOD" slug="fod" />
            <EventCard title="Matri Samman Banner Launch" slug="matri-samman-banner-launch" />
            <EventCard title="Life Beyond Cancer Donation" slug="life-beyond-cancer-donation" />
          </div>
        </div>
      </section>

      <SponsorsSection />
      <Footer />
    </main>
  )
}
