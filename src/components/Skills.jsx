import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Code, Shield, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-blue-500" />,
      color: "blue",
      skills: [
        { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Angular", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
        { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        { name: "Framer Motion", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-green-500" />,
      color: "green",
      skills: [
        { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: ".NET Core", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
        { name: "C#", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
        { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Flask", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" }
      ]
    },
    {
      title: "Database & Architecture",
      icon: <Database className="w-8 h-8 text-purple-500" />,
      color: "purple",
      skills: [
        { name: "SQL Server", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
        { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "Microservices", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Terminal className="w-8 h-8 text-orange-500" />,
      color: "orange",
      skills: [
        { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
        { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        { name: "Swagger", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },
        { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
        { name: "Visual Studio", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-400/30 to-transparent rounded-full mix-blend-multiply opacity-50 dark:opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400/30 to-transparent rounded-full mix-blend-multiply opacity-50 dark:opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-outfit">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Arsenal</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              The tools and technologies I use to bring ideas to life.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary-900/10"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-4 rounded-2xl bg-${category.color}-100 dark:bg-${category.color}-900/30 bg-opacity-50`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-outfit">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    title={skill.name}
                    className="flex flex-col items-center justify-center p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-2xl hover:border-primary-200 dark:hover:border-primary-500/30 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 mb-2 p-1 relative flex items-center justify-center">
                      <img src={skill.image} alt={skill.name} loading="lazy" className="w-full h-full object-contain filter group-hover:brightness-110 transition-all" />
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 text-center w-full truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
