import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TestimonialsSection } from "@/components/testimonials-section";
import { StatsSection } from "@/components/stats-section";

export const metadata: Metadata = {
  title: "VyuApp - Innovative Technology Solutions | Web & Mobile Development",
  description:
    "VyuApp delivers cutting-edge web development, mobile apps, and digital solutions for modern businesses. Expert fintech-grade design and scalable architecture.",
  keywords: [
    "web development",
    "mobile app development",
    "Next.js development",
    "React applications",
    "fintech solutions",
    "software development company",
    "UI/UX design agency",
    "digital transformation",
    "custom web applications",
    "technology consulting",
  ],
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
