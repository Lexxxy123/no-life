import { motion } from 'framer-motion';
import { DiscordIcon } from './Icons';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiscordSoon = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center max-w-md w-full"
      >
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10">
            <DiscordIcon className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tighter mb-4">Discord Soon</h1>
        <p className="text-gray-400 mb-8">
          Our community hub is currently under heavy construction. 
          Early access keys will be distributed here.
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-left">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Status</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <span className="font-medium">Finalizing Permissions</span>
            </div>
          </div>
        </div>

        <Link 
          to="/"
          className="mt-12 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Site</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default DiscordSoon;
