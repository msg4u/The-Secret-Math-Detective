import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { TRANSLATIONS } from '../../i18n/translations';
import { BarChart3, CheckCircle2, Lightbulb, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge9Graphs: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;
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
      title={t.c9Title}
      subtitle={t.c9Subtitle}
      categoryBadge={t.c9Badge}
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>{t.c9Story}</p>
        </div>

        {/* Bar Chart Visualization (From Image Preview) */}
        <div className="py-2 px-4 bg-slate-900 text-white rounded-2xl border border-amber-500/30 flex flex-col items-center">
          <div className="w-full flex items-center justify-between text-xs font-mono mb-2 text-amber-400">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              {printSettings.language === 'ro' ? 'Senzori Putere (kW)' :
               printSettings.language === 'de' ? 'Strommessung (kW)' :
               printSettings.language === 'fr' ? 'Mesure Électrique (kW)' :
               printSettings.language === 'es' ? 'Sensores Eléctricos (kW)' :
               'Power Grid Draw (kW)'}
            </span>
            <span>23:42:00 Starfall Peak</span>
          </div>

          <div className="w-full h-40 flex items-end justify-between gap-3 pt-4 pb-2 border-b border-slate-700 px-4">
            {wings.map((w) => (
              <div key={w.name} className="flex-1 flex flex-col items-center h-full justify-end group">
                <span className="text-[10px] font-mono font-bold text-amber-300 mb-1">
                  {w.kw} kW
                </span>
                <div
                  className="w-full max-w-[48px] rounded-t-lg transition-all"
                  style={{
                    height: `${(w.kw / 70) * 100}%`,
                    backgroundColor: isEco ? '#64748b' : w.color,
                  }}
                />
                <span className="text-[10px] font-mono mt-1 text-slate-300 truncate w-full text-center">
                  {w.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Analysis Questions */}
        <div className="space-y-2 text-xs font-outfit">
          <div className="p-2.5 bg-white rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 block mb-0.5">{t.c9Q1}</span>
            <span className="font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded">
              {t.c9Q1Ans}
            </span>
          </div>

          <div className="p-2.5 bg-white rounded-xl border border-slate-200">
            <label className="font-bold text-slate-900 block mb-1">
              {t.c9Q2}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={spikeDiff}
                onChange={(e) => setSpikeDiff(e.target.value)}
                placeholder="65 - 40 = ?"
                className="w-28 text-center font-mono font-bold py-1 px-2 border rounded-lg focus:outline-none focus:border-amber-600"
              />
              <span className="font-medium text-slate-600">kW</span>
              <button
                onClick={handleCheck}
                className="no-print px-3 py-1 bg-amber-600 text-white font-bold rounded-lg text-xs cursor-pointer hover:bg-amber-700 transition-all"
              >
                {t.c1Verify || 'Verify'}
              </button>
              {isCorrect && (
                <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 25 kW!
                </span>
              )}
            </div>
          </div>

          <div className="p-2.5 bg-white rounded-xl border border-slate-200">
            <span className="font-bold text-slate-900 block mb-0.5">{t.c9Q3}</span>
            <span className="font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
              {t.c9Q3Ans}
            </span>
          </div>
        </div>

        {/* Clue Box */}
        <div
          className={`p-3.5 rounded-2xl border flex items-start gap-3 shadow-sm ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-red-50/70 border-red-200'
          }`}
        >
          <div className="p-1.5 rounded-xl bg-red-600 text-white shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <span className="font-cinzel text-xs font-bold text-red-950 uppercase tracking-wider block">
              {t.c9ClueTitle}
            </span>
            <p className="font-outfit text-xs text-slate-700">
              {t.c9ClueText}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-red-600" />
            <span className="font-cinzel font-bold text-slate-900">
              {printSettings.language === 'ro' ? 'Diferență Putere Bóvedă:' :
               printSettings.language === 'de' ? 'Tresor-Überschuss:' :
               printSettings.language === 'fr' ? 'Surtension Voûte :' :
               printSettings.language === 'es' ? 'Sobretensión Bóveda:' :
               'Vault Power Surge:'}
            </span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-red-100 text-red-950">
              {isCorrect ? '25 kW' : '__ kW'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Power Substation #09</span>
        </div>
      </div>
    </PageContainer>
  );
};
