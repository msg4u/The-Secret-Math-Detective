import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { Square, CheckCircle2, Lightbulb, Ruler } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge7AreaPerimeter: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
  const [area, setArea] = useState('');
  const [perimeter, setPerimeter] = useState('');
  const [isCorrect, setIsCorrect] = useState(userAnswer === '48');

  const handleCheck = () => {
    if (area.trim() === '48' && perimeter.trim() === '28') {
      setIsCorrect(true);
      onAnswerChange?.('48');
      onSolved?.();
      confetti({ particleCount: 35, spread: 55, origin: { y: 0.6 } });
    }
  };

  return (
    <PageContainer
      pageNumber={11}
      title="Area & Perimeter"
      subtitle="The Blueprint Mystery"
      categoryBadge="Challenge 7"
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>
            To disable the alarm laser field surrounding the inner sanctum, Detective Nova must calculate
            the exact floor <strong>Area</strong> and boundary <strong>Perimeter</strong> from the architectural blueprint:
          </p>
        </div>

        {/* Blueprint Room Diagram (From Image Preview) */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center py-2 bg-amber-50/50 rounded-2xl border border-amber-900/10 p-4">
          <div className="relative">
            <svg width="240" height="180" viewBox="0 0 240 180" className="bg-[#0f284e] rounded-xl shadow-md border-2 border-sky-400">
              {/* Grid Background */}
              {[...Array(9)].map((_, r) =>
                [...Array(12)].map((_, c) => (
                  <rect
                    key={`${r}-${c}`}
                    x={c * 20}
                    y={r * 20}
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#1e3a8a"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                ))
              )}

              {/* Main Vault Room (8 units x 6 units) */}
              <rect
                x="40"
                y="30"
                width="160"
                height="120"
                fill="#0284c7"
                fillOpacity="0.3"
                stroke="#38bdf8"
                strokeWidth="3"
              />

              {/* Laser Grid lines inside */}
              <line x1="40" y1="70" x2="200" y2="70" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="40" y1="110" x2="200" y2="110" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="93" y1="30" x2="93" y2="150" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="146" y1="30" x2="146" y2="150" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />

              {/* Dimension Labels */}
              <text x="120" y="22" fill="#fef08a" fontSize="12" fontWeight="bold" textAnchor="middle">
                Length = 8 meters
              </text>
              <text x="215" y="94" fill="#fef08a" fontSize="12" fontWeight="bold" transform="rotate(90 215 94)" textAnchor="middle">
                Width = 6 m
              </text>

              {/* Center Vault Pedestal marker */}
              <rect x="110" y="80" width="20" height="20" rx="3" fill="#fbbf24" stroke="#78350f" strokeWidth="1.5" />
              <text x="120" y="94" fill="#78350f" fontSize="10" fontWeight="bold" textAnchor="middle">💎</text>
            </svg>
          </div>

          {/* Area & Perimeter Formula Guide */}
          <div className="flex-1 space-y-2 text-xs font-outfit">
            <span className="font-cinzel text-xs font-bold text-amber-950 block">
              Architectural Formulas:
            </span>

            <div className="p-2.5 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">
                Area = Length × Width
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="8 × 6 = ?"
                  className="w-24 text-center font-mono font-bold py-1 px-2 border rounded-lg focus:outline-none focus:border-amber-600"
                />
                <span className="font-medium text-slate-600">m² (square meters)</span>
              </div>
            </div>

            <div className="p-2.5 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">
                Perimeter = 2 × (Length + Width)
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={perimeter}
                  onChange={(e) => setPerimeter(e.target.value)}
                  placeholder="2 × (8 + 6) = ?"
                  className="w-24 text-center font-mono font-bold py-1 px-2 border rounded-lg focus:outline-none focus:border-amber-600"
                />
                <span className="font-medium text-slate-600">meters</span>
              </div>
            </div>

            <button
              onClick={handleCheck}
              className="no-print w-full py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-fredoka font-bold rounded-xl text-xs shadow-sm transition-all cursor-pointer"
            >
              Verify Dimensions
            </button>
          </div>
        </div>

        {/* Clue Box */}
        <div
          className={`p-3.5 rounded-2xl border flex items-start gap-3 shadow-sm ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-amber-50/80 border-amber-300'
          }`}
        >
          <div className="p-1.5 rounded-xl bg-amber-400 text-slate-950 shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <span className="font-cinzel text-xs font-bold text-amber-900 uppercase tracking-wider block">
              VAULT CYLINDER 4 KEY:
            </span>
            <p className="font-outfit text-xs text-slate-700">
              The Area is 48 m². Look at the <strong>TENS DIGIT</strong> of the Area (the number 4 in 48).
              This sets the 4th cylinder on the master vault!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-sky-600" />
            <span className="font-cinzel font-bold text-slate-900">Vault Cylinder 4 Digit:</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-950">
              Tens Digit = {isCorrect ? '4' : '__'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Blueprint Sector #07</span>
        </div>
      </div>
    </PageContainer>
  );
};
