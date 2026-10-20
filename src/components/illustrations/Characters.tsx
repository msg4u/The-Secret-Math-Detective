import React from 'react';

export const NovaCharacter: React.FC<{ className?: string; size?: number; pose?: 'holding_lens' | 'pointing' | 'notebook' }> = ({
  className = '',
  size = 180,
  pose = 'holding_lens',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`drop-shadow-md ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="novaSkin" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#fde2d0" />
          <stop offset="100%" stopColor="#f3c29f" />
        </radialGradient>
        <linearGradient id="novaCoat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c27838" />
          <stop offset="100%" stopColor="#8d4b1a" />
        </linearGradient>
        <linearGradient id="novaHat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#aa6228" />
          <stop offset="100%" stopColor="#693710" />
        </linearGradient>
        <linearGradient id="novaHair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#542e12" />
          <stop offset="100%" stopColor="#301605" />
        </linearGradient>
        <radialGradient id="lensGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      {/* Back Hair */}
      <circle cx="100" cy="98" r="46" fill="url(#novaHair)" />
      <path d="M56 100 C50 120 54 140 70 148 C60 135 62 110 65 96 Z" fill="url(#novaHair)" />
      <path d="M144 100 C150 120 146 140 130 148 C140 135 138 110 135 96 Z" fill="url(#novaHair)" />

      {/* Coat / Body */}
      <path d="M72 135 C70 160 55 195 50 200 L150 200 C145 195 130 160 128 135 Z" fill="url(#novaCoat)" />
      {/* Coat Collar & Tie */}
      <path d="M85 135 L100 155 L115 135 L108 175 L92 175 Z" fill="#451a03" />
      <path d="M96 142 L104 142 L102 165 L98 165 Z" fill="#dc2626" />
      <circle cx="100" cy="144" r="3" fill="#fbbf24" />

      {/* Neck */}
      <rect x="92" y="120" width="16" height="18" rx="6" fill="url(#novaSkin)" />

      {/* Head */}
      <ellipse cx="100" cy="96" rx="34" ry="32" fill="url(#novaSkin)" />

      {/* Cheeks */}
      <circle cx="80" cy="104" r="7" fill="#f87171" opacity="0.4" />
      <circle cx="120" cy="104" r="7" fill="#f87171" opacity="0.4" />

      {/* Eyes */}
      <ellipse cx="84" cy="96" rx="6" ry="8" fill="#291e14" />
      <ellipse cx="116" cy="96" rx="6" ry="8" fill="#291e14" />
      <circle cx="86" cy="93" r="2.5" fill="#ffffff" />
      <circle cx="118" cy="93" r="2.5" fill="#ffffff" />
      <circle cx="83" cy="98" r="1.2" fill="#ffffff" />
      <circle cx="115" cy="98" r="1.2" fill="#ffffff" />

      {/* Eyebrows */}
      <path d="M76 86 C82 83 89 85 91 87" stroke="#3b1d07" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M109 87 C111 85 118 83 124 86" stroke="#3b1d07" strokeWidth="2.2" strokeLinecap="round" />

      {/* Cute Nose and Smile */}
      <path d="M99 101 C100 103 102 103 103 101" stroke="#b45309" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M92 110 Q100 118 108 110" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Front Curls / Bangs */}
      <path d="M68 85 C75 92 84 94 92 85 C98 96 112 92 120 85 C125 93 133 89 135 83 C125 75 80 75 68 85 Z" fill="url(#novaHair)" />

      {/* Detective Fedora Hat */}
      <ellipse cx="100" cy="74" rx="55" ry="14" fill="url(#novaHat)" />
      <path d="M68 72 C68 46 80 34 100 34 C120 34 132 46 132 72 Z" fill="url(#novaHat)" />
      {/* Hat Indent / Ribbon */}
      <path d="M68 67 C78 64 122 64 132 67 L132 72 C122 69 78 69 68 72 Z" fill="#1e1b4b" />
      <polygon points="100,62 102,66 107,67 103,70 104,75 100,72 96,75 97,70 93,67 98,66" fill="#fbbf24" />

      {/* Magnifying Glass & Arm (Pose) */}
      {pose === 'holding_lens' && (
        <g>
          {/* Arm holding up lens */}
          <path d="M60 148 C50 135 48 110 65 95" stroke="url(#novaCoat)" strokeWidth="14" strokeLinecap="round" />
          <circle cx="65" cy="95" r="7" fill="url(#novaSkin)" />
          {/* Magnifying glass */}
          <circle cx="62" cy="75" r="22" fill="url(#lensGlow)" stroke="#f59e0b" strokeWidth="4.5" />
          <line x1="52" y1="90" x2="38" y2="112" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
          {/* Lens glare */}
          <path d="M50 64 A 14 14 0 0 1 72 64" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
          <circle cx="62" cy="75" r="3" fill="#ffffff" opacity="0.6" />
        </g>
      )}

      {pose === 'pointing' && (
        <g>
          <path d="M135 148 C155 130 165 110 175 95" stroke="url(#novaCoat)" strokeWidth="14" strokeLinecap="round" />
          <circle cx="175" cy="95" r="7" fill="url(#novaSkin)" />
          <path d="M175 95 L190 85" stroke="url(#novaSkin)" strokeWidth="5" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
};

export const PipRobot: React.FC<{ className?: string; size?: number; expression?: 'happy' | 'thinking' | 'calculating' }> = ({
  className = '',
  size = 140,
  expression = 'happy',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      className={`drop-shadow-md ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pipBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>
        <linearGradient id="eyeCyan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Floating Shadow */}
      <ellipse cx="80" cy="148" rx="35" ry="6" fill="#020617" opacity="0.25" />

      {/* Antenna */}
      <line x1="80" y1="36" x2="80" y2="16" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
      <circle cx="80" cy="14" r="6" fill="#38bdf8" className="animate-pulse" />
      <circle cx="80" cy="14" r="9" stroke="#38bdf8" strokeWidth="1.5" opacity="0.5" />

      {/* Ear Dials */}
      <rect x="25" y="55" width="8" height="24" rx="4" fill="#64748b" />
      <rect x="127" y="55" width="8" height="24" rx="4" fill="#64748b" />
      <circle cx="29" cy="67" r="2" fill="#38bdf8" />
      <circle cx="131" cy="67" r="2" fill="#38bdf8" />

      {/* Head Chassis */}
      <rect x="30" y="34" width="100" height="70" rx="24" fill="url(#pipBody)" stroke="#475569" strokeWidth="3" />

      {/* Visor Screen */}
      <rect x="38" y="42" width="84" height="54" rx="18" fill="url(#screenGlow)" stroke="#1e293b" strokeWidth="2" />

      {/* Glowing Eyes */}
      {expression === 'happy' && (
        <g>
          {/* Left curved eye */}
          <path d="M52 68 Q64 54 76 68" stroke="url(#eyeCyan)" strokeWidth="5.5" strokeLinecap="round" fill="none" />
          {/* Right curved eye */}
          <path d="M84 68 Q96 54 108 68" stroke="url(#eyeCyan)" strokeWidth="5.5" strokeLinecap="round" fill="none" />
        </g>
      )}

      {expression === 'thinking' && (
        <g>
          <circle cx="64" cy="65" r="9" fill="url(#eyeCyan)" />
          <circle cx="67" cy="62" r="3" fill="#ffffff" />
          <circle cx="96" cy="65" r="9" fill="url(#eyeCyan)" />
          <circle cx="99" cy="62" r="3" fill="#ffffff" />
          <line x1="56" y1="52" x2="72" y2="55" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
          <line x1="88" y1="55" x2="104" y2="52" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}

      {expression === 'calculating' && (
        <g>
          <text x="50" y="70" fill="#38bdf8" fontSize="13" fontFamily="monospace" fontWeight="bold">
            Σ%
          </text>
          <text x="88" y="70" fill="#38bdf8" fontSize="13" fontFamily="monospace" fontWeight="bold">
            π√
          </text>
        </g>
      )}

      {/* Little Mouth / Status LED */}
      <rect x="74" y="82" width="12" height="4" rx="2" fill="#38bdf8" opacity="0.8" />

      {/* Neck Joint */}
      <rect x="72" y="104" width="16" height="8" rx="3" fill="#475569" />

      {/* Torso / Propulsion Hover Base */}
      <path d="M52 112 C52 108 108 108 108 112 C108 128 98 136 80 136 C62 136 52 128 52 112 Z" fill="url(#pipBody)" stroke="#475569" strokeWidth="2.5" />
      {/* Chest Badge / Math Symbol */}
      <circle cx="80" cy="122" r="6" fill="#0284c7" />
      <path d="M78 122 H82 M80 120 V124" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

      {/* Floating hands */}
      <ellipse cx="42" cy="120" rx="6" ry="8" fill="url(#pipBody)" stroke="#475569" strokeWidth="1.5" />
      <ellipse cx="118" cy="120" rx="6" ry="8" fill="url(#pipBody)" stroke="#475569" strokeWidth="1.5" />
    </svg>
  );
};

export const StarfallObservatoryGraphic: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 240,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="skyGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="60%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>
        <linearGradient id="domeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
        <linearGradient id="stoneGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>

      {/* Night Sky Background Circle */}
      <circle cx="150" cy="150" r="140" fill="url(#skyGrad)" stroke="#fbbf24" strokeWidth="3" />

      {/* Moon */}
      <circle cx="220" cy="70" r="24" fill="#fef08a" opacity="0.95" />
      <circle cx="212" cy="64" r="22" fill="url(#skyGrad)" />

      {/* Stars */}
      {[
        [60, 50, 2], [90, 80, 2.5], [130, 45, 1.8], [170, 75, 2.2],
        [80, 120, 2], [240, 130, 2], [200, 35, 1.5], [50, 95, 2.8]
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#ffffff" opacity="0.8" />
      ))}

      {/* Observatory Hill */}
      <path d="M20 250 Q150 210 280 250 L280 290 L20 290 Z" fill="#064e3b" />
      <path d="M10 260 Q150 230 290 260 L290 290 L10 290 Z" fill="#022c22" />

      {/* Observatory Base Building */}
      <rect x="75" y="165" width="150" height="85" rx="6" fill="url(#stoneGrad)" stroke="#334155" strokeWidth="2.5" />
      {/* Stone Brick details */}
      <line x1="75" y1="190" x2="225" y2="190" stroke="#475569" strokeWidth="1.5" />
      <line x1="75" y1="215" x2="225" y2="215" stroke="#475569" strokeWidth="1.5" />
      <line x1="75" y1="240" x2="225" y2="240" stroke="#475569" strokeWidth="1.5" />

      {/* Arched Windows with warm yellow light */}
      <rect x="95" y="196" width="18" height="28" rx="9" fill="#fef08a" stroke="#475569" strokeWidth="2" />
      <rect x="187" y="196" width="18" height="28" rx="9" fill="#fef08a" stroke="#475569" strokeWidth="2" />
      {/* Window panes */}
      <line x1="104" y1="196" x2="104" y2="224" stroke="#713f12" strokeWidth="1" />
      <line x1="196" y1="196" x2="196" y2="224" stroke="#713f12" strokeWidth="1" />

      {/* Observatory Front Door */}
      <rect x="135" y="200" width="30" height="50" rx="4" fill="#451a03" stroke="#1c1917" strokeWidth="2" />
      <circle cx="160" cy="226" r="2.5" fill="#fbbf24" />

      {/* Observatory Balcony / Railing */}
      <rect x="68" y="156" width="164" height="10" rx="3" fill="#94a3b8" />
      <line x1="75" y1="156" x2="75" y2="166" stroke="#475569" strokeWidth="2" />
      <line x1="150" y1="156" x2="150" y2="166" stroke="#475569" strokeWidth="2" />
      <line x1="225" y1="156" x2="225" y2="166" stroke="#475569" strokeWidth="2" />

      {/* Great Copper/Blue Rotating Dome */}
      <path d="M85 156 C85 100 215 100 215 156 Z" fill="url(#domeGrad)" stroke="#0369a1" strokeWidth="3" />
      {/* Dome Ribs */}
      <path d="M115 156 C120 115 140 102 150 100" stroke="#bae6fd" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M185 156 C180 115 160 102 150 100" stroke="#bae6fd" strokeWidth="1.5" fill="none" opacity="0.6" />

      {/* Giant Brass Telescope Poking Out */}
      <g transform="rotate(-32 150 120)">
        <rect x="140" y="70" width="22" height="75" rx="3" fill="#d97706" stroke="#78350f" strokeWidth="2" />
        <rect x="137" y="60" width="28" height="12" rx="2" fill="#fbbf24" stroke="#78350f" strokeWidth="2" />
        <ellipse cx="151" cy="60" rx="14" ry="4" fill="#38bdf8" />
        <rect x="143" y="142" width="16" height="18" fill="#92400e" stroke="#78350f" strokeWidth="1.5" />
      </g>
    </svg>
  );
};

