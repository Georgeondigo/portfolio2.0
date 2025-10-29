import { useState } from "react";
import { projects, categories, Project } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Maximize2, Minimize2, ChevronLeft, ChevronRight, X } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Handle project selection
  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to first image when opening a new project
    setIsImageFullscreen(false);
  };

  // Navigation functions for multiple images
  const nextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  // Get current image URL
  const getCurrentImage = () => {
    if (selectedProject?.images && selectedProject.images.length > 0) {
      return selectedProject.images[currentImageIndex];
    }
    return selectedProject?.image || "";
  };

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleProjectSelect(project)}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Multiple Images Indicator */}
                {project.images && project.images.length > 1 && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-black/60 text-white border-0 text-xs">
                      {project.images.length} photos
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => {
        setSelectedProject(null);
        setIsImageFullscreen(false);
        setCurrentImageIndex(0);
      }}>
        <DialogContent className={`max-w-4xl ${isImageFullscreen ? 'max-w-7xl' : 'max-w-4xl'} max-h-[90vh] overflow-y-auto p-0`}>
          {selectedProject && (
            <>
              {/* Project Image Gallery */}
              <div className={`relative bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden ${
                isImageFullscreen ? 'h-[60vh]' : 'h-[400px]'
              }`}>
                <img
                  src={getCurrentImage()}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain bg-white/50"
                />
                
                {/* Navigation Arrows for Multiple Images */}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}
                
                {/* Image Counter */}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                )}
                
                {/* Fullscreen Toggle Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
                  onClick={() => setIsImageFullscreen(!isImageFullscreen)}
                >
                  {isImageFullscreen ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </Button>

                {/* Close Button */}
<Button
  size="icon"
  variant="secondary"
  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm z-50"
  onClick={() => {
    if (isImageFullscreen) {
      setIsImageFullscreen(false);
    } else {
      setSelectedProject(null);
    }
  }}
>
  <X className="w-4 h-4" />
</Button>

              </div>

              {/* Image Thumbnails */}
              {selectedProject.images && selectedProject.images.length > 1 && !isImageFullscreen && (
                <div className="px-6 pt-4 pb-2 border-b">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex 
                            ? 'border-primary ring-2 ring-primary/20' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-6 space-y-6">
                <DialogHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <Badge variant="secondary">{selectedProject.category}</Badge>
                      <DialogTitle className="text-2xl md:text-3xl font-bold">
                        {selectedProject.title}
                      </DialogTitle>
                    </div>
                    
                    <div className="flex gap-2">
                      {selectedProject.githubUrl && (
                        <Button
                          size="icon"
                          variant="outline"
                          asChild
                        >
                          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {selectedProject.liveUrl && (
                        <Button
                          size="icon"
                          variant="outline"
                          asChild
                        >
                          <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogHeader>

                <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                  {selectedProject.fullDescription}
                </DialogDescription>

                <div className="mt-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-primary rounded-full" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Additional Project Details */}
                {selectedProject.features && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <div className="w-1 h-5 bg-primary rounded-full" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                  <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row gap-3">
                    {selectedProject.githubUrl && (
                      <Button
                        variant="outline"
                        className="flex-1"
                        asChild
                      >
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {selectedProject.liveUrl && (
                      <Button
                        className="flex-1"
                        asChild
                      >
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}