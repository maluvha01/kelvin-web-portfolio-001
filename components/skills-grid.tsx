"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Skill {
  name: string
  percentage: number
  category: string
}

const coreSkills: Skill[] = [
  { name: "Visual Design", percentage: 85, category: "core" },
  { name: "UI/UX Design", percentage: 80, category: "core" },
  { name: "Product Design", percentage: 75, category: "core" },
  { name: "Design Systems", percentage: 70, category: "core" },
]

const designTools: Skill[] = [
  { name: "Figma", percentage: 95, category: "tools" },
  { name: "Adobe Illustrator", percentage: 92, category: "tools" },
  { name: "Adobe Photoshop", percentage: 90, category: "tools" },
  { name: "Canva", percentage: 88, category: "tools" },
  { name: "Framer", percentage: 85, category: "tools" },
]

const designExpertise: Skill[] = [
  { name: "Visual Design", percentage: 96, category: "expertise" },
  { name: "Wireframing", percentage: 95, category: "expertise" },
  { name: "Prototyping", percentage: 92, category: "expertise" },
  { name: "User Research", percentage: 90, category: "expertise" },
  { name: "Interaction Design", percentage: 88, category: "expertise" },
]

const specializations = [
  "Mobile-First Design",
  "Design Systems",
  "Accessibility (WCAG)",
  "User Journey Mapping",
  "Brand Identity",
  "Typography",
  "Color Theory",
  "Responsive Design",
  "Usability Testing",
]

const skillDescriptions: Record<string, string> = {
  "Mobile-First Design": "Prioritize designing for small screens first, scaling up for larger devices.",
  "Design Systems": "Create consistent, reusable components and guidelines for scalable design.",
  "Accessibility (WCAG)": "Ensure designs are usable by people with disabilities following WCAG standards.",
  "User Journey Mapping": "Visualize the complete user experience from awareness to conversion.",
  "Brand Identity": "Develop cohesive visual identity systems that reflect brand values and personality.",
  Typography: "Master the art of selecting and arranging typefaces for optimal readability and impact.",
  "Color Theory": "Apply color psychology and harmony principles to create effective visual hierarchies.",
  "Responsive Design": "Create layouts that adapt seamlessly across all device sizes and orientations.",
  "Usability Testing": "Conduct user testing to validate design decisions and improve user experience.",
}

function ProgressBar({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-2000 ease-out"
          style={{
            width: isVisible ? `${skill.percentage}%` : "0%",
          }}
        />
      </div>
    </div>
  )
}

export function SkillsGrid() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Core Skills */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Core Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {coreSkills.map((skill, index) => (
                <ProgressBar key={skill.name} skill={skill} delay={index * 200} />
              ))}
            </CardContent>
          </Card>

          {/* Design Tools */}
          <Card className="animate-fade-in-up animation-delay-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Design Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {designTools.map((skill, index) => (
                <ProgressBar key={skill.name} skill={skill} delay={index * 200 + 400} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Design Expertise */}
        <Card className="animate-fade-in-up animation-delay-400 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Design Expertise</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designExpertise.map((skill, index) => (
              <ProgressBar key={skill.name} skill={skill} delay={index * 200 + 800} />
            ))}
          </CardContent>
        </Card>

        {/* Specializations */}
        <Card className="animate-fade-in-up animation-delay-600">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Specializations & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {specializations.map((spec, index) => (
                <div key={spec} className="relative" style={{ animationDelay: `${index * 100}ms` }}>
                  <div
                    className="bg-muted rounded-lg p-3 text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 hover:animate-shake cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={() => setActiveTooltip(activeTooltip === spec ? null : spec)}
                    onMouseEnter={() => setActiveTooltip(spec)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        setActiveTooltip(activeTooltip === spec ? null : spec)
                      }
                      if (e.key === "Escape") {
                        setActiveTooltip(null)
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-expanded={activeTooltip === spec}
                    aria-describedby={`tooltip-${spec.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <span className="text-sm font-medium">{spec}</span>
                  </div>

                  {activeTooltip === spec && (
                    <div
                      id={`tooltip-${spec.replace(/\s+/g, "-").toLowerCase()}`}
                      className="absolute z-10 w-64 p-3 mt-2 text-sm bg-popover text-popover-foreground border rounded-lg shadow-lg animate-fade-in-up"
                      style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        top: "100%",
                      }}
                      role="tooltip"
                    >
                      <div className="relative">
                        {skillDescriptions[spec]}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-popover"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
