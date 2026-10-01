import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Download, 
  Menu, 
  X, 
  Bot, 
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ theme, toggleTheme, onOpenAiModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Journey', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid #e2e8f0' : '1px solid rgba(226, 232, 240, 0.6)',
        padding: isScrolled ? '0.65rem 0' : '1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo with Profile Photo */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.65rem',
            textDecoration: 'none' 
          }}
        >
          <div 
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              padding: '2px',
              background: 'var(--google-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <img 
              src={portfolioData.personal.avatarUrl} 
              alt="Bhavesh Rathod"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', color: '#0f172a' }}>
            Bhavesh Rathod
          </div>
        </a>

        {/* Center Nav Links */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '1.25rem',
            flexShrink: 0,
            whiteSpace: 'nowrap'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeNav === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveNav(link.label)}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#0f172a' : '#64748b',
                  transition: 'all 0.2s ease',
                  padding: '0.25rem 0',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#1d68fe')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#0f172a' : '#64748b')}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span 
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      width: '20px',
                      height: '2.5px',
                      borderRadius: '2px',
                      background: '#1d68fe'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0, whiteSpace: 'nowrap' }}>
          
          {/* Open to Remote Pill Button */}
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 0.95rem',
              borderRadius: '9999px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              color: '#0f172a',
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#1d68fe';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px rgba(16, 185, 129, 0.8)', flexShrink: 0 }} />
            <span style={{ whiteSpace: 'nowrap' }}>Open to Remote</span>
            <ChevronRight size={13} color="#94a3b8" style={{ flexShrink: 0 }} />
          </a>

          {/* Ask AI Trigger Button */}
          <button
            onClick={onOpenAiModal}
            className="ai-pulse-btn"
            title="Ask Bhavesh's AI Assistant"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(29, 104, 254, 0.08)',
              border: '1px solid rgba(29, 104, 254, 0.25)',
              color: '#1d68fe',
              padding: '0.45rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            <Bot size={15} style={{ flexShrink: 0 }} />
            <span style={{ whiteSpace: 'nowrap' }}>Ask AI</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              color: '#0f172a',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
          >
            {theme === 'dark' ? <Sun size={17} color="#f59e0b" /> : <Moon size={17} color="#1d68fe" />}
          </button>

          {/* Resume Download Button */}
          <a
            href={portfolioData.personal.resumeUrl}
            download="Bhavesh_Rathod_GenAI_Engineer_Resume.pdf"
            className="btn-primary hide-mobile"
            style={{
              padding: '0.45rem 0.95rem',
              fontSize: '0.82rem',
              borderRadius: '9999px',
              background: '#0f172a',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            <Download size={14} style={{ flexShrink: 0 }} />
            <span style={{ whiteSpace: 'nowrap' }}>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Menu"
            style={{
              display: 'none',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              color: '#0f172a',
              flexShrink: 0
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveNav(link.label);
                setMobileMenuOpen(false);
              }}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem 0',
                borderBottom: '1px solid #f1f5f9'
              }}
            >
              <span>{link.label}</span>
              <ChevronRight size={16} color="#94a3b8" />
            </a>
          ))}
          <a
            href={portfolioData.personal.resumeUrl}
            download="Bhavesh_Rathod_GenAI_Engineer_Resume.pdf"
            className="btn-primary"
            style={{ marginTop: '0.5rem', width: '100%', borderRadius: '9999px', background: '#0f172a' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Download size={16} />
            <span>Download Resume PDF</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        @media (max-width: 640px) {
          .hide-mobile {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .hide-xs {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
