import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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
  )
}
