import { Heart, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-white dark:bg-slate-800 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-slate-200 dark:border-slate-700">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              ED
            </a>
            <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-md">
              Desenvolvedor frontend em formação, transformando ideias em interfaces funcionais e responsivas.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <button
              onClick={scrollToTop}
              className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-colors duration-300"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
            <span className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Voltar ao topo
            </span>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center">
            Desenvolvido com 
            <Heart size={16} className="mx-1 text-red-500 animate-pulse" />
            por Eduardo Dourado
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;