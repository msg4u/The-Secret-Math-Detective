import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { PieChart, CheckCircle2, Lightbulb, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge6Fractions: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
  const [sumAns, setSumAns] = useState(userAnswer);
  const [isCorrect, setIsCorrect] = useState(userAnswer === '1/2' || userAnswer === '2/4');

  const handleCheck = () => {
    if (sumAns.trim() === '1/2' || sumAns.trim() === '2/4' || sumAns.trim() === '4/8') {
      setIsCorrect(true);
      onAnswerChange?.('1/2');
      onSolved?.();
      confetti({ particleCount: 35, spread: 55, origin: { y: 0.6 } });
    }
  };

  return (
    <PageContainer
      pageNumber={10}
      title="Fractions Challenge"
      subtitle="The Lens Calibration"
      categoryBadge="Challenge 6"
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>
            The thief cracked the telescope focus lens into fraction segments!
            Detective Nova found two surviving crystal shards. Add the two fractions together to see how much of the lens is restored:
          </p>
        </div>

        {/* Visual Fractions Diagram (From Image Preview) */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center py-3 bg-amber-50/50 rounded-2xl border border-amber-900/10 p-4">
          {/* Fraction 1: 1/4 circle */}
          <div className="flex flex-col items-center">
            <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-sm">
              <circle cx="50" cy="50" r="44" fill={isEco ? '#ffffff' : '#f8fafc'} stroke="#78350f" strokeWidth="2.5" />
              {/* Slices 4 */}
              <line x1="50" y1="6" x2="50" y2="94" stroke="#78350f" strokeWidth="2" />
              <line x1="6" y1="50" x2="94" y2="50" stroke="#78350f" strokeWidth="2" />
              {/* Shaded top-right slice (1/4) */}
              <path d="M50 50 L50 6 A 44 44 0 0 1 94 50 Z" fill="#f59e0b" />
              {/* Little pepperoni dots for fun pizza lens feel */}
              <circle cx="68" cy="32" r="3" fill="#dc2626" />
              <circle cx="78" cy="42" r="2.5" fill="#dc2626" />
            </svg>
            <div className="mt-2 text-center">
              <span className="font-mono text-xl font-bold text-slate-900 block leading-tight">1</span>
              <div className="w-6 h-[2px] bg-slate-900 mx-auto" />
              <span className="font-mono text-xl font-bold text-slate-900 block leading-tight">4</span>
            </div>
          </div>

          <div className="font-fredoka text-3xl font-black text-amber-800">+</div>

          {/* Fraction 2: 2/8 circle / triangle */}
          <div className="flex flex-col items-center">
            <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-sm">
              <circle cx="50" cy="50" r="44" fill={isEco ? '#ffffff' : '#f8fafc'} stroke="#0284c7" strokeWidth="2.5" />
              {/* Slices 8 */}
              <line x1="50" y1="6" x2="50" y2="94" stroke="#0284c7" strokeWidth="1.5" />
              <line x1="6" y1="50" x2="94" y2="50" stroke="#0284c7" strokeWidth="1.5" />
              <line x1="18.9" y1="18.9" x2="81.1" y2="81.1" stroke="#0284c7" strokeWidth="1.5" />
              <line x1="18.9" y1="81.1" x2="81.1" y2="18.9" stroke="#0284c7" strokeWidth="1.5" />
              {/* Shaded 2 slices of 8 (top right quadrant) */}
              <path d="M50 50 L50 6 A 44 44 0 0 1 81.1 18.9 Z" fill="#38bdf8" />
              <path d="M50 50 L81.1 18.9 A 44 44 0 0 1 94 50 Z" fill="#38bdf8" />
            </svg>
            <div className="mt-2 text-center">
              <span className="font-mono text-xl font-bold text-sky-900 block leading-tight">2</span>
              <div className="w-6 h-[2px] bg-sky-900 mx-auto" />
              <span className="font-mono text-xl font-bold text-sky-900 block leading-tight">8</span>
            </div>
          </div>

          <div className="font-fredoka text-3xl font-black text-amber-800">=</div>

          {/* Result Target Lens (1/2 filled) */}
          <div className="flex flex-col items-center">
            <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-sm">
              <circle cx="50" cy="50" r="44" fill={isEco ? '#ffffff' : '#f8fafc'} stroke="#10b981" strokeWidth="2.5" strokeDasharray="3 2" />
              {/* 1/2 Shaded when solved */}
              {isCorrect && (
                <path d="M50 6 A 44 44 0 0 1 50 94 Z" fill="#34d399" opacity="0.8" />
              )}
              <line x1="50" y1="6" x2="50" y2="94" stroke="#059669" strokeWidth="2" />
              <text x="50" y="56" fill="#047857" fontSize={isCorrect ? '18' : '24'} fontWeight="bold" textAnchor="middle">
                {isCorrect ? '1/2' : '?'}
              </text>
            </svg>
            <div className="mt-2 text-center">
              <span className="font-mono text-xl font-bold text-emerald-900 block leading-tight">
                {isCorrect ? '1' : '?'}
              </span>
              <div className="w-6 h-[2px] bg-emerald-900 mx-auto" />
              <span className="font-mono text-xl font-bold text-emerald-900 block leading-tight">
                {isCorrect ? '2' : '?'}
              </span>
            </div>
          </div>
        </div>

        {/* Input & Simplification Steps */}
        <div className="space-y-2 font-outfit">
          <label className="font-fredoka text-base font-bold text-slate-900 block">
            What is 1/4 + 2/8 in simplest form?
          </label>

          <div className="flex items-center gap-3">
            <input
              type="text"
              value={sumAns}
              onChange={(e) => setSumAns(e.target.value)}
              placeholder="e.g. 1/2"
              className="w-28 text-center text-xl font-bold font-mono py-1.5 px-3 rounded-xl border-2 border-amber-900/30 bg-white focus:outline-none focus:border-amber-600 shadow-sm"
            />
            <button
              onClick={handleCheck}
              className="no-print px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-fredoka font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer"
            >
              Verify Fraction
            </button>
            {isCorrect && (
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> Correct! 1/2 Restored!
              </span>
            )}
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-mono">
            <strong>Simplification Steps:</strong><br />
            1. Simplify 2/8 by dividing top & bottom by 2 → 2/8 = 1/4.<br />
            2. Add like denominators: 1/4 + 1/4 = 2/4.<br />
            3. Reduce 2/4 by dividing by 2 → <strong>1/2 (Exactly Half)</strong>.
          </div>
        </div>

        {/* Clue Box */}
        <div
          className={`p-3.5 rounded-2xl border flex items-start gap-3 shadow-sm ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-emerald-50/70 border-emerald-300'
          }`}
        >
          <div className="p-1.5 rounded-xl bg-emerald-500 text-white shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <span className="font-cinzel text-xs font-bold text-emerald-950 uppercase tracking-wider block">
              VAULT CYLINDER 3 KEY:
            </span>
            <p className="font-outfit text-xs text-slate-700">
              The unsimplified numerator of 2/4 is <strong>2</strong>. This number sets the 3rd lock cylinder on the Moonstone Vault!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <PieChart className="w-4 h-4 text-emerald-600" />
            <span className="font-cinzel font-bold text-slate-900">Vault Cylinder 3 Digit:</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-950">
              Numerator = {isCorrect ? '2' : '__'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Lens Optics Lab #06</span>
        </div>
      </div>
    </PageContainer>
  );
};
