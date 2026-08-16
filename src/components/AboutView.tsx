import React from 'react';
import { Award, ShieldCheck, Flame, Globe, Compass, ArrowUpRight, Sparkles, Building, Layers } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { BespokeFAQ } from './BespokeFAQ';

interface AboutViewProps {
  onOpenStartProject: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenStartProject }) => {
  const { t, language } = useLanguage();

  const timelineEvents = [
    { 
      year: '2012', 
      title: language === 'hi' ? 'स्टूडियो की स्थापना' : 'Studio Inception', 
      desc: language === 'hi' 
        ? 'माउथ-ब्लोन क्रिस्टल लाइटिंग और कलात्मक ग्लास मूर्तियों में विशेषज्ञता वाला बुटीक स्टूडियो स्थापित किया गया।'
        : 'Established as a boutique glassblowing atelier specializing in bespoke mouth-blown crystal lighting objects.' 
    },
    { 
      year: '2016', 
      title: language === 'hi' ? 'अंतरराष्ट्रीय विनिर्माण विस्तार' : 'Furnace & Foundry Expansion', 
      desc: language === 'hi'
        ? '120,000 वर्ग फुट निरंतर-भट्टी सुविधा और समर्पित CNC मेटल कार्यशाला का विस्तार।'
        : 'Expanded to a 120,000 sq. ft. continuous-furnace facility with dedicated CNC metal and PVD coating workshops.' 
    },
    { 
      year: '2019', 
      title: language === 'hi' ? 'लक्जरी हॉस्पिटैलिटी विस्तार' : 'Luxury Hospitality Milestone', 
      desc: language === 'hi'
        ? 'दुबई, लंदन, बाली और सिंगापुर के अंतरराष्ट्रीय लक्जरी होटल ब्रांड्स और महलों के लिए कमीशन प्राप्त।'
        : 'Commissioned by international luxury hotel brands across Dubai, London, Bali, and Singapore.' 
    },
    { 
      year: '2024', 
      title: language === 'hi' ? '100-फुट एट्रियम लैंडमार्क' : 'Monumental 100ft Atrium Milestone', 
      desc: language === 'hi'
        ? 'मिनर्वा टावर्स, मुंबई में 3,500+ ग्लास ड्रॉप्स वाला 100-फुट एट्रियम लाइट स्कल्प्चर सफलतापूर्वक स्थापित।'
        : 'Engineered and installed the 100ft Minerva Towers atrium light sculpture comprising 3,500+ hand-blown glass drops.' 
    },
    { 
      year: '2026', 
      title: language === 'hi' ? 'ग्लोबल आर्किटेक्चरल स्टूडियो' : 'Global Architectural Studio', 
      desc: language === 'hi'
        ? '50+ वैश्विक लक्जरी ब्रांड्स के साथ साझेदारी और 5,000+ कस्टम इंजीनियर्ड लाइट इंस्टॉलेशन पूर्ण।'
        : 'Partnered with over 50+ international luxury brands and completed 5,000+ custom engineered light sculptures worldwide.' 
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] text-[#1C1917] relative min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Headline */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center space-x-2 text-[#9E7B35] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#9E7B35]" />
            <span>{language === 'hi' ? 'SUN LUMINOUS दर्शन' : 'The SUN LUMINOUS Philosophy'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#1C1917] tracking-tight leading-[1.1] mb-6">
            {language === 'hi' ? (
              <>
                हम केवल लाइटिंग नहीं बनाते। <br />
                <span className="italic text-[#9E7B35] font-normal">
                  हम वास्तुकला के लैंडमार्क्स गढ़ते हैं।
                </span>
              </>
            ) : (
              <>
                We Don't Manufacture Fixtures.{' '}
                <span className="italic text-[#9E7B35] font-normal">
                  We Create Architectural Landmarks.
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#57534E] font-light leading-relaxed mb-6 max-w-3xl">
            {language === 'hi'
              ? 'SUN LUMINOUS एक लक्जरी बेस्पोक डेकोरेटिव लाइटिंग और मूर्तिकला कला स्टूडियो है। 1,450°C भट्टी ग्लासब्लोइंग, एयरोस्पेस-ग्रेड स्ट्रक्चरल इंजीनियरिंग और अंतरराष्ट्रीय वास्तुशिल्प उत्कृष्टता का संगम।'
              : 'SUN LUMINOUS is a luxury bespoke decorative lighting and sculptural art studio. Positioned alongside global luxury pioneers like Lasvit, Preciosa, Bocci, and WonderGlass, SUN LUMINOUS combines high-temperature furnace glass discipline with aerospace engineering to illuminate iconic spaces worldwide.'}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          <div className="p-8 rounded-xl bg-white border border-[#E5E0D5] space-y-3.5 shadow-xs hover:border-[#9E7B35] transition-all">
            <div className="p-2.5 rounded-lg bg-[#FAF6EE] w-fit text-[#9E7B35] border border-[#B38E46]/20">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#1C1917]">
              1,450°C Furnace Glassblowing
            </h3>
            <p className="text-xs text-[#57534E] font-light leading-relaxed">
              {language === 'hi'
                ? 'प्रत्येक ग्लास बूंद, वेव और प्रिज्म हमारे मास्टर कारीगरों द्वारा दशकों की भट्टी साधना से हाथ से ढाला जाता है।'
                : 'Every droplet, wave, and prism is individually blown and hand-shaped by master glassmakers with decades of furnace discipline.'}
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white border border-[#E5E0D5] space-y-3.5 shadow-xs hover:border-[#9E7B35] transition-all">
            <div className="p-2.5 rounded-lg bg-[#FAF6EE] w-fit text-[#9E7B35] border border-[#B38E46]/20">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#1C1917]">
              Multi-Material Mastery
            </h3>
            <p className="text-xs text-[#57534E] font-light leading-relaxed">
              {language === 'hi'
                ? 'माउथ-ब्लोन बोरोसिलिकेट ग्लास, शैंपेन ब्रास पेटिना, ऑप्टिकल क्रिस्टल और टाइटेनियम लोड फ्रेम्स में गहन निपुणता।'
                : 'Deep expertise spanning mouth-blown borosilicate glass, champagne brass patinas, optical lead crystal, hand-carved ceramics, and titanium load frames.'}
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white border border-[#E5E0D5] space-y-3.5 shadow-xs hover:border-[#9E7B35] transition-all">
            <div className="p-2.5 rounded-lg bg-[#FAF6EE] w-fit text-[#9E7B35] border border-[#B38E46]/20">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#1C1917]">
              Global Project Experience
            </h3>
            <p className="text-xs text-[#57534E] font-light leading-relaxed">
              {language === 'hi'
                ? 'उत्तर अमेरिका, यूरोप, मध्य पूर्व और एशिया भर के प्रसिद्ध वास्तुकारों, होटल डेवलपर्स और एस्टेट मालिकों की सेवा।'
                : 'Serving world-renowned architects, hotel developers, and private estate clients across North America, Europe, Middle East, and Asia.'}
            </p>
          </div>
        </div>

        {/* Brand Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#9E7B35]">
              {language === 'hi' ? 'इतिहास व यात्रा' : 'Legacy & Milestones'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1C1917] mt-1">
              {language === 'hi' ? 'प्रकाश शिल्प के माध्यम से हमारी यात्रा' : 'Our Journey Through Light'}
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-[#9E7B35]/25">
            {timelineEvents.map((evt, idx) => (
              <div
                key={evt.year}
                className={`relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full sm:w-[46%] p-6 rounded-xl bg-white border border-[#E5E0D5] shadow-xs hover:border-[#9E7B35] transition-all">
                  <span className="font-serif text-2xl text-[#9E7B35] font-light block mb-1">
                    {evt.year}
                  </span>
                  <h3 className="text-lg font-serif font-medium text-[#1C1917] mb-1">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-[#57534E] font-light leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion-Style FAQ Component for Bespoke Lighting Services */}
        <div className="pt-8 border-t border-[#E5E0D5]">
          <BespokeFAQ onOpenStartProject={onOpenStartProject} />
        </div>

        {/* Bottom Commission CTA */}
        <div className="mt-16 p-10 sm:p-12 rounded-2xl bg-white border border-[#E0D7C6] text-center space-y-4 shadow-sm">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#9E7B35]">
            {language === 'hi' ? 'आर्किटेक्चरल कमीशनिंग' : 'Architectural Commissioning'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1C1917]">
            {language === 'hi' ? 'क्या आपके पास कोई स्थान है जिसे प्रकाशमय बनाना है?' : 'Have a space worth illuminating?'}
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E] max-w-lg mx-auto font-light leading-relaxed">
            {language === 'hi'
              ? 'अपनी वास्तुशिल्प दृष्टि को जीवंत करने के लिए सीधे हमारे मास्टर डिज़ाइन और इंजीनियरिंग टीम के साथ सहयोग करें।'
              : 'Collaborate directly with our master design and engineering team to bring your architectural vision to life.'}
          </p>

          <button
            onClick={onOpenStartProject}
            className="px-8 py-3.5 bg-[#1C1917] hover:bg-[#9E7B35] text-white font-semibold text-xs uppercase tracking-widest rounded-xs inline-flex items-center space-x-2 transition-all shadow-sm cursor-pointer"
          >
            <span>{t('btn.startYourProject', 'Start Your Project')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
