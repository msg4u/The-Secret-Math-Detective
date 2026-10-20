import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { CHALLENGE_DATA } from '../../data/workbookData';
import { TRANSLATIONS } from '../../i18n/translations';
import { Clock, Lightbulb, CheckCircle2, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PageChallenge2TimeProps {
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}

export const PageChallenge2Time: React.FC<PageChallenge2TimeProps> = ({
  printSettings,
  userAnswer = '',
  onAnswerChange,
  onSolved,
}) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [isCorrect, setIsCorrect] = useState(userAnswer === '10:10');

  const handleCheck = () => {
    if (hour.trim() === '10' && min.trim() === '10') {
      setIsCorrect(true);
      onAnswerChange?.('10:10');
      onSolved?.();
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
    }
  };

  return (
    <PageContainer
      pageNumber={6}
      title={t.c2Title}
      subtitle={t.c2Subtitle}
      categoryBadge={t.c2Badge}
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        {/* Story Intro */}
        <div className="text-slate-800 font-outfit text-sm leading-relaxed">
          <p>{t.c2Story}</p>
        </div>

        {/* Dual Clocks Section (Alarm Clock vs Shadow Entry Clock) */}
        <div className="grid grid-cols-2 gap-4 items-center justify-items-center py-2 bg-amber-50/50 rounded-2xl border border-amber-900/10 p-3">
          {/* Clock 1: Alarm Triggered at 11:45 */}
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-xs font-bold text-slate-800 mb-1">
              {t.c2AlarmSounded}
            </span>
            <svg width="150" height="150" viewBox="0 0 160 160" className="drop-shadow-sm">
              <circle cx="80" cy="80" r="74" fill={isEco ? '#ffffff' : '#fefce8'} stroke="#78350f" strokeWidth="4" />
              {/* Hour Numbers 1 to 12 */}
              {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((h, i) => {
                const angle = (i * 30 - 90) * (Math.PI / 180);
                const x = 80 + 56 * Math.cos(angle);
                const y = 80 + 56 * Math.sin(angle) + 4;
                return (
                  <text
                    key={h}
                    x={x}
                    y={y}
                    fill="#451a03"
                    fontSize="13"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                    textAnchor="middle"
                  >
                    {h}
                  </text>
                );
              })}
              {/* Hour hand pointing near 12/11:45 */}
              <line x1="80" y1="80" x2="68" y2="45" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
              {/* Minute hand pointing to 9 (45 mins) */}
              <line x1="80" y1="80" x2="28" y2="80" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="80" cy="80" r="4.5" fill="#451a03" />
            </svg>
            <span className="text-[11px] font-mono text-slate-500 mt-1">{t.c2ObservedTime}</span>
          </div>

          {/* Clock 2: Time Shadow Entered (Target Clock) */}
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-xs font-bold text-indigo-900 mb-1">
              {t.c2ShadowSpotted}
            </span>
            <svg width="150" height="150" viewBox="0 0 160 160" className="drop-shadow-sm">
              <circle cx="80" cy="80" r="74" fill={isEco ? '#ffffff' : '#f0fdf4'} stroke="#047857" strokeWidth="4" strokeDasharray={isCorrect ? 'none' : '4 2'} />
              {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((h, i) => {
                const angle = (i * 30 - 90) * (Math.PI / 180);
                const x = 80 + 56 * Math.cos(angle);
                const y = 80 + 56 * Math.sin(angle) + 4;
                return (
                  <text
                    key={h}
                    x={x}
                    y={y}
                    fill="#064e3b"
                    fontSize="13"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                    textAnchor="middle"
                  >
                    {h}
                  </text>
                );
              })}
              {/* Hands appear when solved */}
              {isCorrect ? (
                <>
                  {/* Hour hand pointing at 10 */}
                  <line x1="80" y1="80" x2="50" y2="60" stroke="#064e3b" strokeWidth="5" strokeLinecap="round" />
                  {/* Minute hand pointing at 2 (10 mins) */}
                  <line x1="80" y1="80" x2="115" y2="60" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
                </>
              ) : (
                /* Question mark in center */
                <text x="80" y="88" fill="#047857" fontSize="28" fontWeight="bold" textAnchor="middle" opacity="0.6">
                  ?
                </text>
              )}
              <circle cx="80" cy="80" r="4.5" fill="#064e3b" />
            </svg>
            <span className="text-[11px] font-hand text-slate-600 font-bold mt-1">
              {t.c2TargetPrompt}
            </span>
          </div>
        </div>

        {/* Input & Calculations */}
        <div className="space-y-2 font-outfit">
          <label className="font-fredoka text-base font-bold text-slate-900 block">
            {t.c2Question}
          </label>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border-2 border-amber-900/30">
              <input
                type="text"
                maxLength={2}
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                placeholder="HH"
                className="w-12 text-center text-xl font-mono font-bold py-1 focus:outline-none"
              />
              <span className="font-bold text-xl font-mono">:</span>
              <input
                type="text"
                maxLength={2}
                value={min}
                onChange={(e) => setMin(e.target.value)}
                placeholder="MM"
                className="w-12 text-center text-xl font-mono font-bold py-1 focus:outline-none"
              />
            </div>

            <button
              onClick={handleCheck}
              className="no-print px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-fredoka font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer"
            >
              {t.c2Verify}
            </button>

            {isCorrect && (
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> 10:10 ({t.solvedStatus})
              </span>
            )}
          </div>

          <div className="text-xs text-slate-600">
            <div className="mt-1 p-2 rounded-lg bg-white/70 border border-slate-300 font-mono text-xs text-slate-700">
              Step 1: 11:45 − 1 hour = 10:45<br />
              Step 2: 10:45 − 35 minutes = <strong>10:10</strong>
            </div>
          </div>
        </div>

        {/* Clue Box */}
        <div
          className={`p-3.5 rounded-2xl border-2 flex items-start gap-3 shadow-sm ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-amber-50/80 border-amber-300'
          }`}
        >
          <div className="p-1.5 rounded-xl bg-amber-400 text-slate-950 shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <span className="font-cinzel text-xs font-bold text-amber-900 tracking-wider uppercase block">
              {t.c2ClueTitle}
            </span>
            <p className="font-outfit text-xs text-slate-700">
              {t.c2ClueText}
            </p>
          </div>
        </div>

        {/* Vault Key Indicator */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-sky-600" />
            <span className="font-cinzel font-bold text-slate-900">{t.c2VaultClue}</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-950">
              {isCorrect ? '10' : '__'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Security Gate Log #4</span>
        </div>
      </div>
    </PageContainer>
  );
};
