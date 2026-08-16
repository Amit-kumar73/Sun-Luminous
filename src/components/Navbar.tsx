import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Menu, X, ArrowUpRight, Shield, Layers, FileText, Globe, Box, Eye, User, Check } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

interface NavbarProps {
  activeView?: string;
  activeTab?: string;
  onNavigate?: (view: string) => void;
  setActiveTab?: (tab: string) => void;
  onOpenAiAssistant: () => void;
  onOpenStartProject: () => void;
  onOpenAdmin?: () => void;
  onToggleAdmin?: () => void;
  isAdminOpen?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  activeTab,
  onNavigate,
  setActiveTab,
  onOpenAiAssistant,
  onOpenStartProject,
  onOpenAdmin,
  onToggleAdmin,
  isAdminOpen = false,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const currentTab = activeView || activeTab || 'home';

  const handleTabChange = (tab: string) => {
    if (onNavigate) {
      onNavigate(tab);
    } else if (setActiveTab) {
      setActiveTab(tab);
    }
  };

  const handleAdminAction = () => {
    if (onOpenAdmin) {
      onOpenAdmin();
    } else if (onToggleAdmin) {
      onToggleAdmin();
    }
  };

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'projects', label: t('nav.projects', 'Projects') },
    { id: 'collections', label: t('nav.collections', 'Collections') },
    { id: 'manufacturing', label: t('nav.capabilities', 'Manufacturing') },
    { id: 'materials', label: t('nav.materials', 'Materials') },
    { id: 'configurator', label: t('nav.configurator', 'Studio Configurator') },
    { id: 'showroom', label: t('nav.showroom', '360° Showroom') },
    { id: 'architects', label: t('nav.architects', 'Architects') },
    { id: 'client-portal', label: t('nav.clientPortal', 'Client Portal') },
    { id: 'journal', label: t('nav.journal', 'Journal') },
    { id: 'about', label: t('nav.about', 'About') },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5E0D5] py-3.5 shadow-sm'
          : 'bg-gradient-to-b from-[#FAF8F5]/95 via-[#FAF8F5]/85 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              handleTabChange('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex flex-col text-left group focus:outline-none cursor-pointer"
          >
            <span className="text-lg md:text-xl font-medium tracking-[0.28em] uppercase text-[#1C1917] group-hover:text-[#9E7B35] transition-colors">
              SUN LUMINOUS
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#8C827A] font-light hidden sm:inline-block">
              {language === 'hi' ? 'लक्जरी लाइटिंग एटेलियर' : 'Atelier of Light'}
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-7">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  handleTabChange(link.id);
                  if (currentTab === link.id && link.id === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`text-[11px] uppercase tracking-[0.18em] font-medium transition-all relative py-1 cursor-pointer ${
                  currentTab === link.id
                    ? 'text-[#9E7B35] font-semibold'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                {link.label}
                {currentTab === link.id && (
                  <motion.span
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9E7B35] rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-3.5">
            {/* International Language Switcher */}
            <div
              id="language-switcher-pill"
              className="flex items-center bg-[#F3EFE6] p-1 rounded-full border border-[#DCD5C8] shadow-xs"
              title="Select Language / भाषा चुनें"
            >
              <div className="pl-1.5 pr-1 text-[#8C827A]">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-[10px] font-semibold tracking-wider rounded-full transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#1C1917] text-[#FAF8F5] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2.5 py-1 text-[10px] font-semibold tracking-wider rounded-full transition-all cursor-pointer ${
                  language === 'hi'
                    ? 'bg-[#9E7B35] text-[#FFFFFF] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* AI Assistant Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenAiAssistant}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 border border-[#B38E46]/40 bg-[#FAF6EE] hover:bg-[#B38E46] text-[#8C6D2D] hover:text-white text-[10px] uppercase tracking-[0.18em] font-semibold rounded-sm transition-all duration-300 cursor-pointer shadow-xs"
              title="AI Architectural Lighting Consultant"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('nav.aiConsultant', 'AI Consultant')}</span>
            </motion.button>

            {/* Start a Project CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenStartProject}
              className="bg-[#1C1917] text-[#FAF8F5] hover:bg-[#9E7B35] px-4.5 py-1.5 text-[10px] uppercase tracking-widest transition-all cursor-pointer font-semibold rounded-sm shadow-xs"
            >
              {t('nav.startProject', 'Start a Project')}
            </motion.button>

            {/* Admin CMS Access */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleAdminAction}
              className={`p-1.5 rounded-full border transition-all cursor-pointer ${
                isAdminOpen
                  ? 'border-[#9E7B35] bg-[#9E7B35]/15 text-[#9E7B35]'
                  : 'border-[#E0D9CC] hover:border-[#9E7B35] text-[#78716C] hover:text-[#1C1917]'
              }`}
              title="Admin CMS & Lead Portal"
            >
              <Shield className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2 xl:hidden">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center space-x-1 px-2.5 py-1 bg-[#F3EFE6] border border-[#DCD5C8] rounded-full text-[10px] font-bold text-[#1C1917]"
              title="Toggle English / Hindi"
            >
              <Globe className="w-3 h-3 text-[#9E7B35]" />
              <span>{language === 'en' ? 'EN' : 'हिन्दी'}</span>
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenAiAssistant}
              className="p-2 rounded-full bg-[#FAF6EE] border border-[#B38E46]/40 text-[#8C6D2D]"
              title="AI Assistant"
            >
              <Sparkles className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#1C1917] hover:text-[#9E7B35] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full bg-[#FAF8F5]/98 border-b border-[#E5E0D5] backdrop-blur-xl px-6 py-6 shadow-xl transition-all">
          <div className="flex flex-col space-y-3">
            {/* Language Switcher in Mobile Drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D5]">
              <span className="text-xs uppercase tracking-widest text-[#78716C] font-medium">
                {t('nav.switchLang', 'Language')}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    language === 'en' ? 'bg-[#1C1917] text-white' : 'bg-[#EFEAE1] text-[#57534E]'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    language === 'hi' ? 'bg-[#9E7B35] text-white' : 'bg-[#EFEAE1] text-[#57534E]'
                  }`}
                >
                  हिन्दी
                </button>
              </div>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  handleTabChange(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-xs uppercase tracking-[0.18em] font-medium py-2 border-b border-[#EFEAE1] cursor-pointer ${
                  currentTab === link.id ? 'text-[#9E7B35] pl-2 font-bold border-[#9E7B35]' : 'text-[#1C1917]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 flex flex-col space-y-2.5">
              <button
                onClick={() => {
                  onOpenStartProject();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#1C1917] text-white hover:bg-[#9E7B35] font-semibold text-xs uppercase tracking-widest rounded-sm text-center cursor-pointer transition-colors"
              >
                {t('nav.startProject', 'Start a Project')}
              </button>

              <button
                onClick={() => {
                  handleAdminAction();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 border border-[#DCD5C8] text-[#57534E] hover:text-[#1C1917] text-xs uppercase tracking-widest rounded-sm text-center flex items-center justify-center space-x-2 cursor-pointer bg-white"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin CMS Portal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

