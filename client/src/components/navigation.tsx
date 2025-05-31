import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { soundManager } from "@/lib/soundManager";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blood-red cursor-pointer tracking-wider font-gothic transform hover:scale-105 transition-transform duration-300"
                  onClick={() => scrollToSection("home")}>
                FLAMEDEV
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection("home")}
                  onMouseEnter={() => soundManager.play('buttonHover')}
                  onClick={() => {
                    soundManager.play('buttonClick');
                    scrollToSection("home");
                  }}
                  className="text-white font-medium hover:text-blood-red transition-colors duration-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-white font-medium hover:text-blood-red transition-colors duration-300"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("team")}
                  className="text-white font-medium hover:text-blood-red transition-colors duration-300"
                >
                  Team
                </button>
                <button 
                  onClick={() => scrollToSection("download")}
                  className="text-white font-medium hover:text-blood-red transition-colors duration-300"
                >
                  Download
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-white font-medium hover:text-blood-red transition-colors duration-300"
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
