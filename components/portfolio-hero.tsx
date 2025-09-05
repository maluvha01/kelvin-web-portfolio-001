export function PortfolioHero() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up text-balance">
          My <span className="text-primary">Portfolio</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-in-up animation-delay-200 text-pretty max-w-3xl mx-auto">
          A showcase of precision-engineered digital experiences that blend automotive aesthetics with cutting-edge
          design
        </p>
      </div>
    </section>
  )
}
