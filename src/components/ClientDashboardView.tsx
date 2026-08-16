import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  User,
  Mail,
  Building2,
  FileText,
  Upload,
  Download,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  LogOut,
  FolderOpen,
  MessageCircle,
  Plus,
  Compass,
  Layers,
  Search,
  Check,
  AlertCircle,
  Eye,
  Trash2,
  DollarSign
} from 'lucide-react';
import { Lead, Project, LeadStatus } from '../types';
import { fetchLeads, fetchProjects } from '../lib/api';

interface ClientDashboardViewProps {
  onNavigateHome: () => void;
  onOpenStartProject: (initialMessage?: string) => void;
}

export interface ClientDocument {
  id: string;
  name: string;
  fileType: string;
  fileSize: string;
  uploadedAt: string;
  uploadedBy: 'Client' | 'Studio Architect';
  category: 'CAD / Drawing' | 'Photometric Spec' | 'Material Approval' | 'Contract' | 'Site Photo';
  downloadUrl?: string;
}

const SAMPLE_CLIENT_EMAILS = [
  {
    email: 'client.mayfair@sunluminous.com',
    name: 'Alexandra Vance',
    company: 'Vance & Partners Interior Architecture',
    project: 'Mayfair Boutique Hotel Foyer'
  },
  {
    email: 'client.minerva@sunluminous.com',
    name: 'Lokhandwala Engineering',
    company: 'Lokhandwala Infrastructure',
    project: 'Minerva Towers Grand Atrium'
  },
  {
    email: 'client.bali@sunluminous.com',
    name: 'The Oberoi Group',
    company: 'Oberoi Hotels & Resorts',
    project: 'Water Lily Pavilion Bali'
  }
];

