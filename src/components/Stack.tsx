import { motion } from 'framer-motion';
import { Cpu, Server, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Stack = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">02 — The Stack</p>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Every transaction, <span className="text-gray-500">automated end-to-end.</span>
          </h2>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <Cpu className="w-8 h-8 mb-4 text-white/40" />
              <h4 className="font-bold mb-1 italic">Real-time</h4>
              <p className="text-gray-500 text-xs uppercase tracking-tighter">Processing</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <Server className="w-8 h-8 mb-4 text-white/40" />
              <h4 className="font-bold mb-1 italic">Scalable</h4>
              <p className="text-gray-500 text-xs uppercase tracking-tighter">Infrastructure</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <Globe className="w-8 h-8 mb-4 text-white/40" />
              <h4 className="font-bold mb-1 italic">Global</h4>
              <p className="text-gray-500 text-xs uppercase tracking-tighter">Availability</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <Lock className="w-8 h-8 mb-4 text-white/40" />
              <h4 className="font-bold mb-1 italic">Hardened</h4>
              <p className="text-gray-500 text-xs uppercase tracking-tighter">Security</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 flex flex-col justify-center bg-zinc-900 rounded-[2rem] p-12 relative group overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none grayscale">
             <video autoPlay loop muted playsInline className="w-full h-full object-cover">
               <source src="https://videos.pexels.com/video-files/3141207/3141207-uhd_3840_2160_25fps.mp4" type="video/mp4" />
             </video>
          </div>
          <div className="absolute inset-0 bg-zinc-900/60" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Be first to mine the launch.</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Early Discord members get priority access and launch-day perks. Join the circle of elite sellers and collectors.
            </p>
            <Link 
              to="/discord" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 self-start"
            >
              Join the Discord
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;
