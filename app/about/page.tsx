import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About - Kelvin Mutukwa",
  description:
    "Learn about Kelvin Mutukwa's journey in UI/UX design, passion for automotive aesthetics, and creative philosophy.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutContent />
      <Footer />
    </main>
  )
}
