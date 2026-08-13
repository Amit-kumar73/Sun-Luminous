import React from 'react';
import { ArrowUpRight, Sparkles, Compass, Flame, ShieldCheck, Award } from 'lucide-react';

interface HeroLandingProps {
  onExploreProjects: () => void;
  onOpenConfigurator: () => void;
  onOpenStartProject: () => void;
  onOpenAiAssistant: () => void;
}

export const HeroLanding: React.FC<HeroLandingProps> = ({
  onExploreProjects,
  onOpenConfigurator,
  onOpenStartProject,
  onOpenAiAssistant,
}) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 pb-16 overflow-hidden bg-[#0F172A] text-[#F8F6F2]">
      {/* Background Visual Layer & Radial Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[100%] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #C9A96A 0%, transparent 70%)', filter: 'blur(70px)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[80%] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #1A253D 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* Main Hero Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col lg:flex-row items-center gap-12 my-auto py-8">
        {/* Left Column: Typography & Intent */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[#C9A96A]" />
            <span className="text-[#C9A96A] text-[12px] uppercase tracking-[0.3em] font-medium">
              Bespoke Lighting Studio
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 font-serif text-[#F8F6F2] font-light">
            Light, Designed <br />
            Beyond <br />
            <span className="italic text-[#C9A96A] font-normal">Illumination.</span>
          </h1>

          <p className="text-base sm:text-lg opacity-80 mb-10 leading-relaxed max-w-lg font-light font-sans text-[#F8F6F2]">
            Sculptural installations and crafted spaces for extraordinary architecture. We build experiences through the alchemy of glass, metal, and light.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={onExploreProjects}
              className="bg-[#C9A96A] text-[#0F172A] px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] cursor-pointer hover:bg-[#D4AF37] transition-all shadow-lg shadow-[#C9A96A]/20 flex items-center space-x-2 group"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenConfigurator}
              className="border border-[#F8F6F2]/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] cursor-pointer hover:border-[#F8F6F2] hover:bg-[#F8F6F2]/5 transition-all text-[#F8F6F2] flex items-center space-x-2"
            >
              <Compass className="w-4 h-4 text-[#C9A96A]" />
              <span>Studio Configurator</span>
            </button>

            <button
              onClick={onOpenAiAssistant}
              className="border border-[#C9A96A]/40 bg-[#1A253D]/60 hover:bg-[#C9A96A]/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] cursor-pointer transition-all text-[#C9A96A] hover:text-[#F8F6F2] flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Consultant</span>
            </button>
          </div>
        </div>

        {/* Right Column: Featured Installation Hero Visual Frame */}
        <div className="w-full lg:w-1/2 relative min-h-[420px] lg:min-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1A253D] to-[#0F172A] rounded-sm shadow-2xl overflow-hidden border border-[#F8F6F2]/10 group">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1200&auto=format&fit=crop"
              alt="Minerva Towers Bespoke Lighting Atrium Installation"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />

            {/* Geometric Ornamental Lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-96 border-[0.5px] border-[#C9A96A]/30 rotate-12 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-80 border-[0.5px] border-[#C9A96A]/50 -rotate-12" />
            </div>

            {/* Soft dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />

            {/* Installation Metadata Card */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-xs">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96A] mb-2 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A96A] rounded-full animate-ping" />
                Featured Installation
              </div>
              <div className="text-2xl sm:text-3xl font-serif text-[#F8F6F2] mb-2">
                Minerva Towers, Mumbai
              </div>
              <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest text-[#F8F6F2]/70 font-sans">
                <span>3,500 Mouth-Blown Elements</span>
                <span className="w-1 h-1 bg-[#C9A96A] rounded-full" />
                <span>100ft Atrium Drop</span>
                <span className="w-1 h-1 bg-[#C9A96A] rounded-full" />
                <span>2700K Warm Phosphor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-sm bg-[#1A253D]/60 border border-[#F8F6F2]/10 backdrop-blur-md">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#C9A96A] mb-1 font-medium">Global Reach</span>
            <span className="text-lg md:text-xl font-serif text-[#F8F6F2]">50+ International Brands</span>
            <span className="text-[11px] text-[#F8F6F2]/60 mt-0.5">Hotels, resorts & luxury estates</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#C9A96A] mb-1 font-medium">Craftsmanship</span>
            <span className="text-lg md:text-xl font-serif text-[#F8F6F2]">1,450°C Glass Fusing</span>
            <span className="text-[11px] text-[#F8F6F2]/60 mt-0.5">Mouth-blown furnace techniques</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#C9A96A] mb-1 font-medium">Portfolio</span>
            <span className="text-lg md:text-xl font-serif text-[#F8F6F2]">5,000+ Custom Designs</span>
            <span className="text-[11px] text-[#F8F6F2]/60 mt-0.5">Precision structural engineering</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#C9A96A] mb-1 font-medium">Artisan Team</span>
            <span className="text-lg md:text-xl font-serif text-[#F8F6F2]">100+ Master Glassmakers</span>
            <span className="text-[11px] text-[#F8F6F2]/60 mt-0.5">Custom alloys & optical purity</span>
          </div>
        </div>
      </div>
    </section>
  );
};

