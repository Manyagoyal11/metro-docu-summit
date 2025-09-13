const Footer = () => {
  const contactInfo = [
    { label: "Phone", value: "+91 484 2334800" },
    { label: "Email", value: "info@kochimetro.org" },
    { label: "Address", value: "Kochi Metro Rail Limited, Kochi" },
  ];

  const quickLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "FAQ", href: "#faq" },
    { name: "Support", href: "#support" },
  ];

  const projectDetails = [
    { name: "Project Status", value: "Operational" },
    { name: "Technology", value: "AI-Powered Analysis" },
    { name: "Security", value: "Government Grade" },
    { name: "Compliance", value: "ISO 27001" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground border-t-4 border-accent">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index}>
                  <p className="text-sm font-medium">{item.label}:</p>
                  <p className="text-sm text-primary-foreground/80">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-primary-foreground/80 hover:text-accent transition-[var(--transition-smooth)]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Project Details</h3>
            <div className="space-y-3">
              {projectDetails.map((item, index) => (
                <div key={index}>
                  <p className="text-sm font-medium">{item.name}:</p>
                  <p className="text-sm text-primary-foreground/80">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Kochi Metro Rail Limited. All rights reserved. | Document Summarizer System
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;