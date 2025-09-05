"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Play } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ParallaxBackground } from "./parallax-background"
import { SignatureAnimation } from "./signature-animation"

export function HeroSection() {
  const roles = [
    "I am a UI/UX Designer",
    "I am a Visual Designer",
    "I am a Graphics Designer",
    "I am a Product Designer",
  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }
  }, [displayText, isTyping, currentRoleIndex, roles])

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio-preview")
    portfolioSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Component */}
      <ParallaxBackground
        imageSrc="/luxury-sports-car-in-modern-garage-with-dramatic-l.jpg"
        overlayOpacity="bg-background/60 dark:bg-background/80"
      />

      <SignatureAnimation />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up text-balance">
          Driven by <span className="text-primary">Creativity</span>,
          <br />
          Inspired by <span className="text-primary">Machines</span>
        </h1>

        <div className="text-xl sm:text-2xl text-primary mb-8 animate-fade-in-up animation-delay-200 h-8 flex items-center justify-center">
          <span className="font-medium">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-400 text-pretty">
          Crafting digital experiences with the precision of automotive engineering
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <Button size="lg" className="hover:animate-shake text-lg px-8 py-3" onClick={scrollToPortfolio}>
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>

          <Button variant="outline" size="lg" className="hover:animate-shake text-lg px-8 py-3 bg-transparent" asChild>
            <Link href="/contact">
              <Play className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToPortfolio} className="rounded-full">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
