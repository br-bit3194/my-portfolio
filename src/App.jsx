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
        <ArchitectureShowcase />
        <Experience />
        <Skills />
        <Certifications />
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
        title="Ask AI Assistant about Bhavesh"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 40,
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          padding: '0.85rem 1.25rem',
          borderRadius: '9999px',
          background: 'var(--accent-gradient)',
          color: '#ffffff',
          boxShadow: '0 8px 25px rgba(37, 99, 235, 0.45)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          cursor: 'pointer',
          fontWeight: 700,
          fontSize: '0.9rem',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 99, 235, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.45)';
        }}
      >
        <div 
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Bot size={15} />
        </div>
        <span>Ask Bhavesh AI</span>
        <Sparkles size={14} color="#fef08a" />
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 640px) {
          .floating-ai-fab span {
            display: none;
          }
          .floating-ai-fab {
            padding: 0.85rem !important;
            border-radius: 50% !important;
            bottom: 1.25rem !important;
            right: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
