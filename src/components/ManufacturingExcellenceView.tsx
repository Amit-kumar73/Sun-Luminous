import React from 'react';
import { Flame, ShieldCheck, RefreshCw, Award, ArrowUpRight, Cpu } from 'lucide-react';

interface ManufacturingExcellenceViewProps {
  onOpenStartProject: (initialMessage?: string) => void;
}

export const ManufacturingExcellenceView: React.FC<ManufacturingExcellenceViewProps> = ({
  onOpenStartProject,
}) => {
  const steps = [
    {
      num: '01',
      title: 'Raw Silica Formulation',
      desc: 'Custom-batched optical sand blended with metal oxides for amber, ruby, smoked quartz, and iridescent crystal gradients.'
    },
    {
      num: '02',
      title: '1,450°C Furnace Fusion',
      desc: 'High-temperature gas furnaces heating raw materials to a liquid state of pure optical transparency.'
    },
    {
      num: '03',
      title: 'Mouth-Blown Hand Craft',
      desc: 'Master glass artisans with over 20 years of furnace discipline pipe-blow each droplet into custom wooden and graphite moulds.'
    },
    {
      num: '04',
      title: 'Gradual Lehr Annealing',
      desc: 'Multi-hour controlled cooling process preventing micro-fractures and ensuring structural longevity across decades.'
    },
    {
      num: '05',
      title: 'Laser Cutting & CNC Metal Fabrication',
      desc: 'Precision 5-axis CNC machining of aerospace titanium cables, champagne brass canopies, and load-bearing armatures.'
    },
    {
      num: '06',
      title: 'Harmonic Balancing & Quality Control',
      desc: 'Every completed drop is weighed, stress-tested for seismic tolerance, and photometrically matched to 2700K LED drivers.'
    }
  ];

  return (
    <section className="py-24 bg-[#0B0F17] relative min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C9A96A] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Industrial Craftsmanship</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#F8F6F2] tracking-tight mb-4">
            Manufacturing Excellence & Furnace Discipline
          </h1>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Sutra Luminis operates a state-of-the-art 120,000 sq. ft. manufacturing facility housing 1,450°C glass furnaces, 5-axis laser cutting workshops, and 100+ master glass artisans.
          </p>
        </div>

        {/* Hero Visual Facility Showcase */}
        <div className="relative h-96 sm:h-[480px] rounded-xl overflow-hidden border border-[#C9A96A]/30 mb-20 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1600&auto=format&fit=crop"
            alt="Sutra Glass Blowing Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/40 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C9A96A] font-medium block">
                Furnace Unit #3 • 1,450°C Continuous Melt
              </span>
              <h2 className="font-serif text-3xl font-light text-[#F8F6F2] mt-1">
                Zero-Waste Closed-Loop Glass Recycling
              </h2>
            </div>

            <div className="flex items-center space-x-4 bg-[#0B0F17]/80 backdrop-blur-md p-4 rounded border border-[#C9A96A]/20">
              <RefreshCw className="w-6 h-6 text-[#C9A96A] shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-white block">100% Cullet Recycling</span>
                <span className="text-gray-400 text-[11px]">All off-cuts remelted without environmental waste</span>
              </div>
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
                  <span className="font-serif text-3xl font-light text-[#C9A96A] block mb-3">
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

        {/* Factory Stats Banner */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#0F172A] border border-[#C9A96A]/20 text-center space-y-6">
          <h2 className="font-serif text-3xl font-light text-[#F8F6F2]">
            Need a Private Factory Tour or Mockup Review?
          </h2>
          <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
            We invite senior architects, interior designers, and hotel developers to inspect 1:1 scale prototype mockups at our production facility.
          </p>

          <button
            onClick={() => onOpenStartProject('Requesting a private factory visit / 1:1 scale mockup review for upcoming project.')}
            className="px-8 py-4 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-widest rounded-sm inline-flex items-center space-x-2 transition-all shadow-xl shadow-[#C9A96A]/10"
          >
            <span>Schedule Factory Inspection</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
