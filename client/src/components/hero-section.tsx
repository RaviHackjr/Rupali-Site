import { Play, Download, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1520637836862-4d197d17c431?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-horror-black/70 via-horror-black/50 to-horror-black" />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-horror text-blood-red mb-4 sm:mb-6 animate-flicker"
        >
          RUPALI
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-gothic text-white mb-6 sm:mb-8 animate-glow"
        >
          THE INDIAN HORROR GAME
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
        >
          Experience a tale of injustice, revenge, and supernatural terror. You have 3 days to escape from Rupali's wrath before she claims your soul.
        </motion.p>
        
        {/* Trailer Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mb-8 sm:mb-12"
        >
          <div className="relative max-w-4xl mx-auto bg-dark-gray rounded-lg overflow-hidden horror-glow cursor-pointer transform transition-transform duration-300 hover:scale-105"
               onClick={() => window.open('https://www.youtube.com/@Tech-Shubham', '_blank')}>
            <div className="aspect-video relative">
              <img 
                src="https://w0.peakpx.com/wallpaper/9/84/HD-wallpaper-possessed-girl-black-magic-dark-drama-entertainment-ghost-halloween-horror.jpg"
                alt="Possessed girl horror scene"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-horror-black/40 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-12 sm:w-16 h-12 sm:h-16 text-blood-red mb-2 sm:mb-4 animate-float mx-auto" />
                  <p className="text-lg sm:text-xl text-white font-semibold">Watch Trailer</p>
                  <p className="text-sm text-gray-300 mt-1">Click to visit YouTube channel</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <button 
            onClick={() => scrollToSection("download")}
            className="bg-horror-red hover:bg-blood-red text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 horror-glow flex items-center gap-2"
          >
            <Download size={20} />
            Coming Soon
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="border-2 border-blood-red text-blood-red hover:bg-blood-red hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Info size={20} />
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
