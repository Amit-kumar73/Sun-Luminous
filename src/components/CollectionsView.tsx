import React, { useState } from 'react';
import { Search, Filter, ArrowUpRight, Check, Box } from 'lucide-react';
import { Collection, Product } from '../types';
import { CollectionCardSkeleton } from './SkeletonLoader';

interface CollectionsViewProps {
  collections: Collection[];
  products: Product[];
  isLoading?: boolean;
  onOpenStartProject: (productName?: string) => void;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  collections,
  products,
  isLoading = false,
  onOpenStartProject,
}) => {
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>('ALL');
  const [isTabChanging, setIsTabChanging] = useState<boolean>(false);

  const handleTabChange = (colId: string) => {
    if (colId === selectedCollectionId) return;
    setIsTabChanging(true);
    setSelectedCollectionId(colId);
    setTimeout(() => {
      setIsTabChanging(false);
    }, 300);
  };

  const filteredProducts = selectedCollectionId === 'ALL'
    ? products
    : products.filter(p => p.collectionId === selectedCollectionId);

  const showSkeletons = isLoading || isTabChanging;

  return (
    <section className="py-24 bg-[#0B0F17] relative min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-[#C9A96A] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            <Box className="w-3.5 h-3.5" />
            <span>Bespoke Lighting Objects</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#F8F6F2] tracking-tight mb-4">
            Collections & Sculptural Objects
          </h1>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Unlike mass e-commerce products, every Sutra lighting series is tailored to order with custom suspension lengths, glass finishes, and light temperature configurations.
          </p>
        </div>

        {/* Collection Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          <button
            onClick={() => handleTabChange('ALL')}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
              selectedCollectionId === 'ALL'
                ? 'bg-[#C9A96A] text-[#0B0F17] font-semibold'
                : 'bg-[#0F172A] text-gray-400 border border-gray-800 hover:text-white'
            }`}
          >
            All Collections ({products.length})
          </button>

          {collections.map((col) => (
            <button
              key={col.id}
              onClick={() => handleTabChange(col.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                selectedCollectionId === col.id
                  ? 'bg-[#C9A96A] text-[#0B0F17] font-semibold'
                  : 'bg-[#0F172A] text-gray-400 border border-gray-800 hover:text-white'
              }`}
            >
              {col.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {showSkeletons ? (
            <>
              <CollectionCardSkeleton />
              <CollectionCardSkeleton />
              <CollectionCardSkeleton />
            </>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-lg overflow-hidden border border-gray-800 hover:border-[#C9A96A]/50 bg-[#0F172A] transition-all flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#0B0F17]/80 text-[#C9A96A] border border-[#C9A96A]/30">
                      {product.collectionName}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-[#F8F6F2] group-hover:text-[#C9A96A] transition-colors mb-2">
                      {product.name}
                    </h3>

                    <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                      {product.description}
                    </p>

                    <div className="space-y-1.5 text-xs text-gray-300 border-t border-gray-800/80 pt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Material:</span>
                        <span className="font-medium">{product.material}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-500">Dimensions:</span>
                        <span className="font-medium text-[#C9A96A]">{product.dimensions}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-500">Lighting CCT:</span>
                        <span className="font-medium">{product.lightingType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Request Spec CTA */}
                  <button
                    onClick={() => onOpenStartProject(`Requesting Specification & CAD drawings for product: ${product.name} (${product.collectionName}).`)}
                    className="w-full py-3 bg-[#1E293B] hover:bg-[#C9A96A] hover:text-[#0B0F17] text-[#C9A96A] font-semibold text-xs uppercase tracking-wider rounded transition-all flex items-center justify-center space-x-2 border border-[#C9A96A]/20 cursor-pointer"
                  >
                    <span>Request Specification Sheet</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
