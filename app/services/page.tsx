import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { services } from "@/lib/services"
import { Check } from 'lucide-react'

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-neutral-800">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">Our Services</h1>
        <p className="mt-2 text-neutral-600">Choose a service to learn more or request a custom plan tailored to your property.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.slug} className="overflow-hidden glass-card gradient-shadow-faint hover-lift">
              <img src={s.image || "/placeholder.svg"} alt={s.title} className="h-40 w-full object-cover" />
              <CardContent className="p-5">
                <h2 className="text-lg font-semibold">{s.title}</h2>
                <p className="text-sm text-neutral-600 mt-1">{s.summary}</p>
                <ul className="mt-3 grid gap-1 text-sm text-neutral-700">
                  {s.subServices?.map((sub) => (
                    <li key={sub} className="inline-flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#B11226]" /> {sub}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link href={`/services/${s.slug}`} className="inline-flex items-center rounded-md px-4 py-2 text-white bg-gradient-to-r from-[#002E5D] to-[#B11226] hover:opacity-90">
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
