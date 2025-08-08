"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"

export default function CartDrawer({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (o: boolean) => void
}) {
  const { items, remove, clear, total } = useCart()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[340px] sm:w-[420px]">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-6 grid gap-4">
          {items.length === 0 && <p className="text-sm text-neutral-600">Your cart is empty.</p>}
          {items.map((i) => (
            <div key={i.id} className="flex items-center gap-3 border rounded-lg p-3">
              {i.image ? (
                <img src={i.image || "/placeholder.svg"} alt={i.name} className="h-14 w-14 rounded object-cover border" />
              ) : (
                <div className="h-14 w-14 rounded bg-neutral-100" />
              )}
              <div className="flex-1">
                <p className="font-medium">{i.name}</p>
                <p className="text-sm text-neutral-600">Qty: {i.qty}</p>
              </div>
              <div className="text-sm font-medium">${(i.price * i.qty).toFixed(2)}</div>
              <Button variant="ghost" size="sm" onClick={() => remove(i.id)}>Remove</Button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">${total.toFixed(2)}</p>
        </div>
        <div className="mt-4 flex gap-2">
          <Button variant="outline" className="flex-1" onClick={clear}>Clear</Button>
          <Button className="flex-1 bg-gradient-to-r from-[#002E5D] to-[#B11226] hover:opacity-90">Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
