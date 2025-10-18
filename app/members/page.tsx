import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { LeadershipSection } from "@/components/leadership-section"
import { SectionHeader } from "@/components/section-header"
import { MemberCard } from "@/components/member-card"
import { Footer } from "@/components/footer"

export default function MembersPage() {
  const members = Array.from({ length: 9 }, (_, i) => ({
    name: "Full Name",
    description: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  }))

  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />

      {/* Leadership Sections */}
      <LeadershipSection
        title="President"
        description="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        variant="blue"
        imageSide="left"
      />

      <LeadershipSection
        title="Vice President"
        description="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        variant="gold"
        imageSide="right"
      />

      <LeadershipSection
        title="Secretary"
        description="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        variant="blue"
        imageSide="left"
      />

      <LeadershipSection
        title="Treasurer"
        description="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        variant="gold"
        imageSide="right"
      />

      {/* Our Club Members */}
      <section className="py-16 bg-white">
        <SectionHeader title="Our Club Members" variant="blue-gold" />
        <div className="container mx-auto px-4 mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <MemberCard key={index} name={member.name} description={member.description} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
