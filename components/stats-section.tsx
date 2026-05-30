"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function StatsSection() {
  const stats = [
    { value: 50, label: "Projects Completed", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 15, label: "Team Members", suffix: "" },
    { value: 5, label: "Years Experience", suffix: "+" },
  ]

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <CounterStat key={index} value={stat.value} label={stat.label} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CounterStat({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000 // ms
      const increment = value / (duration / 16) // 60fps

      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center space-y-2 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl font-bold sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
      <div className="text-sm font-medium text-text-secondary md:text-base">{label}</div>
    </motion.div>
  )
}
