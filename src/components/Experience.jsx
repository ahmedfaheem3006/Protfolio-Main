import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Developer",
      company: "Roshdy Group",
      location: "Cairo, Egypt",
      period: "Jul 2025 – Jan 2026",
      description: "E-commerce platform specialized in smart home products.",
      achievements: [
        "Spearheaded development and maintenance of the e-commerce platform.",
        "Engineered responsive front-end using React to enhance customer experience.",
        "Implemented robust back-end architecture with Node.js and SQL.",
        "Developed dynamic blog section for content marketing."
      ],
      tags: ["React", "Node.js", "SQL", "E-commerce"]
    },
    {
      id: 2,
      role: "Full Stack Development Intern",
      company: "Hybirdly",
      location: "Remote",
      period: "May 2025 – Sep 2025",
      description: "Agile start-up environment focusing on responsive web apps.",
      achievements: [
        "Collaborated in an agile team building web apps with React and Node.js.",
        "Contributed to secure RESTful APIs design for user authentication.",
        "Participated in daily stand-ups and sprint planning sessions."
      ],
      tags: ["React", "Express", "RESTful APIs", "Agile"]
    },
    {
      id: 3,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "Jan 2023 – Present",
      description: "Providing custom web solutions for diverse clients.",
      achievements: [
        "Delivered custom responsive websites for small businesses using HTML, Tailwind, JS.",
        "Managed end-to-end back-end development using Node.js and MongoDB.",
        "Handled client communication, requirements gathering, and deployment."
      ],
      tags: ["TailwindCSS", "JavaScript", "MongoDB", "Client Relations"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-800/30 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-outfit">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Experience</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              My journey as a software engineer, working with great teams and clients.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-purple-500/50 to-transparent -translate-x-1/2 hidden md:block z-0"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-center justify-between z-10 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Center Icon (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 bg-gradient-to-br from-primary-500 to-purple-600 items-center justify-center text-white shadow-lg z-20">
        <Briefcase size={20} />
      </div>

      {/* Content */}
      <div className={`w-full md:w-[45%] glass-card p-6 md:p-8 rounded-3xl ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'} group hover:-translate-y-1 transition-transform duration-300`}>
        
        <div className={`flex flex-col gap-2 mb-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold bg-primary-50 dark:bg-primary-900/20 px-3 py-1.5 rounded-full w-fit text-sm">
            <Calendar size={14} />
            {exp.period}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-outfit leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {exp.role}
          </h3>
          <div className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300">
            <span>{exp.company}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">{exp.location}</span>
          </div>
        </div>

        <p className={`text-gray-600 dark:text-gray-300 mb-6 italic text-sm ${isEven && 'md:text-right'}`}>
          {exp.description}
        </p>

        <ul className={`space-y-2 mb-6 text-gray-600 dark:text-gray-400 ${isEven ? 'md:text-right' : 'text-left'}`}>
          {exp.achievements.map((item, i) => (
            <li key={i} className={`flex items-start gap-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
              <span className="text-primary-500 mt-1.5 shrink-0">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
          {exp.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default Experience;
