import React, { useState, useEffect, useRef } from 'react';
import { Language, PrintSettings } from '../types/workbook';
import { WORKBOOK_PAGES, getLocalizedPages } from '../data/workbookData';
import { SUPPORTED_LANGUAGES, TRANSLATIONS } from '../i18n/translations';
import { PageCover } from './pages/PageCover';
import { PageBriefing } from './pages/PageBriefing';
import { PageDossier } from './pages/PageDossier';
import { PageObservatoryMap } from './pages/PageObservatoryMap';
import { PageChallenge1Patterns } from './pages/PageChallenge1Patterns';
import { PageChallenge2Time } from './pages/PageChallenge2Time';
import { PageChallenge3Coordinates } from './pages/PageChallenge3Coordinates';
import { PageChallenge4Suspects } from './pages/PageChallenge4Suspects';
import { PageChallenge5Geometry } from './pages/PageChallenge5Geometry';
import { PageChallenge6Fractions } from './pages/PageChallenge6Fractions';
import { PageChallenge7AreaPerimeter } from './pages/PageChallenge7AreaPerimeter';
import { PageChallenge8Cipher } from './pages/PageChallenge8Cipher';
import { PageChallenge9Graphs } from './pages/PageChallenge9Graphs';
import { PageChallenge10Operations } from './pages/PageChallenge10Operations';
import { PageChallenge11Footprints } from './pages/PageChallenge11Footprints';
import { PageChallenge12FinalVault } from './pages/PageChallenge12FinalVault';
import { PageSolutionReveal, PageEvidenceLog } from './pages/PageStoryAndEvidence';
import { PageBonusMaze, PageBonusCrossword } from './pages/PageBonusPuzzles';
import { PageAnswerKey1, PageAnswerKey2 } from './pages/PageAnswerKeys';
import { PageScratchpad, PageCertificate } from './pages/PageCertificateAndNotes';
import { InteractiveClueTracker } from './InteractiveClueTracker';
import {
  Printer,
  BookOpen,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Download,
  Layers,
  FileCheck,
  Globe,
  ChevronDown,
  Check,
} from 'lucide-react';

