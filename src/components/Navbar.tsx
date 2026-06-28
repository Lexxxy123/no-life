import { motion } from 'framer-motion';
import { DiscordIcon } from './Icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference">
      <Link to="/">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          NOLIFE
        </motion.div>
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-6"
      >
        <Link to="/discord" className="group flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors">
          <DiscordIcon className="w-5 h-5" />
          <span>Discord</span>
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
