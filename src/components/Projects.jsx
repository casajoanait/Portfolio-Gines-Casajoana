"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Bot, Building2, Globe, ArrowUpRight, 
  Sparkles, Eye, Box, Code2
} from 'lucide-react';

import AutoAiSuiteDetail from './projects/AutoAiSuiteDetail';
import BarrioCerradoDetail from './projects/BarrioCerradoDetail';
import OndaTapDetail from './projects/OndaTapDetail';

// TARJETA HOLOGRÁFICA 3D CON IMAGEN REAL DE REFERENCIA
function Card3DProject({ project, onSelect }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 150 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 150 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = project.icon;

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      className="relative bg-[#080C16]/90 border border-slate-800 hover:border-sky-500/70 rounded-xl p-5 flex flex-col justify-between cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.25)] transition-all duration-300 backdrop-blur-xl perspective-1000 overflow-hidden"
    >
      {/* Luz holográfica reactiva al cursor */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(56,189,248,0.2), transparent 70%)`,
        }}
        className="absolute inset-0 pointer-events-none z-20 transition-opacity opacity-0 group-hover:opacity-100 duration-300"
      />

      <div>
        {/* MARCO CON IMAGEN REAL DE REFERENCIA */}
        <div 
          style={{ transform: "translateZ(35px)", transformStyle: "preserve-3d" }}
          className="relative w-full h-48 rounded-lg bg-slate-950 border border-slate-800 mb-5 overflow-hidden group-hover:border-sky-500/60 transition-colors shadow-inner"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />

          {/* Degradado inferior para integrar el contenido */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C16] via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity" />

          {/* Badge de referencia */}
          <div 
            style={{ transform: "translateZ(20px)" }}
            className="absolute top-3 left-3 bg-[#030712]/90 border border-slate-700/80 px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-200 flex items-center gap-1.5 shadow-lg backdrop-blur-md"
          >
            <Icon size={12} className={project.iconColor} />
            <span>{project.imageTag}</span>
          </div>

          {/* Overlay de Inspección Rápida en Hover */}
          <div 
            style={{ transform: "translateZ(25px)" }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]"
          >
            <span className="bg-sky-500 text-slate-950 px-3.5 py-1.5 rounded-md font-mono text-xs font-bold flex items-center gap-1.5 shadow-xl">
              <Eye size={14} /> Inspeccionar Proyecto
            </span>
          </div>
        </div>

        {/* Contenido Elevado en Eje Z */}
        <div style={{ transform: "translateZ(20px)" }} className="space-y-3">
          <div className="flex items-center justify-between">
            <span className={`px-2.5 py-0.5 border font-mono text-[10px] uppercase tracking-wider rounded-md flex items-center gap-1.5 font-bold ${project.badgeColor}`}>
              <Sparkles size={11} /> {project.category}
            </span>
            <ArrowUpRight size={18} className="text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-100 font-serif group-hover:text-sky-300 transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-slate-300 text-xs font-light leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Stack de Tecnologías y Botón */}
      <div style={{ transform: "translateZ(15px)" }} className="pt-5 space-y-3 border-t border-slate-800/80 mt-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-0.5 bg-slate-900/90 text-slate-300 border border-slate-800 rounded-md font-mono text-[10px]">
              {tech}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 bg-slate-900/60 text-sky-400 border border-slate-800 rounded-md font-mono text-[10px]">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div className="w-full py-2 bg-slate-900 group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:via-indigo-500 group-hover:to-violet-600 group-hover:text-white text-sky-300 border border-slate-800 group-hover:border-sky-400 text-center font-mono text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-300 shadow-md">
          Ver Detalles y Capturas
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsCatalog = [
    {
      id: "auto-ai-suite",
      title: "Suite Multicanal de IA & Automatización",
      subtitle: "Scripting, Web Scraping & Orchestration Engine",
      category: "Proyecto Personal // IA & Scripts",
      image: "/bg-developer.jpg",
      imageTag: "Automation & Engine Stack",
      badgeColor: "border-sky-500/50 text-sky-300 bg-sky-950/40",
      iconColor: "text-sky-400",
      icon: Bot,
      description: "Sistema autómata de postulación y raspado web con integración de LLMs (Gemini/OpenAI) para adaptación dinámica de cartas de presentación.",
      tags: ["Python", "Playwright", "n8n", "Gemini API", "OpenAI", "SMTP SSL", "Antigravity IDE"]
    },
    {
      id: "barrio-cerrado",
      title: "Sistema ERP Barrio Cerrado 'Las Acacias'",
      subtitle: "Full-Stack ERP System & Control de Accesos",
      category: "Proyecto Universitario // USAL",
      image: "/barrio-cerrado1.png",
      imageTag: "Garita & Control de Accesos",
      badgeColor: "border-amber-500/50 text-amber-400 bg-amber-950/40",
      iconColor: "text-amber-400",
      icon: Building2,
      description: "Sistema de gestión integral para barrios privados con arquitectura backend relacional, control de acceso por roles (RBAC) y auditoría vehícular.",
      tags: ["C#", "ASP.NET Core", "SQL Server", "Git/GitHub", "UML / ER"]
    },
    {
      id: "ondatap",
      title: "OndaTap — Digital Business Cards & NFC",
      subtitle: "Solución Comercial Full-Stack & NFC",
      category: "Desarrollo Freelance // EE.UU.",
      image: "/Screenshot 2026-10-05 173016.png",
      imageTag: "Plataforma Web Live (ondatap.com)",
      badgeColor: "border-violet-500/50 text-violet-300 bg-violet-950/40",
      iconColor: "text-violet-400",
      icon: Globe,
      description: "Plataforma comercial con lectura de hardware NFC/QR, generador automático de vCard (.vcf) y panel de analítica de interacción.",
      tags: ["Next.js", "React", "NFC / QR", "vCard API", "Tailwind CSS"]
    }
  ];

  return (
    <section id="proyectos" className="py-28 bg-[#0B1120] relative border-t border-slate-800/80 overflow-hidden">
      
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-sky-500/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 space-y-12">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-[0.25em] bg-sky-950/30 px-3.5 py-1.5 rounded-md border border-sky-500/30 mb-3">
              <Box size={14} className="text-sky-400 animate-pulse" /> Showcase Interactivo // Capturas & Blueprints
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-100 font-serif tracking-tight">
              Catálogo de Proyectos
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-md leading-relaxed">
            Cada tarjeta integra la imagen de referencia en vivo. Haz clic en cualquiera para desplegar la galería completa y los detalles técnicos.
          </p>
        </div>

        {/* Grilla 3D con Imágenes Reales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectsCatalog.map((project) => (
            <Card3DProject 
              key={project.id} 
              project={project} 
              onSelect={() => setSelectedProject(project.id)} 
            />
          ))}
        </div>

      </div>

      {/* Visor / Modal de Detalle */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#030712]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl my-auto"
            >
              {selectedProject === "auto-ai-suite" && (
                <AutoAiSuiteDetail onClose={() => setSelectedProject(null)} />
              )}
              {selectedProject === "barrio-cerrado" && (
                <BarrioCerradoDetail onClose={() => setSelectedProject(null)} />
              )}
              {selectedProject === "ondatap" && (
                <OndaTapDetail onClose={() => setSelectedProject(null)} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}