"use client"

import { motion } from "framer-motion"
import { MapPin, Building, Mail, Phone } from "lucide-react"

export function CompanyPresence() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Company Presence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Headquartered in the United States, serving healthcare organizations globally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm border border-border shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Building className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Imperial Healthcare Systems LLC</h3>
                    <p className="text-muted-foreground text-sm">US-Registered Healthcare IT Company</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Registered Address</div>
                      <div className="text-muted-foreground text-sm leading-relaxed">
                        212 N. 2nd St. STE 100,
                        <br />
                        Richmond, KY 40475,
                        <br />
                        United States
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Email</div>
                    <div className="font-semibold">info@imperialhealthsystems.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Business Hours</div>
                    <div className="font-semibold">Mon-Fri, 9 AM - 6 PM EST</div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-4 h-48 rounded-lg bg-muted/30 border border-border flex items-center justify-center overflow-hidden">
                  <div className="text-center p-4">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Richmond, Kentucky</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
