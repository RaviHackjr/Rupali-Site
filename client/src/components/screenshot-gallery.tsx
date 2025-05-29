import { Expand } from "lucide-react";
import { motion } from "framer-motion";

const screenshots = [
  {
    src: "https://w0.peakpx.com/wallpaper/555/270/HD-wallpaper-haunted-house-horror-fantasy-dark-forest-arts-crows-black.jpg",
    alt: "Haunted house in dark forest with crows"
  },
  {
    src: "https://wallpapersok.com/images/hd/halloween-horror-wallpaper-wallpaper-studio-10-tens-of-thousands-1tyajg1olmxbv394.jpg",
    alt: "Halloween horror scene"
  },
  {
    src: "https://wallpapers.com/images/hd/horror-movie-collage-2948-x-1422-qpvygnp9m6d19arm.jpg",
    alt: "Horror movie collage"
  },
  {
    src: "https://imgs.crazygames.com/creepy-granny-scream-scary-freddy-horror-game.png?metadata=none&quality=40&width=1200&height=630&fit=crop",
    alt: "Creepy granny horror game scene"
  }
];

export default function ScreenshotGallery() {
  return (
    <section className="py-20 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-horror text-blood-red mb-6 animate-glow">Game Screenshots</h2>

        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg horror-glow hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-horror-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Expand className="text-white text-xl sm:text-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
