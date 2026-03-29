import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-white/60">
            Available for Internships & Full-time
          </span>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/10 glass p-1 group-hover:border-primary/50 transition-colors">
                <img 
                  src="/hxz.jpg" 
                  alt="Karl He" 
                  className="w-full h-full object-cover object-[center_22%] rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity -z-10" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-left">
              <span className="text-gradient">KARL</span> <br />
              <span className="text-gradient opacity-80">HE</span>
            </h1>
          </div>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/60 mb-12 font-light leading-relaxed italic">
            "AGI is coming. When it arrives, the biggest discovery won’t be the machine — it will be ourselves."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              View Experience
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
