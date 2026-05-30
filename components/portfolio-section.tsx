"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  categories: string[]
  technologies: string[]
  demoUrl: string
  githubUrl: string
  longDescription: string
}

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "Sellica",
      description:
        "Sistem Evaluasi Laporan Lengkap Individu dan Catatan Aktivitas",
      image: "/images/project/sellica.jpeg?height=600&width=800",
      categories: ["web", "mobile"],
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Radix UI",
        "Supabase",
      ],
      demoUrl: "https://sellica.vyuapp.me",
      githubUrl: "#",
      longDescription:
        "A comprehensive web app platform built with Next.js and React. Features include interactive LineChart, user authentication, recapitulation form and documentation upload. The platform is fully responsive and optimized for all devices.",
    },
    {
      id: 2,
      title: "Vyu-Flow",
      description:
        "Interactive dashboard for managing project workflow.",
      image: "/images/project/vyu-flow.jpeg?height=600&width=800",
      categories: ["web", "dashboard"],
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Supabase",
      ],
      demoUrl: "https://vyu-flow.vyuapp.me",
      githubUrl: "#",
      longDescription:
                "An advanced project workflow management dashboard that streamlines team collaboration and project tracking. Built with Next.js and React, featuring interactive task boards, real-time project monitoring, and team performance analytics. The platform integrates with Supabase for seamless data management and real-time synchronization, while Tailwind CSS provides a clean, responsive interface optimized for all devices and team workflows.",
    },
    {
      id: 3,
      title: "Vyu-PDF",
      description:
        "Personal finance tracker with budgeting tools and expense analytics.",
      image: "/images/project/vyu-pdf.jpeg?height=600&width=800",
      categories: ["Web", "dashboard"],
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Clerk",
        "Ghostscript"
      ],
      demoUrl: "#",
      githubUrl: "#",
      longDescription:
        "A comprehensive personal finance management application that helps users track expenses, set budgets, and analyze spending patterns. Built with React Native for cross-platform mobile support, it uses Redux for state management and connects to a Node.js backend with MongoDB for data storage.",
    },
    {
      id: 4,
      title: "Real Estate Marketplace",
      description:
        "Property listing platform with advanced search and virtual tours.",
      image: "/placeholder.svg?height=600&width=800",
      categories: ["web", "marketplace"],
      technologies: ["Next.js", "Three.js", "PostgreSQL", "AWS"],
      demoUrl: "#",
      githubUrl: "#",
      longDescription:
        "A sophisticated real estate marketplace that connects buyers, sellers, and agents. Features include advanced property search, virtual 3D tours powered by Three.js, and a robust listing management system. Built with Next.js and PostgreSQL, the platform is hosted on AWS for scalability.",
    },
    {
      id: 5,
      title: "Learning Management System",
      description:
        "Educational platform for course creation, enrollment, and progress tracking.",
      image: "/placeholder.svg?height=600&width=800",
      categories: ["web", "education"],
      technologies: ["React", "GraphQL", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      longDescription:
        "A comprehensive learning management system that enables educators to create courses, manage enrollments, and track student progress. Built with React and GraphQL for efficient data fetching, it features video lessons, quizzes, and a discussion forum. The backend uses Node.js with MongoDB for data storage.",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description:
        "Mobile application for workout planning and progress monitoring.",
      image: "/placeholder.svg?height=600&width=800",
      categories: ["mobile", "health"],
      technologies: ["Flutter", "Firebase", "TensorFlow", "Google Fit API"],
      demoUrl: "#",
      githubUrl: "#",
      longDescription:
        "A feature-rich fitness tracking application that helps users plan workouts, track progress, and achieve fitness goals. Built with Flutter for cross-platform support, it integrates with Google Fit API for health data and uses TensorFlow for exercise form analysis. Firebase provides authentication and real-time data synchronization.",
    },
  ];

  const categories = [
    { value: "all", label: "All" },
    { value: "web", label: "Web Apps" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "ecommerce", label: "E-Commerce" },
    { value: "dashboard", label: "Dashboards" },
  ]

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.categories.includes(filter))

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="space-y-4">
            <div className="inline-block rounded-md bg-accent-light px-3 py-1 text-sm text-accent font-medium">
              Portfolio
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-text-primary">Our Latest Projects</h2>
            <p className="max-w-[900px] text-lg text-text-secondary">
              Explore our recent work and see how we've helped businesses transform their digital presence.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.value)}
              className={`mb-2 h-10 px-6 rounded-md font-semibold transition-all ${
                filter === category.value
                  ? "bg-primary hover:bg-primary-hover text-white shadow-elevation-1"
                  : "bg-surface border border-border text-text-primary hover:border-primary/50"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg border border-border bg-surface shadow-elevation-1 hover:shadow-elevation-2 transition-all"
              >
                <div className="aspect-video overflow-hidden bg-background">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 border-t border-border">
                  <h3 className="text-lg font-bold text-text-primary">{project.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-accent-light text-accent text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                    )}
                  </div>
                  <Button className="mt-4 w-full" onClick={() => setSelectedProject(project)}>
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                  <DialogDescription>
                    {selectedProject.categories
                      .map((category) => category.charAt(0).toUpperCase() + category.slice(1))
                      .join(" • ")}
                  </DialogDescription>
                </DialogHeader>
                <div className="aspect-video overflow-hidden rounded-md">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p>{selectedProject.longDescription}</p>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
