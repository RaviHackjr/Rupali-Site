import { useState } from "react";
import { Clock, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function DownloadSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the email to your backend
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing! We'll notify you when Rupali is ready.",
    });
    setEmail("");
  };

  return (
    <section id="download" className="py-20 bg-gradient-to-b from-horror-black via-dark-gray to-horror-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-horror text-blood-red mb-6 animate-glow">Download</h2>

          
          <div className="bg-medium-gray/30 rounded-2xl p-6 sm:p-8 lg:p-12 border border-horror-red/30 horror-glow">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Clock className="w-16 h-16 text-blood-red mb-6 animate-float mx-auto" />
              <h3 className="text-3xl md:text-4xl font-gothic text-white mb-4 animate-flicker">COMING SOON</h3>
              <p className="text-xl text-gray-300 mb-8">Rupali - The Indian Horror Game is currently in development. Be the first to experience the terror when it releases.</p>
            </motion.div>
            
            {/* Newsletter Signup */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md mx-auto"
            >
              <h4 className="text-xl text-white mb-4">Get Notified on Release</h4>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-horror-black border border-horror-red/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blood-red transition-colors duration-300 text-sm sm:text-base"
                />
                <button 
                  onClick={handleSubscribe}
                  className="bg-horror-red hover:bg-blood-red text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 horror-glow flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Bell size={16} className="sm:w-[18px] sm:h-[18px]" />
                  Notify Me
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-3">We'll only send you updates about the game release.</p>
            </motion.div>
            
            {/* Platform Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <h4 className="text-lg text-white mb-6">Coming to:</h4>
              <div className="flex justify-center space-x-8 text-4xl text-gray-400">
                <div className="hover:text-blood-red transition-colors duration-300 cursor-pointer" title="Windows">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 12.01V5.99L9.5 4.99v7.02H0zm10.5-7.5L24 2.99v9.5h-13.5V4.51zM0 18.01v-6.02h9.5v7.02L0 18.01zm10.5.49v-7.02H24v9.5l-13.5-1.99V18.5z"/>
                  </svg>
                </div>
                <div className="hover:text-blood-red transition-colors duration-300 cursor-pointer" title="Steam">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.624 0 11.999-5.375 11.999-12S18.603.001 11.979.001zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.635.24-1.33-.026-1.948-.266-.617-.728-1.108-1.36-1.372-.618-.257-1.342-.221-1.975.037l1.52.63c.955.398 1.406 1.505 1.009 2.46-.397.957-1.506 1.406-2.461 1.009-.955-.397-1.406-1.505-1.009-2.46z"/>
                  </svg>
                </div>
                <div className="hover:text-blood-red transition-colors duration-300 cursor-pointer" title="PC Gaming">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.8 12l-9.1 5.1V7zM2.2 12L11.3 7v10zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
