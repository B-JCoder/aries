import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Testimonials from "@/components/testimonials"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen text-neutral-800">
      <SiteHeader />
      <Testimonials />
      <SiteFooter />
    </main>
  )
}
