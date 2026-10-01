import React from 'react';

export const GoogleCloudLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
    <path d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" fill="#ffffff" fillOpacity="0.8"/>
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
