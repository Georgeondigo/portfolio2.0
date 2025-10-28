import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const footerLinks = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/GeorgeOndigo", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/Georgeondigo", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:georgeondigo8@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          {/* Brand */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">GO</span>
              </div>
              <span className="font-bold text-xl">George Ondigo</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-stack developer passionate about building secure, scalable, and visually engaging
              web applications that deliver real-world impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t text-center md:flex md:justify-between md:items-center mt-8">
          <p className="text-sm text-muted-foreground">
            © {currentYear} George Ondigo. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-3 md:mt-0">
            Designed by George Ondigo
          </p>
        </div>
      </div>
    </footer>
  );
}
