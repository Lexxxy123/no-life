import { motion, useScroll, useSpring } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Mechanics from './components/Mechanics';
import Stack from './components/Stack';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import DiscordSoon from './components/DiscordSoon';

function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black relative">
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <HowItWorks />
        <Mechanics />
        <Stack />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/discord" element={<DiscordSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
