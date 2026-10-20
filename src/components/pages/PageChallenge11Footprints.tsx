import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { Footprints, CheckCircle2, Lightbulb, Ruler } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge11Footprints: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
  const [shoeSize, setShoeSize] = useState(userAnswer);
  const [isCorrect, setIsCorrect] = useState(userAnswer.toLowerCase().includes('vega'));

  const shoeTable = [
    { name: 'Professor Orion', bootCm: 26, sizeEu: 'Size 41', match: false },
    { name: 'Luna', bootCm: 23.5, sizeEu: 'Size 37', match: false },
    { name: 'Dr. Vega', bootCm: 28, sizeEu: 'Size 44', match: true },
    { name: 'Max', bootCm: 27, sizeEu: 'Size 42', match: false },
  ];

  const handleSelect = (name: string) => {
    setShoeSize(name);
    if (name === 'Dr. Vega') {
      setIsCorrect(true);
      onAnswerChange?.('Dr. Vega');
      onSolved?.();
      confetti({ particleCount: 35, spread: 55, origin: { y: 0.6 } });
    }
  };

  return (
    <PageContainer
      pageNumber={15}
      title="Measurement & Logic"
      subtitle="The Footprint Trail"
      categoryBadge="Challenge 11"
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>
            Nova and Pip dusted the corridor outside the greenhouse and uncovered deep muddy boot prints.
            Measure the footprint length in centimeters and match it to the suspect footwear register!
          </p>
        </div>

        {/* Footprint & Metric Ruler Graphic */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center py-2 bg-amber-50/50 rounded-2xl border border-amber-900/10 p-4">
          <div className="relative">
            <svg width="240" height="150" viewBox="0 0 240 150" className="bg-white rounded-xl shadow-xs border border-slate-300">
              {/* Muddy boot print */}
              <g transform="translate(40, 20)">
                {/* Boot sole */}
                <path
                  d="M10 25 C10 10 35 10 35 25 L35 75 C35 88 10 88 10 75 Z"
                  fill="#78350f"
                  opacity="0.85"
                />
                {/* Boot heel */}
                <rect x="12" y="82" width="21" height="22" rx="4" fill="#78350f" opacity="0.85" />
                {/* Tread pattern grooves */}
                <line x1="12" y1="30" x2="33" y2="30" stroke="#fef08a" strokeWidth="1.5" />
                <line x1="12" y1="45" x2="33" y2="45" stroke="#fef08a" strokeWidth="1.5" />
                <line x1="12" y1="60" x2="33" y2="60" stroke="#fef08a" strokeWidth="1.5" />
                {/* Green botanical orchid pollen dust */}
                <circle cx="20" cy="40" r="2.5" fill="#22c55e" />
                <circle cx="28" cy="55" r="3" fill="#22c55e" />
                <circle cx="22" cy="70" r="2" fill="#22c55e" />
              </g>

              {/* Metric Ruler (0 to 30 cm) */}
              <g transform="translate(110, 15)">
                <rect x="0" y="0" width="40" height="120" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
                {[...Array(31)].map((_, cm) => {
                  const y = 5 + (cm / 30) * 110;
                  const isMajor = cm % 5 === 0;
                  return (
                    <g key={cm}>
                      <line
                        x1="0"
                        y1={y}
                        x2={isMajor ? 16 : 8}
                        y2={y}
                        stroke="#713f12"
                        strokeWidth={isMajor ? 1.5 : 0.8}
                      />
                      {isMajor && (
                        <text x="22" y={y + 3} fill="#713f12" fontSize="7" fontWeight="bold">
                          {cm}
                        </text>
                      )}
                    </g>
                  );
                })}
                {/* Measured marker at 28cm */}
                <line x1="0" y1="108" x2="40" y2="108" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="3 1" />
                <text x="44" y="111" fill="#dc2626" fontSize="9" fontWeight="bold">28 cm!</text>
              </g>
            </svg>
          </div>

          {/* Suspect Shoe Register Table */}
          <div className="flex-1 space-y-1.5 text-xs font-outfit">
            <span className="font-cinzel text-xs font-bold text-amber-950 block">
              Suspect Footwear Register:
            </span>

            {shoeTable.map((s) => (
              <div
                key={s.name}
                onClick={() => handleSelect(s.name)}
                className={`p-2 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  shoeSize === s.name
                    ? 'bg-amber-100 border-amber-600 font-bold'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div>
                  <span className="text-slate-900 block">{s.name}</span>
                  <span className="text-[10px] text-slate-500">{s.sizeEu}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-slate-700">{s.bootCm} cm</span>
                  <input
                    type="radio"
                    name="footwear_match"
                    checked={shoeSize === s.name}
                    onChange={() => handleSelect(s.name)}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Forensic Clue Box */}
        <div
          className={`p-3.5 rounded-2xl border flex items-start gap-3 shadow-sm ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-emerald-50/70 border-emerald-300'
          }`}
        >
          <div className="p-1.5 rounded-xl bg-emerald-600 text-white shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <span className="font-cinzel text-xs font-bold text-emerald-950 uppercase tracking-wider block">
              BOTANICAL FORENSIC MATCH:
            </span>
            <p className="font-outfit text-xs text-slate-700">
              The 28 cm boot sole matches <strong>Dr. Vega</strong> perfectly.
              Furthermore, the fluorescent green specks on the sole were chemically identified as pollen from the rare <em>Selenicereus</em> cactus blooming exclusively in Dr. Vega's private greenhouse laboratory!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Footprints className="w-4 h-4 text-emerald-600" />
            <span className="font-cinzel font-bold text-slate-900">Forensic Sole Match:</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-950">
              {isCorrect ? 'Dr. Vega (28 cm)' : 'Pending Analysis'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Forensics Lab #11</span>
        </div>
      </div>
    </PageContainer>
  );
};
