import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Bot,
  Sparkles
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer = ({ onOpenAiModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{ 
        background: 'var(--bg-primary)', 
        borderTop: '1px solid var(--border-color)', 
        padding: '3.5rem 0 2rem',
        position: 'relative' 
      }}
    >
      <div className="container">
        
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  padding: '2px',
                  background: 'var(--google-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
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
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  {portfolioData.personal.displayName}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--google-blue)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  AI Engineer
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Specializing in production Multi-Agent AI (A2A, MCP), Google Vertex AI & Gemini orchestration, and high-scale distributed backends.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '8px', 
                  background: 'var(--bg-input)', 
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0A66C2'
                }}
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '8px', 
                  background: 'var(--bg-input)', 
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--google-red)'
                }}
              >
                <Mail size={18} />
              </a>
              <button 
                onClick={onOpenAiModal}
                title="Ask AI Assistant"
                style={{ 
                  height: '36px', 
                  padding: '0 0.75rem',
                  borderRadius: '8px', 
                  background: 'var(--google-blue-soft)', 
                  border: '1px solid rgba(26, 115, 232, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--google-blue)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <Bot size={15} />
                <span>Ask AI</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <a href="#about">Overview</a>
              <a href="#projects">Projects & Hackathons</a>
              <a href="#architecture">Architecture Patterns</a>
              <a href="#experience">5+ Years Experience</a>
              <a href="#skills">Skills Matrix</a>
              <a href="#certifications">Certifications & Honors</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Key Recognitions */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Recognitions
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              <div>🏆 AWS SuperHacks 2025 Special Jury Award</div>
              <div>🌟 Talentica 'PAT on the Back' Award</div>
              <div>🏅 Google Cloud Certified GenAI Leader</div>
              <div>🏅 Databricks Certified GenAI Associate</div>
              <div>⚡ Top 5% Python Global (LinkedIn)</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Bhaveshkumar Rathod. All verified from LinkedIn & Resume.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              background: 'var(--bg-input)',
              border: '1px solid var(--border-color)'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
