import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-horror-black py-12 border-t border-horror-red/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-horror text-blood-red mb-4 animate-glow">RUPALI</h3>
          <p className="text-gray-400 mb-6">© 2024 FlameDev Studio. All rights reserved.</p>
          
          <div className="flex justify-center space-x-8 text-sm text-gray-400 mb-8">
            <Link href="/privacy-policy" className="hover:text-blood-red transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-blood-red transition-colors duration-300">Terms of Service</Link>
            <Link href="/press-kit" className="hover:text-blood-red transition-colors duration-300">Press Kit</Link>
          </div>
          
          <div className="mt-8">
            <p className="text-xs text-gray-500">
              Made By FlameDev Studio Since 2024
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
