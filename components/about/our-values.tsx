"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle2, Lightbulb, Users, TrendingUp, RefreshCw } from "lucide-react"

export function OurValues() {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize data protection and cybersecurity in every solution we deliver.",
    },
    {
      icon: CheckCircle2,
      title: "Compliance & Integrity",
      description: "HIPAA compliance and regulatory adherence are embedded in our development process.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Automation",
      description: "We leverage AI, automation, and modern technologies to drive efficiency.",
    },
    {
      icon: Users,
      title: "Customer Partnership",
      description: "Your success is our success. We build collaborative, long-term relationships.",
    },
    {
      icon: TrendingUp,
      title: "Scalability & Reliability",
      description: "Our solutions are built to scale with your organization and ensure uptime.",
    },
    {
      icon: RefreshCw,
      title: "Continuous Improvement",
      description: "We embrace agile methodologies and iterate based on feedback and insights.",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every project, partnership, and innovation we deliver.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
