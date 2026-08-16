import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroLanding } from './components/HeroLanding';
import { FeaturedProjectsGrid } from './components/FeaturedProjectsGrid';
import { MaterialsExplorer } from './components/MaterialsExplorer';
import { LightingConfigurator } from './components/LightingConfigurator';
import { VirtualShowroomView } from './components/VirtualShowroomView';
import { ArchitectsPortalView } from './components/ArchitectsPortalView';
import { ManufacturingExcellenceView } from './components/ManufacturingExcellenceView';
import { CollectionsView } from './components/CollectionsView';
import { JournalView } from './components/JournalView';
import { AboutView } from './components/AboutView';
import { AdminDashboardView } from './components/AdminDashboardView';
import { ClientDashboardView } from './components/ClientDashboardView';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { Footer } from './components/Footer';

import { Project } from './types';
import { mockProjects, mockMaterials, mockResources, mockCollections, mockProducts, mockJournalArticles } from './data/mockData';
import { fetchProjects } from './lib/api';

export function App() {
  const [activeView, setActiveView] = useState<string>('home');
  const [projects, setProjects] = useState<Project[]>(mockProjects);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState<boolean>(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [inquiryInitialMessage, setInquiryInitialMessage] = useState<string>('');

  useEffect(() => {
    // Attempt to load fresh projects from server API
    fetchProjects()
      .then(pData => {
        if (pData && pData.length > 0) {
          setProjects(pData);
        }
      })
      .catch(err => {
        console.warn("Using local mock projects fallback:", err);
      });
  }, []);

  const handleOpenInquiry = (initialMessage?: string) => {
    setInquiryInitialMessage(initialMessage || '');
    setIsInquiryOpen(true);
  };

  const handleNavigate = (view: string) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence mode="wait">
      {activeView === 'admin' ? (
        <motion.div
          key="admin-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <AdminDashboardView
            onCloseAdmin={() => handleNavigate('home')}
          />
        </motion.div>
      ) : (
        <motion.div
          key="app-shell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-sans selection:bg-[#B38E46] selection:text-white relative overflow-x-hidden"
        >
          {/* Side Accent Metadata from Artistic Flair Theme */}
          <div className="fixed right-2 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden xl:block">
            <div className="text-[10px] rotate-90 origin-right uppercase tracking-[0.5em] text-[#1C1917]/25 font-sans">
              Architecture • Art • Engineering
            </div>
          </div>

          {/* Sticky Top Luxury Navigation */}
          <Navbar
            activeView={activeView}
            onNavigate={handleNavigate}
            onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
            onOpenStartProject={() => handleOpenInquiry()}
            onOpenAdmin={() => handleNavigate('admin')}
          />

          {/* Main View Router with Animated Transitions */}
          <main className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {activeView === 'home' && (
                  <>
                    <HeroLanding
                      onExploreProjects={() => {
                        const el = document.getElementById('portfolio');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        else handleNavigate('projects');
                      }}
                      onOpenConfigurator={() => {
                        const el = document.getElementById('configurator');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        else handleNavigate('configurator');
                      }}
                      onOpenStartProject={() => handleOpenInquiry()}
                      onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
                    />

                    <FeaturedProjectsGrid
                      projects={projects}
                      onSelectProject={(proj) => setSelectedProject(proj)}
                      onOpenStartProject={() => handleOpenInquiry()}
                    />

                    <MaterialsExplorer
                      materials={mockMaterials}
                      onOpenStartProject={(mat) => handleOpenInquiry(mat ? `Requesting physical material finish samples for ${mat}` : '')}
                    />

                    <LightingConfigurator
                      onOpenStartProject={(spec) => handleOpenInquiry(spec)}
                      onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
                    />
                  </>
                )}

                {activeView === 'projects' && (
                  <div className="pt-10">
                    <FeaturedProjectsGrid
                      projects={projects}
                      onSelectProject={(proj) => setSelectedProject(proj)}
                      onOpenStartProject={() => handleOpenInquiry()}
                    />
                  </div>
                )}

                {activeView === 'materials' && (
                  <div className="pt-10">
                    <MaterialsExplorer
                      materials={mockMaterials}
                      onOpenStartProject={(mat) => handleOpenInquiry(mat ? `Requesting physical material finish samples for ${mat}` : '')}
                    />
                  </div>
                )}

                {activeView === 'configurator' && (
                  <div className="pt-10">
                    <LightingConfigurator
                      onOpenStartProject={(spec) => handleOpenInquiry(spec)}
                      onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
                    />
                  </div>
                )}

                {activeView === 'showroom' && (
                  <VirtualShowroomView
                    onOpenStartProject={(msg) => handleOpenInquiry(msg)}
                  />
                )}

                {activeView === 'architects' && (
                  <ArchitectsPortalView
                    resources={mockResources}
                    onOpenStartProject={(msg) => handleOpenInquiry(msg)}
                  />
                )}

                {activeView === 'manufacturing' && (
                  <ManufacturingExcellenceView
                    onOpenStartProject={(msg) => handleOpenInquiry(msg)}
                  />
                )}

                {activeView === 'collections' && (
                  <CollectionsView
                    collections={mockCollections}
                    products={mockProducts}
                    onOpenStartProject={(msg) => handleOpenInquiry(msg)}
                  />
                )}

                {activeView === 'journal' && (
                  <JournalView
                    articles={mockJournalArticles}
                  />
                )}

                {(activeView === 'client-portal' || activeView === 'client') && (
                  <ClientDashboardView
                    onNavigateHome={() => handleNavigate('home')}
                    onOpenStartProject={(msg) => handleOpenInquiry(msg)}
                  />
                )}

                {activeView === 'about' && (
                  <AboutView
                    onOpenStartProject={() => handleOpenInquiry()}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Global Luxury Footer */}
          <Footer
            onNavigate={handleNavigate}
            onOpenStartProject={() => handleOpenInquiry()}
            onOpenAdmin={() => handleNavigate('admin')}
          />

          {/* Modals & Slide-over Drawers with Framer Motion AnimatePresence */}
          <AnimatePresence>
            {selectedProject && (
              <CaseStudyModal
                key="case-study-modal"
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
                onOpenStartProject={(msg) => handleOpenInquiry(msg)}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isAiAssistantOpen && (
              <AiAssistantDrawer
                key="ai-assistant-drawer"
                isOpen={isAiAssistantOpen}
                onClose={() => setIsAiAssistantOpen(false)}
                onOpenStartProject={(msg) => handleOpenInquiry(msg)}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isInquiryOpen && (
              <ProjectInquiryModal
                key="project-inquiry-modal"
                isOpen={isInquiryOpen}
                onClose={() => setIsInquiryOpen(false)}
                initialMessage={inquiryInitialMessage}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default App;
