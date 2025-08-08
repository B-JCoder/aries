import { BadgeCheck, Building2, Car, Check, HomeIcon, Mail, MapPin, Menu, Phone, ShieldCheck, ShoppingBag, Sparkles, Truck, Wrench } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ContactForm from "@/components/contact-form"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import Link from "next/link"
import { services } from "@/lib/services"

const PHONE_DISPLAY = "+43 7246 6669"
const PHONE_TEL = "+4372466669"
const EMAIL = "arieshomeservice@gmail.com"

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen text-neutral-800">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(0,46,93,0.12),rgba(255,255,255,0))]" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-[#002E5D] to-[#B11226] -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="glass-card rounded-2xl shadow-xl p-6 md:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-neutral-600 bg-white shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#B11226]" />
                Every Service. One Company. Zero Stress.
              </span>
              <h1 className="mt-5 text-4xl md:text-5xl/tight font-semibold tracking-tight text-neutral-900">
                {"Trusted Hands. Clean Spaces. Peace of Mind."}
              </h1>
              <p className="mt-4 text-neutral-600 max-w-xl">
                Family-owned, full-service experts for homes and businesses across the GTA—cleaning, moving, handyman, auto detailing, Airbnb management, housekeeping, and smart automation.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-white bg-gradient-to-r from-[#002E5D] to-[#B11226] hover:opacity-90">
                  Get a Free Quote
                </Link>
                <a href="/services" className="inline-flex items-center justify-center rounded-md px-6 py-3 border">
                  Explore Services
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                <span className="inline-flex items-center gap-1">
                  <Check className="h-4 w-4 text-[#B11226]" />
                  Licensed & Insured
                </span>
                <span className="inline-flex items-center gap-1">
                  <Check className="h-4 w-4 text-[#B11226]" />
                  Transparent Pricing
                </span>
                <span className="inline-flex items-center gap-1">
                  <Check className="h-4 w-4 text-[#B11226]" />
                  Background-Checked Staff
                </span>
              </div>
            </div>
            <div className="relative">
              <Card className="overflow-hidden border-neutral-200 glass-card gradient-shadow-faint shadow-xl">
                <CardContent className="p-0">
                  <img
                    src="/images/heros.jpg"
                    alt="Commercial building with professional cleaners"
                    className="w-full h-[320px] md:h-[420px] object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section id="services" className="py-14 md:py-20 bg-neutral-50" aria-labelledby="services-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 id="services-title" className="text-3xl font-semibold tracking-tight text-neutral-900">Core Services</h2>
              <p className="mt-2 text-neutral-600">Residential and commercial solutions, tailored to you.</p>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center rounded-md border px-4 py-2">View All</Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                <Card className="overflow-hidden h-full glass-card gradient-shadow-faint hover-lift">
                  <div className="relative">
                    <img src={s.image || "/placeholder.svg"} alt={s.title} className="h-40 w-full object-cover transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{s.summary}</p>
                    {s.subServices && (
                      <ul className="mt-3 text-sm text-neutral-700 grid gap-1">
                        {s.subServices.slice(0,3).map((sub) => (
                          <li key={sub} className="inline-flex items-center gap-2">
                            <Check className="h-4 w-4 text-[#B11226]" /> {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <Testimonials />
      <SiteFooter />
    </main>
  )
}

function ServiceCard({
  icon,
  title,
  desc,
  imgQuery,
  comingSoon = false,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  imgQuery: string
  comingSoon?: boolean
}) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        <img
          src={`/abstract-geometric-shapes.png?height=220&width=640&query=${imgQuery}`}
          alt={`${title} illustrative image`}
          className="h-40 w-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        {comingSoon && (
          <span className="absolute top-3 right-3 text-xs font-medium bg-white/90 backdrop-blur px-2 py-1 rounded-full border">
            Coming Soon
          </span>
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full grid place-items-center bg-gradient-to-br from-rose-600 via-fuchsia-600 to-sky-600 text-white">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-neutral-600">{desc}</p>
      </CardContent>
    </Card>
  )
}

function AboutCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <Card className="overflow-hidden border-neutral-200">
      <CardContent className="p-5">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full grid place-items-center bg-gradient-to-br from-rose-600 via-fuchsia-600 to-sky-600 text-white">
            {icon}
          </div>
          <h3 className="text-base font-semibold">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-neutral-600">{desc}</p>
      </CardContent>
    </Card>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-white p-4">
      <p className="text-xs uppercase tracking-wide text-neutral-500">{label}</p>
      <p className="mt-1 text-xl font-semibold text-neutral-900">{value}</p>
    </div>
  )
}
