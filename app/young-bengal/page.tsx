import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { SectionHeader } from "@/components/section-header"
import { EventCard } from "@/components/event-card"
import { AboutYoungBengal } from "@/components/about-young-bengal"
import { YoungsterOfMonth } from "@/components/youngster-of-month"
import { EventGallery } from "@/components/event-gallery"
import { Footer } from "@/components/footer"

export default function YoungBengalPage() {
  const upcomingEvents = [{ title: "Event #3" }, { title: "Event #4" }, { title: "Event #5" }]

  const allEvents = [
    { title: "Event #3" },
    { title: "Event #4" },
    { title: "Event #5" },
    { title: "Event #3" },
    { title: "Event #4" },
    { title: "Event #5" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24">
        <HeroCarousel />
      </section>

      {/* Our Upcoming Events */}
      <section className="py-16 bg-white">
        <SectionHeader title="Our Upcoming Events" variant="blue-gold" />
        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} title={event.title} />
            ))}
          </div>
        </div>
      </section>

      {/* About Young Bengal */}
      <AboutYoungBengal />

      {/* Meet the Youngster of the Month */}
      <section className="py-0">
        <SectionHeader title="Meet the Youngster of the Month" variant="blue-gold" />
        <YoungsterOfMonth />
      </section>

      {/* Our Events */}
      <section className="py-16 bg-white">
        <SectionHeader title="Our Events" variant="blue-gold" />
        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allEvents.map((event, index) => (
              <EventCard key={index} title={event.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <EventGallery />

      {/* Footer */}
      <Footer />
    </main>
  )
}
