import React from 'react';
import { FileText, Clock, ArrowUpRight, User } from 'lucide-react';
import { JournalArticle } from '../types';

interface JournalViewProps {
  articles: JournalArticle[];
}

export const JournalView: React.FC<JournalViewProps> = ({ articles }) => {
  return (
    <section className="py-24 bg-[#0B0F17] relative min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C9A96A] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Architectural Journal & Insights</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#F8F6F2] tracking-tight mb-4">
            Light, Architecture & Materiality
          </h1>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Explorations into high-temperature glass furnace chemistry, lighting psychology in multi-story hotel lobbies, and sustainable architectural manufacturing.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              className="group rounded-lg overflow-hidden border border-gray-800 hover:border-[#C9A96A]/50 bg-[#0F172A] transition-all duration-500 flex flex-col justify-between cursor-pointer"
              onClick={() => alert(`Opening full article: "${art.title}"`)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={art.coverImage}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#0B0F17]/80 text-[#C9A96A] border border-[#C9A96A]/30">
                    {art.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-xs text-gray-400 mb-2 font-medium">
                    <span>{art.publishedDate}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#C9A96A]" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-light text-[#F8F6F2] group-hover:text-[#C9A96A] transition-colors mb-3">
                    {art.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800 text-xs text-[#C9A96A] font-semibold uppercase tracking-wider">
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
