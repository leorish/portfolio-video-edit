import { motion } from 'motion/react';
import { Linkedin, Twitter, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-32 pb-10 px-6 overflow-hidden flex flex-col items-center">
      {/* Animated Background glow wave */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] pointer-events-none z-0">
         <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[150%] h-full rounded-[100%] bg-gradient-to-t from-blue-500/10 to-transparent blur-[80px]"></div>
         <svg className="absolute bottom-10 left-0 w-full h-32 opacity-20" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <motion.path 
               animate={{ d: ["M0,50 Q250,10 500,50 T1000,50", "M0,50 Q250,90 500,50 T1000,50"] }}
               transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
               fill="none" stroke="#3b82f6" strokeWidth="1" 
            />
            <motion.path 
               animate={{ d: ["M0,60 Q250,20 500,60 T1000,60", "M0,60 Q250,100 500,60 T1000,60"] }}
               transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
               fill="none" stroke="#ec4899" strokeWidth="2" 
            />
         </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-lg mx-auto mb-32 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get In Touch</h2>
        <p className="text-zinc-400 text-sm mb-8">
          Fill the contact form clearly to get a call back and let's work together!
        </p>
        
        <form className="flex w-full max-w-sm gap-2 bg-[#0A0A0A] p-2 rounded-full border border-zinc-800 focus-within:border-blue-500 transition-colors">
           <div className="flex-1 flex items-center px-4">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 mr-2"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5v12h16V6z"/></svg>
             <input type="email" placeholder="Your mail address" className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-zinc-500" required />
           </div>
           <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
             Contact Me
           </button>
        </form>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 pt-8 border-t border-zinc-800/50">
        <div className="text-xs text-zinc-500 font-medium">
          Made by Suman Kumar all right reserved © 2026
        </div>
        
        <div className="flex gap-4 items-center">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 transition-colors">
            <Facebook className="w-4 h-4 fill-current" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-red-500 transition-colors">
            <Youtube className="w-4 h-4 fill-current" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-pink-500 transition-colors">
            <Instagram className="w-4 h-4 fill-current" />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-green-500 transition-colors">
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors">
            <Linkedin className="w-4 h-4 fill-current" />
          </a>
        </div>

        <div className="text-xs text-zinc-400 font-medium hover:text-white transition-colors cursor-pointer">
          👋 Welcome to Suman's Website
        </div>
      </div>
    </footer>
  );
}
