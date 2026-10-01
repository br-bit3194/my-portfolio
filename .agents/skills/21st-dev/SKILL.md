---
name: 21st-dev
description: Guidelines, design recipes, component patterns, and animation best practices for building modern 21st.dev, Aceternity UI, and Magic UI style interfaces with Framer Motion, Vanilla CSS, and React.
---

# 21st.dev Component Engineering & Animation Skill

This skill provides patterns, architecture, and code templates for creating award-winning, state-of-the-art UI components inspired by [21st.dev](https://21st.dev), Aceternity UI, Magic UI, Linear, and Vercel.

---

## Core Philosophy & Design Aesthetic

1. **Tactile Physics**: Avoid static 2D cards. Incorporate spring physics (`framer-motion`), 3D parallax tilt (`react-parallax-tilt`), and responsive hover states.
2. **Dynamic Illumination**: Use localized cursor-tracking radial spotlights (`SpotlightCard`), subtle gradient borders, and glowing accents.
3. **Organic Momentum**: Stagger scroll-triggered entrances with `whileInView`, `initial={{ opacity: 0, y: 24 }}`, and spring damping.
4. **Kinetic Micro-Interactions**: Use magnetic buttons (`Magnetic`), animated count-up numbers (`NumberTicker`), and continuous marquee ribbons (`Marquee`).
5. **Harmonious Palettes**: Avoid generic colors; use deep dark modes (`#0d1117`, `#161b22`) or crisp modern light modes with curated brand gradients.

---

## Signature 21st.dev Component Patterns

### 1. Interactive Spotlight Card (`SpotlightCard`)
A card that calculates local cursor coordinates `(mouseX, mouseY)` and casts a dynamic radial sheen across its surface and illuminated border.

```jsx
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

export const SpotlightCard = ({ 
  children, 
  spotlightColor = 'rgba(29, 104, 254, 0.15)',
  borderColor = 'rgba(29, 104, 254, 0.4)',
  style = {} 
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

  const backgroundGradient = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;
  const borderGradient = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, ${borderColor}, transparent 70%)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); mouseX.set(-1000); mouseY.set(-1000); }}
      style={{ position: 'relative', borderRadius: '1.25rem', padding: '1px', overflow: 'hidden', ...style }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: borderGradient,
          borderRadius: 'inherit',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none'
        }}
      />
      <div style={{ position: 'relative', zIndex: 2, background: 'var(--bg-card)', borderRadius: 'inherit', height: '100%' }}>
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: backgroundGradient,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.25s ease',
            pointerEvents: 'none'
          }}
        />
        <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
      </div>
    </div>
  );
};
```

---

### 2. Magnetic Button Attraction (`Magnetic`)
Pulls buttons and badges gently toward the cursor using spring physics.

```jsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const Magnetic = ({ children, strength = 0.25, style = {} }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((clientX - (left + width / 2)) * strength);
    y.set((clientY - (top + height / 2)) * strength);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: springX, y: springY, display: 'inline-block', ...style }}
    >
      {children}
    </motion.div>
  );
};
```

---

### 3. Infinite Smooth Marquee Ribbon (`Marquee`)
Infinite horizontal scroll with seamless dual-track loop and hover pause.

```jsx
import React from 'react';

export const Marquee = ({ children, speed = 30, pauseOnHover = true }) => {
  return (
    <div style={{ display: 'flex', overflow: 'hidden', userSelect: 'none', gap: '1.5rem', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div className="marquee-track" style={{ display: 'flex', flexShrink: 0, gap: '1.5rem', animation: `marquee ${speed}s linear infinite` }}>
        {children}
      </div>
      <div aria-hidden="true" className="marquee-track" style={{ display: 'flex', flexShrink: 0, gap: '1.5rem', animation: `marquee ${speed}s linear infinite` }}>
        {children}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(calc(-100% - 1.5rem)); } }
        ${pauseOnHover ? '.marquee-track:hover { animation-play-state: paused; }' : ''}
      `}</style>
    </div>
  );
};
```

---

### 4. Number Ticker Count-Up (`NumberTicker`)
Smooth numeric count-up animation with spring physics when scrolled into view.

```jsx
import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export const NumberTicker = ({ value = 100, delay = 0, decimalPlaces = 0, prefix = '', suffix = '' }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) setTimeout(() => motionValue.set(value), delay * 1000);
  }, [isInView, value, delay, motionValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) ref.current.textContent = `${prefix}${latest.toFixed(decimalPlaces)}${suffix}`;
    });
  }, [springValue, decimalPlaces, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};
```

---

## Animation & Performance Guidelines
1. **Never block the main thread**: Use CSS animations or GPU-accelerated properties (`transform: translate3d/scale`, `opacity`).
2. **Combine with React Parallax Tilt**: Wrap cards in `<Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} glareEnable={true} glareMaxOpacity={0.1}>` for physical depth.
3. **Respect Reduced Motion**: Always support `prefers-reduced-motion` media queries when designing high-motion web applications.
