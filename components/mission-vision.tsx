"use client"

import { motion } from "framer-motion"
import { Target, Telescope } from "lucide-react"

export function MissionVision() {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      content:
        "To accelerate healthcare innovation through secure, compliant, and intelligent technology solutions that improve operational efficiency, patient engagement, and clinical outcomes.",
      gradient: "from-primary/10 to-primary/5",
      iconColor: "text-primary",
    },
    {
      icon: Telescope,
      title: "Our Vision",
      content:
        "To become a global leader in healthcare digital transformation by delivering scalable platforms, AI-driven intelligence, and resilient infrastructure that enables healthcare organizations to thrive.",
      gradient: "from-accent/10 to-accent/5",
      iconColor: "text-accent",
    },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className={`h-full p-8 rounded-2xl bg-gradient-to-br ${card.gradient} backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-card/50 ${card.iconColor} mb-6`}>
                  <card.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.content}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
