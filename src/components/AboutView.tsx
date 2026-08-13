import React from 'react';
import { Award, ShieldCheck, Flame, Globe, Compass, ArrowUpRight } from 'lucide-react';

interface AboutViewProps {
  onOpenStartProject: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenStartProject }) => {
  const timelineEvents = [
    { year: '2012', title: 'Studio Inception', desc: 'Established as a boutique glassblowing atelier specializing in bespoke mouth-blown crystal lighting objects.' },
    { year: '2016', title: 'International Manufacturing Expansion', desc: 'Expanded to a 120,000 sq. ft. continuous-furnace facility with dedicated CNC metal workshops.' },
    { year: '2019', title: 'Luxury Hospitality Milestone', desc: 'Commissioned by international luxury hotel brands across Dubai, London, Bali, and Singapore.' },
    { year: '2024', title: 'Monumental 100ft Atrium Milestone', desc: 'Engineered and installed the 100ft Minerva Towers atrium light sculpture comprising 3,500+ glass drops.' },
    { year: '2026', title: 'Global Architectural Studio', desc: 'Partnered with over 50+ international luxury brands and completed 5,000+ custom engineered light sculptures.' }
  ];

  return (
    <section className="py-24 bg-[#0B0F17] relative min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Headline */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center space-x-2 text-[#C9A96A] text-xs uppercase tracking-[0.25em] font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C9A96A]" />
            <span>The Sutra Philosophy</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#F8F6F2] tracking-tight leading-tight mb-8">
            We Don't Manufacture Fixtures.{' '}
            <span className="italic gold-text-gradient font-normal">
              We Create Architectural Landmarks.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-6">
            Sutra Luminis is a luxury bespoke decorative lighting and sculptural art studio. Positioned alongside global luxury pioneers like Lasvit, Preciosa, Bocci, and WonderGlass, Sutra combines high-temperature furnace glass discipline with aerospace engineering to illuminate iconic spaces worldwide.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-lg bg-[#0F172A] border border-gray-800 space-y-3">
            <Flame className="w-8 h-8 text-[#C9A96A]" />
            <h3 className="font-serif text-2xl font-light text-[#F8F6F2]">
              1,450°C Furnace Glassblowing
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Every droplet, wave, and prism is individually blown and hand-shaped by master glassmakers with decades of furnace discipline.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-[#0F172A] border border-gray-800 space-y-3">
            <Award className="w-8 h-8 text-[#C9A96A]" />
            <h3 className="font-serif text-2xl font-light text-[#F8F6F2]">
              Multi-Material Mastery
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Deep expertise spanning mouth-blown borosilicate glass, champagne brass patinas, optical lead crystal, hand-carved ceramics, and titanium load frames.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-[#0F172A] border border-gray-800 space-y-3">
            <Globe className="w-8 h-8 text-[#C9A96A]" />
            <h3 className="font-serif text-2xl font-light text-[#F8F6F2]">
              Global Project Experience
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Serving world-renowned architects, hotel developers, and private estate clients across North America, Europe, Middle East, and Asia.
            </p>
          </div>
        </div>

        {/* Brand Timeline */}
        <div className="mb-24">
          <h2 className="font-serif text-3xl font-light text-[#F8F6F2] mb-12 text-center">
            Our Journey Through Light
          </h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-[#C9A96A]/20">
            {timelineEvents.map((evt, idx) => (
              <div
                key={evt.year}
                className={`relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full sm:w-1/2 p-6 rounded-lg bg-[#0F172A] border border-gray-800 shadow-xl">
                  <span className="font-serif text-2xl text-[#C9A96A] font-light block mb-1">
                    {evt.year}
                  </span>
                  <h3 className="text-lg font-serif font-light text-[#F8F6F2] mb-1">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-xl bg-[#0F172A] border border-[#C9A96A]/30 text-center space-y-4">
          <h2 className="font-serif text-3xl font-light text-[#F8F6F2]">
            Have a space worth illuminating?
          </h2>
          <p className="text-xs text-gray-400 max-w-md mx-auto font-light">
            Collaborate directly with our master design team to bring your architectural vision to life.
          </p>

          <button
            onClick={onOpenStartProject}
            className="px-8 py-4 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-widest rounded-sm inline-flex items-center space-x-2 transition-all shadow-xl shadow-[#C9A96A]/10"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
