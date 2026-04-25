import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Code2, Award } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* Left Column: Text & Stats */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="h-1 w-12 bg-primary-600 rounded"></span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-outfit">About Me</h2>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Bridging Engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Modern Web Development</span>
              </h3>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-justify relative z-10 glass-card p-6 rounded-2xl">
              <p>
                I am a dedicated Full Stack Developer with a strong foundation in Electrical Engineering (Control & Computer Systems). My journey began with a passion for analytical problem-solving, which naturally evolved into a career building scalable, efficient web applications.
              </p>
              <p>
                Currently, I am expanding my expertise in the <strong className="text-primary-600 dark:text-primary-400 font-medium">.NET ecosystem</strong> and <strong className="text-purple-600 dark:text-purple-400 font-medium">Generative AI</strong> through intensive training at ITI. I thrive in agile environments, collaborating directly with cross-functional teams to deliver high-quality, user-centric software solutions that drive business value.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-4">
              <StatCard icon={<Code2 className="text-primary-600" size={28} />} number="2+" text="Years Experience" />
              <StatCard icon={<Award className="text-purple-600" size={28} />} number="10+" text="Projects Completed" />
            </motion.div>
          </div>

          {/* Right Column: Education Timeline */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2">
            <div className="relative p-8 rounded-3xl glass-card overflow-hidden">
              {/* Decorative background blur */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/10 to-transparent rounded-full"></div>
              
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center font-outfit">
                <GraduationCap className="text-primary-600 mr-3" size={32} />
                Education Journey
              </h3>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
                
                <TimelineItem 
                  title="Full Stack .NET & Generative AI"
                  organization="ITI (Information Technology Institute)"
                  date="Current (4 Months Intensive)"
                  description="Deep dive into enterprise .NET architecture, React, and integrating AI models into practical applications."
                  isActive={true}
                />
                
                <TimelineItem 
                  title="Generative AI Specialist"
                  organization="DEPI (Digital Egypt Pioneers Initiative)"
                  date="May 2025 – Nov 2025"
                  description="6-Month Intensive Scholarship. Achieved 1st Place in the graduation project competition."
                  isActive={false}
                />

                <TimelineItem 
                  title="Bachelor of Engineering"
                  organization="Suez Canal University, Ismailia"
                  date="Graduating 2025"
                  description="Major: Electrical Engineering (Control and Computer Program). GPA: 3.32 / 4.0"
                  isActive={false}
                />
                
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, number, text }) => (
  <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-shadow flex items-center gap-4">
    <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-3xl text-gray-900 dark:text-white font-outfit">{number}</h4>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{text}</p>
    </div>
  </div>
);

const TimelineItem = ({ title, organization, date, description, isActive }) => (
  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300 mt-1 md:mt-0">
      <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-primary-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]' : 'bg-gray-400 dark:bg-gray-500'}`}></div>
    </div>
    
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow left-timeline text-left">
      <div className="flex flex-col mb-1">
        <h4 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">{title}</h4>
        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">{organization}</span>
      </div>
      <time className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{date}</time>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default About;
