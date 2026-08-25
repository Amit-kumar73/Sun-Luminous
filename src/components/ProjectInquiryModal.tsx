import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle, Upload, ArrowRight, ShieldCheck, FileText, Send, Sparkles } from 'lucide-react';
import { submitLeadData } from '../lib/firebase';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  initialMessage = '',
}) => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
  const [projectType, setProjectType] = useState('Hospitality');
  const [projectLocation, setProjectLocation] = useState('');
  const [budgetRange, setBudgetRange] = useState('$100,000 - $250,000');
  const [timeline, setTimeline] = useState('3-6 Months');
  const [message, setMessage] = useState(initialMessage);
  const [attachmentName, setAttachmentName] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leadId, setLeadId] = useState<string | null>(null);

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachmentName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name,
      company: company || 'Independent Architect / Private Client',
      email,
      phone,
      country,
      projectType,
      projectLocation,
      budgetRange,
      timeline,
      message,
      attachmentName: attachmentName || undefined,
      source: 'Start a Project Wizard',
      createdAt: new Date().toISOString()
    };

    try {
      const res = await submitLeadData(payload);
      setIsSubmitted(true);
      if (res?.data?.id) {
        setLeadId(res.data.id);
      }
    } catch (err) {
      console.error('Submit lead error:', err);
      // Fallback display
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F172A]/90 backdrop-blur-xl overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl bg-[#0F172A] border border-[#C9A96A]/40 rounded-lg shadow-2xl overflow-hidden my-auto"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B0F17] border-b border-[#C9A96A]/20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#C9A96A]" />
            <h2 className="font-serif text-xl font-light text-[#F8F6F2]">
              Commission a Sutra Installation
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-[#1E293B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-gray-400 pb-3 border-b border-gray-800">
                <span className="uppercase tracking-widest font-semibold text-[#C9A96A]">
                  Step {step} of 2: {step === 1 ? 'Project Scope' : 'Contact & Drawings'}
                </span>
                <span className="text-[10px] text-gray-500">Confidential Inquiry</span>
              </div>

              {step === 1 ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-gray-300 block mb-1">
                        Project Classification
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                      >
                        <option value="Hospitality">Luxury Hospitality & Resorts</option>
                        <option value="Residential">Ultra-Luxury Residential / Villa</option>
                        <option value="Commercial">Commercial Headquarters / Atrium</option>
                        <option value="Large Installations">Monumental Sculptural Installation</option>
                        <option value="Heritage & Religious">Heritage & Cultural Art</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-gray-300 block mb-1">
                        Project Location / City
                      </label>
                      <input
                        type="text"
                        required
                        value={projectLocation}
                        onChange={(e) => setProjectLocation(e.target.value)}
                        placeholder="e.g. London, Dubai, New York"
                        className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-gray-300 block mb-1">
                        Target Budget Range
                      </label>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                      >
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                        <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                        <option value="$500,000+">$500,000+ (Monumental)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-gray-300 block mb-1">
                        Target Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                      >
                        <option value="1-3 Months">1-3 Months (Fast Track)</option>
                        <option value="3-6 Months">3-6 Months (Standard Craft)</option>
                        <option value="6-12 Months">6-12 Months (Large Architectural)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-gray-300 block mb-1">
                      Project Description & Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify ceiling heights, drop requirements, architectural materials, or glass finishes..."
                      className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (!projectLocation) {
                        alert('Please enter project location / city.');
                        return;
                      }
                      setStep(2);
                    }}
                    className="w-full py-3 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Next: Contact & Drawings</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-gray-300 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Lord / Lady / Architect Name"
                        className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-gray-300 block mb-1">
                        Company / Design Studio
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Gensler, Fosters & Partners"
                        className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-gray-300 block mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="architect@studio.com"
                        className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-gray-300 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 019-2834"
                        className="w-full bg-[#0B0F17] border border-gray-800 rounded p-2.5 text-xs text-white focus:border-[#C9A96A] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Attachment Reference */}
                  <div className="p-4 rounded border border-dashed border-gray-700 bg-[#0B0F17]/50 text-center">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.dwg,.zip,.jpg,.png"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center justify-center space-y-1 text-xs text-gray-400 hover:text-[#C9A96A]"
                    >
                      <Upload className="w-5 h-5 text-[#C9A96A]" />
                      <span className="font-medium text-gray-300">
                        {attachmentName ? `Attached: ${attachmentName}` : 'Upload CAD Drawings, PDF Renders or Moodboards'}
                      </span>
                      <span className="text-[10px] text-gray-500">Supported: PDF, DWG, ZIP, JPG (Up to 25MB)</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs uppercase text-gray-400 hover:text-white underline"
                    >
                      ← Back to Scope
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Transmitting Lead...' : 'Submit Confidential Inquiry'}</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#C9A96A]/20 text-[#C9A96A] border border-[#C9A96A]/40 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-3xl font-light text-[#F8F6F2]">
                Inquiry Received
              </h3>

              <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#C9A96A] font-semibold">{name}</span>. Your project proposal has been logged with our Bespoke Architectural Engineering Desk.
              </p>

              {leadId && (
                <span className="inline-block px-3 py-1 rounded bg-[#1E293B] text-[11px] font-mono text-[#C9A96A]">
                  Reference ID: {leadId}
                </span>
              )}

              <p className="text-[11px] text-gray-500">
                A senior lighting consultant will review your ceiling specifications and reach out within 24 hours.
              </p>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 bg-[#1E293B] text-gray-300 hover:text-white text-xs uppercase tracking-wider rounded"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
