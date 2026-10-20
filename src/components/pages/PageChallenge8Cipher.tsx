import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { Sparkles, CheckCircle2, Lightbulb, KeyRound } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge8Cipher: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
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
      title="Secret Cipher"
      subtitle="The Constellation Code"
      categoryBadge="Challenge 8"
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>
            An astronomical cipher was etched onto the library telescope eyepiece.
            Multiply the factors on each star, then match the products to the cipher key to decode the thief’s escape direction!
          </p>
        </div>

        {/* Decoder Key Table */}
        <div className="p-3 bg-slate-900 text-amber-300 rounded-xl border border-amber-500/30 shadow-md">
          <span className="font-cinzel text-[11px] font-bold uppercase tracking-wider block text-center mb-2">
            ★ Celestial Decryption Cipher Matrix ★
          </span>
          <div className="flex items-center justify-around font-mono text-xs">
            {cipherTable.map((item, i) => (
              <div key={i} className="text-center">
                <span className="text-slate-400 block text-[10px]">{item.num}</span>
                <span className="font-bold text-amber-300 text-base">{item.letter}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Constellation Stars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {stars.map((star, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center shadow-xs ${
                isEco ? 'bg-white border-slate-300' : 'bg-amber-50/70 border-amber-900/15'
              }`}
            >
              <div className="font-mono text-xs font-bold text-slate-500 mb-1">
                Star #{i + 1}
              </div>
              <div className="font-fredoka text-lg font-bold text-slate-900">
                {star.problem}
              </div>
              <div className="mt-1 flex items-center gap-1 font-mono text-xs">
                <span className="text-slate-500">= {star.ans}</span>
                <span className="text-slate-400">→</span>
                <span className="font-black text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded">
                  {star.letter}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Decode Solution Field */}
        <div className="space-y-2 font-outfit">
          <label className="font-fredoka text-base font-bold text-slate-900 block">
            What is the secret two-word decoded phrase?
          </label>

          <div className="flex items-center gap-3">
            <input
              type="text"
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
                if (e.target.value.toUpperCase().replace(/\s+/g, '') === 'LOOKUP') {
                  setIsCorrect(true);
                  onAnswerChange?.('LOOK UP');
                  onSolved?.();
                }
              }}
              placeholder="ENTER DECODED LETTERS..."
              className="w-56 text-center text-lg font-bold font-mono tracking-widest uppercase py-1.5 px-3 rounded-xl border-2 border-amber-900/30 bg-white focus:outline-none focus:border-amber-600 shadow-sm"
            />
            <button
              onClick={handleCheck}
              className="no-print px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-fredoka font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer"
            >
              Decrypt
            </button>
            {isCorrect && (
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> "LOOK UP" Confirmed!
              </span>
            )}
          </div>
        </div>

        {/* Clue Box */}
        <div
          className={`p-3.5 rounded-2xl border flex items-start gap-3 shadow-sm ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-amber-100/70 border-amber-300'
          }`}
        >
          <div className="p-1.5 rounded-xl bg-amber-400 text-slate-950 shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <span className="font-cinzel text-xs font-bold text-amber-900 uppercase tracking-wider block">
              DETECTIVE DISCOVERY:
            </span>
            <p className="font-outfit text-xs text-slate-700">
              "LOOK UP" led Nova and Pip directly to the glass observatory skylight, where a glass-cutter and rope harness were found hooked to the roof beam!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-amber-600" />
            <span className="font-cinzel font-bold text-slate-900">Decoded Message:</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-950">
              {isCorrect ? 'L-O-O-K  U-P' : '__ __ __ __  __ __'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Cipher Archives #08</span>
        </div>
      </div>
    </PageContainer>
  );
};
