"use client"

import { motion } from "framer-motion"
import { Building2, Globe2, Award, Users } from "lucide-react"

export function WhoWeAre() {
  const stats = [
    { icon: Building2, label: "Healthcare IT Focus", value: "100%" },
    { icon: Globe2, label: "Global Delivery", value: "24/7" },
    { icon: Award, label: "HIPAA Ready", value: "Certified" },
    { icon: Users, label: "Expert Team", value: "Dedicated" },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Imperial Healthcare Systems is a US-registered healthcare technology company delivering end-to-end IT
                services for providers, enterprises, and digital health platforms.
              </p>
              <p>
                We combine engineering excellence, regulatory expertise, and cloud-native architecture to build reliable
                healthcare systems that drive operational efficiency and improve patient outcomes.
              </p>
              <p>
                Our team specializes in secure web and mobile development, cloud infrastructure, AI automation,
                cybersecurity, and compliance-driven solutions designed specifically for the healthcare industry.
              </p>
            </div>
          </motion.div>

          {/* Visual / Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm border border-border hover:border-primary/30 transition-all group"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
