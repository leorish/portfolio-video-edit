import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Automate from './components/Automate';
import Projects from './components/Projects';
import Features from './components/Features';
import Templates from './components/Templates';
import Collaborate from './components/Collaborate';
import AssetsCommunity from './components/AssetsCommunity';
import Footer from './components/Footer';

// Scroll animation wrapper
function FadeInView({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <FadeInView delay={0.1}>
          <Automate />
        </FadeInView>
        <FadeInView>
          <Features />
        </FadeInView>
        <FadeInView delay={0.1}>
          <Projects />
        </FadeInView>
        <FadeInView delay={0.2}>
          <Templates />
        </FadeInView>
        <FadeInView delay={0.1}>
          <Collaborate />
        </FadeInView>
        <FadeInView delay={0.2}>
          <AssetsCommunity />
        </FadeInView>
      </main>
      <Footer />
    </div>
  );
}
