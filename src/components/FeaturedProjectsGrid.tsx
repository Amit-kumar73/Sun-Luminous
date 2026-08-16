import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowUpRight, Sparkles, Filter, Layers, Check, LayoutGrid } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { ProjectCardSkeleton } from './SkeletonLoader';
import { useLanguage } from '../lib/LanguageContext';

interface FeaturedProjectsGridProps {
  projects: Project[];
  isLoading?: boolean;
  onSelectProject: (project: Project) => void;
  onOpenStartProject: () => void;
}

interface CategoryOption {
  id: string;
  label: string;
  labelHi: string;
}

export const FeaturedProjectsGrid: React.FC<FeaturedProjectsGridProps> = ({
  projects,
  isLoading = false,
  onSelectProject,
  onOpenStartProject,
}) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories: CategoryOption[] = [
    { id: 'ALL', label: 'All Works', labelHi: 'सभी परियोजनाएं' },
    { id: 'Residential', label: 'Residential', labelHi: 'आवासीय' },
    { id: 'Commercial', label: 'Commercial', labelHi: 'व्यावसायिक' },
    { id: 'Sculptural', label: 'Sculptural Art', labelHi: 'मूर्तिकला कला' },
    { id: 'Hospitality', label: 'Hospitality', labelHi: 'हॉस्पिटैलिटी' },
    { id: 'Builder', label: 'Large Installations', labelHi: 'भव्य इंस्टॉलेशन' },
    { id: 'Heritage & Religious', label: 'Heritage & Palaces', labelHi: 'हेरिटेज व महल' },
  ];

  const matchProjectCategory = (project: Project, categoryKey: string): boolean => {
    if (categoryKey === 'ALL' || categoryKey === '' || !categoryKey) return true;
    const catLower = categoryKey.toLowerCase();
    const pCat = (project.category || '').toLowerCase();
    const pType = (project.installationType || '').toLowerCase();
    const pDesc = (project.description || '').toLowerCase();
    const pClient = (project.client || '').toLowerCase();

    if (catLower === 'residential') {
      return pCat.includes('residential') || pType.includes('residential') || pType.includes('estate') || pType.includes('dining');
    }
    if (catLower === 'commercial') {
      return pCat.includes('commercial') || pType.includes('commercial') || pType.includes('plaza') || pType.includes('corporate');
    }
    if (catLower === 'sculptural' || catLower === 'sculptural art') {
      return pCat.includes('sculptur') || pType.includes('sculpture') || pType.includes('wave') || pDesc.includes('sculptural');
    }
    if (catLower === 'hospitality') {
      return pCat.includes('hospitality') || pType.includes('pavilion') || pType.includes('hotel') || pType.includes('resort');
    }
    if (catLower === 'builder') {
      return (
        pCat.includes('builder') ||
        pCat.includes('large installations') ||
        pType.includes('builder') ||
        pType.includes('atrium') ||
        pClient.includes('infrastructure') ||
        pClient.includes('developer')
      );
    }
    if (catLower.includes('heritage') || catLower.includes('religious')) {
      return pCat.includes('heritage') || pCat.includes('religious') || pType.includes('palace');
    }
    return pCat === catLower;
  };

  const getCategoryCount = (categoryKey: string): number => {
    if (categoryKey === 'ALL' || categoryKey === '') return projects.length;
    return projects.filter(p => matchProjectCategory(p, categoryKey)).length;
  };

  const filteredProjects = selectedCategory === 'ALL' || selectedCategory === ''
    ? projects
    : projects.filter(p => matchProjectCategory(p, selectedCategory));

  const showSkeletons = isLoading || projects.length === 0;

  return (
    <section id="portfolio" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-[#E5E0D5] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#9E7B35] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B35]" />
              <span>{language === 'hi' ? 'वास्तुशिल्प पोर्टफोलियो' : 'Architectural Portfolio'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1C1917] tracking-tight">
              {language === 'hi' ? 'चयनित वैश्विक मास्टरवर्क्स' : 'Selected Global Projects'}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#57534E] font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            {language === 'hi'
              ? '100-फुट ऊंचे वर्टिकल एट्रियम ड्रॉप्स से लेकर तैरते ग्लास पैवेलियन तक, प्रत्येक इंस्टॉलेशन अनुकूलित रूप से हस्तनिर्मित है।'
              : 'From 100-foot vertical atrium drops to floating marine glass pavilions, each installation is custom-engineered and handcrafted to order.'}
          </p>
        </div>

        {/* Animated Category Filter Navigation */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = getCategoryCount(cat.id);
              const label = language === 'hi' ? cat.labelHi : cat.label;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center space-x-2 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#57534E] hover:text-[#1C1917] border border-[#E0D9CC] bg-white hover:border-[#9E7B35]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#9E7B35] rounded-full shadow-md z-0"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                  <span
                    className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : 'bg-[#F2EFE9] text-[#78716C]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Reordering Editorial Grid with Framer Motion Layout */}
        {showSkeletons ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <ProjectCardSkeleton isGrand={true} />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </div>
        ) : filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-white rounded-xl border border-[#E5E0D5] p-8 shadow-sm"
          >
            <Layers className="w-12 h-12 text-[#9E7B35] mx-auto mb-4" />
            <h3 className="text-xl font-serif text-[#1C1917] mb-2">No projects found in this category</h3>
            <p className="text-sm text-[#57534E] max-w-md mx-auto mb-6">
              We specialize in custom commissions for any architectural scale. Contact our bespoke engineering team.
            </p>
            <button
              onClick={() => setSelectedCategory('ALL')}
              className="px-6 py-2.5 bg-[#1C1917] hover:bg-[#9E7B35] text-white rounded text-xs uppercase tracking-wider font-semibold transition-all"
            >
              View All Projects
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isGrand = index === 0 && (selectedCategory === 'ALL' || selectedCategory === '');

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 15 }}
                    transition={{
                      layout: { type: "spring", stiffness: 350, damping: 32 },
                      opacity: { duration: 0.25 },
                      scale: { duration: 0.25 },
                    }}
                    whileHover={{ y: -6 }}
                    onClick={() => onSelectProject(project)}
                    className={`group cursor-pointer rounded-lg overflow-hidden border border-[#E7E2D8] hover:border-[#9E7B35] bg-white transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${
                      isGrand ? 'lg:col-span-8' : 'lg:col-span-4'
                    }`}
                  >
                    {/* Image Container */}
                    <div className={`relative overflow-hidden ${isGrand ? 'h-80 sm:h-[420px]' : 'h-68'}`}>
                      <img
                        src={project.images[0]?.url || 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1200&auto=format&fit=crop'}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                      {/* Category Pill */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-white/95 text-[#1C1917] border border-[#E7E2D8] shadow-xs backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>

                      {/* Location Badge */}
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="flex items-center space-x-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-[#EADBBE]" />
                          <span>{project.location}, {project.country}</span>
                        </span>

                        {project.installationHeightFeet && (
                          <span className="px-2.5 py-0.5 rounded bg-black/60 text-[#EADBBE] font-serif font-light text-xs backdrop-blur-xs">
                            {project.installationHeightFeet}ft Drop
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Information */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold">
                            Architect: {project.architect}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-[#78716C] group-hover:text-[#9E7B35] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>

                        <h3 className="font-serif text-2xl font-light text-[#1C1917] group-hover:text-[#9E7B35] transition-colors mb-2">
                          {project.title}
                        </h3>

                        <p className="text-xs text-[#57534E] line-clamp-2 font-light leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>

                      {/* Materials tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#F0ECE1]">
                        {project.materials.slice(0, 3).map((m, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] bg-[#F5F2EB] text-[#57534E] font-medium"
                          >
                            {m}
                          </span>
                        ))}
                        {project.materials.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] text-[#8C827A]">
                            +{project.materials.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenStartProject}
            className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-sm border border-[#9E7B35] bg-white text-[#8C6D2D] hover:bg-[#9E7B35] hover:text-white font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer shadow-xs"
          >
            <span>{t('btn.startYourProject', 'Commission Custom Installation')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};


