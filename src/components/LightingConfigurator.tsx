import React, { useState } from 'react';
import { Compass, Sparkles, Sliders, ArrowUpRight, Check, Box, RefreshCw } from 'lucide-react';
import { ConfiguratorState } from '../types';

interface LightingConfiguratorProps {
  onOpenStartProject: (customSpecText: string) => void;
  onOpenAiAssistant: () => void;
}

export const LightingConfigurator: React.FC<LightingConfiguratorProps> = ({
  onOpenStartProject,
  onOpenAiAssistant,
}) => {
  const [state, setState] = useState<ConfiguratorState>({
    roomType: 'Hotel Lobby Grand Atrium',
    heightFeet: 35,
    widthFeet: 30,
    lengthFeet: 40,
    style: 'Sculptural Wave / Organic Flow',
    primaryMaterial: 'Mouth-Blown Furnace Glass',
    glassFinish: 'Warm Amber & Smoked Gradient',
    metalFinish: 'Champagne Satin Brass',
    colorTemperature: '2700K Warm Ambient',
    targetBudget: '$100,000 - $250,000',
  });

  // Dynamic calculations based on dimensions
  const estimatedDropFeet = Math.round(state.heightFeet * 0.72);
  const elementCountEstimate = Math.round((state.heightFeet * state.widthFeet * 1.8) + 300);
  const estimatedPowerWatts = Math.round(elementCountEstimate * 1.4);

  const roomTypes = [
    'Hotel Lobby Grand Atrium',
    'Private Villa Living / Dining',
    'Commercial Tower Entrance',
    'Double Height Spiral Staircase',
    'Reception Hotspot / Bar Lounge',
    'Civic / Cultural Auditorium'
  ];

  const styles = [
    'Sculptural Wave / Organic Flow',
    'Celestia Crystal Cluster Matrix',
    'Acoustic Ribbon Light Sculpture',
    'Geometric Gold & Glass Eclipse',
    'Spiral Crystal Cascade'
  ];

  const glassFinishes = [
    'Warm Amber & Smoked Gradient',
    'Pure Clear Borosilicate Crystal',
    'Iridescent Opal Glass',
    'Smoked Quartz & Charcoal',
    'Ruby Infused Hand-Blown'
  ];

  const metalFinishes = [
    'Champagne Satin Brass',
    'Hand-Patinated Antique Bronze',
    'Anodized Dark Charcoal',
    'Aircraft Titanium Steel',
    'Polished Rose Gold'
  ];

  const colorTemps = [
    '2400K Ultra-Warm Candlelight',
    '2700K Warm Ambient (Hospitality Standard)',
    '3000K Soft White'
  ];

  const buildSummaryText = () => {
    return `Interactive Studio Configurator Specification:
Space Type: ${state.roomType}
Ceiling Height: ${state.heightFeet} ft
Estimated Drop: ${estimatedDropFeet} ft
Style: ${state.style}
Glass Finish: ${state.glassFinish}
Metal Finish: ${state.metalFinish}
Color Temp: ${state.colorTemperature}
Est. Element Count: ${elementCountEstimate.toLocaleString()} Drops
Target Budget: ${state.targetBudget}`;
  };

  return (
    <section id="configurator" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-800 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#C9A96A] text-xs uppercase tracking-[0.25em] font-medium mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Virtual Lighting Studio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F8F6F2] tracking-tight">
              Interactive Installation Configurator
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Customize room height, glass craft finishes, and structural parameters to simulate estimated drop lengths, element counts, and lighting performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#0F172A] border border-[#C9A96A]/20 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C9A96A] flex items-center space-x-2">
                <Sliders className="w-4 h-4" />
                <span>1. Spatial & Architectural Parameters</span>
              </span>

              <button
                onClick={() => setState({
                  roomType: 'Hotel Lobby Grand Atrium',
                  heightFeet: 35,
                  widthFeet: 30,
                  lengthFeet: 40,
                  style: 'Sculptural Wave / Organic Flow',
                  primaryMaterial: 'Mouth-Blown Furnace Glass',
                  glassFinish: 'Warm Amber & Smoked Gradient',
                  metalFinish: 'Champagne Satin Brass',
                  colorTemperature: '2700K Warm Ambient',
                  targetBudget: '$100,000 - $250,000',
                })}
                className="text-[10px] uppercase text-gray-400 hover:text-[#C9A96A] flex items-center space-x-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Defaults</span>
              </button>
            </div>

            {/* Room Type */}
            <div>
              <label className="text-xs font-medium text-gray-300 block mb-2">Space / Room Typology</label>
              <select
                value={state.roomType}
                onChange={(e) => setState({ ...state, roomType: e.target.value })}
                className="w-full bg-[#0B0F17] border border-gray-800 rounded p-3 text-xs text-[#F8F6F2] focus:border-[#C9A96A] focus:outline-none"
              >
                {roomTypes.map((rt) => (
                  <option key={rt} value={rt}>{rt}</option>
                ))}
              </select>
            </div>

            {/* Ceiling Height Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-medium text-gray-300">Ceiling Height</label>
                <span className="text-xs font-mono font-semibold text-[#C9A96A]">{state.heightFeet} Feet ({Math.round(state.heightFeet * 0.3048)} meters)</span>
              </div>
              <input
                type="range"
                min="12"
                max="100"
                value={state.heightFeet}
                onChange={(e) => setState({ ...state, heightFeet: Number(e.target.value) })}
                className="w-full accent-[#C9A96A] bg-[#0B0F17] h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                <span>12 ft (Double Height)</span>
                <span>50 ft (Atrium Drop)</span>
                <span>100 ft (Monumental)</span>
              </div>
            </div>

            {/* Aesthetic Style */}
            <div>
              <label className="text-xs font-medium text-gray-300 block mb-2">Aesthetic Sculptural Style</label>
              <select
                value={state.style}
                onChange={(e) => setState({ ...state, style: e.target.value })}
                className="w-full bg-[#0B0F17] border border-gray-800 rounded p-3 text-xs text-[#F8F6F2] focus:border-[#C9A96A] focus:outline-none"
              >
                {styles.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            {/* Glass Finish & Metal Finish Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-300 block mb-2">Glass Craft Finish</label>
                <select
                  value={state.glassFinish}
                  onChange={(e) => setState({ ...state, glassFinish: e.target.value })}
                  className="w-full bg-[#0B0F17] border border-gray-800 rounded p-3 text-xs text-[#F8F6F2] focus:border-[#C9A96A] focus:outline-none"
                >
                  {glassFinishes.map((gf) => (
                    <option key={gf} value={gf}>{gf}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-300 block mb-2">Metal Alloy Finish</label>
                <select
                  value={state.metalFinish}
                  onChange={(e) => setState({ ...state, metalFinish: e.target.value })}
                  className="w-full bg-[#0B0F17] border border-gray-800 rounded p-3 text-xs text-[#F8F6F2] focus:border-[#C9A96A] focus:outline-none"
                >
                  {metalFinishes.map((mf) => (
                    <option key={mf} value={mf}>{mf}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Color Temperature */}
            <div>
              <label className="text-xs font-medium text-gray-300 block mb-2">Lighting Color Temperature (CCT)</label>
              <select
                value={state.colorTemperature}
                onChange={(e) => setState({ ...state, colorTemperature: e.target.value })}
                className="w-full bg-[#0B0F17] border border-gray-800 rounded p-3 text-xs text-[#F8F6F2] focus:border-[#C9A96A] focus:outline-none"
              >
                {colorTemps.map((ct) => (
                  <option key={ct} value={ct}>{ct}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Real-time Preview & Specification Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#0B0F17] border border-[#C9A96A]/30 gold-glow">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#C9A96A] flex items-center space-x-2">
                  <Box className="w-4 h-4" />
                  <span>Real-Time Spec Summary</span>
                </span>
                <span className="text-[10px] bg-[#C9A96A]/20 text-[#C9A96A] px-2.5 py-0.5 rounded font-mono">
                  Sutra Studio v2.4
                </span>
              </div>

              {/* Simulated Visual Indicator */}
              <div className="relative h-44 rounded-lg overflow-hidden border border-gray-800 mb-6 bg-gradient-to-b from-[#0F172A] to-[#0B0F17] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,106,0.2)_0%,transparent_70%)]" />
                
                {/* Simulated Hanging Droplet Matrix */}
                <div className="relative z-10 text-center space-y-1">
                  <span className="font-serif text-3xl font-light text-[#F8F6F2]">
                    {estimatedDropFeet} ft Drop
                  </span>
                  <span className="text-xs text-[#C9A96A] block font-mono">
                    ~{elementCountEstimate.toLocaleString()} Hand-Blown Glass Droplets
                  </span>
                  <span className="text-[10px] text-gray-400 block font-light">
                    Estimated Power Run: {estimatedPowerWatts}W @ 24V DALI
                  </span>
                </div>
              </div>

              {/* Spec Breakdown */}
              <div className="space-y-3 text-xs text-gray-300 font-light mb-8">
                <div className="flex justify-between py-1.5 border-b border-gray-800/60">
                  <span className="text-gray-400">Space Classification:</span>
                  <span className="font-medium text-white">{state.roomType}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-gray-800/60">
                  <span className="text-gray-400">Sculptural Form:</span>
                  <span className="font-medium text-white">{state.style}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-gray-800/60">
                  <span className="text-gray-400">Glass Finish:</span>
                  <span className="font-medium text-[#C9A96A]">{state.glassFinish}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-gray-800/60">
                  <span className="text-gray-400">Metal Frame Alloy:</span>
                  <span className="font-medium text-white">{state.metalFinish}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-gray-800/60">
                  <span className="text-gray-400">Lighting Engine:</span>
                  <span className="font-medium text-white">{state.colorTemperature}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-gray-800">
              <button
                onClick={() => onOpenStartProject(buildSummaryText())}
                className="w-full py-3.5 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#C9A96A]/20"
              >
                <span>Request Quotation with Specs</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAiAssistant}
                className="w-full py-2.5 bg-[#1E293B] hover:bg-[#1E293B]/80 text-[#C9A96A] text-xs font-medium uppercase tracking-wider rounded-sm transition-all flex items-center justify-center space-x-2 border border-[#C9A96A]/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Refine Strategy with Gemini AI</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
