import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, MonitorPlay, Zap, ChevronLeft, ChevronRight, X } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => project.onClick(project)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group h-[400px] md:h-[500px] w-full perspective-1000 cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden group-hover:border-primary-500/50 transition-colors duration-500"
      >
        {/* Image Section */}
        <div className="h-3/5 relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Floating Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5">
              <Zap size={10} className="fill-current" />
              {project.subtitle}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col h-2/5 justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-outfit group-hover:text-primary-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <span key={i} className="text-[10px] font-semibold text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded-md bg-primary-500/10 border border-primary-500/20">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3 relative z-20">
              {project.githubLink && (
                <a 
                  href={project.githubLink}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank" rel="noreferrer"
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-primary-600 text-white transition-all duration-300 border border-white/10"
                >
                  <Github size={18} />
                </a>
              )}
              {project.liveLink && (
                <a 
                  href={project.liveLink}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank" rel="noreferrer"
                  className="p-2 rounded-full bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/30 transition-all duration-300"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handleProjectClick = (project) => {
    // Generate 4 mock images if it only has a main image for the slideshow
    const slideImages = project.slides || [
      project.image,
      `https://placehold.co/1200x800/0ea5e9/white?text=${encodeURIComponent(project.title)}+Slide+2`,
      `https://placehold.co/1200x800/1e293b/white?text=${encodeURIComponent(project.title)}+Slide+3`,
      `https://placehold.co/1200x800/4f46e5/white?text=${encodeURIComponent(project.title)}+Slide+4`
    ];
    
    setSelectedProject({ ...project, slides: slideImages });
    setCurrentSlideIndex(0);
  };

  const projects = [
    {
      id: 1,
      title: "Eyeconic AR Glasses",
      category: ["react", "node", "fullstack"],
      image: "/projects/eyeconic.png",
      slides: [
                "/projects/medical-store-1.png",
                "/projects/medical-store-2.png",
                "/projects/medical-store-3.png",
                "/projects/medical-store-4.png"
              ],
      subtitle: "Graduation Project",
      description: "Professional promotional website for smart AR glasses. Features interactive UI with animations, real-time chatbot, and performance optimization.",
      techStack: ["React", "Node.js", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Medical Store E-commerce",
      category: ["angular", "node", "fullstack"], 
      image: "image project/Medifit/medifit.png", 
      subtitle: "E-commerce Platform",
      description: "A comprehensive e-commerce platform for medical stores, including user and product management, shopping cart, and order processing. It offers a smooth user experience with a modern frontend and robust backend.",
      slides: [
        "image project/Medifit/medifit.png",
        "image project/Medifit/medifit 2.png",
        "image project/Medifit/medifit 6.png",
        "image project/Medifit/medifit cart.png"
      ],
      techStack: ["Angular", "Node.js", "Express", "MongoDB", "Cloudinary"],
      liveLink: "https://medifit1.netlify.app/",
      githubLink: "https://github.com/ahmedfaheem3006/Medifit",
    },
    {
      id: 3,
      title: "Clickone Exam App",
      category: ["htmlcss", "node", "fullstack"],
      image: "/projects/clickone.png",
      subtitle: "Exam Platform",
      description: "Fully responsive web app featuring timed exams, randomized questions, and Node.js backend with admin features.",
      techStack: ["JS", "Node.js", "Tailwind"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Admin Management",
      category: ["angular", "node", "fullstack"],
      image: "/projects/admin.png",
      subtitle: "Dashboard",
      description: "Login system and management interface for managing questions and user data with efficient CRUD operations.",
      techStack: ["Angular", "Node.js", "CRUD"],
      liveLink: "#",
      githubLink: "#",
    }
  ].map(p => ({ ...p, onClick: handleProjectClick }));

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'react', label: 'React' },
    { id: 'angular', label: 'Angular' },
    { id: 'node', label: 'Node.js' },
    { id: 'htmlcss', label: 'HTML/CSS/JS' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="py-32 bg-gray-50 dark:bg-[#0a0c10] relative overflow-hidden">
      {/* Background Decor - Optimized for GPU */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-600/30 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600/30 to-transparent" />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-10"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 mb-6 font-outfit uppercase tracking-tighter">
              Projects
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-full mb-6"></div>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg md:text-xl font-light">
              Crafting digital experiences with precision and passion. Each project represents a unique challenge solved.
            </p>
          </motion.div>

          {/* Filters - Responsive wrapping and centered */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full max-w-4xl"
          >
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 border-2 ${
                  filter === f.id
                    ? 'bg-gradient-to-r from-primary-600 to-indigo-600 border-transparent text-white shadow-xl shadow-primary-500/30 md:scale-105 transform'
                    : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:-translate-y-1'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Slider Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>

              {/* Slider Image Container */}
              <div className="relative aspect-video w-full bg-gray-900 overflow-hidden flex items-center justify-center group">
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={currentSlideIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    src={selectedProject.slides[currentSlideIndex]}
                    alt={`${selectedProject.title} slide ${currentSlideIndex + 1}`}
                    className="w-full h-full object-fit md:object-cover"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = `https://placehold.co/1200x800/0ea5e9/white?text=${encodeURIComponent(selectedProject.title)}+Not+Found`;
                    }}
                  />
                </AnimatePresence>

                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => setCurrentSlideIndex(prev => prev === 0 ? selectedProject.slides.length - 1 : prev - 1)}
                    className="p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all transform hover:scale-110"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => setCurrentSlideIndex(prev => prev === selectedProject.slides.length - 1 ? 0 : prev + 1)}
                    className="p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all transform hover:scale-110"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                  {selectedProject.slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlideIndex === idx ? 'w-6 bg-primary-500' : 'bg-white/50 hover:bg-white'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Modal Details Section */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white font-outfit mb-2">
                      {selectedProject.title}
                    </h2>
                    <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-bold uppercase tracking-widest rounded-full">
                      {selectedProject.subtitle}
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    {selectedProject.githubLink && (
                      <a 
                        href={selectedProject.githubLink} target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 font-semibold transition-colors dark:text-gray-200"
                      >
                        <Github size={18} /> Code
                      </a>
                    )}
                    {selectedProject.liveLink && (
                      <a 
                        href={selectedProject.liveLink} target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-colors shadow-lg shadow-primary-500/30"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  {selectedProject.description}
                </p>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-lg font-medium text-sm bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
