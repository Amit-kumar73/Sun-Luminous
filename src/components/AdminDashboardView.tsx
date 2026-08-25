import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Plus, CheckCircle, Clock, Database, RefreshCw, Send, Loader2, ArrowRight, Filter, ArrowUpDown, Search, Calendar, DollarSign, TrendingUp } from 'lucide-react';
import { Lead, Project, LeadStatus } from '../types';
import { fetchLeads, fetchProjects, updateLeadStatus, createProject, requestAiCaseStudyGenerator } from '../lib/api';

interface AdminDashboardViewProps {
  onCloseAdmin: () => void;
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({ onCloseAdmin }) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'projects' | 'ai-writer' | 'firebase'>('leads');

  const [leads, setLeads] = useState<Lead[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);

  // Leads Filter & Sorting State
  const [statusFilter, setStatusFilter] = useState<'ALL' | LeadStatus>('ALL');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'value_desc' | 'value_asc' | 'priority'>('newest');
  const [searchQuery, setSearchQuery] = useState('');

  // Gemini AI Case Study Writer state
  const [caseTitle, setCaseTitle] = useState('');
  const [caseLocation, setCaseLocation] = useState('');
  const [caseArchitect, setCaseArchitect] = useState('');
  const [caseHeight, setCaseHeight] = useState(30);
  const [caseElements, setCaseElements] = useState(1200);
  const [caseMaterials, setCaseMaterials] = useState('Mouth-Blown Amber Glass & Champagne Brass');
  const [caseNotes, setCaseNotes] = useState('Atrium installation for luxury resort foyer. High humidity coastal environment.');
  const [aiGenerating, setAiGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<any | null>(null);

  // Firebase Config state
  const [firebaseStatus, setFirebaseStatus] = useState<{
    configured: boolean;
    adminConfigured: boolean;
    projectId: string | null;
  }>({
    configured: false,
    adminConfigured: false,
    projectId: null
  });

  useEffect(() => {
    loadAdminData();
    checkFirebaseStatus();
  }, []);

  const loadAdminData = async () => {
    setLoadingLeads(true);
    try {
      const [lData, pData] = await Promise.all([fetchLeads(), fetchProjects()]);
      setLeads(lData);
      setProjects(pData);
    } catch (err) {
      console.error("Admin load error:", err);
    } finally {
      setLoadingLeads(false);
    }
  };

  const checkFirebaseStatus = async () => {
    try {
      const res = await fetch('/api/firebase/status');
      const data = await res.json();
      setFirebaseStatus(data);
    } catch (err) {
      console.warn('Firebase status check failed:', err);
    }
  };

  const handleStatusChange = async (leadId: string, newStatus: LeadStatus) => {
    try {
      const updated = await updateLeadStatus(leadId, newStatus);
      setLeads(leads.map(l => l.id === leadId ? updated : l));
    } catch (err) {
      alert("Failed to update status");
    }
  };

  const handleGenerateCaseStudy = async (e: React.FormEvent) => {
    e.preventDefault();
    setAiGenerating(true);
    try {
      const res = await requestAiCaseStudyGenerator({
        title: caseTitle || 'Untitled Luxury Installation',
        location: caseLocation || 'Dubai',
        architect: caseArchitect || 'Gensler',
        heightFeet: caseHeight,
        elementCount: caseElements,
        keyMaterials: caseMaterials,
        rawNotes: caseNotes,
      });
      setGeneratedResult(res);
    } catch (err: any) {
      alert("AI Generation failed: " + err.message);
    } finally {
      setAiGenerating(false);
    }
  };

  const handleSaveGeneratedProject = async () => {
    if (!generatedResult) return;
    try {
      const newProj = await createProject({
        title: generatedResult.title || caseTitle,
        slug: (caseTitle || 'project').toLowerCase().replace(/\s+/g, '-'),
        category: 'Large Installations',
        location: caseLocation || 'Dubai',
        country: 'UAE',
        client: 'Bespoke Client',
        architect: caseArchitect || 'Sutra Studio',
        designer: 'Sutra Luminis',
        year: 2026,
        description: generatedResult.architecturalDescription || caseNotes,
        challenge: generatedResult.challenge || 'High ceiling weight load',
        solution: generatedResult.solution || 'Modular titanium cable matrix',
        materials: [caseMaterials],
        installationType: 'Atrium Chandelier',
        installationHeightFeet: caseHeight,
        elementCount: caseElements,
        manufacturingTimeWeeks: 12,
        featured: true,
        status: 'Completed',
        images: [{
          id: 'img-ai-1',
          url: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1200&auto=format&fit=crop',
          alt: caseTitle,
          type: 'hero'
        }]
      });
      setProjects([newProj, ...projects]);
      alert("Project created and added to live website portfolio!");
      setGeneratedResult(null);
    } catch (err) {
      alert("Failed to save project");
    }
  };

  const leadStatuses: LeadStatus[] = ['NEW', 'CONTACTED', 'QUALIFIED', 'DESIGN_DISCUSSION', 'PROPOSAL', 'WON', 'LOST'];

  // Sorting & Filtering Logic
  const parseBudgetValue = (budgetStr?: string): number => {
    if (!budgetStr) return 0;
    const cleaned = budgetStr.toLowerCase().replace(/,/g, '');
    const matches = cleaned.match(/(\d+)(\s*k|\s*m)?/g);
    if (!matches || matches.length === 0) return 0;

    let maxVal = 0;
    for (const m of matches) {
      let num = parseFloat(m);
      if (m.includes('k')) num *= 1000;
      if (m.includes('m')) num *= 1000000;
      if (num > maxVal) maxVal = num;
    }
    return maxVal;
  };

  const getLeadTimestamp = (createdAt?: string): number => {
    if (!createdAt) return 0;
    const ts = new Date(createdAt).getTime();
    return isNaN(ts) ? 0 : ts;
  };

  const getPriorityWeight = (priority?: string): number => {
    if (priority === 'High') return 3;
    if (priority === 'Medium') return 2;
    return 1;
  };

  const filteredAndSortedLeads = leads
    .filter((lead) => {
      if (statusFilter !== 'ALL' && lead.status !== statusFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = lead.name?.toLowerCase().includes(q);
        const matchCompany = lead.company?.toLowerCase().includes(q);
        const matchEmail = lead.email?.toLowerCase().includes(q);
        const matchLocation = lead.projectLocation?.toLowerCase().includes(q);
        const matchType = lead.projectType?.toLowerCase().includes(q);
        return matchName || matchCompany || matchEmail || matchLocation || matchType;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return getLeadTimestamp(b.createdAt) - getLeadTimestamp(a.createdAt);
      }
      if (sortBy === 'oldest') {
        return getLeadTimestamp(a.createdAt) - getLeadTimestamp(b.createdAt);
      }
      if (sortBy === 'value_desc') {
        return parseBudgetValue(b.budgetRange) - parseBudgetValue(a.budgetRange);
      }
      if (sortBy === 'value_asc') {
        return parseBudgetValue(a.budgetRange) - parseBudgetValue(b.budgetRange);
      }
      if (sortBy === 'priority') {
        return getPriorityWeight(b.priority) - getPriorityWeight(a.priority);
      }
      return 0;
    });

  const getStatusBadgeStyle = (status: LeadStatus) => {
    switch (status) {
      case 'NEW':
        return 'bg-[#C9A96A]/15 text-[#C9A96A] border-[#C9A96A]/40';
      case 'CONTACTED':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/40';
      case 'QUALIFIED':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40';
      case 'DESIGN_DISCUSSION':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/40';
      case 'PROPOSAL':
        return 'bg-indigo-500/15 text-indigo-400 border-indigo-500/40';
      case 'WON':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/40';
      case 'LOST':
        return 'bg-rose-500/15 text-rose-400 border-rose-500/40';
      default:
        return 'bg-gray-800 text-gray-300 border-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] pt-28 pb-20 text-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-800 mb-8">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded bg-[#C9A96A]/20 text-[#C9A96A] border border-[#C9A96A]/30">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-light text-[#F8F6F2]">
                Sutra Admin Portal & Lead Engine
              </h1>
              <p className="text-xs text-gray-400">
                Manage architectural project inquiries, publish case studies, and view Firebase cloud status.
              </p>
            </div>
          </div>

          <button
            onClick={onCloseAdmin}
            className="mt-4 md:mt-0 px-4 py-2 border border-gray-800 hover:border-[#C9A96A] text-xs uppercase tracking-wider rounded text-gray-300 transition-colors"
          >
            Return to Main Website
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-2 border-b border-gray-800 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === 'leads'
                ? 'bg-[#C9A96A] text-[#0B0F17]'
                : 'bg-[#0F172A] text-gray-400 hover:text-white'
            }`}
          >
            Inquiry Leads Pipeline ({leads.length})
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === 'projects'
                ? 'bg-[#C9A96A] text-[#0B0F17]'
                : 'bg-[#0F172A] text-gray-400 hover:text-white'
            }`}
          >
            Manage Portfolio ({projects.length})
          </button>

          <button
            onClick={() => setActiveTab('ai-writer')}
            className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all flex items-center space-x-1.5 ${
              activeTab === 'ai-writer'
                ? 'bg-[#C9A96A] text-[#0B0F17]'
                : 'bg-[#0F172A] text-gray-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gemini Case Study Generator</span>
          </button>

          <button
            onClick={() => setActiveTab('firebase')}
            className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all flex items-center space-x-1.5 ${
              activeTab === 'firebase'
                ? 'bg-[#C9A96A] text-[#0B0F17]'
                : 'bg-[#0F172A] text-gray-400 hover:text-white'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Firebase Cloud Engine</span>
          </button>
        </div>

        {/* Tab 1: Leads Pipeline */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl font-light">Lead Management Pipeline</h2>
                <p className="text-xs text-gray-400 mt-1">
                  Filter by inquiry status, sort by project budget or date, and manage lead progression.
                </p>
              </div>
              <button
                onClick={loadAdminData}
                className="text-xs text-[#C9A96A] flex items-center space-x-1.5 hover:underline border border-[#C9A96A]/30 px-3 py-1.5 rounded bg-[#1E293B]/50 transition-all self-start md:self-auto cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loadingLeads ? 'animate-spin' : ''}`} />
                <span>Refresh Leads</span>
              </button>
            </div>

            {/* Filtering & Sorting Controls Bar */}
            <div className="p-4 rounded-xl bg-[#0F172A] border border-gray-800 space-y-4 shadow-lg">
              {/* Status Filter Tabs / Quick Toggle Pills */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-xs uppercase text-gray-500 font-medium shrink-0 flex items-center space-x-1 mr-1">
                  <Filter className="w-3.5 h-3.5 text-[#C9A96A]" />
                  <span>Status:</span>
                </span>
                {(['ALL', 'NEW', 'CONTACTED', 'QUALIFIED', 'DESIGN_DISCUSSION', 'PROPOSAL', 'WON', 'LOST'] as const).map((status) => {
                  const count = status === 'ALL'
                    ? leads.length
                    : leads.filter(l => l.status === status).length;

                  const isSelected = statusFilter === status;
                  return (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium uppercase tracking-wider transition-all flex items-center space-x-1.5 whitespace-nowrap cursor-pointer ${
                        isSelected
                          ? 'bg-[#C9A96A] text-[#0B0F17] font-semibold shadow-md shadow-[#C9A96A]/20'
                          : 'bg-[#1E293B]/70 text-gray-400 hover:text-white hover:bg-[#1E293B]'
                      }`}
                    >
                      <span>{status === 'ALL' ? 'All Leads' : status.replace('_', ' ')}</span>
                      <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                        isSelected ? 'bg-[#0B0F17]/30 text-[#0B0F17]' : 'bg-black/30 text-gray-300'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Box & Sort Selector Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-gray-800/80">
                {/* Search Input */}
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search name, company, city..."
                    className="w-full bg-[#0B0F17] border border-gray-700/80 rounded-md pl-9 pr-8 py-1.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#C9A96A]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Sort By Controls */}
                <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                  <ArrowUpDown className="w-4 h-4 text-[#C9A96A] shrink-0" />
                  <span className="text-xs text-gray-400 font-medium whitespace-nowrap">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-[#0B0F17] border border-gray-700 text-[#F8F6F2] text-xs rounded-md px-3 py-1.5 focus:outline-none focus:border-[#C9A96A] cursor-pointer"
                  >
                    <option value="newest">Newest Timestamp First</option>
                    <option value="oldest">Oldest Timestamp First</option>
                    <option value="value_desc">Highest Project Value ($)</option>
                    <option value="value_asc">Lowest Project Value ($)</option>
                    <option value="priority">Priority (High → Low)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Counter Summary */}
            <div className="flex items-center justify-between text-xs text-gray-400 px-1">
              <span>
                Showing <strong className="text-[#C9A96A]">{filteredAndSortedLeads.length}</strong> of {leads.length} total inquiries
                {statusFilter !== 'ALL' && <span> • Filtered by status: <strong className="text-white">{statusFilter.replace('_', ' ')}</strong></span>}
                {searchQuery && <span> • Search: "{searchQuery}"</span>}
              </span>
              {(statusFilter !== 'ALL' || searchQuery || sortBy !== 'newest') && (
                <button
                  onClick={() => {
                    setStatusFilter('ALL');
                    setSearchQuery('');
                    setSortBy('newest');
                  }}
                  className="text-[#C9A96A] hover:underline cursor-pointer"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Leads List */}
            {filteredAndSortedLeads.length === 0 ? (
              <div className="p-12 text-center text-gray-500 bg-[#0F172A] rounded-xl border border-gray-800 space-y-2">
                <Filter className="w-8 h-8 text-gray-600 mx-auto mb-2 opacity-50" />
                <p className="text-sm font-medium text-gray-300">No matching inquiry leads found</p>
                <p className="text-xs text-gray-500">Try adjusting your status filter or search query.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {filteredAndSortedLeads.map((lead) => (
                    <motion.div
                      key={lead.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="p-6 rounded-xl bg-[#0F172A] border border-gray-800 hover:border-[#C9A96A]/40 transition-all shadow-lg space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-800/80 pb-4">
                        <div>
                          <div className="flex items-center space-x-2.5 flex-wrap gap-y-1">
                            <h3 className="font-serif text-xl font-light text-[#F8F6F2]">
                              {lead.name}
                            </h3>
                            <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#1E293B] text-[#C9A96A] border border-[#C9A96A]/20">
                              {lead.company}
                            </span>
                            {lead.priority && (
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                lead.priority === 'High'
                                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                                  : lead.priority === 'Medium'
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                  : 'bg-gray-800 text-gray-400'
                              }`}>
                                {lead.priority} Priority
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-400 mt-1 flex items-center space-x-2 flex-wrap gap-y-0.5">
                            <span>{lead.email}</span>
                            <span>•</span>
                            <span>{lead.phone}</span>
                            <span>•</span>
                            <span>{lead.country}</span>
                            {lead.createdAt && (
                              <>
                                <span>•</span>
                                <span className="flex items-center space-x-1 text-gray-400">
                                  <Calendar className="w-3 h-3 text-[#C9A96A]" />
                                  <span>{new Date(lead.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Status Select Box */}
                        <div className="flex items-center space-x-2 shrink-0">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Status:</span>
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                            className={`border text-xs font-semibold rounded-md px-3 py-1.5 focus:outline-none transition-all cursor-pointer ${getStatusBadgeStyle(lead.status)}`}
                          >
                            {leadStatuses.map(s => (
                              <option key={s} value={s} className="bg-[#0B0F17] text-[#F8F6F2]">
                                {s.replace('_', ' ')}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* AI Priority Assessment Summary */}
                      {lead.aiSummary && (
                        <div className="p-3.5 rounded-lg bg-[#1E293B]/70 border-l-2 border-[#C9A96A] text-xs text-gray-300 font-light">
                          <span className="font-semibold text-[#C9A96A] mb-1 flex items-center space-x-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#C9A96A]" />
                            <span>Gemini AI Priority Assessment:</span>
                          </span>
                          {lead.aiSummary}
                        </div>
                      )}

                      {/* Project Specs Matrix */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#0B0F17]/60 p-3.5 rounded-lg border border-gray-800/60">
                        <div>
                          <span className="text-gray-500 text-[10px] uppercase tracking-wider block mb-0.5">Project Type</span>
                          <span className="text-gray-200 font-medium">{lead.projectType}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-[10px] uppercase tracking-wider block mb-0.5">Location</span>
                          <span className="text-gray-200 font-medium">{lead.projectLocation}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-[10px] uppercase tracking-wider block mb-0.5">Project Budget</span>
                          <span className="text-[#C9A96A] font-semibold flex items-center space-x-0.5">
                            <DollarSign className="w-3.5 h-3.5" />
                            <span>{lead.budgetRange}</span>
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-[10px] uppercase tracking-wider block mb-0.5">Target Timeline</span>
                          <span className="text-gray-200 font-medium flex items-center space-x-1">
                            <Clock className="w-3 h-3 text-gray-400" />
                            <span>{lead.timeline}</span>
                          </span>
                        </div>
                      </div>

                      {/* Client Message */}
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium block mb-1">Inquiry Message:</span>
                        <p className="text-xs text-gray-300 bg-[#0B0F17] p-3.5 rounded-md border border-gray-800/80 italic leading-relaxed">
                          "{lead.message}"
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Projects List */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-light">Live Projects ({projects.length})</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((p) => (
                <div key={p.id} className="p-5 rounded bg-[#0F172A] border border-gray-800 flex items-center space-x-4">
                  <img
                    src={p.images[0]?.url || 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=300&auto=format&fit=crop'}
                    alt={p.title}
                    className="w-20 h-20 object-cover rounded border border-gray-700 shrink-0"
                  />
                  <div>
                    <span className="text-[10px] uppercase text-[#C9A96A] font-semibold">{p.category}</span>
                    <h3 className="font-serif text-lg font-light text-white">{p.title}</h3>
                    <span className="text-xs text-gray-400 block">{p.location}, {p.country} ({p.installationHeightFeet}ft Drop)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Gemini Case Study Generator */}
        {activeTab === 'ai-writer' && (
          <div className="space-y-6 max-w-3xl">
            <div>
              <h2 className="font-serif text-2xl font-light flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#C9A96A]" />
                <span>AI Case Study Generator</span>
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Enter rough notes and let Gemini draft a full Architectural Digest-style case study narrative for the portfolio.
              </p>
            </div>

            <form onSubmit={handleGenerateCaseStudy} className="p-6 rounded-lg bg-[#0F172A] border border-gray-800 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-300 block mb-1">Project Title</label>
                  <input
                    type="text"
                    required
                    value={caseTitle}
                    onChange={(e) => setCaseTitle(e.target.value)}
                    placeholder="e.g. Royal Opera Glass Wave"
                    className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-300 block mb-1">City / Location</label>
                  <input
                    type="text"
                    required
                    value={caseLocation}
                    onChange={(e) => setCaseLocation(e.target.value)}
                    placeholder="e.g. Vienna, Austria"
                    className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-300 block mb-1">Architect / Studio</label>
                <input
                  type="text"
                  value={caseArchitect}
                  onChange={(e) => setCaseArchitect(e.target.value)}
                  placeholder="e.g. Zaha Hadid Architects"
                  className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs text-gray-300 block mb-1">Raw Engineering & Design Notes</label>
                <textarea
                  rows={3}
                  value={caseNotes}
                  onChange={(e) => setCaseNotes(e.target.value)}
                  placeholder="Notes about furnace glass blowing, wind shear, acoustic dampening..."
                  className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white"
                />
              </div>

              <button
                type="submit"
                disabled={aiGenerating}
                className="w-full py-3 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-widest rounded transition-all flex items-center justify-center space-x-2"
              >
                {aiGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Gemini Drafting Editorial Case Study...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate Architectural Case Study</span>
                  </>
                )}
              </button>
            </form>

            {generatedResult && (
              <div className="p-6 rounded-lg bg-[#0B0F17] border border-[#C9A96A]/40 space-y-4">
                <h3 className="font-serif text-2xl text-[#C9A96A]">{generatedResult.title}</h3>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">The Challenge</span>
                  <p className="text-xs text-gray-300">{generatedResult.challenge}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Sutra's Solution</span>
                  <p className="text-xs text-gray-300">{generatedResult.solution}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Architectural Narrative</span>
                  <p className="text-xs text-gray-300 leading-relaxed">{generatedResult.architecturalDescription}</p>
                </div>

                <button
                  onClick={handleSaveGeneratedProject}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase font-semibold tracking-wider rounded"
                >
                  Publish This Project Live to Website Portfolio
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Firebase Config & Cloud Engine */}
        {activeTab === 'firebase' && (
          <div className="space-y-6 max-w-2xl">
            <div>
              <h2 className="font-serif text-2xl font-light flex items-center space-x-2">
                <Database className="w-5 h-5 text-[#C9A96A]" />
                <span>Firebase Cloud Engine & Persistence</span>
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                SUN LUMINOUS is integrated with Google Firebase & Firestore for real-time lead capture, client authentication, and cloud data persistence.
              </p>
            </div>

            <div className={`p-4 rounded-lg border flex items-center justify-between text-xs ${
              firebaseStatus.configured
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                : 'bg-amber-950/40 border-amber-500/40 text-amber-300'
            }`}>
              <div className="flex items-center space-x-2">
                <span className={`w-2 h-2 rounded-full ${firebaseStatus.configured ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                <span>{firebaseStatus.configured ? `Firebase Active (Project: ${firebaseStatus.projectId || 'Connected'})` : 'Server Local Backing Store Active (Firebase ready for credentials)'}</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#0F172A] border border-gray-800 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C9A96A]">Configured Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-[#0B0F17] rounded border border-gray-800/80">
                  <span className="text-gray-400 block text-[11px]">Client SDK (Firestore & Auth)</span>
                  <span className="font-mono text-white font-medium">src/lib/firebase.ts</span>
                </div>
                <div className="p-3 bg-[#0B0F17] rounded border border-gray-800/80">
                  <span className="text-gray-400 block text-[11px]">Server Admin SDK</span>
                  <span className="font-mono text-white font-medium">server/firebase-admin.ts</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-gray-400 space-y-2 border-t border-gray-800">
                <p>Environment variables are managed via <span className="text-white font-mono">.env.example</span> / AI Studio Secrets:</p>
                <div className="bg-[#0B0F17] p-3 rounded font-mono text-[11px] text-gray-300 space-y-1">
                  <div>VITE_FIREBASE_API_KEY</div>
                  <div>VITE_FIREBASE_PROJECT_ID</div>
                  <div>FIREBASE_SERVICE_ACCOUNT (Server Admin)</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
