import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronRight, 
  Download, 
  Mail 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

// System prompt for live Gemini model (when API key is provided)
const buildSystemContext = () => {
  const expYears = portfolioData.personal.experienceYears || '5.8+ Years';
  return `You are Bhaveshkumar (Bhavesh) Rathod's personal engineering AI Assistant.
Always give concise, precise, grounded, and technically accurate answers. Do NOT generate generic AI fluff or buzzword soup. Always cite verified details, real companies, and real metrics below.

CORE PROFILE:
- Name: Bhaveshkumar Rathod (Bhavesh)
- Role: AI Engineer & Senior Software Engineer (${expYears} industry experience)
- Company: Talentica Software (Senior Software Engineer)
- Location: Ahmedabad, Gujarat, India (Open to 100% Remote worldwide)
- Email: bhavesh3194@gmail.com
- LinkedIn: https://www.linkedin.com/in/bhaveshkumar-rathod/ (5K+ Network)
- GitHub: https://github.com/br-bit3194
- Top Cert: Google Cloud Certified Generative AI Leader

VERIFIED ACCOMPLISHMENTS & METRICS:
1. AWS SuperHacks 2025 Winner: Built MAESTRO (Autonomous Multi-Agent IT Ops platform with Amazon Bedrock & FastAPI), winning Special Jury Mention Award. Video: https://youtu.be/eP-s9D_WXeY?si=5PPzf2HBK4fnKeXf
2. 94% API Latency Reduction: Scaled Django processing from 1,200 records/minute down to 4 seconds using advanced Python data-handling techniques.
3. 67% Multi-Agent Latency Reduction: Reduced agent task execution time from 3 minutes to 1 minute using OpenTelemetry & Langfuse trace observability at Talentica Software.
4. 70% Manual Effort Cut: Built GenAI Makegood Recommendation Engine using Google Vertex AI, Gemini, Google ADK, BigQuery, Pub/Sub, and AI Guardrails.
5. 90,000+ Athletes & Razorpay: Scaled Game Management System (GMS) backend across 7 national championships with AWS Lambda & S3.
6. 14+ Commercial Banks: Engineered customer deduplication API using Django, partitioned Oracle database clusters, and RSA cryptography.

Keep answers structured, punchy, under 150 words where possible, and provide direct GitHub or YouTube citations.`;
};

