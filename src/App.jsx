import { useEffect, useState } from 'react';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import DevOps from './components/DevOps.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Skills from './components/Skills.jsx';

const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'learning', 'resume', 'contact'];

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.38;
      const currentSection = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section) => section && section.getBoundingClientRect().top <= marker)
        .at(-1);

      if (currentSection) setActiveSection(currentSection.id);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  return (
    <>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onThemeChange={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
      />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <DevOps />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <a
        className={`back-to-top${activeSection === 'home' ? '' : ' is-visible'}`}
        href="#home"
        aria-label="Back to top"
      >
        ↑
      </a>
    </>
  );
}

export default App;
