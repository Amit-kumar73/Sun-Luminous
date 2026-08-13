import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Menu, X, ArrowUpRight, Shield, Layers, FileText, Globe, Box, Eye, User } from 'lucide-react';

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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'collections', label: 'Collections' },
    { id: 'capabilities', label: 'Manufacturing' },
    { id: 'materials', label: 'Materials' },
    { id: 'configurator', label: 'Studio Configurator' },
    { id: 'showroom', label: '360° Showroom' },
    { id: 'architects', label: 'Architects' },
    { id: 'client-portal', label: 'Client Portal' },
    { id: 'journal', label: 'Journal' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0F172A]/90 backdrop-blur-md border-b border-[#F8F6F2]/10 py-4 shadow-2xl'
          : 'bg-gradient-to-b from-[#0F172A] via-[#0F172A]/60 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
            <span className="text-xl md:text-2xl tracking-[0.3em] font-light uppercase text-[#F8F6F2] group-hover:text-[#C9A96A] transition-colors">
              SUTRA LUMINIS
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ scale: 1.06, y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  handleTabChange(link.id);
                  if (currentTab === link.id && link.id === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-all relative py-1 cursor-pointer ${
                  currentTab === link.id
                    ? 'text-[#C9A96A]'
                    : 'text-[#F8F6F2]/70 hover:text-[#F8F6F2]'
                }`}
              >
                {link.label}
                {currentTab === link.id && (
                  <motion.span
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9A96A] rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            {/* AI Assistant Button */}
            <motion.button
              whileHover={{ scale: 1.04, opacity: 0.95 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenAiAssistant}
              className="flex items-center space-x-2 px-4 py-2 border border-[#C9A96A]/40 bg-[#1A253D]/50 hover:bg-[#C9A96A]/20 text-[#C9A96A] hover:text-[#F8F6F2] text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer"
              title="AI Architectural Lighting Consultant"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C9A96A]" />
              <span>AI Consultant</span>
            </motion.button>

            {/* Start a Project CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenStartProject}
              className="border border-[#F8F6F2]/30 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-[#F8F6F2] hover:text-[#0F172A] text-[#F8F6F2] transition-all cursor-pointer font-medium"
            >
              Start a Project
            </motion.button>

            {/* Admin CMS Access */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAdminAction}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isAdminOpen
                  ? 'border-[#C9A96A] bg-[#C9A96A]/20 text-[#C9A96A]'
                  : 'border-[#1E293B] hover:border-[#C9A96A]/40 text-gray-400 hover:text-[#F8F6F2]'
              }`}
              title="Admin CMS & Lead Portal"
            >
              <Shield className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={onOpenAiAssistant}
              className="p-2 rounded-full bg-[#1E293B] border border-[#C9A96A]/30 text-[#C9A96A]"
              title="AI Assistant"
            >
              <Sparkles className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#F8F6F2] hover:text-[#C9A96A] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0F172A]/95 border-b border-[#C9A96A]/20 backdrop-blur-xl px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  handleTabChange(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm uppercase tracking-[0.2em] font-medium py-2 border-b border-gray-800/50 cursor-pointer ${
                  currentTab === link.id ? 'text-[#C9A96A] pl-2 border-[#C9A96A]' : 'text-[#F8F6F2]/80'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <button
                onClick={() => {
                  onOpenStartProject();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#C9A96A] text-[#0F172A] font-semibold text-xs uppercase tracking-widest rounded-sm text-center cursor-pointer"
              >
                Start a Project
              </button>

              <button
                onClick={() => {
                  handleAdminAction();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 border border-[#1E293B] text-gray-400 hover:text-[#F8F6F2] text-xs uppercase tracking-widest rounded-sm text-center flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Shield className="w-4 h-4" />
                <span>Admin CMS Portal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
