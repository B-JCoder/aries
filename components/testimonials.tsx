import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Property Manager, GTA",
    quote: "Spotless turnovers and reliable scheduling—our units never miss a beat.",
    rating: 5
  },
  {
    name: "Homeowner, Mississauga",
    quote: "The deep clean felt like a reset. Professional, on time, and friendly.",
    rating: 5
  },
  {
    name: "Office Admin, Toronto",
    quote: "Consistent quality week after week. Great communication and checklists.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-white" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-title" className="text-3xl font-semibold tracking-tight text-neutral-900">What Clients Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-neutral-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 text-[#B11226]">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-neutral-800 italic">{`"${t.quote}"`}</p>
                <p className="mt-3 text-sm text-neutral-600">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
