import { useState } from 'react';
import { ExternalLink, Github as GitHub, Code, Layout, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Portfólio Pessoal",
      description: "Desenvolvi meu portfólio pessoal com React e TailwindCSS. Ele representa minha identidade como desenvolvedor e reúne meus principais projetos.",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "TailwindCSS", "Vite"],
      githubUrl: "https://github.com/douradosD",
      demoUrl: "#"
    },
    {
      id: 2,
      title: "Página de Login Responsiva",
      description: "Uma interface de login criada com HTML, CSS e JavaScript puro, com foco em responsividade e boas práticas.",
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/douradosD"
    },
    {
      id: 3,
      title: "Lista de Tarefas",
      description: "Aplicativo de lista de tarefas construído com React que permite adicionar, remover e marcar tarefas como concluídas.",
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "CSS", "LocalStorage"],
      githubUrl: "https://github.com/douradosD",
      demoUrl: "#"
    }
  ];
  
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Meus <span className="text-indigo-600 dark:text-indigo-400">Projetos</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Conheça alguns dos projetos que desenvolvi durante minha jornada de aprendizado.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div 
            key={project.id}
            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative overflow-hidden h-48 bg-slate-200 dark:bg-slate-700">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                style={{
                  transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex space-x-2">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
                      aria-label="Ver demonstração"
                    >
                      <Eye size={18} />
                    </a>
                  )}
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
                    aria-label="Ver código no GitHub"
                  >
                    <GitHub size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2 text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center"
                >
                  <GitHub size={16} className="mr-1" />
                  Código
                </a>
                
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://github.com/douradosD" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
        >
          <GitHub size={18} className="mr-2" />
          Ver mais no GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;