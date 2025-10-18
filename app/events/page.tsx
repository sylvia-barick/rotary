import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { SectionHeader } from "@/components/section-header"
import { EventCard } from "@/components/event-card"
import { FlagshipEvent } from "@/components/flagship-event"
import { Footer } from "@/components/footer"

export default function EventsPage() {
  const upcomingEvents = [
    { title: "Forum of Diplomacy", slug: "fod" },
    { title: "Matri Samman Banner Launch", slug: "matri-samman-banner-launch" },
    { title: "Life Beyond Cancer Donation", slug: "life-beyond-cancer-donation" },
  ]

  const otherEvents = [
    { title: "Forum of Diplomacy", slug: "fod" },
    { title: "Matri Samman Banner Launch", slug: "matri-samman-banner-launch" },
    { title: "Life Beyond Cancer Donation", slug: "life-beyond-cancer-donation" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-20">
        <HeroCarousel />
      </section>

      {/* Our Upcoming Events */}
      <section className="py-12 md:py-16">
        <SectionHeader title="Our Upcoming Events" variant="blue-gold" />
        <div className="container mx-auto px-4 mt-8 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} title={event.title} slug={event.slug} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Presenting Our Flagship Events Header */}
      <SectionHeader title="Presenting Our Flagship Events" variant="blue-gold" />

      {/* Matri Samman */}
      <FlagshipEvent
        title="Matri Samman"
        description="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        variant="blue"
      />

      {/* Rotary Forum Of Diplomacy */}
      <FlagshipEvent
        title="Rotary Forum Of Diplomacy"
        description="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        variant="orange"
        buttonText="COMPLETE DETAILS"
      />

      {/* The Secretary */}
      <FlagshipEvent
        title="The Secretary"
        description="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        variant="blue"
        buttonText="PRESIDENTIAL LETTER"
      />

      {/* The Treasurer */}
      <FlagshipEvent
        title="The Treasurer"
        description="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        variant="orange"
        buttonText="VP PRESIDENTIAL LETTER"
      />

      {/* Our Other Events */}
      <section className="py-12 md:py-16">
        <SectionHeader title="Our Other Events" variant="blue-gold" />
        <div className="container mx-auto px-4 mt-8 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherEvents.map((event, index) => (
              <EventCard key={index} title={event.title} slug={event.slug} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
