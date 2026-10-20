import React from 'react';
import { PrintSettings } from '../types/workbook';
import { TRANSLATIONS } from '../i18n/translations';
import { Sparkles, Key, Lock, CheckCircle2, ShieldAlert, Award } from 'lucide-react';

interface InteractiveClueTrackerProps {
  printSettings: PrintSettings;
  solvedCount: number;
  totalChallenges?: number;
  vaultStatus: boolean;
  onOpenVaultPage: () => void;
  onOpenCertificatePage: () => void;
}

export const InteractiveClueTracker: React.FC<InteractiveClueTrackerProps> = ({
  printSettings,
  solvedCount,
  totalChallenges = 12,
  vaultStatus,
  onOpenVaultPage,
  onOpenCertificatePage,
}) => {
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;
  const percent = Math.round((solvedCount / totalChallenges) * 100);

  return (
    <aside aria-label="Detective case tracker" className="bg-slate-900/95 backdrop-blur-md border border-amber-500/30 text-slate-100 rounded-2xl p-4 shadow-2xl space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <h2 className="font-cinzel text-xs font-bold text-amber-300 uppercase tracking-wider">
            {t.progressTracker}
          </h2>
        </div>
        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40">
          {solvedCount} / {totalChallenges} {t.solvedStatus}
        </span>
      </div>

      {/* Progress Bar */}
      <div>
        <div className="flex justify-between text-[11px] font-outfit text-slate-400 mb-1">
          <span>{t.investigation}</span>
          <span className="font-mono text-amber-300 font-bold">{percent}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-sky-400 to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Vault Combination Collected Status */}
      <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-cinzel text-[10px] font-bold text-amber-400 uppercase flex items-center gap-1">
            <Key className="w-3 h-3" /> {t.vaultTumblerCode}
          </span>
          <span className="font-mono text-[10px] text-slate-400">{t.fiveCylinders}</span>
        </div>
        <div className="flex items-center justify-between font-mono font-bold text-center">
          <span className="px-1.5 py-0.5 bg-slate-800 text-amber-300 rounded border border-amber-500/30">21</span>
          <span className="text-slate-600">-</span>
          <span className="px-1.5 py-0.5 bg-slate-800 text-sky-300 rounded border border-sky-500/30">10</span>
          <span className="text-slate-600">-</span>
          <span className="px-1.5 py-0.5 bg-slate-800 text-emerald-300 rounded border border-emerald-500/30">2</span>
          <span className="text-slate-600">-</span>
          <span className="px-1.5 py-0.5 bg-slate-800 text-amber-300 rounded border border-amber-500/30">4</span>
          <span className="text-slate-600">-</span>
          <span className="px-1.5 py-0.5 bg-slate-800 text-rose-300 rounded border border-rose-500/30">8</span>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <button
          onClick={onOpenVaultPage}
          className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-fredoka font-bold text-xs flex items-center justify-center gap-1 shadow-md transition-all cursor-pointer"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>{t.moonstoneVault}</span>
        </button>

        <button
          onClick={onOpenCertificatePage}
          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-fredoka font-bold text-xs flex items-center justify-center gap-1 border border-amber-500/30 transition-all cursor-pointer"
        >
          <Award className="w-3.5 h-3.5" />
          <span>{t.certificate}</span>
        </button>
      </div>
    </aside>
  );
};
