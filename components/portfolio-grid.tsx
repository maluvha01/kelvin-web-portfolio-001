"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play, Calendar, Users } from "lucide-react"

const portfolioData = {
  "Completed Projects": [
    {
      id: 1,
      title: "Urban Vogue Design System",
      description:
        "A comprehensive design system blending modern urban aesthetics with functional e-commerce patterns. Features responsive components and accessibility-first approach.",
      image: "/urban-vogue-design-system.jpg",
      tags: ["Design System", "UI/UX", "E-commerce"],
      status: "Completed",
      progress: 100,
      client: "Urban Vogue",
      year: "2024",
      hasVideo: false,
      projectLink:
        "https://www.figma.com/design/2CYZw8ZnHvvPuwblqqsc2C/design-system-urban-vogue?node-id=0-1&t=DlZpoCddLHEkLHY9-1",
    },
    {
      id: 2,
      title: "Urban Vogue Application",
      description:
        "A feature-rich mobile app for the modern urbanite. Includes AR try-on features, personalized recommendations, and seamless shopping experience.",
      image: "/urban-vogue-mobile-app.jpg",
      tags: ["Mobile App", "UI/UX", "AR Integration"],
      status: "Completed",
      progress: 100,
      client: "Urban Vogue",
      year: "2024",
      hasVideo: true,
      projectLink:
        "https://www.figma.com/proto/eLKh0ZJFMbjFwBNgtHvcY0/Urban-Vogue-App?page-id=1%3A266&node-id=26-678&starting-point-node-id=1%3A2111&t=5UgnWY7U2jqSgmpe-1",
    },
    {
      id: 3,
      title: "Urban Vogue User Flow",
      description:
        "Comprehensive user flow mapping for the Urban Vogue app. Detailed journey mapping from onboarding to purchase completion.",
      image: "/urban-vogue-user-flow.jpg",
      tags: ["User Flow", "UX Research", "Journey Mapping"],
      status: "Completed",
      progress: 100,
      client: "Urban Vogue",
      year: "2024",
      hasVideo: false,
      projectLink:
        "https://www.figma.com/board/YuEXC65yeQASUKYT92OeBd/URBAN-VOGUE-USER-FLOW?node-id=0-1&t=C9wNvYqvLoZR17v0-1",
    },
  ],
  "Upcoming Projects": [
    {
      id: 4,
      title: "PayZim",
      description:
        "A centralized payment platform for essential services in Zimbabwe. Integrates EcoCash, ZIPIT, and bank transfers for utilities, school fees, insurance, and more.",
      image: "/payzim-payment-platform.jpg",
      tags: ["FinTech", "Mobile App", "Payment Gateway"],
      status: "In Development",
      progress: 25,
      client: "PayZim Technologies",
      year: "2025",
      hasVideo: false,
    },
    {
      id: 5,
      title: "Zvimba Fitness Brand",
      description:
        "A dynamic fitness brand identity with gym equipment solutions, workout programs, and motivational support for fitness enthusiasts.",
      image: "/zvimba-fitness-brand.jpg",
      tags: ["Fitness", "Brand Identity", "Web Design"],
      status: "Coming Soon",
      progress: 15,
      client: "Zvimba Fitness",
      year: "2025",
      hasVideo: false,
    },
    {
      id: 6,
      title: "Nhapitapi Culinary Brand",
      description:
        "A cultural culinary brand dedicated to preserving authentic Zimbabwean flavors including Sadza, Dovi, Mopane worms, and traditional recipes.",
      image: "/nhapitapi-culinary-brand.jpg",
      tags: ["Culinary", "Brand Identity", "Cultural Heritage"],
      status: "Coming Soon",
      progress: 10,
      client: "Nhapitapi Culinary",
      year: "2025",
      hasVideo: false,
    },
  ],
}

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("Completed Projects")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const categories = Object.keys(portfolioData)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-primary text-primary-foreground"
      case "In Development":
        return "bg-accent text-accent-foreground"
      case "Coming Soon":
        return "bg-secondary text-secondary-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const handleProjectClick = (projectLink?: string) => {
    if (projectLink) {
      window.open(projectLink, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="hover:animate-shake"
            >
              {category === "Completed Projects" && <Calendar className="w-4 h-4 mr-2" />}
              {category === "Upcoming Projects" && <Users className="w-4 h-4 mr-2" />}
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData[activeCategory as keyof typeof portfolioData].map((project, index) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Video Play Button Overlay */}
                  {project.hasVideo && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>

                  {/* Progress Bar */}
                  {project.progress > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1">
                        <div
                          className="bg-primary h-1 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </CardDescription>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Project Details */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>

                {/* Expanded Details */}
                {selectedProject === project.id && (
                  <div className="border-t border-border pt-4 mt-4 animate-fade-in-up">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Project Overview</h4>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:animate-shake bg-transparent"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleProjectClick(project.projectLink)
                          }}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </Button>
                        <Button size="sm" variant="outline" className="hover:animate-shake bg-transparent">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                {selectedProject !== project.id && (
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="hover:animate-shake flex-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleProjectClick(project.projectLink)
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                    <Button size="sm" variant="ghost" className="hover:animate-shake">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-muted/30 animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your <span className="text-primary">Next Project</span>?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's collaborate to create something extraordinary. Whether it's a sleek interface, a complete brand
                identity, or an innovative digital experience, I'm here to bring your vision to life.
              </p>
              <Link href="/contact">
                <Button size="lg" className="hover:animate-shake">
                  Get In Touch
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
