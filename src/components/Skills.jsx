import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
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
        
        {/* Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-header"
        >
          <div className="section-tag" style={{ color: 'var(--google-blue)', background: 'var(--google-blue-soft)' }}>
            <Cpu size={14} />
            Cloud & AI Skills Matrix
          </div>
          <h2 className="section-title">Cloud & AI Engineering Skills</h2>
          <p className="section-subtitle">
            Prioritizing production Generative AI, autonomous Multi-Agent systems, high-scale Python distributed backends, and multi-cloud AI infrastructure.
          </p>
        </motion.div>

        {/* 4 Google-Colored Bento Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {portfolioData.skills.categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="#ffffff"
                glarePosition="all"
                style={{ height: '100%', borderRadius: '1.15rem' }}
              >
                <div 
                  className="bento-card"
                  style={{
                    height: '100%',
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
                      <motion.div 
                        whileHover={{ rotate: 12, scale: 1.1 }}
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
                      </motion.div>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                          {cat.name}
                        </h3>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {cat.skills.map((skill, sIdx) => (
                        <motion.div 
                          key={sIdx}
                          whileHover={{ x: 4, scale: 1.01 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.45rem 0.65rem',
                            borderRadius: '6px',
                            background: 'var(--bg-input)',
                            border: '1px solid var(--border-subtle)',
                            transition: 'border-color 0.2s ease'
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
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
