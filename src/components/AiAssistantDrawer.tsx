import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Sparkles, Send, Loader2, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { requestAiLightingAssistant } from '../lib/api';

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStartProject: (initialMessage?: string) => void;
}

export const AiAssistantDrawer: React.FC<AiAssistantDrawerProps> = ({
  isOpen,
  onClose,
  onOpenStartProject,
}) => {
  const [roomHeightFeet, setRoomHeightFeet] = useState<number>(30);
  const [roomType, setRoomType] = useState<string>('Grand Hotel Foyer');
  const [style, setStyle] = useState<string>('Sculptural Organic Ribbon');
  const [colorPalette, setColorPalette] = useState<string>('Amber & Smoked Glass with Champagne Brass');
  const [additionalDetails, setAdditionalDetails] = useState<string>('The lobby features dark travertine marble walls, double height glass curtain wall facing ocean, and requires subtle dimming for night events.');

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await requestAiLightingAssistant({
        roomHeightFeet,
        roomType,
        style,
        colorPalette,
        additionalDetails,
      });
      setResult(data);
    } catch (err: any) {
      console.error('AI Assistant Error:', err);
      setError(err.message || 'Failed to connect to AI Lighting Consultant');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex justify-end bg-[#0F172A]/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-2xl bg-[#0F172A] border-l border-[#C9A96A]/30 h-full flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Drawer Header */}
        <div className="px-6 py-5 bg-[#0B0F17] border-b border-[#C9A96A]/20 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-[#C9A96A]/20 text-[#C9A96A] border border-[#C9A96A]/30">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-light text-[#F8F6F2]">
                Gemini AI Lighting Consultant
              </h2>
              <p className="text-[10px] text-[#C9A96A] uppercase tracking-widest font-medium">
                Sutra Architectural Intelligence Engine
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-[#1E293B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Quick Query Form */}
          <form onSubmit={handleSubmit} className="p-5 rounded-lg bg-[#0B0F17] border border-[#1E293B] space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#C9A96A]">
              1. Input Architectural Parameters
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-medium text-gray-300 block mb-1">
                  Ceiling Height ({roomHeightFeet} ft)
                </label>
                <input
                  type="number"
                  value={roomHeightFeet}
                  onChange={(e) => setRoomHeightFeet(Number(e.target.value))}
                  className="w-full bg-[#0F172A] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                  placeholder="Height in feet"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-gray-300 block mb-1">
                  Space / Room Typology
                </label>
                <input
                  type="text"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full bg-[#0F172A] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                  placeholder="e.g. 30ft Hotel Lobby"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-medium text-gray-300 block mb-1">
                Preferred Sculptural Style
              </label>
              <input
                type="text"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-[#0F172A] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                placeholder="e.g. Organic Ribbon, Crystal Drop Cascade"
              />
            </div>

            <div>
              <label className="text-[11px] font-medium text-gray-300 block mb-1">
                Additional Architectural Notes
              </label>
              <textarea
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                rows={2}
                className="w-full bg-[#0F172A] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                placeholder="Describe dark travertine walls, natural daylight, budget expectations..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Analyzing Architectural Geometry...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate AI Proposal</span>
                </>
              )}
            </button>
          </form>

          {/* Error Banner */}
          {error && (
            <div className="p-4 rounded-lg bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* AI Result Cards */}
          {result && (
            <div className="space-y-5 p-6 rounded-lg bg-[#0B0F17] border border-[#C9A96A]/40 gold-glow animate-fade-in">
              <div className="border-b border-gray-800 pb-3">
                <span className="text-[10px] uppercase tracking-widest text-[#C9A96A] font-semibold block">
                  AI Proposal Concept
                </span>
                <h3 className="font-serif text-2xl font-light text-[#F8F6F2] mt-0.5">
                  {result.conceptName}
                </h3>
                <p className="text-xs italic text-gray-400 mt-1">
                  "{result.headline}"
                </p>
              </div>

              <div className="text-xs text-gray-300 font-light leading-relaxed">
                {result.detailedDescription}
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded bg-[#0F172A] border border-gray-800 text-xs">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">Dimensions & Drop</span>
                  <span className="font-semibold text-white mt-0.5 block">{result.recommendedDimensions}</span>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">Element Count</span>
                  <span className="font-semibold text-[#C9A96A] mt-0.5 block">{result.elementCount}</span>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">Glass Finish</span>
                  <span className="font-medium text-gray-200 mt-0.5 block">{result.glassFinish}</span>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">Metal Frame</span>
                  <span className="font-medium text-gray-200 mt-0.5 block">{result.metalFinish}</span>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[#1E293B]/60 border-l-2 border-[#C9A96A]">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C9A96A] block">
                  Suspension & Structural Strategy
                </span>
                <p className="text-xs text-gray-300 mt-1 font-light">
                  {result.suspensionStrategy}
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenStartProject(`Gemini AI Lighting Proposal Reference: ${result.conceptName}\n\nDimensions: ${result.recommendedDimensions}\nElements: ${result.elementCount}\nGlass: ${result.glassFinish}\n\nUser Notes: ${additionalDetails}`);
                }}
                className="w-full py-3 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center space-x-2"
              >
                <span>Attach AI Concept to Official Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
