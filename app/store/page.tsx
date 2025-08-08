"use client"

import Image from "next/image"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import AddToCartButton from "@/components/store/add-to-cart-button"
import { CartProvider } from "@/components/store/cart-provider"

const products = [
  { id: "clean-01", name: "All-Purpose Cleaner (1L)", price: 9.99, image: "/images/online-store.jpg" },
  { id: "move-01", name: "Moving Boxes (Pack of 10)", price: 24.99, image: "/images/online-store.jpg" },
  { id: "detail-01", name: "Microfiber Cloth Set (6)", price: 12.99, image: "/images/online-store.jpg" },
  { id: "gloves-01", name: "Nitrile Gloves (100)", price: 14.99, image: "/images/online-store.jpg" },
]

export default function StorePage() {
  return (
    <CartProvider>
      <main className="min-h-screen text-neutral-800">
        <SiteHeader />
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">Online Store</h1>
          <p className="mt-2 text-neutral-600">Cleaning supplies and property essentials. Fast local delivery available.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <Card key={p.id} className="overflow-hidden">
                <Image src={p.image || "/placeholder.svg"} alt={p.name} width={600} height={400} className="h-40 w-full object-cover" />
                <CardContent className="p-5">
                  <h2 className="font-semibold">{p.name}</h2>
                  <p className="mt-1 text-neutral-700">${p.price.toFixed(2)}</p>
                  <div className="mt-3">
                    <AddToCartButton id={p.id} name={p.name} price={p.price} image={p.image} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <SiteFooter />
      </main>
    </CartProvider>
  )
}
