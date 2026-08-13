import React from 'react';
import { ArrowUpRight, Flame, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenStartProject: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenStartProject,
  onOpenAdmin,
}) => {
  return (
    <footer className="bg-[#0F172A] text-[#F8F6F2] border-t border-[#F8F6F2]/10 pt-16 pb-12 relative z-20">
      {/* Decorative Top Accent Strip matching design HTML */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 pb-8 border-b border-[#F8F6F2]/10 flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap gap-8 sm:gap-16">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Global Reach</span>
            <span className="text-sm tracking-tighter uppercase font-medium text-[#F8F6F2]">50+ International Brands</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Craftsmanship</span>
            <span className="text-sm tracking-tighter uppercase font-medium text-[#F8F6F2]">1,450°C Glass Fusing</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Portfolio</span>
            <span className="text-sm tracking-tighter uppercase font-medium text-[#F8F6F2]">5,000+ Custom Designs</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest opacity-50">Scroll for Essence</span>
          <div className="w-8 h-[1px] bg-[#C9A96A]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 border border-[#C9A96A] flex items-center justify-center text-[#C9A96A] font-serif text-lg">
                S
              </span>
              <span className="font-serif text-2xl font-light tracking-[0.2em] text-[#F8F6F2]">
                SUN LUMINOUS
              </span>
            </div>

            <p className="text-xs text-[#F8F6F2]/70 font-light leading-relaxed max-w-sm">
              Luxury bespoke decorative lighting, sculptural installations, glass art, and architectural masterworks. Handcrafted with 1,450°C furnace glassblowing and precision metal engineering.
            </p>

            <div className="pt-3 text-xs text-[#F8F6F2]/80 space-y-1.5 border-t border-[#F8F6F2]/10">
              <div className="text-[11px] uppercase tracking-wider text-[#C9A96A] font-semibold">
                Direct Hospitality & ID Desk:
              </div>
              <div className="text-white font-medium">Ms. Kamya Raghuvanshi (Business Head)</div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A96A]" />
                <span>+91 93127 40404 &nbsp;|&nbsp; +91 95608 08413</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A96A]" />
                <span>interiors11@sunluminous.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-[#C9A96A]" />
                <span>India Blowing Centre & Global Atelier (Delhi • Mumbai • London • Dubai)</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A96A] mb-4">
              Architectural Studio
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F8F6F2]/70 font-light">
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-[#C9A96A] transition-colors">
                  Portfolio Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('materials')} className="hover:text-[#C9A96A] transition-colors">
                  Materiality & Glass
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('configurator')} className="hover:text-[#C9A96A] transition-colors">
                  Studio Configurator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('showroom')} className="hover:text-[#C9A96A] transition-colors">
                  360° Virtual Showroom
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collections')} className="hover:text-[#C9A96A] transition-colors">
                  Sculptural Objects
                </button>
              </li>
            </ul>
          </div>

          {/* Professional Resources */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A96A] mb-4">
              Resources & Craft
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F8F6F2]/70 font-light">
              <li>
                <button onClick={() => onNavigate('architects')} className="hover:text-[#C9A96A] transition-colors">
                  Architects & BIM Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('client-portal')} className="hover:text-[#C9A96A] font-semibold text-[#C9A96A] transition-colors flex items-center space-x-1">
                  <span>Client Access Portal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('manufacturing')} className="hover:text-[#C9A96A] transition-colors">
                  1,450°C Glass Furnace
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('journal')} className="hover:text-[#C9A96A] transition-colors">
                  Editorial Journal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#C9A96A] transition-colors">
                  About Sutra Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Inquiry Action */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A96A] mb-4">
              Commissions
            </h4>
            <p className="text-xs text-[#F8F6F2]/70 font-light mb-4">
              Have an upcoming luxury hospitality or estate project?
            </p>
            <button
              onClick={onOpenStartProject}
              className="w-full py-3 bg-[#C9A96A] hover:bg-[#D4AF37] text-[#0F172A] font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#C9A96A]/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F8F6F2]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8F6F2]/50 font-light gap-4">
          <p>© {new Date().getFullYear()} SUN LUMINOUS Inc. All Rights Reserved. Bespoke Lighting Architecture.</p>

          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenAdmin}
              className="hover:text-[#C9A96A] transition-colors text-[11px] font-mono text-[#F8F6F2]/60"
            >
              [Admin CMS Portal]
            </button>
            <span className="hover:text-[#F8F6F2] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#F8F6F2] cursor-pointer">Terms of Specification</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
