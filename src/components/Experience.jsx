"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Globe, ArrowUpRight, Award, CheckCircle2 
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experiencia" className="py-28 bg-[#030712] relative overflow-hidden border-t border-violet-900/30">
      
      {/* Luces de ambiente sutiles */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-violet-600/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-500/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-violet-900/40 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 border border-sky-500/30 bg-sky-950/30 text-sky-300 px-4 py-1.5 text-xs font-mono tracking-widest uppercase rounded-sm mb-3">
              <Briefcase size={14} className="text-sky-400" />
              Trayectoria Corporativa & Académica
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 font-serif tracking-tight">
              Experiencia & Formación
            </h2>
          </div>
          
          <p className="text-slate-400 text-xs font-mono max-w-sm leading-relaxed">
            Coordinación operativa en terreno, gestión de recursos e ingeniería en curso en instituciones de primer nivel.
          </p>
        </motion.div>

        <div className="space-y-12">
          
          {/* =========================================================
              01. EXPERIENCIA PROFESIONAL
             ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between border-b border-violet-900/50 pb-3">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                01. Experiencia Profesional
              </span>
              <span className="text-[10px] font-mono text-slate-500">PILAR, BUENOS AIRES</span>
            </div>

            {/* TARJETA DE EXPERIENCIA */}
            <div className="bg-[#080C16] border border-violet-900/60 hover:border-sky-500/50 transition-all duration-300 rounded-sm p-6 sm:p-8 shadow-2xl relative">
              <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                
                {/* COLUMNA IZQUIERDA: LOGO CONSTRUCTORA */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-4 border-b lg:border-b-0 lg:border-r border-slate-800/80 pb-6 lg:pb-0 lg:pr-8">
                  
                  <div className="w-full h-52 sm:h-56 bg-gradient-to-b from-[#0B1120] to-[#050A14] border border-violet-500/40 rounded-sm p-2 flex items-center justify-center relative overflow-hidden group shadow-[0_0_25px_rgba(124,58,237,0.15)] hover:border-sky-500/60 transition-all">
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-transparent to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img 
                      src="/logo-pablo.png" 
                      alt="Ingeniero Casajoana Construcciones" 
                      className="w-full h-full object-contain filter brightness-110 contrast-125 mix-blend-screen transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/logo-pablo.jpg";
                      }}
                    />
                  </div>

                  {/* BOTÓN WEB OFICIAL */}
                  <a 
                    href="https://ingenierocasajoanaconstrucciones.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full inline-flex items-center justify-between px-5 py-3 bg-[#030712] hover:bg-violet-950/50 text-sky-300 border border-violet-800/60 hover:border-sky-500/60 rounded-sm text-xs font-mono transition-all duration-300 shadow-md group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <Globe size={15} className="text-sky-400" />
                      Web Oficial
                    </span>
                    <ArrowUpRight size={14} className="text-sky-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* COLUMNA DERECHA: ROL Y PUNTOS TÁCTICOS */}
                <div className="lg:col-span-8 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-100 font-serif">Asistente Administrativo y de Obra</h3>
                        <p className="text-xs font-mono text-violet-300 mt-1">Ingeniero Casajoana Construcciones</p>
                      </div>

                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-1.5 rounded-sm">
                        2025 – Presente
                      </span>
                    </div>

                    <ul className="space-y-3.5 text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                      <li className="flex gap-3 items-start bg-slate-950/40 p-3 border border-slate-800/60 rounded-sm">
                        <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                        <span><strong>Gestión de Logística & Compras:</strong> Apoyo en la gestión integral de compras y control riguroso en la entrega de materiales en obra.</span>
                      </li>
                      <li className="flex gap-3 items-start bg-slate-950/40 p-3 border border-slate-800/60 rounded-sm">
                        <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                        <span><strong>Supervisión Operativa:</strong> Control de asistencia técnica y coordinación de roles del personal en terreno.</span>
                      </li>
                      <li className="flex gap-3 items-start bg-slate-950/40 p-3 border border-slate-800/60 rounded-sm">
                        <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                        <span><strong>Nexo Técnico:</strong> Visitas periódicas a obras para relevar necesidades inmediatas y canalizar consultas con el Ingeniero responsable.</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* =========================================================
              02. FORMACIÓN ACADÉMICA
             ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 pt-4"
          >
            <div className="flex items-center justify-between border-b border-violet-900/50 pb-3">
              <span className="text-xs font-mono text-violet-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
                02. Formación Académica & Certificaciones
              </span>
              <span className="text-[10px] font-mono text-slate-500">ACADEMIC RECORD</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              {/* TARJETA USAL */}
              <div className="bg-[#080C16] border border-violet-900/60 hover:border-sky-500/50 transition-all duration-300 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                    {/* MARCO AGRANDADO SIN ESPACIO MUERTO NI FONDO BLANCO */}
                    <div className="w-full sm:w-auto flex-1 h-36 sm:h-40 bg-gradient-to-b from-[#0B1120] to-[#050A14] p-2 rounded-sm border border-violet-500/40 flex items-center justify-center relative overflow-hidden group shadow-[0_0_20px_rgba(124,58,237,0.15)] hover:border-sky-500/60 transition-all">
                      <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-transparent to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <img 
                        src="/logo-usal.png" 
                        alt="Universidad del Salvador" 
                        className="w-full h-full object-contain filter brightness-110 contrast-125 mix-blend-screen transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/logo-usal.jpg";
                        }}
                      />
                    </div>

                    <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 border border-sky-800/60 px-3 py-1.5 rounded-sm self-start sm:self-center shrink-0">
                      2024 – Actualidad
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-100 font-serif">Ingeniería Informática</h3>
                    <p className="text-xs font-mono text-violet-300 mt-1">USAL — Campus Pilar</p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    Cursando <strong>3.er año</strong>. Formación técnica en Programación C, C#, ASP.NET, Bases de Datos Relacionales, Sistemas Operativos y Teleinformática.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Grado Universitario</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    En Cursada (3.er Año)
                  </span>
                </div>
              </div>

              {/* TARJETA UTN.BA */}
              <div className="bg-[#080C16] border border-violet-900/60 hover:border-violet-500/50 transition-all duration-300 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                    {/* MARCO AGRANDADO SIN ESPACIO MUERTO NI FONDO BLANCO */}
                    <div className="w-full sm:w-auto flex-1 h-36 sm:h-40 bg-gradient-to-b from-[#0B1120] to-[#050A14] p-2 rounded-sm border border-violet-500/40 flex items-center justify-center relative overflow-hidden group shadow-[0_0_20px_rgba(124,58,237,0.15)] hover:border-violet-500/60 transition-all">
                      <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-transparent to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <img 
                        src="/logo-utn.ba.png" 
                        alt="UTN.BA Centro de e-Learning" 
                        className="w-full h-full object-contain filter brightness-110 contrast-125 mix-blend-screen transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/logo-utn.ba.jpg";
                        }}
                      />
                    </div>

                    <span className="text-[10px] font-mono text-violet-300 bg-violet-950/60 border border-violet-800/60 px-3 py-1.5 rounded-sm self-start sm:self-center shrink-0">
                      2025 – 2026
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-100 font-serif">Diplomatura en Python</h3>
                    <p className="text-xs font-mono text-violet-300 mt-1">UTN.BA (Centro de e-Learning)</p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    Especialización técnica enfocada en programación estructurada, POO, estructuras de datos avanzadas, análisis de datos y automatización mediante scripting.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Diplomatura Técnica</span>
                  <span className="text-sky-400 font-bold flex items-center gap-1">
                    <Award size={14} className="text-sky-400" /> Certificación UTN
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
} 