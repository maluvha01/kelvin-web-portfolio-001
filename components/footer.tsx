import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, MessageCircle } from "lucide-react"
import { ScrollToTop } from "./scroll-to-top"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border relative">
      <ScrollToTop />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">K</span>
              </div>
              <span className="font-bold text-xl text-foreground">Kelvin Web Portfolio</span>
            </div>
            <p className="text-muted-foreground text-sm">Driven by Creativity, Inspired by Machines</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/portfolio" className="block text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex flex-col space-y-3">
              <Button variant="ghost" size="sm" className="justify-start hover:animate-shake" asChild>
                <a href="https://linkedin.com/in/kelvin-mutukwa" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="justify-start hover:animate-shake" asChild>
                <a href="https://wa.me/263713882084" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2025 Kelvin Mutukwa. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
