import {
  Code2,
  Database,
  Layers,
  Workflow,
  Cloud,
  Zap,
  ExternalLink,
  Award,
  Sparkles,
  Target,
  Users,
  Lightbulb,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const skills = [
  { 
    icon: Code2, 
    name: "Frontend", 
    description: "React, TypeScript, Next.js",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Database,
    name: "Backend",
    description: "Node.js, PostgreSQL, MongoDB",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: Cloud, 
    name: "Cloud", 
    description: "AWS, Docker, Kubernetes",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Layers,
    name: "Architecture",
    description: "Microservices, API Design",
    color: "from-purple-500 to-pink-500"
  },
  { 
    icon: Workflow, 
    name: "DevOps", 
    description: "CI/CD, GitHub Actions",
    color: "from-yellow-500 to-amber-500"
  },
  { 
    icon: Zap, 
    name: "Performance", 
    description: "Optimization, Caching",
    color: "from-violet-500 to-purple-500"
  },
];

const certificates = [
  {
    name: "AWS re/Start Graduate",
    subtitle: "Silver Class (Emobilis & AWS Ajira)",
    link: "https://www.credly.com/badges/c221ed83-75bb-4af0-9047-520052b3ec49/linked_in_profile",
    icon: Cloud,
  },
  {
    name: "Diploma in Computer Science",
    subtitle: "Riara University",
    link: "https://www.riarauniversity.ac.ke",
    icon: Award,
  },
];

const stats = [
  { icon: Target, value: "2+", label: "Years Experience" },
  { icon: Users, value: "12+", label: "Projects Completed" },
  { icon: Sparkles, value: "100%", label: "Client Satisfaction" },
  { icon: Lightbulb, value: "∞", label: "Creative Solutions" },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 sm:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">About Me</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold mb-6 p-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent ">
              Crafting Digital Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full " />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="p-6 text-center backdrop-blur-sm bg-background/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 150}ms both` : 'none'
                }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Main Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Section - Text */}
            <div className="space-y-6 animate-fade-in">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground font-light">
                  As a passionate  developer 
                  I specialize in building secure, scalable, and user-focused applications 
                  that solve real-world problems. My journey has spanned from developing 
                  academic projects to leading QA and system testing in professional settings.
                </p>

                <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground font-light">
                  Beyond backend systems and cloud integration, I have a keen eye for 
                  <strong className="text-foreground"> visually engaging web and UI designs </strong> 
                  that seamlessly blend functionality with aesthetic appeal.
                </p>

                <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground font-light">
                  I'm driven by clean code, modern architectures, and continuous learning. 
                  Whether implementing complex features, optimizing performance, or mentoring 
                  team members, I bring dedication and expertise to every project.
                </p>
              </div>

              {/* Education */}
              <div className="pt-6 space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Education & Background
                </h3>
                <div className="space-y-3">
                  {[
                    "🎓 B.S. in Computer Science – Cooperative University of Kenya",
                    "🎓 Diploma in Computer Science – Riara University",
                    "☁️ AWS re/Start Graduate – Emobilis & AWS Ajira",
                  ].map((text, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-4 p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm sm:text-base">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="pt-6 space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Certifications
                </h3>
                <div className="grid gap-3">
                  {certificates.map((cert) => (
                    <Button
                      key={cert.name}
                      variant="outline"
                      className="h-auto py-4 px-4 text-left justify-start border-border/50 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300 group"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      <div className="flex items-start gap-3 w-full">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <cert.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {cert.name}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {cert.subtitle}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card
                    key={skill.name}
                    className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-border/50 hover:border-primary/30 group cursor-pointer backdrop-blur-sm bg-background/50"
                    style={{
                      animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                      animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 100}ms both` : 'none'
                    }}
                  >
                    <div className="space-y-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                          {skill.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}