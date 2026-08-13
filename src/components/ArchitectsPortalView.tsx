import React, { useState } from 'react';
import { Download, FileText, Box, ShieldCheck, CheckCircle2, Search, ArrowUpRight } from 'lucide-react';
import { ArchitectResource } from '../types';

interface ArchitectsPortalViewProps {
  resources: ArchitectResource[];
  onOpenStartProject: (initialMessage?: string) => void;
}

export const ArchitectsPortalView: React.FC<ArchitectsPortalViewProps> = ({
  resources,
  onOpenStartProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Catalogues', 'BIM / Revit', 'CAD DWG', 'IES Photometric'];

  const filtered = activeCategory === 'ALL'
    ? resources
    : resources.filter(r => r.category === activeCategory);

  return (
    <section className="py-24 bg-[#0B0F17] relative min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-[#C9A96A] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            <Box className="w-3.5 h-3.5" />
            <span>Architects & Interior Designers Portal</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#F8F6F2] tracking-tight mb-4">
            Technical Resources & BIM Library
          </h1>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Access parametric Revit families, 2D/3D DWG block sets, Dialux IES photometric distribution profiles, load calculations, and technical finish sample kits.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#C9A96A] text-[#0B0F17] font-semibold'
                  : 'bg-[#0F172A] text-gray-400 border border-gray-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filtered.map((res) => (
            <div
              key={res.id}
              className="p-6 rounded-lg bg-[#0F172A] border border-gray-800 hover:border-[#C9A96A]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-mono bg-[#1E293B] text-[#C9A96A] border border-[#C9A96A]/20">
                    {res.fileFormat} • {res.fileSize}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                    {res.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-light text-[#F8F6F2] mb-2">
                  {res.title}
                </h3>

                <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                  {res.description}
                </p>
              </div>

              <button
                onClick={() => alert(`Downloading ${res.title} (${res.fileFormat})`)}
                className="w-full py-2.5 border border-[#C9A96A]/40 text-[#C9A96A] hover:bg-[#C9A96A] hover:text-[#0B0F17] font-semibold text-xs uppercase tracking-wider rounded transition-all flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Package</span>
              </button>
            </div>
          ))}
        </div>

        {/* Finish Box Banner */}
        <div className="p-8 sm:p-10 rounded-xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-[#C9A96A]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-widest text-[#C9A96A] font-semibold block mb-1">
              For Licensed Architects & Design Studios
            </span>
            <h2 className="font-serif text-3xl font-light text-[#F8F6F2]">
              Order The Physical Architect Finish Box
            </h2>
            <p className="text-xs text-gray-300 font-light mt-2 leading-relaxed">
              Includes 12 mouth-blown glass chips (amber, smoked, iridescent, frosted), champagne brass patinas, titanium alloy swatches, and high-transmission optical crystal prisms.
            </p>
          </div>

          <button
            onClick={() => onOpenStartProject('Requesting complimentary Architect Physical Finish Box sample kit.')}
            className="px-8 py-4 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-widest rounded-sm shrink-0 flex items-center space-x-2 transition-all shadow-xl shadow-[#C9A96A]/20"
          >
            <span>Request Finish Box</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
