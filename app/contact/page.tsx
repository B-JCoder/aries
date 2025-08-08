import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ContactForm from "@/components/contact-form"
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen text-neutral-800">
      <SiteHeader />
      <section className="py-14 md:py-20 bg-neutral-50" aria-labelledby="contact-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h1 id="contact-title" className="text-4xl font-semibold tracking-tight text-neutral-900">Contact Us</h1>
              <p className="mt-2 text-neutral-600">
                Tell us what you need—cleaning, moving, handyman, auto detailing, Airbnb management, housekeeping, or automation—and we’ll tailor a plan for you.
              </p>
              <div className="mt-6 space-y-3 text-neutral-700">
                <p className="inline-flex items-center gap-2"><Phone className="h-5 w-5 text-[#B11226]" /><a className="hover:underline" href="tel:+4372466669">+43 7246 6669</a></p>
                <p className="inline-flex items-center gap-2"><Mail className="h-5 w-5 text-[#B11226]" /><a className="hover:underline" href="mailto:arieshomeservice@gmail.com">arieshomeservice@gmail.com</a></p>
                <p className="inline-flex items-center gap-2"><MapPin className="h-5 w-5 text-[#B11226]" />Toronto & the Greater Toronto Area</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
