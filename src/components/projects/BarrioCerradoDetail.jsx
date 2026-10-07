"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, Eye, CheckCircle2, FileText, Maximize2, ExternalLink 
} from 'lucide-react';

export default function BarrioCerradoDetail({ onClose }) {
  const [activeImg, setActiveImg] = useState(0);

  const screenshots = [
    { src: "/barrio-cerrado1.png", title: "Ingreso & Selección de Garita / Turno" },
    { src: "/barrio-cerrado2.png", title: "Padrón General de Personas & Búsqueda" },
    { src: "/barrio-cerrado3.png", title: "Alta de Persona, Categorización & Vehículo" },
    { src: "/barrio-cerrado4.png", title: "Control de Movimiento (Ingreso/Egreso Validado)" },
    { src: "/barrio-cerrado5.png", title: "Padrón de Vehículos & Control de Seguros Vencidos" },
    { src: "/barrio-cerrado6.png", title: "Panel de Administración & Parámetros Globales" }
  ];

  const nextImg = () => setActiveImg((prev) => (prev + 1) % screenshots.length);
  const prevImg = () => setActiveImg((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImg();
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="bg-[#090D16] border border-amber-500/50 rounded-sm p-4 sm:p-6 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
      
      {/* Botón Cerrar */}
      <button 
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 p-1.5 rounded-sm z-20"
      >
        <X size={18} />
      </button>

      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 pr-10">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono text-[10px] uppercase font-bold">
              USAL // Programación Avanzada[cite: 3]
            </span>
            <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
              <CheckCircle2 size={12} className="text-emerald-400" /> Frontend & UX Lead[cite: 3]
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-100 font-serif">
            Sistema ERP Barrio Cerrado "Las Acacias"
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a 
            href="/Diseño v2.2.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-200 border border-slate-700 bg-slate-900 hover:bg-slate-800 px-3.5 py-2 rounded-sm"
          >
            <FileText size={14} className="text-amber-400" /> Descargar PDF de Diseño (v2.2) ↗[cite: 2]
          </a>
          <a 
            href="https://github.com/AgustinGil21/grupo08.progra-avanzada2026" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 border border-amber-500/30 bg-amber-950/20 px-3.5 py-2 rounded-sm"
          >
            <ExternalLink size={14} /> GitHub ↗
          </a>
        </div>
      </div>

      {/* Galería Interactiva */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 space-y-2">
          <div className="flex items-center justify-between font-mono text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-t-sm border border-slate-800">
            <span className="flex items-center gap-2 truncate pr-2">
              <Eye size={14} className="text-amber-400 shrink-0" />
              <span className="text-cyan-400 font-bold">{activeImg + 1}/6:</span>
              <strong className="text-slate-200 truncate">{screenshots[activeImg].title}</strong>
            </span>
            <a href={screenshots[activeImg].src} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 flex items-center gap-1 text-[11px]">
              <Maximize2 size={12} /> Pantalla Completa
            </a>
          </div>

          <div className="relative bg-slate-950 border border-slate-800 h-[320px] sm:h-[400px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeImg}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.4 }}
                transition={{ duration: 0.2 }}
                src={screenshots[activeImg].src} 
                alt={screenshots[activeImg].title} 
                className="w-full h-full object-contain bg-slate-950 p-1 select-none"
              />
            </AnimatePresence>

            <button type="button" onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 p-2.5 rounded-full border border-slate-700 z-10">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 p-2.5 rounded-full border border-slate-700 z-10">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Barras amarillas de progreso */}
          <div className="grid grid-cols-6 gap-2 pt-1">
            {screenshots.map((img, idx) => (
              <div key={idx} onClick={() => setActiveImg(idx)} className="cursor-pointer py-1.5">
                <div className={`h-2 rounded-sm transition-all ${activeImg === idx ? 'bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)]' : 'bg-slate-800'}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Detalles Técnicos */}
        <div className="lg:col-span-5 space-y-4 pt-1">
          <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed text-justify">
            Solución Fullstack desarrollada en equipo para la gestión completa de barrios cerrados[cite: 3]. Automatiza la operativa en garitas de seguridad, registro de propietarios/visitas y auditoría de seguros vehiculares[cite: 3].
          </p>

          <div className="p-3 bg-slate-900/90 border-l-2 border-amber-500 rounded-r-sm font-mono text-xs text-slate-300">
            <strong className="text-amber-400 font-bold uppercase block text-[11px]">// Mi Contribución Técnica:</strong>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Lideré la maquetación y la lógica de **Interfaz de Usuario (Frontend)**[cite: 3], garantizando la conexión fluida con las APIs de Backend, bases de datos relacionales y el control de versiones en **Git & GitHub**[cite: 3].
            </p>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest block mb-2 font-bold">// TECH STACK</span>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
              {["C#", "ASP.NET Core", "SQL Server", "Modelado UML/ER", "Git & GitHub"].map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-slate-900 text-cyan-300 border border-slate-800 rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}