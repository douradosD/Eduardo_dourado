import { ArrowRight } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/30 rounded-full filter blur-3xl opacity-30 dark:opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full filter blur-3xl opacity-30 dark:opacity-20 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight text-slate-900 dark:text-white">
            Olá, eu sou<br />
            <span className="text-indigo-600 dark:text-indigo-400">Eduardo Dourado</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-xl">
            Desenvolvedor frontend em formação, com paixão por transformar ideias em interfaces funcionais e responsivas.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              Ver Projetos
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-transparent border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 font-medium rounded-lg transition-colors duration-300"
            >
              Entrar em Contato
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Profile image container with animated border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Eduardo Dourado" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;