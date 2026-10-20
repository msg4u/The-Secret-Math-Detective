import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { CHALLENGE_DATA } from '../../data/workbookData';
import { TRANSLATIONS } from '../../i18n/translations';
import { Lightbulb, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PageChallenge1PatternsProps {
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}

export const PageChallenge1Patterns: React.FC<PageChallenge1PatternsProps> = ({
  printSettings,
  userAnswer = '',
  onAnswerChange,
  onSolved,
}) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;
  const [val, setVal] = useState(userAnswer);
  const [explanation, setExplanation] = useState('');
  const [isCorrect, setIsCorrect] = useState(userAnswer === CHALLENGE_DATA.challenge1.correctAnswer);
  const [showHint, setShowHint] = useState(false);

  const handleCheck = () => {
    if (val.trim() === CHALLENGE_DATA.challenge1.correctAnswer) {
      setIsCorrect(true);
      onAnswerChange?.(val);
      onSolved?.();
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
    }
  };

  return (
    <PageContainer
      pageNumber={5}
      title={t.c1Title}
      subtitle={t.c1Subtitle}
      categoryBadge={t.c1Badge}
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* Story Intro */}
        <div className="text-slate-800 font-outfit text-sm leading-relaxed">
          <p>{t.c1Story}</p>
        </div>

        {/* 5 Star Shapes with Numbers from Preview */}
        <div className="my-2 flex items-center justify-center gap-2 sm:gap-4 py-3 bg-amber-50/50 rounded-2xl border border-amber-900/10 shadow-inner">
          {[3, 6, 10, 15, '?'].map((num, idx) => (
            <div key={idx} className="relative flex flex-col items-center group">
              {/* Star SVG */}
              <svg width="74" height="74" viewBox="0 0 100 100" fill="none" className="drop-shadow-md">
                <polygon
                  points="50,5 64,36 98,36 70,58 81,92 50,70 19,92 30,58 2,36 36,36"
                  fill={
                    idx === 4
                      ? isCorrect
                        ? '#10b981'
                        : '#fbbf24'
                      : isEco
                      ? '#f8fafc'
                      : '#fef08a'
                  }
                  stroke="#b45309"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                <text
                  x="50"
                  y="62"
                  fill={idx === 4 && isCorrect ? '#ffffff' : '#78350f'}
                  fontSize={num === '?' ? '36' : '30'}
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  textAnchor="middle"
                >
                  {idx === 4 && isCorrect ? '21' : num}
                </text>
              </svg>

              {/* Difference arrows between stars */}
              {idx < 4 && (
                <div className="hidden sm:block absolute -bottom-5 left-[54px] z-10 font-mono text-[11px] font-bold text-amber-700 bg-white/90 px-1 rounded shadow-xs">
                  {CHALLENGE_DATA.challenge1.differences[idx]}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Prompt Questions & Work Area */}
        <div className="space-y-3 font-outfit">
          <div className="flex items-center justify-between">
            <label className="font-fredoka text-base font-bold text-slate-900">
              {t.c1Question}
            </label>
            {isCorrect && (
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> {t.solvedStatus}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
                onAnswerChange?.(e.target.value);
                if (e.target.value.trim() === '21') {
                  setIsCorrect(true);
                  onSolved?.();
                }
              }}
              placeholder="..."
              className="w-36 text-center text-xl font-bold font-mono py-1.5 px-3 rounded-xl border-2 border-amber-900/30 bg-white focus:outline-none focus:border-amber-600 shadow-sm"
            />
            <button
              onClick={handleCheck}
              className="no-print px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-fredoka font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer"
            >
              {t.c1Verify}
            </button>
            <button
              onClick={() => setShowHint(!showHint)}
              className="no-print text-xs text-amber-800 hover:underline flex items-center gap-1 cursor-pointer font-medium"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{t.c1Hint}</span>
            </button>
          </div>

          {/* Explanation / Show your work lines */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.c1WorkLabel}
            </label>
            <div className="space-y-2">
              <input
                type="text"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder={t.c1WorkPlaceholder}
                className="w-full text-sm font-hand font-bold text-amber-950 border-b-2 border-slate-300 bg-transparent py-1 px-1 focus:outline-none focus:border-amber-600"
              />
              {/* Printed blank lines for physical workbook writing */}
              <div className="h-6 border-b border-dashed border-slate-300 w-full" />
              <div className="h-6 border-b border-dashed border-slate-300 w-full" />
            </div>
          </div>
        </div>

        {/* Clue Box - Exactly from preview */}
        <div
          className={`p-4 rounded-2xl border-2 flex items-start gap-3 relative shadow-sm ${
            isEco
              ? 'bg-slate-50 border-slate-300'
              : 'bg-gradient-to-r from-amber-100/90 via-amber-50 to-amber-100/60 border-amber-400'
          }`}
        >
          <div className="p-2 rounded-xl bg-amber-400 text-slate-950 shadow-sm shrink-0">
            <Lightbulb className="w-5 h-5 text-slate-900" />
          </div>
          <div className="flex-1">
            <span className="font-cinzel text-xs font-bold text-amber-900 tracking-wider uppercase block">
              {t.c1ClueTitle}
            </span>
            <p className="font-outfit text-xs text-slate-800 font-medium mt-0.5">
              {t.c1ClueText}
            </p>
          </div>
        </div>

        {/* Bottom Unlocked Clue Badge & Telescope Illustration */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="font-cinzel text-xs font-bold text-slate-900">
              {t.c1VaultClue}
            </span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-950">
              {isCorrect ? '21' : '__'}
            </span>
          </div>

          {/* Small Telescope Line Art */}
          <div className="opacity-70">
            <svg width="40" height="30" viewBox="0 0 60 40" fill="none">
              <line x1="10" y1="35" x2="30" y2="20" stroke="#78350f" strokeWidth="2" />
              <line x1="50" y1="35" x2="30" y2="20" stroke="#78350f" strokeWidth="2" />
              <rect x="15" y="8" width="35" height="10" transform="rotate(-20 15 8)" fill="#d97706" stroke="#78350f" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
