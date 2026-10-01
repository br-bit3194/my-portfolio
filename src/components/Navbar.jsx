import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Menu,
  X,
  Bot,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ onOpenAiModal }) => {
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

  const handleNavClick = (e, href, label) => {
    e.preventDefault();
    setActiveNav(label);
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    if (targetId === 'about' || !targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <header
      className="navbar-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: 'var(--bg-nav)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid var(--border-subtle)',
        padding: isScrolled ? '0.65rem 0' : '0.9rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>

        {/* Brand Logo with Profile Photo (Always Single Line with Modern Typography) */}
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0
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
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)'
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
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.05rem',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
              color: 'var(--text-primary)',
              lineHeight: 1
            }}
          >
            Bhavesh Rathod
          </div>
        </motion.a>

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
                onClick={(e) => handleNavClick(e, link.href, link.label)}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                  padding: '0.25rem 0',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      width: '20px',
                      height: '2.5px',
                      borderRadius: '2px',
                      background: 'var(--google-blue)'
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
          <motion.a
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="nav-remote-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 0.95rem',
              borderRadius: '9999px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
              color: 'var(--text-primary)',
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px rgba(16, 185, 129, 0.8)', flexShrink: 0 }} />
            <span className="remote-pill-text" style={{ whiteSpace: 'nowrap' }}>Open to Remote</span>
            <ChevronRight size={13} color="var(--text-muted)" className="remote-pill-arrow" style={{ flexShrink: 0 }} />
          </motion.a>

          {/* Ask AI Trigger Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenAiModal}
            className="ai-pulse-btn"
            title="Ask Bhavesh's AI Assistant"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'var(--google-blue-soft)',
              border: '1px solid rgba(26, 115, 232, 0.25)',
              color: 'var(--google-blue)',
              padding: '0.45rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            <Bot size={15} style={{ flexShrink: 0 }} />
            <span style={{ whiteSpace: 'nowrap' }}>Ask AI</span>
          </motion.button>



          {/* Resume Download Button */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={portfolioData.personal.resumeUrl}
            download="Bhavesh_Rathod_GenAI_Engineer_Resume.pdf"
            className="btn-primary hide-mobile"
            style={{
              padding: '0.45rem 0.95rem',
              fontSize: '0.82rem',
              borderRadius: '9999px',
              background: 'var(--google-blue)',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            <Download size={14} style={{ flexShrink: 0 }} />
            <span style={{ whiteSpace: 'nowrap' }}>Resume</span>
          </motion.a>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
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
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              flexShrink: 0
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mobile-nav-drawer"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#f4f9f1',
              borderBottom: '2px solid var(--google-blue)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.16)',
              overflow: 'hidden'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.label)}
                style={{
                  fontSize: '1.02rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 0.5rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.65)',
                  border: '1px solid rgba(127, 191, 154, 0.3)'
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={18} color="var(--google-blue)" />
              </a>
            ))}
            <a
              href={portfolioData.personal.resumeUrl}
              download="Bhavesh_Rathod_GenAI_Engineer_Resume.pdf"
              className="btn-primary"
              style={{ 
                marginTop: '0.5rem', 
                width: '100%', 
                justifyContent: 'center', 
                borderRadius: '9999px', 
                background: 'var(--google-blue)', 
                color: '#ffffff',
                fontWeight: 700,
                padding: '0.85rem'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={17} />
              <span>Download Resume PDF</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

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
          .navbar-header {
            background: rgba(244, 249, 241, 0.98) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06) !important;
          }
          .mobile-nav-drawer {
            background: #f4f9f1 !important;
          }
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
          .nav-remote-pill .remote-pill-arrow {
            display: none !important;
          }
          .nav-remote-pill {
            padding: 0.4rem 0.75rem !important;
          }
        }
        @media (max-width: 480px) {
          .hide-xs {
            display: none !important;
          }
          .nav-remote-pill {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
