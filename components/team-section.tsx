"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"

type TeamMember = {
  id: number
  name: string
  role: string
  bio: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export function TeamSection() {
  const team: TeamMember[] = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in tech, Alex leads our vision and strategy.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 2,
      name: "Jamie Taylor",
      role: "CTO",
      bio: "Jamie oversees our technical direction and ensures we stay at the cutting edge.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Sam Rivera",
      role: "Lead Designer",
      bio: "Sam brings creativity and user-centered design principles to all our projects.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Jordan Lee",
      role: "Senior Developer",
      bio: "Jordan specializes in building scalable and performant web applications.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        github: "#",
      },
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
    <section id="team" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Experts Behind VyuApp
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Our talented team brings together diverse skills and experiences to deliver exceptional results.
            </p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              className="group relative overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-all"
              variants={itemVariants}
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-muted-foreground">{member.bio}</p>
                <div className="mt-4 flex space-x-2">
                  {member.social.twitter && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.social.linkedin && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.social.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
