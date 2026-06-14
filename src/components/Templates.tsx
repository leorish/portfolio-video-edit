import { motion } from 'motion/react';

export default function Templates() {
  const categories = [
    "Video Editing", "YouTube", "Reels", "Thumbnails", "Social Media", "Graphics", "Motion Design", "Color Grading"
  ];
  const duplicatedCategories = [...categories, ...categories, ...categories]; // for seamless looping

  return (
    <section className="py-32 relative overflow-hidden flex flex-col items-center">
      <div className="z-10 text-center mb-16 relative">
        <p className="text-blue-500 font-medium mb-4 text-sm tracking-wide uppercase">My Content</p>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight px-6">
          A visual collection of our most recent works <br className="hidden md:block"/>
          crafted with intention, emotion, and style.
        </h2>
      </div>

      {/* Marquee Background */}
      <div className="absolute inset-0 flex flex-col justify-center select-none pointer-events-none mt-20">
         <motion.div 
           animate={{ x: [0, -1000] }} 
           transition={{ ease: "linear", duration: 30, repeat: Infinity }}
           className="flex whitespace-nowrap gap-8 mb-4 hover:opacity-100"
         >
           {duplicatedCategories.map((c, i) => (
             <span key={`1-${i}`} className="text-5xl md:text-7xl font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>&bull; {c} </span>
           ))}
         </motion.div>
         <motion.div 
           animate={{ x: [-1000, 0] }} 
           transition={{ ease: "linear", duration: 40, repeat: Infinity }}
           className="flex whitespace-nowrap gap-8 mb-4 ml-[-500px]"
         >
           {duplicatedCategories.map((c, i) => (
             <span key={`2-${i}`} className="text-5xl md:text-7xl font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>&bull; {c} </span>
           ))}
         </motion.div>
         <motion.div 
           animate={{ x: [0, -1000] }} 
           transition={{ ease: "linear", duration: 35, repeat: Infinity }}
           className="flex whitespace-nowrap gap-8 ml-[-200px]"
         >
           {duplicatedCategories.map((c, i) => (
             <span key={`3-${i}`} className="text-5xl md:text-7xl font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>&bull; {c} </span>
           ))}
         </motion.div>
      </div>

      {/* Floating Template Cards */}
      <div className="relative w-full max-w-5xl h-[400px] mt-8 flex justify-center items-center z-20">
         
         <div className="relative w-full h-full">
            {/* Center Cluster */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center -space-x-16">
               <motion.div animate={{ y: [0, -10, 0], rotate: [-2, -4, -2] }} transition={{ duration: 4, repeat: Infinity }} className="w-56 h-40 bg-blue-500 rounded-xl rounded-tr-3xl p-1 z-10 shadow-[0_0_40px_rgba(0,0,0,0.8)] border-4 border-[#050505]">
                 <div className="w-full h-full rounded-lg rounded-tr-2xl bg-black overflow-hidden relative">
                   <img src="https://suma9-kumar.github.io/sumankumarportfolio-/images/download%20(20).jpg" className="opacity-90 object-cover w-full h-full" alt="Video Edit 1" />
                   <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      <span className="text-[10px] font-medium text-white shadow-sm">Reels</span>
                   </div>
                 </div>
               </motion.div>

               <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="w-64 h-48 bg-purple-500 rounded-xl p-1 z-30 shadow-[0_0_40px_rgba(0,0,0,0.8)] scale-110 border-4 border-[#050505]">
                 <div className="w-full h-full rounded-lg bg-black overflow-hidden relative group">
                    <img src="https://suma9-kumar.github.io/sumankumarportfolio-/images/Professional%20and%20Eye-Catching%20YouTube%20Thumbnail%20Design%20_%20Boost%20Your%20Click-Through%20Rate%20(1).jpg" className="opacity-90 object-cover w-full h-full" alt="Video Edit 2" />
                    <div className="absolute inset-0 flex items-center justify-center border-2 border-white/20 m-2 rounded-md transition-all group-hover:bg-black/30">
                       <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                       </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/90 to-transparent flex items-end p-2">
                       <span className="text-white text-xs font-semibold">Cinematic YouTube Video</span>
                    </div>
                 </div>
               </motion.div>

               <motion.div animate={{ y: [0, -5, 0], rotate: [2, 4, 2] }} transition={{ duration: 4.5, repeat: Infinity }} className="w-56 h-40 bg-pink-500 rounded-xl rounded-bl-3xl p-1 z-20 shadow-[0_0_40px_rgba(0,0,0,0.8)] border-4 border-[#050505]">
                 <div className="w-full h-full rounded-lg rounded-bl-2xl bg-black overflow-hidden relative">
                    <img src="https://suma9-kumar.github.io/sumankumarportfolio-/images/thumbnail.jpeg" className="opacity-80 object-cover w-full h-full" alt="Graphic Design" />
                    <div className="absolute top-2 left-2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded leading-tight shadow-md">THUMBNAIL<br/>DESIGN</div>
                 </div>
               </motion.div>
            </div>

            {/* Background floating templates */}
            <motion.img animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity }} src="https://suma9-kumar.github.io/sumankumarportfolio-/images/durga%20maa.jpeg" className="absolute top-0 left-1/4 w-32 h-24 rounded-lg object-cover shadow-xl opacity-60 border border-zinc-800" />
            <motion.img animate={{ y: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity }} src="https://suma9-kumar.github.io/sumankumarportfolio-/images/Top%20YouTube%20Thumbnail%20Ideas%20for%20Captivating%20Documentary%20Designs.jpg" className="absolute bottom-10 left-1/4 w-40 h-28 rounded-lg object-cover shadow-xl opacity-50 border border-zinc-800" />
            <motion.img animate={{ y: [0, 20, 0] }} transition={{ duration: 5.5, repeat: Infinity }} src="https://suma9-kumar.github.io/sumankumarportfolio-/images/thumbnail.jpeg" className="absolute top-10 right-1/4 w-36 h-28 rounded-lg object-cover shadow-xl opacity-60 border border-zinc-800" />
            <motion.img animate={{ y: [0, -10, 0] }} transition={{ duration: 6.5, repeat: Infinity }} src="https://suma9-kumar.github.io/sumankumarportfolio-/images/download%20(20).jpg" className="absolute bottom-0 right-1/4 w-32 h-24 rounded-lg object-cover shadow-xl opacity-50 border border-zinc-800" />
         </div>
      </div>
      
      {/* Dark gradient fade for bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-30"></div>
    </section>
  );
}
