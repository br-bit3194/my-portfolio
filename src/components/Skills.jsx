import React from 'react';
import { 
  Bot, 
  Server, 
  Cloud, 
  Database, 
  Cpu, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const getCategoryIcon = (iconName, color) => {
    switch (iconName) {
      case 'Bot': return <Bot size={20} color={color} />;
      case 'Server': return <Server size={20} color={color} />;
      case 'Cloud': return <Cloud size={20} color={color} />;
      case 'Database': return <Database size={20} color={color} />;
      default: return <Cpu size={20} color={color} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag" style={{ color: 'var(--google-blue)', background: 'var(--google-blue-soft)' }}>
            <Cpu size={14} />
            Technical Expertise Matrix
          </div>
          <h2 className="section-title">Core Skills & Engineering Stack</h2>
          <p className="section-subtitle">
            Prioritizing production Generative AI, autonomous Multi-Agent systems, high-scale Python distributed backends, and multi-cloud AI infrastructure.
          </p>
        </div>

        {/* 4 Google-Colored Bento Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {portfolioData.skills.categories.map((cat, idx) => (
            <div 
              key={idx}
              className="bento-card"
              style={{
                padding: '2rem',
                borderTop: `4px solid ${cat.color}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Card Title & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '0.85rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div 
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'var(--bg-input)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getCategoryIcon(cat.icon, cat.color)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {cat.name}
                    </h3>
                  </div>
                </div>

                {/* Skills List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.45rem 0.65rem',
                        borderRadius: '6px',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                      <span 
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          color: cat.color
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
