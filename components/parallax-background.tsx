"use client"

import { useEffect, useState } from "react"

interface ParallaxBackgroundProps {
  imageSrc: string
  className?: string
  overlayOpacity?: string
}

export function ParallaxBackground({
  imageSrc,
  className = "",
  overlayOpacity = "bg-background/60 dark:bg-background/80",
}: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url('${imageSrc}')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className={`absolute inset-0 ${overlayOpacity}`} />
    </div>
  )
}
