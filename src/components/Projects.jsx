import React, { useState } from 'react';
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

export const Projects = () => {
  const maestroProject = portfolioData.projects.find(p => p.id === 'maestro');
  const otherProjects = portfolioData.projects.filter(p => p.id !== 'maestro');

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} color="var(--google-blue)" />
            Featured Systems & Hackathons
          </div>
          <h2 className="section-title">Production AI Systems & Engineering Projects</h2>
          <p className="section-subtitle">
            Autonomous multi-agent platforms, enterprise Vertex AI recommendation engines, and high-scale distributed backends.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SPOTLIGHT: MAESTRO (AWS SuperHacks 2025 Special Jury Award Winner) */}
        {/* ========================================================================= */}
        {maestroProject && (
          <div 
            className="bento-card"
            style={{ 
              marginBottom: '3rem', 
              padding: '2.5rem',
              border: '1px solid rgba(249, 171, 0, 0.35)',
              position: 'relative'
            }}
          >
            <div className="google-strip" />

            {/* Top Badge Ribbon */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                <span className="badge badge-yellow" style={{ fontSize: '0.82rem', padding: '0.35rem 0.8rem' }}>
                  <Award size={15} />
                  {maestroProject.award}
                </span>
                <span className="badge badge-blue">SuperHacks 2025 powered by AWS</span>
              </div>

              <a 
                href={maestroProject.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                <Tv size={16} />
                <span>Watch on YouTube</span>
                <ExternalLink size={14} />
              </a>
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
                    <span 
                      key={i} 
                      style={{ 
                        fontSize: '0.75rem', 
                        padding: '0.25rem 0.6rem', 
                        borderRadius: '6px', 
                        background: 'var(--bg-input)', 
                        border: '1px solid var(--border-color)',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        color: 'var(--text-primary)'
                      }}
                    >
                      {tech}
                    </span>
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
        )}

        {/* ========================================================================= */}
        {/* OTHER PRODUCTION PROJECTS BENTO GRID */}
        {/* ========================================================================= */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {otherProjects.map((proj, idx) => (
            <div 
              key={proj.id}
              className="bento-card"
              style={{
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
