import { Navigation } from "@/components/navigation"
import { PortfolioHero } from "@/components/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Portfolio - Kelvin Mutukwa",
  description:
    "Explore Kelvin Mutukwa's portfolio of UI/UX design projects, automotive-inspired interfaces, and creative digital experiences.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioHero />
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
