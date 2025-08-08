"use client"

import Link from "next/link"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ChevronDown, ChevronUp, CornerDownRight, Sparkles } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Container from "@/components/container"
import { posts, formatDate } from "@/lib/posts"

export default function BlogIndexPage() {
  // pick the first post as featured (can be changed to any slug)
  const featured = posts[0]
  const others = posts.slice(1)
  const [showAll, setShowAll] = useState(false)

  const paragraphs = featured.content.split(/\n{2,}/g)

  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(14,28,56,0.12),rgba(255,255,255,0))]" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-[#002E5D] to-[#B11226] -z-10" />
        <Container className="py-16 md:py-24">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-neutral-600 bg-white/80 backdrop-blur-md shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#B11226]" />
              Our latest insights
            </span>
            <h1 className="text-4xl md:text-5xl/tight font-semibold tracking-tight text-neutral-900">Aries Blog</h1>
            <p className="text-neutral-600 max-w-2xl">
              Full in-depth article below. More posts are hidden but preserved.
            </p>
            <div className="mt-2">
              <Button asChild variant="outline">
                <Link href="/#contact">
                  <CornerDownRight className="h-4 w-4 mr-2" />
                  Get a Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured full post */}
      <section className="bg-white">
        <Container className="pb-8 md:pb-12">
          <article className="glass-card gradient-shadow-faint rounded-2xl border overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={featured.image || "/placeholder.svg"}
                alt={`${featured.title} cover image`}
                className="w-full h-[240px] sm:h-[360px] md:h-[460px] object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
                <Badge variant="secondary">{featured.category}</Badge>
                <span className="text-neutral-300">•</span>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                <span className="text-neutral-300">•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4 text-[#B11226]" />
                  {featured.readMin} min read
                </span>
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl/tight font-semibold tracking-tight text-neutral-900">{featured.title}</h2>
              <div className="prose prose-neutral max-w-none mt-4">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-neutral-800 leading-relaxed">{p}</p>
                ))}
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/#contact">Book a Service</Link>
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </section>

      {/* Hidden list of other posts (toggle) */}
      <section className="pb-16 md:pb-24 bg-neutral-50">
        <Container>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-neutral-900">More Posts</h3>
            <Button variant="outline" size="sm" onClick={() => setShowAll((s) => !s)}>
              {showAll ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
              {showAll ? "Hide" : "Show"}
            </Button>
          </div>
          <div className={`mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all ${showAll ? "opacity-100" : "opacity-0 pointer-events-none h-0 overflow-hidden"}`}>
            {others.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="glass-card gradient-shadow-faint rounded-xl overflow-hidden hover-lift">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-40 w-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <div className="text-xs text-neutral-500 flex items-center gap-3">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="text-neutral-300">•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-[#B11226]" />
                        {post.readMin} min
                      </span>
                    </div>
                    <h4 className="mt-2 text-lg font-semibold">{post.title}</h4>
                    <p className="mt-1 text-sm text-neutral-600">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <SiteFooter />
    </main>
  )
}
