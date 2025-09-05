"use client"

import { ParallaxBackground } from "./parallax-background"

export function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParallaxBackground
        imageSrc="/mercedes-benz-luxury-car-background.jpg"
        overlayOpacity="bg-background/85 dark:bg-background/90"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up text-balance">
          About <span className="text-primary">Kelvin Mutukwa</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-in-up animation-delay-200 text-pretty">
          Where automotive precision meets digital creativity
        </p>
      </div>
    </section>
  )
}
