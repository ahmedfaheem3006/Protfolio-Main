import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-gray-900 via-primary-900 to-indigo-900 text-center p-12 md:p-20 shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/30 to-transparent"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/30 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">
              Ready to create something amazing?
            </h2>
            <p className="text-primary-100 text-lg md:text-xl mb-12 opacity-90 leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities. 
              Whether you have a specific project in mind or just want to explore possibilities, let's connect.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href="mailto:ahmedmahmoud30006@gmail.com" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-900 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Mail size={22} />
                Send Email
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=201220708037" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle size={22} />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
