"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Globe, Stethoscope, Network } from "lucide-react"

export function WhyChoose() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "HIPAA & Security Focus",
      description: "Built-in compliance and security-first architecture in every solution we deliver.",
      stat: "100%",
      label: "Compliant",
    },
    {
      icon: Globe,
      title: "Global Delivery Model",
      description: "24/7 support with distributed teams ensuring continuous project momentum.",
      stat: "24/7",
      label: "Support",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Domain Expertise",
      description: "Deep understanding of healthcare workflows, regulations, and patient care systems.",
      stat: "10+",
      label: "Years",
    },
    {
      icon: Network,
      title: "Scalable Enterprise Architecture",
      description: "Cloud-native solutions designed to grow with your organization's needs.",
      stat: "99.9%",
      label: "Uptime",
    },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Choose Imperial</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven expertise, unwavering commitment, and healthcare-specific solutions that deliver results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-xl bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group relative overflow-hidden"
              >
                {/* Animated gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />

                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <reason.icon className="h-6 w-6" />
                  </div>

                  {/* Stat */}
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-primary mb-1">{reason.stat}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{reason.label}</div>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
