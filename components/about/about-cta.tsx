"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"

export function AboutCTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,94,215,0.15),transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Let&apos;s Build the Future of <span className="text-primary">Healthcare Technology</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground text-balance mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with us to transform your healthcare IT infrastructure with secure, scalable, and intelligent
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-base px-8 py-6 h-auto group">
              <a href="mailto:info@imperialhealthsystems.com" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 py-6 h-auto bg-card/50 backdrop-blur-sm"
            >
              <a href="mailto:info@imperialhealthsystems.com" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Schedule Consultation
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
