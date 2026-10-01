import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import confetti from 'canvas-confetti';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Trophy, 
  BookOpen, 
  GraduationCap,
  Sparkles,
  ExternalLink,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { GoogleCloudLogo, AwsLogo, PythonLogo } from './TechLogos';
import { portfolioData } from '../data/portfolioData';
import { SpotlightCard } from './ui/SpotlightCard';
import { Magnetic } from './ui/Magnetic';

export const Certifications = () => {
  const [activeTab, setActiveTab] = useState('all');

  const gcpLeaderCert = portfolioData.certifications.find(c => c.id === 'gcp-genai-leader');
  const allItems = portfolioData.certifications;

  const filteredItems = activeTab === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === activeTab);

  const triggerGcpConfetti = (e) => {
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

  const getCertIcon = (iconName, color, badge) => {
    if (badge === 'Google Cloud') return <GoogleCloudLogo size={22} />;
    if (badge === 'AWS' || badge === 'AWS Hackathon Winner') return <AwsLogo size={22} />;
    if (badge === 'Top 5% Global') return <PythonLogo size={22} />;
    
    switch (iconName) {
      case 'Award': return <Award size={20} color={color} />;
      case 'ShieldCheck': return <ShieldCheck size={20} color={color} />;
      case 'CheckCircle': return <CheckCircle size={20} color={color} />;
      case 'Star': return <Star size={20} color={color} />;
      case 'TrendingUp': return <TrendingUp size={20} color={color} />;
      case 'Trophy': return <Trophy size={20} color={color} />;
      case 'BookOpen': return <BookOpen size={20} color={color} />;
      default: return <Award size={20} color={color} />;
    }
  };

  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
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
            <ShieldCheck size={14} />
            Verified Honors & Credentials
          </div>
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="section-subtitle">
            Industry-recognized credentials in Generative AI, cloud machine learning, corporate excellence awards, and hackathon victories.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* VIP FLAGSHIP SPOTLIGHT: GOOGLE CLOUD CERTIFIED GENERATIVE AI LEADER */}
        {/* ========================================================================= */}
        {gcpLeaderCert && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '2.5rem', position: 'relative' }}
          >
            <Tilt
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              glareEnable={true}
              glareMaxOpacity={0.12}
              glareColor="#ffffff"
              glarePosition="all"
              style={{ borderRadius: '1.25rem' }}
            >
              <SpotlightCard
                spotlightColor="rgba(26, 115, 232, 0.15)"
                borderColor="rgba(26, 115, 232, 0.5)"
                style={{
                  border: '1.5px solid rgba(26, 115, 232, 0.4)',
                  boxShadow: '0 12px 32px rgba(26, 115, 232, 0.12)'
                }}
              >
                <div style={{ padding: '2.5rem', position: 'relative', height: '100%' }}>
                  <div className="google-strip" />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="gcp-spotlight-grid">
                    
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={triggerGcpConfetti}
                          title="Click for celebration 🎉"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            padding: '0.35rem 0.85rem',
                            borderRadius: '9999px',
                            background: 'var(--google-blue)',
                            color: '#ffffff',
                            fontSize: '0.78rem',
                            fontWeight: 800,
                            letterSpacing: '0.02em',
                            boxShadow: '0 2px 8px rgba(26, 115, 232, 0.35)',
                            cursor: 'pointer'
                          }}
                        >
                          <Sparkles size={13} />
                          FLAGSHIP CREDENTIAL 🎉
                        </motion.span>
                        
                        <span 
                          className="badge" 
                          style={{ 
                            background: 'rgba(26, 115, 232, 0.1)', 
                            color: '#1a73e8',
                            fontWeight: 700,
                            border: '1px solid rgba(26, 115, 232, 0.25)' 
                          }}
                        >
                          Executive Leadership
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                        <motion.div 
                          whileHover={{ rotate: 10, scale: 1.08 }}
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '14px',
                            background: '#ffffff',
                            border: '1.5px solid rgba(26, 115, 232, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: '0 4px 12px rgba(26, 115, 232, 0.15)'
                          }}
                        >
                          <GoogleCloudLogo size={32} />
                        </motion.div>

                        <div>
                          <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.25, marginBottom: '0.35rem' }}>
                            {gcpLeaderCert.title}
                          </h3>
                          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--google-blue)', marginBottom: '0.85rem' }}>
                            Issued by Google Cloud
                          </div>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6, maxWidth: '680px', marginBottom: '1.25rem' }}>
                            {gcpLeaderCert.description}
                          </p>

                          {/* Skill Tags */}
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {gcpLeaderCert.tags?.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                style={{
                                  fontSize: '0.78rem',
                                  fontWeight: 700,
                                  padding: '0.25rem 0.65rem',
                                  borderRadius: '6px',
                                  background: 'rgba(255, 255, 255, 0.9)',
                                  border: '1px solid rgba(26, 115, 232, 0.25)',
                                  color: '#1a73e8',
                                  fontFamily: 'var(--font-mono)'
                                }}
                              >
                                ✓ {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Status / Verification Badge Box */}
                    <div 
                      style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        background: 'rgba(255, 255, 255, 0.85)',
                        padding: '1.5rem',
                        borderRadius: '1rem',
                        border: '1px solid rgba(26, 115, 232, 0.2)'
                      }}
                      className="gcp-status-box"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <CheckCircle2 size={18} color="var(--google-green)" />
                        <span style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                          Industry Verified
                        </span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                        Demonstrated domain mastery in architecting scalable Generative AI systems, RAG frameworks, and Responsible AI models on Google Cloud Platform.
                      </div>
                      <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        Status: <strong>Active & Verified</strong>
                      </div>
                    </div>

                  </div>
                </div>
              </SpotlightCard>
            </Tilt>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* CATEGORY SWITCHER TABS */}
        {/* ========================================================================= */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeTab === 'all' ? 'var(--text-primary)' : 'var(--bg-card)',
              color: activeTab === 'all' ? 'var(--text-inverse)' : 'var(--text-secondary)',
              border: activeTab === 'all' ? '1px solid var(--text-primary)' : '1px solid var(--border-color)',
              boxShadow: activeTab === 'all' ? 'var(--shadow-sm)' : 'none'
            }}
          >
            All Credentials & Honors ({allItems.length})
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('certification')}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeTab === 'certification' ? 'var(--google-blue)' : 'var(--bg-card)',
              color: activeTab === 'certification' ? '#ffffff' : 'var(--text-secondary)',
              border: activeTab === 'certification' ? '1px solid var(--google-blue)' : '1px solid var(--border-color)',
              boxShadow: activeTab === 'certification' ? '0 2px 8px rgba(26, 115, 232, 0.3)' : 'none'
            }}
          >
            🏅 GenAI & Cloud Certifications ({allItems.filter(i => i.category === 'certification').length})
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab('award')}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeTab === 'award' ? '#ea4335' : 'var(--bg-card)',
              color: activeTab === 'award' ? '#ffffff' : 'var(--text-secondary)',
              border: activeTab === 'award' ? '1px solid #ea4335' : '1px solid var(--border-color)',
              boxShadow: activeTab === 'award' ? '0 2px 8px rgba(234, 67, 53, 0.3)' : 'none'
            }}
          >
            🏆 Awards & Hackathons ({allItems.filter(i => i.category === 'award').length})
          </motion.button>
        </div>

        {/* ========================================================================= */}
        {/* CREDENTIALS & AWARDS PLAQUE GRID */}
        {/* ========================================================================= */}
        <motion.div 
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isAward = item.category === 'award';
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
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
                      spotlightColor={item.brandColor ? `${item.brandColor}1a` : 'rgba(26, 115, 232, 0.1)'}
                      borderColor={item.brandColor ? `${item.brandColor}55` : 'rgba(26, 115, 232, 0.4)'}
                      style={{ height: '100%' }}
                    >
                      <div
                        style={{
                          height: '100%',
                          padding: '1.75rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          borderTop: `4px solid ${item.brandColor || 'var(--google-blue)'}`,
                          position: 'relative'
                        }}
                      >
                        <div>
                          
                          {/* Top Meta Bar */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div 
                              style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '10px',
                                background: 'var(--bg-input)',
                                border: '1px solid var(--border-color)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: item.brandColor
                              }}
                            >
                              {getCertIcon(item.icon, item.brandColor || 'var(--google-blue)', item.badge)}
                            </div>
                            
                            <span 
                              className="badge"
                              style={{
                                background: isAward ? 'rgba(234, 67, 53, 0.08)' : 'rgba(26, 115, 232, 0.08)',
                                color: item.brandColor || 'var(--text-primary)',
                                border: `1px solid ${item.brandColor ? `${item.brandColor}33` : 'var(--border-color)'}`,
                                fontWeight: 700
                              }}
                            >
                              {item.badge}
                            </span>
                          </div>

                          {/* Title & Issuer */}
                          <h4 style={{ fontSize: '1.12rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: 1.35 }}>
                            {item.title}
                          </h4>

                          <div style={{ fontSize: '0.84rem', color: item.brandColor || 'var(--google-blue)', fontWeight: 700, marginBottom: '0.75rem' }}>
                            {item.issuer}
                          </div>

                          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1rem' }}>
                            {item.description}
                          </p>

                          {/* Micro Skill Tags */}
                          {item.tags && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                              {item.tags.map((t, ti) => (
                                <span
                                  key={ti}
                                  style={{
                                    fontSize: '0.72rem',
                                    padding: '0.15rem 0.45rem',
                                    borderRadius: '4px',
                                    background: 'var(--bg-input)',
                                    color: 'var(--text-secondary)',
                                    fontFamily: 'var(--font-mono)'
                                  }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}

                        </div>

                        {/* Footer Status */}
                        <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.75rem', color: isAward ? 'var(--google-red)' : 'var(--google-green)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            {isAward ? <Trophy size={13} /> : <CheckCircle size={13} />}
                            {isAward ? 'Honored & Awarded' : 'Verified Credential'}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                            {item.date}
                          </span>
                        </div>

                      </div>
                    </SpotlightCard>
                  </Tilt>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ========================================================================= */}
        {/* FORMAL ACADEMIC DEGREE BENTO BLOCK */}
        {/* ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card"
          style={{
            padding: '2rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            borderLeft: '4px solid var(--google-blue)',
            background: 'var(--bg-card)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div 
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: 'var(--google-blue-soft)',
                border: '1px solid rgba(26, 115, 232, 0.25)',
                color: 'var(--google-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <GraduationCap size={28} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--google-blue)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                Formal Engineering Degree
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                {portfolioData.education.degree}
              </h3>
              <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                {portfolioData.education.institution} • {portfolioData.education.location}
              </div>
            </div>
          </div>

          <div>
            <span className="badge badge-blue" style={{ fontSize: '0.85rem' }}>
              {portfolioData.education.year}
            </span>
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .gcp-spotlight-grid {
            grid-template-columns: 1.3fr 0.7fr !important;
          }
        }
      `}</style>
    </section>
  );
};
