import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { TRANSLATIONS } from '../../i18n/translations';
import { CertificateSeal } from '../illustrations/SuspectAvatars';
import { StarfallObservatoryGraphic, NovaCharacter, PipRobot } from '../illustrations/Characters';
import { Award, Sparkles, CheckCircle2, Bookmark, Edit3 } from 'lucide-react';

export const PageScratchpad: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;
  const [scratchText, setScratchText] = useState('');

  return (
    <PageContainer
      pageNumber={23}
      title={t.p23Title}
      subtitle={t.p23Subtitle}
      categoryBadge="Field Notes"
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3 font-outfit">
        <div className="flex items-center justify-between text-xs text-slate-700">
          <p>
            {printSettings.language === 'ro'
              ? 'Folosește acest spațiu pentru calcule, desene geometrice sau deducții.'
              : printSettings.language === 'de'
              ? 'Nutze dieses Rechengitter für Nebenrechnungen und Skizzen.'
              : printSettings.language === 'fr'
              ? 'Utilisez ce quadrillage pour poser vos calculs et vos croquis.'
              : printSettings.language === 'es'
              ? 'Utiliza esta cuadrícula para operaciones, dibujos geométricos y notas.'
              : 'Use this grid to jot down math workings, draw geometric sketches, or map out suspect deductions.'}
          </p>
          <div className="flex items-center gap-1 font-mono text-amber-900 font-bold">
            <Edit3 className="w-3.5 h-3.5" />
            <span>Field Notes Paper</span>
          </div>
        </div>

        {/* Math Grid Paper Sheet */}
        <div
          className={`relative flex-1 rounded-2xl border-2 p-4 shadow-inner flex flex-col justify-between ${
            isEco
              ? 'bg-white border-slate-300'
              : 'bg-[#fffef9] border-amber-900/20'
          }`}
          style={{
            backgroundImage:
              'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        >
          {/* Subtle Doodle from Nova */}
          <div className="absolute top-4 right-4 opacity-40 pointer-events-none text-right font-hand text-slate-600 text-xs">
            ★ PEMDAS ★<br />
            Area = L × W<br />
            P = 2(L + W)
          </div>

          <textarea
            value={scratchText}
            onChange={(e) => setScratchText(e.target.value)}
            placeholder="..."
            className="w-full h-full bg-transparent resize-none border-none focus:outline-none font-hand text-base font-bold text-slate-800 leading-[20px] p-2"
          />

          {/* Quick Formula Helpers on bottom */}
          <div className="relative z-10 p-2.5 rounded-xl bg-amber-50/90 border border-amber-300/80 backdrop-blur-xs flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <PipRobot size={36} expression="calculating" />
              <span className="font-fredoka text-amber-950 font-bold">Pip's Formula Quick-Guide:</span>
            </div>
            <div className="flex gap-4 font-mono text-[11px] text-slate-700">
              <span>Fraction Addition: a/c + b/c = (a+b)/c</span>
              <span>•</span>
              <span>Clock: 60 mins = 1 hour</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-600" />
            <span className="font-cinzel font-bold text-slate-900">{t.p23Title}:</span>
            <span className="font-mono text-slate-600">Free Practice Sheet</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Scratch Sheet #23</span>
        </div>
      </div>
    </PageContainer>
  );
};

export const PageCertificate: React.FC<{
  printSettings: PrintSettings;
  onNameChange?: (name: string) => void;
}> = ({ printSettings, onNameChange }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;

  return (
    <PageContainer
      pageNumber={24}
      title={t.p24Title}
      subtitle={t.p24Subtitle}
      categoryBadge="Certificate"
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div
        className={`relative h-full flex flex-col justify-between p-6 rounded-2xl border-4 select-none ${
          isEco
            ? 'bg-white border-slate-900 text-slate-900'
            : 'bg-gradient-to-b from-[#fffef7] via-[#fffbf0] to-[#fff8e7] border-amber-700/80 shadow-2xl'
        }`}
      >
        {/* Certificate Decorative Border */}
        <div className="absolute inset-2 border-2 border-dashed border-amber-600/40 rounded-xl pointer-events-none" />

        {/* Certificate Header Banner */}
        <div className="relative z-10 text-center pt-2">
          <div className="inline-flex items-center gap-2 text-amber-600 font-cinzel text-xs font-black tracking-[0.25em] uppercase">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{t.p24Header}</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl font-black text-slate-950 uppercase mt-1 tracking-tight drop-shadow-sm">
            {t.p24Hero}
          </h1>

          <p className="font-outfit text-xs text-slate-600 mt-1 max-w-md mx-auto">
            {t.p24Body}
          </p>
        </div>

        {/* Name Inscription Area (Fillable & Printable) */}
        <div className="relative z-10 text-center my-3 px-6">
          <span className="font-cinzel text-xs font-bold text-amber-900 uppercase tracking-wider block mb-1">
            {t.p24AwardedTo}
          </span>

          <div className="max-w-md mx-auto border-b-2 border-amber-800 pb-1">
            <input
              type="text"
              value={printSettings.detectiveName}
              onChange={(e) => onNameChange?.(e.target.value)}
              placeholder={t.detectiveNamePlaceholder}
              className="w-full text-center font-hand text-3xl font-black text-amber-950 bg-transparent focus:outline-none placeholder:text-slate-400 placeholder:text-xl"
            />
          </div>

          <div className="mt-2 flex items-center justify-center gap-2 text-xs font-outfit text-slate-700 font-medium">
            <span>Rank: <strong>{t.p24Rank}</strong></span>
            <span>•</span>
            <span>Case: <strong>{t.p24Case}</strong></span>
          </div>
        </div>

        {/* Central Graphic: Observatory & Official Gold Seal */}
        <div className="relative z-10 flex items-center justify-around my-1">
          {/* Starfall Observatory Small Illustration */}
          <div className="flex flex-col items-center">
            <StarfallObservatoryGraphic size={150} />
            <span className="font-cinzel text-[10px] font-bold text-slate-700 uppercase mt-1">
              {t.observatoryName}
            </span>
          </div>

          {/* Official Gold Seal Badge */}
          <div className="flex flex-col items-center animate-pulse" style={{ animationDuration: '3s' }}>
            <CertificateSeal size={130} />
          </div>
        </div>

        {/* Signatures & Accreditation Footer */}
        <div className="relative z-10 pt-3 border-t border-amber-900/20 grid grid-cols-3 gap-4 text-center">
          {/* Signature 1: Detective Nova */}
          <div className="flex flex-col items-center">
            <div className="font-hand text-2xl font-black text-amber-950 leading-none h-8 flex items-end">
              Detective Nova
            </div>
            <div className="w-32 h-[1px] bg-slate-400 my-1" />
            <span className="font-outfit text-[11px] font-bold text-slate-700">{t.p24LeadInvestigator}</span>
          </div>

          {/* Date & Division */}
          <div className="flex flex-col items-center justify-center">
            <div className="font-mono text-xs font-bold text-slate-900">
              {new Date().toLocaleDateString(printSettings.language === 'en' ? 'en-US' : printSettings.language, { year: 'numeric', month: 'short', day: 'numeric' })}
            </div>
            <div className="w-24 h-[1px] bg-slate-400 my-1" />
            <span className="font-outfit text-[10px] text-slate-500 uppercase">{t.p24IssueDate}</span>
          </div>

          {/* Signature 2: Robot Pip */}
          <div className="flex flex-col items-center">
            <div className="font-mono text-xl font-bold text-sky-800 tracking-widest leading-none h-8 flex items-end">
              PIP //🤖 100%
            </div>
            <div className="w-32 h-[1px] bg-slate-400 my-1" />
            <span className="font-outfit text-[11px] font-bold text-slate-700">{t.p24CalcEngine}</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
