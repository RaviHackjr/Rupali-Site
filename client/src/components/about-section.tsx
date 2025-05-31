import { Eye, Puzzle, Sword, Droplets } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-horror-black to-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-horror text-blood-red mb-4 sm:mb-6 animate-glow-subtle">About The Game</h2>

        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl sm:text-3xl font-gothic text-white mb-4 sm:mb-6">The Story</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Rupali belonged to a very poor family. For her marriage, her father sold all their belongings. Her mother-in-law never welcomed her and constantly tortured her for the meager dowry she brought. The torture escalated daily until one day, when Rupali accidentally broke a plate, her mother-in-law burned her alive in a fit of rage. It was labeled as an "accident."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Her husband Ramesh was shocked by this so-called accident. But soon, paranormal activities began haunting the house. Rupali's vengeful spirit consumed her mother-in-law and now believes her husband was complicit in her murder. You are Ramesh, and she's coming for you next.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-medium-gray/50 p-6 rounded-lg border border-horror-red/20 hover:border-horror-red/50 transition-all duration-300"
              >
                <Eye className="text-blood-red text-2xl mb-3" />
                <h4 className="text-white font-semibold mb-2">3-Day Survival</h4>
                <p className="text-gray-400 text-sm">You have exactly 3 days to escape. Rupali doesn't eat non-veg on Monday and Tuesday, but Wednesday is deadly.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-medium-gray/50 p-6 rounded-lg border border-horror-red/20 hover:border-horror-red/50 transition-all duration-300"
              >
                <Puzzle className="text-blood-red text-2xl mb-3" />
                <h4 className="text-white font-semibold mb-2">Supernatural Locks</h4>
                <p className="text-gray-400 text-sm">Doors are locked by Rupali's dark magic. Find items to forge a powerful sword and break her curse.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-medium-gray/50 p-6 rounded-lg border border-horror-red/20 hover:border-horror-red/50 transition-all duration-300"
              >
                <Sword className="text-blood-red text-2xl mb-3" />
                <h4 className="text-white font-semibold mb-2">Mystical Weapon</h4>
                <p className="text-gray-400 text-sm">Collect necessary items to unlock a super powerful sword that can cut through Rupali's black magic.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-medium-gray/50 p-6 rounded-lg border border-horror-red/20 hover:border-horror-red/50 transition-all duration-300"
              >
                <Droplets className="text-blood-red text-2xl mb-3" />
                <h4 className="text-white font-semibold mb-2">Holy Water Defense</h4>
                <p className="text-gray-400 text-sm">Use holy water for temporary relief - makes Rupali disappear for 30s to 1 minute depending on difficulty.</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="bg-gradient-to-br from-horror-red/10 to-blood-red/10 rounded-xl p-6 sm:p-8 border border-horror-red/30">
              <h3 className="text-2xl sm:text-3xl font-gothic text-white mb-4 sm:mb-6">Main Gameplay</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blood-red rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-300">You are locked in your house by Rupali's supernatural powers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blood-red rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-300">Collect items to unlock the mystical sword that can break her curse</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blood-red rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-300">Monday & Tuesday: Safe days - Rupali won't kill if caught</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blood-red rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-300">Wednesday: Deadly day - Getting caught means death</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blood-red rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-300">Use holy water for temporary protection when in danger</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
