import React from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { TRANSLATIONS } from '../../i18n/translations';
import { NovaCharacter, PipRobot, StarfallObservatoryGraphic, MoonstoneCrystal } from '../illustrations/Characters';
import { Sparkles, Compass, Search, Award } from 'lucide-react';

interface PageCoverProps {
  printSettings: PrintSettings;
  onNameChange?: (name: string) => void;
}

export const PageCover: React.FC<PageCoverProps> = ({ printSettings, onNameChange }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;

  return (
    <PageContainer pageNumber={1} isCover printSettings={printSettings}>
      <div
        className={`relative h-full flex flex-col justify-between p-8 select-none ${
          isEco
            ? 'bg-white text-slate-900 border-8 border-slate-900'
            : 'bg-gradient-to-b from-[#090d16] via-[#101a30] to-[#0a1122] text-white'
        }`}
      >
        {/* Celestial Starry Backdrop */}
        {!isEco && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Glowing moon in top right */}
            <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-amber-100/20 blur-2xl pointer-events-none" />
            <div className="absolute top-8 right-10 w-24 h-24 rounded-full bg-amber-100/90 shadow-[0_0_50px_rgba(254,240,138,0.5)] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-slate-900/10" />
            </div>

            {/* Scattered twinkling stars */}
            {[
              { top: '8%', left: '12%', size: '3px' },
              { top: '15%', left: '25%', size: '2px' },
              { top: '22%', left: '8%', size: '4px' },
              { top: '12%', left: '45%', size: '2px' },
              { top: '18%', left: '60%', size: '3px' },
              { top: '25%', left: '78%', size: '2px' },
              { top: '35%', left: '88%', size: '3px' },
              { top: '48%', left: '5%', size: '2px' },
              { top: '55%', left: '92%', size: '3px' },
            ].map((st, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white shadow-[0_0_6px_#fff]"
                style={{ top: st.top, left: st.left, width: st.size, height: st.size }}
              />
            ))}
          </div>
        )}

        {/* Top Header & Age Tag */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-md ${
                isEco ? 'bg-slate-900 text-white' : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{t.coverCaseTag}</span>
            </div>
            <span className={`text-xs tracking-wider uppercase font-mono ${isEco ? 'text-slate-600' : 'text-amber-200/80'}`}>
              {t.observatoryName}
            </span>
          </div>

          {/* Age Tag - exactly like the cover in the picture */}
          <div
            className={`px-4 py-2 rounded-xl text-center shadow-lg border-2 ${
              isEco
                ? 'bg-slate-100 border-slate-900 text-slate-900'
                : 'bg-gradient-to-b from-amber-400 to-amber-600 border-amber-300 text-slate-950 font-black'
            }`}
          >
            <div className="text-[10px] uppercase tracking-wider font-extrabold leading-none">{t.agesTag.split(' ')[0]}</div>
            <div className="font-fredoka text-xl font-black leading-none mt-0.5">{t.agesTag.split(' ')[1] || '8-12'}</div>
          </div>
        </div>

        {/* Main Title Typography - Premium Commercial Edition Branding */}
        <div className="relative z-10 text-center my-2">
          <div className="inline-flex items-center gap-2 font-cinzel font-bold text-amber-300 tracking-[0.25em] text-xs sm:text-sm uppercase drop-shadow">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.theSecret}</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>

          <h1
            className={`font-cinzel font-black tracking-tight text-3xl sm:text-5xl uppercase mt-1 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] ${
              isEco
                ? 'text-slate-950 stroke-2'
                : 'bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent'
            }`}
          >
            {t.bookTitle}
          </h1>

          {/* Subtitle Ribbon */}
          <div className="relative inline-block mt-2">
            <div
              className={`px-6 py-1.5 rounded-full font-fredoka font-bold text-base sm:text-lg tracking-wide shadow-xl border ${
                isEco
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-gradient-to-r from-sky-900 via-indigo-900 to-sky-900 text-amber-300 border-amber-400/40 shadow-[0_0_20px_rgba(56,189,248,0.3)]'
              }`}
            >
              {t.bookSubtitle}
            </div>
          </div>

          <p className={`mt-2 font-outfit text-xs sm:text-sm font-semibold tracking-wider uppercase ${isEco ? 'text-slate-700' : 'text-slate-300'}`}>
            {t.bookDescription}
          </p>
        </div>

        {/* Central Illustrated Cover Artwork */}
        <div className="relative z-10 my-1 flex items-center justify-center">
          <div className="relative w-full max-w-[540px] h-[340px] flex items-center justify-center">
            {/* Background Observatory Scene */}
            <div className="absolute inset-0 flex items-center justify-center opacity-85">
              <StarfallObservatoryGraphic size={300} />
            </div>

            {/* Detective Nova in Front Left */}
            <div className="absolute -left-2 bottom-0 z-20 transform hover:scale-105 transition-transform">
              <NovaCharacter size={210} pose="holding_lens" />
            </div>

            {/* Glowing Moonstone on Pedestal Center */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 animate-bounce" style={{ animationDuration: '4s' }}>
              <MoonstoneCrystal size={120} glow={!isEco} />
            </div>

            {/* Robot Pip on Front Right */}
            <div className="absolute -right-2 bottom-6 z-20 transform hover:scale-105 transition-transform">
              <PipRobot size={150} expression="happy" />
            </div>
          </div>
        </div>

        {/* Feature Pill Badges from User Preview */}
        <div className="relative z-10 grid grid-cols-5 gap-2 my-2">
          {[
            { label: t.badges.logic, icon: '🧠', code: '01' },
            { label: t.badges.number, icon: '🔢', code: '02' },
            { label: t.badges.geometry, icon: '📐', code: '03' },
            { label: t.badges.graphs, icon: '📊', code: '04' },
            { label: t.badges.more, icon: '🔍', code: '★' },
          ].map((pill, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center p-2 rounded-xl text-center border shadow-md transition-all ${
                isEco
                  ? 'bg-slate-100 border-slate-300 text-slate-800'
                  : 'bg-slate-900/80 backdrop-blur-sm border-amber-500/30 hover:border-amber-400 text-slate-200'
              }`}
            >
              <div className="text-lg leading-none mb-1">{pill.icon}</div>
              <div className="font-cinzel text-[9px] font-bold leading-tight tracking-wider">
                {pill.label}
              </div>
            </div>
          ))}
        </div>

        {/* Ownership Line & Commercial Edition Stamp */}
        <div
          className={`relative z-10 p-3 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${
            isEco
              ? 'bg-slate-50 border-slate-300 text-slate-900'
              : 'bg-slate-900/90 border-amber-500/40 text-amber-100'
          }`}
        >
          <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
            <span className="font-cinzel text-xs font-bold whitespace-nowrap text-amber-400">
              {t.detectiveNameLabel}
            </span>
            <input
              type="text"
              value={printSettings.detectiveName}
              onChange={(e) => onNameChange?.(e.target.value)}
              placeholder={t.detectiveNamePlaceholder}
              className="flex-1 bg-transparent border-b-2 border-dashed border-amber-400/60 font-hand text-lg text-amber-300 focus:outline-none focus:border-amber-400 px-2 placeholder:text-slate-500"
            />
          </div>

          <div className="flex items-center gap-2 text-[11px] font-outfit text-slate-400 whitespace-nowrap">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{t.workbookEditionTag}</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
