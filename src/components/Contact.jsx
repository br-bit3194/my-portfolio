import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Download, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (field, text, e) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);

    if (e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { x, y },
        colors: ['#4285f4', '#34a853', '#ea4335', '#fbbc05']
      });
    }

    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
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
            <Mail size={14} />
            Let's Connect
          </div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Actively open to <strong>Remote Opportunities across India & Worldwide</strong> (AI Engineer, GenAI Architect, and Lead AI Platform roles). Reach out via Email or LinkedIn.
          </p>
        </motion.div>

        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          
          {/* Bento Box Container with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <Tilt
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              glareEnable={true}
              glareMaxOpacity={0.06}
              glareColor="#ffffff"
              glarePosition="all"
              style={{ borderRadius: '1.25rem' }}
            >
              <div 
                className="bento-card contact-bento-card" 
                style={{ 
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem' }}>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Direct Professional Inquiries
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    I respond directly to technical recruiters, engineering leaders, and collaborators via Email and LinkedIn.
                  </p>
                </div>

                {/* Single Row 3-Column Grid */}
                <div className="direct-inquiries-grid">
                  
                  {/* Card 1: Email */}
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="direct-inquiry-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--google-red-soft)', color: 'var(--google-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Mail size={18} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                          Email Channel
                        </div>
                        <a 
                          href={`mailto:${personal.email}`} 
                          title={personal.email}
                          style={{ 
                            fontWeight: 700, 
                            color: 'var(--text-primary)', 
                            fontSize: '0.86rem', 
                            display: 'block',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {personal.email}
                        </a>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => handleCopy('email', personal.email, e)}
                      title="Copy Email"
                      style={{ 
                        padding: '0.45rem', 
                        borderRadius: '8px', 
                        background: 'var(--bg-card)', 
                        border: '1px solid var(--border-color)', 
                        color: 'var(--text-muted)', 
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginLeft: '0.5rem'
                      }}
                    >
                      {copiedField === 'email' ? <Check size={15} color="var(--google-green)" /> : <Copy size={15} />}
                    </motion.button>
                  </motion.div>

                  {/* Card 2: LinkedIn */}
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="direct-inquiry-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(10, 102, 194, 0.1)', color: '#0A66C2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <LinkedinIcon size={18} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.1rem' }}>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>LinkedIn</span>
                          <span style={{ fontSize: '0.62rem', fontWeight: 700, padding: '0.05rem 0.35rem', borderRadius: '4px', background: 'rgba(10, 102, 194, 0.1)', color: '#0A66C2' }}>
                            5K+ Family
                          </span>
                        </div>
                        <a 
                          href={personal.linkedin} 
                          target="_blank" 
                          rel="noreferrer" 
                          title="LinkedIn Profile"
                          style={{ 
                            fontWeight: 700, 
                            color: 'var(--google-blue)', 
                            fontSize: '0.86rem', 
                            display: 'block',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          in/bhaveshkumar-rathod
                        </a>
                      </div>
                    </div>

                    <motion.a 
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      href={personal.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      title="Visit LinkedIn Profile"
                      style={{ 
                        padding: '0.45rem', 
                        borderRadius: '8px', 
                        background: 'var(--bg-card)', 
                        border: '1px solid var(--border-color)', 
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginLeft: '0.5rem'
                      }}
                    >
                      <ArrowRight size={15} />
                    </motion.a>
                  </motion.div>

                  {/* Card 3: Location */}
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="direct-inquiry-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--google-green-soft)', color: 'var(--google-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <MapPin size={18} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                          Work Location
                        </div>
                        <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.86rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          Ahmedabad, India
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--google-green)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                          Open to Remote (Worldwide)
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>

                {/* Resume Download CTA Strip */}
                <div style={{ maxWidth: '420px', margin: '0 auto' }}>
                  <motion.a 
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    href={personal.resumeUrl}
                    download="Bhavesh_Rathod_GenAI_Engineer_Resume.pdf"
                    className="btn-primary"
                    style={{ 
                      width: '100%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '0.65rem', 
                      padding: '0.9rem 1.5rem',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 14px rgba(26, 115, 232, 0.3)'
                    }}
                  >
                    <Download size={18} />
                    <span>Download Verified Resume PDF</span>
                  </motion.a>
                </div>

              </div>
            </Tilt>
          </motion.div>

        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-bento-card {
            padding: 1.35rem !important;
          }
        }
      `}</style>
    </section>
  );
};
