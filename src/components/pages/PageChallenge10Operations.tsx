import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { Cog, CheckCircle2, Lightbulb, Binary } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge10Operations: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
  const [ans, setAns] = useState(userAnswer);
  const [isCorrect, setIsCorrect] = useState(userAnswer === '68');

  const handleCheck = () => {
    if (ans.trim() === '68') {
      setIsCorrect(true);
      onAnswerChange?.('68');
      onSolved?.();
      confetti({ particleCount: 35, spread: 55, origin: { y: 0.6 } });
    }
  };

  return (
    <PageContainer
      pageNumber={14}
      title="Order of Operations"
      subtitle="The Gear Safe Mechanism"
      categoryBadge="Challenge 10"
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>
            The backup gear compartment is locked behind a rotational mechanical cipher.
            You must follow the strict <strong>Order of Operations (PEMDAS)</strong> to turn the gears in the right order!
          </p>
        </div>

        {/* PEMDAS Gear Visualizer */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center py-2 bg-amber-50/50 rounded-2xl border border-amber-900/10 p-4">
          {/* Animated Gear Wheel Graphic */}
          <div className="relative">
            <svg width="180" height="180" viewBox="0 0 160 160" className="drop-shadow-sm">
              <circle cx="80" cy="80" r="68" fill={isEco ? '#f1f5f9' : '#0f172a'} stroke="#d97706" strokeWidth="4" />
              {/* Gear cogs around perimeter */}
              {[...Array(8)].map((_, i) => {
                const angle = i * 45;
                return (
                  <rect
                    key={i}
                    x="74"
                    y="4"
                    width="12"
                    height="12"
                    rx="2"
                    fill="#d97706"
                    transform={`rotate(${angle} 80 80)`}
                  />
                );
              })}
              {/* Inner dials */}
              <circle cx="80" cy="80" r="46" fill={isEco ? '#ffffff' : '#1e293b'} stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
              <text x="80" y="86" fill={isCorrect ? '#34d399' : '#fbbf24'} fontSize="24" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                {isCorrect ? '68' : '⚙️'}
              </text>
            </svg>
          </div>

          {/* Equation & Calculation Steps */}
          <div className="flex-1 space-y-2 text-xs font-outfit">
            <span className="font-cinzel text-xs font-bold text-amber-950 block">
              Solve the Mechanical Expression:
            </span>

            <div className="p-3 bg-white rounded-xl border border-slate-300 font-mono text-center">
              <div className="text-lg font-bold text-slate-900 tracking-wider">
                (12 + 6) × 4 − 8 ÷ 2
              </div>
            </div>

            <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-slate-700 space-y-1 font-mono text-[11px]">
              <div><strong>P (Parentheses):</strong> (12 + 6) = 18</div>
              <div><strong>M & D (Multiply & Divide):</strong> 18 × 4 = 72, and 8 ÷ 2 = 4</div>
              <div><strong>S (Subtract):</strong> 72 − 4 = <strong>68</strong></div>
            </div>
          </div>
        </div>

        {/* Input Field */}
        <div className="space-y-2 font-outfit">
          <label className="font-fredoka text-base font-bold text-slate-900 block">
            What is the final safe combination number?
          </label>

          <div className="flex items-center gap-3">
            <input
              type="text"
              value={ans}
              onChange={(e) => setAns(e.target.value)}
              placeholder="e.g. 68"
              className="w-28 text-center text-xl font-bold font-mono py-1.5 px-3 rounded-xl border-2 border-amber-900/30 bg-white focus:outline-none focus:border-amber-600 shadow-sm"
            />
            <button
              onClick={handleCheck}
              className="no-print px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-fredoka font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer"
            >
              Unlock Gear
            </button>
            {isCorrect && (
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> Safe Code 68 Confirmed!
              </span>
            )}
          </div>
        </div>

        {/* Clue Box */}
        <div
          className={`p-3.5 rounded-2xl border flex items-start gap-3 shadow-sm ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-amber-100/70 border-amber-300'
          }`}
        >
          <div className="p-1.5 rounded-xl bg-amber-400 text-slate-950 shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <span className="font-cinzel text-xs font-bold text-amber-900 uppercase tracking-wider block">
              VAULT CYLINDER 5 KEY:
            </span>
            <p className="font-outfit text-xs text-slate-700">
              The gear safe unlocked with number 68. The <strong>UNITS DIGIT</strong> of 68 is <strong>8</strong>.
              This provides the fifth and final cylinder digit to open the Moonstone Vault!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Cog className="w-4 h-4 text-amber-600" />
            <span className="font-cinzel font-bold text-slate-900">Vault Cylinder 5 Digit:</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-950">
              Units Digit = {isCorrect ? '8' : '__'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Gear Mechanism #10</span>
        </div>
      </div>
    </PageContainer>
  );
};
