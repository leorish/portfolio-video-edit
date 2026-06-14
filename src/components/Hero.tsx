import { motion } from 'motion/react';
import { Video, Image as ImageIcon, Film, Scissors, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Globe Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none mix-blend-screen overflow-hidden" 
           style={{
             background: 'radial-gradient(circle, rgba(28,100,242,0.8) 0%, rgba(28,100,242,0) 70%)'
           }}>
             {/* Simple Animated CSS Globe using borders */}
             <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full border border-blue-500/30 relative"
             >
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[50%] border border-blue-500/30 rounded-[100%]"></div>
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[20%] border border-blue-500/30 rounded-[100%]"></div>
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[50%] border border-blue-500/30 rounded-[100%]"></div>
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[20%] border border-blue-500/30 rounded-[100%]"></div>
             </motion.div>
      </div>

      {/* Floating Elements for "Hovering" feel */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] text-blue-500/20"
        >
          <Video className="w-16 h-16" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] left-[20%] text-purple-500/20"
        >
          <Scissors className="w-12 h-12" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[15%] text-pink-500/20"
        >
          <ImageIcon className="w-14 h-14" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[20%] text-emerald-500/20"
        >
          <Film className="w-16 h-16" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold tracking-wide uppercase text-xs mb-6"
        >
          Hello, it's me Suman Kumar
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
          Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Video Editor</span> <br/> & Designer
        </h1>
        
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
          I turn raw footage into captivating stories. With 3+ years of expertise in video editing, 
          thumbnails, and branding that helps your content stand out.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
           <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.3)] overflow-hidden"
           >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <Play className="w-4 h-4 fill-current" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
           </motion.a>
           <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white px-10 py-4 rounded-full font-bold transition-all cursor-pointer backdrop-blur-sm"
           >
              Let's Talk
           </motion.a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
      </motion.div>
    </section>
  );
}
