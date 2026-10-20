import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { MoonstoneCrystal } from '../illustrations/Characters';
import { Lock, Unlock, Sparkles, CheckCircle2, ShieldCheck, Key } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge12FinalVault: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';

  const [digits, setDigits] = useState<[string, string, string, string, string]>([
    '21', '10', '2', '4', '8'
  ]);
  const [userInputs, setUserInputs] = useState<[string, string, string, string, string]>([
    '', '', '', '', ''
  ]);
  const [isOpen, setIsOpen] = useState(userAnswer === 'OPEN');

  const handleInputChange = (idx: number, val: string) => {
    const updated = [...userInputs] as [string, string, string, string, string];
    updated[idx] = val;
    setUserInputs(updated);

    if (
      updated[0].trim() === '21' &&
      updated[1].trim() === '10' &&
      updated[2].trim() === '2' &&
      updated[3].trim() === '4' &&
      updated[4].trim() === '8'
    ) {
      setIsOpen(true);
      onAnswerChange?.('OPEN');
      onSolved?.();
      confetti({ particleCount: 80, spread: 100, origin: { y: 0.5 } });
    }
  };

  const unlockAuto = () => {
    setUserInputs(['21', '10', '2', '4', '8']);
    setIsOpen(true);
    onAnswerChange?.('OPEN');
    onSolved?.();
    confetti({ particleCount: 80, spread: 100, origin: { y: 0.5 } });
  };

  return (
    <PageContainer
      pageNumber={16}
      title="Final Challenge"
      subtitle="The Moonstone Vault"
      categoryBadge="Final Challenge"
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>
            You have arrived at the high-security inner chamber!
            Combine the five clues gathered across your investigation to crack the 5-cylinder master tumbler code
            and open the vault to recover the Celestial Moonstone!
          </p>
        </div>

        {/* Master Vault Door Graphic (From Image Preview Card #12) */}
        <div
          className={`relative w-full h-[320px] rounded-2xl border-4 overflow-hidden flex flex-col items-center justify-between p-4 shadow-2xl transition-all ${
            isEco
              ? 'bg-slate-100 border-slate-700'
              : 'bg-gradient-to-b from-[#0b1329] via-[#16274e] to-[#070d1e] border-amber-500/80 shadow-[0_0_40px_rgba(245,158,11,0.2)]'
          }`}
        >
          {/* Ornate Gold Arch Header */}
          <div className="text-center z-10">
            <div className="font-cinzel text-xs font-black tracking-[0.2em] text-amber-300 uppercase drop-shadow">
              ✦ STARFALL MASTER VAULT SANCTUM ✦
            </div>
          </div>

          {/* Central Chamber with Moonstone */}
          <div className="relative z-10 my-auto flex flex-col items-center">
            {isOpen ? (
              <div className="animate-pulse flex flex-col items-center">
                <MoonstoneCrystal size={130} glow={!isEco} />
                <div className="mt-1 px-4 py-1 rounded-full bg-emerald-500/90 text-white font-fredoka font-bold text-xs shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>VAULT OPENED! MOONSTONE RECOVERED!</span>
                </div>
              </div>
            ) : (
              <div className="relative flex flex-col items-center">
                <div className="w-28 h-28 rounded-2xl bg-slate-900/90 border-2 border-amber-500/40 flex flex-col items-center justify-center shadow-inner">
                  <Lock className="w-12 h-12 text-amber-400 mb-1 animate-pulse" />
                  <span className="font-mono text-[10px] text-amber-200 uppercase tracking-widest font-bold">
                    LOCKED
                  </span>
                </div>
                <span className="text-[11px] font-hand text-amber-200 font-bold mt-2">
                  Enter 5 Clue Digits to Unlock
                </span>
              </div>
            )}
          </div>

          {/* 5-Cylinder Code Tumbler (Interactive / Fillable) */}
          <div className="w-full z-10 flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3 p-2 rounded-2xl bg-slate-950/80 border border-amber-500/40 shadow-xl">
              {[
                { label: 'Cyl 1', hint: 'Star Code', correct: '21', idx: 0 },
                { label: 'Cyl 2', hint: 'Hour', correct: '10', idx: 1 },
                { label: 'Cyl 3', hint: 'Fraction', correct: '2', idx: 2 },
                { label: 'Cyl 4', hint: 'Area Tens', correct: '4', idx: 3 },
                { label: 'Cyl 5', hint: 'Gear Safe', correct: '8', idx: 4 },
              ].map((cyl) => (
                <div key={cyl.label} className="flex flex-col items-center">
                  <span className="text-[9px] uppercase font-mono text-amber-300/80 font-bold mb-0.5">
                    {cyl.hint}
                  </span>
                  <input
                    type="text"
                    maxLength={2}
                    value={userInputs[cyl.idx]}
                    onChange={(e) => handleInputChange(cyl.idx, e.target.value)}
                    placeholder="?"
                    className={`w-12 h-12 text-center text-xl font-mono font-black rounded-xl border-2 shadow-inner focus:outline-none transition-all ${
                      userInputs[cyl.idx] === cyl.correct
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-slate-900 border-amber-400/50 text-amber-200 focus:border-amber-400'
                    }`}
                  />
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5">{cyl.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5 Clue Recap Checklist */}
        <div className="grid grid-cols-5 gap-2 text-center text-xs font-outfit">
          {[
            { step: 'Page 5', name: 'Sequence', val: '21' },
            { step: 'Page 6', name: 'Entry Hour', val: '10' },
            { step: 'Page 10', name: 'Lens Numerator', val: '2' },
            { step: 'Page 11', name: 'Area 48 Tens', val: '4' },
            { step: 'Page 14', name: 'Safe 68 Units', val: '8' },
          ].map((c, i) => (
            <div key={i} className="p-1.5 rounded-lg bg-amber-50 border border-amber-200 text-slate-800">
              <span className="text-[10px] text-slate-500 block">{c.step}</span>
              <span className="font-bold text-[11px] block truncate">{c.name}</span>
              <span className="font-mono font-black text-amber-900">[{c.val}]</span>
            </div>
          ))}
        </div>

        {/* Control Button */}
        <div className="no-print flex items-center justify-center gap-3">
          <button
            onClick={unlockAuto}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-fredoka font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Key className="w-4 h-4" />
            <span>Auto-Fill Verified Clues & Unlock Vault</span>
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-cinzel font-bold text-slate-900">Master Vault Code:</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-950">
              21 - 10 - 2 - 4 - 8
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Vault Chamber #12</span>
        </div>
      </div>
    </PageContainer>
  );
};
