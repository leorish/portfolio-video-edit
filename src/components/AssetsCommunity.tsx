import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function AssetsCommunity() {
  const testimonials = [
    {
      name: "Anjali Verma",
      company: "Brandlift India",
      text: "Suman has a very creative mindset and a professional working style. He clearly understands project requirements."
    },
    {
      name: "Rahul Kumar",
      company: "Dentist",
      text: "Working with Suman was a great experience. His video editing skills, creativity, and attention to detail are outstanding. Every project was delivered on time."
    },
    {
      name: "Amit Khanna",
      company: "Khannafitness",
      text: "I hired Suman for social media reels and ad videos, and the results were amazing. The edits were clean, engaging, and helped improve our online reach."
    },
    {
      name: "Neha Sharma",
      company: "Growup Media",
      text: "Suman is a dedicated and reliable video editor. His communication is clear, and his work quality is consistently professional."
    },
    {
      name: "Vikash Patel",
      company: "Patel Enterprise",
      text: "Suman edited our corporate videos with great precision and creativity. The visuals, transitions, and overall flow were perfect. We are very satisfied with his work."
    },
    {
      name: "Pooja Malhotra",
      company: "PM Vlogs",
      text: "Suman’s editing gave my content a professional and polished look. Both my reels and YouTube videos improved a lot after working with him."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 max-w-[1200px] mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Testimonials</h2>
        <p className="text-zinc-400">What clients say about my work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-[#111111] border border-[#1f1f1f] rounded-3xl p-8 flex flex-col hover:border-blue-500/30 transition-colors">
            <div className="flex gap-1 mb-6 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            
            <p className="text-zinc-300 text-sm leading-relaxed mb-8 flex-1 italic">
              "{t.text}"
            </p>
            
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold uppercase overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${t.name.replace(' ', '')}`} alt={t.name} />
               </div>
               <div>
                 <div className="text-white font-medium text-sm">{t.name}</div>
                 <div className="text-zinc-500 text-xs">{t.company}</div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
