import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  Sparkles, 
  Layers, 
  Flame, 
  Wrench, 
  Zap, 
  Clock, 
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Plus,
  Minus
} from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export interface FAQItem {
  id: string;
  category: 'process' | 'materials' | 'engineering' | 'lighting' | 'logistics';
  question: string;
  questionHi: string;
  answer: string;
  answerHi: string;
  highlights?: string[];
  highlightsHi?: string[];
}

interface BespokeFAQProps {
  onOpenStartProject?: () => void;
}

export const bespokeFaqData: FAQItem[] = [
  {
    id: 'process-commissioning',
    category: 'process',
    question: 'How does the bespoke commissioning and design process work?',
    questionHi: 'अनुकूलित (Bespoke) कमीशनिंग और डिज़ाइन प्रक्रिया कैसे काम करती है?',
    answer: 'Every bespoke lighting sculpture begins with collaborative spatial analysis. Our design team reviews your architectural drawings (CAD/BIM/Revit), ceiling cross-sections, and aesthetic intent. We then develop 3D photorealistic spatial renders, material sample boards, and shop drawings. Once approved, our master glassblowers and metal engineers craft scale mockups before proceeding to full fabrication in our 1,450°C continuous glass furnace.',
    answerHi: 'हर बेस्पोक लाइटिंग मूर्तिकला की शुरुआत आपके स्पेस के आर्किटेक्चरल विश्लेषण से होती है। हमारी टीम आपके CAD/BIM ड्रॉइंग्स, सीलिंग लोड और विज़न का अध्ययन करती है। इसके बाद हम 3D रेंडर्स, मटीरियल सैंपल्स और शॉप ड्रॉइंग्स तैयार करते हैं। अप्रूवल के बाद हमारे मास्टर ग्लासब्लोअर 1,450°C भट्टी में निर्माण शुरू करते हैं।',
    highlights: ['Phase 1: Concept & BIM Integration', 'Phase 2: 3D Visualization & Glass Sample Box', 'Phase 3: Structural Engineering Calculations', 'Phase 4: Hand-Crafting & Quality Certification'],
    highlightsHi: ['चरण 1: संकल्पना व BIM इंटीग्रेशन', 'चरण 2: 3D विज़ुअलाइज़ेशन व ग्लास सैंपल', 'चरण 3: स्ट्रक्चरल इंजीनियरिंग व लोड गणना', 'चरण 4: भट्टी हस्तशिल्प व प्रमाणन']
  },
  {
    id: 'process-lead-times',
    category: 'process',
    question: 'What are typical production lead times for custom lighting installations?',
    questionHi: 'कस्टम लाइटिंग इंस्टॉलेशन के लिए सामान्य निर्माण समय (Lead Time) क्या है?',
    answer: 'Standard bespoke commissions generally require 8 to 12 weeks from final shop drawing and sample approval to dispatch. For monumental architectural installations exceeding 30 feet in height (such as grand hotel atriums with 2,000+ hand-blown elements), lead times typically range from 14 to 18 weeks. We also offer expedited VIP production lanes for high-priority luxury hospitality openings.',
    answerHi: 'शॉप ड्रॉइंग और सैंपल अप्रूवल के बाद सामान्य बेस्पोक प्रोजेक्ट्स में 8 से 12 सप्ताह का समय लगता है। 30 फीट से ऊंचे भव्य एट्रियम इंस्टॉलेशन (2,000+ ग्लास तत्वों वाले) के लिए 14 से 18 सप्ताह का समय आवश्यक होता है। विशेष प्रोजेक्ट्स के लिए त्वरित निर्माण सुविधा भी उपलब्ध है।',
    highlights: ['Bespoke Chandeliers: 8-12 Weeks', 'Monumental Atriums: 14-18 Weeks', 'Custom Finishes/Samples: 10-14 Business Days'],
    highlightsHi: ['बेस्पोक झाड़फानूस: 8-12 सप्ताह', 'भव्य एट्रियम स्कल्प्चर्स: 14-18 सप्ताह', 'कस्टम फिनिश व सैंपल्स: 10-14 कार्य दिवस']
  },
  {
    id: 'materials-glass-types',
    category: 'materials',
    question: 'What types of glass and furnace techniques does SUN LUMINOUS specialize in?',
    questionHi: 'SUN LUMINOUS किन प्रकार के ग्लास और भट्टी तकनीकों में महारत रखता है?',
    answer: 'We operate dedicated 1,450°C continuous melt furnaces specializing in mouth-blown borosilicate crystal, ultra-clear low-iron optical crystal, slumped fused glass ribbons, and artisanal seeded/bubble textures. Our glassmakers employ traditional Bohemian and Venetian blowing disciplines, including submerged gold-leaf inclusions, metallic fuming, gradient amber tinting, and hand-carved facets.',
    answerHi: 'हम 1,450°C निरंतर भट्टी में माउथ-ब्लोन बोरोसिलिकेट क्रिस्टल, अल्ट्रा-क्लियर लो-आयरन ऑप्टिकल क्रिस्टल, स्लम्प्ड फ्यूज्ड ग्लास रिबन और आर्टिसनल बबल्ड टेक्सचर तैयार करते हैं। इसमें गोल्ड-लीफ इनक्लूसन, मेटैलिक फ्यूमिंग और हैंड-कट नक्काशी शामिल है।',
    highlights: ['Ultra-Clear Low-Iron Crystal (99.8% Transmittance)', 'Hand-Blown Borosilicate Drops & Spheres', '24k Gold & Silver Leaf Infusions', 'Cast & Slumped Textured Glass Plates'],
    highlightsHi: ['अल्ट्रा-क्लियर लो-आयरन क्रिस्टल (99.8% पारदर्शिता)', 'हस्तनिर्मित बोरोसिलिकेट ड्रॉप्स व स्फीयर्स', '24k गोल्ड व सिल्वर लीफ इन्फ्यूज़न', 'कास्ट व स्लम्प्ड टेक्सचर्ड ग्लास']
  },
  {
    id: 'materials-metal-finishes',
    category: 'materials',
    question: 'Can metal canopies, rods, and suspension hardware be custom-finished?',
    questionHi: 'क्या मेटल कैनोपी, रॉड्स और हैंगिंग हार्डवेयर को कस्टम फिनिश किया जा सकता है?',
    answer: 'Yes. All suspension hardware, flush-mount canopies, and internal armatures are CNC-machined from architectural-grade 304/316 stainless steel, marine-grade aluminum, or solid brass. Finishes include Champagne Gold PVD, Brushed Antique Bronze, Matte Charcoal, Mirror Chrome, and electroplated artisan patinas treated with anti-tarnish protective coatings.',
    answerHi: 'हाँ। सभी सस्पेंशन हार्डवेयर, कैनोपी और आर्मेचर आर्किटेक्चरल-ग्रेड स्टेनलेस स्टील (304/316), मरीन-ग्रेड एल्यूमीनियम या सॉलिड ब्रास से तैयार किए जाते हैं। इसमें शैंपेन गोल्ड PVD, ब्रश्ड एंटीक ब्रॉन्ज, मैट चारकोल और एंटी-टार्निश कोटिंग्स शामिल हैं।',
    highlights: ['Champagne Gold PVD & Brushed Brass', 'Marine-Grade 316 Stainless Steel for Coastlines', 'Hand-Rubbed Antique Oil Patinas', 'Custom RAL Powder Coating Matches'],
    highlightsHi: ['शैंपेन गोल्ड PVD व ब्रश्ड ब्रास', 'तटीय क्षेत्रों हेतु मरीन-ग्रेड 316 स्टेनलेस स्टील', 'हस्तनिर्मित एंटीक ऑयल पेटिना', 'कस्टम RAL पाउडर कोटिंग मैच']
  },
  {
    id: 'engineering-structural',
    category: 'engineering',
    question: 'How do you engineer structural safety for high-atrium and heavy installations?',
    questionHi: 'ऊंचे एट्रियम और भारी इंस्टॉलेशन के लिए आप स्ट्रक्चरल सुरक्षा कैसे सुनिश्चित करते हैं?',
    answer: 'Safety is paramount. Every SUN LUMINOUS installation includes certified structural engineering load calculations stamped for your building code jurisdiction. We utilize aircraft-grade 7x19 stainless steel braided cables with 5x safety factor break-strength ratings. Ceiling canopy subframes are engineered with seismic dampers, internal load distribution beams, and modular wiring harnesses for effortless installation.',
    answerHi: 'सुरक्षा हमारी सर्वोच्च प्राथमिकता है। हर प्रोजेक्ट में प्रमाणित स्ट्रक्चरल लोड गणना शामिल होती है। हम 5x सेफ्टी फैक्टर वाली एयरक्राफ्ट-ग्रेड स्टेनलेस स्टील केबल्स और भूकंप-रोधी सिस्मिक डैम्पर्स का उपयोग करते हैं।',
    highlights: ['5x Safety Factor Aircraft-Grade Cables', 'Certified Structural PE Stamped Calculations', 'Seismic & Sway Damping Engineering', 'Modular Pre-Wired Sub-Frame Assembly'],
    highlightsHi: ['5x सुरक्षा गुणांक वाली एयरक्राफ्ट केबल्स', 'प्रमाणित स्ट्रक्चरल लोड गणना', 'भूकंप व कंपन-रोधी इंजीनियरिंग', 'मॉड्यूलर प्री-वायर्ड सब-फ्रेम असेंबली']
  },
  {
    id: 'engineering-site-support',
    category: 'engineering',
    question: 'Do you provide on-site installation supervision and international deployment?',
    questionHi: 'क्या आप साइट पर इंस्टॉलेशन सुपरविज़न और अंतरराष्ट्रीय सेवाएं प्रदान करते हैं?',
    answer: 'Yes. We offer turnkey global deployment. Our senior installation engineers can be deployed on-site worldwide to direct rigging, hoist synchronization, glass placement, electrical commissioning, and scene programming. We also provide full 1:1 scale drilling templates, sequenced component numbering, and detailed 3D step-by-step installation manuals.',
    answerHi: 'हाँ। हमारे वरिष्ठ इंस्टॉलेशन इंजीनियर्स विश्वभर में साइट पर जाकर रिगिंग, ग्लास हैंगिंग, वायरिंग और लाइटिंग प्रोग्रामिंग का सुपरविज़न करते हैं। साथ ही 1:1 ड्रिलिंग टेम्प्लेट और 3D मैनुअल प्रदान किए जाते हैं।',
    highlights: ['Turnkey On-Site Master Installation Crews', 'Full 1:1 Scale Canopy Drilling Templates', 'Sequenced & Color-Coded Component Packing', 'Worldwide Rigging & Hoist Coordination'],
    highlightsHi: ['साइट पर टर्नकी मास्टर इंस्टॉलेशन टीम', '1:1 स्केल कैनोपी ड्रिलिंग टेम्प्लेट', 'क्रमांक-वार व सुरक्षित पैकिंग', 'वैश्विक रिगिंग व होइस्ट समन्वय']
  },
  {
    id: 'lighting-dimming',
    category: 'lighting',
    question: 'Which architectural dimming and smart control systems are supported?',
    questionHi: 'कौन से आर्किटेक्चरल डिमिंग और स्मार्ट कंट्रोल सिस्टम्स सपोर्ट किए जाते हैं?',
    answer: 'Our bespoke fixtures are engineered with high-efficiency architectural LEDs (CRI 95+, R9 > 85, MacAdam 2-step binning). We provide native drivers compatible with DALI-2, 0-10V, Lutron HomeWorks / Athena, KNX, Casambi Bluetooth Mesh, Phase TRIAC, and DMX512 for dynamic architectural staging. Tunable white (1800K–4000K) and warm-dimming options are standard.',
    answerHi: 'हमारे फिक्स्चर उच्च-गुणवत्ता वाले आर्किटेक्चरल LEDs (CRI 95+, MacAdam 2-step) से लैस हैं। यह DALI-2, 0-10V, Lutron HomeWorks, KNX, Casambi और DMX512 सिस्टम्स के साथ पूरी तरह संगत हैं। ट्यूनेबल व्हाइट (1800K–4000K) और वार्म-डिमिंग विकल्प उपलब्ध हैं।',
    highlights: ['DALI-2, Lutron, KNX & 0-10V Native Integration', 'Casambi Wireless Bluetooth Mesh Controls', 'Tunable White 1800K – 4000K & Warm-Dim', 'Ultra-Smooth 0.1% Flicker-Free Dimming'],
    highlightsHi: ['DALI-2, Lutron, KNX व 0-10V कम्पैटिबिलिटी', 'कसांबी (Casambi) वायरलेस मेश कंट्रोल', 'ट्यूनेबल व्हाइट 1800K–4000K व वार्म-डिम', '0.1% फ्लिकर-फ्री स्मूथ डिमिंग']
  },
  {
    id: 'logistics-spares-maintenance',
    category: 'logistics',
    question: 'Are spare glass elements included, and how is long-term maintenance handled?',
    questionHi: 'क्या अतिरिक्त (Spare) ग्लास तत्व साथ आते हैं और रखरखाव कैसे होता है?',
    answer: 'Every custom installation ships with a curated "Atelier Spares Vault" containing +5% to +10% surplus mouth-blown crystal elements, extra silicone gaskets, spare LED pucks, and precision hanging cables at no additional charge. We also supply custom microfiber cleaning mitts, antistatic crystal spray formulas, and scheduled maintenance guides for hotel engineering departments.',
    answerHi: 'प्रत्येक इंस्टॉलेशन के साथ 5% से 10% अतिरिक्त हस्तनिर्मित क्रिस्टल तत्व, स्पेयर LED पक्स और हैंगिंग केबल्स बिना किसी अतिरिक्त शुल्क के "स्पेयर वॉल्ट" में दिए जाते हैं। साथ ही विशेष माइक्रोफाइबर ग्लव्स और सफाई गाइड भी शामिल हैं।',
    highlights: ['+5% to +10% Spare Hand-Blown Crystals Included', 'Plug-and-Play Quick-Disconnect LED Modules', 'Specialist Non-Abrasive Cleaning Protocol Kits', '5-Year Comprehensive Architectural Warranty'],
    highlightsHi: ['+5% से +10% अतिरिक्त क्रिस्टल्स शामिल', 'प्लग-एंड-प्ले त्वरित रिप्लेसमेंट LED मॉड्यूल्स', 'विशेष गैर-अपघर्षक क्लीनिंग किट्स', '5 वर्ष की व्यापक वास्तुशिल्प वारंटी']
  }
];

