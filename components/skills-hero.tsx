"use client"

export function SkillsHero() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up text-balance">
          My <span className="text-primary">Skills</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in-up animation-delay-200 text-pretty max-w-3xl mx-auto">
          A comprehensive overview of my design abilities and expertise, constantly evolving with industry trends and
          best practices.
        </p>
      </div>
    </section>
  )
}
