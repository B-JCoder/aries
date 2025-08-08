"use client"

import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

export default function AddToCartButton({
  id,
  name,
  price,
  image,
  size = "default",
}: {
  id: string
  name: string
  price: number
  image?: string
  size?: "default" | "sm" | "lg"
}) {
  const { add } = useCart()
  const { toast } = useToast()
  const [added, setAdded] = useState(false)

  return (
    <Button
      size={size}
      className="bg-gradient-to-r from-[#002E5D] to-[#B11226] hover:opacity-90"
      onClick={() => {
        add({ id, name, price, image })
        setAdded(true)
        setTimeout(() => setAdded(false), 1200)
        toast({ title: "Added to cart", description: `${name} added.` })
      }}
    >
      {added ? (
        <>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </>
      )}
    </Button>
  )
}
