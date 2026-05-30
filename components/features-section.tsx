"use client"

import { motion } from "framer-motion"
import { Code, Layers, Lightbulb, Rocket, Shield, Smartphone } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom Web Development",
      description:
        "Tailored web applications built with cutting-edge technologies to meet your specific business needs.",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Responsive Design",
      description:
        "Mobile-first approach ensuring your applications work flawlessly across all devices and screen sizes.",
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and smooth user experiences through advanced optimization techniques.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Secure Solutions",
      description: "Robust security measures implemented to protect your data and user information.",
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Scalable Architecture",
      description: "Future-proof applications designed to grow with your business and handle increasing demands.",
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Innovative UX/UI",
      description: "Intuitive and engaging user interfaces that enhance user satisfaction and drive conversions.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="space-y-4">
            <div className="inline-block rounded-md bg-accent-light px-3 py-1 text-sm text-accent font-medium">Features</div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-text-primary">
              Comprehensive Technology Solutions
            </h2>
            <p className="max-w-[900px] text-lg text-text-secondary">
              We offer a wide range of services to help your business thrive in the digital world.
            </p>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border border-border p-6 bg-surface shadow-elevation-1 transition-all hover:shadow-elevation-2 hover:border-primary/30"
              variants={itemVariants}
            >
              <div className="rounded-full bg-accent-light p-4 text-accent">{feature.icon}</div>
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-bold text-text-primary">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
