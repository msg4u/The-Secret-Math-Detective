import React from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { TRANSLATIONS } from '../../i18n/translations';
import { CHALLENGE_DATA } from '../../data/workbookData';
import { CheckCircle2, BookOpen, KeyRound, Sparkles } from 'lucide-react';

export const PageAnswerKey1: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;

  const answersPart1 = [
    {
      num: 1,
      title: 'Number Challenge (The Star Code)',
      ans: '21',
      clue: 'Vault Cylinder 1 = 21',
      expl: 'The differences between consecutive numbers increase by 1 each step: 3 (+3) = 6, 6 (+4) = 10, 10 (+5) = 15. Therefore, the next difference is +6: 15 + 6 = 21.',
    },
    {
      num: 2,
      title: 'Time Challenge (The Late Night Clue)',
      ans: '10:10 PM',
      clue: 'Vault Cylinder 2 = 10',
      expl: 'Alarm sounded at 11:45 PM. Subtracting 1 hour gives 10:45 PM. Subtracting 35 minutes gives 10:10 PM. This places the thief entering the greenhouse door at exactly 10:10 PM.',
    },
    {
      num: 3,
      title: 'Coordinates (Star Chart Grid)',
      ans: 'Key (3,7), Lens (5,2), Print (2,4)',
      clue: 'Greenhouse door at (2, 4)',
      expl: 'Coordinates are read across the horizontal X-axis first, then up the vertical Y-axis. The muddy boot print was at (2, 4).',
    },
    {
      num: 4,
      title: 'Logic Challenge (The Four Suspects)',
      ans: 'Dr. Vega (The Botanist)',
      clue: 'Culprit Identified',
      expl: 'If Luna tells the truth, Max also tells the truth (yielding 2 truth-tellers, impossible). So both lie. Between Orion and Vega, Vega’s statement of being in the garden is true, perfectly placing him at the scene of the 10:10 PM intrusion!',
    },
    {
      num: 5,
      title: 'Geometry (The Star Pattern)',
      ans: '10 Triangles, Acute Angles',
      clue: 'Star Angles = 36° each',
      expl: 'There are 5 small outer triangles at the star tips (A, B, C, D, E) and 5 larger overlapping triangles across the internal chords. Total = 10 triangles. Central polygon is a regular pentagon.',
    },
    {
      num: 6,
      title: 'Fractions (The Lens Calibration)',
      ans: '1/2 (or 2/4)',
      clue: 'Vault Cylinder 3 = 2',
      expl: 'Simplify 2/8 to 1/4 by dividing by 2. Then add like fractions: 1/4 + 1/4 = 2/4 = 1/2. The unsimplified numerator 2 provides the third vault cylinder code.',
    },
  ];

  return (
    <PageContainer
      pageNumber={21}
      title={t.p21Title}
      subtitle={t.p21Subtitle}
      categoryBadge="Answer Key"
      categoryColor="bg-slate-700"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3 font-outfit">
        <div className="text-slate-700 text-xs flex items-center justify-between">
          <p>
            {printSettings.language === 'ro' ? 'Soluții complete și logică pas cu pas pentru provocările 1-6.' :
             printSettings.language === 'de' ? 'Vollständige Lösungen und Rechenwege für die Aufgaben 1 bis 6.' :
             printSettings.language === 'fr' ? 'Solutions complètes et explications étape par étape pour les défis 1 à 6.' :
             printSettings.language === 'es' ? 'Soluciones completas y explicaciones paso a paso para los desafíos 1 a 6.' :
             'Complete solutions and pedagogical step-by-step logic for Challenges 1 through 6.'}
          </p>
          <span className="font-mono text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
            {printSettings.language === 'ro' ? 'Ghid Profesori & Detectivi' :
             printSettings.language === 'de' ? 'Lehrer & Detektive' :
             printSettings.language === 'fr' ? 'Enseignants & Détectives' :
             printSettings.language === 'es' ? 'Profesores & Detectives' :
             'For Teachers & Detectives'}
          </span>
        </div>

        {/* 6 Answer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
          {answersPart1.map((item) => (
            <div
              key={item.num}
              className={`p-3 rounded-xl border flex flex-col justify-between text-xs shadow-xs ${
                isEco ? 'bg-white border-slate-300' : 'bg-amber-50/50 border-amber-900/15'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-fredoka font-bold text-slate-900">
                    Challenge {item.num}: {item.title}
                  </span>
                  <span className="font-mono font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded text-[11px]">
                    {item.ans}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">{item.expl}</p>
              </div>
              <div className="mt-2 pt-1 border-t border-amber-900/10 flex items-center justify-between font-mono text-[10px] text-amber-900 font-bold">
                <span className="flex items-center gap-1">
                  <KeyRound className="w-3 h-3" /> {item.clue}
                </span>
                <span className="text-emerald-700 flex items-center gap-0.5">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span className="font-cinzel font-bold text-slate-900">Solutions Guide:</span>
            <span className="font-mono font-bold text-slate-700">Part 1 of 2</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Official Solutions #21</span>
        </div>
      </div>
    </PageContainer>
  );
};

export const PageAnswerKey2: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';
  const t = TRANSLATIONS[printSettings.language || 'en'] || TRANSLATIONS.en;

  const answersPart2 = [
    {
      num: 7,
      title: 'Area & Perimeter (The Blueprint)',
      ans: 'Area = 48 m², P = 28 m',
      clue: 'Vault Cylinder 4 = 4',
      expl: 'Area = 8 × 6 = 48 m². Perimeter = 2 × (8 + 6) = 28 m. Tens digit of 48 is 4, unlocking cylinder 4.',
    },
    {
      num: 8,
      title: 'Secret Cipher (Constellation Code)',
      ans: 'Phrase: "LOOK UP"',
      clue: 'Skylight Exit Identified',
      expl: 'Star factor products match letters: 56=L, 15=O, 15=O, 24=K, 27=U, 16=P. Secret words: LOOK UP.',
    },
    {
      num: 9,
      title: 'Graphs & Data (Power Grid)',
      ans: 'Vault Spike = 25 kW',
      clue: 'Laser Cutter Surge Time',
      expl: 'Vault drew 65 kW; Dome drew 40 kW. Difference: 65 - 40 = 25 kW surge right at 11:42 PM.',
    },
    {
      num: 10,
      title: 'Order of Operations (Gear Safe)',
      ans: 'Combination = 68',
      clue: 'Vault Cylinder 5 = 8',
      expl: '(12 + 6) = 18. 18 × 4 = 72. 8 ÷ 2 = 4. 72 - 4 = 68. The units digit of 68 is 8, setting final cylinder.',
    },
    {
      num: 11,
      title: 'Measurement (Footprint Trail)',
      ans: 'Boot Length = 28 cm',
      clue: 'Dr. Vega Sole Match',
      expl: 'Ruler measures 28 cm exactly. Footwear register confirms Dr. Vega wears size 44 boots (28 cm) with pollen.',
    },
    {
      num: 12,
      title: 'Final Vault Tumbler Lock',
      ans: '21 - 10 - 2 - 4 - 8',
      clue: 'Moonstone Recovered!',
      expl: 'Assembling all 5 cylinder digits opens the Starfall master sanctum vault and closes the case!',
    },
  ];

  return (
    <PageContainer
      pageNumber={22}
      title={t.p22Title}
      subtitle={t.p22Subtitle}
      categoryBadge="Answer Key"
      categoryColor="bg-slate-700"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3 font-outfit">
        <div className="text-slate-700 text-xs flex items-center justify-between">
          <p>
            {printSettings.language === 'ro' ? 'Soluții complete și logică pas cu pas pentru provocările 7-12 și Seif.' :
             printSettings.language === 'de' ? 'Vollständige Lösungen für Aufgaben 7 bis 12 und den Haupttresor.' :
             printSettings.language === 'fr' ? 'Solutions complètes pour les défis 7 à 12 et la chambre forte finale.' :
             printSettings.language === 'es' ? 'Soluciones completas para los desafíos 7 a 12 y la bóveda final.' :
             'Complete solutions for Challenges 7 through 12, Bonus Puzzles, and Master Vault.'}
          </p>
          <span className="font-mono text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
            {printSettings.language === 'ro' ? 'Ghid Profesori & Detectivi' :
             printSettings.language === 'de' ? 'Lehrer & Detektive' :
             printSettings.language === 'fr' ? 'Enseignants & Détectives' :
             printSettings.language === 'es' ? 'Profesores & Detectives' :
             'For Teachers & Detectives'}
          </span>
        </div>

        {/* 6 Answer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
          {answersPart2.map((item) => (
            <div
              key={item.num}
              className={`p-3 rounded-xl border flex flex-col justify-between text-xs shadow-xs ${
                isEco ? 'bg-white border-slate-300' : 'bg-amber-50/50 border-amber-900/15'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-fredoka font-bold text-slate-900">
                    Challenge {item.num}: {item.title}
                  </span>
                  <span className="font-mono font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded text-[11px]">
                    {item.ans}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">{item.expl}</p>
              </div>
              <div className="mt-2 pt-1 border-t border-amber-900/10 flex items-center justify-between font-mono text-[10px] text-amber-900 font-bold">
                <span className="flex items-center gap-1">
                  <KeyRound className="w-3 h-3" /> {item.clue}
                </span>
                <span className="text-emerald-700 flex items-center gap-0.5">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span className="font-cinzel font-bold text-slate-900">Solutions Guide:</span>
            <span className="font-mono font-bold text-slate-700">Part 2 of 2</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Official Solutions #22</span>
        </div>
      </div>
    </PageContainer>
  );
};
