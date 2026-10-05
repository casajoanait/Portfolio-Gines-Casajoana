"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Globe, ChevronLeft, ChevronRight, 
  Eye, CheckCircle2, FileText, X, ZoomIn
} from 'lucide-react';

// Icono vectorial nativo para GitHub
const GithubIcon = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  // ESTADOS Y CAPTURAS DEL BARRIO CERRADO "LAS ACACIAS"
  const [barrioActiveImg, setBarrioActiveImg] = useState(0);
  const [isBarrioModalOpen, setIsBarrioModalOpen] = useState(false);

  const barrioScreenshots = [
    { src: "/barrio-cerrado1.png", title: "Ingreso & Selección de Garita / Turno" },
    { src: "/barrio-cerrado2.png", title: "Padrón General de Personas & Búsqueda Filtro" },
    { src: "/barrio-cerrado3.png", title: "Alta de Persona, Categorización & Vehículo" },
    { src: "/barrio-cerrado4.png", title: "Control de Movimiento (Ingreso/Egreso Validado)" },
    { src: "/barrio-cerrado5.png", title: "Padrón de Vehículos & Control de Seguros Vencidos" },
    { src: "/barrio-cerrado6.png", title: "Panel de Administración & Parámetros Globales" }
  ];

  const nextBarrioImg = () => setBarrioActiveImg((prev) => (prev + 1) % barrioScreenshots.length);
  const prevBarrioImg = () => setBarrioActiveImg((prev) => (prev - 1 + barrioScreenshots.length) % barrioScreenshots.length);

  // NOMBRE EXACTO DE LA CAPTURA DE ONDATAP
  const [ondaImgSrc, setOndaImgSrc] = useState("/Screenshot 2026-10-05 173016.png");
  const [isOndaModalOpen, setIsOndaModalOpen] = useState(false);

  // Fallback de extensiones por si la imagen varía en public/
  const handleOndaImgError = () => {
    if (ondaImgSrc === "/Screenshot 2026-10-05 173016.png") {
      setOndaImgSrc("/Screenshot 2026-10-05 173016.PNG");
    } else if (ondaImgSrc === "/Screenshot 2026-10-05 173016.PNG") {
      setOndaImgSrc("/Screenshot 2026-10-05 173016.jpg");
    } else if (ondaImgSrc === "/Screenshot 2026-10-05 173016.jpg") {
      setOndaImgSrc("/ondatap1.png");
    }
  };

  // NAVEGACIÓN CON FLECHAS DE TECLADO Y TECLA ESCAPE
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isBarrioModalOpen) {
        if (e.key === 'ArrowRight') nextBarrioImg();
        if (e.key === 'ArrowLeft') prevBarrioImg();
        if (e.key === 'Escape') setIsBarrioModalOpen(false);
      } else if (isOndaModalOpen) {
        if (e.key === 'Escape') setIsOndaModalOpen(false);
      } else {
        if (e.key === 'ArrowRight') nextBarrioImg();
        if (e.key === 'ArrowLeft') prevBarrioImg();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBarrioModalOpen, isOndaModalOpen]);

  return (
    <section id="proyectos" className="py-20 bg-[#0B1120] relative border-t border-slate-800/80 overflow-hidden">
      
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-500/5 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* ENCABEZADO SUPERIOR DE LA SECCIÓN */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-violet-900/40 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-[0.25em] bg-sky-950/30 px-4 py-1.5 rounded-sm border border-sky-500/30 mb-3">
              <Terminal size={14} className="text-sky-400 animate-pulse" /> Arsenal Técnico // Software & Productos
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-100 font-serif tracking-tight">
              Proyectos Destacados
            </h2>
          </div>

          <p className="text-slate-400 text-xs font-mono max-w-md leading-relaxed">
            Plataformas en producción comercial en Estados Unidos y sistemas de ingeniería ERP con control de acceso por roles y arquitectura relacional.
          </p>
        </div>

        {/* =========================================================================================
            PROYECTO 1: ONDATAP — FREELANCE // CLIENTE EE.UU.
           ========================================================================================= */}
        <div className="bg-[#080C16] border border-violet-900/60 hover:border-sky-500/50 transition-all rounded-sm p-4 sm:p-6 shadow-2xl relative space-y-6">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 via-sky-400 to-emerald-500"></div>

          {/* Header del Proyecto OndaTap */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-emerald-950/70 text-emerald-400 border border-emerald-500/50 font-mono text-xs rounded-sm uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  DESARROLLO FREELANCE // CLIENTE EE.UU.
                </span>
                <span className="text-slate-400 font-mono text-xs flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-sky-400" /> Full-Stack & System Admin
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 font-serif tracking-tight">
                OndaTap — Plataforma NFC & Post-Venta
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="https://ondatap.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-mono text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 hover:scale-[1.02] px-5 py-2.5 rounded-sm font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
              >
                <Globe size={15} /> Visitar Sitio Web ↗
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-start">
            
            {/* Visor de captura única de OndaTap */}
            <div className="lg:col-span-7 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-t-sm border border-slate-800/80">
                <span className="flex items-center gap-2 truncate pr-2">
                  <Eye size={14} className="text-sky-400 shrink-0" />
                  <strong className="text-slate-200 truncate">Landing Page Oficial & Plataforma Web (ondatap.com)</strong>
                </span>
                <button 
                  onClick={() => setIsOndaModalOpen(true)}
                  className="text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 text-[11px] shrink-0 font-mono bg-sky-500/10 px-2.5 py-1 rounded-sm border border-sky-500/30 cursor-pointer"
                >
                  <ZoomIn size={13} /> Maximizar
                </button>
              </div>

              <div 
                onClick={() => setIsOndaModalOpen(true)}
                className="relative bg-slate-950 border border-slate-800/90 overflow-hidden h-[400px] sm:h-[480px] w-full flex items-center justify-center shadow-2xl rounded-b-sm cursor-zoom-in group"
              >
                <img 
                  src={ondaImgSrc} 
                  alt="OndaTap Platform" 
                  onError={handleOndaImgError}
                  className="w-full h-full object-contain bg-slate-950 p-1 select-none"
                />

                <div className="absolute inset-0 bg-sky-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-slate-950/90 text-sky-400 border border-sky-500/40 px-4 py-2 font-mono text-xs rounded-sm flex items-center gap-2 shadow-xl">
                    <ZoomIn size={14} /> Clic para maximizar captura
                  </span>
                </div>
              </div>
            </div>

            {/* Detalles Técnicos OndaTap */}
            <div className="lg:col-span-5 space-y-4 pt-1">
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed text-justify">
                Plataforma web contratada de forma freelance por un cliente radicado en <strong>Estados Unidos</strong>. El sistema gestiona perfiles digitales de presentación y servicios de post-venta para gastronomía y comercios, permitiendo el seguimiento de métricas y la fidelización del cliente final mediante tarjetas NFC y códigos QR.
              </p>

              <div className="p-3 bg-slate-900/90 border-l-2 border-sky-500 rounded-r-sm font-mono text-xs text-slate-300 space-y-1">
                <strong className="text-sky-400 font-bold uppercase block text-[11px]">// Mi Trabajo Freelance & Desarrollo:</strong>
                <p className="text-[11px] leading-relaxed text-slate-400">
                  Gestión integral de la web y el sistema post-venta. Diseñé e implementé la plataforma responsiva con descarga directa de fichas de contacto VCF, vinculación con chips NFC y panel de métricas en tiempo real.
                </p>
              </div>

              <div className="grid sm:grid-cols-1 gap-2 font-mono text-[11px] text-slate-300 pt-1">
                <div className="flex items-start gap-2 bg-slate-950/40 p-2 border border-slate-800/80 rounded-sm">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Integración hardware NFC/QR con redirección dinámica en vivo.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950/40 p-2 border border-slate-800/80 rounded-sm">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Generador de contactos VCF para guardado automático en agenda.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950/40 p-2 border border-slate-800/80 rounded-sm">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Dashboard de analítica para monitoreo de lecturas y tasa de conversión.</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest block mb-2 font-bold">// TECH STACK UTILIZADO</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-slate-900 text-sky-300 border border-slate-800 rounded-sm font-mono text-[10px]">React / Next.js</span>
                  <span className="px-2 py-0.5 bg-slate-900 text-sky-300 border border-slate-800 rounded-sm font-mono text-[10px]">Tailwind CSS</span>
                  <span className="px-2 py-0.5 bg-slate-900 text-sky-300 border border-slate-800 rounded-sm font-mono text-[10px]">VCF API Generator</span>
                  <span className="px-2 py-0.5 bg-slate-900 text-sky-300 border border-slate-800 rounded-sm font-mono text-[10px]">NFC / QR Payload</span>
                  <span className="px-2 py-0.5 bg-slate-900 text-sky-300 border border-slate-800 rounded-sm font-mono text-[10px]">Analytics Dashboard</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* =========================================================================================
            PROYECTO 2: ERP BARRIO CERRADO ("LAS ACACIAS") — USAL
           ========================================================================================= */}
        <div className="bg-[#080C16] border border-violet-900/60 hover:border-amber-500/50 transition-all rounded-sm p-4 sm:p-6 shadow-2xl relative space-y-6">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-sky-400 to-violet-600"></div>

          {/* Header del Proyecto Barrio Cerrado */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono text-[10px] uppercase tracking-wider rounded-sm font-bold">
                  PROYECTO UNIVERSITARIO // USAL
                </span>
                <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-emerald-400" /> Frontend & UX Lead
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-100 tracking-tight leading-snug">
                Sistema ERP de Gestión & Control de Accesos ("Las Acacias")
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="/Diseño v2.2.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-200 border border-slate-700 bg-slate-900 hover:bg-slate-800 px-3.5 py-2 rounded-sm transition-all"
              >
                <FileText size={14} className="text-amber-400" /> Descargar PDF de Diseño (v2.2) ↗
              </a>

              <a 
                href="https://github.com/AgustinGil21/grupo08.progra-avanzada2026" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 border border-amber-500/30 bg-amber-950/20 px-3.5 py-2 rounded-sm transition-all hover:border-amber-500/60"
              >
                <GithubIcon size={14} /> Ver GitHub ↗
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-start">
            
            {/* VISOR DE 6 IMÁGENES CON FLECHAS Z-20 Y BARRAS DE PROGRESO */}
            <div className="lg:col-span-7 space-y-2">
              
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-t-sm border border-slate-800/80">
                <span className="flex items-center gap-2 truncate pr-2">
                  <Eye size={14} className="text-amber-400 shrink-0" />
                  <span className="text-cyan-400 font-bold">{barrioActiveImg + 1}/6:</span>
                  <strong className="text-slate-200 truncate">{barrioScreenshots[barrioActiveImg].title}</strong>
                </span>
                <button 
                  onClick={() => setIsBarrioModalOpen(true)}
                  className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 text-[11px] shrink-0 font-mono bg-amber-500/10 px-2.5 py-1 rounded-sm border border-amber-500/30 cursor-pointer"
                >
                  <ZoomIn size={13} /> Maximizar
                </button>
              </div>

              {/* Visor Principal con flechas de clic garantizado (z-20) */}
              <div 
                onClick={() => setIsBarrioModalOpen(true)}
                className="relative bg-slate-950 border border-slate-800/90 overflow-hidden h-[400px] sm:h-[500px] w-full flex items-center justify-center group shadow-2xl cursor-zoom-in"
              >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={barrioActiveImg}
                    initial={{ opacity: 0.4, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.4, scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    src={barrioScreenshots[barrioActiveImg].src} 
                    alt={barrioScreenshots[barrioActiveImg].title} 
                    className="w-full h-full object-contain bg-slate-950 p-1 select-none"
                  />
                </AnimatePresence>

                {/* Botón Flecha Izquierda con z-20 */}
                <button 
                  type="button"
                  onClick={(e) => { e.stopPropagation(); prevBarrioImg(); }} 
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 p-3 rounded-full border border-slate-700 transition-all opacity-90 hover:opacity-100 z-20 cursor-pointer shadow-2xl"
                  title="Anterior (Flecha Izquierda ◄)"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Botón Flecha Derecha con z-20 */}
                <button 
                  type="button"
                  onClick={(e) => { e.stopPropagation(); nextBarrioImg(); }} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 p-3 rounded-full border border-slate-700 transition-all opacity-90 hover:opacity-100 z-20 cursor-pointer shadow-2xl"
                  title="Siguiente (Flecha Derecha ►)"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* BARRA DE 6 BARRAS SÓLIDAS DE PROGRESO */}
              <div className="grid grid-cols-6 gap-2 pt-1">
                {barrioScreenshots.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setBarrioActiveImg(idx)}
                    className="cursor-pointer py-1.5 group"
                  >
                    <div className={`h-2 rounded-sm transition-all duration-300 ${
                      barrioActiveImg === idx 
                        ? 'bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)] scale-y-110' 
                        : 'bg-slate-800 hover:bg-slate-700'
                    }`} />
                    <span className={`block font-mono text-[9px] text-center mt-1 transition-colors ${
                      barrioActiveImg === idx ? 'text-amber-400 font-bold' : 'text-slate-600 group-hover:text-slate-400'
                    }`}>
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>

              {/* Indicador de teclado fuera de la foto */}
              <div className="text-center font-mono text-[11px] text-slate-500 pt-1 flex items-center justify-center gap-2">
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-sm text-amber-400 font-bold">◄ ►</span>
                <span>Usá las flechas del teclado para cambiar de captura</span>
              </div>

            </div>

            {/* COLUMNA DERECHA: INFORMACIÓN BARRIO CERRADO */}
            <div className="lg:col-span-5 space-y-4 pt-1">
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed text-justify">
                Solución Fullstack para la administración integral de barrios cerrados. Automatiza la operativa en garitas de seguridad, el registro de propietarios/visitas y la auditoría de vehículos.
              </p>

              <div className="p-3 bg-slate-900/90 border-l-2 border-amber-500 rounded-r-sm font-mono text-xs text-slate-300 space-y-1">
                <strong className="text-amber-400 font-bold uppercase block text-[11px]">// Mi Contribución Técnica:</strong>
                <p className="text-[11px] leading-relaxed text-slate-400">
                  Lideré el diseño e implementación del **Frontend (UI/UX)**, asegurando la comunicación con las APIs del Backend, bases de datos relacionales y el control de versiones en **Git & GitHub**.
                </p>
              </div>

              <div className="grid sm:grid-cols-1 gap-2 font-mono text-[11px] text-slate-300 pt-1">
                <div className="flex items-start gap-2 bg-slate-950/40 p-2 border border-slate-800/80 rounded-sm">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Control de accesos por roles (Guardia, Administración, Propietarios).</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950/40 p-2 border border-slate-800/80 rounded-sm">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Alertas automáticas de seguros vehiculares vencidos.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950/40 p-2 border border-slate-800/80 rounded-sm">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Generación y descarga de reportes PDF auditados por fechas.</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest block mb-2 font-bold">// TECH STACK</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-slate-900 text-cyan-300 border border-slate-800 rounded-sm font-mono text-[10px]">C# / ASP.NET</span>
                  <span className="px-2 py-0.5 bg-slate-900 text-cyan-300 border border-slate-800 rounded-sm font-mono text-[10px]">Frontend UI / UX</span>
                  <span className="px-2 py-0.5 bg-slate-900 text-cyan-300 border border-slate-800 rounded-sm font-mono text-[10px]">SQL Server</span>
                  <span className="px-2 py-0.5 bg-slate-900 text-cyan-300 border border-slate-800 rounded-sm font-mono text-[10px]">Modelado UML / ER</span>
                  <span className="px-2 py-0.5 bg-slate-900 text-cyan-300 border border-slate-800 rounded-sm font-mono text-[10px]">Git & GitHub</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL CINEMA ZOOM 1: BARRIO CERRADO */}
      <AnimatePresence>
        {isBarrioModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsBarrioModalOpen(false)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] bg-[#090D16] border border-amber-500/40 rounded-md p-4 sm:p-6 shadow-[0_0_80px_rgba(245,158,11,0.25)] flex flex-col justify-between overflow-hidden cursor-default"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 font-mono text-xs">
                <span className="text-amber-400 font-bold flex items-center gap-2">
                  <ZoomIn size={16} /> VISTA AMPLIADA // {barrioScreenshots[barrioActiveImg].title}
                </span>
                <button 
                  onClick={() => setIsBarrioModalOpen(false)}
                  className="bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded-sm flex items-center gap-1 hover:bg-amber-400 transition-colors"
                >
                  <X size={16} /> CERRAR (ESC)
                </button>
              </div>

              <div className="relative flex-1 flex items-center justify-center overflow-hidden h-[65vh] sm:h-[75vh]">
                <img 
                  src={barrioScreenshots[barrioActiveImg].src} 
                  alt={barrioScreenshots[barrioActiveImg].title} 
                  className="w-full h-full object-contain select-none"
                />

                <button 
                  type="button"
                  onClick={prevBarrioImg} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 p-3 rounded-full border border-slate-700 transition-all shadow-2xl"
                >
                  <ChevronLeft size={24} />
                </button>

                <button 
                  type="button"
                  onClick={nextBarrioImg} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 p-3 rounded-full border border-slate-700 transition-all shadow-2xl"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-between items-center font-mono text-xs text-slate-400">
                <span>Captura {barrioActiveImg + 1} de {barrioScreenshots.length}</span>
                <span className="text-slate-500">◄ ► Usá las flechas del teclado</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL CINEMA ZOOM 2: ONDATAP */}
      <AnimatePresence>
        {isOndaModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOndaModalOpen(false)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] bg-[#090D16] border border-sky-500/40 rounded-md p-4 sm:p-6 shadow-[0_0_80px_rgba(56,189,248,0.25)] flex flex-col justify-between overflow-hidden cursor-default"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 font-mono text-xs">
                <span className="text-sky-400 font-bold flex items-center gap-2">
                  <ZoomIn size={16} /> VISTA AMPLIADA // OndaTap Official Platform
                </span>
                <button 
                  onClick={() => setIsOndaModalOpen(false)}
                  className="bg-sky-500 text-slate-950 font-bold px-3 py-1 rounded-sm flex items-center gap-1 hover:bg-sky-400 transition-colors"
                >
                  <X size={16} /> CERRAR (ESC)
                </button>
              </div>

              <div className="relative flex-1 flex items-center justify-center overflow-hidden h-[65vh] sm:h-[75vh]">
                <img 
                  src={ondaImgSrc} 
                  alt="OndaTap Platform Full" 
                  onError={handleOndaImgError}
                  className="w-full h-full object-contain select-none"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-between items-center font-mono text-xs text-slate-400">
                <span>Captura Oficial de OndaTap</span>
                <span className="text-slate-500">Presioná ESC o CERRAR para salir</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}