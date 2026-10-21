import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { TRANSLATIONS } from '../../i18n/translations';
import { Footprints, CheckCircle2, Lightbulb, Ruler } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge11Footprints: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;
  const [shoeSize, setShoeSize] = useState(userAnswer);
  const [isCorrect, setIsCorrect] = useState(userAnswer === '28');

  const suspectsShoes = [
    { name: 'Prof. Orion', sizeEu: '41', lengthCm: '25.5 cm', footwear: 'Leather Oxfords' },
    { name: 'Luna', sizeEu: '37', lengthCm: '23 cm', footwear: 'Canvas Sneakers' },
    { name: 'Dr. Vega', sizeEu: '44', lengthCm: '28 cm', footwear: 'Heavy Garden Boots' },
    { name: 'Max', sizeEu: '42', lengthCm: '26.5 cm', footwear: 'Work Steel-Toes' },
  ];

  const handleCheck = () => {
    if (shoeSize.trim() === '28') {
      setIsCorrect(true);
      onAnswerChange?.('28');
      onSolved?.();
      confetti({ particleCount: 35, spread: 55, origin: { y: 0.6 } });
    }
  };

  return (
    <PageContainer
      pageNumber={15}
      title={t.c11Title}
      subtitle={t.c11Subtitle}
      categoryBadge={t.c11Badge}
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>{t.c11Story}</p>
        </div>

        {/* Footprint & Metric Ruler Graphic */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center py-2 bg-amber-50/50 rounded-2xl border border-amber-900/10 p-4">
          <div className="relative">
            <svg width="240" height="150" viewBox="0 0 240 150" className="bg-white rounded-xl shadow-xs border border-slate-300">
              {/* Muddy boot print */}
              <g transform="translate(40, 20)">
                <path
                  d="M10 25 C10 10 35 10 35 25 L35 75 C35 88 10 88 10 75 Z"
                  fill="#78350f"
                  opacity="0.8"
                />
                <circle cx="22" cy="98" r="14" fill="#78350f" opacity="0.8" />
                {/* Lug tread marks */}
                <line x1="14" y1="35" x2="31" y2="35" stroke="#fff" strokeWidth="2" />
                <line x1="14" y1="50" x2="31" y2="50" stroke="#fff" strokeWidth="2" />
                <line x1="14" y1="65" x2="31" y2="65" stroke="#fff" strokeWidth="2" />
                {/* Botanical fluorescent pollen dots */}
                <circle cx="18" cy="40" r="2.5" fill="#22c55e" />
                <circle cx="26" cy="60" r="3" fill="#22c55e" />
                <circle cx="22" cy="95" r="2.5" fill="#22c55e" />
              </g>

              {/* Metric Ruler next to boot */}
              <g transform="translate(120, 15)">
                <rect x="0" y="0" width="30" height="120" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" rx="3" />
                {[...Array(13)].map((_, i) => (
                  <g key={i}>
                    <line x1="0" y1={i * 10} x2={i % 5 === 0 ? 16 : 8} y2={i * 10} stroke="#713f12" strokeWidth="1" />
                    {i % 5 === 0 && (
                      <text x="18" y={i * 10 + 3} fill="#713f12" fontSize="7" fontWeight="bold">
                        {i * 2.5}
                      </text>
                    )}
                  </g>
                ))}
              </g>

              <text x="175" y="75" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="monospace">
                = 28 cm
              </text>
            </svg>
          </div>

          {/* Suspect Footwear Register */}
          <div className="flex-1 space-y-1.5 text-xs font-outfit">
            <span className="font-cinzel text-xs font-bold text-amber-950 block">
              {t.c11RegisterTitle}
            </span>

            <div className="space-y-1 bg-white p-2 rounded-xl border border-slate-200">
              {suspectsShoes.map((s) => (
                <div
                  key={s.name}
                  className={`p-1.5 rounded-lg flex items-center justify-between text-[11px] ${
                    s.name === 'Dr. Vega' ? 'bg-amber-100 font-bold border border-amber-300' : 'text-slate-700'
                  }`}
                >
                  <span className="truncate">{s.name} ({s.footwear})</span>
                  <span className="font-mono">{s.lengthCm}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Question & Check */}
        <div className="space-y-2 font-outfit">
          <label className="font-fredoka text-sm font-bold text-slate-900 block">
            {printSettings.language === 'ro' ? 'Care este lungimea amprentei măsurate în cm?' :
             printSettings.language === 'de' ? 'Wie lang ist der gemessene Fußabdruck in cm?' :
             printSettings.language === 'fr' ? 'Quelle est la longueur de l’empreinte en cm ?' :
             printSettings.language === 'es' ? '¿Cuál es la longitud de la huella en cm?' :
             'What is the measured boot print length in centimeters?'}
          </label>

          <div className="flex items-center gap-3">
            <input
              type="text"
              value={shoeSize}
              onChange={(e) => setShoeSize(e.target.value)}
              placeholder="e.g. 28"
              className="w-32 text-center text-xl font-bold font-mono py-1.5 px-3 rounded-xl border-2 border-amber-900/30 bg-white focus:outline-none focus:border-amber-600 shadow-sm"
            />
            <button
              onClick={handleCheck}
              className="no-print px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-fredoka font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer"
            >
              {t.c1Verify || 'Verify Measurement'}
            </button>
            {isCorrect && (
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> 28 cm Matches Dr. Vega!
              </span>
            )}
          </div>
        </div>

        {/* Clue Box */}
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
              {t.c11ClueTitle}
            </span>
            <p className="font-outfit text-xs text-slate-700">
              {t.c11ClueText}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Footprints className="w-4 h-4 text-amber-700" />
            <span className="font-cinzel font-bold text-slate-900">
              {printSettings.language === 'ro' ? 'Mărime Identificată:' :
               printSettings.language === 'de' ? 'Forensische Größe:' :
               printSettings.language === 'fr' ? 'Taille Identifiée :' :
               printSettings.language === 'es' ? 'Talla Identificada:' :
               'Forensic Match:'}
            </span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-950">
              {isCorrect ? '28 cm (Dr. Vega)' : '__ cm'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Botanical Garden Path #11</span>
        </div>
      </div>
    </PageContainer>
  );
};
