"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type CartItem = {
  id: string
  name: string
  price: number
  image?: string
  qty: number
}

type CartContextValue = {
  items: CartItem[]
  add: (item: Omit<CartItem, "qty">, qty?: number) => void
  remove: (id: string) => void
  clear: () => void
  total: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("aries_cart") : null
    if (saved) setItems(JSON.parse(saved))
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("aries_cart", JSON.stringify(items))
    }
  }, [items])

  const add = (item: Omit<CartItem, "qty">, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id)
      if (idx > -1) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty }
        return copy
      }
      return [...prev, { ...item, qty }]
    })
  }
  const remove = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id))
  const clear = () => setItems([])

  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items])

  const value = useMemo(() => ({ items, add, remove, clear, total }), [items, total])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
