"use client";

import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  Download, ExternalLink, MessageCircle, 
  Terminal, Cpu, Code2
} from 'lucide-react';

export default function Hero() {
  // FÍSICAS DE SEGUIMIENTO CON MOUSE (0% IMPACTO CPU)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  // Transformaciones de inclinación 3D para la tarjeta de mando
  const rotateX = useTransform(dy, [-300, 300], [10, -10]);
  const rotateY = useTransform(dx, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  return (
    <section 
      id="perfil" 
      onMouseMove={handleMouseMove}
      className="min-h-screen pt-32 pb-20 bg-[#030712] relative overflow-hidden flex items-center border-b border-violet-900/30"
    >
      
      {/* CAPA DE AMBIENTACIÓN & HALOS REACTIVOS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-[#030712]/70 z-10"></div>
        <img 
          src="/bg-developer.jpg" 
          alt="Workspace Ginés Casajoana" 
          className="w-full h-full object-cover opacity-15 blur-[2px] mix-blend-luminosity scale-105"
        />
        
        {/* HALOS DE LUZ VIOLETA Y AZUL RAYO */}
        <motion.div 
          style={{ x: dx, y: dy }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/15 blur-[180px] rounded-full -z-10"
        />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-500/10 blur-[180px] rounded-full -z-10"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: PRESENTACIÓN PRINCIPAL */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            {/* BADGE ACADÉMICO USAL */}
            <div className="inline-flex items-center gap-2 border border-violet-500/40 bg-violet-950/40 text-sky-300 px-4 py-2 text-xs font-mono tracking-widest uppercase rounded-sm shadow-[0_0_15px_rgba(124,58,237,0.2)]">
              <Cpu size={14} className="text-sky-400 animate-pulse" />
              Ingeniería Informática // USAL (Campus Pilar)
            </div>

            {/* TITULAR DE IMPACTO */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-100 font-serif tracking-tight leading-[1.05]">
                Ginés Eloy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-violet-400 to-indigo-500">
                  Casajoana Crifasi.
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl font-mono text-sky-400 tracking-wider flex items-center gap-2">
                <Code2 size={18} className="text-violet-400" />
                Arquitectura de Software & Desarrollo Backend
              </h2>
            </div>

            {/* RESUMEN DE IMPACTO */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light border-l-2 border-violet-600 pl-6 text-justify bg-gradient-to-r from-violet-950/20 to-transparent py-4 pr-4 rounded-r-sm">
              Apasionado por los sistemas, la lógica de programación y el diseño relacional de bases de datos. Cuento con experiencia práctica en <strong>C#, ASP.NET, Python y SQL</strong>, además de metodologías colaborativas con <strong>Git/GitHub</strong>.
            </p>

            {/* BOTONES DE ACCIÓN (CTAs DIRECTOS) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              
              {/* DESCARGAR CV */}
              <a 
                href="/CV_Gines_Casajoana.pdf" 
                download="CV_Gines_Casajoana.pdf"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 text-white font-bold font-mono text-xs tracking-[0.2em] uppercase rounded-sm shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] hover:scale-[1.02] transition-all duration-300"
              >
                <Download size={16} /> Descargar CV
              </a>

              {/* LINKEDIN */}
              <a 
                href="https://linkedin.com/in/gines-eloy-casajoana-crifasi-271a79279" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#080C16] hover:bg-violet-950/40 text-slate-200 hover:text-sky-300 border border-violet-800/60 hover:border-sky-500/60 font-mono text-xs tracking-[0.18em] uppercase rounded-sm transition-all duration-300 shadow-md"
              >
                <ExternalLink size={15} className="text-sky-400" /> LinkedIn
              </a>

              {/* WHATSAPP */}
              <a 
                href="https://wa.me/5491127264796?text=Hola%20Gin%C3%A9s,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20una%20oportunidad..." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#080C16] hover:bg-emerald-950/40 text-slate-200 hover:text-emerald-400 border border-emerald-800/60 hover:border-emerald-500/60 font-mono text-xs tracking-[0.18em] uppercase rounded-sm transition-all duration-300 shadow-md"
              >
                <MessageCircle size={15} className="text-emerald-400" /> WhatsApp
              </a>

            </div>
          </motion.div>

          {/* COLUMNA DERECHA: FOTO ORIGINAL NÍTIDA + PANEL ACADÉMICO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="lg:col-span-5 hidden lg:block perspective-1000"
          >
            <div className="bg-[#080C16]/95 border border-violet-800/60 rounded-sm p-6 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative backdrop-blur-2xl">
              
              {/* LÍNEA SUPERIOR NEÓN */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-sky-400 to-emerald-500"></div>

              {/* FOTO CON SU TAMAÑO Y PROPORCIÓN ORIGINAL NÍTIDA */}
              <div className="flex justify-center items-center w-full">
                <div className="relative max-w-[280px] sm:max-w-[310px] w-full aspect-square rounded-sm overflow-hidden border border-violet-700/60 shadow-[0_0_30px_rgba(124,58,237,0.25)] bg-[#030712]">
                  <img 
                    src="/1773184957952.jpg" 
                    alt="Ginés Eloy Casajoana Crifasi" 
                    className="w-full h-full object-contain block" 
                    onError={(e) => {
                      e.currentTarget.src = "/perfil.jpg";
                    }}
                  />
                </div>
              </div>

              {/* BARRA SUPERIOR DE CONSOLA */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 font-mono text-xs">
                <span className="text-slate-400 flex items-center gap-2">
                  <Terminal size={14} className="text-sky-400" /> academic_record.sys
                </span>
                <span className="text-emerald-400 text-[10px] flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> ONLINE
                </span>
              </div>

              {/* DATOS CLAVE DEL BLUEPRINT */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Récord 1: USAL */}
                <div className="bg-[#030712] p-3.5 rounded-sm border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sky-400 font-bold">// CARRERA DE GRADO</span>
                    <span className="text-[10px] text-slate-500">2024 – PRESENT</span>
                  </div>
                  <p className="text-slate-100 font-serif text-sm font-bold">Ingeniería Informática</p>
                  <p className="text-violet-300 text-[11px]">USAL — Cursando 3.er Año</p>
                </div>

                {/* Récord 2: UTN.BA */}
                <div className="bg-[#030712] p-3.5 rounded-sm border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-violet-400 font-bold">// ESPECIALIZACIÓN</span>
                    <span className="text-[10px] text-slate-500">2025 – 2026</span>
                  </div>
                  <p className="text-slate-100 font-serif text-sm font-bold">Diplomatura en Python</p>
                  <p className="text-violet-300 text-[11px]">UTN.BA (Centro de e-Learning)</p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}