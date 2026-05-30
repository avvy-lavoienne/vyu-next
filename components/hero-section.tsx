"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-48 pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-gradient-to-br from-primary/15 to-accent/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] translate-x-[10%] translate-y-[30%] rounded-full bg-gradient-to-tr from-accent/15 to-primary/5 blur-3xl"></div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl text-text-primary leading-tight">
                Innovative Technology Solutions for Modern Businesses
              </h1>
              <p className="max-w-[600px] text-lg text-text-secondary leading-relaxed">
                We deliver cutting-edge web applications and digital experiences, crafting every aspect of your beautiful vision into our digital realm.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
              <Button asChild size="lg" className="h-11 px-8 bg-primary hover:bg-primary-hover text-white font-semibold rounded-md">
                <Link href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 px-8 border border-border rounded-md font-semibold text-text-primary hover:bg-background">
                <Link href="#portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-border bg-surface shadow-elevation-2 hover:shadow-elevation-3 transition-shadow">
              <Image
                src="/images/hero.jpeg"
                alt="Innovative technology solutions with React and Next.js"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
