import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import confetti from 'canvas-confetti';
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
import { ParticleCanvas } from './ui/ParticleCanvas';
import { Magnetic } from './ui/Magnetic';
import { Marquee } from './ui/Marquee';
import { NumberTicker } from './ui/NumberTicker';

export const Hero = ({ onOpenAiModal }) => {
  const { personal } = portfolioData;

  // Kinetic Rotating Headline Roles
  const roles = [
    "Agentic AI Engineer",
    "Google Cloud GenAI Leader",
    "Autonomous Multi-Agent Builder",
    "AWS SuperHacks 2025 Winner",
    "Senior Software Engineer"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  const triggerTrophyConfetti = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#4285f4', '#ea4335', '#fbbc05', '#34a853']
    });
  };

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

  const techStackMarquee = [
    { name: "Google Cloud", logo: <GoogleCloudLogo size={20} /> },
    { name: "AWS", logo: <AwsLogo size={20} /> },
    { name: "Python", logo: <PythonLogo size={20} /> },
    { name: "FastAPI", logo: <FastApiLogo size={20} /> },
    { name: "Gemini", logo: <GeminiStarLogo size={20} /> },
    { name: "Agent-to-Agent (A2A)", logo: <Bot size={18} color="#1a73e8" /> },
    { name: "Model Context Protocol", logo: <Database size={18} color="#10b981" /> },
    { name: "Amazon Bedrock", logo: <Cloud size={18} color="#f59e0b" /> },
    { name: "Vertex AI", logo: <Sparkles size={18} color="#ea4335" /> },
    { name: "Langfuse Observability", logo: <ShieldCheck size={18} color="#8b5cf6" /> }
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
        background: 'transparent'
      }}
    >
      {/* 21st.dev Interactive Canvas Particle Constellation */}
      <ParticleCanvas quantity={30} color="#1a73e8" />

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

      {/* Jade Sky gradient scrim for crisp text readability */}
      <div
        className="hero-scrim"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(238, 246, 227, 0.96) 0%, rgba(238, 246, 227, 0.92) 34%, rgba(238, 246, 227, 0.1) 50%, rgba(207, 233, 240, 0.88) 75%, rgba(238, 246, 227, 0.96) 100%)',
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
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'center',
            width: '100%'
          }}
          className="hero-layout-grid"
        >

          {/* ========================================================================= */}
          {/* LEFT COLUMN: WHO I AM, TITLE, BIO, CTA BUTTONS, TRUST BAR, MARQUEE BAR */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%', maxWidth: '620px' }}
            className="hero-left-content"
          >

            {/* Top Featured Credentials Badge: Google Cloud Certified GenAI Leader */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center', marginBottom: '1rem' }}>

              <Magnetic strength={0.2}>
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href="#certifications"
                  title="Jump to Certifications & Awards"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    padding: '0.4rem 0.95rem',
                    borderRadius: '9999px',
                    background: 'var(--bg-card)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(26, 115, 232, 0.35)',
                    color: '#1a73e8',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    boxShadow: 'var(--shadow-sm)',
                    cursor: 'pointer'
                  }}
                >
                  <GoogleCloudLogo size={18} />
                  <span>Google Cloud Certified Generative AI Leader</span>
                </motion.a>
              </Magnetic>

              <Magnetic strength={0.2}>
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    background: 'var(--bg-card)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(10, 102, 194, 0.35)',
                    color: '#0a66c2',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <LinkedinOfficialLogo size={18} />
                  <span>5K+ LinkedIn Family</span>
                </motion.a>
              </Magnetic>

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

            {/* Kinetic Animated Role Subtitle */}
            <div
              style={{
                minHeight: '2.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  overflow: 'hidden',
                  height: '2rem'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      letterSpacing: '-0.01em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}
                  >
                    <span style={{ color: '#1d68fe' }}>⚡</span>
                    <span>{roles[roleIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <span style={{ fontSize: '0.78rem', background: 'rgba(16, 185, 129, 0.12)', color: '#059669', padding: '0.2rem 0.55rem', borderRadius: '6px', fontWeight: 700, border: '1px solid rgba(16, 185, 129, 0.25)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <NumberTicker value={parseFloat(personal.experienceDecimal) || 5.8} decimalPlaces={1} suffix="+ Yrs Exp" />
              </span>
            </div>

            {/* Summary Text */}
            <p
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.6,
                color: '#475569',
                marginBottom: '1.5rem',
                maxWidth: '490px'
              }}
            >
              Building production-grade AI systems with Generative AI, RAG and Agentic AI, backed by {personal.experienceYears} of experience in scalable backend systems and cloud-native solutions.
            </p>

            {/* Mobile-Only Focused Poster Portrait Showcase with Ambient Blur Aura */}
            <div className="mobile-portrait-center" style={{ margin: '1.5rem auto 2rem', textAlign: 'center', maxWidth: '320px', position: 'relative' }}>
              
              {/* Ambient Blurred Aura from Poster */}
              <div 
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  backgroundImage: 'url(/hero-cropped-mobile.png)',
                  backgroundPosition: 'center 20%',
                  backgroundSize: 'cover',
                  filter: 'blur(24px)',
                  opacity: 0.5,
                  borderRadius: '2rem',
                  zIndex: 0
                }}
              />

              {/* Centered Focused Portrait Frame (Direct from Poster) */}
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                style={{ borderRadius: '1.75rem', position: 'relative', zIndex: 1 }}
              >
                <div 
                  style={{
                    position: 'relative',
                    width: '270px',
                    height: '340px',
                    margin: '0 auto',
                    borderRadius: '1.75rem',
                    overflow: 'hidden',
                    border: '2.5px solid var(--border-color)',
                    boxShadow: '0 14px 36px rgba(29, 104, 254, 0.22), 0 4px 12px rgba(0, 0, 0, 0.08)',
                    background: 'var(--bg-card)'
                  }}
                >
                  <img 
                    src="/hero-cropped-mobile.png" 
                    alt="Bhavesh Rathod"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.tried1) {
                        target.dataset.tried1 = 'true';
                        target.src = '/hero-mobile.png';
                      } else if (!target.dataset.tried2) {
                        target.dataset.tried2 = 'true';
                        target.src = '/hero.png';
                      }
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 10%',
                      display: 'block'
                    }}
                  />

                  {/* Soft bottom vignette overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.05) 35%, transparent 100%)',
                      pointerEvents: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '0.85rem',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1rem', textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
                      Bhavesh Rathod
                    </div>
                    <div style={{ color: '#93c5fd', fontSize: '0.72rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      AI Engineer • Senior Software Engineer
                    </div>
                  </div>
                </div>
              </Tilt>

            </div>

            {/* Action Buttons with 21st.dev Magnetic Attraction */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center', marginBottom: '2rem' }}>

              {/* View My Work Button */}
              <Magnetic strength={0.25}>
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
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
                    textDecoration: 'none'
                  }}
                >
                  <span>View My Work</span>
                  <ArrowRight size={18} />
                </motion.a>
              </Magnetic>

              {/* Get In Touch with LinkedIn badge */}
              <Magnetic strength={0.25}>
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.85rem 1.6rem',
                    borderRadius: '9999px',
                    background: 'var(--bg-card)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    boxShadow: 'var(--shadow-sm)',
                    textDecoration: 'none'
                  }}
                >
                  <span>Get In Touch</span>
                  <LinkedinOfficialLogo size={18} />
                </motion.a>
              </Magnetic>

            </div>

            {/* Solid High-Contrast Trust Metabar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                flexWrap: 'wrap',
                paddingBottom: '1.5rem',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '1.5rem'
              }}
            >
              {/* Location Pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(29, 104, 254, 0.1)', color: '#1d68fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)' }}>Ahmedabad, India</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Based in India</div>
                </div>
              </div>

              {/* Remote Opportunities Pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Globe size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)' }}>Remote Worldwide</div>
                  <div style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 600 }}>Open to Roles</div>
                </div>
              </div>

              {/* AWS SuperHacks 2025 Winner Pill with Confetti Burst */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={triggerTrophyConfetti}
                title="Click for celebration 🎉"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '12px',
                  border: '1.5px solid rgba(245, 158, 11, 0.6)',
                  boxShadow: '0 4px 16px rgba(245, 158, 11, 0.15)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#fffbeb', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                  <Trophy size={15} color="#d97706" />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 900, color: 'var(--text-primary)' }}>AWS SuperHacks 🎉</div>
                  <div style={{ fontSize: '0.72rem', color: '#b45309', fontWeight: 800 }}>2025 Winner</div>
                </div>
              </motion.div>

            </div>

            {/* 21st.dev Infinite Tech Stack Marquee */}
            <div style={{ marginTop: '0.5rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                ⚡ Core Tech & Architecture Competencies:
              </div>
              <Marquee speed={28} pauseOnHover={true}>
                {techStackMarquee.map((tech, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '12px',
                      background: 'var(--bg-card)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid var(--border-color)',
                      boxShadow: 'var(--shadow-sm)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {tech.logo}
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>

          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: 3 3D TILT FLOATING GLASS CARDS + HANDWRITTEN CALLOUT */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '1.25rem',
              width: '100%',
              maxWidth: '440px',
              marginLeft: 'auto'
            }}
            className="hero-right-content"
          >

            {/* 3 3D Parallax Tilt Floating Glass Feature Cards */}
            {floatingCards.map((card, idx) => (
              <Tilt
                key={idx}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                style={{ width: '100%', borderRadius: '1.25rem' }}
              >
                <motion.a
                  href={card.href}
                  className="floating-glass-pill"
                  whileHover={{ scale: 1.02 }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.1rem 1.35rem',
                    borderRadius: '1.25rem',
                    background: 'var(--bg-card)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-md)',
                    textDecoration: 'none'
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
                </motion.a>
              </Tilt>
            ))}

            {/* Handwritten Signature / Callout */}
            <motion.div
              animate={{ rotate: [-4, -2, -4] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{
                marginTop: '1.5rem',
                textAlign: 'center',
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
            </motion.div>

          </motion.div>

        </div>
      </div>

      <style>{`
        .mobile-portrait-center {
          display: none;
        }

        @media (min-width: 900px) {
          .hero-layout-grid {
            grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr) !important;
          }
          .hero-bg-poster {
            display: block !important;
          }
          .hero-scrim {
            display: block !important;
          }
          .mobile-portrait-center {
            display: none !important;
          }
        }

        @media (max-width: 899px) {
          .mobile-portrait-center {
            display: block !important;
          }
          .hero-poster-section {
            padding-top: 4.75rem !important;
            padding-bottom: 2.5rem !important;
          }
          .hero-bg-poster {
            display: none !important;
          }
          .hero-scrim {
            display: none !important;
          }
          .hero-left-content {
            padding-top: 0 !important;
            max-width: 100% !important;
          }
          .hero-right-content {
            align-items: stretch !important;
            margin-left: 0 !important;
            max-width: 100% !important;
            margin-top: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .hide-mobile {
            display: none !important;
          }
          .hero-poster-section {
            padding-top: 4.25rem !important;
            padding-bottom: 2rem !important;
          }
          .btn-hero-primary, .btn-hero-secondary {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .hero-layout-grid {
            gap: 1.25rem !important;
            min-height: auto !important;
          }
          .hero-left-content h1 {
            font-size: clamp(2.35rem, 11vw, 3.25rem) !important;
          }
        }
      `}</style>
    </section>
  );
};
