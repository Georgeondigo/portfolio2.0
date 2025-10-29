import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-60 h-60 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center animate-fade-in-up">
          {/* Avatar or Image placeholder */}
          <div className="relative">
  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px] animate-glow">
    <img
      src="/gopic.JPG"
      alt="George Ondigo"
      className="w-full h-full rounded-full object-cover border-2 border-background"
    />
  </div>
  <div className="absolute -bottom-2 right-2 bg-primary text-background px-3 py-1 rounded-full text-xs font-semibold shadow-md">
    Dev
  </div>
</div>


          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight px-2">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                George Ondigo
              </span>
            </h1>

            <p className="text-x sm:text-2xl md:text-3xl font-semibold text-muted-foreground">
              Software Developer & Designer
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-6 leading-relaxed">
              Crafting elegant, scalable solutions with modern technologies. 
              Specialized in full-stack development, cloud architecture, web/graphic design, and performance optimization.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto px-4 sm:px-0">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="group shadow-lg hover:shadow-xl transition-all border-2 w-full sm:w-auto"
            >
              <span className="flex items-center gap-2 justify-center">
                Contact Me
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Tech stack preview */}
          <div className="pt-8 sm:pt-12 flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground px-2">
            {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card border border-border hover:border-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
        </div>
      </div>
    </section>
  );
}