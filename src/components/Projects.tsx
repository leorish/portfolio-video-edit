import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Video Edit 1",
      category: "Video Editing",
      videoUrl: "https://suma9-kumar.github.io/sumankumarportfolio-/images/videoplayback.mp4"
    },
    {
      title: "Video Edit 2",
      category: "Video Editing",
      videoUrl: "https://suma9-kumar.github.io/sumankumarportfolio-/images/videoplayback%20(1).mp4"
    },
    {
      title: "Client Project",
      category: "Client Work",
      videoUrl: "https://suma9-kumar.github.io/sumankumarportfolio-/images/client.mp4"
    },
    {
      title: "Krishna Video",
      category: "Video Editing",
      videoUrl: "https://suma9-kumar.github.io/sumankumarportfolio-/images/krishna.mp4"
    },
    {
      title: "Mahadev Video",
      category: "Video Editing",
      videoUrl: "https://suma9-kumar.github.io/sumankumarportfolio-/images/mahadev.mp4"
    },
    {
      title: "Motion Video",
      category: "Motion Graphics",
      videoUrl: "https://suma9-kumar.github.io/sumankumarportfolio-/images/motion.mp4"
    },
    {
      title: "Durga Maa",
      category: "Thumbnail Graphic",
      imageUrl: "https://suma9-kumar.github.io/sumankumarportfolio-/images/durga%20maa.jpeg"
    },
    {
      title: "Thumbnail Project",
      category: "Thumbnail Graphic",
      imageUrl: "https://suma9-kumar.github.io/sumankumarportfolio-/images/thumbnail.jpeg"
    },
    {
      title: "Documentary Thumbnails",
      category: "Thumbnail Graphic",
      imageUrl: "https://suma9-kumar.github.io/sumankumarportfolio-/images/Top%20YouTube%20Thumbnail%20Ideas%20for%20Captivating%20Documentary%20Designs.jpg"
    },
    {
      title: "Download Project",
      category: "Thumbnail Graphic",
      imageUrl: "https://suma9-kumar.github.io/sumankumarportfolio-/images/download%20(20).jpg"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-[1200px] mx-auto w-full relative">
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="text-center md:text-left mb-16">
        <span className="text-blue-500 font-medium text-sm tracking-widest uppercase mb-2 block">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Recent Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl overflow-hidden border border-zinc-800 bg-[#111111] shadow-2xl cursor-pointer"
          >
            <div className="aspect-video w-full overflow-hidden relative">
               {p.videoUrl ? (
                 <video 
                   src={p.videoUrl} 
                   autoPlay 
                   muted 
                   loop 
                   playsInline 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                 />
               ) : (
                 <img 
                   src={p.imageUrl} 
                   alt={p.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                 />
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80"></div>
               
               {/* Overlay Icon */}
               {p.videoUrl && (
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-blue-600/90 backdrop-blur-sm flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.5)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                       <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                 </div>
               )}
            </div>
            
            <div className="p-6">
               <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">{p.category}</div>
               <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
