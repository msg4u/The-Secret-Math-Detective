import React from 'react';
import { PageContainer } from '../PageContainer';
import { PrintSettings } from '../../types/workbook';
import { NovaCharacter, PipRobot, MoonstoneCrystal } from '../illustrations/Characters';
import { SuspectAvatar } from '../illustrations/SuspectAvatars';
import { SUSPECTS } from '../../data/workbookData';
import { CheckCircle2, Award, ShieldAlert, FileText, CheckSquare, Search } from 'lucide-react';

export const PageSolutionReveal: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';

  return (
    <PageContainer
      pageNumber={17}
      title="The Mystery Solved!"
      subtitle="Case Closed at Starfall"
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
              The Culprit Was Dr. Vega!
            </h2>
            <p className="font-outfit text-xs text-slate-300 mt-0.5">
              Motivated to unlock the Moonstone’s rare lunar luminescence for his bio-luminescent night orchids!
            </p>
          </div>
        </div>

        {/* Story Narrative Box */}
        <div className="p-4 rounded-2xl bg-white border border-amber-900/15 text-slate-800 text-xs leading-relaxed space-y-2 font-outfit shadow-xs">
          <p>
            With the vault code <strong>21-10-2-4-8</strong> entered into the heavy steel cylinders, the massive vault doors hissed open!
            Standing inside the secret rear ventilation ducts of the greenhouse, Detective Nova and Pip caught Dr. Vega red-handed as he carefully packed the glowing Celestial Moonstone into an insulated specimen crate!
          </p>
          <p>
            "Incredible deductive work, Detective!" confessed Dr. Vega, lowering his spectacles. "I thought my riddle logic was uncrackable. I knew that by truthfully saying I was in the garden, suspicion would fall on the other three who told falsehoods. But your mathematical calculations pieced together every single clue—from the 10:10 PM timeline to the 28 cm boot print!"
          </p>
        </div>

        {/* How the Math Solved the Case (5 Pillars) */}
        <div className="space-y-1.5 font-outfit">
          <span className="font-cinzel text-xs font-bold text-slate-900 uppercase tracking-wider block">
            The 5 Pillars of Mathematical Proof:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
              <span className="font-bold text-amber-950 block">1. The Timestamp:</span>
              <span className="text-slate-700">11:45 PM − 1 hr 35 min = 10:10 PM entrance at garden wing.</span>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
              <span className="font-bold text-amber-950 block">2. Coordinate Proof:</span>
              <span className="text-slate-700">Muddy footprints found at (2, 4) leading directly from greenhouse.</span>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
              <span className="font-bold text-amber-950 block">3. Knights & Knaves Logic:</span>
              <span className="text-slate-700">Only Vega's garden statement was true; Luna & Max contradicted.</span>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
              <span className="font-bold text-amber-950 block">4. Metric Footwear:</span>
              <span className="text-slate-700">28 cm sole matched Dr. Vega's European size 44 boots with orchid pollen.</span>
            </div>
          </div>
        </div>

        {/* Nova & Pip Celebration Dialogue */}
        <div
          className={`p-3 rounded-2xl border flex items-center justify-between gap-3 ${
            isEco ? 'bg-slate-100 border-slate-300' : 'bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100 border-amber-300'
          }`}
        >
          <div className="flex items-center gap-3">
            <NovaCharacter size={70} pose="holding_lens" />
            <div>
              <span className="font-fredoka text-xs font-bold text-amber-950 block">
                Detective Nova & Pip Congratulate You:
              </span>
              <p className="font-hand text-sm font-bold text-slate-800">
                "You cracked every math challenge flawlessly! The Moonstone is back in its celestial dome, shining brighter than ever!"
              </p>
            </div>
          </div>
          <MoonstoneCrystal size={60} glow={!isEco} className="shrink-0" />
        </div>

        {/* Footer */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-cinzel font-bold text-slate-900">Case Status:</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-950">
              SOLVED & CLOSED
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Official Report #17</span>
        </div>
      </div>
    </PageContainer>
  );
};

