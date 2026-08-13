import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, Flame, Eye, CheckCircle2 } from 'lucide-react';
import { Material } from '../types';
import { SkeletonPulse } from './SkeletonLoader';

interface MaterialsExplorerProps {
  materials: Material[];
  onOpenStartProject: (materialName?: string) => void;
}

export const MaterialsExplorer: React.FC<MaterialsExplorerProps> = ({
  materials,
  onOpenStartProject,
}) => {
  const [selectedMaterial, setSelectedMaterial] = useState<Material>(materials[0]);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleSelectMaterial = (mat: Material) => {
    if (mat.id === selectedMaterial.id) return;
    setIsImageLoaded(false);
    setSelectedMaterial(mat);
  };

  return (
    <section id="materials" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C9A96A] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisan Materiality</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F8F6F2] tracking-tight mb-4">
            Forged in Flame. Refined by Design.
          </h2>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Sutra Luminis combines ancient furnace glass craftsmanship with aerospace-grade metal fabrication and optical stone carving to push the boundaries of architectural lighting.
          </p>
        </div>

        {/* Material Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {materials.map((mat) => (
            <motion.button
              key={mat.id}
              whileHover={{ scale: 1.03, opacity: 0.95 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelectMaterial(mat)}
              className={`p-4 rounded-lg text-left transition-all border cursor-pointer ${
                selectedMaterial.id === mat.id
                  ? 'bg-[#1E293B] border-[#C9A96A] text-[#F8F6F2] shadow-xl shadow-[#C9A96A]/10'
                  : 'bg-[#0B0F17]/60 border-gray-800 text-gray-400 hover:border-[#C9A96A]/40 hover:text-white'
              }`}
            >
              <span className="text-[10px] uppercase tracking-wider text-[#C9A96A] font-medium block">
                {mat.category}
              </span>
              <h3 className="font-serif text-lg font-light mt-0.5">
                {mat.name}
              </h3>
            </motion.button>
          ))}
        </div>

        {/* Active Material Showcase Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 rounded-xl bg-[#0B0F17] border border-[#C9A96A]/30 shadow-2xl">
          {/* Material Image */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 relative h-72 lg:h-auto rounded-lg overflow-hidden border border-gray-800 bg-[#0F172A]"
          >
            {!isImageLoaded && (
              <SkeletonPulse className="absolute inset-0 w-full h-full rounded-none z-10" />
            )}
            <img
              src={selectedMaterial.imageUrl}
              alt={selectedMaterial.name}
              onLoad={() => setIsImageLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] uppercase tracking-widest text-[#C9A96A] font-semibold block">
                Featured Case Application
              </span>
              <span className="text-sm font-serif font-light text-[#F8F6F2]">
                {selectedMaterial.featuredProject}
              </span>
            </div>
          </motion.div>

          {/* Details & Specifications */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#C9A96A]/20 text-[#C9A96A] border border-[#C9A96A]/30">
                  {selectedMaterial.category} Craft
                </span>
                <span className="text-xs text-gray-400 flex items-center space-x-1 font-medium">
                  <Eye className="w-3.5 h-3.5 text-[#C9A96A]" />
                  <span>Light Transmission: {selectedMaterial.lightTransmission}</span>
                </span>
              </div>

              <h3 className="font-serif text-3xl font-light text-[#F8F6F2] mb-3">
                {selectedMaterial.name}
              </h3>

              <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                {selectedMaterial.description}
              </p>

              {/* Properties Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-semibold text-[#C9A96A] mb-2">
                    Key Material Properties
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedMaterial.properties.map((prop, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A96A] shrink-0" />
                        <span>{prop}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-semibold text-[#C9A96A] mb-2">
                    Available Custom Finishes
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMaterial.finishes.map((finish, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-[#1E293B] text-[11px] text-gray-300 font-medium border border-gray-800">
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Manufacturing Process */}
              <div className="p-4 rounded-lg bg-[#1E293B]/40 border border-gray-800">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium block mb-1">
                  Crafting Process Sequence
                </span>
                <p className="text-xs text-[#F8F6F2] font-mono leading-relaxed">
                  {selectedMaterial.manufacturingProcess}
                </p>
              </div>
            </div>

            {/* Request Sample */}
            <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Need physical sample chips for architect board presentation?
              </span>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenStartProject(`Requesting physical material finish samples for ${selectedMaterial.name}.`)}
                className="px-5 py-2.5 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0B0F17] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer"
              >
                Request Material Kit
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
