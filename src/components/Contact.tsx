import { useState } from 'react';
import { Phone, Mail, Linkedin, Github as GitHub, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  const contactInfo = [
    { 
      icon: <Phone size={20} />, 
      label: 'Telefone', 
      value: '(86) 99595-3738',
      link: 'tel:+5586995953738'
    },
    { 
      icon: <MessageCircle size={20} />, 
      label: 'WhatsApp', 
      value: '(86) 99595-3738',
      link: 'https://wa.me/5586995953738'
    },
    { 
      icon: <Mail size={20} />, 
      label: 'Email', 
      value: 'eduardodourado000099@gmail.com',
      link: 'mailto:eduardodourado000099@gmail.com'
    },
    { 
      icon: <Linkedin size={20} />, 
      label: 'LinkedIn', 
      value: 'carlos-eduardo-macedo-dourado',
      link: 'https://www.linkedin.com/in/carlos-eduardo-macedo-dourado-40aaa9189'
    },
    { 
      icon: <GitHub size={20} />, 
      label: 'GitHub', 
      value: 'douradosD',
      link: 'https://github.com/douradosD'
    }
  ];
  
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Entre em <span className="text-indigo-600 dark:text-indigo-400">Contato</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Estou disponível para novas oportunidades e colaborações. Vamos conversar!
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Informações de Contato</h3>
          
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg mr-4 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.label}</h4>
                  <p className="text-slate-900 dark:text-white font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Localização</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">Teresina, Piauí - Brasil</p>
            <p className="text-slate-600 dark:text-slate-400">Disponível para trabalho remoto ou presencial</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Envie uma Mensagem</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className={`w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center ${
                formStatus === 'submitting' ? 'opacity-70 cursor-wait' : ''
              }`}
            >
              {formStatus === 'idle' && (
                <>
                  <Send size={18} className="mr-2" />
                  Enviar Mensagem
                </>
              )}
              {formStatus === 'submitting' && 'Enviando...'}
              {formStatus === 'success' && 'Mensagem Enviada!'}
              {formStatus === 'error' && 'Erro ao enviar. Tente novamente.'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;