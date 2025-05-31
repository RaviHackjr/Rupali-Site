import { motion } from "framer-motion";
import { Download, Image, FileText, Users, Calendar, Trophy } from "lucide-react";

export default function PressKit() {
  const assets = [
    { name: "Game Logo (PNG)", size: "2048x2048", type: "Logo" },
    { name: "Game Banner", size: "1920x1080", type: "Banner" },
    { name: "Character Art - Rupali", size: "1200x1600", type: "Character" },
    { name: "Screenshot Pack", size: "Various", type: "Screenshots" },
    { name: "Game Icon Set", size: "512x512", type: "Icons" }
  ];

  const facts = [
    { label: "Genre", value: "Horror, Survival, Adventure" },
    { label: "Platform", value: "PC, Mobile (Coming Soon)" },
    { label: "Release Date", value: "2025 (TBA)" },
    { label: "Developer", value: "FlameDev Studio" },
    { label: "Team Size", value: "5 Developers" },
    { label: "Development Time", value: "2+ Years" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-horror-black via-dark-gray to-horror-black pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-horror text-blood-red mb-6 animate-glow-subtle">Press Kit</h1>
          <p className="text-gray-300 text-lg">Rupali - The Indian Horror Game</p>
          <p className="text-gray-400 text-sm mt-2">Media Resources and Information</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-medium-gray/30 rounded-lg p-8 border border-horror-red/20"
          >
            <div className="flex items-center mb-6">
              <FileText className="text-blood-red mr-3" size={24} />
              <h2 className="text-2xl font-gothic text-white">Game Description</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                <strong className="text-white">Rupali - The Indian Horror Game</strong> is an immersive horror experience 
                that combines traditional Indian folklore with modern psychological horror elements.
              </p>
              <p className="leading-relaxed">
                Players find themselves trapped in a supernatural nightmare, where they must collect mystical items, 
                solve puzzles, and survive encounters with Rupali - a vengeful spirit seeking justice for past wrongs.
              </p>
              <p className="leading-relaxed">
                The game features a unique three-day cycle system where danger escalates, creating intense psychological 
                pressure and strategic gameplay decisions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-medium-gray/30 rounded-lg p-8 border border-horror-red/20"
          >
            <div className="flex items-center mb-6">
              <Trophy className="text-blood-red mr-3" size={24} />
              <h2 className="text-2xl font-gothic text-white">Key Features</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blood-red mr-2">▪</span>
                Authentic Indian horror folklore and mythology
              </li>
              <li className="flex items-start">
                <span className="text-blood-red mr-2">▪</span>
                Dynamic three-day survival system
              </li>
              <li className="flex items-start">
                <span className="text-blood-red mr-2">▪</span>
                Psychological horror with supernatural elements
              </li>
              <li className="flex items-start">
                <span className="text-blood-red mr-2">▪</span>
                Mystical weapon and holy water mechanics
              </li>
              <li className="flex items-start">
                <span className="text-blood-red mr-2">▪</span>
                Immersive atmosphere with cultural authenticity
              </li>
              <li className="flex items-start">
                <span className="text-blood-red mr-2">▪</span>
                Multiple difficulty levels and gameplay strategies
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-dark-gray/50 rounded-lg p-8 border border-horror-red/10 mb-12"
        >
          <div className="flex items-center mb-6">
            <Calendar className="text-blood-red mr-3" size={24} />
            <h2 className="text-2xl font-gothic text-white">Game Facts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-horror-black/30 rounded-lg p-4 border border-horror-red/20"
              >
                <h4 className="text-blood-red font-semibold mb-2">{fact.label}</h4>
                <p className="text-gray-300">{fact.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-dark-gray/50 rounded-lg p-8 border border-horror-red/10 mb-12"
        >
          <div className="flex items-center mb-6">
            <Image className="text-blood-red mr-3" size={24} />
            <h2 className="text-2xl font-gothic text-white">Media Assets</h2>
          </div>
          <p className="text-gray-300 mb-6">
            High-resolution assets for press coverage and media use. All assets are free to use for editorial purposes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {assets.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-horror-black/30 rounded-lg p-4 border border-horror-red/20 hover:border-horror-red/50 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold">{asset.name}</h4>
                    <p className="text-gray-400 text-sm">{asset.size} • {asset.type}</p>
                  </div>
                  <Download className="text-blood-red hover:text-white transition-colors cursor-pointer" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-dark-gray/50 rounded-lg p-8 border border-horror-red/10"
        >
          <div className="flex items-center mb-6">
            <Users className="text-blood-red mr-3" size={24} />
            <h2 className="text-2xl font-gothic text-white">Developer Information</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">About FlameDev Studio</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                FlameDev Studio is an independent game development team passionate about creating immersive horror experiences. 
                Founded in 2024, our team specializes in narrative-driven games that explore cultural themes and psychological horror.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With Rupali being our flagship title, we aim to bring authentic Indian folklore to the global gaming community 
                while delivering genuinely terrifying gameplay experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Press Contact:</strong> Raviguj4554@gmail.com</p>
                <p><strong className="text-white">Business Inquiries:</strong> Raviguj4554@gmail.com</p>
                <p><strong className="text-white">YouTube:</strong> @Tech-Shubham</p>
                <p><strong className="text-white">Discord:</strong> https://discord.gg/gmSkRjytJX</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}