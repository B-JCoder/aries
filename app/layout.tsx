import "./globals.css"
import type { ReactNode } from "react"
import { CartProvider } from "@/components/store/cart-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "ARIES Home & Office Services Inc.",
  description: "Trusted Hands. Clean Spaces. Peace of Mind.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#2B2B2B]">
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
