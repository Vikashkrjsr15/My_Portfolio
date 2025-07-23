import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Timeline from './components/Timeline';
// import Blog from './components/Blog';
// import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      {/* <Contact /> */}
    </main>
  );
}

export default App;
