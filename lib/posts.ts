export type Post = {
  slug: string
  title: string
  excerpt: string
  category: "Cleaning" | "Moving" | "Handyman" | "Auto Detailing" | "Airbnb" | "Smart Home"
  date: string // ISO date
  image: string
  content: string
  readMin?: number
}

export const posts: Post[] = [
  {
    slug: "ultimate-moving-day-checklist-2025",
    title: "The Ultimate Moving Day Checklist (2025)",
    excerpt: "Stay organized from packing to unloading with a proven step-by-step plan used by professionals.",
    category: "Moving",
    date: "2025-07-18",
    image: "/moving-team-bright-home.png",
    content: [
      "Moving doesn’t have to be overwhelming. With the right preparation, your moving day can be smooth and stress-free.",
      "Start by creating an inventory and labeling each box by room. Keep essentials—like chargers, toiletries, and a change of clothes—in a dedicated \"first-night\" bag.",
      "On the day of, confirm elevator bookings, parking permits, and fragile item handling. Our Aries team follows this checklist on every move for consistency and care."
    ].join("\n\n")
  },
  {
    slug: "deep-clean-vs-standard-clean-what-to-book",
    title: "Deep Clean vs. Standard Clean: What Should You Book?",
    excerpt: "Understand the difference and choose the perfect service for your home or office.",
    category: "Cleaning",
    date: "2025-07-10",
    image: "/luxury-modern-condo-interior.png",
    content: [
      "A standard clean maintains; a deep clean resets. If it’s your first service or after renovations, start with a deep clean.",
      "Standard cleaning focuses on visible areas, while deep cleaning tackles baseboards, inside appliances, vents, and more.",
      "We tailor every plan to your space—residential or commercial—with transparent pricing and checklists."
    ].join("\n\n")
  },
  {
    slug: "handyman-quick-fixes-that-boost-value",
    title: "Handyman Quick Fixes That Boost Property Value",
    excerpt: "Small upgrades, big impact: weekend-friendly fixes that pay off.",
    category: "Handyman",
    date: "2025-06-29",
    image: "/handyman-tools-clean-workspace.png",
    content: [
      "Simple improvements like caulking, paint touch-ups, and hardware swaps can modernize any space.",
      "Prioritize safety: secure loose railings, repair GFCIs, and ensure smoke/CO detectors are functioning.",
      "Aries pros can complete a punch list in a single visit—saving time and hassle."
    ].join("\n\n")
  },
  {
    slug: "mobile-auto-detailing-how-often",
    title: "Mobile Auto Detailing: How Often Should You Book?",
    excerpt: "Interior and exterior care intervals for daily drivers and luxury vehicles.",
    category: "Auto Detailing",
    date: "2025-06-15",
    image: "/luxury-car-detailing-shine.png",
    content: [
      "For most vehicles, detail quarterly. Daily drivers in tough climates may benefit from bi-monthly interior refreshes.",
      "Ceramic coatings and regular washes protect paint, while steam cleaning keeps interiors hygienic.",
      "We come to you with pro-grade equipment—home or office."
    ].join("\n\n")
  },
  {
    slug: "airbnb-hosting-turnover-playbook",
    title: "The Airbnb Turnover Playbook",
    excerpt: "Impress guests with a consistent, automated turnover process.",
    category: "Airbnb",
    date: "2025-05-28",
    image: "/airbnb-welcome-set.png",
    content: [
      "Winning listings rely on fast, reliable turnovers with hotel-level standards.",
      "Build checklists for linens, consumables, and smart lock codes. Automate messages and inventory alerts.",
      "Aries manages cleaning, staging, restocking, and guest communications—end-to-end."
    ].join("\n\n")
  },
  {
    slug: "smart-home-starter-kit-gta",
    title: "Smart Home Starter Kit for GTA Homes",
    excerpt: "Begin with the essentials: security, lighting, and climate control.",
    category: "Smart Home",
    date: "2025-05-12",
    image: "/smart-home-panel.png",
    content: [
      "Begin with a smart lock, video doorbell, and thermostat—high ROI and convenience.",
      "Add scene-based lighting and leak sensors for protection and comfort.",
      "We install, configure, and integrate your ecosystem for seamless control."
    ].join("\n\n")
  }
].map(p => ({
  ...p,
  readMin: Math.max(2, Math.round(wordCount(p.content) / 200))
}))

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}

export function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  } catch {
    return iso
  }
}

function wordCount(text: string) {
  return text.trim().split(/\s+/).length
}
