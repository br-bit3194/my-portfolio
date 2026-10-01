import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Top Reading Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--google-gradient)',
          zIndex: 100
        }}
      />

      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 1,
          background: `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, ${theme === 'dark' ? 'rgba(66, 133, 244, 0.08)' : 'rgba(26, 115, 232, 0.045)'}, transparent 80%)`,
          transition: 'background 0.15s ease-out'
        }}
      />

      {/* Top Fixed Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenAiModal={() => setIsAiModalOpen(true)} 
      />

      {/* Main Portfolio Sections */}
      <main style={{ flex: 1, position: 'relative', zIndex: 2 }}>
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
      <motion.button
        onClick={() => setIsAiModalOpen(true)}
        className="floating-ai-fab"
        aria-label="Ask AI Assistant about Bhavesh"
        title="Ask AI Assistant about Bhavesh"
        whileHover={{ scale: 1.06, y: -3 }}
        whileTap={{ scale: 0.94 }}
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
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
      </motion.button>

      <style>{`
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

