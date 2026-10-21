import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { TRANSLATIONS } from '../../i18n/translations';
import { PieChart, CheckCircle2, Lightbulb, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge6Fractions: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;
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
      title={t.c6Title}
      subtitle={t.c6Subtitle}
      categoryBadge={t.c6Badge}
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>{t.c6Story}</p>
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
              {/* Pepperoni / crystal dots */}
              <circle cx="68" cy="32" r="3" fill="#dc2626" />
              <circle cx="78" cy="42" r="2.5" fill="#dc2626" />
            </svg>
            <div className="mt-2 text-center">
              <span className="font-mono text-xl font-bold text-slate-900 block leading-tight">1</span>
              <div className="w-6 h-[2px] bg-slate-900 mx-auto" />
              <span className="font-mono text-xl font-bold text-slate-900 block leading-tight">4</span>
            </div>
          </div>

          <div className="font-bold text-2xl text-amber-900 font-mono">+</div>

          {/* Fraction 2: 2/8 circle */}
          <div className="flex flex-col items-center">
            <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-sm">
              <circle cx="50" cy="50" r="44" fill={isEco ? '#ffffff' : '#f8fafc'} stroke="#78350f" strokeWidth="2.5" />
              {/* Slices 8 */}
              <line x1="50" y1="6" x2="50" y2="94" stroke="#78350f" strokeWidth="2" />
              <line x1="6" y1="50" x2="94" y2="50" stroke="#78350f" strokeWidth="2" />
              <line x1="19" y1="19" x2="81" y2="81" stroke="#78350f" strokeWidth="1.5" />
              <line x1="81" y1="19" x2="19" y2="81" stroke="#78350f" strokeWidth="1.5" />
              {/* Shaded 2 slices of 8 (which is 1/4) */}
              <path d="M50 50 L50 6 A 44 44 0 0 1 94 50 Z" fill="#38bdf8" />
            </svg>
            <div className="mt-2 text-center">
              <span className="font-mono text-xl font-bold text-slate-900 block leading-tight">2</span>
              <div className="w-6 h-[2px] bg-slate-900 mx-auto" />
              <span className="font-mono text-xl font-bold text-slate-900 block leading-tight">8</span>
            </div>
          </div>

          <div className="font-bold text-2xl text-amber-900 font-mono">=</div>

          {/* Sum: 1/2 circle */}
          <div className="flex flex-col items-center">
            <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-sm">
              <circle cx="50" cy="50" r="44" fill={isEco ? '#ffffff' : '#f8fafc'} stroke="#78350f" strokeWidth="2.5" />
              <line x1="50" y1="6" x2="50" y2="94" stroke="#78350f" strokeWidth="2" />
              {/* Half shaded */}
              <path
                d="M50 50 L50 6 A 44 44 0 0 1 50 94 Z"
                fill={isCorrect ? '#10b981' : '#cbd5e1'}
                opacity={isCorrect ? '1' : '0.4'}
              />
              <text x="50" y="54" fill="#065f46" fontSize="12" fontWeight="bold" textAnchor="middle">
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
            {t.c6Question}
          </label>

          <div className="flex items-center gap-3">
            <input
              type="text"
              value={sumAns}
              onChange={(e) => setSumAns(e.target.value)}
              placeholder="1/2"
              className="w-28 text-center text-xl font-bold font-mono py-1.5 px-3 rounded-xl border-2 border-amber-900/30 bg-white focus:outline-none focus:border-amber-600 shadow-sm"
            />
            <button
              onClick={handleCheck}
              className="no-print px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-fredoka font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer"
            >
              {t.c6Verify}
            </button>
            {isCorrect && (
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> 1/2!
              </span>
            )}
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-mono">
            <strong>
              {printSettings.language === 'ro' ? 'Pași de simplificare:' :
               printSettings.language === 'de' ? 'Kürzungsschritte:' :
               printSettings.language === 'fr' ? 'Étapes de simplification :' :
               printSettings.language === 'es' ? 'Pasos de simplificación:' :
               'Simplification Steps:'}
            </strong><br />
            1. 2/8 = 1/4.<br />
            2. 1/4 + 1/4 = 2/4.<br />
            3. 2/4 = <strong>1/2</strong>.
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
              {t.c6ClueTitle}
            </span>
            <p className="font-outfit text-xs text-slate-700">
              {t.c6ClueText}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <PieChart className="w-4 h-4 text-emerald-600" />
            <span className="font-cinzel font-bold text-slate-900">
              {printSettings.language === 'ro' ? 'Cifra Cilindru 3:' :
               printSettings.language === 'de' ? 'Zylinder 3 Ziffer:' :
               printSettings.language === 'fr' ? 'Chiffre Cylindre 3 :' :
               printSettings.language === 'es' ? 'Cilindro 3 Dígito:' :
               'Vault Cylinder 3 Digit:'}
            </span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-950">
              {isCorrect ? '2' : '__'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Lens Optics Lab #06</span>
        </div>
      </div>
    </PageContainer>
  );
};
