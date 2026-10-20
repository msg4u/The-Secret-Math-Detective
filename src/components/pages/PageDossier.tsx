import React from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { getLocalizedSuspects } from '../../data/workbookData';
import { TRANSLATIONS } from '../../i18n/translations';
import { SuspectAvatar } from '../illustrations/SuspectAvatars';
import { UserCheck, ShieldQuestion } from 'lucide-react';

export const PageDossier: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;
  const suspects = getLocalizedSuspects(printSettings.language || 'en');

  return (
    <PageContainer
      pageNumber={3}
      title={t.dossierTitle}
      subtitle={t.dossierSubtitle}
      categoryBadge={t.dossierBadge}
      categoryColor="bg-indigo-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        <div className="text-xs text-slate-700 font-outfit">
          <p>{t.dossierDesc}</p>
        </div>

        {/* 4 Suspect Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 flex-1">
          {suspects.map((suspect) => (
            <div
              key={suspect.id}
              className={`p-3.5 rounded-2xl border-2 flex flex-col justify-between shadow-sm transition-all ${
                isEco
                  ? 'bg-white border-slate-300'
                  : 'bg-amber-50/50 border-amber-900/15 hover:border-amber-400'
              }`}
            >
              <div className="flex items-start gap-3">
                <SuspectAvatar
                  id={suspect.id as any}
                  size={60}
                  className="shrink-0 ring-2 ring-slate-800/10"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-fredoka text-base font-bold text-slate-900 leading-tight">
                      {suspect.name}
                    </h3>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold">
                      {suspect.role}
                    </span>
                  </div>

                  {/* Suspect Statement in Quotes */}
                  <div className="mt-1.5 p-2 rounded-lg bg-white/80 border border-amber-900/10 text-xs">
                    <span className="font-hand text-sm font-bold text-amber-900 block">
                      {suspect.quote}
                    </span>
                  </div>
                </div>
              </div>

              {/* Detective Notes area for kid to scribble or check off */}
              <div className="mt-2.5 pt-2 border-t border-dashed border-amber-900/15 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <ShieldQuestion className="w-3.5 h-3.5 text-amber-600" />
                  <span className="font-mono text-[11px]">Deduction Note:</span>
                </div>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-1 text-[11px] text-slate-700 cursor-pointer">
                    <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
                    <span>{t.alibiChecked}</span>
                  </label>
                  <label className="flex items-center gap-1 text-[11px] text-red-700 cursor-pointer">
                    <input type="checkbox" className="rounded text-red-600 focus:ring-red-500" />
                    <span>{t.suspectLabel}</span>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detective Nova's Pro Tip */}
        <div
          className={`p-3 rounded-xl border flex items-center gap-3 ${
            isEco ? 'bg-slate-100 border-slate-300' : 'bg-amber-100/70 border-amber-300/80'
          }`}
        >
          <div className="p-2 rounded-lg bg-amber-500 text-slate-950 font-black text-xs font-mono">
            TIP
          </div>
          <p className="font-hand text-sm text-slate-800 font-bold">
            {t.dossierTip}
          </p>
        </div>
      </div>
    </PageContainer>
  );
};