export const MoonstoneCrystal: React.FC<{ className?: string; size?: number; glow?: boolean }> = ({
  className = '',
  size = 120,
  glow = true,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="crystalGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#818cf8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="facetGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="facetGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="facetGrad3" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="pedestalGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* Aura Glow */}
      {glow && <circle cx="70" cy="60" r="50" fill="url(#crystalGlow)" />}

      {/* Pedestal Base */}
      <path d="M42 110 L98 110 L90 125 L50 125 Z" fill="url(#pedestalGrad)" stroke="#78350f" strokeWidth="2" />
      <rect x="46" y="105" width="48" height="6" rx="2" fill="#fde68a" stroke="#78350f" strokeWidth="1.5" />
      <circle cx="70" cy="118" r="3" fill="#ef4444" />

      {/* Pedestal Claws holding the gem */}
      <path d="M52 105 Q56 90 60 85" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
      <path d="M88 105 Q84 90 80 85" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />

      {/* The Moonstone Crystal Facets */}
      {/* Top Point */}
      <polygon points="70,18 88,48 52,48" fill="url(#facetGrad1)" stroke="#1e40af" strokeWidth="1.5" />
      {/* Center Top Triangle */}
      <polygon points="70,18 70,72 52,48" fill="#bae6fd" stroke="#1e40af" strokeWidth="1.5" />
      <polygon points="70,18 88,48 70,72" fill="#7dd3fc" stroke="#1e40af" strokeWidth="1.5" />
      {/* Side Triangles */}
      <polygon points="52,48 70,72 38,72" fill="url(#facetGrad2)" stroke="#1e40af" strokeWidth="1.5" />
      <polygon points="88,48 102,72 70,72" fill="url(#facetGrad3)" stroke="#1e40af" strokeWidth="1.5" />
      {/* Bottom Diamond Pyramid */}
      <polygon points="38,72 70,72 70,98" fill="#1d4ed8" stroke="#1e40af" strokeWidth="1.5" />
      <polygon points="102,72 70,72 70,98" fill="#2563eb" stroke="#1e40af" strokeWidth="1.5" />
      <polygon points="70,72 70,98 55,85" fill="#3b82f6" stroke="#1e40af" strokeWidth="1.5" />

      {/* Sparkles */}
      <polygon points="30,35 32,40 37,42 32,44 30,49 28,44 23,42 28,40" fill="#fef08a" />
      <polygon points="108,30 110,34 114,36 110,38 108,42 106,38 102,36 106,34" fill="#ffffff" />
      <circle cx="70" cy="50" r="2.5" fill="#ffffff" opacity="0.9" />
    </svg>
  );
};
