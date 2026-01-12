"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { MissionVision } from "@/components/about/mission-vision"
import { OurValues } from "@/components/about/our-values"
import { WhoWeAre } from "@/components/about/who-we-are"
import { Capabilities } from "@/components/about/capabilities"
import { WhyChoose } from "@/components/about/why-choose"
import { CompanyPresence } from "@/components/about/company-presence"
import { AboutCTA } from "@/components/about/about-cta"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutHero />
      <MissionVision />
      <OurValues />
      <WhoWeAre />
      <Capabilities />
      <WhyChoose />
      <CompanyPresence />
      <AboutCTA />
      <Footer />
    </div>
  )
}