export const WorkbookViewer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'single' | 'spread' | 'grid' | 'print-all'>('single');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState<boolean>(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const [printSettings, setPrintSettings] = useState<PrintSettings>({
    language: 'en',
    mode: 'color',
    showCropMarks: false,
    detectiveName: 'Detective Alex',
    solvedStatus: {
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
    },
  });

  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({
    challenge1: '',
    challenge2: '',
    challenge3: '',
    challenge4: '',
    challenge5: '',
    challenge6: '',
    challenge7: '',
    challenge8: '',
    challenge9: '',
    challenge10: '',
    challenge11: '',
    challenge12: '',
  });

  // Handle clicking outside the language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate translations & localized pages
  const currentLang = printSettings.language || 'en';
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const currentLangOption =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];
  const pages = getLocalizedPages(currentLang);

  // Calculate number of solved challenges
  const solvedCount = Object.values(printSettings.solvedStatus).filter(Boolean).length;
  const vaultStatus = printSettings.solvedStatus[16] || false;

  const markPageSolved = (pageNum: number) => {
    setPrintSettings((prev) => ({
      ...prev,
      solvedStatus: { ...prev.solvedStatus, [pageNum]: true },
    }));
  };

  const handlePrint = (mode: 'all' | 'single') => {
    if (mode === 'all') {
      setViewMode('print-all');
      setTimeout(() => {
        window.print();
      }, 350);
    } else {
      window.print();
    }
  };

  const handleNameChange = (name: string) => {
    setPrintSettings((prev) => ({ ...prev, detectiveName: name }));
  };

  const handleLanguageChange = (lang: Language) => {
    setPrintSettings((prev) => ({ ...prev, language: lang }));
    setIsLangDropdownOpen(false);
  };

  const renderPage = (pageNum: number) => {
    switch (pageNum) {
      case 1:
        return <PageCover printSettings={printSettings} onNameChange={handleNameChange} />;
      case 2:
        return <PageBriefing printSettings={printSettings} />;
      case 3:
        return <PageDossier printSettings={printSettings} />;
      case 4:
        return <PageObservatoryMap printSettings={printSettings} />;
      case 5:
        return (
          <PageChallenge1Patterns
            printSettings={printSettings}
            userAnswer={userAnswers.challenge1}
            onAnswerChange={(val) => setUserAnswers((prev) => ({ ...prev, challenge1: val }))}
            onSolved={() => markPageSolved(5)}
          />
        );
      case 6:
        return (
          <PageChallenge2Time
            printSettings={printSettings}
            userAnswer={userAnswers.challenge2}
            onAnswerChange={(val) => setUserAnswers((prev) => ({ ...prev, challenge2: val }))}
            onSolved={() => markPageSolved(6)}
          />
        );
      case 7:
        return (
          <PageChallenge3Coordinates
            printSettings={printSettings}
            userAnswer={userAnswers.challenge3}
            onAnswerChange={(val) => setUserAnswers((prev) => ({ ...prev, challenge3: val }))}
            onSolved={() => markPageSolved(7)}
          />
        );
      case 8:
        return (
          <PageChallenge4Suspects
            printSettings={printSettings}
            userAnswer={userAnswers.challenge4}
            onAnswerChange={(val) => setUserAnswers((prev) => ({ ...prev, challenge4: val }))}
            onSolved={() => markPageSolved(8)}
          />
        );
      case 9:
        return (
          <PageChallenge5Geometry
            printSettings={printSettings}
            userAnswer={userAnswers.challenge5}
            onAnswerChange={(val) => setUserAnswers((prev) => ({ ...prev, challenge5: val }))}
            onSolved={() => markPageSolved(9)}
          />
        );
      case 10:
        return (
          <PageChallenge6Fractions
            printSettings={printSettings}
            userAnswer={userAnswers.challenge6}
            onAnswerChange={(val) => setUserAnswers((prev) => ({ ...prev, challenge6: val }))}
            onSolved={() => markPageSolved(10)}
          />
        );
      case 11:
        return (
          <PageChallenge7AreaPerimeter
            printSettings={printSettings}
            userAnswer={userAnswers.challenge7}
            onAnswerChange={(val) => setUserAnswers((prev) => ({ ...prev, challenge7: val }))}
            onSolved={() => markPageSolved(11)}
          />
        );
      case 12:
        return (
          <PageChallenge8Cipher
            printSettings={printSettings}
            userAnswer={userAnswers.challenge8}
            onAnswerChange={(val) => setUserAnswers((prev) => ({ ...prev, challenge8: val }))}
            onSolved={() => markPageSolved(12)}
          />
        );
      case 13:
        return (
          <PageChallenge9Graphs
            printSettings={printSettings}
            userAnswer={userAnswers.challenge9}
            onAnswerChange={(val) => setUserAnswers((prev) => ({ ...prev, challenge9: val }))}
            onSolved={() => markPageSolved(13)}
          />
        );
      case 14:
        return (
          <PageChallenge10Operations
            printSettings={printSettings}
            userAnswer={userAnswers.challenge10}
            onAnswerChange={(val) => setUserAnswers((prev) => ({ ...prev, challenge10: val }))}
            onSolved={() => markPageSolved(14)}
          />
        );
      case 15:
        return (
          <PageChallenge11Footprints
            printSettings={printSettings}
            userAnswer={userAnswers.challenge11}
            onAnswerChange={(val) => setUserAnswers((prev) => ({ ...prev, challenge11: val }))}
            onSolved={() => markPageSolved(15)}
          />
        );
      case 16:
        return (
          <PageChallenge12FinalVault
            printSettings={printSettings}
            userAnswer={userAnswers.challenge12}
            onAnswerChange={(val) => setUserAnswers((prev) => ({ ...prev, challenge12: val }))}
            onSolved={() => markPageSolved(16)}
          />
        );
      case 17:
        return <PageSolutionReveal printSettings={printSettings} />;
      case 18:
        return <PageEvidenceLog printSettings={printSettings} />;
      case 19:
        return <PageBonusMaze printSettings={printSettings} />;
      case 20:
        return <PageBonusCrossword printSettings={printSettings} />;
      case 21:
        return <PageAnswerKey1 printSettings={printSettings} />;
      case 22:
        return <PageAnswerKey2 printSettings={printSettings} />;
      case 23:
        return <PageScratchpad printSettings={printSettings} />;
      case 24:
        return <PageCertificate printSettings={printSettings} onNameChange={handleNameChange} />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-outfit">
      {/* Top Application Header Bar */}
      <header className="no-print bg-slate-900 border-b border-amber-500/20 px-3 sm:px-4 py-2.5 sm:py-3 sticky top-0 z-50 flex flex-wrap items-center justify-between gap-2 shadow-xl">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center font-cinzel font-black text-base sm:text-lg shadow-md shrink-0">
            M
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-cinzel font-bold text-xs sm:text-sm text-amber-300 tracking-wider">
                {t.appTitle || 'THE SECRET MATH DETECTIVE'}
              </span>
              <span className="hidden md:inline-block text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase font-mono font-bold">
                {t.editionTag || 'Commercial Edition'}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 font-medium hidden sm:block">
              {t.appSub || '24-Page Printable Workbook & Interior Pages Studio'}
            </div>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
          <button
            onClick={() => setViewMode('single')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'single'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.singlePage || 'Single Page'}</span>
            <span className="sm:hidden">1P</span>
          </button>

          <button
            onClick={() => setViewMode('spread')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'spread'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.spreadView || '2-Page Spread'}</span>
            <span className="sm:hidden">2P</span>
          </button>

          <button
            onClick={() => setViewMode('grid')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.allPages || 'All 24 Pages'}</span>
            <span className="sm:hidden">24</span>
          </button>
        </div>

        {/* Actions, Language Switcher & Print Group */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* LANGUAGE SELECTOR DROPDOWN BUTTON */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setIsLangDropdownOpen((prev) => !prev)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 hover:border-amber-500/50 text-xs font-bold flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              title={t.language || 'Change Language'}
              aria-label="Change Language"
              aria-expanded={isLangDropdownOpen}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-base leading-none">{currentLangOption.flag}</span>
              <span className="hidden sm:inline font-medium text-xs">
                {currentLangOption.nativeName}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  isLangDropdownOpen ? 'rotate-180 text-amber-400' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-slate-900 border border-amber-500/30 shadow-2xl z-50 p-1.5 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 text-[10px] font-cinzel font-bold text-amber-400/90 uppercase tracking-wider border-b border-slate-800 flex items-center justify-between">
                  <span>{t.language || 'Change Language'}</span>
                  <span className="font-mono text-[9px] text-slate-500">5 Options</span>
                </div>
                <div className="mt-1 space-y-1">
                  {SUPPORTED_LANGUAGES.map((lang) => {
                    const isSelected = currentLang === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950 font-bold shadow'
                            : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg leading-none">{lang.flag}</span>
                          <div className="text-left">
                            <div className="font-semibold">{lang.nativeName}</div>
                            <div
                              className={`text-[10px] ${
                                isSelected ? 'text-slate-900/80' : 'text-slate-400'
                              }`}
                            >
                              {lang.name}
                            </div>
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-slate-950 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Eco / Color Mode Toggle */}
          <button
            onClick={() =>
              setPrintSettings((prev) => ({
                ...prev,
                mode: prev.mode === 'color' ? 'eco' : 'color',
              }))
            }
            title="Toggle between Full Color and Eco Ink-Saving Outline print"
            className="px-2 sm:px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-medium flex items-center gap-1 cursor-pointer transition-all"
          >
            <span>{printSettings.mode === 'color' ? t.fullColor || '🎨 Full Color' : t.ecoPrint || '🌱 Eco B&W'}</span>
          </button>

          {/* Crop Marks Toggle */}
          <button
            onClick={() =>
              setPrintSettings((prev) => ({
                ...prev,
                showCropMarks: !prev.showCropMarks,
              }))
            }
            title="Toggle printer trim crop marks"
            className={`hidden sm:flex px-2.5 py-1.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
              printSettings.showCropMarks
                ? 'bg-sky-900/60 border-sky-400 text-sky-200'
                : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            <span>{t.trimMarks || '✂️ Trim Marks'}</span>
          </button>

          {/* Print Current Page Button */}
          <button
            onClick={() => handlePrint('single')}
            className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
          >
            <Printer className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">{t.printPage || 'Print Page'}</span>
          </button>

          {/* Master Print Complete 24-Page PDF */}
          <button
            onClick={() => handlePrint('all')}
            className="px-3 sm:px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-fredoka font-bold text-xs shadow-lg flex items-center gap-1.5 cursor-pointer transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.exportPdf || 'Export 24-Page PDF'}</span>
            <span className="sm:hidden">PDF</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side Navigation & Clue Tracker Drawer */}
        <aside
          aria-label="Workbook page navigation"
          className="no-print w-72 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-3 hidden lg:flex shrink-0"
        >
          <div className="space-y-3 flex-1 overflow-y-auto pr-1">
            {/* Quick Language Switcher Bar in Sidebar */}
            <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between text-[10px] font-cinzel font-bold text-slate-400 uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3 text-amber-400" />
                  {t.language || 'Language'}:
                </span>
                <span className="text-amber-400 font-mono font-bold">
                  {currentLangOption.flag} {currentLangOption.name}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1 pt-1">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    title={`${lang.name} (${lang.nativeName})`}
                    className={`py-1 rounded-lg text-xs font-bold flex flex-col items-center justify-center transition-all cursor-pointer ${
                      currentLang === lang.code
                        ? 'bg-amber-500 text-slate-950 shadow scale-105 font-bold'
                        : 'bg-slate-800/90 text-slate-400 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <span className="text-sm leading-tight">{lang.flag}</span>
                    <span className="text-[9px] uppercase font-mono mt-0.5">{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Page Jump Selector */}
            <div className="space-y-1">
              <span className="text-[11px] font-cinzel font-bold text-slate-400 uppercase tracking-wider block">
                {t.jumpToPage || 'Jump to Interior Page:'}
              </span>
              <div className="space-y-1 max-h-[340px] overflow-y-auto pr-1">
                {pages.map((p) => {
                  const isActive =
                    viewMode === 'spread'
                      ? currentPage === p.pageNumber || currentPage + 1 === p.pageNumber
                      : currentPage === p.pageNumber;

                  return (
                    <button
                      key={p.pageNumber}
                      onClick={() => {
                        setCurrentPage(p.pageNumber);
                        if (viewMode === 'grid') setViewMode('single');
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                          : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-5 h-5 rounded-md bg-slate-950/40 text-amber-300 flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                          {p.pageNumber}
                        </span>
                        <span className="truncate">{p.title}</span>
                      </div>
                      {printSettings.solvedStatus[p.pageNumber] && (
                        <FileCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interactive Clue Tracker Widget */}
            <InteractiveClueTracker
              printSettings={printSettings}
              solvedCount={solvedCount}
              vaultStatus={vaultStatus}
              onOpenVaultPage={() => {
                setCurrentPage(16);
                setViewMode('single');
              }}
              onOpenCertificatePage={() => {
                setCurrentPage(24);
                setViewMode('single');
              }}
            />
          </div>

          {/* Quick Stats in Drawer Footer */}
          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between font-mono">
            <span>24 Interior Pages Rebuilt</span>
            <span>US Letter 8.5" × 11"</span>
          </div>
        </aside>

        {/* Central Reading / Preview Canvas */}
        <main className="flex-1 overflow-y-auto bg-slate-950 p-3 sm:p-6 lg:p-8 flex flex-col items-center">
          {/* Navigation Controls Bar for Single & Spread View */}
          {viewMode !== 'grid' && viewMode !== 'print-all' && (
            <div className="no-print w-full max-w-4xl mb-4 flex items-center justify-between bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-800 shadow-lg">
              <button
                disabled={currentPage <= 1}
                onClick={() =>
                  setCurrentPage((p) => Math.max(1, viewMode === 'spread' ? p - 2 : p - 1))
                }
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold flex items-center gap-1 cursor-pointer transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{t.previous || 'Previous'}</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="font-cinzel text-xs font-bold text-amber-300">
                  {viewMode === 'spread'
                    ? (t.pagesOf || 'Pages {p1} & {p2} of {total}')
                        .replace('{p1}', String(currentPage))
                        .replace('{p2}', String(Math.min(24, currentPage + 1)))
                        .replace('{total}', '24')
                    : (t.pageOf || 'Page {current} of {total}')
                        .replace('{current}', String(currentPage))
                        .replace('{total}', '24')}
                </span>
                <span className="text-slate-600 hidden sm:inline">|</span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline truncate max-w-[280px]">
                  {pages[currentPage - 1]?.shortDesc}
                </span>
              </div>

              <button
                disabled={currentPage >= 24}
                onClick={() =>
                  setCurrentPage((p) => Math.min(24, viewMode === 'spread' ? p + 2 : p + 1))
                }
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold flex items-center gap-1 cursor-pointer transition-all"
              >
                <span>{t.next || 'Next'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* VIEW: Single Page Mode */}
          {viewMode === 'single' && (
            <div className="w-full max-w-[850px] transition-transform duration-300">
              {renderPage(currentPage)}
            </div>
          )}

          {/* VIEW: Two-Page Book Spread Mode (like physical book opening) */}
          {viewMode === 'spread' && (
            <div className="w-full max-w-[1550px] grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              <div className="w-full">{renderPage(currentPage)}</div>
              <div className="w-full">
                {currentPage + 1 <= 24 ? renderPage(currentPage + 1) : null}
              </div>
            </div>
          )}

          {/* VIEW: All 24 Pages Grid Overview */}
          {viewMode === 'grid' && (
            <div className="w-full max-w-7xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2">
                <div>
                  <h2 className="font-fredoka text-xl font-bold text-slate-100">
                    {t.galleryTitle || 'All 24 Interior Pages Gallery'}
                  </h2>
                  <p className="text-xs text-slate-400">
                    {t.gallerySub ||
                      'Click any page thumbnail to open in full interactive inspection view'}
                  </p>
                </div>
                <button
                  onClick={() => handlePrint('all')}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.printCompleteBook || 'Print Complete 24-Page Book'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {pages.map((page) => (
                  <div
                    key={page.pageNumber}
                    onClick={() => {
                      setCurrentPage(page.pageNumber);
                      setViewMode('single');
                    }}
                    className="group relative cursor-pointer flex flex-col rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400 p-2.5 transition-all hover:scale-105 shadow-md"
                  >
                    {/* Simulated Miniature Page Sheet */}
                    <div className="relative aspect-[8.5/11] w-full rounded-lg bg-amber-50/90 border border-slate-400 overflow-hidden flex flex-col justify-between p-2 shadow-inner group-hover:shadow-amber-500/20">
                      <div className="flex justify-between items-center text-[7px] font-mono text-slate-600">
                        <span>P.{page.pageNumber}</span>
                        <span className="uppercase truncate max-w-[50px]">{page.category}</span>
                      </div>

                      <div className="text-center my-auto">
                        <div className="font-cinzel text-[9px] font-bold text-slate-900 leading-tight">
                          {page.title}
                        </div>
                        <div className="text-[7px] text-amber-800 font-hand font-bold mt-0.5 truncate">
                          {page.subtitle}
                        </div>
                      </div>

                      <div className="h-1 bg-amber-200 rounded-full w-full" />
                    </div>

                    <div className="mt-2 text-center">
                      <span className="font-fredoka text-xs font-bold text-slate-200 block truncate">
                        Page {page.pageNumber}
                      </span>
                      <span className="text-[10px] text-slate-400 block truncate">
                        {page.shortDesc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW: Print-All Mode (Rendered for Browser Print Dialog) */}
          {viewMode === 'print-all' && (
            <div className="w-full flex flex-col items-center space-y-8">
              <div className="no-print p-4 rounded-xl bg-amber-900/50 border border-amber-500 text-amber-200 text-xs flex items-center justify-between w-full max-w-2xl">
                <span>
                  {t.printRenderingNotice ||
                    'Rendering complete 24 pages for printer layout. Press button to trigger print dialog:'}
                </span>
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold cursor-pointer"
                >
                  {t.printSavePdf || 'Print / Save as PDF'}
                </button>
              </div>

              {[...Array(24)].map((_, i) => (
                <div key={i + 1} className="w-full max-w-[850px]">
                  {renderPage(i + 1)}
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
