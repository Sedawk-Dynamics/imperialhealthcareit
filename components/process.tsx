import { Search, Pen, Code, Lock, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We analyze your needs, challenges, and opportunities to create a tailored strategy.",
  },
  {
    icon: Pen,
    title: "Design",
    description: "User-centered design and architecture planning with healthcare best practices.",
  },
  {
    icon: Code,
    title: "Build",
    description: "Agile development with continuous feedback and iterative improvements.",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "Comprehensive security testing, compliance validation, and risk assessment.",
  },
  {
    icon: Rocket,
    title: "Scale",
    description: "Deployment, monitoring, optimization, and ongoing support for growth.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-6">Our Delivery Process</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            A proven methodology that ensures quality, security, and success at every stage.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30">
                    <step.icon className="h-9 w-9" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
