import Image from "next/image"

export function SponsorsSection() {
  const sponsors = [
    { id: 1, image: "/sponsors/spon1.jpeg", name: "Presto" },
    { id: 2, image: "/sponsors/spon2.jpeg", name: "POPSKi" },
    { id: 3, image: "/sponsors/spon3.jpeg", name: "Vedic Village" },
    { id: 4, image: "/sponsors/spon4.jpeg", name: "Care & Cure Nursing Centre" },
    { id: 5, image: "/sponsors/spon5.jpeg", name: "Sponsor 5" },
    { id: 6, image: "/sponsors/spon6.jpeg", name: "Friends FM" },
    { id: 7, image: "/sponsors/spon7.jpeg", name: "Calcutta Chir Kathaa" },
    { id: 8, image: "/sponsors/spon8.jpeg", name: "Non Stop" },
    { id: 9, image: "/sponsors/spon9.jpeg", name: "Life Beyond Cancer" },
  ]

  return (
    <section className="py-16 bg-[#FDB913]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F9C] text-center mb-12">Our Past Sponsors</h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="aspect-square bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <div className="relative w-full h-full p-2">
                <Image src={sponsor.image || "/placeholder.svg"} alt={sponsor.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
