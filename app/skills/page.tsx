import { Navigation } from "@/components/navigation"
import { SkillsHero } from "@/components/skills-hero"
import { SkillsGrid } from "@/components/skills-grid"
import { Footer } from "@/components/footer"

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SkillsHero />
      <SkillsGrid />
      <Footer />
    </main>
  )
}
