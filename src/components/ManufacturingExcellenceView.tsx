import React from 'react';
import { Flame, ShieldCheck, RefreshCw, Award, ArrowUpRight, Cpu, Hammer, Layers, Sparkles } from 'lucide-react';

interface ManufacturingExcellenceViewProps {
  onOpenStartProject: (initialMessage?: string) => void;
}

export const ManufacturingExcellenceView: React.FC<ManufacturingExcellenceViewProps> = ({
  onOpenStartProject,
}) => {
  const steps = [
    {
      num: '01',
      title: 'Proprietary Glass-Sand Recipe',
      desc: 'SUN LUMINOUS prepares its own custom mixture of high-purity glass-sand that melts at 1,450 °C (2,642 °F), producing crystal clear glass with zero structural impurities.'
    },
    {
      num: '02',
      title: '1,450°C Furnace Glassblowing',
      desc: 'Master glassmakers with generational skill, supported by 100+ team members, blow molten crystal into demanding custom architectural forms.'
    },
    {
      num: '03',
      title: 'Bespoke Underlay Color Gradient',
      desc: 'A unique proprietary underlay color process enables SUN LUMINOUS to create organic gradient tones that add distinct character and warmth to every single light.'
    },
    {
      num: '04',
      title: 'Heavy Metal Casting Studio',
      desc: 'In-house metal foundry and CNC workshops fabricate load-bearing architectural brass, aviation-grade titanium anchors, and laser-textured frames.'
    },
    {
      num: '05',
      title: '100% Closed-Loop Remelting',
      desc: 'Only flawless pieces make it to clients; all remainder glass is re-melted and reused for new runs, creating a sustainable, zero-waste transformation cycle.'
    },
    {
      num: '06',
      title: 'Pre-Assembly & DALI 72-Hr Burn-In',
      desc: 'Full 1:1 trial assembly in our staging halls with 72-hour continuous electrical burn-in, seismic vibration testing, and calibrated CCT matching.'
    }
  ];

  return (
    <section className="py-24 bg-[#0B0F17] relative min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C9A96A] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Our Blowing Centre & Foundry</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#F8F6F2] tracking-tight mb-4">
            Built for Scale — Across Glass & Metal
          </h1>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            With India’s largest bespoke glass ecosystem and a heavy metal casting studio, SUN LUMINOUS delivers the scale, complexity, and custom value engineering that global luxury hotels and landmark estates require.
          </p>
        </div>

        {/* Hero Visual Facility Showcase */}
        <div className="relative h-96 sm:h-[480px] rounded-xl overflow-hidden border border-[#C9A96A]/30 mb-20 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1600&auto=format&fit=crop"
            alt="Sutra Glass Blowing Centre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/40 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C9A96A] font-medium block">
                Furnace Hub • 1,450°C (2,642°F) Continuous Melt
              </span>
              <h2 className="font-serif text-3xl font-light text-[#F8F6F2] mt-1">
                India’s Largest Bespoke Glass Ecosystem
              </h2>
            </div>

            <div className="flex items-center space-x-4 bg-[#0B0F17]/85 backdrop-blur-md p-4 rounded border border-[#C9A96A]/20">
              <RefreshCw className="w-6 h-6 text-[#C9A96A] shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-white block">100% Remelting Circularity</span>
                <span className="text-gray-400 text-[11px]">Zero-waste continuous glass transformation</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Indian Setup Advantages from PDF 2 Page 8 */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#0F172A] border border-[#C9A96A]/30 mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#C9A96A] font-semibold">
              The SUN LUMINOUS Advantage
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mt-1">
              European Quality Standards at Indian Manufacturing Rates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-lg bg-[#1E293B]/60 border border-gray-800">
              <Sparkles className="w-5 h-5 text-[#C9A96A] mb-3" />
              <h3 className="text-sm font-semibold text-white mb-1">Single-Piece Customization</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Customization for single installations is standard. In-house design collaboration from the initial concept sketch.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#1E293B]/60 border border-gray-800">
              <Layers className="w-5 h-5 text-[#C9A96A] mb-3" />
              <h3 className="text-sm font-semibold text-white mb-1">Negligible R&D Time & Cost</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Total project costs are easily adapted to client budgets through intelligent in-house value engineering.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#1E293B]/60 border border-gray-800">
              <Award className="w-5 h-5 text-[#C9A96A] mb-3" />
              <h3 className="text-sm font-semibold text-white mb-1">Global Benchmark Quality</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Uncompromising European optical and metallurgical standards delivered with dependable Indian agility.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#1E293B]/60 border border-gray-800">
              <ShieldCheck className="w-5 h-5 text-[#C9A96A] mb-3" />
              <h3 className="text-sm font-semibold text-white mb-1">Dedicated Post-Sales Support</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Comprehensive maintenance documentation, spare crystal buffers, and on-site engineering assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Process Timeline Grid */}
        <div className="mb-20">
          <h2 className="font-serif text-3xl font-light text-[#F8F6F2] mb-10 text-center">
            The 6-Stage Manufacturing Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.num}
                className="p-6 rounded-lg bg-[#0F172A] border border-gray-800 hover:border-[#C9A96A]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-serif text-[#C9A96A] font-light block mb-2">
                    {s.num}
                  </span>
                  <h3 className="font-serif text-xl font-light text-[#F8F6F2] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-xl bg-[#0F172A] border border-gray-800">
          <h2 className="font-serif text-3xl font-light text-white mb-3">
            Schedule a Private Blowing Centre Tour
          </h2>
          <p className="text-xs text-gray-400 max-w-lg mx-auto mb-6">
            We welcome architects, developers, and interior designers to witness the 1,450°C furnace craftsmanship in person.
          </p>
          <button
            onClick={() => onOpenStartProject('Inquiring about scheduling a private tour of the SUN LUMINOUS Glass Blowing Centre & Metal Foundry.')}
            className="px-8 py-3.5 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-bold text-xs uppercase tracking-widest rounded transition-all shadow-lg shadow-[#C9A96A]/20"
          >
            Schedule Atelier Visit
          </button>
        </div>
      </div>
    </section>
  );
};
