import React from 'react';
import { ArrowUpRight, Flame, ShieldCheck, Mail, MapPin, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenStartProject: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenStartProject,
  onOpenAdmin,
}) => {
  const { t, language } = useLanguage();

  // WhatsApp concierge pre-filled message
  const whatsappNumber = '919820188472';
  const whatsappDefaultMsg = encodeURIComponent(
    language === 'hi'
      ? 'नमस्ते SUN LUMINOUS टीम, मैं एक लक्जरी वास्तुशिल्प/इंटीरियर प्रोजेक्ट के लिए बेस्पोक लाइटिंग कमीशनिंग और कैटलॉग के संबंध में चर्चा करना चाहता/चाहती हूँ।'
      : 'Hello SUN LUMINOUS Concierge, I would like to inquire about commissioning a bespoke architectural lighting sculpture / chandelier for an upcoming project.'
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappDefaultMsg}`;

  return (
    <footer className="bg-[#F5F2EB] text-[#1C1917] border-t border-[#E5E0D5] pt-16 pb-12 relative z-20">
      {/* Decorative Top Accent Strip matching design */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 pb-8 border-b border-[#E5E0D5] flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap gap-8 sm:gap-16">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#9E7B35] font-semibold mb-1">
              {language === 'hi' ? 'ग्लोबल रीच' : 'Global Reach'}
            </span>
            <span className="text-sm tracking-tight uppercase font-medium text-[#1C1917]">50+ {language === 'hi' ? 'वैश्विक ब्रांड्स' : 'International Brands'}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#9E7B35] font-semibold mb-1">
              {language === 'hi' ? 'भट्टी शिल्प' : 'Craftsmanship'}
            </span>
            <span className="text-sm tracking-tight uppercase font-medium text-[#1C1917]">1,450°C Glass Fusing</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#9E7B35] font-semibold mb-1">
              {language === 'hi' ? 'पोर्टफोलियो' : 'Portfolio'}
            </span>
            <span className="text-sm tracking-tight uppercase font-medium text-[#1C1917]">5,000+ Custom Works</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-widest text-[#78716C] font-sans">
            {language === 'hi' ? 'प्रकाश शिल्प उत्कृष्टता' : 'Pure Illumination Alchemy'}
          </span>
          <div className="w-8 h-[1.5px] bg-[#9E7B35]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 border border-[#9E7B35] bg-white flex items-center justify-center text-[#9E7B35] font-serif text-lg font-bold shadow-xs">
                S
              </span>
              <span className="font-serif text-2xl font-light tracking-[0.2em] text-[#1C1917]">
                SUN LUMINOUS
              </span>
            </div>

            <p className="text-xs text-[#57534E] font-light leading-relaxed max-w-sm">
              {language === 'hi'
                ? 'लक्जरी बेस्पोक डेकोरेटिव लाइटिंग, मूर्तिकला इंस्टॉलेशन, ग्लास आर्ट और वास्तुशिल्प मास्टरवर्क्स। 1,450°C भट्टी ग्लासब्लोइंग और प्रिसिजन मेटल इंजीनियरिंग द्वारा निर्मित।'
                : 'Luxury bespoke decorative lighting, sculptural installations, glass art, and architectural masterworks. Handcrafted with 1,450°C furnace glassblowing and precision metal engineering.'}
            </p>

            <div className="pt-3 text-xs text-[#57534E] space-y-1.5 border-t border-[#E5E0D5]">
              <div className="text-[11px] uppercase tracking-wider text-[#9E7B35] font-semibold">
                {language === 'hi' ? 'सीधा संपर्क (हॉस्पिटैलिटी व डिज़ाइन):' : 'Direct Hospitality & ID Desk:'}
              </div>
              <div className="text-[#1C1917] font-medium">
                {language === 'hi' ? 'सुश्री अनन्या शर्मा (प्रमुख - हॉस्पिटैलिटी एवं बेस्पोक)' : 'Ms. Ananya Sharma (Head of Hospitality & Bespoke)'}
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#9E7B35]" />
                <span className="text-[#1C1917] font-medium">+91 98201 88472 &nbsp;|&nbsp; +91 98110 54291</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#9E7B35]" />
                <span className="text-[#1C1917]">concierge@sunluminous.com</span>
              </div>
              <div className="flex items-center space-x-2 text-[#78716C]">
                <MapPin className="w-3.5 h-3.5 text-[#9E7B35]" />
                <span>India Blowing Centre & Global Atelier (Delhi • Mumbai • London • Dubai)</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9E7B35] mb-4">
              {language === 'hi' ? 'वास्तुशिल्प स्टूडियो' : 'Architectural Studio'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#57534E] font-medium">
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-[#9E7B35] transition-colors cursor-pointer">
                  {t('nav.projects', 'Portfolio Projects')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('materials')} className="hover:text-[#9E7B35] transition-colors cursor-pointer">
                  {t('nav.materials', 'Materiality & Glass')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('configurator')} className="hover:text-[#9E7B35] transition-colors cursor-pointer">
                  {t('nav.configurator', 'Studio Configurator')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('showroom')} className="hover:text-[#9E7B35] transition-colors cursor-pointer">
                  {t('nav.showroom', '360° Virtual Showroom')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collections')} className="hover:text-[#9E7B35] transition-colors cursor-pointer">
                  {t('nav.collections', 'Sculptural Objects')}
                </button>
              </li>
            </ul>
          </div>

          {/* Professional Resources */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9E7B35] mb-4">
              {language === 'hi' ? 'संसाधन व शिल्प' : 'Resources & Craft'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#57534E] font-medium">
              <li>
                <button onClick={() => onNavigate('architects')} className="hover:text-[#9E7B35] transition-colors cursor-pointer">
                  {t('nav.architects', 'Architects & BIM Portal')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('client-portal')} className="hover:text-[#9E7B35] font-semibold text-[#8C6D2D] transition-colors flex items-center space-x-1 cursor-pointer">
                  <span>Client Access Portal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('manufacturing')} className="hover:text-[#9E7B35] transition-colors cursor-pointer">
                  {t('nav.manufacturing', '1,450°C Glass Furnace')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('journal')} className="hover:text-[#9E7B35] transition-colors cursor-pointer">
                  {t('nav.journal', 'Editorial Journal')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#9E7B35] transition-colors cursor-pointer">
                  {t('nav.about', 'About SUN LUMINOUS')}
                </button>
              </li>
            </ul>
          </div>

          {/* Inquiry & Direct WhatsApp Concierge Action */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9E7B35] mb-2">
                {language === 'hi' ? 'परियोजना आयोग' : 'Commissions & Concierge'}
              </h4>
              <p className="text-xs text-[#57534E] font-light mb-3 leading-relaxed">
                {language === 'hi'
                  ? 'क्या आपके पास कोई आगामी लक्जरी होटल, विला या एट्रियम प्रोजेक्ट है?'
                  : 'Have an upcoming luxury hospitality, villa, or atrium lighting project?'}
              </p>
            </div>

            {/* Commission Button */}
            <button
              onClick={onOpenStartProject}
              className="w-full py-3 bg-[#1C1917] hover:bg-[#9E7B35] text-white font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-xs rounded-xs cursor-pointer"
            >
              <span>{t('btn.startYourProject', 'Start a Project')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Quick Chat WhatsApp Concierge Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-[#0A2E16] font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-xs rounded-xs cursor-pointer border border-[#1DA851]/30 group"
            >
              <MessageSquare className="w-4 h-4 text-[#0A2E16] group-hover:scale-110 transition-transform" />
              <span className="font-bold">
                {language === 'hi' ? 'व्हाट्सएप त्वरित चैट' : 'Quick Chat on WhatsApp'}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>

            <div className="text-[10px] text-[#78716C] flex items-center justify-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
              <span>{language === 'hi' ? 'विशेषज्ञ सलाहकार 24/7 सक्रिय' : 'Direct Luxury Concierge Active'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E0D5] flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] font-light gap-4">
          <p>© {new Date().getFullYear()} SUN LUMINOUS Inc. All Rights Reserved. Bespoke Lighting Architecture.</p>

          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenAdmin}
              className="hover:text-[#9E7B35] transition-colors text-[11px] font-mono text-[#57534E] cursor-pointer"
            >
              [Admin CMS Portal]
            </button>
            <span className="hover:text-[#1C1917] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#1C1917] cursor-pointer">Terms of Specification</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

