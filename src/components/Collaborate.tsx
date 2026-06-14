import { motion } from 'motion/react';

export default function Collaborate() {
  return (
    <section id="about" className="py-20 px-6 max-w-[1200px] mx-auto w-full">
      <div className="bg-[#111111] border border-[#1f1f1f] rounded-3xl p-0 relative overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        
        {/* Left Content */}
        <div className="p-10 md:p-16 flex flex-col justify-center max-w-xl z-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.1]">
            About Me
          </h2>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-emerald-900/40 border border-emerald-700/50 text-emerald-400 text-xs px-3 py-1 rounded-full font-medium">
              3+ Years Experience
            </span>
            <span className="bg-blue-900/40 border border-blue-700/50 text-blue-400 text-xs px-3 py-1 rounded-full font-medium">
              Video Editor
            </span>
          </div>
          <p className="text-zinc-400 text-md mb-6 leading-relaxed">
            Hi, my name is Suman Kumar. I am a student, constantly learning something new daily for my future company and my beautiful clients.
          </p>
          <p className="text-zinc-400 text-md mb-8 leading-relaxed">
             I am a creative video editor and graphic designer with a strong passion for visual storytelling. I enjoy turning ideas into engaging designs and videos that connect with people. I am constantly learning, improving my skills, and working towards building my own creative brand through dedication and consistency.
          </p>
        </div>

        {/* Right UI Graphic Area */}
        <div className="flex-1 relative hidden md:block">
           {/* Abstract glows */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

           {/* Portrait / Gallery Layout Mockup  */}
           <div className="absolute top-[10%] left-[10%] right-[-10%] bottom-[-10%] bg-[#0A0A0A] border border-[#1f1f1f] rounded-tl-3xl shadow-2xl flex p-5 gap-5">
              <div className="w-1/2 h-full rounded-2xl overflow-hidden relative border border-white/5">
                 <img src="https://suma9-kumar.github.io/sumankumarportfolio-/images/me1.png" className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700" alt="Suman Profile" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="w-1/2 h-full flex flex-col gap-5">
                 <div className="flex-1 rounded-2xl overflow-hidden relative border border-white/5">
                    <img src="https://suma9-kumar.github.io/sumankumarportfolio-/images/Professional%20and%20Eye-Catching%20YouTube%20Thumbnail%20Design%20_%20Boost%20Your%20Click-Through%20Rate%20(1).jpg" className="w-full h-full object-cover" alt="Workspace" />
                 </div>
                 <div className="flex-1 rounded-2xl overflow-hidden relative border border-white/5">
                    <img src="https://suma9-kumar.github.io/sumankumarportfolio-/images/Top%20YouTube%20Thumbnail%20Ideas%20for%20Captivating%20Documentary%20Designs.jpg" className="w-full h-full object-cover" alt="Editing Setup" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
