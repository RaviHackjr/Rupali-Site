import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-horror-black/95" : "bg-horror-black/80"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-horror text-blood-red animate-glow cursor-pointer"
                  onClick={() => scrollToSection("home")}>
                RUPALI
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection("home")}
                  className="hover:text-blood-red transition-colors duration-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blood-red transition-colors duration-300"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("team")}
                  className="hover:text-blood-red transition-colors duration-300"
                >
                  Team
                </button>
                <button 
                  onClick={() => scrollToSection("download")}
                  className="hover:text-blood-red transition-colors duration-300"
                >
                  Download
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blood-red transition-colors duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blood-red transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-horror-black/90" onClick={() => setIsMenuOpen(false)} />
          <div className="relative z-50 bg-horror-black border-r border-horror-red/20 w-64 h-full pt-20 px-6">
            <div className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-blood-red transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-blood-red transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("team")}
                className="text-left hover:text-blood-red transition-colors duration-300"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection("download")}
                className="text-left hover:text-blood-red transition-colors duration-300"
              >
                Download
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-blood-red transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
