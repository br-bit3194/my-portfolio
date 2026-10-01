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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', maxWidth: '1000px', margin: '0 auto' }} className="contact-grid">
          
          {/* Left Column: Direct Channels (Email + LinkedIn Only) */}
          <div>
            <div 
              className="bento-card" 
              style={{ 
                padding: '2.5rem', 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Direct Professional Inquiries
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  I respond to technical recruiters, engineering leaders, and collaborators directly via email and LinkedIn.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                  
                  {/* Email */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '0.75rem',
                      padding: '1.1rem 1.25rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--google-red-soft)', color: 'var(--google-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Mail size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email Address</div>
                        <a href={`mailto:${personal.email}`} style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                          {personal.email}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy('email', personal.email)}
                      title="Copy Email"
                      style={{ padding: '0.4rem', color: 'var(--text-muted)', cursor: 'pointer' }}
                    >
                      {copiedField === 'email' ? <Check size={18} color="var(--google-green)" /> : <Copy size={18} />}
                    </button>
                  </div>

                  {/* LinkedIn */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '0.75rem',
                      padding: '1.1rem 1.25rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(10, 102, 194, 0.1)', color: '#0A66C2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LinkedinIcon size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>LinkedIn Network</div>
                        <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: 'var(--google-blue)', fontSize: '0.95rem' }}>
                          in/bhaveshkumar-rathod
                        </a>
                      </div>
                    </div>

                    <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ padding: '0.4rem', color: 'var(--text-muted)' }}>
                      <ArrowRight size={18} />
                    </a>
                  </div>

                  {/* Location */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '0.75rem',
                      padding: '1.1rem 1.25rem'
                    }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--google-green-soft)', color: 'var(--google-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</div>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                        {personal.location}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Resume Download CTA */}
              <a 
                href={personal.resumeUrl}
                download="Bhavesh_Rathod_GenAI_Engineer_Resume.pdf"
                className="btn-primary"
                style={{ width: '100%' }}
              >
                <Download size={18} />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Minimal Contact Form */}
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

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
};
