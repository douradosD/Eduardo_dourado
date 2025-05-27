import { useState } from 'react';
import { Code, Layout, Database, Github as Git, Brain } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'tools' | 'learning';
  icon?: React.ReactNode;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'tools' | 'learning'>('all');
  
  const skills: Skill[] = [
    { name: 'HTML5', level: 85, category: 'frontend', icon: <Code size={20} /> },
    { name: 'CSS3', level: 80, category: 'frontend', icon: <Layout size={20} /> },
    { name: 'JavaScript (ES6+)', level: 75, category: 'frontend', icon: <Code size={20} /> },
    { name: 'React.js', level: 70, category: 'frontend', icon: <Code size={20} /> },
    { name: 'Tailwind CSS', level: 75, category: 'frontend', icon: <Layout size={20} /> },
    { name: 'Git e GitHub', level: 65, category: 'tools', icon: <Git size={20} /> },
    { name: 'TypeScript', level: 30, category: 'learning', icon: <Code size={20} /> },
    { name: 'Node.js', level: 20, category: 'learning', icon: <Database size={20} /> },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Minhas <span className="text-indigo-600 dark:text-indigo-400">Habilidades</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Tecnologias e ferramentas que domino e utilizo em meus projetos.
        </p>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-700 rounded-lg">
          {['all', 'frontend', 'tools', 'learning'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-white dark:bg-slate-600 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
              onClick={() => setActiveCategory(category as any)}
            >
              {category === 'all' ? 'Todas' : 
               category === 'frontend' ? 'Frontend' : 
               category === 'tools' ? 'Ferramentas' : 'Aprendendo'}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="mr-3 p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md">
                {skill.icon || <Brain size={20} />}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
            </div>
            
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${skill.level}%`, 
                  animation: `progressAnimation 1.5s ease-out ${index * 0.1}s` 
                }}
              ></div>
            </div>
            <div className="mt-2 text-right text-sm text-slate-500 dark:text-slate-400">
              {skill.level}%
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
          <Brain size={18} className="mr-2" />
          <span className="text-sm font-medium">Sempre em constante aprendizado...</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;