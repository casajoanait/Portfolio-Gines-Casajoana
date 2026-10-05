"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  Mail, ExternalLink, Copy, Check, MapPin, 
  MessageCircle, Terminal, FileText, Download, 
  Sparkles, Maximize2, X, FileCheck, ArrowUpRight 
} from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const email = "casajoanait@gmail.com";

  // FÍSICAS DE MOVIMIENTO MOUSE (CARD 3D EFFECT)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const rotateX = useTransform(dy, [-200, 200], [6, -6]);
  const rotateY = useTransform(dx, [-200, 200], [-6, 6]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="contacto" 
      onMouseMove={handleMouseMove}
      className="py-28 bg-[#030712] relative overflow-hidden border-t border-violet-900/40"
    >
      
      {/* Luces tácticas de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-sky-500/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 border border-sky-500/30 bg-sky-950/30 text-sky-300 px-4 py-1.5 text-xs font-mono tracking-widest uppercase rounded-sm mb-2 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Sparkles className="text-sky-400" size={14} /> Canal de Comunicación Directo & Documentación
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 font-serif tracking-tight">
            ¿Forjamos el próximo desafío técnico?
          </h2>
          
          <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
            Actualmente radicado en Pilar, Buenos Aires. Abierto a oportunidades como pasante o desarrollador junior para aportar valor en ingeniería y desarrollo de software.
          </p>
        </motion.div>

        {/* GRILLA PRINCIPAL DE TRES BLOQUES DE IMPACTO */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* BLOQUE 1: VISOR INTERNO DE CV (CON FORMATO MATCH PROYECTO) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-[#080C16] border border-violet-800/60 hover:border-sky-500/60 transition-all duration-300 rounded-sm p-6 space-y-5 shadow-2xl flex flex-col justify-between relative group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-widest flex items-center gap-2">
                  <FileText className="text-sky-400" size={15} /> Documentación de Perfil
                </span>
                
                {/* BOTÓN MAXIMIZAR */}
                <button 
                  onClick={() => setCvModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/40 text-amber-400 hover:bg-amber-500/20 text-[10px] font-mono rounded-xs transition-colors"
                >
                  <Maximize2 size={12} /> Maximizar CV
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-100 font-serif">Curriculum Vitae Oficial</h3>
                <p className="text-xs font-mono text-violet-300 mt-0.5">Ginés Eloy Casajoana Crifasi // 2026</p>
              </div>

              {/* MUESTRA INTERNA DE INSPECCIÓN */}
              <div 
                onClick={() => setCvModalOpen(true)}
                className="bg-[#030712] border border-slate-800 hover:border-sky-500/50 rounded-sm p-4 space-y-3 cursor-pointer group/card transition-all relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 text-[10px] font-mono text-sky-400 bg-sky-950/60 border border-sky-800/60 px-2 py-0.5 rounded-xs">
                  INSPECT // LIVE
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-violet-950/50 border border-violet-800/60 text-sky-400 rounded-xs">
                    <FileCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-100 font-mono">CV_Gines_Casajoana.pdf</p>
                    <p className="text-[10px] font-mono text-slate-500">Documento Oficial Auditado</p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1 border-t border-slate-900 font-mono text-[11px] text-slate-400">
                  <p className="text-slate-300 font-bold">• 3.er Año Ing. Informática (USAL)</p>
                  <p className="text-slate-300 font-bold">• Diplomatura Python (UTN.BA)</p>
                  <p className="text-slate-400 text-[10px]">• C#, ASP.NET, SQL Relacional, Git & GitHub</p>
                </div>

                <div className="pt-2 text-[10px] font-mono text-sky-400 flex items-center justify-between group-hover/card:text-amber-400 transition-colors">
                  <span>Haz clic para abrir visor de pantalla completa</span>
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>

            {/* BOTÓN DESCARGA DIRECTA */}
            <div className="pt-2">
              <a 
                href="/CV_Gines_Casajoana.pdf" 
                download="CV_Gines_Casajoana.pdf"
                className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 text-white font-bold font-mono text-xs tracking-[0.15em] uppercase rounded-sm shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-300"
              >
                <Download size={15} /> Descargar Archivo PDF
              </a>
            </div>
          </motion.div>

          {/* BLOQUE 2: TERMINAL DE ESTADO CON FÍSICAS 3D (3 COLUMNAS) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="lg:col-span-3 bg-[#080C16] border border-violet-800/60 rounded-sm p-6 space-y-5 shadow-2xl flex flex-col justify-between relative backdrop-blur-2xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 text-slate-400 font-mono text-xs">
                <span className="flex items-center gap-2">
                  <Terminal className="text-sky-400" size={14} /> live_status.config
                </span>
                <span className="text-emerald-400 text-[10px] flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> ONLINE
                </span>
              </div>

              <div className="space-y-3.5 font-mono text-xs">
                <div>
                  <span className="text-slate-500 block mb-1 uppercase tracking-wider text-[10px]">// UBICACIÓN</span>
                  <span className="text-slate-200 flex items-center gap-2 font-bold">
                    <MapPin className="text-sky-400" size={14} /> Pilar, Bs. As.
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 block mb-1 uppercase tracking-wider text-[10px]">// DISPONIBILIDAD</span>
                  <span className="text-sky-300 font-bold bg-sky-950/50 border border-sky-800/60 px-2 py-1 rounded-sm inline-block">
                    Pasantías / Jr Dev
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 block mb-1 uppercase tracking-wider text-[10px]">// MODALIDAD</span>
                  <span className="text-slate-300 text-[11px] block leading-relaxed">
                    Presencial / Híbrido / Remoto
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-500">Respuesta:</span>
              <span className="text-amber-400 font-bold">&lt; 2 Horas</span>
            </div>
          </motion.div>

          {/* BLOQUE 3: CANALES DE CONTACTO DIRECTO (4 COLUMNAS) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 space-y-4 flex flex-col justify-between"
          >
            {/* BOTÓN 1: MAIL CON BOTÓN DE COPIADO */}
            <div className="relative group space-y-2">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                // CORREO ELECTRÓNICO OFICIAL
              </label>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <a 
                  href={`mailto:${email}`}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold px-4 py-3.5 rounded-sm flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all hover:scale-[1.01]"
                >
                  <Mail size={16} /> {email}
                </a>

                <button 
                  onClick={handleCopyEmail}
                  className="bg-[#080C16] hover:bg-violet-950/40 border border-violet-800/60 hover:border-sky-500/60 text-slate-200 px-4 py-3.5 rounded-sm flex items-center justify-center gap-2 text-xs font-mono transition-colors shrink-0"
                  title="Copiar email"
                >
                  {copied ? <Check className="text-emerald-400" size={16} /> : <Copy size={16} />}
                  <span>{copied ? "COPIADO" : "COPIAR"}</span>
                </button>
              </div>

              {/* Toast confirmación */}
              <AnimatePresence>
                {copied && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute -top-8 right-0 bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1"
                  >
                    <Check size={12} /> Email copiado al portapapeles
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* BOTÓN 2: WHATSAPP DIRECTO */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                // MENSAJERÍA DIRECTA
              </label>
              <a 
                href="https://wa.me/5491127264796?text=Hola%20Gin%C3%A9s,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-[#080C16] border border-violet-900/60 hover:border-emerald-500/60 text-slate-200 hover:text-emerald-400 font-bold p-4 rounded-sm flex items-center justify-between text-xs font-mono uppercase tracking-wider transition-all group shadow-md"
              >
                <span className="flex items-center gap-2.5">
                  <MessageCircle className="text-emerald-400" size={16} /> WhatsApp Directo
                </span>
                <span className="text-[11px] text-slate-500 group-hover:text-emerald-400">+54 9 11 2726 4796 ↗</span>
              </a>
            </div>

            {/* BOTÓN 3: LINKEDIN */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                // RED PROFESIONAL
              </label>
              <a 
                href="https://linkedin.com/in/gines-eloy-casajoana-crifasi-271a79279" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-[#080C16] border border-violet-900/60 hover:border-sky-500/60 text-slate-200 hover:text-sky-300 font-bold p-4 rounded-sm flex items-center justify-between text-xs font-mono uppercase tracking-wider transition-all group shadow-md"
              >
                <span className="flex items-center gap-2.5">
                  <ExternalLink className="text-sky-400" size={16} /> Perfil LinkedIn
                </span>
                <span className="text-[11px] text-slate-500 group-hover:text-sky-300">/in/gines-eloy-casajoana ↗</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>

      {/* MODAL HOLOGRÁFICO EN PANTALLA COMPLETA */}
      <AnimatePresence>
        {cvModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#030712]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setCvModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#080C16] border border-sky-500/50 rounded-sm w-full max-w-5xl h-[85vh] flex flex-col shadow-[0_0_50px_rgba(56,189,248,0.2)] overflow-hidden"
            >
              {/* ENCABEZADO DEL MODAL */}
              <div className="p-4 bg-[#030712] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest flex items-center gap-2">
                    <FileText size={16} /> Visor Holográfico de Documento // CV_Gines_Casajoana.pdf
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a 
                    href="/CV_Gines_Casajoana.pdf" 
                    download="CV_Gines_Casajoana.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold rounded-xs transition-colors"
                  >
                    <Download size={13} /> Descargar PDF
                  </a>

                  <button 
                    onClick={() => setCvModalOpen(false)}
                    className="p-1 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xs transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* CONTENIDO DEL PDF EMBEBIDO */}
              <div className="flex-1 bg-slate-950 p-2 relative overflow-hidden">
                <iframe 
                  src="/CV_Gines_Casajoana.pdf" 
                  className="w-full h-full rounded-xs border border-slate-800"
                  title="Curriculum Vitae Ginés Casajoana"
                />
              </div>

              {/* PIE DEL MODAL */}
              <div className="p-3 bg-[#030712] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Pulsa ESC o clic afuera para cerrar el visor</span>
                <span className="text-sky-400 font-bold">GINÉS CASAJOANA // INGENIERÍA INFORMÁTICA</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}