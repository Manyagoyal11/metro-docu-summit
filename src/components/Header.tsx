import kmrlLogo from "@/assets/kmrl-logo.png";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Upload", href: "#upload" },
    { name: "Email Connect", href: "#email" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={kmrlLogo} 
              alt="Kochi Metro Rail Limited" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-semibold text-primary">Document Summarizer</h1>
              <p className="text-sm text-muted-foreground">Kochi Metro Rail Limited</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium py-2"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-secondary">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;