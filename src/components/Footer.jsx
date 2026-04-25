import React from 'react';
import { Heart, Coffee, Linkedin, Github, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800/50 pt-16 pb-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-5 space-y-6">
            <span className="text-2xl font-extrabold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 font-outfit tracking-tight">
              AHMED FAHEEM
            </span>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
              Full Stack .NET Developer & Software Engineer crafting scalable and user-centric digital experiences. Let's build the future together.
            </p>
            <div className="flex space-x-5">
              <SocialIcon href="https://www.linkedin.com/in/ahmed-faheem302/" icon={<Linkedin size={20} />} />
              <SocialIcon href="https://github.com/ahmedfaheem3006" icon={<Github size={20} />} />
              <SocialIcon href="#" icon={<Twitter size={20} />} />
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6 font-outfit">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#experience">Experience</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6 font-outfit">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-500 dark:text-gray-400 text-sm">
                <MapPin size={18} className="text-primary-600 shrink-0 mt-0.5" />
                <span>Cairo, Egypt</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-sm">
                <Mail size={18} className="text-primary-600 shrink-0" />
                <a href="mailto:ahmedmahmoud30006@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  ahmedmahmoud30006@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-sm">
                <Phone size={18} className="text-primary-600 shrink-0" />
                <span>+20 122 070 8037</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Ahmed Faheem. All Rights Reserved.
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center font-medium">
            Crafted with <Heart size={16} className="text-red-500 mx-1.5 animate-pulse" fill="currentColor" /> & <Coffee size={16} className="text-amber-700 mx-1.5" /> by Ahmed
          </span>
        </div>

      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 ml-[-0.5rem] rounded-full text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-400 dark:hover:bg-primary-900/20 transition-all duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium transition-colors relative group w-fit flex"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-primary-600 dark:bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
);

export default Footer;
