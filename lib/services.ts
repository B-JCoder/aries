export type Service = {
  slug: string
  title: string
  summary: string
  image: string
  features: string[]
  subServices?: string[]
}

export const services: Service[] = [
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    summary: "Detailed home cleaning for houses, condos, and apartments.",
    image: "/images/professional-cleaning.jpg",
    subServices: ["Homes", "Condos", "Apartments"],
    features: [
      "Deep cleaning and recurring plans",
      "Eco-friendly products on request",
      "Move-in/Move-out and post-renovation"
    ]
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    summary: "Reliable cleaning for offices, retail, and facilities.",
    image: "/images/heros.jpg",
    subServices: ["Offices", "Retail Spaces", "Facilities"],
    features: [
      "Daytime or after-hours scheduling",
      "Disinfection and high-touch sanitization",
      "Custom checklists by space type"
    ]
  },
  {
    slug: "moving-services",
    title: "Moving Services",
    summary: "Stress-free local and long-distance moves.",
    image: "/images/moving-services.jpg",
    subServices: ["Residential Moves", "Commercial Moves", "Local & Long-Distance", "Packing & Unpacking"],
    features: [
      "Careful packing and labeling",
      "Protected transport of fragile items",
      "Full-service loading and unloading"
    ]
  },
  {
    slug: "assembly-handyman",
    title: "Assembly & Handyman Services",
    summary: "From furniture assembly to repairs and small renovations.",
    image: "/images/handyman-contracting.jpg",
    subServices: ["Furniture Assembly", "Repairs & Installations", "Minor Renovations"],
    features: [
      "Skilled, background-checked pros",
      "Clear scope and upfront pricing",
      "Quality materials and workmanship"
    ]
  },
  {
    slug: "auto-detailing",
    title: "Auto Detailing",
    summary: "Mobile interior and exterior detailing at your location.",
    image: "/images/autodetailing.jpg",
    subServices: ["Interior Cleaning", "Exterior Cleaning", "Mobile Service at Your Location"],
    features: [
      "Steam, shampoo, and odor treatment",
      "Premium exterior wash and protection",
      "We come to you—home or office"
    ]
  },
  {
    slug: "airbnb-property-management",
    title: "Airbnb Property Management",
    summary: "End-to-end turnover, communication, and restocking.",
    image: "/images/airbnb-property-management.jpg",
    subServices: ["Turnover Cleaning", "Guest Communication", "Restocking Supplies", "Smart Home Automation"],
    features: [
      "Hotel-level cleaning and staging",
      "Automated messaging and check-ins",
      "Inventory tracking and smart locks"
    ]
  },
  {
    slug: "housekeeping-services",
    title: "Housekeeping Services",
    summary: "Regular visits, deep cleans, and organization support.",
    image: "/images/professional-cleaning.jpg",
    subServices: ["Regular Cleaning Visits", "Deep Cleaning", "Organization & Decluttering"],
    features: [
      "Weekly, bi-weekly, or monthly",
      "Custom checklists for your space",
      "Trusted staff, consistent results"
    ]
  },
  {
    slug: "smart-automation-solutions",
    title: "Smart Automation Solutions",
    summary: "Installations, integrations, and property monitoring.",
    image: "/images/heros.jpg",
    subServices: ["Home Automation Installations", "Property Monitoring"],
    features: [
      "Smart locks, thermostats, lighting",
      "Scene automation and alerts",
      "Professional setup and training"
    ]
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
