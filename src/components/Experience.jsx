import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2, 
  Building2,
  Sparkles,
  Zap,
  Play,
  Pause,
  Layers,
  Flame,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0); // 0 = Level 5 (Current Present)
  const [viewMode, setViewMode] = useState('rpg'); // 'rpg' or 'classic'
  const [isPlaying, setIsPlaying] = useState(false);

  // Experience levels in decreasing order (Level 5 = 2026+ Present down to Level 1 = 2021)
  const chronologicalLevels = [
    {
      levelNum: 5,
      id: "talentica-sr",
      era: "2026 - Present",
      rank: "Senior AI & Multi-Agent Architect (MAX LEVEL)",
      title: "Senior Software Engineer",
      company: "Talentica Software",
      period: "April 2026 - Present",
      location: "Pune, India",
      badge: "🏆 MAX LEVEL • Multi-Agent Architect",
      color: "#1a73e8",
      statBoost: "Multi-Agent A2A & MCP • AWS Hackathon Winner",
      statDetail: "Architecting enterprise multi-agent collaboration systems and AWS Bedrock autonomous IT platforms",
      powersUnlocked: ["Multi-Agent Collaboration (A2A)", "Model Context Protocol (MCP)", "🏆 SuperHacks 2025 Special Jury Award", "FastAPI Async Architecture", "Enterprise AI Guardrails"],
      missionBrief: [
        "Architected and delivered production-grade Multi-Agent AI platform leveraging Agent-to-Agent (A2A) protocol and Model Context Protocol (MCP) for tool calling.",
        "Engineered autonomous multi-agent task routing, RAG orchestration, and high-performance FastAPI microservices for enterprise automation.",
        "Built MAESTRO IT Operations platform winning 'Special Jury Mention Award' at SuperHacks 2025 powered by AWS."
      ],
      equipment: ["Multi-Agent AI (A2A)", "Model Context Protocol (MCP)", "FastAPI", "Amazon Bedrock", "RAG Orchestration", "Python"]
    },
    {
      levelNum: 4,
      id: "talentica-se2",
      era: "2024 - 2026",
      rank: "Production GenAI & Performance Specialist",
      title: "Software Engineer II",
      company: "Talentica Software",
      period: "January 2024 - March 2026",
      location: "Pune, India",
      badge: "GenAI & 94% Optimization Quest",
      color: "#4285F4",
      statBoost: "94% API Latency Cut • -67% Agent Latency",
      statDetail: "Built GCP Vertex AI recommendation engine and scaled sports platform to 90,000+ athletes",
      powersUnlocked: ["94% API Latency Cut (1,200/min to 4s)", "67% Agent Speedup (OpenTelemetry/Langfuse)", "70% Manual Cut (Vertex AI & Gemini)", "90K+ Athletes GMS Scale", "Talentica 'PAT on the Back' Award"],
      missionBrief: [
        "Led development of GenAI Makegood recommendation system using Vertex AI, Google Gemini, and Google ADK; architected GCP Pub/Sub, GCS, and BigQuery workflows with AI Guardrails (70% manual reduction).",
        "Instrumented OpenTelemetry and Langfuse trace observability, optimizing multi-agent bottlenecks from 3 minutes to 1 minute (67% speedup).",
        "Optimized core Django API from 1,200 records/minute to 4 seconds, achieving 94% performance improvement.",
        "Integrated Razorpay engine for Game Management System (GMS), supporting 7 national championships and 90,000+ athletes.",
        "Automated refund-failure monitoring via AWS CloudWatch and Lambda with real-time Slack alerts; awarded 'PAT on the Back'."
      ],
      equipment: ["Vertex AI", "Google Gemini", "Google ADK", "GCP Pub/Sub", "BigQuery", "OpenTelemetry", "Langfuse", "AWS Lambda", "Razorpay", "Django"]
    },
    {
      levelNum: 3,
      id: "online-psb",
      era: "2022 - 2023",
      rank: "FinTech Scale & Security Architect",
      title: "Python Developer",
      company: "Online PSB Loans",
      period: "July 2022 - December 2023",
      location: "Ahmedabad, Gujarat, India",
      badge: "FinTech Scale Quest",
      color: "#34A853",
      statBoost: "14+ Indian Banks • +25% Speed Boost",
      statDetail: "Engineered banking deduplication with RSA cryptography and partitioned Oracle cluster",
      powersUnlocked: ["14+ Commercial Banks Scaled", "Partitioned Oracle Indexing", "RSA Asymmetric Cryptography", "+25% Multithreading Boost", "Python ELT Automation (-2 hrs daily)"],
      missionBrief: [
        "Developed high-throughput Django API serving 14+ Indian Banks for duplicate customer identification.",
        "Designed partitioned Oracle database architectures with advanced indexing for sub-second query latency.",
        "Built automated financial CAM-pdf scraper with data visualization and charts.",
        "Architected multi-database Python ELT pipelines saving 2 hours of manual analysis daily.",
        "Implemented multithreading to accelerate API response speed by 25%, secured with RSA asymmetric encryption."
      ],
      equipment: ["Python", "Django", "Oracle DB (Partitioning)", "Multithreading", "ELT Pipelines", "RSA Cryptography", "Pandas"]
    },
    {
      levelNum: 2,
      id: "klearcom",
      era: "2021 - 2022",
      rank: "Telecom AI & Systems Engineer",
      title: "Junior Software Engineer",
      company: "Klearcom",
      period: "September 2021 - July 2022",
      location: "Ireland / Remote",
      badge: "NLP & Automation Quest",
      color: "#EA4335",
      statBoost: "99% Intent Accuracy • -75% Downtime",
      statDetail: "Extracted high-precision intent while automating server operations across 15+ machines",
      powersUnlocked: ["~99% IVR Intent Extraction", "75% Queue Downtime Reduction", "15+ Server Bash Automation", "String Matching 98%"],
      missionBrief: [
        "Developed IVR-Intent-extraction algorithm with ~99% accuracy, eliminating manual human intervention.",
        "Built real-time log processor with automated email alerts, reducing critical downtime and queue backlogs by 75%.",
        "Upgraded string matching preprocessing algorithm from 80% to 98% accuracy.",
        "Engineered automated Bash deployment scripts for synchronized Git pulls across 15 production servers."
      ],
      equipment: ["Python", "NLP / Intent Extraction", "IVR Algorithms", "Bash Automation", "Linux / Unix", "Log Processing"]
    },
    {
      levelNum: 1,
      id: "flyingspark",
      era: "2021",
      rank: "Junior Data Scientist",
      title: "Data Scientist",
      company: "FlyingSpark Infotech",
      period: "June 2021 - September 2021",
      location: "Remote / Ahmedabad",
      badge: "Foundational Quest",
      color: "#FBBC05",
      statBoost: "100% Manual Effort Reduction",
      statDetail: "Automated unstructured log conversion into structured intelligence",
      powersUnlocked: ["Collaborative Filtering", "Anime Recommendation Model", "Data Pipeline Automation", "Pandas & NumPy"],
      missionBrief: [
        "Engineered an Anime Recommendation Engine using collaborative filtering algorithms.",
        "Converted unstructured raw log data into informative structured pipelines, eliminating manual effort by 100%."
      ],
      equipment: ["Python", "Recommendation Systems", "Collaborative Filtering", "Pandas", "Data Pipelines"]
    }
  ];

  // Auto-play progression timer (levels up from Level 1 to Level 5)
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentLevelIndex((prev) => {
          // Progress from Level 1 (idx 4) -> Level 2 (idx 3) -> Level 3 (idx 2) -> Level 4 (idx 1) -> Level 5 (idx 0)
          const nextIdx = prev > 0 ? prev - 1 : chronologicalLevels.length - 1;
          if (chronologicalLevels[nextIdx].levelNum === 5) {
            try {
              confetti({
                particleCount: 60,
                spread: 70,
                origin: { y: 0.6 }
              });
            } catch (e) {}
          }
          return nextIdx;
        });
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, chronologicalLevels]);

  const activeQuest = chronologicalLevels[currentLevelIndex];

  const handleLevelSelect = (idx) => {
    setCurrentLevelIndex(idx);
    if (chronologicalLevels[idx].levelNum === 5) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  // Toggle Auto Tour: Starts journey from Level 01 up to Level 05
  const toggleAutoTour = () => {
    if (!isPlaying) {
      const level1Idx = chronologicalLevels.findIndex((l) => l.levelNum === 1);
      setCurrentLevelIndex(level1Idx !== -1 ? level1Idx : chronologicalLevels.length - 1);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  // Step down one level
  const handlePrevLevel = () => {
    const prevIdx = (currentLevelIndex + 1) % chronologicalLevels.length;
    handleLevelSelect(prevIdx);
  };

  // Step up one level
  const handleNextLevel = () => {
    const nextIdx = currentLevelIndex > 0 ? currentLevelIndex - 1 : chronologicalLevels.length - 1;
    handleLevelSelect(nextIdx);
  };

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag" style={{ color: 'var(--google-green)', background: 'var(--google-green-soft)' }}>
            <Briefcase size={14} />
            Interactive Career Progression
          </div>
          <h2 className="section-title">{portfolioData.personal.experienceYears || '5.8+ Years'} Experience: Tech RPG Questline</h2>
          <p className="section-subtitle">
            An interactive level-up journey through {portfolioData.personal.experienceYears || '5.8+ years'} of engineering mastery across autonomous Multi-Agent AI, high-throughput FinTech, and cloud scale.
          </p>
        </div>

        {/* View Mode Switcher (RPG Level Controller vs Full Classic List) */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <div 
            style={{
              display: 'inline-flex',
              padding: '0.3rem',
              borderRadius: '9999px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <button
              onClick={() => setViewMode('rpg')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 700,
                background: viewMode === 'rpg' ? 'var(--google-blue)' : 'transparent',
                color: viewMode === 'rpg' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <Zap size={14} />
              <span>🎮 RPG Level Questline</span>
            </button>

            <button
              onClick={() => setViewMode('classic')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 700,
                background: viewMode === 'classic' ? 'var(--google-blue)' : 'transparent',
                color: viewMode === 'classic' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <Layers size={14} />
              <span>Full Career List</span>
            </button>
          </div>

          {viewMode === 'rpg' && (
            <button
              onClick={toggleAutoTour}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                background: isPlaying ? 'rgba(234, 67, 53, 0.1)' : 'var(--bg-card)',
                border: isPlaying ? '1px solid var(--google-red)' : '1px solid var(--border-color)',
                color: isPlaying ? 'var(--google-red)' : 'var(--text-secondary)',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? 'Pause Auto Tour' : '▶ Auto Tour Career (Lvl 1 → 5)'}</span>
            </button>
          )}
        </div>

        {/* ========================================================================= */}
        {/* MODE 1: GAMIFIED RPG QUESTLINE STAGE */}
        {/* ========================================================================= */}
        {viewMode === 'rpg' ? (
          <div>
            
            {/* Interactive Level Map Bar (Decreasing order: Level 5 down to Level 1) */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '0.75rem',
                marginBottom: '2rem',
                position: 'relative'
              }}
              className="rpg-level-track"
            >
              {chronologicalLevels.map((lvl, idx) => {
                const isActive = currentLevelIndex === idx;
                const isPassed = lvl.levelNum <= activeQuest.levelNum;
                return (
                  <div
                    key={lvl.id}
                    onClick={() => handleLevelSelect(idx)}
                    style={{
                      padding: '1rem 0.85rem',
                      borderRadius: '1rem',
                      background: isActive ? 'var(--bg-card)' : 'var(--bg-input)',
                      border: isActive 
                        ? `2.5px solid ${lvl.color}` 
                        : isPassed 
                        ? '1px solid rgba(26, 115, 232, 0.3)' 
                        : '1px solid var(--border-color)',
                      boxShadow: isActive ? `0 8px 24px ${lvl.color}26` : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'relative',
                      transform: isActive ? 'translateY(-3px)' : 'none'
                    }}
                  >
                    {/* Level Badge Number */}
                    <div 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: isActive ? lvl.color : isPassed ? 'var(--google-blue-soft)' : 'var(--bg-card)',
                        color: isActive ? '#ffffff' : isPassed ? 'var(--google-blue)' : 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '0.82rem',
                        marginBottom: '0.5rem',
                        border: `1.5px solid ${isActive ? '#ffffff' : 'var(--border-subtle)'}`
                      }}
                    >
                      {lvl.levelNum}
                    </div>

                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: isActive ? lvl.color : 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      LVL 0{lvl.levelNum}
                    </div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.15rem' }}>
                      {lvl.era}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.2rem', whiteHeight: 1.2 }} className="hide-mobile">
                      {lvl.company.split(' ')[0]}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main Active Quest Card (The RPG Stage HUD) */}
            <div 
              className="bento-card"
              style={{
                padding: '2.5rem',
                borderTop: `5px solid ${activeQuest.color}`,
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.06)',
                position: 'relative'
              }}
            >
              <div className="google-strip" />

              {/* Top Level Metadata Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                    <span 
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 900,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        background: activeQuest.color,
                        color: '#ffffff',
                        letterSpacing: '0.02em',
                        fontFamily: 'var(--font-mono)',
                        boxShadow: `0 2px 8px ${activeQuest.color}40`
                      }}
                    >
                      LEVEL 0{activeQuest.levelNum} OF 05
                    </span>
                    <span className="badge" style={{ background: 'var(--bg-input)', color: activeQuest.color, fontWeight: 700, border: '1px solid var(--border-color)' }}>
                      {activeQuest.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.25 }}>
                    {activeQuest.title}
                  </h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.05rem', fontWeight: 700, color: 'var(--google-blue)', marginTop: '0.3rem' }}>
                    <Building2 size={18} />
                    <span>{activeQuest.company}</span>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{activeQuest.rank}</span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }} className="quest-time-box">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.88rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    <Calendar size={14} />
                    <span>{activeQuest.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)', justifyContent: 'flex-end', marginTop: '0.25rem' }}>
                    <MapPin size={13} />
                    <span>{activeQuest.location}</span>
                  </div>
                </div>
              </div>

              {/* RPG Power Boost Callout Banner */}
              <div 
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, var(--bg-input) 0%, var(--bg-card) 100%)',
                  border: `1.5px solid ${activeQuest.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginBottom: '2rem',
                  flexWrap: 'wrap'
                }}
              >
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${activeQuest.color}18`,
                    color: activeQuest.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Flame size={26} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: activeQuest.color, textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: 'var(--font-mono)' }}>
                    ⚡ Key Unlocked Power Stat
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--text-primary)', marginTop: '0.15rem' }}>
                    {activeQuest.statBoost}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                    {activeQuest.statDetail}
                  </div>
                </div>
              </div>

              {/* Unlocked Superpowers Grid */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  🛡️ Superpowers Mastered at this Level:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                  {activeQuest.powersUnlocked.map((p, pIdx) => (
                    <div 
                      key={pIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '8px',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)'
                      }}
                    >
                      <Sparkles size={13} color={activeQuest.color} />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission Achievements */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  🎯 Mission Brief & Architecture Highlights:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {activeQuest.missionBrief.map((item, mIdx) => (
                    <div key={mIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={17} color="var(--google-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inventory / Tech Stack */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.45rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Equipment Stack:
                  </span>
                  {activeQuest.equipment.map((eq, eIdx) => (
                    <span
                      key={eIdx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        background: 'var(--bg-input)',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {eq}
                    </span>
                  ))}
                </div>

                {/* Level Navigation Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={handlePrevLevel}
                    className="btn-secondary"
                    style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem', borderRadius: '9999px' }}
                  >
                    <ChevronLeft size={16} />
                    <span>{activeQuest.levelNum > 1 ? `Lvl 0${activeQuest.levelNum - 1}` : 'Level 05'}</span>
                  </button>
                  <button
                    onClick={handleNextLevel}
                    className="btn-primary"
                    style={{ padding: '0.45rem 1.1rem', fontSize: '0.82rem', borderRadius: '9999px', background: activeQuest.color }}
                  >
                    <span>{activeQuest.levelNum < 5 ? `Level Up (Lvl 0${activeQuest.levelNum + 1})` : 'Replay from Lvl 01'}</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* ========================================================================= */
          /* MODE 2: FULL CLASSIC CAREER TIMELINE */
          /* ========================================================================= */
          <div style={{ maxWidth: '920px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {portfolioData.experience.map((exp, index) => (
              <div 
                key={exp.id}
                className="bento-card"
                style={{
                  padding: '2rem',
                  borderLeft: index === 0 
                    ? '4px solid var(--google-blue)' 
                    : index === 1 
                    ? '4px solid var(--google-green)' 
                    : index === 2 
                    ? '4px solid var(--google-yellow)' 
                    : '4px solid var(--google-red)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <span className={index === 0 ? 'badge badge-green' : 'badge badge-blue'}>
                        {exp.badge}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '1rem', fontWeight: 700, color: 'var(--google-blue)' }}>
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-muted)', justifyContent: 'flex-end', marginTop: '0.2rem' }}>
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  {exp.highlights.map((point, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="var(--google-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)' }}>
                  {exp.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        background: 'var(--bg-input)',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 768px) {
          .rpg-level-track {
            gap: 0.4rem !important;
          }
          .quest-time-box {
            text-align: left !important;
          }
          .quest-time-box div {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};
