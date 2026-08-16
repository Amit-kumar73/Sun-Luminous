import React from 'react';
import { ArrowUpRight, Sparkles, Compass, Flame, ShieldCheck, Award } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

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
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between pt-28 pb-16 overflow-hidden bg-[#FAF8F5] text-[#1C1917]">
      {/* Background Visual Layer & Warm Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[55%] h-[80%] rounded-full opacity-35" style={{ background: 'radial-gradient(circle, #EADBBE 0%, transparent 70%)', filter: 'blur(70px)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[45%] h-[60%] rounded-full opacity-25" style={{ background: 'radial-gradient(circle, #F3EBDD 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* Main Hero Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col lg:flex-row items-center gap-12 my-auto py-8">
        {/* Left Column: Typography & Intent */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3.5">
            <div className="h-[1.5px] w-10 bg-[#9E7B35]" />
            <span className="text-[#9E7B35] text-[11px] uppercase tracking-[0.25em] font-semibold">
              {language === 'hi' ? 'अनुकूलित वास्तुशिल्प लाइटिंग' : 'Bespoke Architectural Lighting'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-6 font-serif text-[#1C1917] font-light tracking-tight">
            {language === 'hi' ? (
              <>
                प्रकाश, जो मात्र रोशनी नहीं, <br />
                <span className="italic text-[#9E7B35] font-normal">वास्तुकला की आत्मा है।</span>
              </>
            ) : (
              <>
                Light, Designed <br />
                Beyond <br />
                <span className="italic text-[#9E7B35] font-normal">Illumination.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#57534E] mb-8 leading-relaxed max-w-xl font-light font-sans">
            {t('brand.heroSub', 'Mouth-blown 1,450°C furnace crystal glass, precision architectural metal engineering, and custom monumental installations for the world\'s most distinguished spaces.')}
          </p>

          <div className="flex flex-wrap gap-3.5 items-center">
            <button
              onClick={onExploreProjects}
              className="bg-[#1C1917] text-[#FAF8F5] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] cursor-pointer hover:bg-[#9E7B35] transition-all shadow-md flex items-center space-x-2 rounded-xs group"
            >
              <span>{t('btn.exploreProjects', 'Explore Projects')}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenConfigurator}
              className="border border-[#DCD5C8] bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] cursor-pointer hover:border-[#9E7B35] hover:text-[#9E7B35] transition-all text-[#1C1917] flex items-center space-x-2 rounded-xs shadow-xs"
            >
              <Compass className="w-4 h-4 text-[#9E7B35]" />
              <span>{t('btn.openConfigurator', 'Studio Configurator')}</span>
            </button>

            <button
              onClick={onOpenAiAssistant}
              className="border border-[#B38E46]/40 bg-[#FAF6EE] hover:bg-[#B38E46] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] cursor-pointer transition-all text-[#8C6D2D] hover:text-white flex items-center space-x-2 rounded-xs shadow-xs"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('nav.aiConsultant', 'AI Consultant')}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Featured Installation Hero Visual Frame */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[480px]">
          <div className="absolute inset-0 bg-[#F5F2EB] rounded-lg shadow-xl overflow-hidden border border-[#E7E2D8] group">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1200&auto=format&fit=crop"
              alt="Minerva Towers Bespoke Lighting Atrium Installation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />

            {/* Geometric Ornamental Lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-96 border-[0.5px] border-[#9E7B35]/40 rotate-12 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-80 border-[0.5px] border-[#9E7B35]/60 -rotate-12" />
            </div>

            {/* Soft subtle gradient for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

            {/* Installation Metadata Card */}
            <div className="absolute bottom-0 left-0 w-full p-7 backdrop-blur-xs">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#EADBBE] mb-1.5 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A96A] rounded-full animate-pulse" />
                {language === 'hi' ? 'प्रमुख इंस्टॉलेशन' : 'Featured Installation'}
              </div>
              <div className="text-2xl sm:text-3xl font-serif text-[#FAF8F5] mb-2 font-light">
                Minerva Towers, Mumbai
              </div>
              <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-widest text-[#FAF8F5]/85 font-sans">
                <span>3,500 {language === 'hi' ? 'माउथ-ब्लोन तत्व' : 'Mouth-Blown Elements'}</span>
                <span className="w-1 h-1 bg-[#C9A96A] rounded-full" />
                <span>100ft {language === 'hi' ? 'एट्रियम ड्रॉप' : 'Atrium Drop'}</span>
                <span className="w-1 h-1 bg-[#C9A96A] rounded-full" />
                <span>2700K Warm CCT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-4 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-lg bg-white border border-[#E7E2D8] shadow-sm">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#9E7B35] mb-1 font-semibold">
              {language === 'hi' ? 'ग्लोबल रीच' : 'Global Reach'}
            </span>
            <span className="text-lg md:text-xl font-serif text-[#1C1917] font-medium">50+ {language === 'hi' ? 'वैश्विक ब्रांड्स' : 'Luxury Brands'}</span>
            <span className="text-[11px] text-[#78716C] mt-0.5">Hotels, palaces & landmark estates</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#9E7B35] mb-1 font-semibold">
              {language === 'hi' ? 'भट्टी शिल्प' : 'Craftsmanship'}
            </span>
            <span className="text-lg md:text-xl font-serif text-[#1C1917] font-medium">1,450°C Glass Fusing</span>
            <span className="text-[11px] text-[#78716C] mt-0.5">Mouth-blown furnace discipline</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#9E7B35] mb-1 font-semibold">
              {language === 'hi' ? 'पोर्टफोलियो' : 'Portfolio'}
            </span>
            <span className="text-lg md:text-xl font-serif text-[#1C1917] font-medium">5,000+ Custom Works</span>
            <span className="text-[11px] text-[#78716C] mt-0.5">Precision structural engineering</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#9E7B35] mb-1 font-semibold">
              {language === 'hi' ? 'कारीगर टीम' : 'Artisan Team'}
            </span>
            <span className="text-lg md:text-xl font-serif text-[#1C1917] font-medium">100+ Master Guild</span>
            <span className="text-[11px] text-[#78716C] mt-0.5">In-house foundry & glass studio</span>
          </div>
        </div>
      </div>
    </section>
  );
};


