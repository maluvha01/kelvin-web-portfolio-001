import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Urban Vogue Design System",
    description: "Comprehensive design system for fashion e-commerce platform with modern components and guidelines",
    image: "/urban-vogue-design-system.jpg",
    category: "Completed Projects",
    status: "Completed",
    tags: ["Design System", "UI/UX", "Branding"],
  },
  {
    title: "PayZim Payment Platform",
    description: "Centralized payment gateway integrating utilities, school fees, insurance, and medical aid services",
    image: "/payzim-payment-platform.jpg",
    category: "Upcoming Projects",
    status: "In Development",
    tags: ["Fintech", "Mobile App", "UI/UX"],
  },
  {
    title: "Urban Vogue Mobile App",
    description: "Fashion-forward mobile application with 3D product animations and personalized recommendations",
    image: "/urban-vogue-mobile-app.jpg",
    category: "Completed Projects",
    status: "Completed",
    tags: ["Mobile App", "E-commerce", "Fashion"],
  },
]

export function PortfolioPreview() {
  return (
    <section id="portfolio-preview" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Showcasing precision-engineered digital experiences that blend creativity with functionality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-primary text-primary-foreground"
                          : project.status === "Active"
                            ? "bg-accent text-accent-foreground"
                            : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="hover:animate-shake">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="hover:animate-shake">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="hover:animate-shake bg-transparent" asChild>
            <Link href="/portfolio">
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
