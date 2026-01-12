"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/">
              <Image
                src="/images/imperial-20logo-20png.png"
                alt="Imperial Healthcare Systems - Think Excellence"
                width={320}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
            <a
              href="/#services"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="/#why-imperial"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Why Us
            </a>
            <a href="/#process" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Process
            </a>
            <a href="/#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Contact
            </a>
            <Button asChild>
              <a href="/#contact">Request Consultation</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="/about"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/#services"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/#why-imperial"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="/#process"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="/#contact"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button asChild className="w-full">
              <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Request Consultation
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
