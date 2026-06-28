import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] grayscale"
        >
          <source src="https://videos.pexels.com/video-files/28649481/12442569_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium uppercase tracking-widest text-gray-300 backdrop-blur-sm">
            System under development
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.85]"
        >
          NoLife — <br />
          <span className="text-gray-500">Coming Soon</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The instant-delivery P2P marketplace for Minecraft assets. 
          Engineered for trust, built for speed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link 
            to="/discord" 
            className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 w-full md:w-auto"
          >
            Join our Discord
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
