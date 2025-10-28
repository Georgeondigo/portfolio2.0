import { useState } from "react";
import { services, Service } from "@/data/services";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Code, Server, Palette, Zap, CloudCog, Users, ArrowRight, Brush, Sparkles, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const iconMap = {
  Code: Code,
  Server: Server,
  Palette: Palette,
  Zap: Zap,
  CloudCog: CloudCog,
  Users: Users,
  Brush: Brush,
};

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 sm:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">What I Offer</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 p-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            My Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            End-to-end development solutions designed to bring your ideas to life with 
            cutting-edge technology and exceptional user experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isHovered = hoveredService === service.id;

            return (
              <Card
                key={service.id}
                className="group p-6 sm:p-8 cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-border/50 hover:border-primary/30 relative overflow-hidden backdrop-blur-sm bg-background/50"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`
                }}
                onClick={() => setSelectedService(service)}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />
                
                <div className="relative z-10 space-y-5">
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-4 group-hover:scale-110 transition-all duration-300 shadow-lg ${isHovered ? 'scale-110' : ''}`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {service.category}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2">
                    {service.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 2 && (
                      <div className="text-xs text-primary font-medium">
                        +{service.features.length - 2} more features
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          {selectedService && (
            <>
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <DialogHeader className="flex-1">
                  <div className="flex items-center gap-4">
                    {(() => {
                      const Icon = iconMap[selectedService.icon as keyof typeof iconMap];
                      return (
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary p-3">
                          <Icon className="w-full h-full text-white" />
                        </div>
                      );
                    })()}
                    <div>
                      <DialogTitle className="text-2xl sm:text-3xl font-bold">
                        {selectedService.title}
                      </DialogTitle>
                      <Badge variant="secondary" className="mt-2">
                        {selectedService.category}
                      </Badge>
                    </div>
                  </div>
                </DialogHeader>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                <DialogDescription className="text-lg text-muted-foreground leading-relaxed">
                  {selectedService.fullDescription}
                </DialogDescription>

                {/* Key Features */}
                <div>
                  <h4 className="font-bold text-xl mb-6 flex items-center gap-3">
                    <div className="w-2 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                    Key Features & Capabilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                {selectedService.technologies && (
                  <div>
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                      <div className="w-2 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="px-3 py-1 text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-border/50 bg-muted/20">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <Button
                    size="lg"
                    onClick={() => {
                      setSelectedService(null);
                      setTimeout(() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg min-w-40"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Get in Touch
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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