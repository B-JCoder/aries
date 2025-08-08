"use client"

import { useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const EMAIL = "arieshomeservice@gmail.com"
const WHATSAPP_NUMBER = "4372466669"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const mailto = useMemo(() => {
    const subjectLine = encodeURIComponent(subject || "Quote Request - Aries")
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Details:",
      message || "(please add details here)"
    ].join("\n")
    const body = encodeURIComponent(lines)
    return `mailto:${EMAIL}?subject=${subjectLine}&body=${body}`
  }, [name, email, phone, subject, message])

  const whatsappHref = useMemo(() => {
    const text = [
      "Hello Aries! I’d like to get a quote.",
      subject ? `Subject: ${subject}` : "",
      name ? `Name: ${name}` : "",
      phone ? `Phone: ${phone}` : "",
    ]
      .filter(Boolean)
      .join("\n")
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  }, [name, phone, subject])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    window.location.href = mailto
  }

  return (
    <Card className="border-neutral-200 bg-white/80 backdrop-blur-md shadow-lg">
      <CardContent className="p-5">
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+1 (416) 555‑1234" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Cleaning / Moving / Handyman ..." value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell us what you need..." rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button type="submit" className="flex-1 bg-gradient-to-r from-[#002E5D] to-[#B11226] hover:opacity-90">
              Send Email
            </Button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center rounded-md border bg-white/80 backdrop-blur-md px-4 py-2 shadow-sm hover:shadow transition"
              aria-label="Chat on WhatsApp"
            >
              <img src="/icons/whatsapp.png" alt="WhatsApp" className="h-5 w-5 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="text-xs text-neutral-500">Submitting opens your email app. Or chat on WhatsApp for faster responses.</p>
        </form>
      </CardContent>
    </Card>
  )
}
