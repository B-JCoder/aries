"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-14 md:py-20 bg-neutral-50" aria-labelledby="faq-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 id="faq-title" className="text-3xl font-semibold tracking-tight text-neutral-900">Frequently Asked Questions</h2>
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you bring supplies and equipment?</AccordionTrigger>
              <AccordionContent>
                Yes. Our teams arrive fully equipped. We can also use eco-friendly products on request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are you insured and background-checked?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We are licensed and insured, and all staff are background-checked and trained.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How soon can I book?</AccordionTrigger>
              <AccordionContent>
                Most services are available within 24–72 hours. For moves, we recommend booking 1–2 weeks in advance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What areas do you serve?</AccordionTrigger>
              <AccordionContent>
                Toronto, Durham, Halton, Peel, and York Regions—including Ajax, Oshawa, Whitby, Pickering, Uxbridge, Burlington,
                Milton, Oakville, Mississauga, Brampton, Vaughan, Markham, and more.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
