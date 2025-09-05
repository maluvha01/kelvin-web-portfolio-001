"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Car, Palette, Code, Lightbulb } from "lucide-react"

export function AboutContent() {
  const [isExpanded, setIsExpanded] = useState(false)

  const skills = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Crafting intuitive and visually stunning user experiences",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Graphic Design",
      description: "Creating compelling visual identities and brand experiences",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Automotive Aesthetics",
      description: "Drawing inspiration from premium automotive design principles",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Strategy",
      description: "Developing innovative solutions that drive engagement",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Image */}
          <div className="animate-fade-in-up">
            <div className="relative"></div>
          </div>

          {/* About Text */}
          <div className="animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
              Passion Meets <span className="text-primary">Precision</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Welcome to my digital garage, where creativity meets engineering precision. I'm Kelvin Mutukwa, a UI/UX
                designer with an unconventional source of inspiration – the automotive world.
              </p>

              <p>
                Just as premium car manufacturers like Mercedes-Benz, Volkswagen, and Landcruiser obsess over every
                detail to create machines that are both beautiful and functional, I approach digital design with the
                same meticulous attention to craftsmanship.
              </p>

              {/* Expandable Content */}
              <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? "max-h-none" : "max-h-0"}`}>
                <div className="space-y-4 pt-4">
                  <p>
                    My journey began in the intersection of technology and automotive aesthetics. I discovered that the
                    principles that make a car dashboard intuitive, a gear shift satisfying, and a steering wheel
                    responsive are the same principles that make digital interfaces exceptional.
                  </p>

                  <p>
                    Every project I undertake is approached like designing a luxury vehicle – starting with the user
                    experience as the engine, wrapping it in beautiful visual design as the body, and ensuring every
                    interaction is as smooth as a well-tuned transmission.
                  </p>

                  <p>
                    When I'm not crafting digital experiences, you'll find me studying the latest automotive designs,
                    exploring how physical and digital interfaces can learn from each other, and constantly pushing the
                    boundaries of what's possible in the creative space.
                  </p>

                  <p>
                    My mission is simple: to create digital experiences that don't just function – they perform. Just
                    like the machines that inspire me.
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-6 hover:animate-shake bg-transparent"
              >
                {isExpanded ? (
                  <>
                    Read Less <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Core <span className="text-primary">Expertise</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{skill.icon}</div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <Card className="bg-muted/30 animate-fade-in-up">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Design <span className="text-primary">Philosophy</span>
            </h3>
            <blockquote className="text-lg text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
              "Great design, like a perfectly engineered machine, should be invisible in its complexity yet undeniable
              in its impact. Every pixel, like every component in a luxury car, serves a purpose and contributes to an
              experience that feels effortless yet extraordinary."
            </blockquote>
            <cite className="text-primary font-medium mt-4 block">- Kelvin Mutukwa</cite>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
