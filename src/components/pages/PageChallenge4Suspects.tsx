import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { getLocalizedSuspects } from '../../data/workbookData';
import { TRANSLATIONS } from '../../i18n/translations';
import { SuspectAvatar } from '../illustrations/SuspectAvatars';
import { CheckCircle2, HelpCircle, Lightbulb, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PageChallenge4Suspects: React.FC<{
  printSettings: PrintSettings;
  userAnswer?: string;
  onAnswerChange?: (val: string) => void;
  onSolved?: () => void;
}> = ({ printSettings, userAnswer = '', onAnswerChange, onSolved }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;
  const suspects = getLocalizedSuspects(printSettings.language || 'en');
  const [selectedSuspect, setSelectedSuspect] = useState<string>(userAnswer);
  const [isCorrect, setIsCorrect] = useState(userAnswer === 'Dr. Vega' || userAnswer === t.suspects.vega.name);
  const [showLogicGuide, setShowLogicGuide] = useState(false);

  const handleSelect = (name: string, id: string) => {
    setSelectedSuspect(name);
    onAnswerChange?.(name);
    if (id === 'vega') {
      setIsCorrect(true);
      onSolved?.();
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <PageContainer
      pageNumber={8}
      title={t.c4Title}
      subtitle={t.c4Subtitle}
      categoryBadge={t.c4Badge}
      categoryColor="bg-amber-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        {/* Story Challenge Intro */}
        <div className="text-slate-800 font-outfit text-sm leading-relaxed">
          <p>{t.c4Story}</p>
        </div>

        {/* 4 Suspect Statement Cards (Matching layout from image preview) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {suspects.map((suspect) => {
            const isChosen = selectedSuspect === suspect.name;
            return (
              <div
                key={suspect.id}
                onClick={() => handleSelect(suspect.name, suspect.id)}
                className={`p-3 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                  isChosen
                    ? 'border-amber-600 bg-amber-100/70 shadow-md ring-2 ring-amber-500/30'
                    : isEco
                    ? 'border-slate-300 bg-white hover:border-slate-400'
                    : 'border-amber-900/15 bg-white/90 hover:border-amber-400'
                }`}
              >
                <SuspectAvatar id={suspect.id as any} size={54} className="shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-fredoka text-sm font-bold text-slate-900">
                    {suspect.name}
                  </div>
                  <div className="font-hand text-sm font-bold text-amber-900 mt-0.5 truncate">
                    {suspect.statement}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Who Took the Moonstone? Checkboxes */}
        <div className="p-4 rounded-2xl border-2 border-amber-900/20 bg-amber-50/60 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-fredoka text-base font-bold text-slate-900">
              {t.c4Question}
            </span>
            {isCorrect && (
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" /> {suspects.find(s => s.id === 'vega')?.name} !
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-outfit">
            {suspects.map((s) => (
              <label
                key={s.name}
                className={`flex items-center gap-2 p-2 rounded-xl border cursor-pointer transition-all ${
                  selectedSuspect === s.name
                    ? 'bg-amber-600 text-white font-bold border-amber-700'
                    : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name="suspect_choice"
                  checked={selectedSuspect === s.name}
                  onChange={() => handleSelect(s.name, s.id)}
                  className="rounded text-amber-600 focus:ring-amber-500"
                />
                <span>{s.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Step-by-Step Logic Deduction Guide */}
        <div
          className={`p-3.5 rounded-2xl border flex items-start gap-3 text-xs font-outfit shadow-sm ${
            isEco ? 'bg-slate-50 border-slate-300' : 'bg-indigo-50/70 border-indigo-200'
          }`}
        >
          <div className="p-1.5 rounded-lg bg-indigo-600 text-white shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <span className="font-cinzel text-xs font-bold text-indigo-950 uppercase tracking-wider block">
              {t.c4StepTitle}
            </span>
            <p className="text-slate-700 leading-snug">
              {t.c4Step1}
            </p>
            <p className="text-slate-700 leading-snug">
              {t.c4Step2}
            </p>
          </div>
        </div>

        {/* Bottom Clue Marker */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs font-outfit">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span className="font-cinzel font-bold text-slate-900">{t.c4CulpritIdentified}</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-red-100 text-red-950">
              {isCorrect ? `${suspects.find(s => s.id === 'vega')?.name} (${suspects.find(s => s.id === 'vega')?.role})` : '...'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Case Logic File #04</span>
        </div>
      </div>
    </PageContainer>
  );
};
