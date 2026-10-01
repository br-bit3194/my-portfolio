import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import confetti from 'canvas-confetti';
import { 
  Award, 
  Play, 
  ExternalLink, 
  Tv, 
  CheckCircle2,
  Sparkles,
  Layers,
  Zap,
  Bot
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SpotlightCard } from './ui/SpotlightCard';
import { Magnetic } from './ui/Magnetic';

export const Projects = () => {
  const maestroProject = portfolioData.projects.find(p => p.id === 'maestro');
  const otherProjects = portfolioData.projects.filter(p => p.id !== 'maestro');

  const triggerSuperHacksConfetti = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x, y },
      colors: ['#f59e0b', '#3b82f6', '#10b981', '#ef4444']
    });
  };

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-header"
        >
          <div className="section-tag" style={{ color: 'var(--google-blue)', background: 'var(--google-blue-soft)' }}>
            <Award size={14} color="var(--google-blue)" />
            GenAI Projects & RAG
          </div>
          <h2 className="section-title">GenAI Projects & RAG Applications</h2>
          <p className="section-subtitle">
            Autonomous multi-agent platforms, MAESTRO (AWS SuperHacks 2025 Winner), enterprise Vertex AI recommendation engines, and high-scale distributed backends.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* SPOTLIGHT: MAESTRO (AWS SuperHacks 2025 Special Jury Award Winner) */}
        {/* ========================================================================= */}
        {maestroProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '3rem', position: 'relative' }}
          >
            <Tilt
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              style={{ borderRadius: '1.25rem' }}
            >
              <SpotlightCard
                spotlightColor="rgba(245, 158, 11, 0.12)"
                borderColor="rgba(245, 158, 11, 0.45)"
                style={{
                  border: '1px solid rgba(249, 171, 0, 0.45)',
                  boxShadow: '0 12px 36px rgba(249, 171, 0, 0.08)'
                }}
              >
                <div style={{ padding: '2.5rem', position: 'relative', height: '100%' }}>
                  <div className="google-strip" />

                  {/* Top Badge Ribbon */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={triggerSuperHacksConfetti}
                        className="badge badge-yellow" 
                        style={{ fontSize: '0.82rem', padding: '0.35rem 0.8rem', cursor: 'pointer' }}
                        title="Click for celebration 🎉"
                      >
                        <Award size={15} />
                        {maestroProject.award} 🎉
                      </motion.span>
                      <span className="badge badge-blue">SuperHacks 2025 powered by AWS</span>
                    </div>

                    <Magnetic strength={0.2}>
                      <motion.a 
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        href={maestroProject.youtubeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                      >
                        <Tv size={16} />
                        <span>Watch on YouTube</span>
                        <ExternalLink size={14} />
                      </motion.a>
                    </Magnetic>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="maestro-grid">
                    
                    {/* Left Column: Project Overview */}
                    <div>
                      <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                        {maestroProject.title}
                      </h3>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--google-blue)', marginBottom: '1rem' }}>
                        {maestroProject.subtitle}
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                        {maestroProject.description}
                      </p>

                      {/* Key Technical Highlights */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                        {maestroProject.highlights.map((h, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                            <CheckCircle2 size={17} color="var(--google-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                        {maestroProject.techStack.map((tech, i) => (
                          <motion.span 
                            key={i} 
                            whileHover={{ scale: 1.08, y: -2 }}
                            style={{ 
                              fontSize: '0.75rem', 
                              padding: '0.25rem 0.6rem', 
                              borderRadius: '6px', 
                              background: 'var(--bg-input)', 
                              border: '1px solid var(--border-color)',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 600,
                              color: 'var(--text-primary)',
                              display: 'inline-block'
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Embedded Video Player */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div 
                        style={{
                          position: 'relative',
                          width: '100%',
                          paddingBottom: '56.25%',
                          borderRadius: '0.85rem',
                          overflow: 'hidden',
                          border: '1px solid var(--border-color)',
                          boxShadow: 'var(--shadow-md)',
                          background: '#000000'
                        }}
                      >
                        <iframe 
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 0
                          }}
                          src={`https://www.youtube-nocookie.com/embed/${maestroProject.videoId}?rel=0`}
                          title="MAESTRO - AWS SuperHacks 2025 Demo Video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div style={{ textAlign: 'center', marginTop: '0.65rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        ▶ Official hackathon demonstration submitted to SuperHacks 2025
                      </div>
                    </div>

                  </div>
                </div>
              </SpotlightCard>
            </Tilt>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* OTHER PRODUCTION PROJECTS BENTO GRID */}
        {/* ========================================================================= */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {otherProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="#ffffff"
                glarePosition="all"
                style={{ height: '100%', borderRadius: '1.15rem' }}
              >
                <SpotlightCard
                  spotlightColor={
                    idx === 0 ? "rgba(26, 115, 232, 0.1)" :
                    idx === 1 ? "rgba(30, 142, 62, 0.1)" :
                    idx === 2 ? "rgba(249, 171, 0, 0.1)" :
                    "rgba(234, 67, 53, 0.1)"
                  }
                  borderColor={
                    idx === 0 ? "rgba(26, 115, 232, 0.4)" :
                    idx === 1 ? "rgba(30, 142, 62, 0.4)" :
                    idx === 2 ? "rgba(249, 171, 0, 0.4)" :
                    "rgba(234, 67, 53, 0.4)"
                  }
                  style={{ height: '100%' }}
                >
                  <div 
                    style={{
                      height: '100%',
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderTop: idx === 0 
                        ? '3px solid var(--google-blue)' 
                        : idx === 1 
                        ? '3px solid var(--google-green)' 
                        : idx === 2 
                        ? '3px solid var(--google-yellow)' 
                        : '3px solid var(--google-red)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <span className="badge badge-blue">{proj.tag}</span>
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--google-green)', fontFamily: 'var(--font-mono)' }}>
                          {proj.award}
                        </span>
                      </div>

                      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                        {proj.title}
                      </h4>

                      <div style={{ fontSize: '0.85rem', color: 'var(--google-blue)', fontWeight: 600, marginBottom: '0.85rem' }}>
                        {proj.subtitle}
                      </div>

                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                        {proj.description}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        {proj.highlights.slice(0, 3).map((hl, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: 'var(--text-primary)' }}>
                            <span style={{ color: 'var(--google-blue)', fontWeight: 800 }}>•</span>
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Pills */}
                    <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {proj.techStack.map((tech, i) => (
                        <span 
                          key={i} 
                          style={{ 
                            fontSize: '0.72rem', 
                            padding: '0.2rem 0.5rem', 
                            borderRadius: '4px', 
                            background: 'var(--bg-input)', 
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-secondary)',
                            fontFamily: 'var(--font-mono)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </SpotlightCard>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 1024px) {
          .maestro-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
};
