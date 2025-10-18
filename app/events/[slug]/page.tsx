import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { EventTitleBanner } from "@/components/event-title-banner"
import { EventDetailSection } from "@/components/event-detail-section"
import { EventGallery } from "@/components/event-gallery"
import { Footer } from "@/components/footer"
import { getEventBySlug } from "@/data/events"
import { notFound } from "next/navigation"
import { CancerEventDetail } from "@/components/cancer-event-detail"
import { FodEventDetail } from "@/components/fod-event-detail"

export const dynamic = "force-dynamic"

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  const isCancerEvent = params.slug === "life-beyond-cancer-donation"
  const isFodEvent = params.slug === "forum-of-diplomacy" || params.slug === "fod"

  if (isCancerEvent) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <HeroCarousel />
        <EventTitleBanner title={event.title} />
        <CancerEventDetail title={event.title} description={event.fullDescription} image={event.image} />
        <Footer />
      </main>
    )
  }

  if (isFodEvent) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <HeroCarousel />
        <FodEventDetail
          title={event.title}
          description={event.fullDescription}
          image={event.image}
          gallery={event.gallery}
        />
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <EventTitleBanner title={event.title} />
      <EventDetailSection
        title={event.title}
        description={event.fullDescription}
        variant={event.variant}
        image={event.image}
      />
      <EventGallery images={event.gallery} />
      <Footer />
    </main>
  )
}
