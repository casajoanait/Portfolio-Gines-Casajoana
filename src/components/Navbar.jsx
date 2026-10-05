"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('perfil');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Estado para controlar la visibilidad de la barra
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);

  // Tiempo de inactividad antes de ocultar la barra (en milisegundos)
  const HIDE_TIMEOUT = 1000; // 1 segundo (puedes probar con 800 si lo quieres más rápido)

  const navItems = [
    { id: 'perfil', num: '01', label: 'PERFIL' },
    { id: 'experiencia', num: '02', label: 'EXPERIENCIA' },
    { id: 'proyectos', num: '03', label: 'PROYECTOS' },
    { id: 'contacto', num: '04', label: 'CONTACTO' }
  ];

  // Lógica para detectar movimiento del cursor e inactividad
  useEffect(() => {
    const handleMouseMove = () => {
      setIsVisible(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Se oculta rápido tras 1 segundo sin mover el mouse
      if (!mobileMenuOpen) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, HIDE_TIMEOUT);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [mobileMenuOpen]);

  // Lógica de ScrollSpy y cambio al scrollear
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      setIsVisible(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      if (!mobileMenuOpen) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, HIDE_TIMEOUT);
      }

      // Detección de sección activa
      const sections = ['perfil', 'experiencia', 'proyectos', 'contacto'];
      const scrollPosition = window.scrollY + 220;

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
  }, [mobileMenuOpen]);

  return (
    <motion.header 
      initial={{ y: -80, opacity: 0 }}
      animate={{ 
        y: isVisible || mobileMenuOpen ? 0 : -100, 
        opacity: isVisible || mobileMenuOpen ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 py-5 px-4 flex justify-center items-center pointer-events-none"
    >
      <div className="w-full flex justify-center items-center">
        
        <div className={`pointer-events-auto transition-all duration-300 rounded-full border px-8 py-2.5 relative w-max mx-auto flex items-center justify-center ${
          scrolled 
            ? 'bg-[#030712]/90 backdrop-blur-xl border-slate-700/80 shadow-lg shadow-black/50' 
            : 'bg-[#080C16]/80 backdrop-blur-md border-slate-800/80 shadow-md'
        }`}>

          {/* NAVEGACIÓN PRINCIPAL CENTRADA */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 lg:gap-10 font-mono text-xs tracking-[0.2em] uppercase">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                
                return (
                  <li key={item.id} className="relative py-1">
                    <a 
                      href={`#${item.id}`} 
                      className={`relative z-10 transition-colors duration-200 flex items-center gap-2 group ${
                        isActive 
                          ? 'text-slate-100 font-bold' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className={`text-[10px] transition-colors ${isActive ? 'text-sky-400 font-bold' : 'text-slate-600 group-hover:text-slate-400'}`}>
                        {item.num}.
                      </span>
                      <span>{item.label}</span>
                    </a>

                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-400/90 rounded-full"
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 30 
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* MENÚ MÓVIL */}
          <div className="flex md:hidden items-center justify-between min-w-[200px]">
            <span className="font-mono text-xs text-slate-300 tracking-wider font-bold">
              MENÚ
            </span>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-slate-300 hover:text-white p-1 bg-[#090D16] border border-slate-700 rounded-sm"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 w-[260px] bg-[#030712]/95 border border-slate-700/80 rounded-xl p-4 shadow-2xl backdrop-blur-xl pointer-events-auto z-50"
          >
            <ul className="space-y-2 font-mono text-xs tracking-widest uppercase">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 px-3 rounded-md transition-colors flex items-center justify-between ${
                      activeSection === item.id 
                        ? 'text-sky-400 bg-slate-900 font-bold border-l-2 border-sky-400' 
                        : 'text-slate-300 hover:bg-slate-900/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-slate-500 text-[10px]">{item.num} //</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}