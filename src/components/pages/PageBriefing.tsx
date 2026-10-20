import React from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { TRANSLATIONS } from '../../i18n/translations';
import { NovaCharacter, PipRobot } from '../illustrations/Characters';
import { AlertCircle, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export const PageBriefing: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;

  return (
    <PageContainer
      pageNumber={2}
      title={t.briefingTitle}
      subtitle={t.briefingSubtitle}
      categoryBadge={t.briefingBadge}
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* Urgent Police Dispatch / Incident Report Box */}
        <div
          className={`p-5 rounded-2xl border-2 relative shadow-md ${
            isEco
              ? 'bg-slate-50 border-slate-400'
              : 'bg-amber-50/70 border-amber-900/20 text-slate-800'
          }`}
        >
          {/* Top Confidential Stamp */}
          <div className="absolute top-3 right-4 -rotate-6 border-2 border-red-700 text-red-700 px-3 py-0.5 rounded font-mono font-black text-xs tracking-widest uppercase">
            {t.confidentialStamp}
          </div>

          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <h2 className="font-cinzel text-lg font-bold text-slate-900 tracking-wide uppercase">
              {t.reportHeader}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs font-outfit mb-3 border-b border-amber-900/15 pb-2 text-slate-700">
            <div>
              <span className="font-bold text-slate-900">{t.reportLocation}</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">{t.reportTime}</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">{t.reportObject}</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">{t.reportStatus}</span>
            </div>
          </div>

          <p className="font-outfit text-sm leading-relaxed text-slate-800">
            {t.reportStory}
          </p>
        </div>

        {/* Character Dialogue & Briefing Scene */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Nova's Notes */}
          <div
            className={`p-4 rounded-xl border flex gap-3 items-start shadow-sm ${
              isEco
                ? 'bg-white border-slate-300'
                : 'bg-gradient-to-br from-amber-100/60 to-orange-50/60 border-amber-300/60'
            }`}
          >
            <NovaCharacter size={95} pose="holding_lens" className="shrink-0 -mt-2" />
            <div>
              <div className="font-fredoka text-sm font-bold text-amber-950 flex items-center gap-1">
                <span>{t.novaSays}</span>
              </div>
              <p className="font-hand text-base leading-snug text-slate-800 mt-1 font-bold">
                {t.novaDialogue}
              </p>
            </div>
          </div>

          {/* Pip's Calculation Guidance */}
          <div
            className={`p-4 rounded-xl border flex gap-3 items-start shadow-sm ${
              isEco
                ? 'bg-white border-slate-300'
                : 'bg-gradient-to-br from-sky-50 to-indigo-50/60 border-sky-200'
            }`}
          >
            <PipRobot size={90} expression="happy" className="shrink-0 -mt-2" />
            <div>
              <div className="font-fredoka text-sm font-bold text-sky-950 flex items-center gap-1">
                <span>{t.pipProtocol}</span>
              </div>
              <p className="font-outfit text-xs leading-relaxed text-slate-700 mt-1">
                {t.pipDialogue}
              </p>
            </div>
          </div>
        </div>

        {/* Young Detective Rules & Oath */}
        <div
          className={`p-4 rounded-2xl border ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-slate-900 text-amber-100 border-amber-500/30'
          }`}
        >
          <div className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{t.academyRulesTitle}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-outfit">
            <div className="flex gap-2">
              <span>{t.rule1}</span>
            </div>
            <div className="flex gap-2">
              <span>{t.rule2}</span>
            </div>
            <div className="flex gap-2">
              <span>{t.rule3}</span>
            </div>
          </div>
        </div>

        {/* Detective Oath & Signature line */}
        <div className="border-t-2 border-dashed border-amber-900/20 pt-3 flex items-center justify-between text-xs font-outfit">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">{t.signatureLabel}</span>
            <span className="font-hand text-lg text-amber-900 font-bold border-b border-slate-500 px-4 min-w-[160px]">
              {printSettings.detectiveName || '_______________________'}
            </span>
          </div>
          <div className="font-mono text-slate-500 text-[11px]">
            {t.badgeIssued}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
