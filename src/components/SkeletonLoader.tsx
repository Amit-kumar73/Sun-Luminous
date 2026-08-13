import React from 'react';
import { motion } from 'motion/react';

// Shimmer variant using Framer Motion opacity & background wave
export const SkeletonPulse: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    animate={{
      opacity: [0.25, 0.65, 0.25],
    }}
    transition={{
      duration: 1.8,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className={`bg-[#1E293B] rounded ${className}`}
  />
);

// Project Card Skeleton
export const ProjectCardSkeleton: React.FC<{ isGrand?: boolean }> = ({ isGrand = false }) => (
  <div
    className={`rounded-lg overflow-hidden border border-gray-800/80 bg-[#0F172A] flex flex-col justify-between ${
      isGrand ? 'lg:col-span-8' : 'lg:col-span-4'
    }`}
  >
    {/* Image Skeleton */}
    <div className={`relative overflow-hidden ${isGrand ? 'h-80 sm:h-[450px]' : 'h-72'} bg-[#0B0F17]/60`}>
      <SkeletonPulse className="w-full h-full rounded-none" />
      <div className="absolute top-4 left-4">
        <SkeletonPulse className="w-24 h-6 rounded-full" />
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <SkeletonPulse className="w-36 h-4" />
        <SkeletonPulse className="w-20 h-5 rounded" />
      </div>
    </div>

    {/* Content Skeleton */}
    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <SkeletonPulse className="w-28 h-3" />
          <SkeletonPulse className="w-4 h-4 rounded-full" />
        </div>
        <SkeletonPulse className="w-3/4 h-7" />
        <div className="space-y-2 pt-1">
          <SkeletonPulse className="w-full h-3" />
          <SkeletonPulse className="w-5/6 h-3" />
        </div>
      </div>

      <div className="flex gap-2 pt-4 border-t border-gray-800/80">
        <SkeletonPulse className="w-16 h-4 rounded" />
        <SkeletonPulse className="w-20 h-4 rounded" />
        <SkeletonPulse className="w-14 h-4 rounded" />
      </div>
    </div>
  </div>
);

// Collection Product Skeleton
export const CollectionCardSkeleton: React.FC = () => (
  <div className="rounded-lg overflow-hidden border border-gray-800/80 bg-[#0F172A] flex flex-col justify-between">
    <div className="relative h-72 bg-[#0B0F17]/60">
      <SkeletonPulse className="w-full h-full rounded-none" />
      <div className="absolute top-4 left-4">
        <SkeletonPulse className="w-28 h-6 rounded-full" />
      </div>
    </div>
    <div className="p-6 space-y-4">
      <SkeletonPulse className="w-2/3 h-7" />
      <SkeletonPulse className="w-full h-3" />
      <SkeletonPulse className="w-4/5 h-3" />
      <div className="space-y-2 border-t border-gray-800/80 pt-3">
        <div className="flex justify-between">
          <SkeletonPulse className="w-16 h-3" />
          <SkeletonPulse className="w-24 h-3" />
        </div>
        <div className="flex justify-between">
          <SkeletonPulse className="w-20 h-3" />
          <SkeletonPulse className="w-28 h-3" />
        </div>
      </div>
      <SkeletonPulse className="w-full h-10 rounded" />
    </div>
  </div>
);

// Case Study Modal Skeleton
export const CaseStudyModalSkeleton: React.FC = () => (
  <div className="p-8 space-y-8 animate-pulse">
    <div className="space-y-3">
      <SkeletonPulse className="w-32 h-4 rounded-full" />
      <SkeletonPulse className="w-3/4 h-10" />
      <SkeletonPulse className="w-1/2 h-4" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 h-[400px]">
        <SkeletonPulse className="w-full h-full rounded-xl" />
      </div>
      <div className="lg:col-span-4 space-y-4">
        <SkeletonPulse className="w-full h-24 rounded-xl" />
        <SkeletonPulse className="w-full h-24 rounded-xl" />
        <SkeletonPulse className="w-full h-24 rounded-xl" />
      </div>
    </div>
  </div>
);

// Material Sample Card Skeleton
export const MaterialCardSkeleton: React.FC = () => (
  <div className="p-4 rounded-lg bg-[#0F172A] border border-gray-800 flex items-center space-x-4">
    <SkeletonPulse className="w-16 h-16 rounded-md shrink-0" />
    <div className="flex-1 space-y-2">
      <SkeletonPulse className="w-2/3 h-5" />
      <SkeletonPulse className="w-full h-3" />
      <SkeletonPulse className="w-1/2 h-3" />
    </div>
  </div>
);
