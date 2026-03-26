import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Code2, Database } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: "Columbia University",
    desc: "MS in Data Science (Expected Dec 2026). Focus on NLP and AI Systems."
  },
  {
    icon: GraduationCap,
    title: "UC San Diego",
    desc: "BS in Math-CS (GPA: 3.94/4.0). Research in LLM Fairness."
  },
  {
    icon: Database,
    title: "Knowledge Graphs",
    desc: "Implementing Neo4j-based hybrid retrieval systems with KPMG."
  },
  {
    icon: Code2,
    title: "ML Engineering",
    desc: "Scalable RAG pipelines and distributed LLM evaluation."
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Architecting <span className="text-primary">Intelligent</span> <br />
              Systems with <span className="text-secondary">Precision</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-2xl mx-auto">
              I am a Machine Learning Engineer and Researcher focused on building robust AI systems. 
              Currently pursuing my Master's at Columbia University, I lead research initiatives in RAG systems and LLM fairness.
            </p>
            <p className="text-lg text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto">
              My background in Mathematics and Computer Science from UCSD provides a strong foundation for developing complex algorithms. 
              From collaborating with KPMG on healthcare policy analysis to publishing at ICLR, I strive to bridge the gap between theoretical research and production-grade engineering.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {highlights.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                  <item.icon className="text-primary mb-4" size={24} />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
