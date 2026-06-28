import { DiscordIcon } from './Icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-gray-500">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-xl font-bold tracking-tighter text-white">NOLIFE</div>
          <p className="text-sm">© 2024 NoLife. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <Link to="/discord" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors">
          <DiscordIcon className="w-5 h-5 text-white" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