export const PageEvidenceLog: React.FC<{ printSettings: PrintSettings }> = ({ printSettings }) => {
  const isEco = printSettings.mode === 'eco';

  return (
    <PageContainer
      pageNumber={18}
      title="Evidence Log"
      subtitle="Case Summary & Deduction Grid"
      categoryBadge="Deduction Log"
      categoryColor="bg-indigo-600"
      printSettings={printSettings}
    >
      <div className="flex flex-col justify-between h-full space-y-3 font-outfit">
        <div className="text-slate-800 text-xs leading-relaxed">
          <p>
            Review the final case summary matrix. Real detectives keep clear records of suspect alibis, forensic clues, and math deduction proofs.
          </p>
        </div>

        {/* Master Deduction Table */}
        <div className="overflow-x-auto rounded-xl border border-amber-900/20 shadow-xs">
          <table className="w-full text-left text-xs bg-white">
            <thead className="bg-slate-900 text-amber-300 font-cinzel text-[10px] uppercase tracking-wider">
              <tr>
                <th className="p-2.5">Suspect</th>
                <th className="p-2.5">Role</th>
                <th className="p-2.5">Claimed Alibi</th>
                <th className="p-2.5">Truth/Lie</th>
                <th className="p-2.5">Forensic Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {SUSPECTS.map((s) => (
                <tr key={s.id} className={s.isGuilty ? 'bg-red-50/70 font-semibold' : 'hover:bg-slate-50'}>
                  <td className="p-2.5 flex items-center gap-2">
                    <SuspectAvatar id={s.id as any} size={28} />
                    <span className="font-bold text-slate-900">{s.name}</span>
                  </td>
                  <td className="p-2.5 text-slate-600">{s.role}</td>
                  <td className="p-2.5 font-hand text-sm text-slate-800">{s.statement}</td>
                  <td className="p-2.5">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        s.isGuilty ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {s.isGuilty ? 'TRUTH (1 of 1)' : 'FALSE'}
                    </span>
                  </td>
                  <td className="p-2.5">
                    {s.isGuilty ? (
                      <span className="text-red-700 font-bold flex items-center gap-1">
                        ★ GUILTY (Boot & Pollen Match)
                      </span>
                    ) : (
                      <span className="text-slate-500">Cleared</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Physical Evidence Checklist for Kids */}
        <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-900/15 space-y-2">
          <span className="font-cinzel text-xs font-bold text-amber-950 uppercase tracking-wider block">
            Physical Evidence Checklist:
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              { clue: 'Star Code Parchment Note (Sequence 21)', found: true },
              { clue: 'Clock Alarm Log (11:45 PM & 10:10 PM)', found: true },
              { clue: 'Muddy Footprint at (2, 4) in Greenhouse', found: true },
              { clue: 'Cracked Lens Shards (1/4 + 2/8 = 1/2)', found: true },
              { clue: 'Blueprint Perimeter (28 m) & Area (48 m²)', found: true },
              { clue: 'Skyward Cipher Message ("LOOK UP")', found: true },
              { clue: 'Power Spike Surge at Vault (25 kW)', found: true },
              { clue: 'Gearbox Lock Mechanism (PEMDAS = 68)', found: true },
            ].map((ev, i) => (
              <label key={i} className="flex items-center gap-2 p-1.5 bg-white rounded-lg border border-slate-200">
                <input type="checkbox" defaultChecked={ev.found} className="rounded text-amber-600 focus:ring-amber-500" />
                <span className="truncate">{ev.clue}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Detective Field Sign-off */}
        <div className="border-t border-amber-900/10 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-indigo-600" />
            <span className="font-cinzel font-bold text-slate-900">Evidence Verification:</span>
            <span className="font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-950">
              100% Complete
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Dossier File #18</span>
        </div>
      </div>
    </PageContainer>
  );
};
