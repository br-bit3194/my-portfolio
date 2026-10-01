import React from 'react';

/**
 * JadeSkyBackground - Pure CSS Bloom Field Gradient Background
 * Built with the 21st.dev Gradient Builder style.
 * 
 * 4-Color Palette:
 * - #EEF6E3 (Soft Jade/Matcha Alabaster Base)
 * - #B7D98E (Spring Sprout Green)
 * - #7FBF9A (Seafoam Jade)
 * - #CFE9F0 (Sky Cyan Mist)
 * 
 * Features: Soft blur finish, zero dependencies, GPU-accelerated blooming gradients.
 * Suitable for full-page backgrounds, hero sections, and card backdrops.
 */
export const JadeSkyBackground = ({
  children,
  className = '',
  style = {},
  variant = 'page', // 'page' | 'hero' | 'card' | 'inline'
  animate = true,
  blur = '80px',
  opacity = 0.9,
  ...props
}) => {
  const isCard = variant === 'card';
  const isHero = variant === 'hero';

  return (
    <div
      className={`jade-sky-container ${className}`}
      style={{
        position: isCard ? 'relative' : isHero ? 'absolute' : 'relative',
        inset: isHero ? 0 : undefined,
        width: '100%',
        minHeight: variant === 'page' ? '100vh' : undefined,
        backgroundColor: '#EEF6E3',
        overflow: 'hidden',
        ...style
      }}
      {...props}
    >
      {/* Bloom Field Gradient Canvas */}
      <div
        className={`jade-sky-blooms ${animate ? 'jade-sky-animated' : ''}`}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-20%',
          width: '140%',
          height: '140%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: opacity,
          filter: `blur(${blur})`,
          transform: 'translateZ(0)',
          willChange: animate ? 'transform' : 'auto'
        }}
      >
        {/* Bloom Orb 1: #EEF6E3 (Base Jade Cloud) */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            width: '50vw',
            height: '50vw',
            maxWidth: '650px',
            maxHeight: '650px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #EEF6E3 0%, rgba(238, 246, 227, 0) 70%)',
            mixBlendMode: 'normal'
          }}
        />

        {/* Bloom Orb 2: #CFE9F0 (Sky Cyan Mist) */}
        <div
          style={{
            position: 'absolute',
            top: '5%',
            right: '10%',
            width: '45vw',
            height: '45vw',
            maxWidth: '580px',
            maxHeight: '580px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #CFE9F0 0%, rgba(207, 233, 240, 0) 70%)'
          }}
        />

        {/* Bloom Orb 3: #B7D98E (Spring Sprout Green) */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '30%',
            width: '55vw',
            height: '55vw',
            maxWidth: '700px',
            maxHeight: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #B7D98E 0%, rgba(183, 217, 142, 0) 70%)',
            opacity: 0.8
          }}
        />

        {/* Bloom Orb 4: #7FBF9A (Seafoam Jade) */}
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '20%',
            width: '50vw',
            height: '50vw',
            maxWidth: '650px',
            maxHeight: '650px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #7FBF9A 0%, rgba(127, 191, 154, 0) 70%)',
            opacity: 0.75
          }}
        />

        {/* Bloom Orb 5: #CFE9F0 (Sky Morning Mist Accent) */}
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '10%',
            width: '40vw',
            height: '40vw',
            maxWidth: '500px',
            maxHeight: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #CFE9F0 0%, rgba(207, 233, 240, 0) 70%)',
            opacity: 0.85
          }}
        />
      </div>

      {/* Pure CSS Radial Fallback Grid Pattern for Texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(127, 191, 154, 0.22) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.8
        }}
      />

      {/* Foreground Content */}
      {children && (
        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%' }}>
          {children}
        </div>
      )}

      {/* Embedded CSS for Soft Bloom Organic Movement */}
      <style>{`
        @keyframes jadeBloomFloat {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(25px, -20px) scale(1.04);
          }
          66% {
            transform: translate(-20px, 15px) scale(0.97);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .jade-sky-animated {
          animation: jadeBloomFloat 22s ease-in-out infinite alternate;
        }
        @media (prefers-reduced-motion: reduce) {
          .jade-sky-animated {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default JadeSkyBackground;
