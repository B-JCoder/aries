import Link from "next/link"
import { notFound } from "next/navigation"
import { posts, getPostBySlug, formatDate } from "@/lib/posts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, CornerDownLeft } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

type Params = { slug: string }

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  const paragraphs = post.content.split(/\n{2,}/g)

  return (
    <main className="min-h-screen">
      <SiteHeader />
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-neutral-300">{'•'}</span>
            <time className="text-neutral-600" dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="text-neutral-300">{'•'}</span>
            <span className="inline-flex items-center gap-1 text-neutral-600">
              <Clock className="h-4 w-4 text-rose-600" />
              {post.readMin} min read
            </span>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl/tight font-semibold tracking-tight text-neutral-900">
            {post.title}
          </h1>
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 shadow-lg">
          <img
            src={post.image || "/placeholder.svg"}
            alt={`${post.title} cover image`}
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover rounded-xl border"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-14 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-neutral-800 leading-relaxed">{p}</p>
          ))}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="outline">
              <Link href="/blog">
                <CornerDownLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            <Button asChild>
              <Link href="/#contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-neutral-900">You might also like</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {posts
              .filter(p => p.slug !== post.slug)
              .slice(0, 2)
              .map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group">
                  <div className="overflow-hidden rounded-lg border shadow-lg">
                    <img
                      src={rel.image || "/placeholder.svg"}
                      alt={rel.title}
                      className="h-36 w-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2 text-sm text-neutral-500">{formatDate(rel.date)} • {rel.category}</div>
                  <div className="text-base font-semibold group-hover:underline">{rel.title}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
