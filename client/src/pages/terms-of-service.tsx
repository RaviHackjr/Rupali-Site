import { motion } from "framer-motion";
import { FileText, AlertTriangle, Scale, Users } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-horror-black via-dark-gray to-horror-black pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-horror text-blood-red mb-6 animate-glow-subtle">Terms of Service</h1>
          <p className="text-gray-300 text-lg">FlameDev Studio - Rupali Horror Game</p>
          <p className="text-gray-400 text-sm mt-2">Last updated: December 2024</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-medium-gray/30 rounded-lg p-8 border border-horror-red/20 mb-8"
        >
          <div className="flex items-center mb-6">
            <FileText className="text-blood-red mr-3" size={24} />
            <h2 className="text-2xl font-gothic text-white">Agreement to Terms</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            By accessing and playing Rupali - The Indian Horror Game, you agree to be bound by these Terms of Service. 
            Please read these terms carefully before using our game and services.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-dark-gray/50 rounded-lg p-6 border border-horror-red/10"
          >
            <div className="flex items-center mb-4">
              <Users className="text-blood-red mr-3" size={20} />
              <h3 className="text-xl font-semibold text-white">Use License</h3>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>FlameDev Studio grants you a personal, non-transferable license to:</p>
              <ul className="space-y-2 ml-6">
                <li>• Download and play Rupali - The Indian Horror Game</li>
                <li>• Use the game for personal entertainment purposes</li>
                <li>• Access game updates and additional content</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-gray/50 rounded-lg p-6 border border-horror-red/10"
          >
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-blood-red mr-3" size={20} />
              <h3 className="text-xl font-semibold text-white">Restrictions</h3>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>You may not:</p>
              <ul className="space-y-2 ml-6">
                <li>• Modify, reverse engineer, or decompile the game</li>
                <li>• Distribute or share the game files without permission</li>
                <li>• Use cheats, hacks, or exploits that affect gameplay</li>
                <li>• Create derivative works based on the game</li>
                <li>• Use the game for commercial purposes without authorization</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-dark-gray/50 rounded-lg p-6 border border-horror-red/10"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Content Warning</h3>
            <div className="text-gray-300 space-y-3">
              <p className="text-yellow-400 font-medium">Rupali - The Indian Horror Game contains mature content including:</p>
              <ul className="space-y-2 ml-6">
                <li>• Horror themes and scary imagery</li>
                <li>• Supernatural elements and violence</li>
                <li>• Intense psychological scenarios</li>
                <li>• Content not suitable for children under 16</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4">
                Player discretion is advised. The game is intended for mature audiences only.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-dark-gray/50 rounded-lg p-6 border border-horror-red/10"
          >
            <div className="flex items-center mb-4">
              <Scale className="text-blood-red mr-3" size={20} />
              <h3 className="text-xl font-semibold text-white">Disclaimer</h3>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                The game is provided "as is" without warranties of any kind. FlameDev Studio does not guarantee:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Uninterrupted or error-free gameplay</li>
                <li>• Compatibility with all devices</li>
                <li>• Availability of online features at all times</li>
                <li>• That the game will meet your expectations</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-dark-gray/50 rounded-lg p-6 border border-horror-red/10"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h3>
            <p className="text-gray-300">
              FlameDev Studio shall not be liable for any indirect, incidental, special, or consequential damages 
              arising from your use of Rupali - The Indian Horror Game, including but not limited to loss of data, 
              profits, or business interruption.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-medium-gray/30 rounded-lg p-6 border border-horror-red/20"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            <p className="text-gray-300">
              For questions about these Terms of Service or the game, contact us at:
            </p>
            <p className="text-blood-red mt-2 font-medium">Raviguj4554@gmail.com</p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}