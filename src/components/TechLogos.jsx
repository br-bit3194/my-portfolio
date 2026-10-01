import React from 'react';

// Official Google Cloud Logo (Exact asset provided by user)
export const GoogleCloudLogo = ({ size = 22, style = {} }) => (
  <img 
    src="/google-cloud-logo.png" 
    alt="Google Cloud" 
    style={{ 
      width: `${size}px`, 
      height: `${size}px`, 
      objectFit: 'contain',
      display: 'inline-block',
      verticalAlign: 'middle',
      ...style 
    }} 
  />
);

// Official LinkedIn Blue Logo
export const LinkedinOfficialLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
    <path d="M7.05 19H4.15V9.65h2.9V19zM5.6 8.36c-.93 0-1.68-.76-1.68-1.68 0-.93.75-1.68 1.68-1.68.93 0 1.68.75 1.68 1.68 0 .92-.75 1.68-1.68 1.68zm13.4 10.64h-2.9v-4.54c0-1.08-.02-2.47-1.51-2.47-1.51 0-1.74 1.18-1.74 2.4v4.61h-2.9V9.65h2.78v1.28h.04c.39-.73 1.33-1.51 2.74-1.51 2.93 0 3.47 1.93 3.47 4.44V19z" fill="#ffffff"/>
  </svg>
);

export const AwsLogo = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <text x="50%" y="48%" dominantBaseline="middle" textAnchor="middle" fill="#232F3E" fontWeight="900" fontSize="11" fontFamily="sans-serif">aws</text>
    <path d="M4 17c5 3 11 3 16 0" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M18.5 15.5l2 1.5-2 1" fill="#FF9900"/>
  </svg>
);

export const PythonLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M11.91 2c-5.06 0-4.74 2.19-4.74 2.19l.01 2.27h4.82v.68H5.16S2 6.78 2 11.87c0 5.09 2.76 4.91 2.76 4.91h1.64v-2.32s-.09-2.76 2.71-2.76h4.66s2.61.04 2.61-2.52V4.52S16.98 2 11.91 2zm-2.6 1.43c.48 0 .86.39.86.87 0 .48-.38.87-.86.87-.48 0-.87-.39-.87-.87 0-.48.39-.87.87-.87z" fill="#3776AB"/>
    <path d="M12.09 22c5.06 0 4.74-2.19 4.74-2.19l-.01-2.27H12v-.68h6.84s3.16.36 3.16-4.73c0-5.09-2.76-4.91-2.76-4.91h-1.64v2.32s.09 2.76-2.71 2.76H10.23s-2.61-.04-2.61 2.52v4.66S7.02 22 12.09 22zm2.6-1.43c-.48 0-.86-.39-.86-.87 0-.48.38-.87.86-.87.48 0 .87.39.87.87 0 .48-.39.87-.87.87z" fill="#FFD43B"/>
  </svg>
);

export const FastApiLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#009688"/>
    <path d="M13 3L6 14h5l-1 7 7-11h-5l1-7z" fill="#ffffff"/>
  </svg>
);

export const GeminiStarLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" fill="url(#geminiGrad)"/>
    <defs>
      <linearGradient id="geminiGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1A73E8"/>
        <stop offset="0.5" stopColor="#8AB4F8"/>
        <stop offset="1" stopColor="#D96570"/>
      </linearGradient>
    </defs>
  </svg>
);
