import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  id: number;
  institution: string;
  course: string;
  startDate: string;
  endDate: string;
  description?: string;
  logo?: string;
}

const Education = () => {
  const educationList: Education[] = [
    {
      id: 1,
      institution: "Faculdade Microlins",
      course: "Análise e Desenvolvimento de Sistemas",
      startDate: "2024",
      endDate: "2026",
      description: "Curso focado em desenvolvimento de software, banco de dados, programação web e mobile.",
      logo: "https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      institution: "Escola DNC",
      course: "Desenvolvimento Frontend",
      startDate: "2024",
      endDate: "Em andamento",
      description: "Formação especializada em tecnologias frontend, incluindo HTML, CSS, JavaScript, React e design responsivo.",
      logo: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Minha <span className="text-indigo-600 dark:text-indigo-400">Formação</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Conheça minha trajetória acadêmica e cursos de especialização.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-900/30"></div>
          
          {educationList.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
            >
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-500 z-10 border-4 border-white dark:border-slate-900"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mt-6 md:mt-0`}>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <GraduationCap size={20} className="text-indigo-600 dark:text-indigo-400 mr-2" />
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.institution}</h3>
                    </div>
                    
                    <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">{item.course}</h4>
                    
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <Calendar size={16} className="mr-1" />
                      <span>{item.startDate} - {item.endDate}</span>
                    </div>
                    
                    {item.description && (
                      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                    )}
                  </div>
                </div>
                
                {/* Image */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src={item.logo} 
                      alt={item.institution} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
          <GraduationCap size={18} className="mr-2" />
          <span className="text-sm font-medium">Sempre buscando novos conhecimentos</span>
        </div>
      </div>
    </div>
  );
};

export default Education;