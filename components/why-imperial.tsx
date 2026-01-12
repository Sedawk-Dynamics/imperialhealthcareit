import { Shield, Award, Zap, FileCheck, Handshake } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Every solution built with security-first principles and HIPAA compliance at the core.",
  },
  {
    icon: Award,
    title: "Healthcare Domain Expertise",
    description: "Deep understanding of healthcare workflows, regulations, and patient care requirements.",
  },
  {
    icon: Zap,
    title: "Scalable Cloud Architecture",
    description: "Future-proof infrastructure that grows with your organization and handles increasing demands.",
  },
  {
    icon: FileCheck,
    title: "Compliance-First Engineering",
    description: "Built-in regulatory compliance and audit-ready systems for peace of mind.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description: "Dedicated support and strategic guidance beyond initial implementation.",
  },
]

export function WhyImperial() {
  return (
    <section id="why-imperial" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-6">
            Why Choose Imperial Healthcare Systems
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Trusted by healthcare organizations for mission-critical technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-accent/10 text-accent">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
