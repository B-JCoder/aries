import { notFound } from "next/navigation"
import { getService } from "@/lib/services"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Check } from 'lucide-react'
import Link from "next/link"

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) return notFound()

  return (
    <main className="min-h-screen text-neutral-800">
      <SiteHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h1 className="text-3xl md:text-4xl/tight font-semibold tracking-tight text-neutral-900">{service.title}</h1>
              <p className="mt-3 text-neutral-700">{service.summary}</p>
              <ul className="mt-6 grid gap-2 text-neutral-800">
                {service.features.map((f) => (
                  <li key={f} className="inline-flex items-start gap-2">
                    <Check className="h-5 w-5 mt-0.5 text-[#B11226]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {service.subServices && (
                <>
                  <h2 className="mt-6 font-semibold">Includes</h2>
                  <ul className="mt-2 grid gap-1 text-neutral-700">
                    {service.subServices.map((s) => (
                      <li key={s} className="inline-flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#B11226]" /> {s}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div className="mt-6 flex gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-md px-5 py-2.5 text-white bg-gradient-to-r from-[#002E5D] to-[#B11226] hover:opacity-90">Get a Quote</Link>
                <a href="tel:+4372466669" className="inline-flex items-center rounded-md px-5 py-2.5 border">Call Now</a>
              </div>
            </div>
            <div>
              <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-[260px] sm:h-[360px] object-cover rounded-xl border" />
            </div>
          </div>
          <div className="mt-10">
            <Link href="/services" className="hover:underline">← Back to Services</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
