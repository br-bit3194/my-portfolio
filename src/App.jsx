import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Bot, Sparkles } from 'lucide-react';

export function App() {
  const [theme, setTheme] = useState('light');
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  useEffect(() => {
    // Check saved theme in localStorage or default to light
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Fixed Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenAiModal={() => setIsAiModalOpen(true)} 
      />

      {/* Main Portfolio Sections */}
      <main style={{ flex: 1 }}>
        <Hero onOpenAiModal={() => setIsAiModalOpen(true)} />
        <Projects />
        <Certifications />
        <ArchitectureShowcase />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenAiModal={() => setIsAiModalOpen(true)} />

      {/* Interactive AI Assistant Modal */}
      <AiAssistantModal 
        isOpen={isAiModalOpen} 
        onClose={() => setIsAiModalOpen(false)} 
      />

      {/* Floating AI Assistant FAB Button */}
      <button
        onClick={() => setIsAiModalOpen(true)}
        className="floating-ai-fab"
        aria-label="Ask AI Assistant about Bhavesh"
        title="Ask AI Assistant about Bhavesh"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 40,
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          padding: '0.75rem 1.25rem',
          borderRadius: '9999px',
          background: '#1a73e8',
          color: '#ffffff',
          boxShadow: '0 8px 24px rgba(26, 115, 232, 0.4), 0 2px 6px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          cursor: 'pointer',
          fontWeight: 700,
          fontSize: '0.88rem',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(26, 115, 232, 0.55), 0 4px 10px rgba(0, 0, 0, 0.12)';
          e.currentTarget.style.background = '#1557b0';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(26, 115, 232, 0.4), 0 2px 6px rgba(0, 0, 0, 0.08)';
          e.currentTarget.style.background = '#1a73e8';
        }}
      >
        <div 
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.22)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <Bot size={16} color="#ffffff" />
        </div>
        <span className="fab-text" style={{ whiteSpace: 'nowrap' }}>Ask Bhavesh AI</span>
        <Sparkles size={14} color="#fde047" className="fab-sparkle" style={{ flexShrink: 0 }} />
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fabPulse {
          0% { box-shadow: 0 0 0 0 rgba(26, 115, 232, 0.5), 0 8px 24px rgba(26, 115, 232, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(26, 115, 232, 0), 0 8px 24px rgba(26, 115, 232, 0.4); }
          100% { box-shadow: 0 0 0 0 rgba(26, 115, 232, 0), 0 8px 24px rgba(26, 115, 232, 0.4); }
        }
        .floating-ai-fab {
          animation: fabPulse 3.5s infinite;
        }
        @media (max-width: 640px) {
          .floating-ai-fab .fab-text,
          .floating-ai-fab .fab-sparkle {
            display: none !important;
          }
          .floating-ai-fab {
            padding: 0 !important;
            border-radius: 50% !important;
            bottom: 1.25rem !important;
            right: 1.25rem !important;
            width: 48px !important;
            height: 48px !important;
            justify-content: center !important;
          }
          .floating-ai-fab div {
            width: 32px !important;
            height: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
