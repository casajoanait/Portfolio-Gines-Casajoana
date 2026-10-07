"use client";

import React, { useEffect } from 'react';
import { 
  X, Bot, CheckCircle2, Zap, Mail, 
  Workflow, Code, Sparkles
} from 'lucide-react';

export default function AutoAiSuiteDetail({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="bg-[#090D16] border border-sky-500/40 rounded-xl p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
      
      {/* Botón de cierre (ESC) */}
      <button 
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 p-2 rounded-lg transition-colors z-20 flex items-center gap-1 font-mono text-xs"
      >
        <span className="text-[10px] text-slate-500">ESC</span>
        <X size={16} />
      </button>

      {/* Encabezado Principal */}
      <div className="border-b border-slate-800 pb-5 pr-12 space-y-2">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="px-3 py-1 bg-sky-950/80 text-sky-300 border border-sky-500/40 font-mono text-xs rounded-md font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Bot size={14} className="text-sky-400" /> PROYECTO PERSONAL // IA & AUTOMATIZACIÓN
          </span>
          <span className="px-2.5 py-1 bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 font-mono text-xs rounded-md font-bold flex items-center gap-1">
            <CheckCircle2 size={13} /> 100% Autónomo
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 font-serif">
          Suite de Automatización & Postulación con IA
        </h2>
        <p className="text-slate-300 text-sm font-light leading-relaxed">
          Sistema inteligente de automatización que rastrea ofertas laborales, adapta dinámicamente las cartas de presentación con Inteligencia Artificial según los requisitos del puesto y gestiona las postulaciones notificando por correo electrónico.
        </p>
      </div>

      {/* Beneficios Clave */}
      <div className="grid sm:grid-cols-3 gap-3">
        <div className="bg-[#030712] border border-slate-800/80 p-4 rounded-lg space-y-1">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase font-mono">
            <Zap size={15} /> Búsqueda Automática
          </div>
          <p className="text-slate-300 text-xs font-light">
            Escanea portales de empleo mediante scripts autónomos sin requerir intervención manual constante.
          </p>
        </div>

        <div className="bg-[#030712] border border-slate-800/80 p-4 rounded-lg space-y-1">
          <div className="flex items-center gap-2 text-violet-400 font-bold text-xs uppercase font-mono">
            <Sparkles size={15} /> Redacción con IA
          </div>
          <p className="text-slate-300 text-xs font-light">
            Genera presentaciones personalizadas con LLMs (Gemini / OpenAI) alineadas a cada perfil.
          </p>
        </div>

        <div className="bg-[#030712] border border-slate-800/80 p-4 rounded-lg space-y-1">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
            <Mail size={15} /> Alertas SSL
          </div>
          <p className="text-slate-300 text-xs font-light">
            Notifica al instante por correo cifrado (SSL) y genera reportes diarios consolidados.
          </p>
        </div>
      </div>

      {/* Explicación de Funcionamiento Paso a Paso */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
          // ¿Cómo funciona el proceso?
        </h3>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-slate-100 font-bold text-sm font-serif">
              <span className="w-6 h-6 rounded-full bg-sky-950 text-sky-400 border border-sky-800 font-mono text-xs flex items-center justify-center">1</span>
              Extracción de Datos (Scraping)
            </div>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              Mediante scripts en <strong>Python</strong> y <strong>Playwright</strong>, el autómata navega por sitios de búsqueda laboral y extrae los detalles clave de las ofertas.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-slate-100 font-bold text-sm font-serif">
              <span className="w-6 h-6 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800 font-mono text-xs flex items-center justify-center">2</span>
              Orquestación del Flujo
            </div>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              La herramienta <strong>n8n</strong> organiza los datos capturados, filtra ofertas duplicadas y coordina la ejecución de las tareas.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-slate-100 font-bold text-sm font-serif">
              <span className="w-6 h-6 rounded-full bg-violet-950 text-violet-400 border border-violet-800 font-mono text-xs flex items-center justify-center">3</span>
              Adaptación Contextual con IA
            </div>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              Se conecta con las APIs de <strong>Gemini y OpenAI</strong> para redactar la propuesta enfocada en los requisitos específicos exigidos en la vacante.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-slate-100 font-bold text-sm font-serif">
              <span className="w-6 h-6 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono text-xs flex items-center justify-center">4</span>
              Reporte & Notificaciones
            </div>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              Informa por correo electrónico cifrado (SMTP SSL) y registra la actividad diaria en un reporte consolidado.
            </p>
          </div>
        </div>
      </div>

      {/* Tecnologías Utilizadas */}
      <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
            // Tecnologías Utilizadas
          </span>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
            {["Python", "Playwright", "n8n", "Gemini API", "OpenAI API", "SMTP SSL", "Git"].map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-slate-900 text-sky-300 border border-slate-800 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <button 
          type="button"
          onClick={onClose}
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs rounded-md transition-colors font-bold shrink-0 self-end sm:self-auto"
        >
          Cerrar Visor
        </button>
      </div>

    </div>
  );
}