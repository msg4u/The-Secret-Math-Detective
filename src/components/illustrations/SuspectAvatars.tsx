import React from 'react';

export const SuspectAvatar: React.FC<{
  id: 'orion' | 'luna' | 'vega' | 'max';
  size?: number;
  className?: string;
}> = ({ id, size = 64, className = '' }) => {
  if (id === 'orion') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" className={`rounded-xl shadow-sm ${className}`} fill="none">
        {/* Background */}
        <circle cx="50" cy="50" r="48" fill="#1e293b" stroke="#3b82f6" strokeWidth="2.5" />
        {/* Hair / Beard */}
        <ellipse cx="50" cy="48" rx="28" ry="32" fill="#94a3b8" />
        {/* Face */}
        <ellipse cx="50" cy="46" rx="20" ry="22" fill="#fde2d0" />
        {/* White / Gray Beard */}
        <path d="M34 50 C34 72 66 72 66 50 C62 58 38 58 34 50 Z" fill="#cbd5e1" />
        {/* Mustache */}
        <path d="M40 54 Q50 58 60 54 Q50 62 40 54 Z" fill="#94a3b8" />
        {/* Glasses */}
        <circle cx="42" cy="44" r="7" stroke="#fbbf24" strokeWidth="2" fill="#e0f2fe" fillOpacity="0.4" />
        <circle cx="58" cy="44" r="7" stroke="#fbbf24" strokeWidth="2" fill="#e0f2fe" fillOpacity="0.4" />
        <line x1="49" y1="44" x2="51" y2="44" stroke="#fbbf24" strokeWidth="2" />
        {/* Eyes behind glasses */}
        <circle cx="42" cy="44" r="2.5" fill="#1e293b" />
        <circle cx="58" cy="44" r="2.5" fill="#1e293b" />
        {/* Eyebrows */}
        <path d="M36 36 L46 38" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M54 38 L64 36" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
        {/* Suit & Bowtie */}
        <path d="M25 90 C25 72 75 72 75 90 Z" fill="#0f172a" />
        <polygon points="50,75 42,70 42,80" fill="#ef4444" />
        <polygon points="50,75 58,70 58,80" fill="#ef4444" />
        <circle cx="50" cy="75" r="2" fill="#fbbf24" />
      </svg>
    );
  }

  if (id === 'luna') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" className={`rounded-xl shadow-sm ${className}`} fill="none">
        {/* Background */}
        <circle cx="50" cy="50" r="48" fill="#311042" stroke="#d946ef" strokeWidth="2.5" />
        {/* Ponytail Hair */}
        <ellipse cx="68" cy="38" rx="14" ry="18" fill="#78350f" />
        <circle cx="50" cy="48" r="27" fill="#78350f" />
        {/* Face */}
        <ellipse cx="50" cy="48" rx="20" ry="22" fill="#fde2d0" />
        {/* Cheeks */}
        <circle cx="38" cy="53" r="4" fill="#f43f5e" opacity="0.4" />
        <circle cx="62" cy="53" r="4" fill="#f43f5e" opacity="0.4" />
        {/* Eyes */}
        <ellipse cx="41" cy="47" rx="3.5" ry="4.5" fill="#451a03" />
        <ellipse cx="59" cy="47" rx="3.5" ry="4.5" fill="#451a03" />
        <circle cx="42" cy="45" r="1.5" fill="#ffffff" />
        <circle cx="60" cy="45" r="1.5" fill="#ffffff" />
        {/* Smile */}
        <path d="M44 57 Q50 63 56 57" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Bangs */}
        <path d="M32 38 C40 44 48 42 52 38 C56 44 65 42 68 36 C55 30 45 30 32 38 Z" fill="#92400e" />
        {/* Star Hairpin */}
        <polygon points="65,30 67,34 71,34 68,37 69,41 65,39 61,41 62,37 59,34 63,34" fill="#fbbf24" />
        {/* Sweater with Moon/Star */}
        <path d="M24 90 C24 74 76 74 76 90 Z" fill="#6d28d9" />
        <circle cx="50" cy="80" r="4" fill="#fef08a" />
      </svg>
    );
  }

  if (id === 'vega') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" className={`rounded-xl shadow-sm ${className}`} fill="none">
        {/* Background */}
        <circle cx="50" cy="50" r="48" fill="#064e3b" stroke="#10b981" strokeWidth="2.5" />
        {/* Hair - neat brown side part */}
        <path d="M28 42 C30 26 70 26 72 42 Z" fill="#291e14" />
        {/* Face */}
        <ellipse cx="50" cy="49" rx="20" ry="23" fill="#fbd5b5" />
        {/* Glasses - round intellectual */}
        <rect x="34" y="42" width="13" height="11" rx="4" stroke="#78350f" strokeWidth="2" fill="#ecfdf5" fillOpacity="0.4" />
        <rect x="53" y="42" width="13" height="11" rx="4" stroke="#78350f" strokeWidth="2" fill="#ecfdf5" fillOpacity="0.4" />
        <line x1="47" y1="46" x2="53" y2="46" stroke="#78350f" strokeWidth="2" />
        <circle cx="40" cy="47" r="2.5" fill="#1e293b" />
        <circle cx="60" cy="47" r="2.5" fill="#1e293b" />
        {/* Subtle smirk */}
        <path d="M45 59 Q51 61 55 58" stroke="#78350f" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Green Botanist Jacket & Leaf Pin */}
        <path d="M24 90 C24 72 76 72 76 90 Z" fill="#047857" />
        <path d="M42 74 L50 84 L58 74" stroke="#ffffff" strokeWidth="2" fill="none" />
        {/* Gold leaf pin */}
        <ellipse cx="62" cy="78" rx="2" ry="4" transform="rotate(30 62 78)" fill="#fbbf24" />
      </svg>
    );
  }

  // Max (The Technician / Mechanic)
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={`rounded-xl shadow-sm ${className}`} fill="none">
      {/* Background */}
      <circle cx="50" cy="50" r="48" fill="#431407" stroke="#f97316" strokeWidth="2.5" />
      {/* Backward Cap */}
      <ellipse cx="50" cy="38" rx="23" ry="12" fill="#ea580c" />
      <path d="M30 38 C32 26 68 26 70 38 Z" fill="#c2410c" />
      <rect x="36" y="38" width="28" height="6" rx="2" fill="#7c2d12" />
      {/* Hair peeking out */}
      <path d="M30 42 C27 48 30 54 34 52" stroke="#1c1917" strokeWidth="4" strokeLinecap="round" />
      <path d="M70 42 C73 48 70 54 66 52" stroke="#1c1917" strokeWidth="4" strokeLinecap="round" />
      {/* Face */}
      <ellipse cx="50" cy="50" rx="20" ry="22" fill="#fed7aa" />
      {/* Grease smudge on cheek */}
      <circle cx="60" cy="55" r="3.5" fill="#44403c" opacity="0.35" />
      {/* Confident eyes */}
      <ellipse cx="42" cy="48" rx="3" ry="4" fill="#1c1917" />
      <ellipse cx="58" cy="48" rx="3" ry="4" fill="#1c1917" />
      <circle cx="43" cy="47" r="1.2" fill="#ffffff" />
      <circle cx="59" cy="47" r="1.2" fill="#ffffff" />
      {/* Smirk */}
      <path d="M43 59 Q51 63 58 58" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Denim Overalls */}
      <path d="M24 90 C24 74 76 74 76 90 Z" fill="#0369a1" />
      <rect x="42" y="76" width="16" height="14" fill="#0284c7" stroke="#075985" strokeWidth="1" />
      {/* Small wrench in pocket */}
      <line x1="50" y1="74" x2="54" y2="68" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="55" cy="67" r="2.5" stroke="#cbd5e1" strokeWidth="1.5" />
    </svg>
  );
};

export const CertificateSeal: React.FC<{ size?: number; className?: string }> = ({ size = 96, className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className} fill="none">
      <defs>
        <radialGradient id="goldSeal" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>
      </defs>
      {/* Ribbon tails */}
      <polygon points="40,80 30,116 48,104 60,116 55,80" fill="#dc2626" />
      <polygon points="65,80 60,116 72,104 90,116 80,80" fill="#b91c1c" />
      {/* Serrated Star Seal */}
      <circle cx="60" cy="55" r="40" fill="url(#goldSeal)" stroke="#78350f" strokeWidth="2.5" />
      {/* Inner ring */}
      <circle cx="60" cy="55" r="32" stroke="#78350f" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Starburst */}
      <polygon points="60,28 64,40 76,42 66,50 70,62 60,55 50,62 54,50 44,42 56,40" fill="#fef08a" stroke="#78350f" strokeWidth="1" />
      {/* Text in seal */}
      <text x="60" y="74" fill="#78350f" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.8">
        OFFICIAL SEAL
      </text>
    </svg>
  );
};
