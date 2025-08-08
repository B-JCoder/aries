import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Testimonials from "@/components/testimonials"
import { Check } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen text-neutral-800">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">About Aries</h1>
        <p className="mt-3 text-neutral-700">
          Aries Home and Office Services Inc. is your trusted, family-owned, one‑stop solution for residential and commercial property care across the GTA.
          We deliver customized, reliable solutions with unmatched attention to detail and care you can trust.
        </p>
        <ul className="mt-6 grid gap-2 text-neutral-800">
          {[
            "Local, family-owned and insured",
            "Trained, background-checked staff",
            "Transparent pricing and clear checklists",
            "Flexible scheduling and responsive support",
          ].map((f) => (
            <li key={f} className="inline-flex items-start gap-2">
              <Check className="h-5 w-5 mt-0.5 text-[#B11226]" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>
      <Testimonials />
      <SiteFooter />
    </main>
  )
}
