import React, { useState } from 'react';
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
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (field, text) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag" style={{ color: 'var(--google-blue)', background: 'var(--google-blue-soft)' }}>
            <Mail size={14} />
            Let's Connect
          </div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Actively open to <strong>Remote Opportunities across India & Worldwide</strong> (AI Engineer, GenAI Architect, and Lead AI Platform roles). Reach out via Email or LinkedIn.
          </p>
        </div>

        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          
          {/* Bento Box Container */}
          <div 
            className="bento-card" 
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
              <div className="direct-inquiry-card">
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

                <button
                  onClick={() => handleCopy('email', personal.email)}
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
                </button>
              </div>

              {/* Card 2: LinkedIn */}
              <div className="direct-inquiry-card">
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

                <a 
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
                </a>
              </div>

              {/* Card 3: Location */}
              <div className="direct-inquiry-card">
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
              </div>

            </div>

            {/* Resume Download CTA Strip */}
            <div style={{ maxWidth: '420px', margin: '0 auto' }}>
              <a 
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
              </a>
            </div>

          </div>

          {/* Contact form commented out for now per user request */}
          {/*
          <div>
            <div 
              className="bento-card"
              style={{
                padding: '2.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Send a Message
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                Discuss a role opportunity, project collaboration, or technical exchange.
              </p>

              {isSubmitted ? (
                <div 
                  style={{
                    padding: '2.5rem 1.5rem',
                    textAlign: 'center',
                    background: 'var(--bg-input)',
                    borderRadius: '1rem',
                    border: '1px solid var(--google-green)'
                  }}
                >
                  <div 
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--google-green-soft)',
                      color: 'var(--google-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem'
                    }}
                  >
                    <Check size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    Message Dispatched!
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Thank you, {formState.name}. Bhavesh will receive your note and get back to you promptly.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn-secondary"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Miller"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.65rem',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      Your Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. alex@techcompany.com"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.65rem',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      Subject / Role Discussion
                    </label>
                    <input 
                      type="text" 
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Senior AI Engineer Role"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.65rem',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      Message *
                    </label>
                    <textarea 
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Bhavesh, I'd like to connect regarding an AI Engineer opportunity..."
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.65rem',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>
          */}

        </div>

      </div>
    </section>
  );
};
