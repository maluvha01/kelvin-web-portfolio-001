"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, FileText, Download } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Kelvin-Mutukwa-CV.pdf"
    link.download = "Kelvin-Mutukwa-CV.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadCoverLetter = () => {
    const link = document.createElement("a")
    link.href = "/Kelvin-Mutukwa-Cover-Letter.pdf"
    link.download = "Kelvin-Mutukwa-Cover-Letter.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const isActiveLink = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-shadow duration-300 ${
        isScrolled ? "shadow-lg shadow-primary/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="font-bold text-xl text-foreground">Kelvin Mutukwa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActiveLink("/") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                isActiveLink("/about") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              href="/skills"
              className={`transition-colors ${
                isActiveLink("/skills") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Skills
            </Link>
            <Link
              href="/portfolio"
              className={`transition-colors ${
                isActiveLink("/portfolio") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                isActiveLink("/contact") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>

            {/* Resume Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="hover:animate-shake bg-transparent">
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={downloadCV}>
                  <Download className="w-4 h-4 mr-2" />
                  View CV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={downloadCoverLetter}>
                  <Download className="w-4 h-4 mr-2" />
                  View Cover Letter
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
              <Link
                href="/"
                className={`block px-3 py-2 transition-colors ${
                  isActiveLink("/") ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 transition-colors ${
                  isActiveLink("/about") ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/skills"
                className={`block px-3 py-2 transition-colors ${
                  isActiveLink("/skills") ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/portfolio"
                className={`block px-3 py-2 transition-colors ${
                  isActiveLink("/portfolio") ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 transition-colors ${
                  isActiveLink("/contact") ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full bg-transparent">
                      <FileText className="w-4 h-4 mr-2" />
                      Resume
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={downloadCV}>
                      <Download className="w-4 h-4 mr-2" />
                      View CV
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={downloadCoverLetter}>
                      <Download className="w-4 h-4 mr-2" />
                      View Cover Letter
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
