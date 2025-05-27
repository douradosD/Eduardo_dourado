import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          <section id="home">
            <Hero setActiveSection={setActiveSection} />
          </section>
          <section id="skills" className="py-20">
            <Skills />
          </section>
          <section id="projects" className="py-20 bg-white dark:bg-slate-800">
            <Projects />
          </section>
          <section id="education" className="py-20">
            <Education />
          </section>
          <section id="contact" className="py-20 bg-white dark:bg-slate-800">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;