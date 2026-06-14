import { motion } from 'motion/react';
import { Video, Image as ImageIcon, Smartphone, Edit3, MonitorPlay } from 'lucide-react';

export default function Features() {
  return (
    <section id="services" className="py-10 px-6 max-w-[1200px] mx-auto w-full">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">My Services</h2>
        <p className="text-zinc-400">WHAT I CAN DO FOR YOU</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Video Editing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#111111] border border-[#1f1f1f] rounded-3xl p-8 flex flex-col h-[320px] group transition-colors hover:border-blue-500/50"
        >
          <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
            <Video className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Video Editing</h3>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
            Professional video editing for YouTube, corporate projects, and commercials. Clean cuts, smooth transitions, and engaging flow.
          </p>
          <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-sm text-blue-400 font-medium">
             Learn more &rarr;
          </div>
        </motion.div>

        {/* Thumbnail Editing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#111111] border border-[#1f1f1f] rounded-3xl p-8 flex flex-col h-[320px] group transition-colors hover:border-pink-500/50"
        >
          <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center mb-6 text-pink-400">
            <ImageIcon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Thumbnail Design</h3>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
            Eye-catching and clickable thumbnails designed to boost your CTR and attract more viewers to your content.
          </p>
          <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-sm text-pink-400 font-medium">
             Learn more &rarr;
          </div>
        </motion.div>

        {/* Social Media Reels */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#111111] border border-[#1f1f1f] rounded-3xl p-8 flex flex-col h-[320px] group transition-colors hover:border-orange-500/50"
        >
          <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mb-6 text-orange-400">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Reels & TikToks</h3>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
            Fast-paced, highly engaging short-form content optimized for Instagram Reels, TikTok, and YouTube Shorts.
          </p>
          <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-sm text-orange-400 font-medium">
             Learn more &rarr;
          </div>
        </motion.div>

        {/* Graphic Design */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#111111] border border-[#1f1f1f] rounded-3xl p-8 flex flex-col lg:col-span-2 h-[240px] group transition-colors hover:border-emerald-500/50"
        >
          <div className="flex gap-6 items-start h-full">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
              <Edit3 className="w-6 h-6" />
            </div>
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">Graphic Design & Branding</h3>
              <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">
                I help brands grow by delivering high-quality visual assets. From social media posts to brand identity, I create impactful designs that leave a lasting impression.
              </p>
              <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-sm text-emerald-400 font-medium">
                Learn more &rarr;
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media Mgmt */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#111111] border border-[#1f1f1f] rounded-3xl p-8 flex flex-col relative h-[240px] group transition-colors hover:border-purple-500/50"
        >
          <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-400">
            <MonitorPlay className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Social Media</h3>
          <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
            Full-service social media management to keep your audience engaged.
          </p>
          <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-sm text-purple-400 font-medium">
             Learn more &rarr;
          </div>
        </motion.div>

      </div>
    </section>
  );
}