export const ClientDashboardView: React.FC<ClientDashboardViewProps> = ({
  onNavigateHome,
  onOpenStartProject
}) => {
  // Auth state
  const [clientEmail, setClientEmail] = useState<string>(() => {
    return localStorage.getItem('sutra_client_email') || '';
  });
  const [inputEmail, setInputEmail] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  // Data state
  const [leads, setLeads] = useState<Lead[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'documents' | 'timeline'>('overview');

  // Client Documents state
  const [clientDocs, setClientDocs] = useState<Record<string, ClientDocument[]>>({});
  const [uploadCategory, setUploadCategory] = useState<ClientDocument['category']>('CAD / Drawing');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState<string>('');

  useEffect(() => {
    if (clientEmail) {
      loadClientData();
    }
  }, [clientEmail]);

  const loadClientData = async () => {
    setLoading(true);
    try {
      const [fetchedLeads, fetchedProjects] = await Promise.all([
        fetchLeads(),
        fetchProjects()
      ]);
      setLeads(fetchedLeads);
      setProjects(fetchedProjects);

      // Seed mock client documents if empty
      setClientDocs(prev => {
        if (Object.keys(prev).length > 0) return prev;
        return {
          'lead-01': [
            {
              id: 'doc-1',
              name: 'Mayfair_Lobby_CAD_Concept_v3.pdf',
              fileType: 'PDF',
              fileSize: '4.2 MB',
              uploadedAt: new Date().toISOString().split('T')[0],
              uploadedBy: 'Client',
              category: 'CAD / Drawing'
            },
            {
              id: 'doc-2',
              name: 'Photometric_3D_Light_Simulation.pdf',
              fileType: 'PDF',
              fileSize: '8.1 MB',
              uploadedAt: new Date().toISOString().split('T')[0],
              uploadedBy: 'Studio Architect',
              category: 'Photometric Spec'
            },
            {
              id: 'doc-3',
              name: 'Mouth_Blown_Amber_Glass_Finish_Spec.pdf',
              fileType: 'PDF',
              fileSize: '2.4 MB',
              uploadedAt: new Date().toISOString().split('T')[0],
              uploadedBy: 'Studio Architect',
              category: 'Material Approval'
            }
          ],
          'proj-minerva-towers': [
            {
              id: 'doc-mt-1',
              name: 'Minerva_Atrium_100ft_Structural_Load.dwg',
              fileType: 'DWG',
              fileSize: '14.5 MB',
              uploadedAt: '2024-01-20',
              uploadedBy: 'Studio Architect',
              category: 'CAD / Drawing'
            },
            {
              id: 'doc-mt-2',
              name: 'Mouth_Blown_Glass_Furnace_Certification.pdf',
              fileType: 'PDF',
              fileSize: '3.8 MB',
              uploadedAt: '2024-02-10',
              uploadedBy: 'Studio Architect',
              category: 'Material Approval'
            }
          ]
        };
      });
    } catch (err) {
      console.error('Failed to load client data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputEmail.trim() || !inputEmail.includes('@')) {
      setAuthError('Please enter a valid client email address.');
      return;
    }
    const cleanEmail = inputEmail.trim().toLowerCase();
    setClientEmail(cleanEmail);
    localStorage.setItem('sutra_client_email', cleanEmail);
    setAuthError('');
  };

  const handleQuickLogin = (email: string) => {
    setClientEmail(email);
    localStorage.setItem('sutra_client_email', email);
    setAuthError('');
  };

  const handleLogout = () => {
    setClientEmail('');
    localStorage.removeItem('sutra_client_email');
  };

  // Filter leads and projects matching current client email
  const clientLeads = leads.filter(
    l => l.email?.toLowerCase().trim() === clientEmail.toLowerCase().trim()
  );

  const clientProjects = projects.filter(
    p =>
      p.client?.toLowerCase().includes(clientEmail.split('@')[0].toLowerCase()) ||
      clientLeads.some(l => l.company?.toLowerCase() === p.client?.toLowerCase())
  );

  const activeInquiryCount = clientLeads.length;
  const completedProjectCount = clientProjects.length;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, projectId: string) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const file = files[0];

    setTimeout(() => {
      const newDoc: ClientDocument = {
        id: `doc-${Date.now()}`,
        name: file.name,
        fileType: file.name.split('.').pop()?.toUpperCase() || 'FILE',
        fileSize: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        uploadedAt: new Date().toISOString().split('T')[0],
        uploadedBy: 'Client',
        category: uploadCategory
      };

      setClientDocs(prev => ({
        ...prev,
        [projectId]: [newDoc, ...(prev[projectId] || [])]
      }));

      setIsUploading(false);
      setUploadSuccessMsg(`Successfully uploaded "${file.name}" to project documents.`);
      setTimeout(() => setUploadSuccessMsg(''), 4000);
    }, 1200);
  };

  const handleDeleteDoc = (projectId: string, docId: string) => {
    setClientDocs(prev => ({
      ...prev,
      [projectId]: (prev[projectId] || []).filter(d => d.id !== docId)
    }));
  };

  // Status Pipeline Steps
  const PIPELINE_STAGES: { id: LeadStatus; label: string; desc: string }[] = [
    { id: 'NEW', label: 'Inquiry Logged', desc: 'Initial project specs submitted to studio' },
    { id: 'CONTACTED', label: 'Design Intake', desc: 'Studio design lead assigned & initial review' },
    { id: 'QUALIFIED', label: 'Feasibility & Specs', desc: 'Spatial drop & furnace glass feasibility confirmed' },
    { id: 'DESIGN_DISCUSSION', label: '3D & Photometrics', desc: 'Rendering 3D glass models & optical calculations' },
    { id: 'PROPOSAL', label: 'Bespoke Proposal', desc: 'Formal quotation & glass sample approval' },
    { id: 'WON', label: 'Furnace Production', desc: 'Hand-blowing glass droplets & frame assembly' }
  ];

  const getStageIndex = (status: LeadStatus): number => {
    switch (status) {
      case 'NEW': return 0;
      case 'CONTACTED': return 1;
      case 'QUALIFIED': return 2;
      case 'DESIGN_DISCUSSION': return 3;
      case 'PROPOSAL': return 4;
      case 'NEGOTIATION': return 4;
      case 'WON': return 5;
      case 'LOST': return -1;
      default: return 0;
    }
  };

  // If client is not logged in, render Login View
  if (!clientEmail) {
    return (
      <div className="min-h-screen bg-[#0B0F17] pt-28 pb-20 flex items-center justify-center px-4 text-[#F8F6F2]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-[#0F172A] border border-[#C9A96A]/30 p-8 rounded-2xl shadow-2xl space-y-6 relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C9A96A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-2">
            <span className="text-[10px] tracking-[0.3em] font-light uppercase text-[#C9A96A] block">
              SUTRA LUMINIS BESPOKE
            </span>
            <h1 className="font-serif text-2xl md:text-3xl font-light text-[#F8F6F2]">
              Client Access Portal
            </h1>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Track project milestones, furnace manufacturing status, photometrics, and CAD documents in real-time.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 pt-2">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1.5">
                Client / Architecture Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#C9A96A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  placeholder="client.mayfair@sunluminous.com"
                  className="w-full bg-[#0B0F17] border border-gray-700 focus:border-[#C9A96A] rounded-lg pl-10 pr-4 py-3 text-xs text-[#F8F6F2] placeholder-gray-600 focus:outline-none transition-all"
                  required
                />
              </div>
            </div>

            {authError && (
              <p className="text-xs text-rose-400 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{authError}</span>
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] text-xs font-semibold uppercase tracking-widest rounded-lg transition-all shadow-lg shadow-[#C9A96A]/20 cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Access Client Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Login Options */}
          <div className="pt-4 border-t border-gray-800 space-y-2.5">
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium block text-center">
              Quick Client Portal Demo Accounts
            </span>
            <div className="space-y-2">
              {SAMPLE_CLIENT_EMAILS.map((c) => (
                <button
                  key={c.email}
                  onClick={() => handleQuickLogin(c.email)}
                  className="w-full p-2.5 bg-[#1E293B]/70 hover:bg-[#1E293B] border border-gray-800 hover:border-[#C9A96A]/40 rounded-lg text-left transition-all cursor-pointer group flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-medium text-gray-200 group-hover:text-[#C9A96A] block">
                      {c.name} ({c.company})
                    </span>
                    <span className="text-[10px] text-gray-400 block">{c.project} • {c.email}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#C9A96A] group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onNavigateHome}
              className="text-xs text-gray-400 hover:text-white underline cursor-pointer"
            >
              Return to Sutra Luminis Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const clientName = clientLeads[0]?.name || clientEmail.split('@')[0];
  const clientCompany = clientLeads[0]?.company || 'Architectural Partner';

  return (
    <div className="min-h-screen bg-[#0B0F17] pt-28 pb-20 text-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Top Header Banner */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1E293B]/80 to-[#0F172A] border border-[#C9A96A]/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-[#C9A96A]/20 text-[#C9A96A] border border-[#C9A96A]/30">
                Authenticated Client Account
              </span>
              <span className="text-xs text-gray-400">{clientCompany}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-[#F8F6F2]">
              Welcome, {clientName}
            </h1>
            <p className="text-xs text-gray-400 font-light max-w-xl">
              Access your real-time project timeline, glass fabrication updates, CAD blueprints, and photometric spec sheets directly with the studio.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenStartProject(`Follow-up regarding active project under ${clientEmail}`)}
              className="px-4 py-2.5 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] text-xs uppercase tracking-widest font-semibold rounded-md transition-all cursor-pointer flex items-center space-x-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Inquiry</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2.5 border border-gray-700 hover:border-rose-500/50 hover:bg-rose-500/10 text-gray-300 hover:text-rose-300 text-xs uppercase tracking-wider rounded-md transition-all cursor-pointer flex items-center space-x-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Key Metrics Quick Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-[#0F172A] border border-gray-800 space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium block">
              Active Inquiries
            </span>
            <div className="text-2xl font-serif text-[#C9A96A] font-light">
              {activeInquiryCount}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#0F172A] border border-gray-800 space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium block">
              Completed Projects
            </span>
            <div className="text-2xl font-serif text-emerald-400 font-light">
              {completedProjectCount}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#0F172A] border border-gray-800 space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium block">
              Client Contact Email
            </span>
            <div className="text-xs text-gray-200 truncate font-mono">
              {clientEmail}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#0F172A] border border-gray-800 space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium block">
              Assigned Studio
            </span>
            <div className="text-xs text-[#C9A96A] font-medium flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sutra Luminis Lead Design</span>
            </div>
          </div>
        </div>

        {/* Dashboard View Tabs */}
        <div className="flex items-center space-x-2 border-b border-gray-800 pb-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'text-[#C9A96A] border-b-2 border-[#C9A96A]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Project Status & Timeline
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all cursor-pointer ${
              activeTab === 'documents'
                ? 'text-[#C9A96A] border-b-2 border-[#C9A96A]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            CAD Drawings & Spec Sheets
          </button>
        </div>

        {/* Upload Success Alert */}
        {uploadSuccessMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{uploadSuccessMsg}</span>
            </div>
            <button onClick={() => setUploadSuccessMsg('')} className="text-emerald-400 font-bold hover:text-white">
              ×
            </button>
          </motion.div>
        )}

        {/* TAB 1: OVERVIEW & STATUS PIPELINE */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {clientLeads.length === 0 && clientProjects.length === 0 ? (
              <div className="p-12 text-center bg-[#0F172A] rounded-2xl border border-gray-800 space-y-4">
                <Compass className="w-10 h-10 text-gray-600 mx-auto opacity-40" />
                <h3 className="font-serif text-xl text-gray-300 font-light">No Active Inquiries Found</h3>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  We could not find any active project inquiries registered under <strong>{clientEmail}</strong>.
                </p>
                <button
                  onClick={() => onOpenStartProject()}
                  className="px-6 py-3 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] text-xs font-semibold uppercase tracking-widest rounded-lg inline-flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <span>Submit New Project Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                {/* Active Leads / Inquiries */}
                {clientLeads.map((lead) => {
                  const stageIdx = getStageIndex(lead.status);
                  const progressPct = lead.status === 'WON' ? 100 : Math.max(15, Math.round(((stageIdx + 1) / 6) * 100));

                  return (
                    <div
                      key={lead.id}
                      className="p-6 md:p-8 rounded-2xl bg-[#0F172A] border border-gray-800 space-y-6 shadow-xl"
                    >
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800/80 pb-4">
                        <div>
                          <div className="flex items-center space-x-3 flex-wrap gap-y-1">
                            <h2 className="font-serif text-2xl font-light text-[#F8F6F2]">
                              {lead.projectType} Installation
                            </h2>
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C9A96A]/15 text-[#C9A96A] border border-[#C9A96A]/40">
                              Status: {lead.status.replace('_', ' ')}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1 flex items-center space-x-2">
                            <MapPin className="w-3.5 h-3.5 text-[#C9A96A]" />
                            <span>{lead.projectLocation}</span>
                            <span>•</span>
                            <span>Inquiry Ref: #{lead.id}</span>
                          </p>
                        </div>

                        <a
                          href={`https://wa.me/919820188472?text=${encodeURIComponent(`Hello SUN LUMINOUS Concierge, inquiring about lead status for ${lead.projectType} (${lead.id}).`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider rounded-md flex items-center space-x-2 self-start md:self-auto cursor-pointer transition-all"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Contact Studio Lead</span>
                        </a>
                      </div>

                      {/* Timeline Pipeline Tracker */}
                      <div className="space-y-4 bg-[#0B0F17] p-6 rounded-xl border border-gray-800">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 uppercase tracking-wider text-[10px] font-semibold">
                            Project Fabrication Progress
                          </span>
                          <span className="text-[#C9A96A] font-bold">{progressPct}% Complete</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPct}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="bg-gradient-to-r from-[#C9A96A] to-amber-300 h-full rounded-full"
                          />
                        </div>

                        {/* Milestones Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
                          {PIPELINE_STAGES.map((stage, idx) => {
                            const isDone = idx <= stageIdx;
                            const isCurrent = idx === stageIdx;

                            return (
                              <div
                                key={stage.id}
                                className={`p-3 rounded-lg border text-xs space-y-1 transition-all ${
                                  isCurrent
                                    ? 'bg-[#C9A96A]/10 border-[#C9A96A] text-white shadow-md shadow-[#C9A96A]/10'
                                    : isDone
                                    ? 'bg-[#1E293B]/60 border-emerald-500/40 text-emerald-300'
                                    : 'bg-[#0F172A]/40 border-gray-800/80 text-gray-600'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-bold">0{idx + 1}</span>
                                  {isDone ? (
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                  ) : (
                                    <Clock className="w-3.5 h-3.5 text-gray-600" />
                                  )}
                                </div>
                                <span className="font-semibold block truncate">{stage.label}</span>
                                <p className="text-[9px] text-gray-400 leading-tight line-clamp-2">
                                  {stage.desc}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Gemini AI Assessment Summary */}
                      {lead.aiSummary && (
                        <div className="p-4 rounded-xl bg-[#1E293B]/60 border-l-2 border-[#C9A96A] text-xs text-gray-300 space-y-1">
                          <span className="font-semibold text-[#C9A96A] flex items-center space-x-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#C9A96A]" />
                            <span>Studio Design Assessment & Feasibility Summary</span>
                          </span>
                          <p className="font-light leading-relaxed">{lead.aiSummary}</p>
                        </div>
                      )}

                      {/* Project Specs Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-[#0B0F17]/70 border border-gray-800 text-xs">
                        <div>
                          <span className="text-gray-500 text-[10px] uppercase tracking-wider block">Target Budget</span>
                          <span className="text-[#C9A96A] font-semibold">{lead.budgetRange}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-[10px] uppercase tracking-wider block">Estimated Timeline</span>
                          <span className="text-gray-200 font-medium">{lead.timeline}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-[10px] uppercase tracking-wider block">Project Type</span>
                          <span className="text-gray-200 font-medium">{lead.projectType}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-[10px] uppercase tracking-wider block">Date Logged</span>
                          <span className="text-gray-200 font-medium">
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      {/* Inquiry Message */}
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium block">
                          Submitted Requirements & Context:
                        </span>
                        <p className="p-3.5 rounded-lg bg-[#0B0F17] border border-gray-800 text-xs text-gray-300 italic">
                          "{lead.message}"
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Completed Portfolio Projects for Client */}
                {clientProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-6 md:p-8 rounded-2xl bg-[#0F172A] border border-emerald-500/30 space-y-4 shadow-xl"
                  >
                    <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                          Completed Studio Installation
                        </span>
                        <h3 className="font-serif text-2xl font-light text-[#F8F6F2]">
                          {proj.title}
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        {proj.status} ({proj.year})
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 font-light leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs bg-[#0B0F17] p-3.5 rounded-lg border border-gray-800">
                      <div><span className="text-gray-500 block text-[10px]">Height</span> {proj.installationHeightFeet} ft</div>
                      <div><span className="text-gray-500 block text-[10px]">Element Count</span> {proj.elementCount || 'N/A'} Glass Drops</div>
                      <div><span className="text-gray-500 block text-[10px]">Manufacturing</span> {proj.manufacturingTimeWeeks} Weeks</div>
                      <div><span className="text-gray-500 block text-[10px]">Architect</span> {proj.architect}</div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {/* TAB 2: UPLOADED DOCUMENTS & CAD SPECIFICATIONS */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-light">Project Documents & CAD Specifications</h2>
                <p className="text-xs text-gray-400 mt-1">
                  Upload architectural DWG files, site photos, or download photometrics and glass finish sign-offs.
                </p>
              </div>
            </div>

            {clientLeads.map((lead) => {
              const docs = clientDocs[lead.id] || [];

              return (
                <div
                  key={lead.id}
                  className="p-6 md:p-8 rounded-2xl bg-[#0F172A] border border-gray-800 space-y-6 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-4">
                    <div>
                      <h3 className="font-serif text-xl font-light text-[#F8F6F2]">
                        {lead.projectType} ({lead.projectLocation})
                      </h3>
                      <span className="text-xs text-gray-400">
                        Ref #{lead.id} • {docs.length} Document(s) attached
                      </span>
                    </div>

                    {/* Upload File Control */}
                    <div className="flex items-center space-x-2">
                      <select
                        value={uploadCategory}
                        onChange={(e) => setUploadCategory(e.target.value as any)}
                        className="bg-[#0B0F17] border border-gray-700 text-xs text-gray-200 rounded-lg px-2.5 py-2 focus:outline-none focus:border-[#C9A96A]"
                      >
                        <option value="CAD / Drawing">CAD / Drawing</option>
                        <option value="Photometric Spec">Photometric Spec</option>
                        <option value="Material Approval">Material Approval</option>
                        <option value="Site Photo">Site Photo</option>
                        <option value="Contract">Contract</option>
                      </select>

                      <label className="px-4 py-2 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center space-x-1.5 shadow-md">
                        <Upload className="w-3.5 h-3.5" />
                        <span>{isUploading ? 'Uploading...' : 'Upload Document'}</span>
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload(e, lead.id)}
                          className="hidden"
                          accept=".pdf,.dwg,.cad,.png,.jpg,.jpeg,.zip"
                          disabled={isUploading}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Documents List */}
                  {docs.length === 0 ? (
                    <div className="p-8 text-center text-gray-500 bg-[#0B0F17] rounded-xl border border-gray-800">
                      No documents uploaded for this inquiry yet. Use the button above to upload CAD drawings or site photos.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {docs.map((doc) => (
                        <div
                          key={doc.id}
                          className="p-4 rounded-xl bg-[#0B0F17] border border-gray-800 hover:border-[#C9A96A]/40 transition-all flex items-center justify-between group"
                        >
                          <div className="flex items-center space-x-3 overflow-hidden">
                            <div className="p-2.5 rounded-lg bg-[#1E293B] text-[#C9A96A] shrink-0">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div className="min-w-0">
                              <span className="text-xs font-medium text-gray-200 block truncate group-hover:text-[#C9A96A] transition-colors">
                                {doc.name}
                              </span>
                              <div className="text-[10px] text-gray-500 flex items-center space-x-2 mt-0.5">
                                <span className="px-1.5 py-0.2 rounded bg-gray-800 text-gray-300 font-mono">
                                  {doc.fileType}
                                </span>
                                <span>{doc.fileSize}</span>
                                <span>•</span>
                                <span>{doc.category}</span>
                                <span>•</span>
                                <span className="text-gray-400">{doc.uploadedBy}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 shrink-0 ml-2">
                            <a
                              href={`#download-${doc.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                alert(`Simulating download for ${doc.name}`);
                              }}
                              className="p-2 rounded-lg bg-[#1E293B] hover:bg-[#C9A96A] hover:text-[#0B0F17] text-gray-300 transition-all cursor-pointer"
                              title="Download document"
                            >
                              <Download className="w-4 h-4" />
                            </a>
                            <button
                              onClick={() => handleDeleteDoc(lead.id, doc.id)}
                              className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white transition-all cursor-pointer"
                              title="Remove document"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
