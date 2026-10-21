import React from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { TRANSLATIONS } from '../../i18n/translations';
import { NovaCharacter, PipRobot, MoonstoneCrystal } from '../illustrations/Characters';
import { SuspectAvatar } from '../illustrations/SuspectAvatars';
import { CheckCircle2, Award, ShieldAlert, FileText, CheckSquare, Search } from 'lucide-react';

export const PageSolutionReveal: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;

  const pillars = [
    { num: 1, name: 'Challenge 1 (Star Code)', fact: 'Frequency Sequence = 21' },
    { num: 2, name: 'Challenge 2 (Late Night Time)', fact: 'Greenhouse Entry Time = 10:10 PM' },
    { num: 3, name: 'Challenge 6 (Lens Calibration)', fact: 'Fraction Numerator = 2' },
    { num: 4, name: 'Challenge 7 (Area Blueprint)', fact: 'Area = 48 m² (Tens Digit = 4)' },
    { num: 5, name: 'Challenge 10 (Gear Safe)', fact: 'PEMDAS Calculation = 68 (Units = 8)' },
  ];

  return (
    <PageContainer
      pageNumber={17}
      title={t.p17Title}
      subtitle={t.p17Subtitle}
      categoryBadge="Story Finale"
      categoryColor="bg-emerald-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3">
        {/* Culprit Reveal Banner */}
        <div
          className={`p-4 rounded-2xl border-2 flex items-center gap-4 shadow-md ${
            isEco
              ? 'bg-emerald-50 border-emerald-400'
              : 'bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white border-emerald-500/50'
          }`}
        >
          <SuspectAvatar id="vega" size={70} className="shrink-0 ring-4 ring-emerald-500" />
          <div>
            <div className="font-mono text-xs uppercase text-emerald-400 font-bold tracking-widest">
              CONFESSION & ARREST REPORT
            </div>
            <h2 className="font-fredoka text-xl font-bold text-emerald-300">
              {t.p17CulpritBanner}
            </h2>
            <p className="font-outfit text-xs text-slate-300 mt-0.5">
              {t.p17Motive}
            </p>
          </div>
        </div>

        {/* Story Narrative Box */}
        <div className="p-4 rounded-2xl bg-white border border-amber-900/15 text-slate-800 text-xs leading-relaxed space-y-2 font-outfit shadow-xs">
          <p>
            {printSettings.language === 'ro'
              ? 'Cu codul 21-10-2-4-8 introdus în cilindrii de oțel, ușile masive ale seifului s-au deschis! În spatele conductelor de ventilație ale serei, detectivul Nova și robotul Pip l-au prins pe Dr. Vega chiar când ambala Piatra Lunii!'
              : printSettings.language === 'de'
              ? 'Mit der Zahlenkombination 21-10-2-4-8 öffneten sich die massiven Stahltüren! In den Lüftungsschächten des Gewächshauses ertappten Nova und Pip Dr. Vega auf frischer Tat mit dem Mondstein!'
              : printSettings.language === 'fr'
              ? 'Avec la combinaison 21-10-2-4-8, les portes de la chambre forte se sont ouvertes ! Dans les conduits de la serre, Nova et Pip ont surpris le Dr Vega en flagrant délit avec la Pierre Lunaire !'
              : printSettings.language === 'es'
              ? '¡Con el código 21-10-2-4-8, las pesadas puertas se abrieron! Detrás de los conductos del invernadero, la detective Nova y Pip atraparon al Dr. Vega in fraganti con la Piedra Lunar.'
              : 'With the vault code 21-10-2-4-8 entered into the heavy steel cylinders, the massive vault doors hissed open! Detective Nova and Pip caught Dr. Vega red-handed packing the glowing Celestial Moonstone!'}
          </p>
          <p className="italic text-slate-600">
            {t.p17Congratulations}
          </p>
        </div>

        {/* 5 Pillars */}
        <div className="space-y-1.5 font-outfit">
          <span className="font-cinzel text-xs font-bold text-slate-900 uppercase tracking-wider block">
            {t.p17FivePillarsTitle}
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {pillars.map((p) => (
              <div key={p.num} className="p-2 bg-amber-50/60 rounded-xl border border-amber-900/10 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">{p.name}:</span>{' '}
                  <span className="font-mono text-emerald-800 font-medium">{p.fact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nova & Pip Congratulatory Characters */}
        <div className="p-3 bg-amber-100/60 rounded-2xl border border-amber-300 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <NovaCharacter size={60} pose="holding_lens" />
            <PipRobot size={50} />
            <div>
              <span className="font-fredoka text-sm font-bold text-amber-950 block">
                {printSettings.language === 'ro' ? 'Misiune Îndeplinită cu Succes!' :
                 printSettings.language === 'de' ? 'Mission erfolgreich abgeschlossen!' :
                 printSettings.language === 'fr' ? 'Mission Accomplie avec Succès !' :
                 printSettings.language === 'es' ? '¡Misión Cumplida con Éxito!' :
                 'Case Solved with Mathematical Rigor!'}
              </span>
              <p className="font-outfit text-xs text-amber-900">
                {t.p17Congratulations}
              </p>
            </div>
          </div>
          <MoonstoneCrystal size={50} />
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="font-cinzel font-bold text-slate-900">Case Verdict:</span>
            <span className="font-mono font-bold text-emerald-700">GUILTY - Dr. Vega</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Finale Story Reveal #17</span>
        </div>
      </div>
    </PageContainer>
  );
};

export const PageEvidenceLog: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;

  const evidenceRows = [
    { item: 'Muddy Footprint', location: 'Greenhouse Doorway', mathConcept: 'Measurement (28 cm)', link: 'Dr. Vega (Size 44)' },
    { item: 'Glass-Cutter & Harness', location: 'Observatory Skylight', mathConcept: 'Secret Cipher (LOOK UP)', link: 'Escape Path' },
    { item: 'Electrical Load Surge', location: 'High-Security Vault', mathConcept: 'Bar Chart (25 kW difference)', link: 'Laser Cutter Alarm (11:42 PM)' },
    { item: 'Fluorescent Green Dust', location: 'Corridor Carpet', mathConcept: 'Chemical Botany Analysis', link: 'Selenicereus Night Cactus Pollen' },
    { item: 'Single Truth Statement', location: 'Observatory Alibi Council', mathConcept: 'Truth-Teller Logic Puzzle', link: 'Dr. Vega in Garden' },
  ];

  return (
    <PageContainer
      pageNumber={18}
      title={t.p18Title}
      subtitle={t.p18Subtitle}
      categoryBadge="Evidence Log"
      categoryColor="bg-slate-700"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3 font-outfit">
        <div className="text-slate-800 text-xs leading-relaxed">
          <p>{t.p18Desc}</p>
        </div>

        {/* Master Evidence Table */}
        <div className="flex-1 bg-white rounded-2xl border-2 border-slate-300 overflow-hidden shadow-xs flex flex-col justify-between">
          <div className="bg-slate-900 text-white px-4 py-2 flex items-center justify-between text-xs font-cinzel font-bold">
            <span className="flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-amber-400" />
              {printSettings.language === 'ro' ? 'Matricea Probelor Criminalistice' :
               printSettings.language === 'de' ? 'Forensische Beweismatrix' :
               printSettings.language === 'fr' ? 'Matrice des Preuves Judiciaires' :
               printSettings.language === 'es' ? 'Matriz de Evidencias Forenses' :
               'Forensic Evidence Matrix'}
            </span>
            <span className="font-mono text-[10px] text-amber-300">STARFALL #882-B</span>
          </div>

          <div className="divide-y divide-slate-200 text-xs">
            {evidenceRows.map((row, idx) => (
              <div key={idx} className="p-3 grid grid-cols-1 sm:grid-cols-4 gap-2 hover:bg-slate-50 transition-colors">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{row.item}</span>
                </div>
                <div className="text-slate-600">
                  <span className="font-mono text-[10px] uppercase text-slate-400 block">Location:</span>
                  {row.location}
                </div>
                <div className="text-amber-900 font-medium">
                  <span className="font-mono text-[10px] uppercase text-slate-400 block">Math Concept:</span>
                  {row.mathConcept}
                </div>
                <div className="text-emerald-800 font-mono font-bold">
                  <span className="font-mono text-[10px] uppercase text-slate-400 block">Verdict Link:</span>
                  {row.link}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
            <span>Inspector Certification: Verified by Detective Nova</span>
            <span className="font-mono font-bold text-emerald-700">STATUS: CASE CLOSED</span>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-700" />
            <span className="font-cinzel font-bold text-slate-900">Docket Status:</span>
            <span className="font-mono font-bold text-slate-800">Archive Record Complete</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Detective Archive #18</span>
        </div>
      </div>
    </PageContainer>
  );
};
