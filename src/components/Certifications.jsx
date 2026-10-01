import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Trophy, 
  BookOpen, 
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications = () => {
  const getCertIcon = (iconName, color) => {
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
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag" style={{ color: 'var(--google-blue)', background: 'var(--google-blue-soft)' }}>
            <ShieldCheck size={14} />
            Verified Honors & Credentials
          </div>
          <h2 className="section-title">Certifications & Accolades</h2>
          <p className="section-subtitle">
            Formal credentials in Google Cloud Generative AI, Databricks AI Engineering, and algorithmic hackathons.
          </p>
        </div>

        {/* Certifications Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="bento-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: `3px solid ${cert.brandColor || 'var(--google-blue)'}`
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
                  <div 
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getCertIcon(cert.icon, cert.brandColor || 'var(--google-blue)')}
                  </div>
                  <span 
                    className="badge"
                    style={{
                      background: 'var(--bg-input)',
                      color: cert.brandColor || 'var(--text-primary)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: 1.35 }}>
                  {cert.title}
                </h4>

                <div style={{ fontSize: '0.82rem', color: cert.brandColor || 'var(--google-blue)', fontWeight: 600, marginBottom: '0.65rem' }}>
                  Issued by {cert.issuer}
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {cert.description}
                </p>
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--google-green)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle size={13} />
                  Verified
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Formal Education Card */}
        <div 
          className="bento-card"
          style={{
            padding: '2rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            borderLeft: '4px solid var(--google-blue)'
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
                justifyContent: 'center'
              }}
            >
              <GraduationCap size={28} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--google-blue)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                Academic Degree
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
        </div>

      </div>
    </section>
  );
};
