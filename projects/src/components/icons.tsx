'use client';

import React from 'react';

interface FlowerIconProps {
  size?: number;
  className?: string;
  blooming?: boolean;
}

export function FlowerIcon({ size = 24, className = '', blooming = false }: FlowerIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={`${blooming ? 'animate-flower-bloom' : ''} ${className}`}
    >
      {/* 花瓣 */}
      <ellipse cx="20" cy="9" rx="5.5" ry="8" fill="#E8564A" opacity="0.9" />
      <ellipse cx="29" cy="16" rx="5.5" ry="8" fill="#E8564A" opacity="0.85" transform="rotate(72 29 16)" />
      <ellipse cx="26" cy="27" rx="5.5" ry="8" fill="#E8564A" opacity="0.8" transform="rotate(144 26 27)" />
      <ellipse cx="14" cy="27" rx="5.5" ry="8" fill="#E8564A" opacity="0.85" transform="rotate(216 14 27)" />
      <ellipse cx="11" cy="16" rx="5.5" ry="8" fill="#E8564A" opacity="0.9" transform="rotate(288 11 16)" />
      {/* 花心 */}
      <circle cx="20" cy="20" r="5" fill="#F5A623" />
      <circle cx="20" cy="20" r="3" fill="#FBBF24" />
    </svg>
  );
}

export function FlowerIconSmall({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <ellipse cx="10" cy="5" rx="2.8" ry="4" fill="#E8564A" opacity="0.9" />
      <ellipse cx="14.5" cy="8" rx="2.8" ry="4" fill="#E8564A" opacity="0.85" transform="rotate(72 14.5 8)" />
      <ellipse cx="13" cy="13.5" rx="2.8" ry="4" fill="#E8564A" opacity="0.8" transform="rotate(144 13 13.5)" />
      <ellipse cx="7" cy="13.5" rx="2.8" ry="4" fill="#E8564A" opacity="0.85" transform="rotate(216 7 13.5)" />
      <ellipse cx="5.5" cy="8" rx="2.8" ry="4" fill="#E8564A" opacity="0.9" transform="rotate(288 5.5 8)" />
      <circle cx="10" cy="10" r="2.5" fill="#F5A623" />
      <circle cx="10" cy="10" r="1.5" fill="#FBBF24" />
    </svg>
  );
}

export function LeafIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M4 16C4 16 5 8 12 4C12 4 14 10 8 16C8 16 5 16 4 16Z" fill="#4CAF7D" />
      <path d="M4 16C6 12 10 8 12 4" stroke="#3D9B6C" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function BookIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

export function StarIcon({ size = 16, className = '', filled = false }: { size?: number; className?: string; filled?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? '#F5A623' : 'none'} stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function HeartIcon({ size = 16, className = '', filled = false }: { size?: number; className?: string; filled?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? '#E8564A' : 'none'} stroke="#E8564A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function FireIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2.791 3-4 2z" />
    </svg>
  );
}

export function LibraryIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export function ChatIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function SpeakerIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

export function CheckIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function XIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function RefreshIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  );
}
