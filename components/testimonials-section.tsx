"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  content: string
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechInnovate",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "VyuApp transformed our digital presence with their innovative approach. Their team delivered a cutting-edge web application that exceeded our expectations in both functionality and design.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder",
      company: "GrowthSphere",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "Working with VyuApp was a game-changer for our startup. Their expertise in modern web technologies helped us launch our platform ahead of schedule and under budget.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "BrandElevate",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "The e-commerce solution VyuApp built for us has significantly increased our conversion rates and customer satisfaction. Their attention to detail and focus on user experience is unmatched.",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = useCallback(() => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }, [testimonials.length])

  const prev = useCallback(() => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }, [testimonials.length])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [autoplay, next])

  return (
    <section className="py-24 md:py-32 bg-accent-light/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="space-y-4">
            <div className="inline-block rounded-md bg-accent-light px-3 py-1 text-sm text-accent font-medium">
              Testimonials
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-text-primary">What Our Clients Say</h2>
            <p className="max-w-[900px] text-lg text-text-secondary">
              Don't just take our word for it. Hear from some of our satisfied clients.
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl overflow-hidden">
          <div
            className="relative h-full w-full"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-lg border border-border bg-surface p-6 shadow-elevation-1 md:p-8"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-accent/20" />
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-primary">
                    <Image
                      src={testimonials[current].avatar || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <blockquote className="mb-4 max-w-3xl text-lg md:text-xl">
                    "{testimonials[current].content}"
                  </blockquote>
                  <div className="space-y-1">
                    <h3 className="font-bold">{testimonials[current].name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between px-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${index === current ? "bg-primary" : "bg-muted-foreground/30"}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
