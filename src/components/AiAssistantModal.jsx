import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Check, 
  Copy, 
  ExternalLink, 
  RefreshCw,
  MessageSquare,
  Award,
  Zap,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AiAssistantModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "👋 Hi! I'm Bhavesh's AI Portfolio Assistant. Ask me anything about his Multi-Agent systems, AWS SuperHacks award (MAESTRO), 94% backend optimizations, or technical stack!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "Tell me about Bhavesh's Multi-Agent system at Talentica",
    "What is MAESTRO (SuperHacks 2025 AWS winner)?",
    "How did he achieve 94% API latency reduction?",
    "What are his certifications and core tech stack?",
    "How can I contact or hire Bhavesh?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputQuery.trim();
    if (!query) return;

    const userMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputQuery('');
    setIsTyping(true);

    // AI Knowledge matching logic
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let matchedAnswer = null;

      for (const item of portfolioData.aiAssistantKnowledge) {
        if (item.keywords.some(k => lowerQuery.includes(k))) {
          matchedAnswer = item.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('company')) {
          matchedAnswer = "Bhavesh has 5+ years of engineering experience. He is currently at Talentica Software as a Senior Software Engineer (working on production Multi-Agent A2A/MCP platforms, Vertex AI Gemini systems, and OpenTelemetry/Langfuse observability). Previously, he was a Python Developer at Online PSB Loans (14+ Indian Banks) and Klearcom (Telecom AI & IVR).";
        } else if (lowerQuery.includes('education') || lowerQuery.includes('college') || lowerQuery.includes('degree')) {
          matchedAnswer = "Bhavesh holds a Bachelor of Engineering (B.E.) in Information Technology from Vishwakarma Government Engineering College (VGEC), Chandkheda, Gandhinagar (2017 - 2021).";
        } else {
          matchedAnswer = `Bhaveshkumar Rathod is an AI Engineer specializing in production Multi-Agent AI systems (A2A, MCP), LLM orchestration (Google Vertex AI, Google Gemini, Amazon Bedrock), high-performance Python (FastAPI, Django), and multi-cloud infrastructure (GCP & AWS).\n\nFeel free to explore his featured project MAESTRO (AWS SuperHacks 2025 winner) or download his resume!`;
        }
      }

      const botMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: matchedAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div 
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '680px',
          height: '85vh',
          maxHeight: '720px',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--bg-card-solid)',
          border: '1px solid var(--border-color)',
          borderRadius: '1.25rem',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--border-color)',
            background: 'var(--bg-card)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div 
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'var(--ai-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <Bot size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Ask Bhavesh's AI Assistant
                <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>Active</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Powered by Bhavesh's Career & System Knowledge Base
              </div>
            </div>
          </div>

          <button 
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-input)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Suggested Quick Question Chips */}
        <div 
          style={{
            padding: '0.75rem 1.25rem',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--bg-input)',
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none'
          }}
        >
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              style={{
                padding: '0.35rem 0.75rem',
                fontSize: '0.78rem',
                fontWeight: 500,
                borderRadius: '9999px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary-light)';
                e.currentTarget.style.color = 'var(--accent-primary-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Messages Container */}
        <div 
          style={{
            flex: 1,
            padding: '1.25rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {messages.map((msg) => (
            <div 
              key={msg.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '88%',
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start'
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.3rem',
                  paddingLeft: msg.sender === 'user' ? '0' : '0.5rem',
                  paddingRight: msg.sender === 'user' ? '0.5rem' : '0'
                }}
              >
                {msg.sender === 'assistant' ? (
                  <>
                    <Bot size={12} color="var(--accent-primary-light)" />
                    <span>Bhavesh AI</span>
                  </>
                ) : (
                  <span>You</span>
                )}
                <span>• {msg.timestamp}</span>
              </div>

              <div 
                style={{
                  padding: '0.9rem 1.15rem',
                  borderRadius: msg.sender === 'user' ? '1rem 1rem 0.2rem 1rem' : '1rem 1rem 1rem 0.2rem',
                  background: msg.sender === 'user' ? 'var(--accent-gradient)' : 'var(--bg-input)',
                  color: msg.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
                  fontSize: '0.92rem',
                  lineHeight: 1.55,
                  whiteSpace: 'pre-line',
                  position: 'relative'
                }}
              >
                {msg.text}

                {msg.sender === 'assistant' && (
                  <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      title="Copy response"
                      style={{
                        padding: '0.2rem 0.4rem',
                        borderRadius: '4px',
                        background: 'transparent',
                        color: 'var(--text-muted)',
                        fontSize: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        cursor: 'pointer'
                      }}
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check size={12} color="var(--accent-secondary)" />
                          <span style={{ color: 'var(--accent-secondary)' }}>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div 
              style={{
                alignSelf: 'flex-start',
                background: 'var(--bg-input)',
                border: '1px solid var(--border-color)',
                borderRadius: '1rem 1rem 1rem 0.2rem',
                padding: '0.75rem 1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary-light)', animation: 'pulse 1s infinite' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-purple)', animation: 'pulse 1s infinite 0.2s' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-secondary)', animation: 'pulse 1s infinite 0.4s' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>Synthesizing technical response...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div 
          style={{
            padding: '1rem 1.25rem',
            borderTop: '1px solid var(--border-color)',
            background: 'var(--bg-card)',
            display: 'flex',
            gap: '0.75rem'
          }}
        >
          <input 
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a technical or career question about Bhavesh..."
            style={{
              flex: 1,
              background: 'var(--bg-input)',
              border: '1px solid var(--border-color)',
              borderRadius: '0.65rem',
              padding: '0.75rem 1rem',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputQuery.trim() || isTyping}
            className="btn-primary"
            style={{
              padding: '0.75rem 1.25rem',
              opacity: !inputQuery.trim() || isTyping ? 0.6 : 1,
              cursor: !inputQuery.trim() || isTyping ? 'not-allowed' : 'pointer'
            }}
          >
            <Send size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};
