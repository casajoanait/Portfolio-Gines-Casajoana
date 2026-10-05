"use client";

import { useState, useEffect } from 'react';
import PhysicsBackground from '@/components/PhysicsBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('perfil');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      const sections = ['perfil', 'experiencia', 'proyectos', 'contacto'];
      const scrollPosition = window.scrollY + 300; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-[#0B1120] font-sans selection:bg-amber-500 selection:text-slate-950 text-slate-200 relative overflow-hidden">
      
      {/* Motor de Físicas Dinámicas Interactivas */}
      <PhysicsBackground />

      <Navbar activeSection={activeSection} />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="py-10 bg-[#0B1120] text-center border-t border-slate-800/80 relative z-10">
        <p className="text-slate-500 text-xs tracking-[0.3em] uppercase font-mono">
          Arquitectura Modular Avanzada · Motor de Físicas HTML5 · React & Next.js
        </p>
      </footer>
    </main>
  );
}