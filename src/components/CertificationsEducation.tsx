import { ExternalLink, Award, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";

export function CertificationsEducation() {
  return (
    <section id="certifications" className="py-20 sm:py-24 bg-background">
      <div className="container px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Certifications & Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Certifications */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Certifications
                </h3>
              </div>

              {certifications.map((cert, index) => (
                <Card
                  key={cert.id}
                  className="relative group border border-border bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:scale-[1.01] transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded-r-lg" />

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {cert.institution}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {cert.date}
                      </span>
                      {cert.link && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 border-primary/40 hover:border-primary hover:bg-primary/10 text-primary group-hover:translate-x-1 transition-transform"
                          onClick={() => window.open(cert.link, "_blank")}
                        >
                          View Certificate
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Education */}
            <div
              className="space-y-6 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Education
                </h3>
              </div>

              {education.map((edu, index) => (
                <Card
                  key={edu.id}
                  className="relative group border border-border bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:scale-[1.01] transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 120}ms` }}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-secondary to-primary rounded-r-lg" />

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {edu.year}
                      </span>
                      {edu.link && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 text-secondary hover:bg-secondary/10 hover:text-secondary group-hover:translate-x-1 transition-transform"
                          onClick={() => window.open(edu.link, "_blank")}
                        >
                          Visit Website
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
