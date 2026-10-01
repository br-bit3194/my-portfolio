import React, { useState } from 'react';
import { 
  Bot, 
  ArrowRight, 
  Download, 
  Sparkles, 
  Award, 
  Mail, 
  MapPin, 
  ExternalLink,
  CheckCircle2,
  Copy,
  Check,
  Zap,
  Briefcase
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenAiModal }) => {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="about" 
      style={{ 
        paddingTop: '6.5rem', 
        paddingBottom: '4rem', 
        position: 'relative' 
      }}
    >
      <div className="container">
        
        {/* Main 2-Second Recruiter Spotlight Bento Card */}
        <div 
          className="bento-card"
          style={{
            padding: '2.5rem',
            marginBottom: '2.5rem',
            position: 'relative'
          }}
        >
          {/* Subtle Google Top Color Strip */}
          <div className="google-strip" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }} className="hero-grid-2sec">
            
            {/* Left: Your Photo & Availability */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              
              <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
                <div 
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    padding: '3px',
                    background: 'var(--google-gradient)',
                    boxShadow: '0 8px 24px rgba(66, 133, 244, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src={personal.avatarUrl} 
                    alt={personal.displayName}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      background: '#ffffff'
                    }}
                  />
                </div>

                {/* Available Status Dot */}
                <div 
                  title="Open to Senior AI Engineer & GenAI Roles"
                  style={{
                    position: 'absolute',
                    bottom: '6px',
                    right: '8px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#34A853',
                    border: '3px solid #ffffff',
                    boxShadow: '0 0 8px rgba(52, 168, 83, 0.7)'
                  }}
                />
              </div>

              {/* Status Pill */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--google-green)',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.35rem'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--google-green)' }} />
                Open to Remote (India & Worldwide)
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <MapPin size={13} />
                <span>Ahmedabad, India • Remote Worldwide</span>
              </div>
            </div>

            {/* Right: Who I Am, What I Do, Experience & Quick Actions */}
            <div>
              
              {/* Badges Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '0.85rem' }}>
                <span className="badge badge-blue">
                  <Briefcase size={12} />
                  AI Engineer (5+ Years Exp)
                </span>
                <span className="badge badge-green">
                  🟢 100% Remote Available (India / Worldwide)
                </span>
                <span className="badge badge-yellow">
                  <Award size={12} />
                  AWS SuperHacks 2025 Winner
                </span>
              </div>

              {/* Name */}
              <h1 
                style={{ 
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.25rem)', 
                  lineHeight: 1.15, 
                  fontWeight: 800, 
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)'
                }}
              >
                {personal.displayName}{' '}
                <span style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                  ({personal.name})
                </span>
              </h1>

              {/* Punchy Recruiter Summary */}
              <p 
                style={{ 
                  fontSize: '1.08rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)', 
                  marginBottom: '1.25rem',
                  maxWidth: '750px' 
                }}
              >
                {personal.summary}
              </p>

              {/* Core Skill Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
                {personal.coreBadges.map((badge, idx) => (
                  <span 
                    key={idx}
                    style={{
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Actions: Direct Email, LinkedIn, Resume (NO PHONE/WHATSAPP) */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                
                {/* Resume Download */}
                <a 
                  href={personal.resumeUrl}
                  download="Bhavesh_Rathod_GenAI_Engineer_Resume.pdf"
                  className="btn-primary"
                >
                  <Download size={16} />
                  <span>Download Resume PDF</span>
                </a>

                {/* LinkedIn Profile */}
                <a 
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <LinkedinIcon size={16} color="#0A66C2" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={13} />
                </a>

                {/* Direct Email with Copy Action */}
                <button 
                  onClick={handleCopyEmail}
                  className="btn-secondary"
                  title="Click to copy email address"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Mail size={16} color="var(--google-red)" />
                  <span>{copiedEmail ? "Email Copied!" : personal.email}</span>
                  {copiedEmail ? <Check size={14} color="var(--google-green)" /> : <Copy size={13} />}
                </button>

                {/* Ask AI Trigger */}
                <button 
                  onClick={onOpenAiModal}
                  className="btn-secondary"
                  style={{ borderColor: 'rgba(26, 115, 232, 0.4)', color: 'var(--google-blue)' }}
                >
                  <Bot size={16} />
                  <span>Ask AI Assistant</span>
                </button>

              </div>

            </div>

          </div>
        </div>

        {/* 4 Instant Recruiter Proof Metrics (Bento Row) */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '1.25rem' 
          }}
        >
          {personal.metrics.map((item, idx) => (
            <div 
              key={idx}
              className="bento-card"
              style={{
                padding: '1.5rem',
                borderTop: idx === 0 
                  ? '3px solid var(--google-blue)' 
                  : idx === 1 
                  ? '3px solid var(--google-green)' 
                  : idx === 2 
                  ? '3px solid var(--google-yellow)' 
                  : '3px solid var(--google-red)'
              }}
            >
              <div 
                style={{ 
                  fontSize: '2.1rem', 
                  fontWeight: 800, 
                  fontFamily: 'var(--font-mono)',
                  color: idx === 0 
                    ? 'var(--google-blue)' 
                    : idx === 1 
                    ? 'var(--google-green)' 
                    : idx === 2 
                    ? '#b06000' 
                    : 'var(--google-red)',
                  lineHeight: 1,
                  marginBottom: '0.5rem'
                }}
              >
                {item.metric}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid-2sec {
            grid-template-columns: 200px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
