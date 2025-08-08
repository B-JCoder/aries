import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FAQ from "@/components/faq"

export default function FAQPage() {
  return (
    <main className="min-h-screen text-neutral-800">
      <SiteHeader />
      <FAQ />
      <SiteFooter />
    </main>
  )
}
