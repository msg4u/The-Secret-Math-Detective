import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { Triangle, CheckCircle2, Lightbulb, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge5Geometry: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
  const [triangleCount, setTriangleCount] = useState(userAnswer);
  const [isCorrect, setIsCorrect] = useState(userAnswer === '10');

  const handleCheck = () => {
    if (triangleCount.trim() === '10') {
      setIsCorrect(true);
      onAnswerChange?.('10');
      onSolved?.();
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 } });
    }
  };

  return (
    <PageContainer
      pageNumber={9}
      title="Geometry Challenge"
      subtitle="The Star Pattern"
      categoryBadge="Challenge 5"
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>
            An intricate celestial star was carved into the pedestal floor beneath the Moonstone vault.
            Inspect the geometric star figure below to unlock the angle cipher.
          </p>
        </div>

        {/* Geometric Star on Dot Grid SVG (From Image Preview) */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center py-2 bg-amber-50/50 rounded-2xl border border-amber-900/10 p-3">
          <div className="relative">
            <svg width="220" height="220" viewBox="0 0 200 200" className="bg-white rounded-xl shadow-xs border border-slate-300">
              {/* Background Coordinate Dot Grid */}
              {[...Array(9)].map((_, r) =>
                [...Array(9)].map((_, c) => (
                  <circle
                    key={`${r}-${c}`}
                    cx={20 + c * 20}
                    cy={20 + r * 20}
                    r="1.2"
                    fill="#cbd5e1"
                  />
                ))
              )}

              {/* Surrounding Golden Ratio Circle */}
              <circle cx="100" cy="100" r="80" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />

              {/* 5-Pointed Star (Self-Intersecting Pentagram Lines) */}
              <polygon
                points="100,20 124,78 176,78 134,112 150,170 100,136 50,170 66,112 24,78 76,78"
                fill={isCorrect ? '#fef3c7' : '#f8fafc'}
                stroke="#1e293b"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* Pentagram Chords connecting vertices */}
              <line x1="100" y1="20" x2="150" y2="170" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="100" y1="20" x2="50" y2="170" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="24" y1="78" x2="176" y2="78" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2 2" />

              {/* Point Labels A, B, C, D, E */}
              <text x="100" y="14" fill="#b45309" fontSize="10" fontWeight="bold" textAnchor="middle">A</text>
              <text x="186" y="82" fill="#b45309" fontSize="10" fontWeight="bold">B</text>
              <text x="156" y="184" fill="#b45309" fontSize="10" fontWeight="bold">C</text>
              <text x="44" y="184" fill="#b45309" fontSize="10" fontWeight="bold" textAnchor="end">D</text>
              <text x="14" y="82" fill="#b45309" fontSize="10" fontWeight="bold" textAnchor="end">E</text>
            </svg>
          </div>

          {/* Geometry Questions List */}
          <div className="flex-1 space-y-2 text-xs font-outfit">
            <span className="font-cinzel text-xs font-bold text-amber-950 block">
              Investigate the Star Properties:
            </span>

            <div className="space-y-1.5">
              <div className="p-2 bg-white rounded-xl border border-slate-200">
                <label className="font-bold text-slate-800 block text-[11px] mb-1">
                  1. How many total triangles can you find?
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={triangleCount}
                    onChange={(e) => setTriangleCount(e.target.value)}
                    placeholder="Count..."
                    className="w-20 text-center font-bold font-mono py-1 px-2 border rounded-lg focus:outline-none focus:border-amber-600"
                  />
                  <button
                    onClick={handleCheck}
                    className="no-print px-3 py-1 bg-amber-600 text-white font-bold rounded-lg text-xs"
                  >
                    Check
                  </button>
                  {isCorrect && (
                    <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 10 Triangles!
                    </span>
                  )}
                </div>
              </div>

              <div className="p-2 bg-white rounded-xl border border-slate-200 text-[11px]">
                <span className="font-bold text-slate-800 block mb-0.5">
                  2. Are the star points Acute, Right, or Obtuse?
                </span>
                <span className="font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded">
                  Acute (36° each &lt; 90°)
                </span>
              </div>

              <div className="p-2 bg-white rounded-xl border border-slate-200 text-[11px]">
                <span className="font-bold text-slate-800 block mb-0.5">
                  3. What regular polygon is in the center of the star?
                </span>
                <span className="font-mono font-bold text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded">
                  Regular Pentagon (5 sides)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Geometry Hint Box */}
        <div
          className={`p-3.5 rounded-2xl border flex items-start gap-3 text-xs shadow-sm ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-amber-100/70 border-amber-300'
          }`}
        >
          <div className="p-1.5 rounded-xl bg-amber-400 text-slate-950 shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <span className="font-cinzel text-xs font-bold text-amber-900 uppercase tracking-wider block">
              DETECTIVE GEOMETRY BREAKDOWN:
            </span>
            <p className="font-outfit text-slate-700 mt-0.5">
              Don't just count the 5 outer small triangle points (like triangle at top point A). There are also 5 larger overlapping triangles formed across the chords (like triangles ABC, BCD, etc.). 5 + 5 = <strong>10 triangles in total!</strong>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Triangle className="w-4 h-4 text-amber-600" />
            <span className="font-cinzel font-bold text-slate-900">Total Triangles:</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-950">
              {isCorrect ? '10' : '__'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Geometry Section #05</span>
        </div>
      </div>
    </PageContainer>
  );
};
