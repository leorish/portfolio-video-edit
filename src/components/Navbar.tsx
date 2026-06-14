import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full absolute top-0 left-0 right-0 z-50"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
          <Play className="w-4 h-4 text-white fill-white" />
        </div>
        <span className="font-bold text-lg tracking-tight uppercase">Suman Kumar</span>
      </div>

      <div className="hidden md:flex items-center gap-8 bg-zinc-900/50 backdrop-blur-md px-8 py-2.5 rounded-full border border-white/5">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
            {link.name}
          </a>
        ))}
      </div>

      <motion.a 
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all border border-blue-500 shadow-lg shadow-blue-500/20"
      >
        Hire Me
      </motion.a>
    </motion.nav>
  );
}
