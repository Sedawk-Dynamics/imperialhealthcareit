"use client"

import { motion } from "framer-motion"
import { Smartphone, Cloud, Shield, Brain, Workflow, Package } from "lucide-react"

export function Capabilities() {
  const capabilities = [
    {
      icon: Smartphone,
      title: "Web & Mobile Development",
      description: "Custom healthcare applications with modern frameworks and responsive design.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure, CI/CD pipelines, and cloud-native architecture.",
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "HIPAA-ready security solutions, penetration testing, and compliance audits.",
    },
    {
      icon: Brain,
      title: "AI & Data Analytics",
      description: "Machine learning models, predictive analytics, and intelligent automation.",
    },
    {
      icon: Workflow,
      title: "Automation & Digital Transformation",
      description: "Process optimization, workflow automation, and legacy system modernization.",
    },
    {
      icon: Package,
      title: "Enterprise Software",
      description: "EHR/EMR systems, patient portals, and healthcare management platforms.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT services designed specifically for healthcare organizations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-xl bg-card backdrop-blur-sm border border-border shadow-sm hover:shadow-lg hover:border-accent/50 transition-all group relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                    <capability.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
