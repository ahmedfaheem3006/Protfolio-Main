import React from 'react';
import { motion } from 'framer-motion';
import { Send, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20">
      
      {/* Background Decorative Elements - GPU Optimized */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-400/30 to-transparent rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400/30 to-transparent rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-40 w-72 h-72 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400/30 to-transparent rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-4000 dark:from-pink-600/20"></div>

      <div className="max-w-screen-xl relative z-10 flex flex-col-reverse md:flex-row items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 w-full gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left space-y-8"
        >
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white font-outfit leading-tight"
            >
              Ahmed Mahmoud <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-indigo-600 dark:from-primary-400 dark:via-purple-400 dark:to-indigo-400">
                Faheem
              </span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium font-outfit"
            >
               .NET Full Stack Developer & Software Engineer
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed"
            >
              Electrical Engineering graduate specializing in Control and Computer Systems. Passionate about building responsive web applications and robust backend systems using .NET, React, Angular, and Node.js.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
          >
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3.5 text-white bg-gradient-to-r from-primary-600 to-purple-600 rounded-full hover:from-primary-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/40 flex items-center justify-center gap-2 font-medium"
            >
              Contact Me <Send size={18} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1nDGwlGqKv-hKkxM2eCtuqAifVm5VRmi4/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 text-gray-900 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-sm hover:shadow-md"
            >
              Download CV <Download size={18} />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center md:justify-start gap-6 pt-8"
          >
            <SocialLink href="https://www.linkedin.com/in/ahmed-faheem302/" icon={<Linkedin size={24} />} />
            <SocialLink href="https://github.com/ahmedfaheem3006" icon={<Github size={24} />} />
            <SocialLink href="mailto:ahmedmahmoud30006@gmail.com" icon={<Mail size={24} />} />
          </motion.div>
        </motion.div>
        
        {/* Image / 3D Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end relative perspective-1000"
        >
          <div className="relative group w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-400/40 to-purple-500/40 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            <img 
              src="/images/Portfolio.png" 
              alt="Ahmed Faheem" 
              className="relative z-10 object-cover w-full h-full rounded-full border-4 border-white/50 dark:border-gray-800/50 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://ui-avatars.com/api/?name=Ahmed+Faheem&size=512&background=0ea5e9&color=fff";
              }}
            />
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 right-4 z-20 glass flex items-center py-2.5 px-5 rounded-full shadow-xl"
            >
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200">Available Now</span>
            </motion.div>

            {/* <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -left-6 z-20 glass flex items-center py-2 px-4 rounded-xl shadow-xl"
            >
              <span className="text-2xl mr-2">🚀</span>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400">GenAI</span>
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200">Enthusiast</span>
              </div>
            </motion.div> */}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
  >
    {icon}
  </a>
);

export default Hero;
