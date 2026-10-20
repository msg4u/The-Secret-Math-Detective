import React from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { CHALLENGE_DATA } from '../../data/workbookData';
import { CheckCircle2, BookOpen, KeyRound, Sparkles } from 'lucide-react';

export const PageAnswerKey1: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';

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
      title="Answer Key (Part 1)"
      subtitle="Challenges 1 to 6 Explained"
      categoryBadge="Answer Key"
      categoryColor="bg-slate-700"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3 font-outfit">
        <div className="text-slate-700 text-xs flex items-center justify-between">
          <p>
            Complete solutions and pedagogical step-by-step logic for Challenges 1 through 6.
          </p>
          <span className="font-mono text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
            For Teachers & Detectives
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
                <p className="text-slate-600 leading-snug mt-1 text-[11px]">
                  {item.expl}
                </p>
              </div>

              <div className="mt-2 pt-1 border-t border-dashed border-amber-900/10 flex items-center gap-1 font-mono text-[10px] text-amber-900 font-bold">
                <KeyRound className="w-3 h-3 text-amber-600" />
                <span>Unlocked: {item.clue}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-600" />
            <span className="font-cinzel font-bold text-slate-900">Official Solutions Manual:</span>
            <span className="font-mono text-slate-600">Part 1 of 2</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Solutions Guide #21</span>
        </div>
      </div>
    </PageContainer>
  );
};

export const PageAnswerKey2: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';

  const answersPart2 = [
    {
      num: 7,
      title: 'Area & Perimeter (The Blueprint)',
      ans: 'Area = 48 m², P = 28 m',
      clue: 'Vault Cylinder 4 = 4',
      expl: 'Area = length × width = 8 × 6 = 48 sq meters. Perimeter = 2 × (8 + 6) = 28 meters. The tens digit of Area (4 in 48) sets Cylinder 4.',
    },
    {
      num: 8,
      title: 'Constellation Cipher (Multiplication)',
      ans: '"LOOK UP"',
      clue: 'Directs to Skylight Exit',
      expl: '7×8=56(L), 5×3=15(O), 3×5=15(O), 4×6=24(K), 9×3=27(U), 8×2=16(P). Message reveals "LOOK UP" directing to the rooftop glass skylight.',
    },
    {
      num: 9,
      title: 'Graphs & Data (Power Surge)',
      ans: 'Vault (65 kW), Spike = 25 kW',
      clue: 'Surge Time: 11:42 PM',
      expl: 'The Vault drew 65 kW, exceeding the Dome (40 kW) by 25 kW (65 − 40 = 25 kW). Total consumption across all 5 wings = 165 kW.',
    },
    {
      num: 10,
      title: 'Order of Operations (The Gear Safe)',
      ans: 'Code = 68',
      clue: 'Vault Cylinder 5 = 8',
      expl: 'PEMDAS rules: (12 + 6) = 18. Then 18 × 4 = 72, and 8 ÷ 2 = 4. Finally 72 − 4 = 68. The units digit of 68 (8) sets the 5th vault cylinder.',
    },
    {
      num: 11,
      title: 'Measurement & Forensics (Footprints)',
      ans: 'Dr. Vega (28 cm)',
      clue: 'Orchid Pollen Verified',
      expl: 'Measured footprint length is 28 cm, exactly matching Dr. Vega’s size 44 boots. Chemical tests confirmed Selenicereus pollen from his greenhouse.',
    },
    {
      num: 12,
      title: 'The Master Moonstone Vault',
      ans: '21 - 10 - 2 - 4 - 8',
      clue: 'Master Vault Opened!',
      expl: 'Assembling all five extracted clues: Cylinder 1 (21) + Cylinder 2 (10) + Cylinder 3 (2) + Cylinder 4 (4) + Cylinder 5 (8).',
    },
  ];

  return (
    <PageContainer
      pageNumber={22}
      title="Answer Key (Part 2)"
      subtitle="Challenges 7 to 12 & Bonus Puzzles"
      categoryBadge="Answer Key"
      categoryColor="bg-slate-700"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3 font-outfit">
        <div className="text-slate-700 text-xs flex items-center justify-between">
          <p>
            Complete solutions for Challenges 7 through 12 plus bonus telescope maze and crossword.
          </p>
          <span className="font-mono text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
            Part 2 & Master Code
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
                <p className="text-slate-600 leading-snug mt-1 text-[11px]">
                  {item.expl}
                </p>
              </div>

              <div className="mt-2 pt-1 border-t border-dashed border-amber-900/10 flex items-center gap-1 font-mono text-[10px] text-amber-900 font-bold">
                <KeyRound className="w-3 h-3 text-amber-600" />
                <span>Unlocked: {item.clue}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Solutions Box */}
        <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-xs">
          <span className="font-cinzel text-xs font-bold text-purple-950 uppercase block mb-1">
            Bonus Puzzle Solutions:
          </span>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-purple-900">
            <div><strong>Telescope Laser Maze:</strong> Path: Start → Mirror 1 → 2 → 3 → 4 → 5 → Eyepiece.</div>
            <div><strong>Crossword:</strong> 1. PERIMETER, 2. FRACTION, 3. ACUTE, 4. COORDINATES, 5. VERTEX, 6. AREA.</div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-600" />
            <span className="font-cinzel font-bold text-slate-900">Master Code Solved:</span>
            <span className="font-mono font-bold text-emerald-700">21 - 10 - 2 - 4 - 8</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Solutions Guide #22</span>
        </div>
      </div>
    </PageContainer>
  );
};
