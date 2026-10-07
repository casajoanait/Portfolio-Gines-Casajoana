"use client";

import React, { useState } from 'react';
import { X, Globe, Smartphone, BarChart3, Zap } from 'lucide-react';

export default function OndaTapDetail({ onClose }) {
  const [imgSrc, setImgSrc] = useState("/ondatap.png");

  return (
    <div className="bg-[#090D16] border border-violet-900/60 rounded-sm p-4 sm:p-6 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
      <button 
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 p-1.5 rounded-sm z-20"
      >
        <X size={18} />
      </button>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 pr-10">
        <div>
          <span className="px-2.5 py-0.5 bg-emerald-950/70 text-emerald-400 border border-emerald-500/50 font-mono text-[10px] uppercase font-bold w-fit mb-2 block">
            PROYECTO FREELANCE // CLIENTE EE.UU.[cite: 1]
          </span>
          <h3 className="text-2xl font-bold text-slate-100 font-serif">
            OndaTap — Digital Business Cards & NFC[cite: 1]
          </h3>
        </div>

        <a 
          href="https://ondatap.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-xs font-mono text-white bg-gradient-to-r from-violet-600 to-sky-500 px-4 py-2 rounded-sm font-bold uppercase"
        >
          <Globe size={14} /> Visitar Sitio Web ↗[cite: 1]
        </a>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7">
          <div className="relative bg-slate-950 border border-slate-800 rounded-sm h-[280px] w-full flex items-center justify-center">
            <img 
              src={imgSrc} 
              alt="OndaTap Platform" 
              onError={() => setImgSrc("/ondatap1.png")}
              className="w-full h-full object-contain p-2 select-none"
            />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4 font-mono text-xs text-slate-300">
          <p className="text-slate-300 font-light leading-relaxed">
            Plataforma comercial de perfiles digitales dinámicos con tecnología NFC/QR, generador de vCard (.vcf) y panel de analítica de interacciones en tiempo real[cite: 1].
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {["Next.js", "React", "NFC Hardware", "vCard API", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="px-2 py-0.5 bg-slate-900 text-sky-300 border border-slate-800 rounded-sm text-[10px]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}