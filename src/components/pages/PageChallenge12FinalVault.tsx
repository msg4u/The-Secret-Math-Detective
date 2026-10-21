import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { TRANSLATIONS } from '../../i18n/translations';
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
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;
  const [userInputs, setUserInputs] = useState<string[]>(['', '', '', '', '']);
  const [isOpen, setIsOpen] = useState(userAnswer === 'OPEN' || printSettings.solvedStatus[16]);

  const handleInputChange = (idx: number, val: string) => {
    const updated = [...userInputs];
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
      title={t.c12Title}
      subtitle={t.c12Subtitle}
      categoryBadge={t.c12Badge}
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-slate-800 font-outfit text-xs leading-relaxed">
          <p>{t.c12Story}</p>
        </div>

        {/* Master Moonstone Vault Graphic */}
        <div
          className={`p-4 rounded-3xl border-2 flex flex-col items-center shadow-lg relative overflow-hidden ${
            isEco
              ? 'bg-slate-50 border-slate-400'
              : 'bg-gradient-to-b from-[#091122] via-[#0e1d3a] to-[#091122] text-white border-amber-500/40'
          }`}
        >
          <div className="font-cinzel text-xs font-bold text-amber-300 uppercase tracking-widest mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.c12VaultHeader}</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>

          {/* Central Vault Door / Moonstone Crystal */}
          <div className="my-2 relative flex items-center justify-center">
            {isOpen ? (
              <div className="flex flex-col items-center animate-bounce" style={{ animationDuration: '2s' }}>
                <MoonstoneCrystal size={110} />
                <span className="font-cinzel text-xs font-bold text-cyan-300 mt-2 uppercase tracking-widest">
                  {t.c12Unlocked}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-amber-600/70 flex items-center justify-center shadow-inner">
                  <Lock className="w-10 h-10 text-amber-400" />
                </div>
                <span className="font-cinzel text-xs font-bold text-amber-400 mt-2 uppercase tracking-widest">
                  {t.c12Locked}
                </span>
              </div>
            )}
          </div>

          {/* 5 Tumbler Cylinders Input Row */}
          <div className="w-full max-w-lg mt-3 pt-3 border-t border-slate-800">
            <div className="text-center font-mono text-[11px] text-slate-400 mb-2">
              {printSettings.language === 'ro' ? 'Combină cele 5 cifre descoperite în anchetă:' :
               printSettings.language === 'de' ? 'Kombiniere die 5 ermittelten Ziffern:' :
               printSettings.language === 'fr' ? 'Combinez les 5 chiffres de l’enquête :' :
               printSettings.language === 'es' ? 'Combina las 5 cifras descubiertas en la investigación:' :
               'Combine the 5 Clues from the Investigation:'}
            </div>

            <div className="grid grid-cols-5 gap-2">
              {[
                { label: 'Cyl 1', hint: 'Seq: 21', defaultVal: '21' },
                { label: 'Cyl 2', hint: 'Hour: 10', defaultVal: '10' },
                { label: 'Cyl 3', hint: 'Frac: 2', defaultVal: '2' },
                { label: 'Cyl 4', hint: 'Tens: 4', defaultVal: '4' },
                { label: 'Cyl 5', hint: 'Gear: 8', defaultVal: '8' },
              ].map((cyl, idx) => (
                <div key={idx} className="flex flex-col items-center bg-slate-800/90 p-2 rounded-xl border border-slate-700">
                  <span className="text-[10px] font-mono font-bold text-amber-400 mb-1">{cyl.label}</span>
                  <input
                    type="text"
                    maxLength={3}
                    value={userInputs[idx] || (isOpen ? cyl.defaultVal : '')}
                    onChange={(e) => handleInputChange(idx, e.target.value)}
                    placeholder="?"
                    className="w-full text-center font-mono text-lg font-bold py-1 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-400"
                  />
                  <span className="text-[9px] text-slate-400 font-mono mt-1">{cyl.hint}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Auto-Fill Button for easy solving */}
        <div className="no-print flex items-center justify-center">
          <button
            onClick={unlockAuto}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-fredoka font-bold rounded-xl text-xs shadow-md flex items-center gap-2 cursor-pointer transition-all"
          >
            <Key className="w-3.5 h-3.5" />
            <span>{t.c12AutoFill}</span>
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-cinzel font-bold text-slate-900">
              {printSettings.language === 'ro' ? 'Cod Final Seif:' :
               printSettings.language === 'de' ? 'Tresor-Hauptcode:' :
               printSettings.language === 'fr' ? 'Code Maître Voûte :' :
               printSettings.language === 'es' ? 'Código Maestro Bóveda:' :
               'Vault Master Combination:'}
            </span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-950">
              21 - 10 - 2 - 4 - 8
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Sanctum Vault #12</span>
        </div>
      </div>
    </PageContainer>
  );
};
