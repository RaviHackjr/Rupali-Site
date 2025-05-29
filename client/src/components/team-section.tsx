import { Crown, Monitor, Box, PaintbrushVertical, Users, Flame } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Shubham",
    title: "Owner & Team Leader",
    contribution: "Game script development and overall project leadership. Responsible for the creative vision and technical direction of Rupali.",
    icon: Crown
  },
  {
    name: "Dev Robin",
    title: "GUI & UI Manager",
    contribution: "Specializes in game user interface design and user experience optimization. Creates the visual elements that players interact with.",
    icon: Monitor
  },
  {
    name: "Neo",
    title: "Model Designer",
    contribution: "Creates detailed 3D models and assets that bring the horror world of Rupali to life with stunning visual fidelity.",
    icon: Box
  },
  {
    name: "Tushar",
    title: "Designer & Modeler",
    contribution: "Handles both design concepts and 3D modeling work, ensuring every visual element maintains the horror aesthetic.",
    icon: PaintbrushVertical
  },
  {
    name: "Blakite Ravi",
    title: "Manager",
    contribution: "Provides project management and oversight, ensuring smooth coordination between all development aspects.",
    icon: Users
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-dark-gray to-horror-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-horror text-blood-red mb-4 sm:mb-6 animate-glow">Flame Dev Studio</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">Meet the talented team behind Rupali - The Indian Horror Game</p>

        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-medium-gray/50 rounded-lg p-6 border border-horror-red/20 hover:border-horror-red/50 transition-all duration-300 transform hover:scale-105 horror-glow"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-horror-red to-blood-red rounded-full mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blood-red font-medium mb-3">{member.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.contribution}</p>
                  <div className="flex justify-center space-x-3 mt-4">
                    <div className="w-2 h-2 bg-horror-red rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blood-red rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-horror-red rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          
          {/* Studio Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-horror-red/20 to-blood-red/20 rounded-lg p-6 border border-horror-red/50 hover:border-blood-red transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-horror-red to-blood-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <Flame className="text-white text-2xl animate-flicker" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Flame Dev Studio</h3>
              <p className="text-blood-red font-medium mb-3">Independent Game Studio</p>
              <p className="text-gray-400 text-sm leading-relaxed">Dedicated to creating immersive horror experiences that push the boundaries of fear and storytelling.</p>
              <div className="flex justify-center space-x-3 mt-4">
                <div className="w-2 h-2 bg-horror-red rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blood-red rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-horror-red rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
