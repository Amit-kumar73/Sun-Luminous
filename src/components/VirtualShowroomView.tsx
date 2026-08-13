import React, { useState } from 'react';
import { Eye, Sun, Moon, Sunset, Compass, Sparkles, ArrowUpRight } from 'lucide-react';

interface VirtualShowroomViewProps {
  onOpenStartProject: (initialMessage?: string) => void;
}

export const VirtualShowroomView: React.FC<VirtualShowroomViewProps> = ({
  onOpenStartProject,
}) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState<number>(0);
  const [activeTimeOfDay, setActiveTimeOfDay] = useState<'day' | 'twilight' | 'night'>('twilight');

  const scenes = [
    {
      title: 'Grand Hotel Atrium Lobby',
      location: 'Dubai DIFC Tower',
      description: 'A 50ft vertical cascade of 2,400 mouth-blown amber glass droplets suspended over polished Italian marble floors.',
      imageDay: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1600&auto=format&fit=crop',
      imageTwilight: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1600&auto=format&fit=crop',
      imageNight: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1600&auto=format&fit=crop',
      hotspots: [
        { title: 'Hand-Blown Amber Droplet', desc: '1,450°C furnace silica with 2700K LED core', top: '35%', left: '48%' },
        { title: 'Titanium Cable Matrix', desc: '0.8mm high-tensile aircraft grade wire', top: '20%', left: '30%' }
      ]
    },
    {
      title: 'Beachfront Luxury Villa Dining',
      location: 'Palm Jumeirah Villa',
      description: 'An organic wave of slumped iridescent glass disks floating over a 16-seat solid walnut dining table.',
      imageDay: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
      imageTwilight: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop',
      imageNight: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
      hotspots: [
        { title: 'Iridescent Glass Disc', desc: 'Slumped glass treated with titanium oxide luster', top: '40%', left: '52%' }
      ]
    }
  ];

  const scene = scenes[activeSceneIndex];

  const currentImage = activeTimeOfDay === 'day'
    ? scene.imageDay
    : activeTimeOfDay === 'twilight'
    ? scene.imageTwilight
    : scene.imageNight;

  return (
    <section className="py-24 bg-[#0B0F17] relative min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gray-800 pb-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#C9A96A] text-xs uppercase tracking-[0.25em] font-medium mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Interactive 360° Lighting Simulator</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#F8F6F2] tracking-tight">
              Virtual Lighting Showroom
            </h1>
          </div>

          {/* Time of Day Lighting Controls */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0 p-1 bg-[#0F172A] rounded-full border border-gray-800">
            <button
              onClick={() => setActiveTimeOfDay('day')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTimeOfDay === 'day'
                  ? 'bg-[#C9A96A] text-[#0B0F17]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Day (Natural)</span>
            </button>

            <button
              onClick={() => setActiveTimeOfDay('twilight')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTimeOfDay === 'twilight'
                  ? 'bg-[#C9A96A] text-[#0B0F17]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Sunset className="w-3.5 h-3.5" />
              <span>Twilight (2700K)</span>
            </button>

            <button
              onClick={() => setActiveTimeOfDay('night')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTimeOfDay === 'night'
                  ? 'bg-[#C9A96A] text-[#0B0F17]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Night (Focal)</span>
            </button>
          </div>
        </div>

        {/* Scene Selection Tabs */}
        <div className="flex items-center space-x-3 mb-8">
          {scenes.map((sc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSceneIndex(idx)}
              className={`px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider font-medium transition-all border ${
                activeSceneIndex === idx
                  ? 'bg-[#1E293B] border-[#C9A96A] text-[#F8F6F2]'
                  : 'bg-[#0F172A] border-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Main Interactive Stage */}
        <div className="relative h-[480px] sm:h-[580px] rounded-xl overflow-hidden border border-[#C9A96A]/30 shadow-2xl mb-10">
          <img
            src={currentImage}
            alt={scene.title}
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-80" />

          {/* Interactive Hotspots */}
          {scene.hotspots.map((hs, idx) => (
            <div
              key={idx}
              style={{ top: hs.top, left: hs.left }}
              className="absolute z-20 group cursor-pointer"
            >
              <div className="relative">
                <span className="w-5 h-5 rounded-full bg-[#C9A96A] opacity-75 animate-ping absolute inset-0" />
                <span className="w-5 h-5 rounded-full bg-[#C9A96A] text-[#0B0F17] flex items-center justify-center text-[10px] font-bold shadow-lg relative z-10">
                  +
                </span>

                {/* Hotspot Tooltip */}
                <div className="absolute left-7 top-0 w-56 p-3 rounded bg-[#0B0F17]/95 border border-[#C9A96A]/40 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md pointer-events-none shadow-2xl">
                  <span className="font-semibold text-[#C9A96A] block">{hs.title}</span>
                  <span className="text-[11px] text-gray-300 block mt-0.5 font-light">{hs.desc}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Info Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C9A96A] font-medium block">
                {scene.location} • {activeTimeOfDay.toUpperCase()} LIGHTING SCENE
              </span>
              <h2 className="font-serif text-3xl font-light text-[#F8F6F2]">
                {scene.title}
              </h2>
            </div>

            <button
              onClick={() => onOpenStartProject(`Inquiring about showroom lighting concept: ${scene.title}`)}
              className="px-6 py-3 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-widest rounded-sm shrink-0 flex items-center space-x-2"
            >
              <span>Commission This Scene</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
