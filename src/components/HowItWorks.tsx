import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">How it works</p>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter max-w-3xl">
          Three steps, <span className="text-gray-500 italic">zero friction.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            num: "01",
            title: "Connect",
            desc: "Join our verified ecosystem through Discord and set up your wallet.",
            color: "bg-blue-500"
          },
          {
            num: "02",
            title: "Browse",
            desc: "Find exclusive Minecraft assets from trusted sellers across the globe.",
            color: "bg-purple-500"
          },
          {
            num: "03",
            title: "Execute",
            desc: "Instant delivery to your DM with 24-hour escrow protection.",
            color: "bg-emerald-500"
          }
        ].map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="group relative"
          >
            <div className={`absolute -inset-4 rounded-2xl ${step.color} opacity-0 group-hover:opacity-[0.05] transition-opacity blur-2xl`} />
            <div className="relative">
              <div className="text-5xl font-bold text-white/10 mb-6 group-hover:text-white/20 transition-colors">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
