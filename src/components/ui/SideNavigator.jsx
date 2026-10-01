import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronUp, 
  ChevronDown, 
  Home, 
  Sparkles, 
  Award, 
  Layers, 
  Briefcase, 
  Wrench, 
  Mail,
  ArrowUpToLine,
  ArrowDownToLine
} from 'lucide-react';

const SECTIONS = [
  { id: 'about', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: Sparkles },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'architecture', label: 'Architecture', icon: Layers },
  { id: 'experience', label: 'Journey', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'contact', label: 'Contact', icon: Mail }
];

export const SideNavigator = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [hoveredSection, setHoveredSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragTooltip, setDragTooltip] = useState({ visible: false, text: '', percent: 0, y: 0 });

  const trackRef = useRef(null);
  const isDraggingRef = useRef(false);

  // Sync scroll percentage and active section on scroll
  const updateScrollState = useCallback(() => {
    if (isDraggingRef.current) return; // Skip if currently dragging to avoid feedback loop
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const progress = totalHeight > 0 ? Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100)) : 0;
    setScrollProgress(progress);

    // Section intersection detection
    const scrollPosition = currentScroll + window.innerHeight * 0.35;
    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const section = document.getElementById(SECTIONS[i].id);
      if (section) {
        const top = section.offsetTop;
        if (scrollPosition >= top) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => window.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  // Section Navigation Handlers
  const getCurrentIndex = () => {
    const idx = SECTIONS.findIndex(s => s.id === activeSection);
    return idx === -1 ? 0 : idx;
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Step Up: 1 Section Above
  const stepUp = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex > 0) {
      scrollToSection(SECTIONS[currentIndex - 1].id);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Step Down: 1 Section Below
  const stepDown = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex < SECTIONS.length - 1) {
      scrollToSection(SECTIONS[currentIndex + 1].id);
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  // Mouse Drag / Scrub Navigation Logic
  const handleScrub = useCallback((clientY) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const relativeY = clientY - rect.top;
    const clampedY = Math.max(0, Math.min(rect.height, relativeY));
    const ratio = clampedY / rect.height;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScrollY = ratio * totalHeight;

    window.scrollTo({ top: targetScrollY, behavior: 'auto' });

    const percent = Math.round(ratio * 100);
    setScrollProgress(percent);

    // Find nearest section for tooltip
    const scrollPosition = targetScrollY + window.innerHeight * 0.35;
    let currentLabel = 'Home';
    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const section = document.getElementById(SECTIONS[i].id);
      if (section && scrollPosition >= section.offsetTop) {
        currentLabel = SECTIONS[i].label;
        break;
      }
    }

    setDragTooltip({
      visible: true,
      text: currentLabel,
      percent,
      y: clampedY
    });
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    setIsDragging(true);
    handleScrub(e.clientY);

    const onMouseMove = (moveEvent) => {
      if (isDraggingRef.current) {
        handleScrub(moveEvent.clientY);
      }
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
      setDragTooltip(prev => ({ ...prev, visible: false }));
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      updateScrollState();
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const currentIndex = getCurrentIndex();
  const isAtTop = scrollProgress <= 2;
  const isAtBottom = scrollProgress >= 98;

  return (
    <aside 
      className="side-scroll-navigator"
      aria-label="Section Quick & Step Navigator"
      style={{
        position: 'fixed',
        right: '1.25rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 45,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.45rem',
        userSelect: 'none',
        touchAction: 'none'
      }}
    >
      {/* Absolute Top Jump Micro Button */}
      <motion.button
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        title="Scroll to Absolute Top"
        aria-label="Scroll to Absolute Top"
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'var(--bg-card)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-color)',
          color: isAtTop ? 'var(--text-muted)' : 'var(--google-blue)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-sm)',
          opacity: isAtTop ? 0.4 : 0.85,
          transition: 'all 0.2s ease'
        }}
      >
        <ArrowUpToLine size={12} />
      </motion.button>

      {/* Step Up (Previous Section) Button */}
      <motion.button
        whileHover={{ scale: 1.12, y: -1 }}
        whileTap={{ scale: 0.92 }}
        onClick={stepUp}
        title={`Step Up: ${currentIndex > 0 ? SECTIONS[currentIndex - 1].label : 'Top'}`}
        aria-label="Previous Section"
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'var(--bg-card)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-color)',
          color: currentIndex > 0 ? 'var(--google-blue)' : 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: currentIndex > 0 ? 'pointer' : 'default',
          boxShadow: 'var(--shadow-sm)',
          transition: 'all 0.2s ease'
        }}
      >
        <ChevronUp size={16} strokeWidth={2.5} />
      </motion.button>

      {/* Main Draggable Slidebar Track & Section Nodes Container */}
      <div
        style={{
          position: 'relative',
          padding: '0.75rem 0.4rem',
          borderRadius: '9999px',
          background: 'var(--bg-card)',
          backdropFilter: 'blur(18px) saturate(180%)',
          WebkitBackdropFilter: 'blur(18px) saturate(180%)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.65rem'
        }}
      >
        {/* Continuous Draggable Track Bar */}
        <div 
          ref={trackRef}
          onMouseDown={handleMouseDown}
          title="Drag to scroll or click to jump"
          style={{
            position: 'absolute',
            top: '0.9rem',
            bottom: '0.9rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '10px',
            cursor: isDragging ? 'grabbing' : 'grab',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {/* Track background line */}
          <div 
            style={{
              width: '3px',
              height: '100%',
              background: 'var(--border-subtle)',
              borderRadius: '2px',
              position: 'relative'
            }}
          >
            {/* Filled Progress Line */}
            <div 
              style={{
                width: '100%',
                height: `${scrollProgress}%`,
                background: 'linear-gradient(180deg, #1a73e8, #34a853)',
                borderRadius: '2px',
                transition: isDragging ? 'none' : 'height 0.15s ease'
              }}
            />

            {/* Draggable Slider Thumb / Handle */}
            <motion.div
              style={{
                position: 'absolute',
                top: `${scrollProgress}%`,
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isDragging ? '16px' : '12px',
                height: isDragging ? '16px' : '12px',
                borderRadius: '50%',
                background: '#1a73e8',
                border: '2px solid #ffffff',
                boxShadow: isDragging 
                  ? '0 0 14px rgba(26, 115, 232, 0.9), 0 2px 6px rgba(0,0,0,0.2)' 
                  : '0 2px 6px rgba(26, 115, 232, 0.45)',
                cursor: isDragging ? 'grabbing' : 'grab',
                zIndex: 10,
                transition: isDragging ? 'transform 0.05s ease' : 'top 0.15s ease, width 0.15s ease, height 0.15s ease'
              }}
            />
          </div>
        </div>

        {/* Live Dragging Floating Tooltip */}
        <AnimatePresence>
          {dragTooltip.visible && (
            <motion.div
              initial={{ opacity: 0, x: 8, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              style={{
                position: 'absolute',
                right: 'calc(100% + 14px)',
                top: `${dragTooltip.y}px`,
                transform: 'translateY(-50%)',
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                background: 'var(--bg-card-solid)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--google-blue)',
                boxShadow: 'var(--shadow-lg)',
                color: 'var(--text-primary)',
                fontSize: '0.8rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                zIndex: 60,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span style={{ color: 'var(--google-blue)' }}>{dragTooltip.text}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', fontWeight: 600 }}>• {dragTooltip.percent}%</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Navigation Nodes */}
        {SECTIONS.map((sec, idx) => {
          const isActive = activeSection === sec.id;
          const isHovered = hoveredSection === sec.id;
          const IconComponent = sec.icon;

          return (
            <div
              key={sec.id}
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setHoveredSection(sec.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Tooltip Label on Node Hover (Floats to Left) */}
              <AnimatePresence>
                {isHovered && !isDragging && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: 'absolute',
                      right: 'calc(100% + 14px)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      background: 'var(--bg-card-solid)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1px solid var(--border-color)',
                      boxShadow: 'var(--shadow-md)',
                      color: 'var(--text-primary)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                      zIndex: 50,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <IconComponent size={13} color="var(--google-blue)" />
                    <span>{sec.label}</span>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      ({idx + 1}/{SECTIONS.length})
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Node Button Indicator */}
              <motion.button
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection(sec.id)}
                aria-label={`Jump to ${sec.label}`}
                title={sec.label}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: isActive ? '22px' : '16px',
                  height: isActive ? '22px' : '16px',
                  borderRadius: '50%',
                  background: isActive ? 'var(--google-blue)' : 'var(--bg-card-solid)',
                  border: isActive ? '2px solid #ffffff' : '1.5px solid var(--border-color)',
                  boxShadow: isActive ? '0 0 10px rgba(26, 115, 232, 0.55)' : 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeDotGlow"
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: '#ffffff'
                    }}
                  />
                )}
              </motion.button>
            </div>
          );
        })}
      </div>

      {/* Step Down (Next Section) Button */}
      <motion.button
        whileHover={{ scale: 1.12, y: 1 }}
        whileTap={{ scale: 0.92 }}
        onClick={stepDown}
        title={`Step Down: ${currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1].label : 'Bottom'}`}
        aria-label="Next Section"
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'var(--bg-card)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-color)',
          color: currentIndex < SECTIONS.length - 1 ? 'var(--google-blue)' : 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: currentIndex < SECTIONS.length - 1 ? 'pointer' : 'default',
          boxShadow: 'var(--shadow-sm)',
          transition: 'all 0.2s ease'
        }}
      >
        <ChevronDown size={16} strokeWidth={2.5} />
      </motion.button>

      {/* Absolute Bottom Jump Micro Button */}
      <motion.button
        whileHover={{ scale: 1.15, y: 2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToBottom}
        title="Scroll to Absolute Bottom"
        aria-label="Scroll to Absolute Bottom"
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'var(--bg-card)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-color)',
          color: isAtBottom ? 'var(--text-muted)' : 'var(--google-blue)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-sm)',
          opacity: isAtBottom ? 0.4 : 0.85,
          transition: 'all 0.2s ease'
        }}
      >
        <ArrowDownToLine size={12} />
      </motion.button>

      <style>{`
        @media (max-width: 768px) {
          .side-scroll-navigator {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
};

export default SideNavigator;
