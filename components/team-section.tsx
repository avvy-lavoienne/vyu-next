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
      name: "Firman Firdaus",
      role: "Fullstack Developer",
      bio: "Crafting every vision in my digital realm world.",
      image: "/images/team/firman.jpeg?height=400&width=400",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="space-y-4">
            <div className="inline-block rounded-md bg-accent-light px-3 py-1 text-sm text-accent font-medium">
              Our Team
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-text-primary">
              Meet the Experts Behind VyuApp
            </h2>
            <p className="max-w-[900px] text-lg text-text-secondary">
              Our talented team brings together diverse skills and experiences
              to deliver exceptional results.
            </p>
          </div>
        </div>

        <motion.div
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-surface shadow-elevation-1 hover:shadow-elevation-2 transition-all max-w-sm"
              variants={itemVariants}
            >
              <div className="aspect-square overflow-hidden bg-background">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role} at VyuApp`}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />
              </div>
              <div className="p-6 border-t border-border">
                <h3 className="text-lg font-bold text-text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-medium">{member.role}</p>
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
  );
}
