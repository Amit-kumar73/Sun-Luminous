import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowUpRight, Sparkles, Filter, Layers, Check, LayoutGrid } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { ProjectCardSkeleton } from './SkeletonLoader';

interface FeaturedProjectsGridProps {
  projects: Project[];
  isLoading?: boolean;
  onSelectProject: (project: Project) => void;
  onOpenStartProject: () => void;
}

interface CategoryOption {
  id: string;
  label: string;
}

export const FeaturedProjectsGrid: React.FC<FeaturedProjectsGridProps> = ({
  projects,
  isLoading = false,
  onSelectProject,
  onOpenStartProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories: CategoryOption[] = [
    { id: 'ALL', label: 'All Works' },
    { id: 'Residential', label: 'Residential' },
    { id: 'Commercial', label: 'Commercial' },
    { id: 'Sculptural', label: 'Sculptural' },
    { id: 'Hospitality', label: 'Hospitality' },
    { id: 'Builder', label: 'Builder' },
    { id: 'Heritage & Religious', label: 'Heritage & Religious' },
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
    <section id="portfolio" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gray-800/80 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#C9A96A] text-xs uppercase tracking-[0.25em] font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96A]" />
              <span>Architectural Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F8F6F2] tracking-tight">
              Selected Global Projects
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            From 100-foot vertical atrium drops to floating marine glass pavilions, each Sutra installation is custom-engineered and handcrafted to order.
          </p>
        </div>

        {/* Animated Category Filter Navigation */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 pt-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = getCategoryCount(cat.id);

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer flex items-center space-x-2 ${
                    isActive
                      ? 'text-[#0B0F17] font-semibold'
                      : 'text-gray-400 hover:text-white border border-gray-800/80 bg-[#0F172A]/80 hover:border-[#C9A96A]/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#C9A96A] rounded-full shadow-lg shadow-[#C9A96A]/25 z-0"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                  <span
                    className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-[#0B0F17]/20 text-[#0B0F17] font-bold'
                        : 'bg-[#1E293B] text-gray-400'
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
            className="text-center py-20 bg-[#0F172A]/60 rounded-xl border border-gray-800 p-8"
          >
            <Layers className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-white mb-2">No projects found in this category</h3>
            <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
              We specialize in custom commissions for any architectural scale. Contact our bespoke engineering team.
            </p>
            <button
              onClick={() => setSelectedCategory('ALL')}
              className="px-6 py-2.5 bg-[#1E293B] hover:bg-[#C9A96A] hover:text-[#0B0F17] text-white rounded text-xs uppercase tracking-wider font-medium transition-all"
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
                // First item gets grand hero span when viewing All or when it's the primary showcase
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
                    whileHover={{ y: -6, scale: 1.015 }}
                    onClick={() => onSelectProject(project)}
                    className={`group cursor-pointer rounded-lg overflow-hidden border border-gray-800 hover:border-[#C9A96A]/60 bg-[#0F172A] transition-colors duration-300 hover:shadow-2xl hover:shadow-[#C9A96A]/15 flex flex-col justify-between ${
                      isGrand ? 'lg:col-span-8' : 'lg:col-span-4'
                    }`}
                  >
                    {/* Image Container */}
                    <div className={`relative overflow-hidden ${isGrand ? 'h-80 sm:h-[450px]' : 'h-72'}`}>
                      <img
                        src={project.images[0]?.url || 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1200&auto=format&fit=crop'}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent" />

                      {/* Category Pill */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#0B0F17]/80 text-[#C9A96A] border border-[#C9A96A]/30 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>

                      {/* Location Badge */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-gray-300">
                        <span className="flex items-center space-x-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-[#C9A96A]" />
                          <span>{project.location}, {project.country}</span>
                        </span>

                        {project.installationHeightFeet && (
                          <span className="px-2.5 py-0.5 rounded bg-[#1E293B]/80 text-[#C9A96A] font-serif font-light text-xs">
                            {project.installationHeightFeet}ft Drop
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Information */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">
                            Architect: {project.architect}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#C9A96A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>

                        <h3 className="font-serif text-2xl font-light text-[#F8F6F2] group-hover:text-[#C9A96A] transition-colors mb-2">
                          {project.title}
                        </h3>

                        <p className="text-xs text-gray-400 line-clamp-2 font-light leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>

                      {/* Materials tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800/80">
                        {project.materials.slice(0, 3).map((m, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] bg-[#1E293B] text-gray-300 font-medium"
                          >
                            {m}
                          </span>
                        ))}
                        {project.materials.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] text-gray-500">
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
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenStartProject}
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-sm border border-[#C9A96A] text-[#C9A96A] hover:bg-[#C9A96A] hover:text-[#0B0F17] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
          >
            <span>Commission Custom Installation</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

