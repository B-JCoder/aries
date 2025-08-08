import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white footer-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="glass-card rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src="/images/logo-clean.jpg" alt="Aries logo" className="h-10 w-10 rounded-full border" />
                <div>
                  <p className="font-semibold">ARIES Home & Office Services Inc.</p>
                  <p className="text-sm text-neutral-600">Trusted Hands. Clean Spaces. Peace of Mind.</p>
                </div>
              </div>
              <p className="text-sm text-neutral-600">Serving Toronto & the Greater Toronto Area</p>
            </div>
            <div>
              <h4 className="font-semibold">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/testimonials" className="hover:underline">Testimonials</Link></li>
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li><Link href="/services" className="hover:underline">All Services</Link></li>
                <li><Link href="/services/residential-cleaning" className="hover:underline">Residential Cleaning</Link></li>
                <li><Link href="/services/commercial-cleaning" className="hover:underline">Commercial Cleaning</Link></li>
                <li><Link href="/services/moving-services" className="hover:underline">Moving</Link></li>
                <li><Link href="/services/assembly-handyman" className="hover:underline">Assembly & Handyman</Link></li>
                <li><Link href="/services/auto-detailing" className="hover:underline">Auto Detailing</Link></li>
                <li><Link href="/services/airbnb-property-management" className="hover:underline">Airbnb Management</Link></li>
                <li><Link href="/services/housekeeping-services" className="hover:underline">Housekeeping</Link></li>
                <li><Link href="/services/smart-automation-solutions" className="hover:underline">Smart Automation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Support</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                <li><Link href="/store" className="hover:underline">Online Store</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm text-neutral-600">© {new Date().getFullYear()} Aries Home & Office Services Inc. All rights reserved.</div>
      </div>
    </footer>
  )
}
