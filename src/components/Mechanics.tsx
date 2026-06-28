import { motion } from 'framer-motion';
import { Clock, Shield, Zap, Repeat } from 'lucide-react';

const Mechanics = () => {
  return (
    <section className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">01 — Core Mechanics</p>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
              Built for <span className="text-gray-400">instant trust</span>, engineered for speed.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              The ultimate automated, instant-delivery P2P marketplace for Minecraft assets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-black/10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">15-minute Locks</h4>
                  <p className="text-gray-500 text-sm">Secure checkout sessions ensuring item availability.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl">
                  <Repeat className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">LTC Payments</h4>
                  <p className="text-gray-500 text-sm">Direct, low-fee cryptocurrency checkouts.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Discord DM Delivery</h4>
                  <p className="text-gray-500 text-sm">Automated asset delivery directly to your inbox.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Escrow Protection</h4>
                  <p className="text-gray-500 text-sm">Trusted 24-hour protection system for all buyers.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mechanics;
