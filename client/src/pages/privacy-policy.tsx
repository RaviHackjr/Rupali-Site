import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-horror-black via-dark-gray to-horror-black pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-horror text-blood-red mb-6 animate-glow-subtle">Privacy Policy</h1>
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
            <Shield className="text-blood-red mr-3" size={24} />
            <h2 className="text-2xl font-gothic text-white">Your Privacy Matters</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            At FlameDev Studio, we respect your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your data when you interact with Rupali - The Indian Horror Game.
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
              <Database className="text-blood-red mr-3" size={20} />
              <h3 className="text-xl font-semibold text-white">Information We Collect</h3>
            </div>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li>• Email addresses for game updates and notifications</li>
              <li>• Game progress and achievements data</li>
              <li>• Device information and performance metrics</li>
              <li>• Crash reports and error logs for game improvement</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-gray/50 rounded-lg p-6 border border-horror-red/10"
          >
            <div className="flex items-center mb-4">
              <Eye className="text-blood-red mr-3" size={20} />
              <h3 className="text-xl font-semibold text-white">How We Use Your Information</h3>
            </div>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li>• Provide game updates and new content notifications</li>
              <li>• Improve game performance and user experience</li>
              <li>• Respond to customer support inquiries</li>
              <li>• Analyze game usage to enhance gameplay features</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-dark-gray/50 rounded-lg p-6 border border-horror-red/10"
          >
            <div className="flex items-center mb-4">
              <Lock className="text-blood-red mr-3" size={20} />
              <h3 className="text-xl font-semibold text-white">Data Protection</h3>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>We implement industry-standard security measures to protect your personal information:</p>
              <ul className="space-y-2 ml-6">
                <li>• Encrypted data transmission and storage</li>
                <li>• Limited access to personal information</li>
                <li>• Regular security audits and updates</li>
                <li>• No sharing of personal data with third parties without consent</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-dark-gray/50 rounded-lg p-6 border border-horror-red/10"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Your Rights</h3>
            <div className="text-gray-300 space-y-3">
              <p>You have the right to:</p>
              <ul className="space-y-2 ml-6">
                <li>• Access your personal data we have collected</li>
                <li>• Request correction of inaccurate information</li>
                <li>• Request deletion of your personal data</li>
                <li>• Opt-out of promotional communications</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-medium-gray/30 rounded-lg p-6 border border-horror-red/20"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy or your personal data, please contact us at:
            </p>
            <p className="text-blood-red mt-2 font-medium">Raviguj4554@gmail.com</p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}