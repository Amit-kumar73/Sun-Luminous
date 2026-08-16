import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, defaultText?: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Brand & Taglines
    'brand.name': 'SUN LUMINOUS',
    'brand.tagline': 'Bespoke Luxury Lighting & Sculptural Art',
    'brand.heroHeadline': 'We Don\'t Manufacture Fixtures. We Sculpt Architecture with Living Light.',
    'brand.heroSub': 'Mouth-blown 1,450°C furnace crystal glass, precision architectural metal engineering, and custom monumental installations for the world\'s most distinguished spaces.',
    
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.collections': 'Collections',
    'nav.capabilities': 'Manufacturing',
    'nav.materials': 'Materials',
    'nav.configurator': 'Studio Configurator',
    'nav.showroom': '360° Showroom',
    'nav.architects': 'Architects & CAD',
    'nav.clientPortal': 'Client Portal',
    'nav.journal': 'Journal',
    'nav.about': 'About Atelier',
    'nav.aiConsultant': 'AI Consultant',
    'nav.startProject': 'Start a Project',
    'nav.switchLang': 'Language',
    
    // Actions & Buttons
    'btn.exploreProjects': 'Explore Projects',
    'btn.openConfigurator': 'Open Configurator',
    'btn.viewDetails': 'View Details',
    'btn.getPDF': 'Get PDF Catalog',
    'btn.downloadBIM': 'Download BIM / CAD',
    'btn.requestSample': 'Request Sample',
    'btn.scheduleVisit': 'Schedule Atelier Visit',
    'btn.startYourProject': 'Commission an Installation',
    'btn.consultAI': 'Consult Gemini AI',
    'btn.downloadSpec': 'Download Spec Sheet',
    'btn.inquireDirect': 'Direct Inquiries',
    'btn.contactDesk': 'Contact Hospitality Desk',
    'btn.learnMore': 'Learn More',
    
    // Hero & Stats
    'stats.temp': '1,450°C',
    'stats.tempLabel': 'Furnace Melt Glass',
    'stats.installations': '400+',
    'stats.installationsLabel': 'Monumental Projects',
    'stats.elements': '300+',
    'stats.elementsLabel': 'Glass Geometries',
    'stats.clients': '100+',
    'stats.clientsLabel': 'Luxury Hotel & Estates',
    
    // Section Titles
    'section.featuredProjects': 'Curated Architectural Portfolio',
    'section.featuredProjectsSub': 'Monumental hospitality atriums, royal presidential suites, and ultra-prime private estates.',
    'section.materials': 'Artisanal Materials & Finishes',
    'section.materialsSub': 'High-purity mouth-blown crystal, hand-patinated architectural brass, and aerospace titanium.',
    'section.configurator': 'Parametric 3D Lighting Configurator',
    'section.configuratorSub': 'Simulate custom formations, drop heights, glass element densities, and CCT color temperatures.',
    'section.architectsPortal': 'Architects & Specifiers Resource Portal',
    'section.architectsPortalSub': 'Official PDF catalogues, 8 core formations, 300+ custom elements library, and CAD BIM packages.',
    'section.manufacturing': '1,450°C Glassblowing & Metal Casting Studio',
    'section.manufacturingSub': 'India\'s largest bespoke glass ecosystem with 100% circular zero-waste remelting and DALI testing.',
    
    // Contact & Hospitality
    'contact.leadTitle': 'Direct Hospitality & ID Desk',
    'contact.leadPerson': 'Ms. Ananya Sharma (Head of Hospitality & Bespoke)',
    'contact.phones': '+91 98201 88472  |  +91 98110 54291',
    'contact.email': 'concierge@sunluminous.com',
    'contact.locations': 'Delhi Blowing Centre • Mumbai Design Studio • London • Dubai',
  },
  hi: {
    // Brand & Taglines
    'brand.name': 'सन ल्यूमिनस',
    'brand.tagline': 'अनुकूलित लक्जरी लाइटिंग और मूर्तिकला ग्लास कला',
    'brand.heroHeadline': 'हम केवल लैंप नहीं बनाते। हम प्रकाश से वास्तुकला को जीवंत करते हैं।',
    'brand.heroSub': '1,450°C भट्टी में निर्मित मुख-वातित क्रिस्टल ग्लास, सटीक धातु इंजीनियरिंग और विश्व के सबसे प्रतिष्ठित स्थानों के लिए भव्य कस्टम इंस्टॉलेशन।',
    
    // Navigation
    'nav.home': 'होम',
    'nav.projects': 'परियोजनाएं',
    'nav.collections': 'संग्रह',
    'nav.capabilities': 'निर्माण शिल्प',
    'nav.materials': 'सामग्रियां व फिनिश',
    'nav.configurator': '3D कॉन्फिगरेटर',
    'nav.showroom': '360° शोरूम',
    'nav.architects': 'आर्किटेक्ट्स व सीएडी',
    'nav.clientPortal': 'क्लाइंट पोर्टल',
    'nav.journal': 'जर्नल',
    'nav.about': 'हमारे बारे में',
    'nav.aiConsultant': 'एआई सलाहकार',
    'nav.startProject': 'प्रोजेक्ट शुरू करें',
    'nav.switchLang': 'भाषा',
    
    // Actions & Buttons
    'btn.exploreProjects': 'परियोजनाएं देखें',
    'btn.openConfigurator': 'कॉन्फिगरेटर खोलें',
    'btn.viewDetails': 'विवरण देखें',
    'btn.getPDF': 'पीडीएफ कैटलॉग प्राप्त करें',
    'btn.downloadBIM': 'BIM / CAD डाउनलोड करें',
    'btn.requestSample': 'नमूना मंगाएं',
    'btn.scheduleVisit': 'स्टूडियो भ्रमण बुक करें',
    'btn.startYourProject': 'कस्टम प्रोजेक्ट शुरू करें',
    'btn.consultAI': 'जेमिनी एआई से परामर्श लें',
    'btn.downloadSpec': 'विशिष्टता पत्रक डाउनलोड करें',
    'btn.inquireDirect': 'सीधी पूछताछ',
    'btn.contactDesk': 'हॉस्पिटैलिटी डेस्क से संपर्क करें',
    'btn.learnMore': 'और अधिक जानें',
    
    // Hero & Stats
    'stats.temp': '1,450°C',
    'stats.tempLabel': 'भट्टी मेल्टेड क्रिस्टल ग्लास',
    'stats.installations': '400+',
    'stats.installationsLabel': 'भव्य लैंडमार्क प्रोजेक्ट्स',
    'stats.elements': '300+',
    'stats.elementsLabel': 'ग्लास तत्व डिजाइन',
    'stats.clients': '100+',
    'stats.clientsLabel': 'लक्जरी होटल व एस्टेट्स',
    
    // Section Titles
    'section.featuredProjects': 'क्यूरेटेड वास्तुशिल्प पोर्टफोलियो',
    'section.featuredProjectsSub': 'भव्य होटल एट्रियम, शाही प्रेसिडेंशियल सुइट्स और अल्ट्रा-लक्जरी निजी एस्टेट्स।',
    'section.materials': 'शिल्प सामग्री और फिनिश',
    'section.materialsSub': 'उच्च शुद्धता वाला माउथ-ब्लोन क्रिस्टल, पेटिना ब्रास और एयरोस्पेस टाइटेनियम।',
    'section.configurator': 'पैरामीट्रिक 3D लाइटिंग कॉन्फिगरेटर',
    'section.configuratorSub': 'कस्टम आकार, ड्रॉप ऊंचाई, ग्लास तत्व घनत्व और सीसीटी रंग तापमान का अनुकरण करें।',
    'section.architectsPortal': 'आर्किटेक्ट्स एवं रिसोर्स पोर्टल',
    'section.architectsPortalSub': 'आधिकारिक पीडीएफ कैटलॉग, 8 मुख्य संरचनाएं, 300+ ग्लास एलिमेंट्स लाइब्रेरी और सीएडी बीआईएम पैकेज।',
    'section.manufacturing': '1,450°C ग्लासब्लोइंग एवं मेटल कास्टिंग स्टूडियो',
    'section.manufacturingSub': '100% शून्य-अपशिष्ट रीमेल्टिंग और 72-घंटे डाली विद्युत परीक्षण के साथ भारत का सबसे बड़ा ग्लास इकोसिस्टम।',
    
    // Contact & Hospitality
    'contact.leadTitle': 'डायरेक्ट हॉस्पिटैलिटी एवं आईडी डेस्क',
    'contact.leadPerson': 'सुश्री अनन्या शर्मा (प्रमुख - हॉस्पिटैलिटी एवं बेस्पोक)',
    'contact.phones': '+91 98201 88472  |  +91 98110 54291',
    'contact.email': 'concierge@sunluminous.com',
    'contact.locations': 'दिल्ली ब्लोइंग सेंटर • मुंबई डिजाइन स्टूडियो • लंदन • दुबई',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key: string, defaultText?: string) => defaultText || key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('sun_luminous_lang');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('sun_luminous_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'hi' : 'en';
    setLanguage(nextLang);
  };

  const t = (key: string, defaultText?: string): string => {
    const dict = translations[language];
    if (dict && dict[key]) {
      return dict[key];
    }
    if (translations.en[key]) {
      return translations.en[key];
    }
    return defaultText || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
