import React from 'react';
import { PrintSettings } from '../types/workbook';
import { TRANSLATIONS } from '../i18n/translations';

interface PageContainerProps {
  pageNumber: number;
  totalPages?: number;
  title?: string;
  subtitle?: string;
  categoryBadge?: string;
  categoryColor?: string;
  isCover?: boolean;
  printSettings: PrintSettings;
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  pageNumber,
  totalPages = 24,
  title,
  subtitle,
  categoryBadge,
  categoryColor = 'bg-amber-600',
  isCover = false,
  printSettings,
  children,
}) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;

  return (
    <div
      id={`page-sheet-${pageNumber}`}
      className={`page-sheet relative mx-auto w-full select-text transition-all duration-300 print:shadow-none print:border-none print:m-0 print:p-0 ${
        isCover ? 'overflow-hidden' : ''
      } ${
        isEco
          ? 'bg-white text-slate-900 border-2 border-slate-300'
          : 'bg-[#fffdf8] text-slate-800 shadow-2xl border border-amber-900/10'
      }`}
      style={{
        aspectRatio: '8.5 / 11',
        maxWidth: '850px',
        minHeight: '1100px',
      }}
    >
      {/* Professional Crop Marks for Commercial Edition */}
      {printSettings.showCropMarks && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {/* Top Left */}
          <div className="absolute top-2 left-2 w-4 h-[1px] bg-slate-400" />
          <div className="absolute top-2 left-2 w-[1px] h-4 bg-slate-400" />
          {/* Top Right */}
          <div className="absolute top-2 right-2 w-4 h-[1px] bg-slate-400" />
          <div className="absolute top-2 right-2 w-[1px] h-4 bg-slate-400" />
          {/* Bottom Left */}
          <div className="absolute bottom-2 left-2 w-4 h-[1px] bg-slate-400" />
          <div className="absolute bottom-2 left-2 w-[1px] h-4 bg-slate-400" />
          {/* Bottom Right */}
          <div className="absolute bottom-2 right-2 w-4 h-[1px] bg-slate-400" />
          <div className="absolute bottom-2 right-2 w-[1px] h-4 bg-slate-400" />
        </div>
      )}

      {/* Parchment & Blueprint Subtle Background Grid */}
      {!isCover && (
        <div
          className={`absolute inset-0 pointer-events-none opacity-[0.035] ${
            isEco ? 'opacity-[0.02]' : ''
          }`}
          style={{
            backgroundImage:
              'radial-gradient(#b45309 1px, transparent 1px), radial-gradient(#0284c7 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
          }}
        />
      )}

      {/* Top Header Banner for interior pages */}
      {!isCover && (
        <header className="relative z-10 px-8 pt-6 pb-2 border-b border-amber-900/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-amber-300 font-cinzel font-bold text-sm shadow-sm">
              {pageNumber}
            </div>
            <div>
              <span className="font-cinzel text-xs font-bold tracking-widest uppercase text-amber-900/70 block">
                {t.headerSeries}
              </span>
              <h1 className="font-fredoka text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                {title}
                {categoryBadge && (
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full text-white ${categoryColor}`}
                  >
                    {categoryBadge}
                  </span>
                )}
              </h1>
            </div>
          </div>

          <div className="text-right">
            {subtitle && (
              <span className="font-hand text-base text-amber-800 font-bold block">
                {subtitle}
              </span>
            )}
            <div className="flex items-center gap-1 justify-end text-[11px] text-slate-500 font-medium">
              <span>{t.observatoryName}</span>
              <span>•</span>
              <span className="font-mono">P.{pageNumber}</span>
            </div>
          </div>
        </header>
      )}

      {/* Main Page Interior Area */}
      <main className={`relative z-10 ${isCover ? 'h-full' : 'p-8 pt-4 pb-14 h-[calc(100%-80px)] flex flex-col justify-between'}`}>
        {children}
      </main>

      {/* Bottom Footer for interior pages */}
      {!isCover && (
        <footer className="absolute bottom-0 inset-x-0 z-10 px-8 py-3 border-t border-amber-900/10 flex items-center justify-between text-xs text-slate-500 font-outfit">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">{t.footerAgeTag}</span>
            <span>|</span>
            <span>{t.footerAdventure}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-hand text-sm text-slate-600 font-bold">
              {t.footerGoal}
            </span>
            <span className="font-mono font-bold text-slate-700">
              {pageNumber} / {totalPages}
            </span>
          </div>
        </footer>
      )}
    </div>
  );
};
