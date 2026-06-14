import { motion } from 'motion/react';
import { Play, Layers, Image as ImageIcon, Music, Type, CheckCircle2, Zap, Trophy, Heart, Maximize2, SkipBack, Search, Plus } from 'lucide-react';

export default function Automate() {
  return (
    <section className="relative py-24 px-6 flex flex-col items-center justify-center overflow-hidden">
      
      <div className="text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-blue-500 font-bold text-sm tracking-[0.2em] uppercase mb-3 block"
        >
          My Workflow
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Aesthetic Video Strategy</h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          From conceptualization to the final export, I ensure every frame serves a purpose and captures attention.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-[1200px] mb-20">
         {[
           { icon: Zap, title: "Speed & Efficiency", desc: "Fast delivery without compromising on quality or creativity.", color: "text-orange-400", bg: "bg-orange-400/10" },
           { icon: Heart, title: "Passionate Editing", desc: "I treat every project as my own, ensuring pixel-perfect results.", color: "text-red-400", bg: "bg-red-400/10" },
           { icon: Trophy, title: "High Engagement", desc: "Proven strategies to boost Retention and CTR with visuals.", color: "text-yellow-400", bg: "bg-yellow-400/10" }
         ].map((item, i) => (
           <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#0A0A0A] border border-[#1f1f1f] p-8 rounded-3xl group"
           >
              <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
           </motion.div>
         ))}
      </div>

      {/* App UI Mockup */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl bg-zinc-950 rounded-[2.5rem] border border-zinc-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden z-10 flex flex-col"
      >
        {/* Mockup Header */}
        <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-4 justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-zinc-500 text-xs flex items-center gap-2 bg-zinc-950 px-20 py-1 rounded-md border border-zinc-800">
            <span>create.video</span>
          </div>
          <div className="w-16"></div> {/* Spacer for balance */}
        </div>
        
        {/* Mockup Toolbar */}
        <div className="h-14 bg-zinc-950 border-b border-zinc-800 flex items-center px-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center hover:bg-zinc-700 transition-colors cursor-pointer"><Play className="w-3 h-3 text-white" /></div>
            <span className="font-semibold text-sm">CREATE®</span>
          </div>
          <div className="text-sm">Marketing Video ▾</div>
          <div className="flex items-center gap-3">
             <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 border border-zinc-900"></div>
                <div className="w-6 h-6 rounded-full bg-orange-500 border border-zinc-900"></div>
                <div className="w-6 h-6 rounded-full bg-pink-500 border border-zinc-900"></div>
             </div>
             <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 hover:bg-blue-700 transition-colors text-xs px-3 py-1.5 rounded text-white font-medium cursor-pointer">Export</motion.button>
          </div>
        </div>

        <div className="flex flex-1 h-[500px]">
          {/* Left Sidebar */}
          <div className="w-16 border-r border-zinc-800 flex flex-col items-center py-6 gap-6 text-zinc-500">
            <Layers className="w-5 h-5 text-zinc-300 hover:text-white cursor-pointer transition-colors" />
            <Type className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <ImageIcon className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Music className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          </div>

          {/* Main Workspace */}
          <div className="flex-1 flex flex-col bg-[#050505] p-6 relative overflow-hidden">
             
             {/* Canvas Area */}
             <div className="flex-1 rounded-lg border border-zinc-800/50 relative overflow-hidden flex items-center justify-center p-8 bg-[#0a0a0a]">
                
                {/* Abstract Canvas Graphic */}
                <div className="relative w-full h-full max-w-2xl max-h-96 rounded-xl border border-zinc-700 overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950"
                     style={{
                       backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(200, 200, 200, 0.05) 1px, transparent 1px)',
                       backgroundSize: '20px 20px'
                     }}>
                   
                   {/* Graphics inside canvas */}
                   <div className="absolute w-64 h-64 border border-zinc-700/50 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                   <div className="absolute w-96 h-40 border border-zinc-700/50 rounded-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
                   
                   <div className="absolute w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-xl opacity-50 bottom-10 left-10"></div>
                   <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-400 to-emerald-500 rounded-full blur-xl opacity-30 top-10 right-10"></div>
                   
                   <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-tr from-yellow-500 to-orange-500 rounded-t-full rounded-bl-full opacity-80"></div>
                   
                   <div className="absolute top-10 right-20 flex justify-center items-center">
                     <span className="text-6xl">😃</span>
                   </div>
                   
                   <div className="absolute w-full h-full flex flex-col items-center justify-center z-10 mt-4">
                     <h2 className="text-5xl font-bold tracking-tight text-white z-10 relative">
                       High Quality Edits
                       {/* Animated Cursor */}
                       <span className="absolute -right-4 top-1 w-0.5 h-10 bg-blue-500 animate-pulse"></span>
                     </h2>
                   </div>

                   {/* Collaboration Tags */}
                   <div className="absolute left-1/3 top-1/4 bg-pink-500 text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap">Fox Mulder</div>
                   <div className="absolute left-1/2 bottom-1/3 -translate-x-1/2 bg-yellow-500 text-[10px] text-black font-medium px-2 py-0.5 rounded shadow whitespace-nowrap">Caroline Lagerfeldt</div>
                   <div className="absolute right-1/4 bottom-1/4 bg-blue-500 text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap">Dana Katherine Scully</div>
                </div>

                {/* Canvas Controls */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <div className="bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded flex items-center gap-1 hover:bg-zinc-700 transition-colors cursor-pointer">
                    <Search className="w-3 h-3"/> 100%
                  </div>
                </div>
             </div>

             {/* Timeline Area */}
             <div className="h-48 mt-4 border border-zinc-800 bg-[#0c0c0c] rounded-lg flex flex-col overflow-hidden">
                <div className="h-8 border-b border-zinc-800 flex items-center px-4 justify-between text-xs text-zinc-500 bg-zinc-900/50">
                  <span>00:00:08 / 00:01:00</span>
                  <div className="flex items-center gap-4">
                    <SkipBack className="w-3 h-3 hover:text-white cursor-pointer transition-colors" />
                    <Play className="w-4 h-4 text-white hover:text-blue-400 cursor-pointer transition-colors" />
                    <SkipBack className="w-3 h-3 hover:text-white rotate-180 cursor-pointer transition-colors" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-zinc-600"></div>
                    </div>
                    <span className="hover:text-white cursor-pointer transition-colors flex items-center">Fit Timeline <Plus className="w-3 h-3 ml-1"/></span>
                  </div>
                </div>
                
                {/* Tracks */}
                <div className="flex-1 overflow-hidden flex">
                  {/* Track Headers */}
                  <div className="w-32 border-r border-zinc-800 bg-zinc-900/30 flex flex-col text-[10px] text-zinc-500">
                    <div className="flex-1 border-b border-zinc-800/50 px-2 py-1 flex items-center justify-between"><span>🔍 Search</span></div>
                    {['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5'].map((t, i) => (
                       <div key={i} className="flex-1 border-b border-zinc-800/50 px-2 py-1 flex items-center justify-between hover:bg-zinc-800/50 transition-colors cursor-pointer">
                         <div className="flex items-center gap-1">
                           <Layers className="w-3 h-3"/> {t}
                         </div>
                       </div>
                    ))}
                  </div>
                  
                  {/* Track Content */}
                  <div className="flex-1 relative overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgwdjQwaDBWMHptMjAgMGgwdjQwaDBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')]">
                     {/* Playhead */}
                     <div className="absolute top-0 bottom-0 left-[20%] w-px bg-red-500 z-20">
                       <div className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-sm bg-red-500"></div>
                     </div>
                     
                     <div className="h-6"></div> {/* Offset for search header */}
                     <div className="h-6 flex items-center px-4 relative">
                        <div className="absolute left-[5%] right-[40%] h-4 bg-teal-500/20 border border-teal-500/50 rounded flex items-center px-2 text-[8px] text-teal-300 hover:bg-teal-500/30 transition-colors cursor-pointer">Editing & Timing</div>
                     </div>
                     <div className="h-6 flex items-center px-4 relative">
                        <div className="absolute left-[10%] right-[60%] h-4 bg-purple-500/20 border border-purple-500/50 rounded flex items-center px-2 text-[8px] text-purple-300 hover:bg-purple-500/30 transition-colors cursor-pointer">Effects</div>
                     </div>
                     <div className="h-6 flex items-center px-4 relative">
                        <div className="absolute left-[5%] right-[70%] h-4 bg-orange-500/20 border border-orange-500/50 rounded flex items-center px-2 text-[8px] text-orange-300 hover:bg-orange-500/30 transition-colors cursor-pointer">Intro</div>
                        <div className="absolute left-[32%] right-[20%] h-4 bg-orange-500/20 border border-orange-500/50 rounded flex items-center px-2 text-[8px] text-orange-300 hover:bg-orange-500/30 transition-colors cursor-pointer">Visual Assets</div>
                        <div className="absolute left-[82%] right-[5%] h-4 bg-orange-500/20 border border-orange-500/50 rounded flex items-center px-2 text-[8px] text-orange-300 hover:bg-orange-500/30 transition-colors cursor-pointer">Outro</div>
                     </div>
                     <div className="h-6 flex items-center px-4 relative">
                        <div className="absolute left-[20%] right-[50%] h-4 bg-fuchsia-500/20 border border-fuchsia-500/50 rounded flex items-center px-2 text-[8px] text-fuchsia-300 hover:bg-fuchsia-500/30 transition-colors cursor-pointer">🎵 Sound Design</div>
                        <div className="absolute left-[60%] right-[10%] h-4 bg-fuchsia-500/20 border border-fuchsia-500/50 rounded flex items-center px-2 text-[8px] text-fuchsia-300 hover:bg-fuchsia-500/30 transition-colors cursor-pointer">🎵 Voice Over</div>
                     </div>
                     <div className="h-6 flex items-center px-4 relative">
                        <div className="absolute left-[0%] right-[30%] h-4 bg-blue-500/20 border border-blue-500/50 rounded flex items-center px-2 text-[8px] text-blue-300 hover:bg-blue-500/30 transition-colors cursor-pointer">🎵 Background Music.mp3</div>
                        <div className="absolute left-[70%] right-[0%] h-4 bg-blue-500/20 border border-blue-500/50 rounded flex items-center px-2 text-[8px] text-blue-300 hover:bg-blue-500/30 transition-colors cursor-pointer">🎵 Outro Fade.mp3</div>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
