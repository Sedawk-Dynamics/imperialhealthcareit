import { Button } from "@/components/ui/button"
import { Shield, Lock, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(11,94,215,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,122,0,0.08),transparent_50%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
            Healthcare-Focused IT Solutions Built for <span className="text-primary">Performance</span>,{" "}
            <span className="text-accent">Security</span> & Scale
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground text-balance mb-12 max-w-3xl mx-auto leading-relaxed">
            From cloud infrastructure and AI automation to secure healthcare applications — Imperial Healthcare Systems
            delivers future-ready digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" asChild className="text-base px-8 py-6 h-auto">
              <a href="#contact">Request Consultation</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 h-auto bg-transparent">
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <div className="flex items-center gap-3 px-6 py-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border shadow-sm">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold">HIPAA Ready</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border shadow-sm">
              <Lock className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold">Secure Infrastructure</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border shadow-sm">
              <Award className="h-6 w-6 text-accent" />
              <span className="text-sm font-semibold">Healthcare Expertise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
