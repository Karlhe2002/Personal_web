import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ChevronRight, Layers, Cpu, ShieldCheck, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Healthcare Policy RAG System",
    subtitle: "Columbia University × KPMG",
    desc: "Built an end-to-end RAG system for analyzing and comparing New York State Medicaid provider policy documents.",
    tech: ["Python", "Neo4j", "Cypher", "LLM Pipelines", "Semantic Chunking"],
    icon: Layers,
    logo: "KPMG.png",
    lightBg: true,
    color: "from-white to-zinc-100",
    github: "https://github.com/Karlhe2002/Columbia_Capstone-KPMG",
    details: {
      architecture: "Multi-stage pipeline: Document ingestion -> Semantic chunking -> Neo4j Graph Extraction -> Hybrid retrieval (Dense + Sparse) -> LLM Synthesis.",
      contributions: [
        "Led the project as Leader, coordinating team progress with Gantt charts.",
        "Built a Neo4j graph database to capture relationships between policy sections, coverage rules, and exceptions.",
        "Implemented a cross-document policy comparison pipeline using hybrid retrieval to identify exact match regulatory rules."
      ]
    }
  },
  {
    id: 2,
    title: "BiasFreeBench",
    subtitle: "UCSD Research Assistant",
    desc: "Large-scale bias evaluation benchmark for LLMs, published in ICLR 2026. Advised by Julian McAuley.",
    tech: ["PyTorch", "vLLM", "LoRA", "GPT-4o-mini", "Llama-Guard"],
    icon: ShieldCheck,
    logo: "ICLR.jpg",
    lightBg: true,
    color: "from-white to-zinc-100",
    github: "https://github.com/Karlhe2002/BiasFreeBench",
    details: {
      architecture: "Distributed evaluation framework converting existing bias datasets into query-response evaluation frameworks.",
      contributions: [
        "Implemented Bias-Free Score, an automated response-level scoring metric evaluating fairness of LLM outputs.",
        "Conducted large-scale evaluation of multiple bias mitigation methods across diverse LLMs using vLLM and LoRA fine-tuning.",
        "Published 'BiasFreeBench: a Benchmark for Mitigating Bias in Large Language Model Responses' at ICLR 2026."
      ]
    }
  },
  {
    id: 4,
    title: "Fusion Serendipitous Recommender",
    subtitle: "UCSD Research Project",
    desc: "A novel recommendation framework (SRS) that balances relevance and unexpectedness using a fusion-model architecture.",
    tech: ["Python", "PyTorch", "LSTM", "Latent Factor Model", "distilRoBERTa"],
    icon: Sparkles,
    logo: "recommender-diagram.png",
    isDiagram: true,
    color: "from-purple-600 to-indigo-500",
    github: "https://github.com/Karlhe2002/CSE158_Seredipitous_Recommender",
    details: {
      architecture: "Fusion-model architecture combining a Sequential Prediction model (LSTM) for short-term demands and a Latent Unexpectedness Estimator (LFM + distilRoBERTa).",
      contributions: [
        "Developed a Sequential Prediction model using LSTM to capture intricate sequential patterns in purchase histories, ensuring relevance.",
        "Built an unexpectedness estimator leveraging a Latent Factor Model trained on surprise scores projected by distilRoBERTa-base from review text.",
        "Implemented a balance factor to harmoniously integrate relevance and unexpectedness scores for top-k serendipitous recommendations."
      ]
    }
  },
  {
    id: 3,
    title: "Broad-Ocean Technologies",
    subtitle: "SDE Intern | Detroit, MI",
    desc: "Designed and constructed an intuitive front-end interface for motor control on ESP32 Wi-Fi modules.",
    tech: ["JavaScript", "HTML", "CSS", "ESP32", "Embedded Systems", "Agile"],
    icon: Cpu,
    logo: "BOT.jpg",
    lightBg: true,
    color: "from-white to-zinc-100",
    github: null,
    details: {
      architecture: "Embedded communication pipeline synchronizing web interface with motor control firmware.",
      contributions: [
        "Collaborated on circuit board design, incorporating high/low-frequency voltage switches for precise motor control.",
        "Developed a real-time adjustment system for 10+ motor parameters via a visually appealing web interface.",
        "Delivered features through an Agile, sprint-based workflow with close firmware-hardware-frontend coordination."
      ]
    }
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured Projects</h2>
            <p className="text-white/50 max-w-xl">
              Research and engineering projects from Columbia, UCSD, and industry collaborations.
            </p>
          </div>
          <a href="https://github.com/Karlhe2002" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            View all on GitHub <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group cursor-pointer glass rounded-3xl overflow-hidden hover:border-white/20 transition-all"
              whileHover={{ y: -10 }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} ${project.isDiagram || project.lightBg ? 'opacity-100' : 'opacity-20'} group-hover:opacity-100 transition-opacity flex items-center justify-center relative overflow-hidden`}>
                {project.logo ? (
                  <img 
                    src={project.logo} 
                    alt={project.title} 
                    className={`w-full h-full ${project.isDiagram ? 'object-cover' : 'w-24 h-24 object-contain'} ${project.isDiagram || project.lightBg ? '' : 'grayscale brightness-200 opacity-40 group-hover:opacity-60'} transition-opacity`}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <project.icon size={48} className="text-white" />
                )}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">{project.subtitle}</p>
                <p className="text-white/60 text-sm line-clamp-3 mb-6">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md border border-white/10">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-[10px] text-white/40">+{project.tech.length - 3} more</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="fixed inset-4 md:inset-x-20 md:inset-y-10 lg:inset-x-64 lg:inset-y-20 bg-zinc-900 border border-white/10 rounded-3xl z-[70] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <ChevronRight className="rotate-90" />
              </button>

              {projects.find(p => p.id === selectedId) && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${projects.find(p => p.id === selectedId)?.color} ${projects.find(p => p.id === selectedId)?.isDiagram || projects.find(p => p.id === selectedId)?.lightBg ? 'p-0 overflow-hidden w-24 h-24' : 'opacity-80'}`}>
                      {projects.find(p => p.id === selectedId)?.logo && (projects.find(p => p.id === selectedId)?.isDiagram || projects.find(p => p.id === selectedId)?.lightBg) ? (
                        <img 
                          src={projects.find(p => p.id === selectedId)?.logo} 
                          alt={projects.find(p => p.id === selectedId)?.title} 
                          className={`w-full h-full ${projects.find(p => p.id === selectedId)?.isDiagram ? 'object-cover' : 'object-contain p-4'}`}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        React.createElement(projects.find(p => p.id === selectedId)!.icon, { size: 32 })
                      )}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold">{projects.find(p => p.id === selectedId)?.title}</h2>
                      <p className="text-primary font-medium">{projects.find(p => p.id === selectedId)?.subtitle}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                      <section>
                        <h4 className="text-sm uppercase tracking-widest text-white/40 mb-4">Overview</h4>
                        <p className="text-lg text-white/80 leading-relaxed">
                          {projects.find(p => p.id === selectedId)?.desc}
                        </p>
                      </section>

                      <section>
                        <h4 className="text-sm uppercase tracking-widest text-white/40 mb-4">Architecture</h4>
                        <div className="p-6 rounded-2xl bg-black/40 border border-white/5 font-mono text-sm">
                          {projects.find(p => p.id === selectedId)?.details.architecture}
                        </div>
                      </section>

                      <section>
                        <h4 className="text-sm uppercase tracking-widest text-white/40 mb-4">Key Contributions</h4>
                        <ul className="space-y-4">
                          {projects.find(p => p.id === selectedId)?.details.contributions.map((c, i) => (
                            <li key={i} className="flex gap-4 text-white/70">
                              <span className="text-primary font-bold">{i + 1}.</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    <div className="space-y-8">
                      <section>
                        <h4 className="text-sm uppercase tracking-widest text-white/40 mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {projects.find(p => p.id === selectedId)?.tech.map((t) => (
                            <span key={t} className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-sm">
                              {t}
                            </span>
                          ))}
                        </div>
                      </section>

                      <section>
                        <h4 className="text-sm uppercase tracking-widest text-white/40 mb-4">Links</h4>
                        <div className="flex flex-col gap-3">
                          {projects.find(p => p.id === selectedId)?.github && (
                            <a 
                              href={projects.find(p => p.id === selectedId)?.github} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center justify-center gap-2 p-3 bg-white text-black rounded-xl font-bold hover:bg-white/90 transition-colors"
                            >
                              <Github size={18} /> GitHub Repository
                            </a>
                          )}
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
