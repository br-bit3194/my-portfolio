import React, { useState } from 'react';
import { 
  Network, 
  Bot, 
  Server, 
  Database, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  ArrowRight, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ArchitectureShowcase = () => {
  const [selectedArchId, setSelectedArchId] = useState(portfolioData.architectures[0].id);
  const [selectedNode, setSelectedNode] = useState(null);

  const activeArch = portfolioData.architectures.find(a => a.id === selectedArchId) || portfolioData.architectures[0];

  const getNodeIcon = (type) => {
    switch (type) {
      case 'input': return <Zap size={18} color="var(--google-yellow)" />;
      case 'ai': return <Bot size={18} color="var(--google-blue)" />;
      case 'core': return <Server size={18} color="var(--google-blue)" />;
      case 'tool': return <Database size={18} color="var(--google-red)" />;
      case 'security': return <ShieldCheck size={18} color="var(--google-green)" />;
      case 'obs': return <Activity size={18} color="var(--google-red)" />;
      default: return <Cpu size={18} color="var(--google-blue)" />;
    }
  };

  return (
    <section id="architecture" className="section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-tag" style={{ color: 'var(--google-blue)', background: 'var(--google-blue-soft)' }}>
            <Network size={14} />
            AI Agent Systems
          </div>
          <h2 className="section-title">AI Agents & System Architecture</h2>
          <p className="section-subtitle">
            Interactive blueprints of production Multi-Agent workflows (A2A, MCP), GCP event streams, and high-concurrency FinTech data engines.
          </p>
        </div>

        {/* System Selector Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {portfolioData.architectures.map((arch) => (
            <button
              key={arch.id}
              onClick={() => {
                setSelectedArchId(arch.id);
                setSelectedNode(null);
              }}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: selectedArchId === arch.id ? 'var(--google-blue)' : 'var(--bg-card)',
                color: selectedArchId === arch.id ? '#ffffff' : 'var(--text-secondary)',
                border: selectedArchId === arch.id ? '1px solid var(--google-blue)' : '1px solid var(--border-color)',
                boxShadow: selectedArchId === arch.id ? '0 2px 8px rgba(26, 115, 232, 0.3)' : 'none'
              }}
            >
              {arch.title}
            </button>
          ))}
        </div>

        {/* Architecture Bento Canvas */}
        <div 
          className="bento-card"
          style={{ 
            padding: '2.5rem',
            position: 'relative'
          }}
        >
          <div className="google-strip" />

          {/* Header Info */}
          <div style={{ marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge badge-blue" style={{ marginBottom: '0.4rem' }}>{activeArch.category}</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {activeArch.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  {activeArch.description}
                </p>
              </div>
              <span className="badge badge-green">Production Verified</span>
            </div>
          </div>

          {/* Interactive Flow Nodes */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
              gap: '1rem',
              alignItems: 'stretch',
              position: 'relative',
              marginBottom: '2rem'
            }}
          >
            {activeArch.nodes.map((node, index) => {
              const isSelected = selectedNode?.id === node.id;
              return (
                <div 
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  style={{
                    background: isSelected ? 'var(--google-blue-soft)' : 'var(--bg-input)',
                    border: isSelected ? '2px solid var(--google-blue)' : '1px solid var(--border-color)',
                    borderRadius: '0.85rem',
                    padding: '1.15rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transform: isSelected ? 'scale(1.02)' : 'none',
                    boxShadow: isSelected ? '0 4px 12px rgba(26, 115, 232, 0.15)' : 'none'
                  }}
                >
                  <div>
                    {/* Node Step & Icon */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span 
                        style={{ 
                          fontSize: '0.72rem', 
                          fontWeight: 700, 
                          color: 'var(--text-muted)', 
                          fontFamily: 'var(--font-mono)' 
                        }}
                      >
                        STEP 0{index + 1}
                      </span>
                      <div 
                        style={{ 
                          width: '32px', 
                          height: '32px', 
                          borderRadius: '8px', 
                          background: 'var(--bg-card)', 
                          border: '1px solid var(--border-subtle)',
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center' 
                        }}
                      >
                        {getNodeIcon(node.type)}
                      </div>
                    </div>

                    <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                      {node.title}
                    </h4>

                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      {node.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '0.75rem', fontSize: '0.72rem', color: 'var(--google-blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <span>Inspect</span>
                    <ArrowRight size={11} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Node Inspector */}
          {selectedNode ? (
            <div 
              style={{
                background: 'var(--bg-input)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.85rem',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'var(--bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {getNodeIcon(selectedNode.type)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                    {selectedNode.title}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {selectedNode.desc}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span className="badge badge-blue">Telemetry Verified</span>
                <span className="badge badge-green">Production Ready</span>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              💡 Click any step above to inspect its architecture role and telemetry status
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
