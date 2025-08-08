"use client"

import Link from "next/link"
import { useState } from "react"
import { Phone, Menu, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import CartDrawer from "@/components/store/cart-drawer"
import Container from "@/components/container"
import WhatsAppFab from "@/components/whatsapp-fab"
import { useCart } from "@/components/store/cart-provider"

const PHONE_TEL = "+4372466669"

export default function SiteHeader() {
  const [openCart, setOpenCart] = useState(false)
  const { items } = useCart()
  const itemCount = items.reduce((n, i) => n + i.qty, 0)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/40 bg-white/75 backdrop-blur-md supports-[backdrop-filter]:bg-white/55 shadow-md">
        <Container className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/logo-clean.jpg" alt="Aries logo" className="h-10 w-10 rounded-full border shadow-sm" />
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">ARIES</p>
              <p className="text-xs text-neutral-500">Home & Office Services Inc.</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-neutral-700 hover:text-neutral-900">Home</Link>
            <Link href="/about" className="text-neutral-700 hover:text-neutral-900">About Us</Link>
            <Link href="/services" className="text-neutral-700 hover:text-neutral-900">Services</Link>
            <Link href="/store" className="text-neutral-700 hover:text-neutral-900">Store</Link>
            <Link href="/blog" className="text-neutral-700 hover:text-neutral-900">Blog</Link>
            <Link href="/contact" className="text-neutral-700 hover:text-neutral-900">Contact Us</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" className="hidden sm:inline-flex bg-transparent" asChild>
              <a href={`tel:${PHONE_TEL}`}>Call</a>
            </Button>
            <Button
              className="hidden sm:inline-flex relative bg-gradient-to-r from-[#002E5D] to-[#B11226] hover:opacity-90"
              onClick={() => setOpenCart(true)}
            >
              <ShoppingCart className="h-4 w-4 mr-2" /> Cart
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[1.25rem] h-5 px-1 rounded-full bg-white text-[#B11226] text-[11px] font-semibold grid place-items-center shadow">
                  {itemCount}
                </span>
              )}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-3">
                    <img src="/images/logo-clean.jpg" alt="Aries logo" className="h-8 w-8 rounded-full border" />
                    <span>ARIES</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 grid gap-3 text-base">
                  <Link href="/" className="text-neutral-800 hover:text-neutral-900">Home</Link>
                  <Link href="/about" className="text-neutral-800 hover:text-neutral-900">About Us</Link>
                  <Link href="/services" className="text-neutral-800 hover:text-neutral-900">Services</Link>
                  <Link href="/store" className="text-neutral-800 hover:text-neutral-900">Store</Link>
                  <Link href="/blog" className="text-neutral-800 hover:text-neutral-900">Blog</Link>
                  <Link href="/faq" className="text-neutral-800 hover:text-neutral-900">FAQ</Link>
                  <Link href="/testimonials" className="text-neutral-800 hover:text-neutral-900">Testimonials</Link>
                  <Link href="/contact" className="text-neutral-800 hover:text-neutral-900">Contact Us</Link>
                </div>
                <div className="mt-6 grid gap-2">
                  <Button asChild className="bg-gradient-to-r from-[#002E5D] to-[#B11226]">
                    <a href="/#contact">Get a Free Quote</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={`tel:${PHONE_TEL}`}>Call Now</a>
                  </Button>
                  <Button variant="secondary" onClick={() => setOpenCart(true)}>
                    <ShoppingCart className="h-4 w-4 mr-2" /> View Cart{itemCount > 0 ? ` (${itemCount})` : ""}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

          </div>
        </Container>
      </header>

      {/* Sticky mobile call button */}
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call Aries"
        className="fixed sm:hidden bottom-4 right-4 z-50 h-14 w-14 rounded-full grid place-items-center shadow-xl border bg-gradient-to-br from-[#002E5D] to-[#B11226] text-white"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Global WhatsApp button (all screen sizes) */}
      <WhatsAppFab />

      <CartDrawer open={openCart} onOpenChange={setOpenCart} />
    </>
  )
}
