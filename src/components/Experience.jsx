import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Building2,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const [expandedId, setExpandedId] = useState('talentica-sr');

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag" style={{ color: 'var(--google-green)', background: 'var(--google-green-soft)' }}>
            <Briefcase size={14} />
            Career History & Impact
          </div>
          <h2 className="section-title">5+ Years of Engineering Experience</h2>
          <p className="section-subtitle">
            Specialized progression across autonomous Multi-Agent systems, distributed microservices, and FinTech infrastructure.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '920px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {portfolioData.experience.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div 
                key={exp.id}
                className="bento-card"
                style={{
                  padding: '2rem',
                  borderLeft: index === 0 
                    ? '4px solid var(--google-blue)' 
                    : index === 1 
                    ? '4px solid var(--google-green)' 
                    : index === 2 
                    ? '4px solid var(--google-yellow)' 
                    : '4px solid var(--google-red)'
                }}
              >
                {/* Header Row */}
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                          {exp.role}
                        </h3>
                        <span className={index === 0 ? 'badge badge-green' : 'badge badge-blue'}>
                          {exp.badge}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '1rem', fontWeight: 700, color: 'var(--google-blue)' }}>
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                          <Calendar size={13} />
                          <span>{exp.period}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-muted)', justifyContent: 'flex-end', marginTop: '0.2rem' }}>
                          <MapPin size={12} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div 
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'var(--bg-input)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                    
                    {/* Responsibilities & Achievements */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      {exp.highlights.map((point, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                          <CheckCircle2 size={16} color="var(--google-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                        Technologies:
                      </span>
                      {exp.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          style={{
                            fontSize: '0.75rem',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '4px',
                            background: 'var(--bg-input)',
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-secondary)',
                            fontFamily: 'var(--font-mono)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
