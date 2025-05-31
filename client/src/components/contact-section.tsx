import { Mail, MessageCircle, Youtube, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const socialLinks = [
    { icon: Youtube, name: "YouTube", color: "hover:text-red-500", url: "https://www.youtube.com/@Tech-Shubham" },
    { icon: MessageCircle, name: "Discord", color: "hover:text-indigo-500", url: "https://discord.gg/gmSkRjytJX" },
    { icon: Instagram, name: "Instagram", color: "hover:text-pink-500", url: "https://discord.gg/gmSkRjytJX" }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-horror text-blood-red mb-6 animate-glow-subtle">Contact</h2>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-gothic text-white mb-6">Get in Touch</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Have questions about Rupali? Want to follow our development progress? Connect with Flame Dev Studio through our social channels or drop us a message.
            </p>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-horror-red rounded-lg flex items-center justify-center">
                  <Mail className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">Raviguj4554@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-horror-red rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Discord</h4>
                  <p className="text-gray-400">https://discord.gg/gmSkRjytJX</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-gothic text-white mb-6">Follow Development</h3>
            <div className="bg-medium-gray/50 rounded-lg p-8 border border-horror-red/20">
              <p className="text-gray-300 mb-6">Stay updated with our latest development progress, behind-the-scenes content, and exclusive previews.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-horror-red/20 hover:bg-horror-red/40 p-4 rounded-lg text-center transition-all duration-300 group ${social.color}`}
                    >
                      <IconComponent className="text-2xl text-blood-red group-hover:text-white transition-colors duration-300 mx-auto" />
                      <p className="text-gray-400 text-xs mt-2 group-hover:text-white transition-colors duration-300">{social.name}</p>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}