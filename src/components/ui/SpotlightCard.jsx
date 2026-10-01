import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

export const SpotlightCard = ({ 
  children, 
  className = '', 
  style = {}, 
  spotlightColor = 'rgba(29, 104, 254, 0.15)',
  borderColor = 'rgba(29, 104, 254, 0.4)',
  ...props 
}) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  const backgroundGradient = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;
  const borderGradient = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, ${borderColor}, transparent 70%)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card-wrapper ${className}`}
      style={{
        position: 'relative',
        borderRadius: '1.25rem',
        padding: '1px',
        overflow: 'hidden',
        ...style
      }}
      {...props}
    >
      {/* Dynamic Illuminating Border Glow */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: borderGradient,
          borderRadius: 'inherit',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Internal Content Container */}
      <div
        className="bento-card"
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          width: '100%',
          background: 'var(--bg-card)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          borderRadius: 'inherit',
          overflow: 'hidden'
        }}
      >
        {/* Dynamic Surface Spotlight Sheen */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: backgroundGradient,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.25s ease',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
