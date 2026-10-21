import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { TRANSLATIONS } from '../../i18n/translations';
import { Sparkles, CheckCircle2, Lightbulb, KeyRound } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge8Cipher: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;
  const [word, setWord] = useState(userAnswer);
  const [isCorrect, setIsCorrect] = useState(userAnswer.toUpperCase() === 'LOOKUP' || userAnswer.toUpperCase() === 'LOOK UP');

  const cipherTable = [
    { num: 56, letter: 'L' },
    { num: 15, letter: 'O' },
    { num: 24, letter: 'K' },
    { num: 27, letter: 'U' },
    { num: 16, letter: 'P' },
    { num: 32, letter: 'S' },
    { num: 42, letter: 'T' },
    { num: 63, letter: 'A' },
  ];

  const stars = [
    { problem: '7 × 8', ans: 56, letter: 'L' },
    { problem: '5 × 3', ans: 15, letter: 'O' },
    { problem: '3 × 5', ans: 15, letter: 'O' },
    { problem: '4 × 6', ans: 24, letter: 'K' },
    { problem: '9 × 3', ans: 27, letter: 'U' },
    { problem: '8 × 2', ans: 16, letter: 'P' },
  ];

  const handleCheck = () => {
    if (word.toUpperCase().replace(/\s+/g, '') === 'LOOKUP') {
      setIsCorrect(true);
      onAnswerChange?.('LOOK UP');
      onSolved?.();
      confetti({ particleCount: 35, spread: 55, origin: { y: 0.6 } });
    }
  };

  return (
    <PageContainer
      pageNumber={12}
      title={t.c8Title}
      subtitle={t.c8Subtitle}
      categoryBadge={t.c8Badge}
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>{t.c8Story}</p>
        </div>

        {/* Constellation Multiplication Stars Graphic */}
        <div className="py-2 px-3 bg-slate-900 text-white rounded-2xl border border-indigo-400/30 flex flex-col items-center">
          <div className="font-cinzel text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
            {t.c8MatrixTitle}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 w-full justify-items-center">
            {stars.map((st, i) => (
              <div key={i} className="flex flex-col items-center bg-slate-800/80 p-2 rounded-xl border border-slate-700 w-full">
                <Sparkles className="w-4 h-4 text-amber-400 mb-1" />
                <span className="font-mono font-bold text-sm text-slate-100">{st.problem}</span>
                <span className="text-[10px] text-slate-400 mt-0.5">={st.ans}</span>
                <span className="mt-1 font-fredoka text-base font-bold text-amber-400">
                  {isCorrect ? st.letter : '?'}
                </span>
              </div>
            ))}
          </div>

          {/* Cipher Lookup Table */}
          <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-xs font-mono">
            {cipherTable.map((c) => (
              <div key={c.num} className="flex items-center gap-1 bg-slate-950/70 px-2 py-0.5 rounded border border-slate-800 text-[11px]">
                <span className="text-slate-400">{c.num}:</span>
                <span className="font-bold text-amber-300">{c.letter}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decoder Input */}
        <div className="space-y-2 font-outfit">
          <label className="font-fredoka text-sm font-bold text-slate-900 block">
            {t.c8Question}
          </label>

          <div className="flex items-center gap-3">
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="e.g. LOOK UP"
              className="w-40 text-center text-lg font-bold font-mono py-1.5 px-3 rounded-xl border-2 border-amber-900/30 bg-white focus:outline-none focus:border-amber-600 uppercase"
            />
            <button
              onClick={handleCheck}
              className="no-print px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-fredoka font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer"
            >
              {t.c8Verify}
            </button>
            {isCorrect && (
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> LOOK UP!
              </span>
            )}
          </div>
        </div>

        {/* Clue Box */}
        <div
          className={`p-3.5 rounded-2xl border flex items-start gap-3 shadow-sm ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-indigo-50/70 border-indigo-200'
          }`}
        >
          <div className="p-1.5 rounded-xl bg-indigo-600 text-white shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <span className="font-cinzel text-xs font-bold text-indigo-950 uppercase tracking-wider block">
              {t.c8ClueTitle}
            </span>
            <p className="font-outfit text-xs text-slate-700">
              {t.c8ClueText}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-indigo-600" />
            <span className="font-cinzel font-bold text-slate-900">
              {printSettings.language === 'ro' ? 'Mesaj Descifrat:' :
               printSettings.language === 'de' ? 'Entschlüsselte Botschaft:' :
               printSettings.language === 'fr' ? 'Message Déchiffré :' :
               printSettings.language === 'es' ? 'Mensaje Descifrado:' :
               'Decrypted Word:'}
            </span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-950">
              {isCorrect ? 'LOOK UP' : '______'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Star Archives #08</span>
        </div>
      </div>
    </PageContainer>
  );
};
