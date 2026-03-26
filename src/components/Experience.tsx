import React from 'react';
import { motion } from 'motion/react';

const educationItems = [
  {
    year: "2025 - 2026",
    title: "MS in Data Science",
    company: "Columbia University",
    desc: "Focusing on NLP and AI Systems. Leading RAG research in collaboration with KPMG.",
    type: "education"
  },
  {
    year: "2021 - 2025",
    title: "BS in Math-CS",
    company: "UC San Diego",
    desc: "GPA: 3.94/4.0. Research Assistant for Julian McAuley. Published BiasFreeBench at ICLR 2026.",
    type: "education"
  }
];

const internshipItems = [
  {
    year: "Jun 2024 - Aug 2024",
    title: "SDE Intern, DCCS Project Team",
    company: "Broad-Ocean Technologies, LLC",
    desc: "Designed an intuitive front-end for motor control on ESP32 Wi-Fi modules. Collaborated on circuit board design with high/low-frequency voltage switches. Developed embedded communication pipelines for real-time parameter adjustment.",
    type: "internship"
  },
  {
    year: "Aug 2023 - Sep 2023",
    title: "DS Intern, Electric Vehicle Industry Team",
    company: "Mercer Management Consulting",
    desc: "Deployed an NLP-driven fuzzy matching pipeline for 50,000+ job positions. Analyzed 30,000+ data points in Python. Contributed to the 2023 ManSmart EV Industry Talent Research.",
    type: "internship"
  },
  {
    year: "Jun 2023 - Aug 2023",
    title: "DS Intern, IT Business Transformation",
    company: "Jaguar Land Rover",
    desc: "Delivered a real-time Power BI executive dashboard with automated API refresh pipelines. Built automated data pipelines using Python and VBA for distributor datasets.",
    type: "internship"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-20 text-center">Journey</h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            {/* Left Column: Education */}
            <div className="space-y-24">
              <h3 className="text-2xl font-display font-bold text-primary mb-8 md:text-right hidden md:block uppercase tracking-widest opacity-50">Education</h3>
              
              {/* Columbia */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-[33px] md:left-auto md:-right-[53px] top-8 w-4 h-4 rounded-full bg-white border-4 border-primary z-10 hidden md:block" />
                <div className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors md:text-right">
                  <span className="text-xs font-mono font-bold mb-2 block text-primary">{educationItems[0].year}</span>
                  <h3 className="text-xl font-bold mb-1">{educationItems[0].title}</h3>
                  <p className="text-white/40 font-medium mb-4">{educationItems[0].company}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{educationItems[0].desc}</p>
                </div>
              </motion.div>

              {/* Spacer to align UCSD below JLR */}
              <div className="hidden md:block h-[350px]" />

              {/* UCSD */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-[33px] md:left-auto md:-right-[53px] top-8 w-4 h-4 rounded-full bg-white border-4 border-primary z-10 hidden md:block" />
                <div className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors md:text-right">
                  <span className="text-xs font-mono font-bold mb-2 block text-primary">{educationItems[1].year}</span>
                  <h3 className="text-xl font-bold mb-1">{educationItems[1].title}</h3>
                  <p className="text-white/40 font-medium mb-4">{educationItems[1].company}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{educationItems[1].desc}</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Work Experience */}
            <div className="space-y-24">
              <h3 className="text-2xl font-display font-bold text-secondary mb-8 hidden md:block uppercase tracking-widest opacity-50">Work Experience</h3>
              {internshipItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative ${i === 0 ? 'md:pt-6' : ''}`}
                >
                  {/* Dot on line */}
                  <div className={`absolute -left-[33px] md:-left-[53px] ${i === 0 ? 'md:top-14' : 'top-8'} w-4 h-4 rounded-full bg-white border-4 border-secondary z-10 hidden md:block`} />
                  
                  <div className="glass p-8 rounded-3xl border border-white/5 hover:border-secondary/30 transition-colors">
                    <span className="text-xs font-mono font-bold mb-2 block text-secondary">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-white/40 font-medium mb-4">{item.company}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
