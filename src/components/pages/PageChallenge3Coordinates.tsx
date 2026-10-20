import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { CHALLENGE_DATA } from '../../data/workbookData';
import { Crosshair, CheckCircle2, Lightbulb, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge3Coordinates: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);
  const [coordAnswers, setCoordAnswers] = useState({ key: '', lens: '', star: '', print: '' });
  const [isSolved, setIsSolved] = useState(userAnswer === 'STAR');

  const checkAnswer = () => {
    setIsSolved(true);
    onAnswerChange?.('STAR');
    onSolved?.();
    confetti({ particleCount: 35, spread: 55, origin: { y: 0.6 } });
  };

  const gridPoints = [
    { label: 'Key', x: 3, y: 7, symbol: '🔑', desc: 'Brass Key' },
    { label: 'Lens', x: 5, y: 2, symbol: '🔍', desc: 'Dropped Lens' },
    { label: 'Star', x: 8, y: 6, symbol: '⭐', desc: 'Star Fragment' },
    { label: 'Print', x: 2, y: 4, symbol: '👣', desc: 'Muddy Boot Print' },
  ];

  return (
    <PageContainer
      pageNumber={7}
      title="Coordinates Challenge"
      subtitle="The Star Chart Grid"
      categoryBadge="Challenge 3"
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        {/* Intro */}
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>
            Pip's sensors scanned the observatory floor and mapped four pieces of evidence onto a star coordinate grid.
            Remember: to locate any coordinate (x, y), start at the origin (0,0), move <strong>across (x)</strong> first, then <strong>up (y)</strong>!
          </p>
        </div>

        {/* 10x10 Coordinate Grid SVG */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center py-2 bg-amber-50/50 rounded-2xl border border-amber-900/10 p-3">
          <div className="relative">
            <svg width="260" height="260" viewBox="0 0 280 280" className="bg-white rounded-xl shadow-xs border border-slate-300">
              {/* Grid Lines */}
              {[...Array(11)].map((_, i) => (
                <g key={i}>
                  {/* Vertical grid line */}
                  <line
                    x1={30 + i * 22}
                    y1={20}
                    x2={30 + i * 22}
                    y2={240}
                    stroke={i === 0 ? '#1e293b' : '#e2e8f0'}
                    strokeWidth={i === 0 ? 2 : 1}
                  />
                  {/* Horizontal grid line */}
                  <line
                    x1={30}
                    y1={240 - i * 22}
                    x2={250}
                    y2={240 - i * 22}
                    stroke={i === 0 ? '#1e293b' : '#e2e8f0'}
                    strokeWidth={i === 0 ? 2 : 1}
                  />
                  {/* X Axis Numbers (0 to 10) */}
                  <text x={30 + i * 22} y={256} fill="#64748b" fontSize="9" fontWeight="bold" textAnchor="middle">
                    {i}
                  </text>
                  {/* Y Axis Numbers (0 to 10) */}
                  <text x={20} y={244 - i * 22} fill="#64748b" fontSize="9" fontWeight="bold" textAnchor="end">
                    {i}
                  </text>
                </g>
              ))}

              {/* Axis Labels */}
              <text x={262} y={244} fill="#0f172a" fontSize="10" fontWeight="bold">X</text>
              <text x={30} y={12} fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Y</text>

              {/* Plotted Evidence Points */}
              {gridPoints.map((pt, idx) => {
                const px = 30 + pt.x * 22;
                const py = 240 - pt.y * 22;
                return (
                  <g
                    key={idx}
                    className="cursor-pointer group"
                    onClick={() => setSelectedPoint(`${pt.desc} at (${pt.x}, ${pt.y})`)}
                  >
                    <circle cx={px} cy={py} r={7} fill="#ef4444" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
                    <text x={px} y={py + 3.5} fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                      {pt.symbol}
                    </text>
                    <text x={px} y={py - 10} fill="#1e293b" fontSize="8" fontWeight="bold" textAnchor="middle" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      ({pt.x},{pt.y})
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Coordinate Questions List */}
          <div className="flex-1 space-y-2 text-xs font-outfit">
            <span className="font-cinzel text-xs font-bold text-amber-950 block">
              Identify the Evidence Coordinates:
            </span>

            {[
              { label: '🔑 Brass Key', correct: '(3, 7)', field: 'key' },
              { label: '🔍 Dropped Lens', correct: '(5, 2)', field: 'lens' },
              { label: '⭐ Star Fragment', correct: '(8, 6)', field: 'star' },
              { label: '👣 Muddy Print', correct: '(2, 4)', field: 'print' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-1.5 bg-white rounded-lg border border-slate-200">
                <span className="font-medium text-slate-800">{item.label}</span>
                <span className="font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {item.correct}
                </span>
              </div>
            ))}

            <div className="pt-1">
              <label className="font-bold text-slate-800 block text-[11px]">
                Plot Mystery Item at (7, 9):
              </label>
              <div className="text-[11px] text-slate-600 font-hand font-bold">
                Draw a star at coordinate (7, 9) on your chart!
              </div>
            </div>
          </div>
        </div>

        {/* Deduction Box */}
        <div
          className={`p-3.5 rounded-2xl border-2 flex items-start gap-3 shadow-sm ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-sky-50/80 border-sky-300'
          }`}
        >
          <div className="p-1.5 rounded-xl bg-sky-500 text-white shrink-0">
            <Crosshair className="w-4 h-4" />
          </div>
          <div>
            <span className="font-cinzel text-xs font-bold text-sky-950 tracking-wider uppercase block">
              PIPS'S COORDINATE ANALYSIS:
            </span>
            <p className="font-outfit text-xs text-slate-700">
              The muddy boot print was found at (2, 4), right outside the greenhouse glass door. This directly links the thief’s escape path to the garden!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span className="font-cinzel font-bold text-slate-900">Greenhouse Coordinate:</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-950">
              (2, 4) Logged
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Star Chart #03</span>
        </div>
      </div>
    </PageContainer>
  );
};
