import React from 'react';
import { motion } from 'motion/react';

const skillCategories = [
  {
    title: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Computer Vision", "NLP"]
  },
  {
    title: "LLM Systems",
    skills: ["RAG Pipelines", "LangChain", "LlamaIndex", "Prompt Engineering", "LLM Evaluation"]
  },
  {
    title: "Data Engineering",
    skills: ["Neo4j", "PostgreSQL", "MongoDB", "Spark", "Kafka", "ETL Pipelines"]
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "MLOps"]
  },
  {
    title: "Programming",
    skills: ["Python", "C++", "SQL", "TypeScript", "Go", "Bash"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Technical Arsenal</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to build scalable AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-50" />
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      </div>
    </section>
  );
}
