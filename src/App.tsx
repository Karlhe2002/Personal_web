import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Background from './components/Background';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading animation inspired by AI token generation
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-mono tracking-widest mb-4"
            >
              INITIALIZING_SYSTEM
            </motion.div>
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-white"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1 }}
              className="mt-4 text-[10px] font-mono uppercase tracking-[0.3em]"
            >
              Loading neural weights...
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Custom cursor or other global effects could go here */}
    </div>
  );
}
