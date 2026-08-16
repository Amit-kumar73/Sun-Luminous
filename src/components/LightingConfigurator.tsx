import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Sparkles, 
  ArrowUpRight, 
  Check, 
  Box, 
  RefreshCw, 
  ArrowRight, 
  ArrowLeft, 
  Flame, 
  Zap, 
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { ConfiguratorState } from '../types';
import { useLanguage } from '../lib/LanguageContext';

interface LightingConfiguratorProps {
  onOpenStartProject: (customSpecText: string) => void;
  onOpenAiAssistant: () => void;
}

export const LightingConfigurator: React.FC<LightingConfiguratorProps> = ({
  onOpenStartProject,
  onOpenAiAssistant,
}) => {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [state, setState] = useState<ConfiguratorState>({
    roomType: 'Hotel Lobby Grand Atrium',
    heightFeet: 35,
    widthFeet: 30,
    lengthFeet: 40,
    style: 'Sculptural Wave / Organic Flow',
    primaryMaterial: 'Mouth-Blown Furnace Glass',
    glassFinish: 'Warm Amber & Smoked Gradient',
    metalFinish: 'Champagne Satin Brass',
    colorTemperature: '2700K Warm Ambient (Hospitality Standard)',
    targetBudget: '$100,000 - $250,000',
  });

  // Dynamic calculations based on dimensions
  const estimatedDropFeet = Math.round(state.heightFeet * 0.72);
  const elementCountEstimate = Math.round((state.heightFeet * state.widthFeet * 1.8) + 300);
  const estimatedPowerWatts = Math.round(elementCountEstimate * 1.4);
  const estimatedWeightKg = Math.round(elementCountEstimate * 0.38 + 45);

  const steps = [
    {
      number: 1,
      id: 'spatial',
      title: language === 'hi' ? 'स्थान व ऊंचाई' : 'Spatial & Height',
      subtitle: language === 'hi' ? 'कमरे का प्रकार और सीलिंग माप' : 'Space typology & ceiling dimensions',
      icon: Maximize2,
    },
    {
      number: 2,
      id: 'style',
      title: language === 'hi' ? 'मूर्तिकला शैली' : 'Sculptural Form',
      subtitle: language === 'hi' ? 'आर्किटेक्चरल स्टाइल व रूप' : 'Aesthetic silhouette & rhythm',
      icon: Compass,
    },
    {
      number: 3,
      id: 'materials',
      title: language === 'hi' ? 'ग्लास व मेटल फिनिश' : 'Artisanal Finishes',
      subtitle: language === 'hi' ? 'भट्टी ग्लास व धातु रंग' : 'Furnace glass texture & metal alloys',
      icon: Flame,
    },
    {
      number: 4,
      id: 'lighting',
      title: language === 'hi' ? 'लाइटिंग इंजन' : 'Lighting & Budget',
      subtitle: language === 'hi' ? 'कलर टेम्परेचर व बजट सीमा' : 'CCT Kelvin, dimming & target scale',
      icon: Zap,
    },
    {
      number: 5,
      id: 'summary',
      title: language === 'hi' ? 'विशिष्टता समीक्षा' : 'Review & Spec',
      subtitle: language === 'hi' ? 'लाइव गणना व उद्धरण अनुरोध' : 'Live drop simulation & quotation',
      icon: Box,
    },
  ];

  const roomTypes = [
    { 
      id: 'Hotel Lobby Grand Atrium', 
      label: 'Hotel Lobby Grand Atrium', 
      labelHi: 'होटल लॉबी ग्रैंड एट्रियम', 
      defaultH: 35,
      desc: 'Double/triple volume monumental foyer' 
    },
    { 
      id: 'Private Villa Living / Dining', 
      label: 'Private Villa Living / Dining', 
      labelHi: 'प्राइवेट विला लिविंग / डाइनिंग', 
      defaultH: 22,
      desc: 'Exclusive high-ceiling residential sanctuary' 
    },
    { 
      id: 'Commercial Tower Entrance', 
      label: 'Commercial Tower Entrance', 
      labelHi: 'कमर्शियल टॉवर मुख्य द्वार', 
      defaultH: 40,
      desc: 'High-traffic civic & corporate landmark' 
    },
    { 
      id: 'Double Height Spiral Staircase', 
      label: 'Double Height Spiral Staircase', 
      labelHi: 'डबल हाइट स्पाइरल सीढ़ी', 
      defaultH: 28,
      desc: 'Vertical helical cascading formation' 
    },
    { 
      id: 'Reception Hotspot / Bar Lounge', 
      label: 'Reception Hotspot / Bar Lounge', 
      labelHi: 'होटल रिसेप्शन / बार लाउंज', 
      defaultH: 18,
      desc: 'Intimate glowing luxury hospitality cluster' 
    },
    { 
      id: 'Civic / Cultural Auditorium', 
      label: 'Civic / Cultural Auditorium', 
      labelHi: 'सांस्कृतिक केंद्र / ऑडिटोरियम', 
      defaultH: 48,
      desc: 'Acoustic-responsive massive light sculpture' 
    }
  ];

  const styles = [
    {
      name: 'Sculptural Wave / Organic Flow',
      nameHi: 'स्कल्पचुरल वेव / ऑर्गेनिक फ्लो',
      desc: 'Fluid undulating ribbons of mouth-blown crystal mimicking water ripples and natural wind currents.',
      descHi: 'हवा और पानी की लहरों से प्रेरित प्रवाहमयी माउथ-ब्लोन क्रिस्टल रिबन्स।'
    },
    {
      name: 'Celestia Crystal Cluster Matrix',
      nameHi: 'सेलेस्टिया क्रिस्टल क्लस्टर मैट्रिक्स',
      desc: 'Astronomical dense array of optical low-iron crystal drops suspended at varying staggered elevations.',
      descHi: 'विभिन्न ऊंचाइयों पर लटकती ऑप्टिकल लो-आयरन क्रिस्टल बूंदों का खगोलीय समूह।'
    },
    {
      name: 'Acoustic Ribbon Light Sculpture',
      nameHi: 'ध्वनिक रिबन लाइट स्कल्प्चर',
      desc: 'Curved brass chassis with embedded linear micro-LED optics and hand-draped crystal veil panels.',
      descHi: 'कर्व्ड ब्रास चेसिस और हस्तनिर्मित क्रिस्टल पैनल के साथ आधुनिक प्रकाश व्यवस्था।'
    },
    {
      name: 'Geometric Gold & Glass Eclipse',
      nameHi: 'जियोमेट्रिक गोल्ड व ग्लास इक्लिप्स',
      desc: 'Interlocking concentric champagne gold rings holding hand-carved textured optical glass discs.',
      descHi: 'शैंपेन गोल्ड रिंग्स और नक्काशीदार ऑप्टिकल ग्लास डिस्क का ज्यामितीय संयोजन।'
    },
    {
      name: 'Spiral Crystal Cascade',
      nameHi: 'स्पाइरल क्रिस्टल कैस्केड',
      desc: 'Helical descending vortex designed for multi-tier stairwells and grand vertical architectural shafts.',
      descHi: 'बहु-मंजिला सीढ़ियों और भव्य वर्टिकल शाफ्ट के लिए सर्पिलाकार क्रिस्टल झरना।'
    }
  ];

  const glassFinishes = [
    { name: 'Warm Amber & Smoked Gradient', nameHi: 'वार्म एम्बर व स्मोक्ड ग्रेडिएंट', color: 'from-amber-400 to-amber-900' },
    { name: 'Pure Clear Borosilicate Crystal', nameHi: 'प्योर क्लियर बोरोसिलिकेट क्रिस्टल', color: 'from-sky-100 to-cyan-200' },
    { name: 'Iridescent Opal Glass', nameHi: 'इंद्रधनुषी ओपल ग्लास', color: 'from-pink-200 via-indigo-200 to-amber-100' },
    { name: 'Smoked Quartz & Charcoal', nameHi: 'स्मोक्ड क्वार्ट्ज व चारकोल', color: 'from-stone-400 to-stone-800' },
    { name: 'Ruby Infused Hand-Blown', nameHi: 'रूबी इन्फ्यूज्ड हैंड-ब्लोन', color: 'from-rose-500 to-red-900' }
  ];

  const metalFinishes = [
    { name: 'Champagne Satin Brass', nameHi: 'शैंपेन सैटिन ब्रास', tone: '#D4AF37' },
    { name: 'Hand-Patinated Antique Bronze', nameHi: 'हस्तनिर्मित एंटीक ब्रॉन्ज', tone: '#8C6239' },
    { name: 'Anodized Dark Charcoal', nameHi: 'एनोडाइज्ड डार्क चारकोल', tone: '#2D3748' },
    { name: 'Aircraft Titanium Steel', nameHi: 'एयरक्राफ्ट टाइटेनियम स्टील', tone: '#94A3B8' },
    { name: 'Polished Rose Gold', nameHi: 'पॉलिश्ड रोज़ गोल्ड', tone: '#E0A899' }
  ];

  const colorTemps = [
    { 
      label: '2400K Ultra-Warm Candlelight', 
      labelHi: '2400K अल्ट्रा-वार्म कैंडललाइट', 
      desc: 'Intimate, golden hospitality glow for exclusive lounges and dining salons' 
    },
    { 
      label: '2700K Warm Ambient (Hospitality Standard)', 
      labelHi: '2700K वार्म एम्बिएंट (हॉस्पिटैलिटी मानक)', 
      desc: 'The gold standard for luxury hotel lobbies and private residential atriums' 
    },
    { 
      label: '3000K Soft White', 
      labelHi: '3000K सॉफ्ट व्हाइट', 
      desc: 'Crisp architectural balance highlighting crystalline glass facets and metal finishes' 
    },
    { 
      label: 'Tunable White 1800K–4000K (DALI-2 / Casambi)', 
      labelHi: 'ट्यूनेबल व्हाइट 1800K–4000K (DALI-2 / Casambi)', 
      desc: 'Circadian rhythm synchronized dynamic architectural lighting' 
    }
  ];

  const budgetTiers = [
    { range: '$50,000 - $100,000', label: 'Boutique Scale (15-22 ft)' },
    { range: '$100,000 - $250,000', label: 'Grand Atrium Scale (25-45 ft)' },
    { range: '$250,000 - $500,000', label: 'Monumental Landmark (50-80 ft)' },
    { range: '$500,000+', label: 'Masterpiece Multi-Story (80-100+ ft)' }
  ];

  const buildSummaryText = () => {
    return `SUN LUMINOUS Atelier Configurator Specification:
--------------------------------------------------
Project Space Typology: ${state.roomType}
Ceiling Height: ${state.heightFeet} ft (~${Math.round(state.heightFeet * 0.3048)} m)
Room Footprint: ${state.lengthFeet} ft length x ${state.widthFeet} ft width
Recommended Vertical Drop: ${estimatedDropFeet} ft
Sculptural Style: ${state.style}
Artisanal Glass Texture: ${state.glassFinish}
Architectural Metal Alloy: ${state.metalFinish}
Lighting Engine / CCT: ${state.colorTemperature}
Target Budget Range: ${state.targetBudget}
--------------------------------------------------
Estimated Hand-Blown Elements: ~${elementCountEstimate.toLocaleString()} drops
Estimated Power Load: ~${estimatedPowerWatts}W (DALI-2 / 24V Dimmable)
Estimated Total Rigging Weight: ~${estimatedWeightKg} kg`;
  };

  const progressPercentage = Math.round(((currentStep - 1) / (steps.length - 1)) * 100);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setState({
      roomType: 'Hotel Lobby Grand Atrium',
      heightFeet: 35,
      widthFeet: 30,
      lengthFeet: 40,
      style: 'Sculptural Wave / Organic Flow',
      primaryMaterial: 'Mouth-Blown Furnace Glass',
      glassFinish: 'Warm Amber & Smoked Gradient',
      metalFinish: 'Champagne Satin Brass',
      colorTemperature: '2700K Warm Ambient (Hospitality Standard)',
      targetBudget: '$100,000 - $250,000',
    });
    setCurrentStep(1);
  };

  return (
    <section id="configurator" className="py-20 bg-[#FAF8F5] text-[#1C1917] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E5E0D5]">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#9E7B35] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'वर्चुअल लाइटिंग स्टूडियो' : 'Virtual Lighting Atelier'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1917] tracking-tight">
              {language === 'hi' ? 'इंटरैक्टिव इंस्टॉलेशन कॉन्फिगरेटर' : 'Interactive Installation Configurator'}
            </h2>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="text-xs text-[#57534E] font-light max-w-sm leading-relaxed hidden sm:block">
              {language === 'hi'
                ? 'स्थान की ऊंचाई, ग्लास फिनिश और स्ट्रक्चरल पैरामीटर्स का चयन कर लाइव सिमुलेशन प्राप्त करें।'
                : 'Configure spatial volume, furnace glass textures, and structural loads to simulate live drops.'}
            </p>

            <button
              onClick={handleReset}
              className="text-[11px] font-semibold uppercase tracking-wider text-[#78716C] hover:text-[#9E7B35] bg-white border border-[#E5E0D5] px-3 py-2 rounded-xs flex items-center space-x-1.5 transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              <RefreshCw className="w-3 h-3" />
              <span>{language === 'hi' ? 'रीसेट' : 'Reset'}</span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MULTI-STEP PROGRESS INDICATOR */}
        {/* ========================================================= */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E0D5] shadow-xs">
          {/* Progress Header & Percentage Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#9E7B35]">
                {language === 'hi' ? `चरण ${currentStep} / ${steps.length}` : `Step ${currentStep} of ${steps.length}`}
              </span>
              <span className="text-[#DCD5C8]">•</span>
              <span className="text-xs font-serif font-medium text-[#1C1917]">
                {steps[currentStep - 1].title}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-semibold text-[#9E7B35]">
                {progressPercentage}% {language === 'hi' ? 'पूर्ण' : 'Complete'}
              </span>
            </div>
          </div>

          {/* Smooth Continuous Progress Line */}
          <div className="w-full h-1.5 bg-[#F5F2EB] rounded-full overflow-hidden mb-6">
            <motion.div
              className="h-full bg-gradient-to-r from-[#9E7B35] to-[#B38E46]"
              initial={{ width: '0%' }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />
          </div>

          {/* Clickable Step Pills / Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {steps.map((step) => {
              const isCompleted = currentStep > step.number;
              const isActive = currentStep === step.number;
              const StepIcon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.number)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between relative group ${
                    isActive
                      ? 'bg-[#FAF6EE] border-[#9E7B35] shadow-sm ring-1 ring-[#9E7B35]/20'
                      : isCompleted
                      ? 'bg-white border-[#E0D7C6] hover:border-[#9E7B35]/60'
                      : 'bg-[#FAF8F5] border-[#EAE5DB] text-[#78716C] opacity-75 hover:opacity-100 hover:border-[#DCD5C8]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-1.5 rounded-lg text-xs flex items-center justify-center ${
                      isActive
                        ? 'bg-[#9E7B35] text-white'
                        : isCompleted
                        ? 'bg-[#1C1917] text-white'
                        : 'bg-[#E5E0D5] text-[#57534E]'
                    }`}>
                      {isCompleted ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <span className="font-mono text-[11px] font-bold">{step.number}</span>
                      )}
                    </div>

                    <StepIcon className={`w-3.5 h-3.5 ${
                      isActive ? 'text-[#9E7B35]' : isCompleted ? 'text-[#1C1917]' : 'text-[#A8A29E]'
                    }`} />
                  </div>

                  <div>
                    <span className={`block text-xs font-semibold leading-tight line-clamp-1 ${
                      isActive ? 'text-[#1C1917]' : isCompleted ? 'text-[#292524]' : 'text-[#78716C]'
                    }`}>
                      {step.title}
                    </span>
                    <span className="text-[10px] text-[#78716C] line-clamp-1 font-light mt-0.5 hidden sm:block">
                      {step.subtitle}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeStepIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#9E7B35] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN WORKSPACE GRID: STEP CONTENT & LIVE PREVIEW */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left / Main: Step-by-Step Forms */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E0D5] shadow-xs min-h-[480px]">
            
            <AnimatePresence mode="wait">
              {/* STEP 1: Spatial & Height */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="border-b border-[#F0ECE1] pb-4">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#9E7B35] block mb-1">
                      {language === 'hi' ? 'चरण 1: आर्किटेक्चरल स्पेस' : 'Step 1: Architectural Space'}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#1C1917]">
                      {language === 'hi' ? 'स्थान का चयन व सीलिंग ऊंचाई' : 'Select Typology & Ceiling Height'}
                    </h3>
                    <p className="text-xs text-[#57534E] font-light mt-1">
                      {language === 'hi' 
                        ? 'अपनी इमारत के प्रकार और छत की ऊंचाई दर्ज करें ताकि ड्रॉप व ग्लास लोड की गणना की जा सके।'
                        : 'Define the architectural volume to calculate accurate suspension drop and element counts.'}
                    </p>
                  </div>

                  {/* Room Typology Grid */}
                  <div>
                    <label className="text-xs font-semibold text-[#1C1917] block mb-2.5">
                      {language === 'hi' ? 'वास्तुशिल्प स्थान प्रकार' : 'Space / Room Typology'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {roomTypes.map((rt) => {
                        const isSelected = state.roomType === rt.id;
                        return (
                          <button
                            key={rt.id}
                            type="button"
                            onClick={() => setState(prev => ({ ...prev, roomType: rt.id, heightFeet: rt.defaultH }))}
                            className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#FAF6EE] border-[#9E7B35] ring-1 ring-[#9E7B35]'
                                : 'bg-[#FAF8F5] border-[#E5E0D5] hover:border-[#9E7B35]/50'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-semibold text-[#1C1917]">
                                {language === 'hi' ? rt.labelHi : rt.label}
                              </span>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7B35]" />}
                            </div>
                            <span className="text-[10px] text-[#78716C] block leading-tight">
                              {rt.desc}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Ceiling Height Interactive Slider */}
                  <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D5]">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <label className="text-xs font-semibold text-[#1C1917] block">
                          {language === 'hi' ? 'छत की कुल ऊंचाई' : 'Total Ceiling Height'}
                        </label>
                        <span className="text-[11px] text-[#78716C]">
                          {language === 'hi' ? 'फर्श से सीलिंग तक की लंबवत दूरी' : 'Floor-to-ceiling clear vertical clearance'}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-mono font-bold text-[#9E7B35] block">
                          {state.heightFeet} Feet
                        </span>
                        <span className="text-[10px] text-[#78716C] font-mono">
                          ~{Math.round(state.heightFeet * 0.3048)} Meters
                        </span>
                      </div>
                    </div>

                    <input
                      type="range"
                      min="12"
                      max="100"
                      value={state.heightFeet}
                      onChange={(e) => setState({ ...state, heightFeet: Number(e.target.value) })}
                      className="w-full accent-[#9E7B35] bg-[#E5E0D5] h-2 rounded cursor-pointer mt-2"
                    />

                    <div className="flex justify-between text-[10px] text-[#78716C] mt-2 font-mono">
                      <span>12 ft (Villa Double Height)</span>
                      <span>35 ft (Hotel Grand Atrium)</span>
                      <span>100 ft (Monumental Tower)</span>
                    </div>
                  </div>

                  {/* Width & Length Footprint */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-[#57534E] block mb-1">
                        {language === 'hi' ? 'स्थान की चौड़ाई (ft)' : 'Room Width (ft)'}
                      </label>
                      <input
                        type="number"
                        min="10"
                        max="150"
                        value={state.widthFeet}
                        onChange={(e) => setState({ ...state, widthFeet: Number(e.target.value) })}
                        className="w-full bg-[#FAF8F5] border border-[#DCD5C8] rounded-lg p-2.5 text-xs text-[#1C1917] focus:border-[#9E7B35] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[#57534E] block mb-1">
                        {language === 'hi' ? 'स्थान की लंबाई (ft)' : 'Room Length (ft)'}
                      </label>
                      <input
                        type="number"
                        min="10"
                        max="200"
                        value={state.lengthFeet}
                        onChange={(e) => setState({ ...state, lengthFeet: Number(e.target.value) })}
                        className="w-full bg-[#FAF8F5] border border-[#DCD5C8] rounded-lg p-2.5 text-xs text-[#1C1917] focus:border-[#9E7B35] focus:outline-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Sculptural Form & Style */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="border-b border-[#F0ECE1] pb-4">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#9E7B35] block mb-1">
                      {language === 'hi' ? 'चरण 2: मूर्तिकला संकल्पना' : 'Step 2: Sculptural Silhouette'}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#1C1917]">
                      {language === 'hi' ? 'प्रकाश मूर्तिकला की शैली चुनें' : 'Choose Sculptural Formation'}
                    </h3>
                    <p className="text-xs text-[#57534E] font-light mt-1">
                      {language === 'hi'
                        ? 'वास्तुशिल्प लय के अनुसार जैविक लहरें, खगोलीय क्लस्टर या ज्यामितीय आकृतियां चुनें।'
                        : 'Select an aesthetic language matching the architectural rhythm of your ceiling.'}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {styles.map((st) => {
                      const isSelected = state.style === st.name;
                      return (
                        <button
                          key={st.name}
                          type="button"
                          onClick={() => setState(prev => ({ ...prev, style: st.name }))}
                          className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between gap-4 ${
                            isSelected
                              ? 'bg-[#FAF6EE] border-[#9E7B35] shadow-xs ring-1 ring-[#9E7B35]'
                              : 'bg-[#FAF8F5] border-[#E5E0D5] hover:border-[#9E7B35]/50'
                          }`}
                        >
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-serif text-base font-medium text-[#1C1917]">
                                {language === 'hi' ? st.nameHi : st.name}
                              </span>
                            </div>
                            <p className="text-xs text-[#57534E] font-light leading-relaxed">
                              {language === 'hi' ? st.descHi : st.desc}
                            </p>
                          </div>

                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                            isSelected ? 'bg-[#9E7B35] border-[#9E7B35] text-white' : 'border-[#DCD5C8] bg-white'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Artisanal Finishes */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="border-b border-[#F0ECE1] pb-4">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#9E7B35] block mb-1">
                      {language === 'hi' ? 'चरण 3: भट्टी शिल्प व धातु' : 'Step 3: Glass & Metal Materiality'}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#1C1917]">
                      {language === 'hi' ? '1,450°C भट्टी ग्लास व धातु फिनिश' : 'Furnace Glass & Metal Finishes'}
                    </h3>
                    <p className="text-xs text-[#57534E] font-light mt-1">
                      {language === 'hi'
                        ? 'माउथ-ब्लोन बोरोसिलिकेट और शैंपेन ब्रास के प्रीमियम कॉम्बिनेशन का चयन करें।'
                        : 'Pair hand-blown optical glass finishes with precision CNC-machined metal alloys.'}
                    </p>
                  </div>

                  {/* Glass Texture Selection */}
                  <div>
                    <label className="text-xs font-semibold text-[#1C1917] block mb-2.5">
                      {language === 'hi' ? 'माउथ-ब्लोन ग्लास क्राफ्ट फिनिश' : 'Mouth-Blown Furnace Glass Texture'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {glassFinishes.map((gf) => {
                        const isSelected = state.glassFinish === gf.name;
                        return (
                          <button
                            key={gf.name}
                            type="button"
                            onClick={() => setState(prev => ({ ...prev, glassFinish: gf.name }))}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center space-x-3 ${
                              isSelected
                                ? 'bg-[#FAF6EE] border-[#9E7B35] ring-1 ring-[#9E7B35]'
                                : 'bg-[#FAF8F5] border-[#E5E0D5] hover:border-[#9E7B35]/50'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gf.color} shrink-0 border border-black/10 shadow-xs`} />
                            <div className="flex-1">
                              <span className="text-xs font-semibold text-[#1C1917] block leading-tight">
                                {language === 'hi' ? gf.nameHi : gf.name}
                              </span>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-[#9E7B35]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Metal Alloy Selection */}
                  <div>
                    <label className="text-xs font-semibold text-[#1C1917] block mb-2.5">
                      {language === 'hi' ? 'आर्किटेक्चरल मेटल चेसिस फिनिश' : 'Architectural Canopy & Metal Finish'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {metalFinishes.map((mf) => {
                        const isSelected = state.metalFinish === mf.name;
                        return (
                          <button
                            key={mf.name}
                            type="button"
                            onClick={() => setState(prev => ({ ...prev, metalFinish: mf.name }))}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center space-x-3 ${
                              isSelected
                                ? 'bg-[#FAF6EE] border-[#9E7B35] ring-1 ring-[#9E7B35]'
                                : 'bg-[#FAF8F5] border-[#E5E0D5] hover:border-[#9E7B35]/50'
                            }`}
                          >
                            <div
                              className="w-8 h-8 rounded-lg shrink-0 border border-black/10 shadow-xs"
                              style={{ backgroundColor: mf.tone }}
                            />
                            <div className="flex-1">
                              <span className="text-xs font-semibold text-[#1C1917] block leading-tight">
                                {language === 'hi' ? mf.nameHi : mf.name}
                              </span>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-[#9E7B35]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Lighting & Budget */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="border-b border-[#F0ECE1] pb-4">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#9E7B35] block mb-1">
                      {language === 'hi' ? 'चरण 4: लाइटिंग व बजट' : 'Step 4: Photometrics & Budget'}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#1C1917]">
                      {language === 'hi' ? 'कलर टेम्परेचर व परियोजना बजट' : 'Color Kelvin & Target Budget'}
                    </h3>
                    <p className="text-xs text-[#57534E] font-light mt-1">
                      {language === 'hi'
                        ? 'हॉस्पिटैलिटी मानकों के अनुसार 2700K वार्म एम्बिएंट और डिमिंग प्रोटोकॉल निर्धारित करें।'
                        : 'Define the photometric Kelvin range and anticipated investment tier for structural scope.'}
                    </p>
                  </div>

                  {/* Color Temp Selection */}
                  <div>
                    <label className="text-xs font-semibold text-[#1C1917] block mb-2.5">
                      {language === 'hi' ? 'लाइटिंग कलर टेम्परेचर (CCT)' : 'Architectural Color Temperature (CCT)'}
                    </label>
                    <div className="space-y-2.5">
                      {colorTemps.map((ct) => {
                        const isSelected = state.colorTemperature === ct.label;
                        return (
                          <button
                            key={ct.label}
                            type="button"
                            onClick={() => setState(prev => ({ ...prev, colorTemperature: ct.label }))}
                            className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between gap-3 ${
                              isSelected
                                ? 'bg-[#FAF6EE] border-[#9E7B35] ring-1 ring-[#9E7B35]'
                                : 'bg-[#FAF8F5] border-[#E5E0D5] hover:border-[#9E7B35]/50'
                            }`}
                          >
                            <div className="space-y-0.5">
                              <span className="text-xs font-semibold text-[#1C1917] block">
                                {language === 'hi' ? ct.labelHi : ct.label}
                              </span>
                              <span className="text-[10px] text-[#78716C] block">
                                {ct.desc}
                              </span>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-[#9E7B35] shrink-0 mt-0.5" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Target Budget Tiers */}
                  <div>
                    <label className="text-xs font-semibold text-[#1C1917] block mb-2.5">
                      {language === 'hi' ? 'लक्षित बजट सीमा' : 'Target Project Scale / Budget'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {budgetTiers.map((bt) => {
                        const isSelected = state.targetBudget === bt.range;
                        return (
                          <button
                            key={bt.range}
                            type="button"
                            onClick={() => setState(prev => ({ ...prev, targetBudget: bt.range }))}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#FAF6EE] border-[#9E7B35] ring-1 ring-[#9E7B35]'
                                : 'bg-[#FAF8F5] border-[#E5E0D5] hover:border-[#9E7B35]/50'
                            }`}
                          >
                            <span className="text-xs font-mono font-bold text-[#1C1917] block">
                              {bt.range}
                            </span>
                            <span className="text-[10px] text-[#78716C] block mt-0.5">
                              {bt.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: Summary & Final Review */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="border-b border-[#F0ECE1] pb-4">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#9E7B35] block mb-1">
                      {language === 'hi' ? 'चरण 5: कॉन्फ़िगरेशन पूर्ण' : 'Step 5: Master Specification Review'}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#1C1917]">
                      {language === 'hi' ? 'वास्तुशिल्प विशिष्टता पत्र' : 'Bespoke Architectural Proposal'}
                    </h3>
                    <p className="text-xs text-[#57534E] font-light mt-1">
                      {language === 'hi'
                        ? 'सभी मापदंड सफलतापूर्वक संकलित कर लिए गए हैं। आप इसे आधिकारिक पूछताछ में जोड़ सकते हैं।'
                        : 'Your complete bespoke chandelier parameters are ready for engineering review and quotation.'}
                    </p>
                  </div>

                  {/* Summary Metric Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D5]">
                    <div>
                      <span className="text-[10px] text-[#78716C] uppercase font-semibold block">Ceiling Drop</span>
                      <span className="text-base font-serif font-bold text-[#1C1917] mt-0.5 block">{estimatedDropFeet} ft</span>
                      <span className="text-[10px] text-[#78716C] block">~{Math.round(estimatedDropFeet * 0.3048)}m</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-[#78716C] uppercase font-semibold block">Elements</span>
                      <span className="text-base font-serif font-bold text-[#9E7B35] mt-0.5 block">~{elementCountEstimate.toLocaleString()}</span>
                      <span className="text-[10px] text-[#78716C] block">Hand-Blown Drops</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-[#78716C] uppercase font-semibold block">Rigging Load</span>
                      <span className="text-base font-serif font-bold text-[#1C1917] mt-0.5 block">~{estimatedWeightKg} kg</span>
                      <span className="text-[10px] text-[#78716C] block">5x Safety Factor</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-[#78716C] uppercase font-semibold block">Power Watts</span>
                      <span className="text-base font-serif font-bold text-[#1C1917] mt-0.5 block">~{estimatedPowerWatts}W</span>
                      <span className="text-[10px] text-[#78716C] block">DALI-2 @ 24V</span>
                    </div>
                  </div>

                  {/* Parameter Checklist */}
                  <div className="space-y-2 text-xs text-[#57534E]">
                    <div className="flex justify-between py-2 border-b border-[#F0ECE1]">
                      <span className="text-[#78716C] font-medium">{language === 'hi' ? 'स्थान प्रकार' : 'Space Typology'}:</span>
                      <span className="font-semibold text-[#1C1917]">{state.roomType}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#F0ECE1]">
                      <span className="text-[#78716C] font-medium">{language === 'hi' ? 'मूर्तिकला शैली' : 'Sculptural Form'}:</span>
                      <span className="font-semibold text-[#1C1917]">{state.style}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#F0ECE1]">
                      <span className="text-[#78716C] font-medium">{language === 'hi' ? 'ग्लास टेक्सचर' : 'Glass Texture'}:</span>
                      <span className="font-semibold text-[#9E7B35]">{state.glassFinish}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#F0ECE1]">
                      <span className="text-[#78716C] font-medium">{language === 'hi' ? 'कैनोपी एलॉय' : 'Metal Canopy'}:</span>
                      <span className="font-semibold text-[#1C1917]">{state.metalFinish}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#F0ECE1]">
                      <span className="text-[#78716C] font-medium">{language === 'hi' ? 'CCT केल्विन' : 'Lighting Engine'}:</span>
                      <span className="font-semibold text-[#1C1917]">{state.colorTemperature}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step Navigation Controls (Prev / Next) */}
            <div className="flex items-center justify-between pt-6 border-t border-[#F0ECE1] mt-6">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`px-4 py-2.5 rounded-xs border text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-2 cursor-pointer ${
                  currentStep === 1
                    ? 'border-[#E5E0D5] text-[#A8A29E] opacity-50 cursor-not-allowed'
                    : 'border-[#DCD5C8] bg-[#FAF8F5] text-[#1C1917] hover:border-[#9E7B35]'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'पिछला चरण' : 'Previous Step'}</span>
              </button>

              <div className="flex items-center space-x-2">
                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-[#1C1917] hover:bg-[#9E7B35] text-white font-semibold text-xs uppercase tracking-widest rounded-xs transition-all flex items-center space-x-2 shadow-xs cursor-pointer"
                  >
                    <span>{language === 'hi' ? 'अगला चरण' : 'Next Step'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => onOpenStartProject(buildSummaryText())}
                    className="px-6 py-2.5 bg-[#9E7B35] hover:bg-[#B38E46] text-white font-semibold text-xs uppercase tracking-widest rounded-xs transition-all flex items-center space-x-2 shadow-xs cursor-pointer"
                  >
                    <span>{language === 'hi' ? 'उद्धरण अनुरोध भेजें' : 'Request Official Quotation'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Right: Live Interactive Architectural Visualizer & Spec Box */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E0D5] shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D5] mb-6">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#9E7B35] flex items-center space-x-2">
                  <Box className="w-4 h-4" />
                  <span>{language === 'hi' ? 'लाइव विज़ुअल सिमुलेशन' : 'Live Drop Simulation'}</span>
                </span>
                <span className="text-[10px] bg-[#FAF6EE] text-[#9E7B35] border border-[#B38E46]/30 px-2.5 py-0.5 rounded font-mono font-semibold">
                  SUN LUMINOUS 3D v2.6
                </span>
              </div>

              {/* Dynamic Visual Atrium Rendering Simulation */}
              <div className="relative h-56 rounded-xl overflow-hidden border border-[#E5E0D5] mb-6 bg-gradient-to-b from-[#FAF8F5] via-[#F5F0E6] to-[#FAF8F5] flex flex-col items-center justify-between p-4 shadow-inner">
                {/* Ceiling canopy simulation bar */}
                <div className="w-3/4 h-2 bg-[#1C1917] rounded-full shadow-sm relative">
                  <div className="absolute inset-0 bg-[#9E7B35]/40 blur-xs rounded-full" />
                </div>

                {/* Ambient Glow & Matrix Animation */}
                <div className="relative z-10 text-center space-y-1.5 my-auto">
                  <span className="font-serif text-3xl sm:text-4xl font-light text-[#1C1917] block">
                    {estimatedDropFeet} ft Drop
                  </span>
                  <span className="text-xs text-[#9E7B35] block font-mono font-semibold">
                    ~{elementCountEstimate.toLocaleString()} Hand-Blown Crystals
                  </span>
                  <span className="text-[10px] text-[#57534E] block font-light">
                    {state.style}
                  </span>
                </div>

                {/* Bottom Spec Footer Pill */}
                <div className="w-full flex items-center justify-between text-[10px] text-[#78716C] border-t border-[#E5E0D5] pt-2 px-2">
                  <span>Glass: <strong className="text-[#1C1917]">{state.glassFinish.split(' ')[0]}</strong></span>
                  <span>Power: <strong className="text-[#1C1917]">{estimatedPowerWatts}W</strong></span>
                  <span>Load: <strong className="text-[#1C1917]">~{estimatedWeightKg}kg</strong></span>
                </div>
              </div>

              {/* Spec Attributes Breakdown */}
              <div className="space-y-2.5 text-xs text-[#57534E] font-light mb-6">
                <div className="flex justify-between py-1.5 border-b border-[#F0ECE1]">
                  <span className="text-[#78716C]">{language === 'hi' ? 'स्थान वर्ग' : 'Space Classification'}:</span>
                  <span className="font-medium text-[#1C1917]">{state.roomType}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#F0ECE1]">
                  <span className="text-[#78716C]">{language === 'hi' ? 'मूर्तिकला रूप' : 'Sculptural Form'}:</span>
                  <span className="font-medium text-[#1C1917]">{state.style}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#F0ECE1]">
                  <span className="text-[#78716C]">{language === 'hi' ? 'ग्लास फिनिश' : 'Glass Craft Finish'}:</span>
                  <span className="font-medium text-[#9E7B35]">{state.glassFinish}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#F0ECE1]">
                  <span className="text-[#78716C]">{language === 'hi' ? 'कैनोपी धातु' : 'Metal Canopy Frame'}:</span>
                  <span className="font-medium text-[#1C1917]">{state.metalFinish}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#F0ECE1]">
                  <span className="text-[#78716C]">{language === 'hi' ? 'लाइटिंग इंजन' : 'Lighting Engine'}:</span>
                  <span className="font-medium text-[#1C1917]">{state.colorTemperature}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-[#E5E0D5]">
              <button
                onClick={() => onOpenStartProject(buildSummaryText())}
                className="w-full py-3.5 bg-[#1C1917] hover:bg-[#9E7B35] text-white font-semibold text-xs uppercase tracking-widest rounded-xs transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
              >
                <span>{language === 'hi' ? 'विशिष्टता के साथ उद्धरण मांगें' : 'Request Quotation with Specs'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAiAssistant}
                className="w-full py-3 bg-[#FAF6EE] hover:bg-[#F5EEDD] text-[#9E7B35] text-xs font-semibold uppercase tracking-wider rounded-xs transition-all flex items-center justify-center space-x-2 border border-[#B38E46]/30 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'जेमिनी एआई से रणनीति परिष्कृत करें' : 'Refine Strategy with Gemini AI'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