export const BespokeFAQ: React.FC<BespokeFAQProps> = ({ onOpenStartProject }) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['process-commissioning']));

  const categoryTabs = [
    { id: 'all', label: 'All Questions', labelHi: 'सभी प्रश्न', icon: HelpCircle },
    { id: 'process', label: 'Design & Process', labelHi: 'डिज़ाइन व प्रक्रिया', icon: Clock },
    { id: 'materials', label: 'Glass & Craft', labelHi: 'ग्लास व शिल्प', icon: Flame },
    { id: 'engineering', label: 'Engineering & Safety', labelHi: 'इंजीनियरिंग व सुरक्षा', icon: Wrench },
    { id: 'lighting', label: 'Lighting & Controls', labelHi: 'लाइटिंग व कंट्रोल्स', icon: Zap },
    { id: 'logistics', label: 'Spares & Warranty', labelHi: 'स्पेयर व वारंटी', icon: ShieldCheck },
  ];

  const filteredFaqs = useMemo(() => {
    return bespokeFaqData.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const questionText = (language === 'hi' ? item.questionHi : item.question).toLowerCase();
      const answerText = (language === 'hi' ? item.answerHi : item.answer).toLowerCase();
      const highlightsText = (language === 'hi' ? item.highlightsHi : item.highlights)?.join(' ').toLowerCase() || '';

      return questionText.includes(q) || answerText.includes(q) || highlightsText.includes(q);
    });
  }, [selectedCategory, searchQuery, language]);

  const toggleItem = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(filteredFaqs.map(f => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  return (
    <div id="bespoke-faq" className="w-full max-w-5xl mx-auto my-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 text-[#9E7B35] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'विशेषज्ञ ज्ञान केंद्र' : 'Atelier Knowledge Base'}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1917] tracking-tight mb-4">
          {language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Bespoke Lighting FAQ'}
        </h2>
        <p className="text-sm sm:text-base text-[#57534E] max-w-2xl mx-auto font-light leading-relaxed">
          {language === 'hi'
            ? 'कमीशनिंग प्रक्रिया, 1,450°C भट्टी ग्लास, स्ट्रक्चरल लोड इंजीनियरिंग, और DALI/Lutron कंट्रोल से संबंधित सामान्य प्रश्नों के उत्तर।'
            : 'Answers to common questions from architects, interior designers, and estate owners regarding commissioning, furnace craft, load engineering, and controls.'}
        </p>
      </div>

      {/* Search Bar & Category Navigation */}
      <div className="space-y-4 mb-8">
        {/* Search Input */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78716C]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'hi'
                ? 'प्रश्न खोजें (उदा. DALI, लीड टाइम, एट्रियम, वारंटी, ग्लास)...'
                : 'Search questions (e.g. DALI, lead time, atrium drop, materials, warranty)...'
            }
            className="w-full pl-11 pr-4 py-3 bg-white border border-[#E5E0D5] rounded-lg text-xs sm:text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#9E7B35] focus:ring-1 focus:ring-[#9E7B35] transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#78716C] hover:text-[#1C1917] bg-[#F5F2EB] px-2 py-0.5 rounded cursor-pointer"
            >
              {language === 'hi' ? 'हटाएं' : 'Clear'}
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedCategory === tab.id;
            const label = language === 'hi' ? tab.labelHi : tab.label;

            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`relative px-3.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-[#1C1917] text-white shadow-sm'
                    : 'bg-white text-[#57534E] border border-[#E5E0D5] hover:border-[#9E7B35] hover:text-[#1C1917]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#EADBBE]' : 'text-[#9E7B35]'}`} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Expand / Collapse Actions & Count */}
        <div className="flex items-center justify-between text-xs text-[#78716C] px-2 pt-2 border-b border-[#E5E0D5] pb-3">
          <span>
            {language === 'hi' 
              ? `${filteredFaqs.length} प्रश्न उपलब्ध`
              : `Showing ${filteredFaqs.length} questions`}
          </span>

          <div className="flex items-center space-x-4">
            <button
              onClick={expandAll}
              className="hover:text-[#9E7B35] font-medium transition-colors cursor-pointer flex items-center space-x-1"
            >
              <Plus className="w-3 h-3" />
              <span>{language === 'hi' ? 'सभी खोलें' : 'Expand All'}</span>
            </button>
            <span className="text-[#DCD5C8]">|</span>
            <button
              onClick={collapseAll}
              className="hover:text-[#9E7B35] font-medium transition-colors cursor-pointer flex items-center space-x-1"
            >
              <Minus className="w-3 h-3" />
              <span>{language === 'hi' ? 'सभी बंद करें' : 'Collapse All'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-[#E5E0D5] p-6 shadow-xs">
            <HelpCircle className="w-10 h-10 text-[#9E7B35] mx-auto mb-3 opacity-60" />
            <h4 className="font-serif text-lg text-[#1C1917] mb-1">
              {language === 'hi' ? 'कोई प्रश्न नहीं मिला' : 'No matching questions found'}
            </h4>
            <p className="text-xs text-[#57534E] mb-4">
              {language === 'hi'
                ? 'कृपया अन्य शब्दों से खोजें या हमारी सीधे इंजीनियरिंग डेस्क से संपर्क करें।'
                : 'Try refining your search keyword or reach out directly to our engineering desk.'}
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#FAF8F5] border border-[#DCD5C8] rounded text-xs font-semibold uppercase text-[#1C1917] hover:border-[#9E7B35] cursor-pointer"
            >
              {language === 'hi' ? 'सभी प्रश्न रीसेट करें' : 'Reset Search'}
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIds.has(faq.id);
            const question = language === 'hi' ? faq.questionHi : faq.question;
            const answer = language === 'hi' ? faq.answerHi : faq.answer;
            const highlights = language === 'hi' ? faq.highlightsHi : faq.highlights;

            return (
              <motion.div
                key={faq.id}
                initial={false}
                className={`rounded-xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? 'border-[#9E7B35] shadow-md ring-1 ring-[#9E7B35]/20'
                    : 'border-[#E5E0D5] hover:border-[#C4B9A7] shadow-xs'
                }`}
              >
                {/* Accordion Question Header Button */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors"
                >
                  <div className="flex items-start gap-3.5 flex-1">
                    <span className={`text-xs font-serif font-semibold mt-0.5 px-2 py-0.5 rounded transition-colors ${
                      isOpen ? 'bg-[#9E7B35] text-white' : 'bg-[#F5F2EB] text-[#78716C]'
                    }`}>
                      Q{index + 1}
                    </span>
                    <h3 className={`font-serif text-base sm:text-lg leading-snug transition-colors ${
                      isOpen ? 'text-[#9E7B35] font-normal' : 'text-[#1C1917] font-normal hover:text-[#9E7B35]'
                    }`}>
                      {question}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#FAF6EE] text-[#9E7B35]' : 'bg-[#F5F2EB] text-[#78716C]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Collapsible Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#F0ECE1] space-y-4">
                        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light font-sans">
                          {answer}
                        </p>

                        {/* Bullet Key Highlights */}
                        {highlights && highlights.length > 0 && (
                          <div className="pt-2">
                            <div className="text-[10px] uppercase tracking-wider font-semibold text-[#9E7B35] mb-2">
                              {language === 'hi' ? 'मुख्य विशिष्टताएं' : 'Key Specifications & Highlights'}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {highlights.map((h, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="flex items-center space-x-2 text-xs text-[#1C1917] bg-[#FAF8F5] p-2 rounded border border-[#EADBBE]/50"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7B35] shrink-0" />
                                  <span className="font-medium">{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Accordion Footer Support Banner */}
      <div className="mt-10 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#FAF8F5] to-[#F5F0E6] border border-[#E0D7C6] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-serif text-lg font-light text-[#1C1917]">
            {language === 'hi'
              ? 'क्या आपके पास कोई विशेष वास्तुशिल्प प्रश्न है?'
              : 'Have a specific architectural or engineering inquiry?'}
          </h4>
          <p className="text-xs text-[#57534E] font-light max-w-md">
            {language === 'hi'
              ? 'हमारी डिज़ाइन व इंजीनियरिंग टीम सीधे आपके CAD ड्रॉइंग्स, सीलिंग लोड और स्पेसिफिकेशन्स की समीक्षा के लिए उपलब्ध है।'
              : 'Our master engineering team is ready to review your CAD files, ceiling load constraints, and bespoke project specifications.'}
          </p>
        </div>

        {onOpenStartProject && (
          <button
            onClick={onOpenStartProject}
            className="px-6 py-3 bg-[#1C1917] hover:bg-[#9E7B35] text-white font-semibold text-xs uppercase tracking-widest rounded-xs transition-all flex items-center space-x-2 shrink-0 shadow-xs cursor-pointer"
          >
            <span>{language === 'hi' ? 'परियोजना शुरू करें' : 'Commission a Project'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
