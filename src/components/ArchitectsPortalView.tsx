import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download,
  FileText,
  Box,
  ShieldCheck,
  CheckCircle2,
  Search,
  ArrowUpRight,
  Sparkles,
  Layers,
  Building2,
  Flame,
  Phone,
  Mail,
  BookOpen,
  Eye,
  Check,
  Compass
} from 'lucide-react';
import { ArchitectResource, PDFCatalog, InstallationFormation, InstallationElement, ClientPartner } from '../types';
import {
  OFFICIAL_PDF_CATALOGS,
  INSTALLATION_FORMATIONS,
  INSTALLATION_ELEMENTS,
  CLIENT_PARTNERS,
  HOSPITALITY_WORKFLOW_STEPS,
  HOSPITALITY_ADVANTAGES
} from '../data/mockData';

interface ArchitectsPortalViewProps {
  resources: ArchitectResource[];
  onOpenStartProject: (initialMessage?: string) => void;
}

export const ArchitectsPortalView: React.FC<ArchitectsPortalViewProps> = ({
  resources,
  onOpenStartProject,
}) => {
  const [activeTab, setActiveTab] = useState<'catalogues' | 'formations' | 'elements' | 'workflow' | 'clients' | 'bim'>('catalogues');
  const [selectedCatalog, setSelectedCatalog] = useState<PDFCatalog | null>(null);
  const [selectedFormation, setSelectedFormation] = useState<InstallationFormation | null>(INSTALLATION_FORMATIONS[0]);
  const [selectedClientCategory, setSelectedClientCategory] = useState<string>('ALL');
  const [elementSearch, setElementSearch] = useState<string>('');

  const clientCategories = ['ALL', 'Builders', 'Hospitality/Hotels', 'Corporate/Commercial', 'Residential'];

  const filteredClients = selectedClientCategory === 'ALL'
    ? CLIENT_PARTNERS
    : CLIENT_PARTNERS.filter(c => c.category === selectedClientCategory);

  const filteredElements = INSTALLATION_ELEMENTS.filter(e =>
    e.name.toLowerCase().includes(elementSearch.toLowerCase()) ||
    e.code.toLowerCase().includes(elementSearch.toLowerCase()) ||
    e.material.toLowerCase().includes(elementSearch.toLowerCase())
  );

  return (
    <section className="py-24 bg-[#0B0F17] relative min-h-screen pt-28 text-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center space-x-2 text-[#C9A96A] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            <Box className="w-3.5 h-3.5" />
            <span>Architectural Engineering & Official Catalogues</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#F8F6F2] tracking-tight mb-4">
            Bespoke Lighting Design System & Catalogues
          </h1>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Explore the official SUN LUMINOUS documentation: 3 curated reference catalogues (Hospitality Solutions, Residential Catalogue, Large Installations 400+), 8 core structural formations, 300+ custom glass elements, and BIM/CAD specification packages.
          </p>
        </div>

        {/* Primary Navigation Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 border-b border-gray-800 mb-10 scrollbar-none">
          <button
            onClick={() => setActiveTab('catalogues')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              activeTab === 'catalogues'
                ? 'bg-[#C9A96A] text-[#0B0F17] shadow-lg shadow-[#C9A96A]/20'
                : 'bg-[#0F172A] text-gray-400 border border-gray-800 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Official PDF Catalogues (3)</span>
          </button>

          <button
            onClick={() => setActiveTab('formations')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              activeTab === 'formations'
                ? 'bg-[#C9A96A] text-[#0B0F17] shadow-lg shadow-[#C9A96A]/20'
                : 'bg-[#0F172A] text-gray-400 border border-gray-800 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>8 Core Formations</span>
          </button>

          <button
            onClick={() => setActiveTab('elements')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              activeTab === 'elements'
                ? 'bg-[#C9A96A] text-[#0B0F17] shadow-lg shadow-[#C9A96A]/20'
                : 'bg-[#0F172A] text-gray-400 border border-gray-800 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>300+ Elements Library (SL Series)</span>
          </button>

          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              activeTab === 'workflow'
                ? 'bg-[#C9A96A] text-[#0B0F17] shadow-lg shadow-[#C9A96A]/20'
                : 'bg-[#0F172A] text-gray-400 border border-gray-800 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Hospitality Workflow & Advantages</span>
          </button>

          <button
            onClick={() => setActiveTab('clients')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              activeTab === 'clients'
                ? 'bg-[#C9A96A] text-[#0B0F17] shadow-lg shadow-[#C9A96A]/20'
                : 'bg-[#0F172A] text-gray-400 border border-gray-800 hover:text-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>100+ Landmark Clients</span>
          </button>

          <button
            onClick={() => setActiveTab('bim')}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              activeTab === 'bim'
                ? 'bg-[#C9A96A] text-[#0B0F17] shadow-lg shadow-[#C9A96A]/20'
                : 'bg-[#0F172A] text-gray-400 border border-gray-800 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CAD / Revit BIM / IES</span>
          </button>
        </div>

        {/* TAB 1: OFFICIAL PDF CATALOGUES */}
        {activeTab === 'catalogues' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {OFFICIAL_PDF_CATALOGS.map((cat) => (
                <div
                  key={cat.id}
                  className="rounded-xl overflow-hidden bg-[#0F172A] border border-gray-800 hover:border-[#C9A96A]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-900">
                    <img
                      src={cat.coverImage}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#0B0F17]/90 text-[#C9A96A] border border-[#C9A96A]/30">
                        {cat.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-gray-300">
                      <span className="font-mono text-[#C9A96A]">{cat.pages} Pages</span>
                      <span className="bg-[#1E293B]/80 px-2.5 py-0.5 rounded text-[11px] font-light">{cat.year} Edition</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-light text-white mb-2 group-hover:text-[#C9A96A] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#C9A96A] font-medium mb-4">
                        {cat.subtitle}
                      </p>

                      <div className="space-y-2 mb-6">
                        {cat.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs text-gray-400 font-light">
                            <Check className="w-3.5 h-3.5 text-[#C9A96A] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-800/80 space-y-3">
                      <div className="bg-[#1E293B]/50 p-3 rounded text-[11px] text-gray-400">
                        <div className="text-[#C9A96A] font-medium">{cat.contactPerson.role}</div>
                        <div className="text-white font-medium">{cat.contactPerson.name}</div>
                        <div className="text-gray-400 text-[10px]">{cat.contactPerson.phone.join(' • ')}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedCatalog(cat)}
                          className="py-2.5 px-3 bg-[#1E293B] hover:bg-[#2A374A] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#C9A96A]" />
                          <span>View Details</span>
                        </button>

                        <button
                          onClick={() => onOpenStartProject(`Requesting direct PDF copy of "${cat.title}" (${cat.pages} pages)`)}
                          className="py-2.5 px-3 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Get PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact Banner from PDF page 55 & 66 */}
            <div className="p-8 rounded-xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-[#C9A96A]/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#C9A96A] font-semibold">
                  Direct Atelier & Hospitality Inquiry Desk
                </span>
                <h3 className="font-serif text-2xl font-light text-white">
                  Let’s Shape Your Next Architectural Space
                </h3>
                <p className="text-xs text-gray-300 font-light">
                  Connect with Ms. Ananya Sharma (Head of Hospitality & Bespoke Commissions) for 1:1 project collaboration, CAD specs & finish boxes.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919820188472"
                  className="px-5 py-2.5 bg-[#1E293B] hover:bg-[#2A374A] text-white rounded text-xs font-semibold flex items-center space-x-2 border border-gray-700"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C9A96A]" />
                  <span>+91 98201 88472</span>
                </a>
                <a
                  href="mailto:architects@sunluminous.com"
                  className="px-5 py-2.5 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs rounded flex items-center space-x-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>architects@sunluminous.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: 8 CORE STRUCTURAL FORMATIONS */}
        {activeTab === 'formations' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {INSTALLATION_FORMATIONS.map((form) => (
                <div
                  key={form.id}
                  onClick={() => setSelectedFormation(form)}
                  className={`p-6 rounded-xl bg-[#0F172A] border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedFormation?.id === form.id
                      ? 'border-[#C9A96A] shadow-xl shadow-[#C9A96A]/15 bg-[#1E293B]/80'
                      : 'border-gray-800 hover:border-[#C9A96A]/50'
                  }`}
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#C9A96A] font-semibold mb-2">
                      {form.category}
                    </div>
                    <h3 className="font-serif text-xl font-light text-white mb-2">
                      {form.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                      {form.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-800">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium block mb-1.5">
                      Ideal Applications:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {form.recommendedSpaces.map((space, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[10px] bg-[#1E293B] text-gray-300">
                          {space}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedFormation && (
              <div className="p-8 rounded-xl bg-[#0F172A] border border-[#C9A96A]/40 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C9A96A] font-semibold">
                    Selected Formation
                  </span>
                  <h3 className="font-serif text-2xl text-white font-light mt-1">
                    Design with {selectedFormation.name}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 max-w-xl">
                    Our engineering studio generates custom 3D parametric CAD models for infinite scale variations of this formation.
                  </p>
                </div>
                <button
                  onClick={() => onOpenStartProject(`Inquiring about custom CAD / 3D simulation for ${selectedFormation.name}`)}
                  className="px-6 py-3 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-wider rounded transition-all shrink-0"
                >
                  Request 3D Formation CAD
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* TAB 3: 300+ CUSTOM ELEMENTS LIBRARY */}
        {activeTab === 'elements' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative max-w-md w-full">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search elements by code (e.g. SL 126, SL 312) or material..."
                  value={elementSearch}
                  onChange={(e) => setElementSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0F172A] border border-gray-800 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A96A]"
                />
              </div>

              <div className="text-xs text-[#C9A96A] font-mono">
                Over 300+ Bespoke Elements Available In-Studio
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredElements.map((el) => (
                <div
                  key={el.id}
                  className="p-5 rounded-xl bg-[#0F172A] border border-gray-800 hover:border-[#C9A96A]/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#1E293B] text-[#C9A96A] border border-[#C9A96A]/20">
                        {el.code}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-gray-400">
                        {el.material.split('&')[0]}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-light text-white group-hover:text-[#C9A96A] transition-colors mb-1">
                      {el.name}
                    </h3>

                    <div className="text-[11px] text-gray-400 font-light mb-3">
                      <span className="text-gray-500">Finish:</span> {el.finish}
                    </div>

                    <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                      {el.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenStartProject(`Requesting physical element sample of ${el.code} - ${el.name}`)}
                    className="w-full py-2 bg-[#1E293B] hover:bg-[#C9A96A] hover:text-[#0B0F17] text-white text-[11px] font-medium uppercase tracking-wider rounded transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>Request Sample</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 4: HOSPITALITY WORKFLOW & 7 REASONS */}
        {activeTab === 'workflow' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-16"
          >
            {/* 7-Step Proven Workflow */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96A] font-semibold">
                  Proven Turnkey Protocol
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-white mt-1">
                  Designed for Hospitality — A Proven 7-Step Workflow
                </h2>
                <p className="text-xs text-gray-400 mt-2 font-light">
                  From initial concept sketching to structural site integration and global turnkey commissioning.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
                {HOSPITALITY_WORKFLOW_STEPS.map((s) => (
                  <div
                    key={s.stepNumber}
                    className="p-5 rounded-xl bg-[#0F172A] border border-gray-800 flex flex-col justify-between relative overflow-hidden"
                  >
                    <div className="absolute -top-2 -right-2 text-4xl font-serif font-black text-[#1E293B]/60 select-none pointer-events-none">
                      0{s.stepNumber}
                    </div>

                    <div className="relative z-10">
                      <div className="w-7 h-7 rounded-full bg-[#C9A96A] text-[#0B0F17] font-bold text-xs flex items-center justify-center mb-3">
                        {s.stepNumber}
                      </div>
                      <h3 className="font-serif text-base font-medium text-white mb-1">
                        {s.title}
                      </h3>
                      <div className="text-[10px] uppercase tracking-wider text-[#C9A96A] font-semibold mb-2">
                        {s.subtitle}
                      </div>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7 Reasons Why Hospitality Teams Choose Sutra */}
            <div className="pt-12 border-t border-gray-800">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96A] font-semibold">
                  The Indian Atelier Advantage
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-white mt-1">
                  Why Leading Hospitality Teams Choose SUN LUMINOUS
                </h2>
                <p className="text-xs text-gray-400 mt-2 font-light">
                  European quality standards with Indian manufacturing agility and custom value engineering.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HOSPITALITY_ADVANTAGES.map((adv) => (
                  <div
                    key={adv.number}
                    className="p-6 rounded-xl bg-[#0F172A] border border-gray-800 hover:border-[#C9A96A]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-2xl font-serif text-[#C9A96A] font-light mb-2">
                        {adv.number}
                      </div>
                      <h3 className="font-serif text-xl font-light text-white mb-2">
                        {adv.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 5: 100+ LANDMARK CLIENT PARTNERS */}
        {activeTab === 'clients' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none">
              {clientCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedClientCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                    selectedClientCategory === cat
                      ? 'bg-[#C9A96A] text-[#0B0F17] font-semibold'
                      : 'bg-[#0F172A] text-gray-400 border border-gray-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredClients.map((client, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0F172A] border border-gray-800 flex flex-col justify-between hover:border-[#C9A96A]/40 transition-all text-center"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#C9A96A] font-semibold mb-1">
                      {client.category.split('/')[0]}
                    </div>
                    <h4 className="font-serif text-base font-light text-white mb-1">
                      {client.name}
                    </h4>
                  </div>

                  {client.badge && (
                    <span className="mt-3 inline-block px-2 py-0.5 rounded text-[10px] bg-[#1E293B] text-gray-300 font-medium">
                      {client.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 6: CAD, REVIT BIM & IES PACKAGES */}
        {activeTab === 'bim' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {resources.map((res) => (
              <div
                key={res.id}
                className="p-6 rounded-lg bg-[#0F172A] border border-gray-800 hover:border-[#C9A96A]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-mono bg-[#1E293B] text-[#C9A96A] border border-[#C9A96A]/20">
                      {res.fileFormat} • {res.fileSize}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                      {res.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-light text-[#F8F6F2] mb-2">
                    {res.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenStartProject(`Downloading technical package: ${res.title}`)}
                  className="w-full py-2.5 border border-[#C9A96A]/40 text-[#C9A96A] hover:bg-[#C9A96A] hover:text-[#0B0F17] font-semibold text-xs uppercase tracking-wider rounded transition-all flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download BIM / CAD Package</span>
                </button>
              </div>
            ))}
          </motion.div>
        )}

        {/* Catalog Detail Modal */}
        <AnimatePresence>
          {selectedCatalog && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedCatalog(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-[#0F172A] border border-[#C9A96A]/40 rounded-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C9A96A] font-semibold">
                      {selectedCatalog.category} • {selectedCatalog.pages} Pages
                    </span>
                    <h2 className="font-serif text-2xl text-white font-light mt-1">
                      {selectedCatalog.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedCatalog(null)}
                    className="text-gray-400 hover:text-white text-lg p-1"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {selectedCatalog.subtitle}
                  </p>

                  <div className="bg-[#1E293B]/60 p-4 rounded-xl space-y-2">
                    <div className="text-xs font-semibold text-[#C9A96A] uppercase tracking-wider">
                      Catalog Key Contents:
                    </div>
                    {selectedCatalog.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-[#C9A96A] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl border border-gray-800 bg-[#0B0F17] space-y-2">
                    <div className="text-xs font-semibold text-white">Direct Executive Contact:</div>
                    <div className="text-xs text-[#C9A96A]">{selectedCatalog.contactPerson.name} ({selectedCatalog.contactPerson.role})</div>
                    <div className="text-xs text-gray-400">Direct Phones: {selectedCatalog.contactPerson.phone.join(' | ')}</div>
                    <div className="text-xs text-gray-400">Direct Email: {selectedCatalog.contactPerson.email.join(' | ')}</div>
                  </div>
                </div>

                <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-800">
                  <button
                    onClick={() => setSelectedCatalog(null)}
                    className="px-5 py-2.5 bg-[#1E293B] hover:bg-[#2A374A] text-white text-xs font-semibold uppercase tracking-wider rounded"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const title = selectedCatalog.title;
                      setSelectedCatalog(null);
                      onOpenStartProject(`Requesting PDF download & physical sample swatches for "${title}"`);
                    }}
                    className="px-6 py-2.5 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] text-xs font-bold uppercase tracking-wider rounded flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Full PDF Package</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
