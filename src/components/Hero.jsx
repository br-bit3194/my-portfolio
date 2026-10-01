import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Globe, 
  Award, 
  ChevronRight, 
  Bot, 
  Database, 
  Cloud, 
  MoreHorizontal, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Trophy 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { 
  GoogleCloudLogo, 
  LinkedinOfficialLogo,
  AwsLogo, 
  PythonLogo, 
  FastApiLogo, 
  GeminiStarLogo 
} from './TechLogos';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenAiModal }) => {
  const { personal } = portfolioData;

  const floatingCards = [
    {
      title: "AI Agent Systems",
      subtitle: "Autonomous Multi-Agent Systems",
      detail: "A2A • MCP • Architecture Blueprints",
      action: "View Architecture",
      icon: <Bot size={22} color="#1D68FE" />,
      bgIcon: "rgba(29, 104, 254, 0.12)",
      href: "#architecture",
      tag: "Architecture"
    },
    {
      title: "GenAI Projects & RAG",
      subtitle: "Production GenAI & RAG Systems",
      detail: "MAESTRO • AWS SuperHacks Winner",
      action: "Explore Projects",
      icon: <Database size={22} color="#10B981" />,
      bgIcon: "rgba(16, 185, 129, 0.12)",
      href: "#projects",
      tag: "Projects"
    },
    {
      title: "Cloud & AI Skills",
      subtitle: "Vertex AI • Bedrock • Distributed Stack",
      detail: "GCP • AWS • BigQuery • Python",
      action: "View Skills",
      icon: <Cloud size={22} color="#F59E0B" />,
      bgIcon: "rgba(245, 158, 11, 0.12)",
      href: "#skills",
      tag: "Skills Matrix"
    }
  ];

  const techStack = [
    { name: "Google Cloud", logo: <GoogleCloudLogo size={24} /> },
    { name: "AWS", logo: <AwsLogo size={24} /> },
    { name: "Python", logo: <PythonLogo size={24} /> },
    { name: "FastAPI", logo: <FastApiLogo size={24} /> },
    { name: "Gemini", logo: <GeminiStarLogo size={24} /> },
    { name: "+ More", logo: <MoreHorizontal size={22} color="#64748B" /> }
  ];

  return (
    <section 
      id="about" 
      className="hero-poster-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '6rem',
        paddingBottom: '3rem',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#ffffff'
      }}
    >
      {/* High-Resolution Center Studio Photo Background */}
      <div 
        className="hero-bg-poster"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero.png)',
          backgroundPosition: 'center 45%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          opacity: 0.98
        }}
      />

      {/* Light gradient scrim for crisp text readability */}
      <div 
        className="hero-scrim"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.97) 0%, rgba(255, 255, 255, 0.94) 34%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.88) 75%, rgba(255, 255, 255, 0.97) 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Hero Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '2rem', 
            alignItems: 'center',
            minHeight: '780px'
          }} 
          className="hero-layout-grid"
        >
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: WHO I AM, TITLE, BIO, CTA BUTTONS, TRUST BAR, TECH BAR */}
          {/* ========================================================================= */}
          <div style={{ maxWidth: '560px' }} className="hero-left-content">
            
            {/* Top Featured Credentials Badge: Google Cloud Certified GenAI Leader */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center', marginBottom: '1rem' }}>
              
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '9999px',
                  background: '#ffffff',
                  border: '1px solid rgba(26, 115, 232, 0.35)',
                  color: '#1a73e8',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  boxShadow: '0 2px 10px rgba(26, 115, 232, 0.12)'
                }}
              >
                <GoogleCloudLogo size={18} />
                <span>Google Cloud Certified Generative AI Leader</span>
              </div>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  background: '#ffffff',
                  border: '1px solid rgba(10, 102, 194, 0.35)',
                  color: '#0a66c2',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  boxShadow: '0 2px 10px rgba(10, 102, 194, 0.12)',
                  transition: 'all 0.2s ease'
                }}
              >
                <LinkedinOfficialLogo size={18} />
                <span>5K+ LinkedIn Family</span>
              </a>

            </div>

            <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#334155', marginBottom: '0.3rem' }}>
              Hi, I'm
            </div>

            {/* Huge Two-Tone Name */}
            <h1 
              style={{ 
                fontSize: 'clamp(3rem, 5.8vw, 4.75rem)', 
                lineHeight: 1.05, 
                fontWeight: 900, 
                letterSpacing: '-0.04em',
                marginBottom: '0.85rem'
              }}
            >
              <span style={{ color: '#0f172a', display: 'block' }}>Bhavesh</span>
              <span style={{ color: '#1d68fe', display: 'block' }}>Rathod</span>
            </h1>

            {/* Role Subtitle with 5+ Years Flag */}
            <div 
              style={{ 
                fontSize: '1.2rem', 
                fontWeight: 800, 
                color: '#0f172a', 
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}
            >
              <span>AI Engineer</span>
              <span style={{ color: '#1d68fe' }}>•</span>
              <span>Senior Software Engineer</span>
              <span style={{ fontSize: '0.78rem', background: 'rgba(16, 185, 129, 0.12)', color: '#059669', padding: '0.2rem 0.55rem', borderRadius: '6px', fontWeight: 700, border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                5+ Years Exp
              </span>
            </div>

            {/* Summary Text */}
            <p 
              style={{ 
                fontSize: '1.02rem', 
                lineHeight: 1.6, 
                color: '#475569', 
                marginBottom: '1.75rem',
                maxWidth: '490px'
              }}
            >
              Building production-grade AI systems with Generative AI, RAG and Agentic AI, backed by 5+ years of experience in scalable backend systems and cloud-native solutions.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center', marginBottom: '2rem' }}>
              
              {/* View My Work Button */}
              <a 
                href="#projects" 
                className="btn-hero-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '9999px',
                  background: '#1d68fe',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.98rem',
                  boxShadow: '0 8px 20px rgba(29, 104, 254, 0.35)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>

              {/* Get In Touch with LinkedIn badge */}
              <a 
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.85rem 1.6rem',
                  borderRadius: '9999px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.98rem',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
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
                <span>Get In Touch</span>
                <LinkedinOfficialLogo size={18} />
              </a>

            </div>

            {/* Solid High-Contrast Trust Metabar (100% Opaque & Visible) */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.85rem', 
                flexWrap: 'wrap',
                paddingBottom: '1.75rem',
                borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                marginBottom: '1.75rem'
              }}
            >
              {/* Location Pill */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.65rem',
                  background: '#ffffff',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(29, 104, 254, 0.1)', color: '#1d68fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>Ahmedabad, India</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Based in India</div>
                </div>
              </div>

              {/* Remote Opportunities Pill */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.65rem',
                  background: '#ffffff',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Globe size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>Remote Worldwide</div>
                  <div style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 600 }}>Open to Roles</div>
                </div>
              </div>

              {/* AWS SuperHacks 2025 Winner Pill (Solid, Opaque & Clear) */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.65rem',
                  background: '#ffffff',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '12px',
                  border: '1.5px solid rgba(245, 158, 11, 0.5)',
                  boxShadow: '0 2px 8px rgba(245, 158, 11, 0.12)'
                }}
              >
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#fffbeb', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                  <Trophy size={15} color="#d97706" />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 900, color: '#0f172a' }}>AWS SuperHacks</div>
                  <div style={{ fontSize: '0.72rem', color: '#b45309', fontWeight: 800 }}>2025 Winner</div>
                </div>
              </div>

            </div>

            {/* Bottom Floating Tech Stack Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
              {techStack.map((tech, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '68px',
                    height: '68px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = '#1d68fe';
                    e.currentTarget.style.boxShadow = '0 8px 18px rgba(29, 104, 254, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div style={{ marginBottom: '0.2rem' }}>{tech.logo}</div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569', textAlign: 'center', lineHeight: 1 }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: 3 FLOATING GLASS CARDS + HANDWRITTEN CALLOUT */}
          {/* ========================================================================= */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'flex-end', 
              gap: '1.25rem',
              maxWidth: '380px',
              marginLeft: 'auto'
            }} 
            className="hero-right-content"
          >
            
            {/* 3 Floating Glass Feature Cards */}
            {floatingCards.map((card, idx) => (
              <a
                key={idx}
                href={card.href}
                className="floating-glass-pill"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.1rem 1.35rem',
                  borderRadius: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.88)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.9)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(29, 104, 254, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(29, 104, 254, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.9)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: card.bgIcon,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                        {card.title}
                      </span>
                      <span style={{ fontSize: '0.68rem', padding: '0.1rem 0.4rem', borderRadius: '4px', background: 'rgba(241, 245, 249, 0.9)', color: '#64748b', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        {card.tag}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.2rem', lineHeight: 1.3 }}>
                      {card.subtitle}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.1rem', fontFamily: 'var(--font-mono)' }}>
                      {card.detail}
                    </div>
                  </div>
                </div>

                <div 
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(241, 245, 249, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64748b',
                    flexShrink: 0
                  }}
                >
                  <ChevronRight size={16} />
                </div>
              </a>
            ))}

            {/* Handwritten Signature / Callout */}
            <div 
              style={{
                marginTop: '1.5rem',
                textAlign: 'center',
                transform: 'rotate(-4deg)',
                alignSelf: 'center',
                paddingRight: '1rem'
              }}
            >
              <div 
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#1e293b',
                  lineHeight: 1.1,
                  letterSpacing: '0.02em',
                  textShadow: '0 2px 8px rgba(255,255,255,0.9)'
                }}
              >
                Turning Ideas into Impact
              </div>
              <div 
                style={{
                  width: '110px',
                  height: '4px',
                  borderRadius: '2px',
                  background: '#1d68fe',
                  margin: '0.4rem auto 0',
                  boxShadow: '0 2px 6px rgba(29, 104, 254, 0.4)'
                }}
              />
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-layout-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 1023px) {
          .hero-poster-section {
            background-position: center top !important;
          }
          .hero-scrim {
            background: rgba(255, 255, 255, 0.95) !important;
          }
          .hero-left-content {
            max-width: 100% !important;
          }
          .hero-right-content {
            align-items: stretch !important;
            margin-left: 0 !important;
            max-width: 100% !important;
            margin-top: 1rem;
          }
        }
        @media (max-width: 640px) {
          .hide-mobile {
            display: none !important;
          }
          .hero-poster-section {
            padding-top: 4.75rem !important;
            padding-bottom: 2rem !important;
          }
          .btn-hero-primary {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 480px) {
          .hero-layout-grid {
            gap: 1.5rem !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
};
