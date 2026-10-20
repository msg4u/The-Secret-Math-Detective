import React from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { TRANSLATIONS } from '../../i18n/translations';
import { MapPin, Navigation, Compass } from 'lucide-react';

export const PageObservatoryMap: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;

  const mapRooms = [
    { num: 1, name: 'Grand Foyer', challenge: 'Star Code Sequence', x: 20, y: 75 },
    { num: 2, name: 'Clock Gallery', challenge: 'Time Calculations', x: 45, y: 80 },
    { num: 3, name: 'Chart Room', challenge: 'Coordinate Plotting', x: 75, y: 70 },
    { num: 4, name: 'Council Chamber', challenge: 'Suspect Logic', x: 80, y: 48 },
    { num: 5, name: 'Telescope Dome', challenge: 'Star Geometry', x: 50, y: 45 },
    { num: 6, name: 'Optics Lab', challenge: 'Lens Fractions', x: 22, y: 48 },
    { num: 7, name: 'Blueprinted Hall', challenge: 'Area & Perimeter', x: 18, y: 25 },
    { num: 8, name: 'Star Archives', challenge: 'Multiplication Cipher', x: 45, y: 22 },
    { num: 9, name: 'Power Room', challenge: 'Energy Bar Graphs', x: 78, y: 24 },
    { num: 10, name: 'Gearworks', challenge: 'Order of Operations', x: 85, y: 12 },
    { num: 11, name: 'Botanical Path', challenge: 'Footprint Measure', x: 50, y: 10 },
    { num: 12, name: 'Moonstone Vault', challenge: 'Final Code Lock', x: 50, y: 30 },
  ];

  return (
    <PageContainer
      pageNumber={4}
      title={t.mapTitle}
      subtitle={t.mapSubtitle}
      categoryBadge={t.mapBadge}
      categoryColor="bg-sky-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-700 font-outfit">
          <p>{t.mapDesc}</p>
          <div className="flex items-center gap-1 text-sky-800 font-mono font-bold">
            <Compass className="w-4 h-4 text-sky-600" />
            <span>{t.northDome}</span>
          </div>
        </div>

        {/* Blueprint Map Canvas / SVG */}
        <div
          className={`relative w-full h-[400px] rounded-2xl border-2 overflow-hidden shadow-inner flex items-center justify-center ${
            isEco
              ? 'bg-slate-50 border-slate-400'
              : 'bg-gradient-to-b from-[#0a192f] via-[#0f284e] to-[#0a192f] border-sky-400/30'
          }`}
        >
          {/* Blueprint Grid Lines */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Observatory Architectural Floorplan SVG */}
          <svg className="w-full h-full" viewBox="0 0 500 350" fill="none">
            {/* Outer Wall Boundary */}
            <rect x="30" y="20" width="440" height="310" rx="20" stroke={isEco ? '#334155' : '#38bdf8'} strokeWidth="2.5" strokeDasharray="6 4" fill="none" opacity="0.4" />

            {/* Central Dome Circle */}
            <circle cx="250" cy="175" r="70" stroke={isEco ? '#0284c7' : '#7dd3fc'} strokeWidth="3" fill={isEco ? '#e0f2fe' : '#0369a1'} fillOpacity="0.2" />
            <circle cx="250" cy="175" r="28" stroke={isEco ? '#f59e0b' : '#fef08a'} strokeWidth="2" strokeDasharray="3 3" fill={isEco ? '#fef3c7' : '#fbbf24'} fillOpacity="0.15" />

            {/* Connecting Corridors & Rooms */}
            {/* Grand Foyer (Bottom Center/Left) */}
            <rect x="60" y="230" width="90" height="70" rx="8" fill={isEco ? '#f1f5f9' : '#1e293b'} stroke="#64748b" strokeWidth="2" />
            {/* Clock Tower (Bottom Center) */}
            <rect x="200" y="240" width="100" height="60" rx="8" fill={isEco ? '#f1f5f9' : '#1e293b'} stroke="#64748b" strokeWidth="2" />
            {/* Star Chart Gallery (Bottom Right) */}
            <rect x="350" y="230" width="90" height="70" rx="8" fill={isEco ? '#f1f5f9' : '#1e293b'} stroke="#64748b" strokeWidth="2" />

            {/* Optics Lab (West Wing) */}
            <rect x="50" y="130" width="90" height="75" rx="8" fill={isEco ? '#f1f5f9' : '#1e293b'} stroke="#64748b" strokeWidth="2" />
            {/* Council Chamber (East Wing) */}
            <rect x="360" y="130" width="90" height="75" rx="8" fill={isEco ? '#f1f5f9' : '#1e293b'} stroke="#64748b" strokeWidth="2" />

            {/* North Wing - Greenhouse & Vault */}
            <rect x="60" y="40" width="100" height="65" rx="8" fill={isEco ? '#f1f5f9' : '#1e293b'} stroke="#64748b" strokeWidth="2" />
            <rect x="200" y="40" width="100" height="65" rx="8" fill={isEco ? '#ecfdf5' : '#064e3b'} fillOpacity="0.5" stroke="#10b981" strokeWidth="2" />
            <rect x="340" y="40" width="100" height="65" rx="8" fill={isEco ? '#f1f5f9' : '#1e293b'} stroke="#64748b" strokeWidth="2" />

            {/* Pathway connecting the checkpoints */}
            <path
              d="M105,265 L250,270 L395,265 L405,167 L250,175 L95,167 L110,72 L250,72 L390,72 L250,140"
              stroke="#fbbf24"
              strokeWidth="2.5"
              strokeDasharray="5 5"
              fill="none"
              opacity="0.8"
            />

            {/* Checkpoint Markers 1 to 12 */}
            {[
              { n: 1, x: 105, y: 265, label: 'Grand Foyer' },
              { n: 2, x: 250, y: 270, label: 'Clock Tower' },
              { n: 3, x: 395, y: 265, label: 'Star Charts' },
              { n: 4, x: 405, y: 167, label: 'Council Room' },
              { n: 5, x: 250, y: 175, label: 'Telescope Dome' },
              { n: 6, x: 95, y: 167, label: 'Optics Lab' },
              { n: 7, x: 110, y: 72, label: 'Blueprint Hall' },
              { n: 8, x: 200, y: 72, label: 'Archives' },
              { n: 9, x: 290, y: 72, label: 'Power Grid' },
              { n: 10, x: 390, y: 72, label: 'Gearworks' },
              { n: 11, x: 250, y: 55, label: 'Botanical Path' },
              { n: 12, x: 250, y: 140, label: 'Moonstone Vault' },
            ].map((pt) => (
              <g key={pt.n} className="cursor-pointer group">
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={pt.n === 12 ? 14 : 11}
                  fill={pt.n === 12 ? '#ef4444' : '#0284c7'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text
                  x={pt.x}
                  y={pt.y + 4}
                  fill="#ffffff"
                  fontSize={pt.n === 12 ? '11' : '10'}
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  textAnchor="middle"
                >
                  {pt.n}
                </text>
                <text
                  x={pt.x}
                  y={pt.y - 14}
                  fill={isEco ? '#1e293b' : '#fef08a'}
                  fontSize="8"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  textAnchor="middle"
                  className="drop-shadow"
                >
                  {pt.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Room Index & Legend */}
        <div
          className={`p-3 rounded-xl border text-xs ${
            isEco ? 'bg-slate-100 border-slate-300' : 'bg-slate-900/90 text-slate-200 border-amber-500/20'
          }`}
        >
          <div className="font-cinzel text-[11px] font-bold text-amber-500 uppercase tracking-wider mb-1 flex items-center gap-1">
            <Navigation className="w-3.5 h-3.5 text-amber-400" />
            <span>Master Checkpoint Index</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1 font-outfit text-[11px]">
            {mapRooms.map((r) => (
              <div key={r.num} className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-[9px] shrink-0">
                  {r.num}
                </span>
                <span className="truncate">{r.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
