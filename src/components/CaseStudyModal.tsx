import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, MapPin, Calendar, User, Ruler, Layers, Clock, ArrowUpRight, Download, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';
import { Project } from '../types';
import { SkeletonPulse } from './SkeletonLoader';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenStartProject: (initialMessage?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenStartProject,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  if (!project) return null;

  const studioWhatsAppNumber = '18005557887';
  const whatsappPreconfiguredText = `Hello Sutra Luminis Studio, I am interested in a bespoke design consultation regarding the "${project.title}" installation (${project.category} in ${project.location}, ${project.country}). Project Ref #${project.id}.`;
  const whatsappUrl = `https://wa.me/${studioWhatsAppNumber}?text=${encodeURIComponent(whatsappPreconfiguredText)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0F172A]/90 backdrop-blur-xl overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl bg-[#0F172A] border border-[#C9A96A]/30 rounded-lg shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0B0F17]/90 border-b border-[#C9A96A]/20 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#C9A96A]/20 text-[#C9A96A] border border-[#C9A96A]/30">
              {project.category}
            </span>
            <span className="text-xs text-gray-400 font-medium">Case Study Reference #{project.id}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-[#1E293B] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-10">
          {/* Hero Banner with Skeleton Placeholder */}
          <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden border border-[#C9A96A]/20 bg-[#0B0F17]">
            {!isImageLoaded && (
              <SkeletonPulse className="absolute inset-0 w-full h-full rounded-none z-10" />
            )}
            <img
              src={project.images[0]?.url || 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1600&auto=format&fit=crop'}
              alt={project.title}
              onLoad={() => setIsImageLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent z-10" />
            
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="flex items-center space-x-2 text-[#C9A96A] text-xs uppercase tracking-widest font-medium mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.location}, {project.country}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F8F6F2]">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Quick Specifications Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-lg bg-[#0B0F17] border border-[#1E293B]">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-medium">Architect / Designer</span>
              <span className="text-sm font-semibold text-[#F8F6F2] mt-0.5 block">{project.architect || 'Sutra Bespoke Studio'}</span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-medium">Installation Drop</span>
              <span className="text-sm font-semibold text-[#C9A96A] mt-0.5 block">{project.installationHeightFeet} Feet ({Math.round(project.installationHeightFeet * 0.3048)}m)</span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-medium">Glass / Crystal Count</span>
              <span className="text-sm font-semibold text-[#F8F6F2] mt-0.5 block">{project.elementCount ? `${project.elementCount.toLocaleString()} Hand-Blown Drops` : 'Custom Cluster'}</span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-medium">Lead Time</span>
              <span className="text-sm font-semibold text-[#F8F6F2] mt-0.5 block">{project.manufacturingTimeWeeks} Weeks Crafting</span>
            </div>
          </div>

          {/* Project Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A96A] mb-2">
                  Project Overview
                </h3>
                <p className="text-base text-gray-300 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#1E293B]/50 border-l-2 border-[#C9A96A] space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F8F6F2] flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96A]" />
                  <span>The Architectural Challenge</span>
                </h4>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#1E293B]/50 border-l-2 border-emerald-500 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F8F6F2] flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Sutra’s Engineering & Glassblowing Solution</span>
                </h4>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Materials & Technical Details */}
            <div className="space-y-6 p-6 rounded-lg bg-[#0B0F17] border border-[#1E293B]">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A96A]">
                Materials & Craftsmanship
              </h3>

              <div className="space-y-2">
                {project.materials.map((mat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300 py-1 border-b border-gray-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96A]" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-800">
                <span className="text-[11px] text-gray-400 block font-medium">Installation Type</span>
                <span className="text-xs font-semibold text-[#F8F6F2] mt-1 block">{project.installationType}</span>
              </div>

              {project.blueprintUrl && (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Downloading architectural blueprint specs for ${project.title}`);
                  }}
                  className="w-full py-2.5 px-4 rounded border border-[#C9A96A]/40 text-[#C9A96A] hover:bg-[#C9A96A]/10 text-xs font-medium uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Spec Drawing</span>
                </a>
              )}
            </div>
          </div>

          {/* Gallery Images */}
          {project.images.length > 1 && (
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A96A]">
                Craftsmanship & Installation Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((img) => (
                  <div key={img.id} className="group relative h-48 rounded overflow-hidden border border-gray-800">
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {img.caption && (
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent text-[11px] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        {img.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTA inside Modal */}
          <div className="p-8 rounded-lg bg-gradient-to-r from-[#1E293B] to-[#0F172A] border border-[#C9A96A]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-2xl text-[#F8F6F2] font-light">
                Have a similar architectural scale?
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                Collaborate with Sutra Luminis engineers to customize dimensions, glass finishes, and light temperature.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase tracking-widest font-semibold rounded-sm flex items-center space-x-2 transition-all cursor-pointer shadow-lg shadow-emerald-950/50"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>WhatsApp Studio</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenStartProject(`Inquiry regarding bespoke installation similar to ${project.title} (${project.location}).`);
                }}
                className="px-6 py-3 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] text-xs uppercase tracking-widest font-semibold rounded-sm flex items-center space-x-2 transition-all cursor-pointer"
              >
                <span>Inquire About This Style</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Sticky WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-6 right-6 z-30 flex items-center space-x-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 cursor-pointer group transition-all"
          title={`Initiate direct WhatsApp design consultation for ${project.title}`}
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-white fill-white/20 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
          </div>
          <span className="text-xs font-semibold tracking-wide uppercase hidden sm:inline">
            WhatsApp Consultation
          </span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};
