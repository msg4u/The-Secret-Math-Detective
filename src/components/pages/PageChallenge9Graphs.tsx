import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { BarChart3, CheckCircle2, Lightbulb, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge9Graphs: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
  const [spikeDiff, setSpikeDiff] = useState(userAnswer);
  const [isCorrect, setIsCorrect] = useState(userAnswer === '25');

  const wings = [
    { name: 'Foyer', kw: 15, color: '#38bdf8' },
    { name: 'Planetarium', kw: 25, color: '#818cf8' },
    { name: 'Dome', kw: 40, color: '#f59e0b' },
    { name: 'Garden', kw: 20, color: '#10b981' },
    { name: 'Vault', kw: 65, color: '#ef4444' },
  ];

  const handleCheck = () => {
    if (spikeDiff.trim() === '25') {
      setIsCorrect(true);
      onAnswerChange?.('25');
      onSolved?.();
      confetti({ particleCount: 35, spread: 55, origin: { y: 0.6 } });
    }
  };

  return (
    <PageContainer
      pageNumber={13}
      title="Graphs & Data"
      subtitle="The Midnight Power Grid"
      categoryBadge="Challenge 9"
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>
            When the Moonstone vault safe was tampered with, the power grid recorded a massive spike in energy draw.
            Analyze the bar chart recorded by the central generator between 11:30 PM and midnight:
          </p>
        </div>

        {/* Bar Chart SVG Component (From Image Preview) */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center py-2 bg-amber-50/50 rounded-2xl border border-amber-900/10 p-4">
          <div className="relative">
            <svg width="260" height="190" viewBox="0 0 280 200" className="bg-white rounded-xl shadow-xs border border-slate-300">
              {/* Y Axis Grid lines and labels (0, 20, 40, 60, 80 kW) */}
              {[0, 20, 40, 60, 80].map((val, i) => {
                const y = 160 - (val / 80) * 140;
                return (
                  <g key={val}>
                    <line x1="40" y1={y} x2="260" y2={y} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="32" y={y + 3} fill="#64748b" fontSize="9" fontWeight="bold" textAnchor="end">
                      {val}
                    </text>
                  </g>
                );
              })}

              {/* Y Axis line and label */}
              <line x1="40" y1="20" x2="40" y2="160" stroke="#334155" strokeWidth="2" />
              <text x="14" y="90" fill="#334155" fontSize="8" fontWeight="bold" transform="rotate(-90 14 90)" textAnchor="middle">
                Kilowatts (kW)
              </text>

              {/* X Axis line */}
              <line x1="40" y1="160" x2="260" y2="160" stroke="#334155" strokeWidth="2" />

              {/* Bars */}
              {wings.map((w, idx) => {
                const barWidth = 28;
                const barHeight = (w.kw / 80) * 140;
                const x = 55 + idx * 42;
                const y = 160 - barHeight;
                return (
                  <g key={w.name}>
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barHeight}
                      rx="3"
                      fill={isEco ? '#475569' : w.color}
                      stroke="#1e293b"
                      strokeWidth="1.5"
                    />
                    <text x={x + barWidth / 2} y={y - 4} fill="#0f172a" fontSize="9" fontWeight="bold" textAnchor="middle">
                      {w.kw}
                    </text>
                    <text x={x + barWidth / 2} y="174" fill="#334155" fontSize="8" fontWeight="bold" textAnchor="middle">
                      {w.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Graph Analysis Questions */}
          <div className="flex-1 space-y-2 text-xs font-outfit">
            <span className="font-cinzel text-xs font-bold text-amber-950 block">
              Analyze the Energy Spike:
            </span>

            <div className="p-2 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-0.5">
                1. Which wing experienced the highest power surge?
              </span>
              <span className="font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                Vault (65 kW)
              </span>
            </div>

            <div className="p-2 bg-white rounded-xl border border-slate-200">
              <label className="font-bold text-slate-900 block mb-1">
                2. By how many kW did Vault exceed the Dome (40 kW)?
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={spikeDiff}
                  onChange={(e) => setSpikeDiff(e.target.value)}
                  placeholder="65 − 40 = ?"
                  className="w-24 text-center font-mono font-bold py-1 px-2 border rounded-lg focus:outline-none focus:border-amber-600"
                />
                <button
                  onClick={handleCheck}
                  className="no-print px-3 py-1 bg-amber-600 text-white font-bold rounded-lg text-xs"
                >
                  Verify
                </button>
              </div>
              {isCorrect && (
                <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Exactly 25 kW difference!
                </span>
              )}
            </div>

            <div className="p-2 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-0.5">
                3. Total power consumed across all 5 wings:
              </span>
              <span className="font-mono text-slate-700">
                15 + 25 + 40 + 20 + 65 = <strong>165 kW</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Clue Box */}
        <div
          className={`p-3.5 rounded-2xl border flex items-start gap-3 shadow-sm ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-red-50/70 border-red-300'
          }`}
        >
          <div className="p-1.5 rounded-xl bg-red-500 text-white shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="font-cinzel text-xs font-bold text-red-950 uppercase tracking-wider block">
              POWER GRID EVIDENCE:
            </span>
            <p className="font-outfit text-xs text-slate-700">
              The 25 kW electrical surge in the Vault started at 11:42 PM, proving the thief used heavy electronic laser cutters right before the alarm sounded!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-red-600" />
            <span className="font-cinzel font-bold text-slate-900">Energy Surge Difference:</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-red-100 text-red-950">
              {isCorrect ? '25 kW Spike' : '__ kW'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Power Generator Wing #09</span>
        </div>
      </div>
    </PageContainer>
  );
};
