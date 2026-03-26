import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
              Let's build the <br />
              <span className="text-gradient">Future of AI</span>.
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
              Currently pursuing MS in Data Science at Columbia University. <br />
              Open to internship and full-time opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <a
                href="mailto:xh2727@columbia.edu"
                className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
              >
                <Mail size={20} />
                xh2727@columbia.edu
              </a>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/Karlhe2002" },
                  { icon: Linkedin, href: "https://linkedin.com" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-white/30 text-sm font-mono">
                © 2024 Karl He. BUILT WITH PRECISION.
              </p>
              <div className="flex gap-8">
                <a href="#" className="text-white/30 hover:text-white text-sm transition-colors flex items-center gap-1">
                  Resume <ArrowUpRight size={14} />
                </a>
                <a href="https://github.com/Karlhe2002" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white text-sm transition-colors flex items-center gap-1">
                  GitHub <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
