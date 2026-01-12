import Image from "next/image"
import { Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg inline-block">
              <Image
                src="/images/imperial-20logo-20horizontal.jpg"
                alt="Imperial Healthcare Systems"
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Healthcare-focused IT solutions built for performance, security, and scale.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-imperial" className="text-background/70 hover:text-background transition-colors text-sm">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#process" className="text-background/70 hover:text-background transition-colors text-sm">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors text-sm">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors text-sm">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors text-sm">
                  Cloud Infrastructure
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors text-sm">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors text-sm">
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-background/70 flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  212 N. 2nd St. STE 100,
                  <br />
                  Richmond, KY 40475,
                  <br />
                  United States
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-background/70 flex-shrink-0" />
                <a
                  href="mailto:info@imperialhealthcaresystems.com"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  info@imperialhealthsystems.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © {new Date().getFullYear()} Imperial Healthcare Systems LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
