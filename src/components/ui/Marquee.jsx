import React from 'react';

export const Marquee = ({
  children,
  pauseOnHover = true,
  direction = 'left',
  speed = 35,
  className = '',
  style = {}
}) => {
  return (
    <div
      className={`marquee-container ${className}`}
      style={{
        display: 'flex',
        overflow: 'hidden',
        userSelect: 'none',
        gap: '1.5rem',
        maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, transparent 100%)',
        ...style
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          flexShrink: 0,
          gap: '1.5rem',
          minWidth: '100%',
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationPlayState: 'running'
        }}
      >
        {children}
      </div>

      <div
        aria-hidden="true"
        className="marquee-track"
        style={{
          display: 'flex',
          flexShrink: 0,
          gap: '1.5rem',
          minWidth: '100%',
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationPlayState: 'running'
        }}
      >
        {children}
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - 1.5rem)); }
        }
        @keyframes marquee-right {
          from { transform: translateX(calc(-100% - 1.5rem)); }
          to { transform: translateX(0); }
        }
        ${pauseOnHover ? `
          .marquee-container:hover .marquee-track {
            animation-play-state: paused !important;
          }
        ` : ''}
      `}</style>
    </div>
  );
};
