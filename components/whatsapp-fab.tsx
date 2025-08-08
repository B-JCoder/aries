"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export default function WhatsAppFab({
  phone = "4372466669",
  message = "Hello Aries! I’d like to get a quote.",
  className,
}: {
  phone?: string
  message?: string
  className?: string
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        "fixed z-50 grid place-items-center rounded-full shadow-xl border",
        // Sizes
        "h-14 w-14 sm:h-16 sm:w-16",
        // Position: visible on all screens. On mobile, sits above the call button
        "right-4 bottom-24 sm:bottom-6",
        // Glass + subtle gloss
        "bg-white/90 backdrop-blur-md",
        className
      )}
    >
      <Image
        src="/icons/whatsapp.png"
        width={40}
        height={40}
        alt="WhatsApp"
        className="h-8 w-8 sm:h-9 sm:w-9"
        priority
      />
    </a>
  )
}
