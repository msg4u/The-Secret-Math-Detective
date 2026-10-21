import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { TRANSLATIONS } from '../../i18n/translations';
import { Compass, Lightbulb, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageBonusMaze: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;
  const [visitedMirrors, setVisitedMirrors] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleMirror = (m: number) => {
    if (visitedMirrors.includes(m)) {
      setVisitedMirrors(visitedMirrors.filter((x) => x !== m));
    } else {
      const next = [...visitedMirrors, m];
      setVisitedMirrors(next);
      if (next.length >= 5) {
        setIsCompleted(true);
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
      }
    }
  };

  return (
    <PageContainer
      pageNumber={19}
      title={t.p19Title}
      subtitle={t.p19Subtitle}
      categoryBadge="Bonus Puzzle"
      categoryColor="bg-purple-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3 font-outfit">
        <div className="text-slate-800 text-xs leading-relaxed">
          <p>{t.p19Desc}</p>
        </div>

        {/* Laser Optics Maze SVG */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center py-2 bg-amber-50/50 rounded-2xl border border-amber-900/10 p-3">
          <div className="relative">
            <svg width="260" height="260" viewBox="0 0 260 260" className="bg-[#0f172a] rounded-xl shadow-md border-2 border-indigo-400">
              <rect x="10" y="10" width="240" height="240" fill="none" stroke="#334155" strokeWidth="2" />
              <line x1="60" y1="10" x2="60" y2="100" stroke="#334155" strokeWidth="2.5" />
              <line x1="110" y1="60" x2="110" y2="180" stroke="#334155" strokeWidth="2.5" />
              <line x1="160" y1="10" x2="160" y2="120" stroke="#334155" strokeWidth="2.5" />
              <line x1="60" y1="160" x2="160" y2="160" stroke="#334155" strokeWidth="2.5" />
              <line x1="160" y1="200" x2="250" y2="200" stroke="#334155" strokeWidth="2.5" />
              <line x1="10" y1="210" x2="110" y2="210" stroke="#334155" strokeWidth="2.5" />

              {/* Start (Laser Gun) */}
              <circle cx="35" cy="35" r="14" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
              <text x="35" y="39" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">IN</text>

              {/* Finish (Eyepiece Lens) */}
              <circle cx="225" cy="225" r="14" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
              <text x="225" y="229" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">OUT</text>

              {/* Numbered Mirrors (Prisms) */}
              {[
                { num: 1, x: 35, y: 130 },
                { num: 2, x: 85, y: 130 },
                { num: 3, x: 85, y: 35 },
                { num: 4, x: 135, y: 35 },
                { num: 5, x: 135, y: 225 },
                { num: 6, x: 185, y: 225 },
                { num: 7, x: 185, y: 130 },
                { num: 8, x: 225, y: 130 },
              ].map((m) => {
                const isHit = visitedMirrors.includes(m.num);
                return (
                  <g key={m.num} onClick={() => toggleMirror(m.num)} className="cursor-pointer group">
                    <rect
                      x={m.x - 10}
                      y={m.y - 10}
                      width="20"
                      height="20"
                      rx="4"
                      fill={isHit ? '#fbbf24' : '#1e293b'}
                      stroke={isHit ? '#f59e0b' : '#38bdf8'}
                      strokeWidth="2"
                    />
                    <text
                      x={m.x}
                      y={m.y + 4}
                      fill={isHit ? '#451a03' : '#38bdf8'}
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {m.num}
                    </text>
                  </g>
                );
              })}

              {isCompleted && (
                <polyline
                  points="35,35 35,130 85,130 85,35 135,35 135,225 225,225"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              )}
            </svg>
          </div>

          <div className="flex-1 space-y-2 text-xs">
            <span className="font-cinzel text-xs font-bold text-amber-950 block">
              {printSettings.language === 'ro' ? 'Reguli de Refracție Laser:' :
               printSettings.language === 'de' ? 'Laser-Reflexionsregeln:' :
               printSettings.language === 'fr' ? 'Règles de Réflexion Laser :' :
               printSettings.language === 'es' ? 'Reglas de Refracción Láser:' :
               'Optics Path Rules:'}
            </span>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-slate-700 space-y-1">
              <div>1. Reflect at 90° angles using mirrors #1 → #2 → #3 → #4 → #5 → OUT.</div>
              <div>2. Avoid the opaque security walls.</div>
            </div>
            {isCompleted && (
              <div className="p-2 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-300 flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Optics Beam Aligned!</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-purple-600" />
            <span className="font-cinzel font-bold text-slate-900">
              {printSettings.language === 'ro' ? 'Stare Aliniere Laser:' :
               printSettings.language === 'de' ? 'Laser-Status:' :
               printSettings.language === 'fr' ? 'Statut du Faisceau :' :
               printSettings.language === 'es' ? 'Estado del Haz Láser:' :
               'Optics Laser Status:'}
            </span>
            <span className="font-mono font-bold text-purple-800">
              {isCompleted ? 'CALIBRATED' : 'ALIGNMENT NEEDED'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Bonus Puzzle #01</span>
        </div>
      </div>
    </PageContainer>
  );
};

export const PageBonusCrossword: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;

  const crosswordClues = [
    { num: 1, dir: 'Across', clue: 'The total distance around the outside edge of a shape (9 letters)', ans: 'PERIMETER' },
    { num: 2, dir: 'Across', clue: 'A number that represents equal parts of a whole (8 letters)', ans: 'FRACTION' },
    { num: 3, dir: 'Across', clue: 'An angle measuring strictly less than 90 degrees (5 letters)', ans: 'ACUTE' },
    { num: 4, dir: 'Down', clue: 'A pair of numbers (x, y) describing a point on a grid (11 letters)', ans: 'COORDINATES' },
    { num: 5, dir: 'Down', clue: 'The point where two sides of a polygon meet (6 letters)', ans: 'VERTEX' },
    { num: 6, dir: 'Down', clue: 'The amount of surface space inside a flat 2D shape (4 letters)', ans: 'AREA' },
  ];

  return (
    <PageContainer
      pageNumber={20}
      title={t.p20Title}
      subtitle={t.p20Subtitle}
      categoryBadge="Bonus Puzzle"
      categoryColor="bg-purple-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3 font-outfit">
        <div className="text-slate-800 text-xs leading-relaxed">
          <p>{t.p20Desc}</p>
        </div>

        {/* Crossword Grid Graphic */}
        <div className="p-3 bg-amber-50/60 rounded-2xl border border-amber-900/15 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="relative">
            <svg width="220" height="180" viewBox="0 0 220 180" className="bg-white rounded-xl shadow-xs border border-slate-300">
              {['A', 'C', 'U', 'T', 'E'].map((letter, i) => (
                <g key={i}>
                  <rect x={30 + i * 22} y="20" width="22" height="22" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
                  <text x={41 + i * 22} y="36" fill="#1e293b" fontSize="11" fontWeight="bold" textAnchor="middle">{letter}</text>
                  {i === 0 && <text x="32" y="28" fill="#64748b" fontSize="6">3</text>}
                </g>
              ))}

              {['F', 'R', 'A', 'C', 'T', 'I', 'O', 'N'].map((letter, i) => (
                <g key={i}>
                  <rect x={20 + i * 22} y="64" width="22" height="22" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
                  <text x={31 + i * 22} y="80" fill="#1e293b" fontSize="11" fontWeight="bold" textAnchor="middle">{letter}</text>
                  {i === 0 && <text x="22" y="72" fill="#64748b" fontSize="6">2</text>}
                </g>
              ))}

              {['P', 'E', 'R', 'I', 'M', 'E', 'T', 'E', 'R'].map((letter, i) => (
                <g key={i}>
                  <rect x={10 + i * 22} y="108" width="22" height="22" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
                  <text x={21 + i * 22} y="124" fill="#1e293b" fontSize="11" fontWeight="bold" textAnchor="middle">{letter}</text>
                  {i === 0 && <text x="12" y="116" fill="#64748b" fontSize="6">1</text>}
                </g>
              ))}
            </svg>
          </div>

          <div className="flex-1 space-y-1.5 text-xs">
            <span className="font-cinzel text-xs font-bold text-amber-950 block">
              {printSettings.language === 'ro' ? 'Indicii Cuvinte Încrucișate:' :
               printSettings.language === 'de' ? 'Kreuzworträtsel-Hinweise:' :
               printSettings.language === 'fr' ? 'Indices Mots Croisés :' :
               printSettings.language === 'es' ? 'Pistas del Crucigrama:' :
               'Crossword Clues:'}
            </span>
            <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
              {crosswordClues.map((c) => (
                <div key={c.num} className="p-1.5 bg-white rounded-lg border border-slate-200 text-[11px]">
                  <span className="font-bold text-purple-900">{c.num}. ({c.dir}):</span> {c.clue}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="font-cinzel font-bold text-slate-900">
              {printSettings.language === 'ro' ? 'Vocabular Matematic:' :
               printSettings.language === 'de' ? 'Mathematischer Wortschatz:' :
               printSettings.language === 'fr' ? 'Vocabulaire Mathématique :' :
               printSettings.language === 'es' ? 'Vocabulario Matemático:' :
               'Math Vocabulary:'}
            </span>
            <span className="font-mono font-bold text-purple-800">Master Level</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Bonus Puzzle #02</span>
        </div>
      </div>
    </PageContainer>
  );
};
