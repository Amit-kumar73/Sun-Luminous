import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Sparkles, Send, Loader2, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { requestAiLightingAssistant } from '../lib/api';
import { useLanguage } from '../lib/LanguageContext';

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
  const { t, language } = useLanguage();
  const [roomHeightFeet, setRoomHeightFeet] = useState<number>(30);
  const [roomType, setRoomType] = useState<string>('Grand Hotel Foyer');
  const [style, setStyle] = useState<string>('Sculptural Organic Ribbon');
  const [colorPalette, setColorPalette] = useState<string>('Amber & Smoked Glass with Champagne Brass');
  const [additionalDetails, setAdditionalDetails] = useState<string>('The lobby features light travertine marble walls, double height glass curtain wall facing ocean, and requires subtle dimming for night events.');

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
      className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs"
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-2xl bg-[#FAF8F5] text-[#1C1917] border-l border-[#E5E0D5] h-full flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Drawer Header */}
        <div className="px-6 py-5 bg-white border-b border-[#E5E0D5] flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-[#FAF6EE] text-[#9E7B35] border border-[#B38E46]/30">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-medium text-[#1C1917]">
                {language === 'hi' ? 'जेमिनी एआई लाइटिंग सलाहकार' : 'Gemini AI Lighting Consultant'}
              </h2>
              <p className="text-[10px] text-[#9E7B35] uppercase tracking-widest font-semibold">
                SUN LUMINOUS Architectural Intelligence Engine
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#78716C] hover:text-[#1C1917] hover:bg-[#F5F2EB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Quick Query Form */}
          <form onSubmit={handleSubmit} className="p-5 rounded-lg bg-white border border-[#E5E0D5] space-y-4 shadow-xs">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#9E7B35]">
              {language === 'hi' ? '1. वास्तुशिल्प मापदंड दर्ज करें' : '1. Input Architectural Parameters'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-medium text-[#57534E] block mb-1">
                  {language === 'hi' ? 'छत की ऊंचाई (फीट में)' : `Ceiling Height (${roomHeightFeet} ft)`}
                </label>
                <input
                  type="number"
                  value={roomHeightFeet}
                  onChange={(e) => setRoomHeightFeet(Number(e.target.value))}
                  className="w-full bg-[#FAF8F5] border border-[#DCD5C8] rounded p-2.5 text-xs text-[#1C1917] focus:border-[#9E7B35] focus:outline-none"
                  placeholder="Height in feet"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#57534E] block mb-1">
                  {language === 'hi' ? 'स्थान / रूम प्रकार' : 'Space / Room Typology'}
                </label>
                <input
                  type="text"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#DCD5C8] rounded p-2.5 text-xs text-[#1C1917] focus:border-[#9E7B35] focus:outline-none"
                  placeholder="e.g. 30ft Hotel Lobby"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-medium text-[#57534E] block mb-1">
                {language === 'hi' ? 'पसंदीदा मूर्तिकला शैली' : 'Preferred Sculptural Style'}
              </label>
              <input
                type="text"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#DCD5C8] rounded p-2.5 text-xs text-[#1C1917] focus:border-[#9E7B35] focus:outline-none"
                placeholder="e.g. Organic Ribbon, Crystal Drop Cascade"
              />
            </div>

            <div>
              <label className="text-[11px] font-medium text-[#57534E] block mb-1">
                {language === 'hi' ? 'अतिरिक्त वास्तुशिल्प विवरण' : 'Additional Architectural Notes'}
              </label>
              <textarea
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                rows={2}
                className="w-full bg-[#FAF8F5] border border-[#DCD5C8] rounded p-2.5 text-xs text-[#1C1917] focus:border-[#9E7B35] focus:outline-none"
                placeholder="Describe travertine walls, natural daylight, budget expectations..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#1C1917] hover:bg-[#9E7B35] text-white font-semibold text-xs uppercase tracking-widest rounded-xs transition-all flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer shadow-xs"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Analyzing Architectural Geometry...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>{language === 'hi' ? 'एआई प्रस्ताव तैयार करें' : 'Generate AI Proposal'}</span>
                </>
              )}
            </button>
          </form>

          {/* Error Banner */}
          {error && (
            <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {/* AI Result Cards */}
          {result && (
            <div className="space-y-5 p-6 rounded-lg bg-white border border-[#9E7B35]/40 shadow-sm animate-fade-in">
              <div className="border-b border-[#E5E0D5] pb-3">
                <span className="text-[10px] uppercase tracking-widest text-[#9E7B35] font-semibold block">
                  AI Proposal Concept
                </span>
                <h3 className="font-serif text-2xl font-light text-[#1C1917] mt-0.5">
                  {result.conceptName}
                </h3>
                <p className="text-xs italic text-[#78716C] mt-1">
                  "{result.headline}"
                </p>
              </div>

              <div className="text-xs text-[#57534E] font-light leading-relaxed">
                {result.detailedDescription}
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded bg-[#FAF8F5] border border-[#E5E0D5] text-xs">
                <div>
                  <span className="text-[10px] text-[#78716C] block uppercase font-medium">Dimensions & Drop</span>
                  <span className="font-semibold text-[#1C1917] mt-0.5 block">{result.recommendedDimensions}</span>
                </div>

                <div>
                  <span className="text-[10px] text-[#78716C] block uppercase font-medium">Element Count</span>
                  <span className="font-semibold text-[#9E7B35] mt-0.5 block">{result.elementCount}</span>
                </div>

                <div>
                  <span className="text-[10px] text-[#78716C] block uppercase font-medium">Glass Finish</span>
                  <span className="font-medium text-[#1C1917] mt-0.5 block">{result.glassFinish}</span>
                </div>

                <div>
                  <span className="text-[10px] text-[#78716C] block uppercase font-medium">Metal Frame</span>
                  <span className="font-medium text-[#1C1917] mt-0.5 block">{result.metalFinish}</span>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[#FAF6EE] border-l-2 border-[#9E7B35]">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#9E7B35] block">
                  Suspension & Structural Strategy
                </span>
                <p className="text-xs text-[#57534E] mt-1 font-light">
                  {result.suspensionStrategy}
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenStartProject(`Gemini AI Lighting Proposal Reference: ${result.conceptName}\n\nDimensions: ${result.recommendedDimensions}\nElements: ${result.elementCount}\nGlass: ${result.glassFinish}\n\nUser Notes: ${additionalDetails}`);
                }}
                className="w-full py-3 bg-[#1C1917] hover:bg-[#9E7B35] text-white font-semibold text-xs uppercase tracking-widest rounded-xs transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
              >
                <span>{language === 'hi' ? 'आधिकारिक पूछताछ में जोड़ें' : 'Attach AI Concept to Official Inquiry'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

