import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyImperial } from "@/components/why-imperial"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <WhyImperial />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