export const AiAssistantModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "👋 Hi! I'm Bhavesh's AI Portfolio Assistant. Ask me anything about his Multi-Agent AI systems (A2A & MCP), AWS SuperHacks 2025 award (MAESTRO), 94% backend optimizations, or technical stack!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);

  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

  const suggestedQuestions = [
    "Tell me about Bhavesh's Multi-Agent system (A2A & MCP)",
    "What is MAESTRO (SuperHacks 2025 AWS winner)?",
    "How did he achieve the 94% API latency cut?",
    "What is his full experience & tech stack?",
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

  // Local RAG matcher for instant verified responses
  const getLocalAnswer = (query) => {
    const q = query.toLowerCase().trim();

    // 1. MAESTRO & Hackathon
    if (q.includes('maestro') || q.includes('superhack') || q.includes('hackathon') || q.includes('aws award') || q.includes('special jury')) {
      return {
        text: `🏆 **MAESTRO: Autonomous Multi-Agent IT Operations Platform**\n\n• **Award**: **'Special Jury Mention Award'** at **AWS SuperHacks 2025**.\n• **Architecture**: Amazon Bedrock foundation models + Multi-Agent orchestration + event-driven FastAPI microservices.\n• **Core Capabilities**: Real-time log ingestion, root cause correlation, and autonomous issue remediation.\n• **Code & Proof**: Live video demo and GitHub repository available below.`,
        actions: [
          { label: "▶ Watch Demo Video", link: "https://youtu.be/eP-s9D_WXeY?si=5PPzf2HBK4fnKeXf", external: true },
          { label: "💻 GitHub Profile", link: "https://github.com/br-bit3194", external: true },
          { label: "Explore Projects Section", targetId: "projects" }
        ]
      };
    }

    // 2. Multi-Agent Systems, A2A & MCP
    if (q.includes('multi-agent') || q.includes('multi agent') || q.includes('a2a') || q.includes('mcp') || q.includes('agentic') || q.includes('langfuse') || q.includes('opentelemetry')) {
      return {
        text: `🤖 **Production Multi-Agent Platform (A2A & MCP)**\n\nAt **Talentica Software**, Bhavesh engineered an enterprise multi-agent stack:\n• **Agent-to-Agent (A2A)**: Protocol for autonomous peer collaboration and dynamic routing.\n• **Model Context Protocol (MCP)**: Standardized dynamic tool discovery & execution.\n• **67% Latency Cut**: OpenTelemetry & Langfuse telemetry cut agent execution from 3m → 1m.\n• **Stack**: Python, FastAPI, Amazon Bedrock, Vertex AI, RAG, Langfuse.`,
        actions: [
          { label: "View Architecture", targetId: "architecture" },
          { label: "💻 GitHub Profile", link: "https://github.com/br-bit3194", external: true }
        ]
      };
    }

    // 3. 94% Latency Cut & Backend Optimization
    if (q.includes('94%') || q.includes('latency') || q.includes('optimize') || q.includes('optimization') || q.includes('speed') || q.includes('performance') || q.includes('bottleneck')) {
      return {
        text: `⚡ **Verified Production Performance Benchmarks**:\n\n1. **94% Django API Cut**: Scaled processing from **1,200 records/min to 4 seconds** with batch data pipeline optimizations.\n2. **67% Agent Speedup**: Reduced Multi-Agent response from **3m to 1m** via Langfuse trace analysis.\n3. **GMS Batch Optimization**: Reduced critical execution times from **30-40 minutes to milliseconds**.\n4. **FinTech Multi-Threading**: Achieved **25% faster lookups** across 14+ Indian commercial banks.`,
        actions: [
          { label: "View Experience", targetId: "experience" },
          { label: "💻 GitHub Profile", link: "https://github.com/br-bit3194", external: true }
        ]
      };
    }

    // 4. Vertex AI & Makegood Recommendation Engine
    if (q.includes('makegood') || q.includes('vertex') || q.includes('gemini') || q.includes('adk') || q.includes('guardrail') || q.includes('gcp')) {
      return {
        text: `✨ **GenAI Makegood Recommendation Engine (Google Cloud)**\n\n• **Enterprise Impact**: Automated ad spot recommendations, slashing manual effort by **70%**.\n• **GCP Stack**: Google Vertex AI, Google Gemini, Google ADK, Pub/Sub, BigQuery, GCS.\n• **Responsible AI**: Implemented strict AI Guardrails, schema validation, and fallback handling for production reliability.`,
        actions: [
          { label: "View Project Details", targetId: "projects" },
          { label: "💻 GitHub Profile", link: "https://github.com/br-bit3194", external: true }
        ]
      };
    }

    // 5. Contact, Hiring, Availability, Remote Work & Resume
    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('reach') || q.includes('remote') || q.includes('resume') || q.includes('linkedin') || q.includes('available') || q.includes('job') || q.includes('relocate')) {
      return {
        text: `📬 **Direct Contact & Collaboration**\n\n• **Status**: Actively available for **Remote Roles (India & Worldwide)** as an **AI Engineer, Senior Backend Architect, or GenAI Lead**.\n• **Email**: [bhavesh3194@gmail.com](mailto:bhavesh3194@gmail.com)\n• **LinkedIn**: [linkedin.com/in/bhaveshkumar-rathod](https://www.linkedin.com/in/bhaveshkumar-rathod/) (5K+ Network)\n• **GitHub**: [github.com/br-bit3194](https://github.com/br-bit3194)\n• **Location**: Ahmedabad, Gujarat, India (100% Remote Ready)`,
        actions: [
          { label: "✉️ Email Bhavesh", link: "mailto:bhavesh3194@gmail.com", external: true },
          { label: "📄 Download Resume", link: "/Bhavesh_Rathod_GenAI_Engineer_Resume.pdf", external: true },
          { label: "🔗 LinkedIn Profile", link: "https://www.linkedin.com/in/bhaveshkumar-rathod/", external: true }
        ]
      };
    }

    // 6. Certifications & Badges
    if (q.includes('certif') || q.includes('badge') || q.includes('credential') || q.includes('google cloud certified') || q.includes('databricks') || q.includes('aws ml')) {
      return {
        text: `🏅 **Verified Professional Credentials**:\n\n• **Google Cloud Certified Generative AI Leader** (Executive Credential)\n• **Google AI Essentials Certificate** (GenAI & Prompt Engineering)\n• **Databricks Certified Generative AI Engineer Associate**\n• **Develop GenAI Apps with Gemini and Streamlit** (Google Cloud / DeepLearning.AI)\n• **AWS Machine Learning Foundations**\n• **Top 5% Global in Python Assessment** (LinkedIn - 1.5M+ engineers)\n• **'PAT on the Back' Corporate Award** (Talentica Software)`,
        actions: [
          { label: "View Certifications", targetId: "certifications" }
        ]
      };
    }

    // 7. Full Experience / Career History
    if (q.includes('experience') || q.includes('company') || q.includes('work') || q.includes('history') || q.includes('career') || q.includes('online psb') || q.includes('klearcom') || q.includes('flyingspark')) {
      return {
        text: `💼 **Career Milestones (${portfolioData.personal.experienceYears})**:\n\n1. **Talentica Software (Senior Software Engineer)**: Multi-Agent Systems (A2A & MCP), Amazon Bedrock, FastAPI, RAG.\n2. **Talentica Software (Software Engineer II)**: Vertex AI Makegood Engine (70% cut), 94% Django API cut, Langfuse (67% speedup), GMS Razorpay (90k+ athletes).\n3. **Online PSB Loans (Python Developer)**: 14+ Indian Banks customer deduplication, Partitioned Oracle DB, ELT automation.\n4. **Klearcom (Junior Software Engineer)**: IVR Intent extraction (99% accuracy), Bash automation.\n5. **FlyingSpark Infotech (Data Scientist)**: Anime recommendation engine & log pipelines.`,
        actions: [
          { label: "Explore Interactive Journey", targetId: "experience" }
        ]
      };
    }

    // 8. Tech Stack & Skills
    if (q.includes('skill') || q.includes('stack') || q.includes('python') || q.includes('django') || q.includes('fastapi') || q.includes('database') || q.includes('cloud') || q.includes('technolog')) {
      return {
        text: `🛠️ **Verified Technical Stack**:\n\n• **AI & GenAI**: Multi-Agent Systems (A2A, MCP), RAG, Google Vertex AI, Gemini, Amazon Bedrock, Google ADK, AI Guardrails, Langfuse, Streamlit.\n• **Backend Engineering**: Python (Top 5% Global), FastAPI, Django REST Framework, Async microservices, RSA cryptography.\n• **Cloud & Observability**: GCP (Pub/Sub, BigQuery, GCS), AWS (Lambda, Bedrock, S3, CloudWatch), OpenTelemetry, Docker.\n• **Databases**: BigQuery, Oracle (Partitioning & Indexing), PostgreSQL, MySQL, Python ELT pipelines.`,
        actions: [
          { label: "View Skills Matrix", targetId: "skills" }
        ]
      };
    }

    // Default Introduction
    return {
      text: `👋 **Bhaveshkumar Rathod** is an **AI Engineer & Senior Software Engineer** with **${portfolioData.personal.experienceYears} of experience** building production Multi-Agent AI systems (A2A, MCP, RAG) and high-throughput Python backends across **Google Cloud & AWS**.\n\n• **Key Win**: Special Jury Mention Award at AWS SuperHacks 2025 for **MAESTRO**\n• **Certified**: Google Cloud Certified Generative AI Leader\n• **Production Impact**: 94% API latency cut & 67% multi-agent latency cut.\n\nAsk me about his projects, architecture designs, or view his verified repositories!`,
      actions: [
        { label: "▶ Watch MAESTRO Demo", link: "https://youtu.be/eP-s9D_WXeY?si=5PPzf2HBK4fnKeXf", external: true },
        { label: "💻 GitHub Profile", link: "https://github.com/br-bit3194", external: true },
        { label: "📄 Download Resume", link: "/Bhavesh_Rathod_GenAI_Engineer_Resume.pdf", external: true },
        { label: "✉️ Email Bhavesh", link: "mailto:bhavesh3194@gmail.com", external: true }
      ]
    };
  };

  const handleSend = async (textToSend) => {
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

    // Check if live Gemini API key is available
    if (geminiApiKey) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [
                  { text: `${buildSystemContext()}\n\nUser Question: ${query}` }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 600
            }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (generatedText) {
            setMessages(prev => [
              ...prev,
              {
                id: (Date.now() + 1).toString(),
                sender: 'assistant',
                text: generatedText,
                isLiveGemini: true,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }
            ]);
            setIsTyping(false);
            return;
          }
        }
      } catch (err) {
        // Fallback to local RAG below
      }
    }

    // High-performance Local RAG Fallback
    setTimeout(() => {
      const result = getLocalAnswer(query);
      const botMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: result.text,
        actions: result.actions || [],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleActionClick = (action) => {
    if (action.link) {
      window.open(action.link, action.external ? '_blank' : '_self');
    } else if (action.targetId) {
      onClose();
      const el = document.getElementById(action.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
          onClick={onClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '720px',
              height: '85vh',
              maxHeight: '740px',
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--bg-card-solid)',
              border: '1px solid var(--border-color)',
              borderRadius: '1.25rem',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
        {/* Header */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.15rem 1.5rem',
            borderBottom: '1px solid var(--border-color)',
            background: 'var(--bg-card)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div 
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(66, 133, 244, 0.3)'
              }}
            >
              <Bot size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Ask Bhavesh's AI Assistant
                </h3>
                <span 
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '9999px',
                    background: 'var(--google-green-soft)',
                    color: 'var(--google-green)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--google-green)' }} />
                  {geminiApiKey ? 'Live Gemini Engine' : 'Personal Knowledge Graph'}
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Grounded in 5+ years verified engineering experience & AWS/GCP architectures
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '0.5rem',
              borderRadius: '8px',
              background: 'var(--bg-input)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Message Thread */}
        <div 
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            background: 'var(--bg-secondary)'
          }}
        >
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignSelf: isUser ? 'flex-end' : 'flex-start',
                  maxWidth: '88%'
                }}
              >
                {!isUser && (
                  <div 
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'var(--google-blue)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <Sparkles size={16} />
                  </div>
                )}

                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isUser ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div 
                    style={{
                      padding: '0.9rem 1.15rem',
                      borderRadius: isUser ? '1.1rem 1.1rem 0.25rem 1.1rem' : '1.1rem 1.1rem 1.1rem 0.25rem',
                      background: isUser ? 'var(--google-blue)' : 'var(--bg-card)',
                      color: isUser ? '#ffffff' : 'var(--text-primary)',
                      border: isUser ? 'none' : '1px solid var(--border-color)',
                      boxShadow: 'var(--shadow-sm)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-wrap',
                      position: 'relative',
                      wordBreak: 'break-word'
                    }}
                  >
                    {msg.text}

                    {/* Action buttons embedded in response */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.85rem', paddingTop: '0.65rem', borderTop: '1px solid var(--border-subtle)' }}>
                        {msg.actions.map((act, aIdx) => (
                          <button
                            key={aIdx}
                            onClick={() => handleActionClick(act)}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              padding: '0.35rem 0.75rem',
                              borderRadius: '9999px',
                              background: 'var(--bg-input)',
                              border: '1px solid var(--google-blue)',
                              color: 'var(--google-blue)',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <span>{act.label}</span>
                            <ExternalLink size={12} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Message footer with timestamp and copy button */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.3rem', padding: '0 0.25rem' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      {msg.timestamp}
                    </span>
                    {!isUser && (
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        title="Copy text"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-muted)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.2rem',
                          fontSize: '0.7rem'
                        }}
                      >
                        {copiedId === msg.id ? <Check size={12} color="var(--google-green)" /> : <Copy size={12} />}
                        <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div style={{ display: 'flex', gap: '0.75rem', alignSelf: 'flex-start' }}>
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--google-blue)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Sparkles size={16} />
              </div>
              <div 
                style={{
                  padding: '0.85rem 1.15rem',
                  borderRadius: '1.1rem 1.1rem 1.1rem 0.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--google-blue)', animation: 'pulse 1s infinite alternate' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--google-green)', animation: 'pulse 1s infinite alternate 0.2s' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--google-yellow)', animation: 'pulse 1s infinite alternate 0.4s' }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompt Chips */}
        <div 
          style={{
            padding: '0.75rem 1.25rem',
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }}
        >
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', flexShrink: 0 }}>
            Suggestions:
          </span>
          {suggestedQuestions.map((q, qIdx) => (
            <button
              key={qIdx}
              onClick={() => handleSend(q)}
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                background: 'var(--bg-input)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--google-blue)';
                e.currentTarget.style.color = 'var(--google-blue)';
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

        {/* Input Form */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          style={{
            padding: '1rem 1.25rem',
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          <input 
            type="text"
            placeholder="Ask about Bhavesh's Multi-Agent AI, projects, metrics, or background..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              borderRadius: '9999px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-input)',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />

          <button
            type="submit"
            disabled={!inputQuery.trim() || isTyping}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: inputQuery.trim() ? 'var(--google-blue)' : 'var(--bg-input)',
              color: inputQuery.trim() ? '#ffffff' : 'var(--text-muted)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: inputQuery.trim() ? 'pointer' : 'default',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
          >
            <Send size={18} />
          </button>
        </form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
