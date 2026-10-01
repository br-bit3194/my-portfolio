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
  ChevronRight, 
  Download, 
  Mail 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

// System prompt for live Gemini model (when API key is provided)
const buildSystemContext = () => {
  const expYears = portfolioData.personal.experienceYears || '5.8+ Years';
  return `You are the official AI Assistant for Bhaveshkumar (Bhavesh) Rathod's personal engineering portfolio website.
Answer all questions about Bhavesh Rathod professionally, accurately, and enthusiastically using ONLY his verified background below.

CORE IDENTITY & PROFILE:
- Name: Bhaveshkumar Rathod (Bhavesh)
- Title: AI Engineer & Senior Software Engineer (${expYears} industry experience)
- Headline: AI Engineer | Agentic AI • Multi-Agent Systems • RAG • LLM Applications | Senior Software Engineer | Python | AWS & GCP
- Location: Ahmedabad, Gujarat, India (100% Open to Remote Opportunities in India & Worldwide)
- Email: bhavesh3194@gmail.com
- LinkedIn: https://www.linkedin.com/in/bhaveshkumar-rathod/ (5K+ LinkedIn Family)
- GitHub: https://github.com/br-bit3194
- Top Cert: Google Cloud Certified Generative AI Leader

KEY 2-SECOND METRICS:
1. ${expYears} Industry Experience: Production GenAI, Agentic AI & distributed Python systems.
2. 94% API Latency Cut: Optimized Django API from 1,200 records/minute to 4 seconds.
3. 67% Multi-Agent Speedup: Reduced response time from 3 minutes to 1 minute using OpenTelemetry and Langfuse trace observability.
4. 14+ Indian Banks Scaled: High-throughput banking customer deduplication with partitioned Oracle clusters & RSA encryption.
5. 90,000+ Athletes Scaled: Integrated Razorpay payments for Game Management System (GMS) across 7 national championships.
6. 70% Manual Effort Reduction: GenAI ad spot recommendation engine using Google Vertex AI, Gemini, and Google ADK with AI Guardrails.

FEATURED PROJECTS:
1. MAESTRO: Autonomous Multi-Agent IT Operations Platform built with Amazon Bedrock, FastAPI, and Python. Won 'Special Jury Mention Award' at SuperHacks 2025 powered by AWS.
2. GenAI Makegood Recommendation Engine: Vertex AI, Google Gemini 1.5, Google ADK, GCP Pub/Sub, BigQuery, GCS, AI Guardrails.
3. Production Multi-Agent AI Platform: Agent-to-Agent (A2A) protocol, Model Context Protocol (MCP) for tool calling, FastAPI, Langfuse, RAG.
4. Game Management System (GMS): Scaled to 90k+ athletes, Razorpay integration, AWS Lambda & CloudWatch automated monitoring (awarded 'PAT on the Back').
5. Banking Deduplication Engine: 14+ Indian Banks, partitioned Oracle DB, Python ELT pipelines (saving 2 hrs daily), RSA asymmetric cryptography.

EXPERIENCE TIMELINE (${expYears.toUpperCase()}):
- April 2026 - Present: Senior Software Engineer at Talentica Software (Multi-Agent A2A/MCP, Amazon Bedrock, FastAPI)
- January 2024 - March 2026: Software Engineer II at Talentica Software (Vertex AI, Gemini, Langfuse, Django 94% optimization)
- July 2022 - December 2023: Python Developer at Online PSB Loans (14+ Banks, Oracle partitioning, ELT pipelines)
- September 2021 - July 2022: Junior Software Engineer at Klearcom (IVR Intent 99% extraction, 15+ server Bash automation)
- June 2021 - September 2021: Data Scientist at FlyingSpark Infotech (Anime recommendation engine, unstructured log automation)

EDUCATION & CREDENTIALS:
- Bachelor of Engineering (B.E.) in Information Technology from Vishwakarma Government Engineering College (VGEC), 2017-2021.
- Google Cloud Certified Generative AI Leader
- Top 5% Global in Python Skill Assessment (LinkedIn)
- Databricks Certified Generative AI Engineer Associate
- AWS Machine Learning Foundations

Always be helpful, precise, friendly, and structure answers with clean formatting and bullet points where helpful.`;
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
        text: `🏆 **MAESTRO: Autonomous Multi-Agent IT Operations Platform**\n\n• **Achievement**: Won the **'Special Jury Mention Award'** at **SuperHacks 2025 powered by AWS**.\n• **Architecture**: Powered by Amazon Bedrock foundation models, autonomous agent orchestration, and event-driven FastAPI microservices.\n• **Capabilities**: Real-time log ingestion, root cause correlation, proactive issue resolution, and autonomous task remediation.\n• **Tech Stack**: Amazon Bedrock, FastAPI, Multi-Agent Orchestration, RAG, Python.`,
        actions: [
          { label: "▶ Watch MAESTRO Demo", link: "https://youtu.be/eP-s9D_WXeY?si=5PPzf2HBK4fnKeXf", external: true },
          { label: "Explore Projects Section", targetId: "projects" }
        ]
      };
    }

    // 2. Multi-Agent Systems, A2A & MCP
    if (q.includes('multi-agent') || q.includes('multi agent') || q.includes('a2a') || q.includes('mcp') || q.includes('agentic') || q.includes('langfuse') || q.includes('opentelemetry')) {
      return {
        text: `🤖 **Production Multi-Agent Platform (A2A & MCP)**\n\nAt **Talentica Software**, Bhavesh architected a production-grade Multi-Agent AI system:\n• **Agent-to-Agent (A2A) Protocol**: Enables autonomous collaboration and task handoffs between specialized agents.\n• **Model Context Protocol (MCP)**: Implements dynamic tool discovery and secure tool invocation for LLMs.\n• **67% Latency Reduction**: Instrumented OpenTelemetry and Langfuse trace observability, slashing agent response bottlenecks from 3 minutes to 1 minute.\n• **Tech**: Multi-Agent A2A, MCP, FastAPI, RAG, OpenTelemetry, Langfuse, Python.`,
        actions: [
          { label: "View Architecture", targetId: "projects" }
        ]
      };
    }

    // 3. 94% Latency Cut & Backend Optimization
    if (q.includes('94%') || q.includes('latency') || q.includes('optimize') || q.includes('optimization') || q.includes('speed') || q.includes('performance') || q.includes('bottleneck')) {
      return {
        text: `⚡ **Key Engineering & Latency Optimizations**:\n\n1. **94% Django API Cut**: Optimized API throughput from 1,200 records/minute down to 4 seconds using advanced data-handling techniques.\n2. **67% Agent Speedup**: Cut Multi-Agent AI response time from 3 minutes to 1 minute via OpenTelemetry and Langfuse trace bottleneck analysis.\n3. **GMS Sports Platform**: Reduced critical batch execution times from 30-40 minutes to milliseconds.\n4. **FinTech Multi-Threading**: Boosted API response speed by 25% for 14+ Indian commercial banks.`,
        actions: [
          { label: "View 5+ Yrs Experience", targetId: "experience" }
        ]
      };
    }

    // 4. Vertex AI & Makegood Recommendation Engine
    if (q.includes('makegood') || q.includes('vertex') || q.includes('gemini') || q.includes('adk') || q.includes('guardrail') || q.includes('gcp')) {
      return {
        text: `✨ **GenAI Makegood Recommendation Engine (Google Cloud)**\n\n• **Impact**: Reduced manual recommendation effort by **70%**.\n• **Tech Stack**: Google Vertex AI, Google Gemini 1.5, Google ADK (Agent Development Kit), GCP Pub/Sub, BigQuery, GCS.\n• **AI Safety**: Enforced Responsible AI with custom AI Guardrails and schema validation for production stability.`,
        actions: [
          { label: "View Projects", targetId: "projects" }
        ]
      };
    }

    // 5. Contact, Hiring, Availability, Remote Work & Resume
    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('reach') || q.includes('remote') || q.includes('resume') || q.includes('linkedin') || q.includes('available') || q.includes('job') || q.includes('relocate')) {
      return {
        text: `📬 **Let's Connect with Bhavesh**\n\n• **Status**: Actively open to **Remote Opportunities (India & Worldwide)** as an **AI Engineer, Senior Backend Architect, or GenAI Lead**.\n• **Email**: [bhavesh3194@gmail.com](mailto:bhavesh3194@gmail.com)\n• **LinkedIn**: [linkedin.com/in/bhaveshkumar-rathod](https://www.linkedin.com/in/bhaveshkumar-rathod/) (5K+ Network)\n• **Location**: Ahmedabad, Gujarat, India (100% Remote Available)\n• **Experience**: 5+ Years Industry Exp.`,
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
        text: `🏅 **Key Verified Certifications & Badges**:\n\n• **Google Cloud Certified Generative AI Leader** (Featured)\n• **Google AI Essentials Certificate** (GenAI & Prompt Engineering)\n• **Databricks Certified Generative AI Engineer Associate**\n• **Develop GenAI Apps with Gemini and Streamlit** (DeepLearning.AI / Google Cloud)\n• **AWS Machine Learning Foundations**\n• **Top 5% Global in Python Skill Assessment** (LinkedIn - 1.5M+ candidates)\n• **'PAT on the Back' Corporate Award** (Talentica Software)`,
        actions: [
          { label: "View Certifications & Awards", targetId: "certifications" }
        ]
      };
    }

    // 7. Full Experience / Career History
    if (q.includes('experience') || q.includes('company') || q.includes('work') || q.includes('history') || q.includes('career') || q.includes('online psb') || q.includes('klearcom') || q.includes('flyingspark')) {
      return {
        text: `💼 **Bhavesh's 5+ Years Career Progression**:\n\n1. **Talentica Software (Apr 2026 - Present)**: Senior Software Engineer — Multi-Agent AI (A2A & MCP), Amazon Bedrock, FastAPI, RAG.\n2. **Talentica Software (Jan 2024 - Mar 2026)**: Software Engineer II — Vertex AI Makegood Engine (70% manual cut), 94% Django API latency cut, Langfuse/OpenTelemetry (67% speedup), GMS Razorpay scale (90k+ athletes).\n3. **Online PSB Loans (Jul 2022 - Dec 2023)**: Python Developer — 14+ Indian Commercial Banks duplicate detection API, Partitioned Oracle DB, Python ELT pipelines.\n4. **Klearcom (Sep 2021 - Jul 2022)**: Junior Software Engineer — IVR Intent extraction (~99% accuracy), 15+ Linux server Bash automation.\n5. **FlyingSpark Infotech (Jun 2021 - Sep 2021)**: Data Scientist — Anime recommendation engine, unstructured log pipelines.`,
        actions: [
          { label: "Explore Interactive Questline", targetId: "experience" }
        ]
      };
    }

    // 8. Tech Stack & Skills
    if (q.includes('skill') || q.includes('stack') || q.includes('python') || q.includes('django') || q.includes('fastapi') || q.includes('database') || q.includes('cloud') || q.includes('technolog')) {
      return {
        text: `🛠️ **Core Technical Skills & Stack**:\n\n• **AI & GenAI**: Multi-Agent Systems (A2A, MCP), RAG, Google Vertex AI, Google Gemini, Amazon Bedrock, Google ADK, AI Guardrails, Langfuse, Streamlit.\n• **Backend Engineering**: Python (Top 5% Global), FastAPI, Django & DRF, Microservices, Multithreading, Asymmetric Cryptography (RSA).\n• **Cloud & Telemetry**: Google Cloud Platform (Pub/Sub, BigQuery, GCS), AWS (Lambda, Bedrock, S3, CloudWatch), OpenTelemetry, Docker, Linux/Bash.\n• **Databases**: BigQuery, Oracle (Partitioning & Indexing), PostgreSQL, MySQL, Python ELT Pipelines, Pandas.`,
        actions: [
          { label: "View Skills Breakdown", targetId: "skills" }
        ]
      };
    }

    // 9. Education
    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('university') || q.includes('vgec') || q.includes('bachelor')) {
      return {
        text: `🎓 **Education**:\n\n• **Degree**: Bachelor of Engineering (B.E.) in Information Technology\n• **Institution**: Vishwakarma Government Engineering College (VGEC), Chandkheda, Gandhinagar, Gujarat, India\n• **Graduation**: 2017 - 2021`,
        actions: [
          { label: "View Education", targetId: "certifications" }
        ]
      };
    }

    // Default Comprehensive Introduction
    return {
      text: `👋 **Bhaveshkumar Rathod** is an **AI Engineer & Senior Software Engineer** with **5+ years of experience** building production Multi-Agent AI systems (A2A, MCP, RAG) and scalable Python backends across **Google Cloud & AWS**.\n\n• **Current Role**: Senior Software Engineer at Talentica Software\n• **Award Winner**: Won Special Jury Mention Award at SuperHacks 2025 powered by AWS for **MAESTRO**\n• **Certified**: Google Cloud Certified Generative AI Leader\n• **Top Metric**: 94% Django API latency reduction & 67% multi-agent response speedup.\n\nFeel free to ask about his specific projects, architecture decisions, or download his resume!`,
      actions: [
        { label: "▶ MAESTRO Hackathon Project", link: "https://youtu.be/eP-s9D_WXeY?si=5PPzf2HBK4fnKeXf", external: true },
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
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div 
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

      </div>
    </div>
  );
};
