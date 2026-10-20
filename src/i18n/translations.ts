import { Language } from '../types/workbook';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', flag: '🇷🇴' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
];

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    // Top Bar UI
    appTitle: 'THE SECRET MATH DETECTIVE',
    editionTag: 'Commercial Edition',
    appSub: '24-Page Printable Workbook & Interior Pages Studio',
    singlePage: 'Single Page',
    spreadView: '2-Page Spread',
    allPages: 'All 24 Pages',
    fullColor: '🎨 Full Color',
    ecoPrint: '🌱 Eco B&W',
    trimMarks: '✂️ Trim Marks',
    printPage: 'Print Page',
    exportPdf: 'Export 24-Page PDF',
    language: 'Language',
    jumpToPage: 'Jump to Interior Page:',
    progressTracker: 'Case Progress Tracker',
    investigation: 'Mystery Investigation:',
    vaultTumblerCode: 'Vault Tumbler Code:',
    fiveCylinders: '5 Cylinders',
    moonstoneVault: 'Moonstone Vault',
    certificate: 'Certificate',
    solvedStatus: 'Solved',
    previous: 'Previous',
    next: 'Next',
    pageOf: 'Page {current} of {total}',
    pagesOf: 'Pages {p1} & {p2} of {total}',
    galleryTitle: 'All 24 Interior Pages Gallery',
    gallerySub: 'Click any page thumbnail to open in full interactive inspection view',
    printCompleteBook: 'Print Complete 24-Page Book',
    printRenderingNotice: 'Rendering complete 24 pages for printer layout. Press button to trigger print dialog:',
    printSavePdf: 'Print / Save as PDF',

    // Book Cover (Page 1)
    coverCaseTag: 'Official Case File #77',
    observatoryName: 'Starfall Observatory',
    agesTag: 'Ages 8-12',
    theSecret: 'THE SECRET',
    bookTitle: 'MATH DETECTIVE',
    bookSubtitle: '✦ The Vanishing Moonstone ✦',
    bookDescription: 'A Mystery Adventure with 12 Math Challenges',
    badges: {
      logic: 'LOGIC PUZZLES',
      number: 'NUMBER CHALLENGES',
      geometry: 'GEOMETRY & SHAPES',
      graphs: 'GRAPHS & DATA',
      more: 'AND MORE!',
    },
    detectiveNameLabel: 'Detective Name:',
    detectiveNamePlaceholder: 'Enter your detective name...',
    workbookEditionTag: 'Complete 24-Page Printable Workbook Edition',

    // Shared Header/Footer
    headerSeries: 'The Secret Math Detective • Case #77',
    footerAgeTag: '★ Ages 8-12',
    footerAdventure: 'Math Challenge Mystery Adventure',
    footerGoal: 'Solve the clues to unlock the Moonstone Vault!',

    // Page 2: Briefing
    briefingTitle: 'The Briefing',
    briefingSubtitle: 'A Mysterious Theft',
    briefingBadge: 'Story & Mission',
    confidentialStamp: 'CONFIDENTIAL CASE FILE',
    reportHeader: 'Incident Report #882-B',
    reportLocation: 'Location: Starfall Observatory Dome',
    reportTime: 'Time of Incident: 11:45 PM (Midnight Shift)',
    reportObject: 'Object Stolen: The Ancient Celestial Moonstone',
    reportStatus: 'Status: Vault Tampered with Math Codes',
    reportStory:
      'At 11:45 PM last night, the alarm blared through the quiet corridors of the Starfall Observatory. The priceless Celestial Moonstone—capable of focusing starlight across the galaxy—had vanished from its locked pedestal in the high-security dome vault! The vault was secured by a series of 12 encrypted mathematical locks, but an elusive thief managed to solve them and slip away into the dark.',
    novaSays: 'Detective Nova says:',
    novaDialogue:
      '"The thief left a trail of mathematical puzzles and cipher notes behind! Four observatory members were inside the building. Only one person is telling the truth! We need your math skills to examine each room, crack the codes, and open the final vault!"',
    pipProtocol: 'Robot Pip’s System Protocol:',
    pipDialogue:
      '"Beep-boop! My logic processors have mapped 12 challenge zones across the observatory. Every math puzzle you solve reveals a secret digit or clue for the Master Vault lock. Keep your pencil sharp!"',
    academyRulesTitle: 'Rules of the Math Detective Academy:',
    rule1: '1. Show Your Work: Real detectives write their calculations clearly.',
    rule2: '2. Collect Clues: Record each unlocked digit on your case worksheet.',
    rule3: '3. Test Every Alibi: Use logic to uncover who is telling the truth.',
    signatureLabel: 'Detective Signature:',
    badgeIssued: 'Badge Issued: Starfall Division',

    // Page 3: Dossier
    dossierTitle: 'The Suspect Dossier',
    dossierSubtitle: 'Four Persons of Interest',
    dossierBadge: 'Investigation',
    dossierDesc:
      'When the security alarms triggered, only four individuals were inside Starfall Observatory. Carefully review their official statements, credentials, and whereabouts. Warning: Exactly one of these four suspects is telling the truth!',
    alibiChecked: 'Alibi Checked',
    suspectLabel: 'Suspect',
    dossierTip:
      '"Pay close attention to who supports whom! If Max says Luna tells the truth, could Luna actually be telling the truth? Think carefully about the rule: exactly ONE person tells the truth!"',

    // Suspects
    suspects: {
      orion: {
        name: 'Professor Orion',
        role: 'Chief Astronomer',
        quote: '"I was in the library all evening cataloging lunar cycles."',
        statement: 'I was in the library.',
      },
      luna: {
        name: 'Luna',
        role: 'Observatory Apprentice',
        quote: '"I saw a dark figure sneaking near the giant telescope dome!"',
        statement: 'I saw the thief near the telescope.',
      },
      vega: {
        name: 'Dr. Vega',
        role: 'Geologist & Botanist',
        quote: '"I was in the greenhouse examining nocturnal night-blooms."',
        statement: 'I was in the garden.',
      },
      max: {
        name: 'Max',
        role: 'Mechanic & Technician',
        quote: '"Luna is telling the truth. I trust her completely!"',
        statement: 'Luna is telling the truth.',
      },
    },

    // Page 4: Map
    mapTitle: 'The Observatory Map',
    mapSubtitle: 'Floor Plan & Challenge Path',
    mapBadge: 'Map Guide',
    mapDesc:
      'Explore the 12 rooms of Starfall Observatory in order. Each room holds a mathematical clue essential to decrypting the Moonstone Vault!',
    northDome: 'North Dome Facing',
    checkpointIndex: 'Master Checkpoint Index',

    // Page 5: Challenge 1
    c1Title: 'Number Challenge',
    c1Subtitle: 'The Star Code',
    c1Badge: 'Challenge 1',
    c1Story:
      'The Moonstone was last seen near the telescope room. A parchment note scribbled in glowing ink with a mysterious number sequence was found on the marble floor:',
    c1Question: 'What number comes next?',
    c1Verify: 'Verify Answer',
    c1Hint: 'Need a hint?',
    c1WorkLabel: 'Show your work and explain the pattern:',
    c1WorkPlaceholder: 'Example: 3 + 3 = 6, then + 4 = 10, then + 5 = 15, so 15 + 6 = 21',
    c1ClueTitle: 'DETECTIVE CLUE:',
    c1ClueText:
      'The pattern is not simple addition. Look at how the difference between numbers changes! Each step adds one more than the last (+3, +4, +5...).',
    c1VaultClue: 'Vault Clue #1: Frequency Code 1 = ',

    // Page 6: Challenge 2
    c2Title: 'Time Challenge',
    c2Subtitle: 'The Late Night Clue',
    c2Badge: 'Challenge 2',
    c2Story:
      'The observatory alarm was triggered when the Moonstone pedestal sensor tripped at exactly 11:45 PM. However, security logs show a mysterious figure entering through the greenhouse wing 1 hour and 35 minutes earlier!',
    c2AlarmSounded: 'Alarm Sounded: 11:45 PM',
    c2ShadowSpotted: 'Shadow Spotted: ? : ? PM',
    c2ObservedTime: 'Observed Time',
    c2TargetPrompt: 'Draw hands or enter below',
    c2Question: 'At what time was the shadow spotted?',
    c2Verify: 'Verify Time',
    c2ClueTitle: 'DETECTIVE CLUE:',
    c2ClueText: 'Check the suspect dossier! Who claimed they were near the greenhouse garden around 10:10 PM?',
    c2VaultClue: 'Vault Cylinder 2 Digit: Hour = ',

    // Page 7: Challenge 3
    c3Title: 'Coordinates Challenge',
    c3Subtitle: 'The Star Chart Grid',
    c3Badge: 'Challenge 3',
    c3Story:
      'Pip’s sensors scanned the observatory floor and mapped four pieces of evidence onto a star coordinate grid. Remember: to locate any coordinate (x, y), start at the origin (0,0), move across (x) first, then up (y)!',
    c3QuestionsHeader: 'Identify the Evidence Coordinates:',
    c3Items: {
      key: '🔑 Brass Key',
      lens: '🔍 Dropped Lens',
      star: '⭐ Star Fragment',
      print: '👣 Muddy Print',
    },
    c3PipAnalysisTitle: 'PIP’S COORDINATE ANALYSIS:',
    c3PipAnalysisText:
      'The muddy boot print was found at (2, 4), right outside the greenhouse glass door. This directly links the thief’s escape path to the garden!',

    // Page 8: Challenge 4
    c4Title: 'Logic Challenge',
    c4Subtitle: 'The Four Suspects',
    c4Badge: 'Challenge 4',
    c4Story:
      'Four people were in the observatory that night. Read their statements carefully. Exactly ONE of them is telling the truth.',
    c4Question: 'Who took the Moonstone?',
    c4StepTitle: 'DETECTIVE LOGIC STEP-BY-STEP:',
    c4Step1:
      'Step 1: Look at Max’s statement: "Luna is telling the truth." If Luna were telling the truth, then Max would also be telling the truth. That would mean TWO truth-tellers! But exactly ONE person tells the truth. Therefore, Luna is lying and Max is lying!',
    c4Step2:
      'Step 2: That leaves Orion and Dr. Vega. Since Orion’s alibi was verified by the timestamp, Dr. Vega’s claim of being in the garden is the ONLY true statement—placing him at the exact scene of the muddy footprints and security breach!',
    c4CulpritIdentified: 'Prime Suspect Identified:',

    // Page 9: Challenge 5
    c5Title: 'Geometry Challenge',
    c5Subtitle: 'The Star Pattern',
    c5Badge: 'Challenge 5',
    c5Story:
      'An intricate celestial star was carved into the pedestal floor beneath the Moonstone vault. Inspect the geometric star figure below to unlock the angle cipher.',
    c5Q1: '1. How many total triangles can you find?',
    c5Q2: '2. Are the star points Acute, Right, or Obtuse?',
    c5Q2Ans: 'Acute (36° each < 90°)',
    c5Q3: '3. What regular polygon is in the center of the star?',
    c5Q3Ans: 'Regular Pentagon (5 sides)',
    c5ClueTitle: 'DETECTIVE GEOMETRY BREAKDOWN:',
    c5ClueText:
      'Don’t just count the 5 outer small triangle points (like triangle A). There are also 5 larger overlapping triangles formed across the chords (like triangles ABC, BCD). 5 + 5 = 10 triangles in total!',

    // Page 10: Challenge 6
    c6Title: 'Fractions Challenge',
    c6Subtitle: 'The Lens Calibration',
    c6Badge: 'Challenge 6',
    c6Story:
      'The thief cracked the telescope focus lens into fraction segments! Detective Nova found two surviving crystal shards. Add the two fractions together to see how much of the lens is restored:',
    c6Question: 'What is 1/4 + 2/8 in simplest form?',
    c6Verify: 'Verify Fraction',
    c6ClueTitle: 'VAULT CYLINDER 3 KEY:',
    c6ClueText:
      'The unsimplified numerator of 2/4 is 2. This number sets the 3rd lock cylinder on the Moonstone Vault!',

    // Page 11: Challenge 7
    c7Title: 'Area & Perimeter',
    c7Subtitle: 'The Blueprint Mystery',
    c7Badge: 'Challenge 7',
    c7Story:
      'To disable the alarm laser field surrounding the inner sanctum, Detective Nova must calculate the exact floor Area and boundary Perimeter from the architectural blueprint:',
    c7AreaFormula: 'Area = Length × Width',
    c7PerimeterFormula: 'Perimeter = 2 × (Length + Width)',
    c7Verify: 'Verify Dimensions',
    c7ClueTitle: 'VAULT CYLINDER 4 KEY:',
    c7ClueText:
      'The Area is 48 m². Look at the TENS DIGIT of the Area (the number 4 in 48). This sets the 4th cylinder on the master vault!',

    // Page 12: Challenge 8
    c8Title: 'Secret Cipher',
    c8Subtitle: 'The Constellation Code',
    c8Badge: 'Challenge 8',
    c8Story:
      'An astronomical cipher was etched onto the library telescope eyepiece. Multiply the factors on each star, then match the products to the cipher key to decode the thief’s escape direction!',
    c8MatrixTitle: '★ Celestial Decryption Cipher Matrix ★',
    c8Question: 'What is the secret two-word decoded phrase?',
    c8Verify: 'Decrypt',
    c8ClueTitle: 'DETECTIVE DISCOVERY:',
    c8ClueText:
      '"LOOK UP" led Nova and Pip directly to the glass observatory skylight, where a glass-cutter and rope harness were found hooked to the roof beam!',

    // Page 13: Challenge 9
    c9Title: 'Graphs & Data',
    c9Subtitle: 'The Midnight Power Grid',
    c9Badge: 'Challenge 9',
    c9Story:
      'When the Moonstone vault safe was tampered with, the power grid recorded a massive spike in energy draw. Analyze the bar chart recorded by the central generator between 11:30 PM and midnight:',
    c9Q1: '1. Which wing experienced the highest power surge?',
    c9Q1Ans: 'Vault (65 kW)',
    c9Q2: '2. By how many kW did Vault exceed the Dome (40 kW)?',
    c9Q3: '3. Total power consumed across all 5 wings:',
    c9Q3Ans: '15 + 25 + 40 + 20 + 65 = 165 kW',
    c9ClueTitle: 'POWER GRID EVIDENCE:',
    c9ClueText:
      'The 25 kW electrical surge in the Vault started at 11:42 PM, proving the thief used heavy electronic laser cutters right before the alarm sounded!',

    // Page 14: Challenge 10
    c10Title: 'Order of Operations',
    c10Subtitle: 'The Gear Safe Mechanism',
    c10Badge: 'Challenge 10',
    c10Story:
      'The backup gear compartment is locked behind a rotational mechanical cipher. You must follow the strict Order of Operations (PEMDAS) to turn the gears in the right order!',
    c10Question: 'What is the final safe combination number?',
    c10Verify: 'Unlock Gear',
    c10ClueTitle: 'VAULT CYLINDER 5 KEY:',
    c10ClueText:
      'The gear safe unlocked with number 68. The UNITS DIGIT of 68 is 8. This provides the fifth and final cylinder digit to open the Moonstone Vault!',

    // Page 15: Challenge 11
    c11Title: 'Measurement & Logic',
    c11Subtitle: 'The Footprint Trail',
    c11Badge: 'Challenge 11',
    c11Story:
      'Nova and Pip dusted the corridor outside the greenhouse and uncovered deep muddy boot prints. Measure the footprint length in centimeters and match it to the suspect footwear register!',
    c11RegisterTitle: 'Suspect Footwear Register:',
    c11ClueTitle: 'BOTANICAL FORENSIC MATCH:',
    c11ClueText:
      'The 28 cm boot sole matches Dr. Vega perfectly. Furthermore, the fluorescent green specks on the sole were chemically identified as pollen from the rare Selenicereus cactus blooming exclusively in Dr. Vega’s private greenhouse laboratory!',

    // Page 16: Challenge 12
    c12Title: 'Final Challenge',
    c12Subtitle: 'The Moonstone Vault',
    c12Badge: 'Final Challenge',
    c12Story:
      'You have arrived at the high-security inner chamber! Combine the five clues gathered across your investigation to crack the 5-cylinder master tumbler code and open the vault to recover the Celestial Moonstone!',
    c12VaultHeader: '✦ STARFALL MASTER VAULT SANCTUM ✦',
    c12Locked: 'LOCKED',
    c12Unlocked: 'VAULT OPENED! MOONSTONE RECOVERED!',
    c12AutoFill: 'Auto-Fill Verified Clues & Unlock Vault',

    // Page 17: Solution Reveal
    p17Title: 'The Mystery Solved!',
    p17Subtitle: 'Case Closed at Starfall',
    p17CulpritBanner: 'The Culprit Was Dr. Vega!',
    p17Motive:
      'Motivated to unlock the Moonstone’s rare lunar luminescence for his bio-luminescent night orchids!',
    p17FivePillarsTitle: 'The 5 Pillars of Mathematical Proof:',
    p17Congratulations:
      '"You cracked every math challenge flawlessly! The Moonstone is back in its celestial dome, shining brighter than ever!"',

    // Page 18: Evidence Log
    p18Title: 'Evidence Log',
    p18Subtitle: 'Case Summary & Deduction Grid',
    p18Desc:
      'Review the final case summary matrix. Real detectives keep clear records of suspect alibis, forensic clues, and math deduction proofs.',

    // Page 19: Bonus Maze
    p19Title: 'Bonus 1: The Telescope Maze',
    p19Subtitle: 'Optical Beam Alignment',
    p19Desc:
      'The telescope mirror tracking system needs recalibration. Guide the laser light beam from the Laser Emitter (START) to the Great Eyepiece (FINISH) by reflecting off mirrors at 90° angles.',

    // Page 20: Bonus Crossword
    p20Title: 'Bonus 2: Math Crossword',
    p20Subtitle: 'Astronomical Vocabulary',
    p20Desc:
      'Test your detective math vocabulary! Fill in the mathematical terms used by Detective Nova and Robot Pip throughout the Starfall mystery:',

    // Pages 21 & 22: Answer Keys
    p21Title: 'Answer Key (Part 1)',
    p21Subtitle: 'Challenges 1 to 6 Explained',
    p22Title: 'Answer Key (Part 2)',
    p22Subtitle: 'Challenges 7 to 12 & Bonus Puzzles',

    // Page 23: Scratchpad
    p23Title: 'Detective’s Scratchpad',
    p23Subtitle: 'Calculations & Field Notes',

    // Page 24: Certificate
    p24Title: 'Detective Certificate',
    p24Subtitle: 'Official Academy Award',
    p24Header: 'OFFICIAL DETECTIVE ACADEMY CERTIFICATE',
    p24Hero: 'WELL DONE, MATH DETECTIVE!',
    p24Body:
      'This official certification confirms that the named investigator has successfully cracked all 12 mathematical challenges and recovered the Celestial Moonstone of Starfall Observatory!',
    p24AwardedTo: 'This Certificate is Awarded to:',
    p24Rank: 'Senior Math Cryptographer',
    p24Case: 'The Vanishing Moonstone #77',
    p24LeadInvestigator: 'Lead Investigator',
    p24CalcEngine: 'Calculation Engine',
    p24IssueDate: 'Issue Date',
  },

  ro: {
    // Top Bar UI
    appTitle: 'SECRETUL DETECTIVULUI MATEMATICIAN',
    editionTag: 'Ediție Comercială',
    appSub: 'Caiet Tipăribil de 24 Pagini & Studio de Pagini Interioare',
    singlePage: 'Pagină Unică',
    spreadView: 'Deschidere 2 Pagini',
    allPages: 'Toate cele 24 Pagini',
    fullColor: '🎨 Color',
    ecoPrint: '🌱 Eco A/N',
    trimMarks: '✂️ Marcaje Tăiere',
    printPage: 'Tipărește Pagina',
    exportPdf: 'Exportă PDF 24 Pagini',
    language: 'Limbă',
    jumpToPage: 'Sari la Pagina:',
    progressTracker: 'Progresul Anchetei',
    investigation: 'Investigație Mister:',
    vaultTumblerCode: 'Cod Cilindri Seif:',
    fiveCylinders: '5 Cilindri',
    moonstoneVault: 'Seiful Pietrei Lunii',
    certificate: 'Certificat',
    solvedStatus: 'Rezolvat',
    previous: 'Anterior',
    next: 'Următor',
    pageOf: 'Pagina {current} din {total}',
    pagesOf: 'Paginile {p1} & {p2} din {total}',
    galleryTitle: 'Galeria Celor 24 de Pagini Interioare',
    gallerySub: 'Apasă pe orice miniatură pentru a o inspecta și rezolva interactiv',
    printCompleteBook: 'Tipărește Cartea Completă (24 Pagini)',
    printRenderingNotice: 'Se pregătesc cele 24 de pagini pentru tipar. Apasă butonul pentru dialogul de imprimare:',
    printSavePdf: 'Tipărește / Salvează PDF',

    // Book Cover (Page 1)
    coverCaseTag: 'Dosar Oficial #77',
    observatoryName: 'Observatorul Starfall',
    agesTag: 'Vârsta 8-12',
    theSecret: 'SECRETUL',
    bookTitle: 'DETECTIVULUI MATEMATICIAN',
    bookSubtitle: '✦ Piatra Lunii Dispărută ✦',
    bookDescription: 'O Aventură Misterioasă cu 12 Provocări Matematice',
    badges: {
      logic: 'PUZZLE-URI LOGICE',
      number: 'PROVOCĂRI CU NUMERE',
      geometry: 'GEOMETRIE & FORME',
      graphs: 'GRAFICE & DATE',
      more: 'ȘI MULTE ALTELE!',
    },
    detectiveNameLabel: 'Nume Detectiv:',
    detectiveNamePlaceholder: 'Introdu numele tău de detectiv...',
    workbookEditionTag: 'Ediție Completă de 24 Pagini Tipăribile',

    // Shared Header/Footer
    headerSeries: 'Secretul Detectivului Matematician • Cazul #77',
    footerAgeTag: '★ Vârsta 8-12 Ani',
    footerAdventure: 'Aventură Misterioasă de Matematică',
    footerGoal: 'Rezolvă indiciile pentru a deschide Seiful Pietrei Lunii!',

    // Page 2: Briefing
    briefingTitle: 'Raportul Inițial',
    briefingSubtitle: 'Un Furt Misterios',
    briefingBadge: 'Poveste & Misiune',
    confidentialStamp: 'DOSAR CONFIDENȚIAL',
    reportHeader: 'Raport Incident #882-B',
    reportLocation: 'Locație: Cupola Observatorului Starfall',
    reportTime: 'Ora Incidentului: 23:45 (Tura de Noapte)',
    reportObject: 'Obiect Furat: Străvechea Piatră a Lunii Cerească',
    reportStatus: 'Stare: Seif Forțat prin Coduri Matematice',
    reportStory:
      'Aseară, la ora 23:45, alarma a răsunat pe coridoarele Observatorului Starfall. Inestimabila Piatră a Lunii—capabilă să focalizeze lumina stelelor din galaxie—a dispărut de pe piedestalul său încuiat! Seiful era protejat de 12 încuietori matematice criptate, însă un hoț iscusit le-a descifrat și s-a făcut nevăzut în noapte.',
    novaSays: 'Detectivul Nova spune:',
    novaDialogue:
      '"Hoțul a lăsat în urmă o serie de ghicitori matematice și bilețele codificate! Patru membri ai observatorului se aflau în clădire. Doar o singură persoană spune adevărul! Avem nevoie de abilitățile tale matematice pentru a examina camerele, a sparge codurile și a deschide seiful final!"',
    pipProtocol: 'Protocolul Robotului Pip:',
    pipDialogue:
      '"Bip-bip! Procesoarele mele logice au cartografiat 12 zone de provocare. Fiecare problemă rezolvată dezvăluie o cifră secretă pentru seiful principal. Ține-ți creionul ascuțit!"',
    academyRulesTitle: 'Regulile Academiei de Detectivi:',
    rule1: '1. Arată Calculele: Detectivii adevărați își notează fiecare pas cu claritate.',
    rule2: '2. Adună Indiciile: Înregistrează fiecare cifră descifrată pe fișa ta de caz.',
    rule3: '3. Verifică Alibiurile: Folosește logica pentru a afla cine spune adevărul.',
    signatureLabel: 'Semnătură Detectiv:',
    badgeIssued: 'Insignă Emisă: Divizia Starfall',

    // Page 3: Dossier
    dossierTitle: 'Dosarul Suspecților',
    dossierSubtitle: 'Patru Persoane de Interes',
    dossierBadge: 'Investigație',
    dossierDesc:
      'Când a pornit alarma, doar patru persoane erau în incinta Observatorului Starfall. Verifică declarațiile, rolurile și locațiile lor. Atenție: Exact UNA dintre aceste patru persoane spune adevărul!',
    alibiChecked: 'Alibi Verificat',
    suspectLabel: 'Suspect',
    dossierTip:
      '"Fii atent la cine susține pe cine! Dacă Max spune că Luna zice adevărul, oare chiar spune Luna adevărul? Amintește-ți regula de aur: exact O SINGURĂ persoană spune adevărul!"',

    // Suspects
    suspects: {
      orion: {
        name: 'Profesorul Orion',
        role: 'Astronom Șef',
        quote: '"Am fost în bibliotecă toată seara, catalogând ciclurile lunare."',
        statement: 'Eram în bibliotecă.',
      },
      luna: {
        name: 'Luna',
        role: 'Ucenică la Observator',
        quote: '"Am văzut o siluetă întunecată strecurându-se lângă marele telescop!"',
        statement: 'Am văzut hoțul lângă telescop.',
      },
      vega: {
        name: 'Dr. Vega',
        role: 'Geolog & Botanist',
        quote: '"Am fost în seră studiind florile rare de noapte."',
        statement: 'Eram în grădină.',
      },
      max: {
        name: 'Max',
        role: 'Mecanic & Tehnician',
        quote: '"Luna spune adevărul. Am încredere totală în ea!"',
        statement: 'Luna spune adevărul.',
      },
    },

    // Page 4: Map
    mapTitle: 'Harta Observatorului',
    mapSubtitle: 'Planul Clădirii & Traseul Provocărilor',
    mapBadge: 'Ghid Hartă',
    mapDesc:
      'Explorează cele 12 încăperi ale Observatorului Starfall în ordine. Fiecare cameră conține un indiciu matematic esențial pentru deschiderea Seifului!',
    northDome: 'Orientare Cupolă Nord',
    checkpointIndex: 'Indexul Punctelor de Control',

    // Page 5: Challenge 1
    c1Title: 'Provocare cu Numere',
    c1Subtitle: 'Codul Stelat',
    c1Badge: 'Provocarea 1',
    c1Story:
      'Piatra Lunii a fost văzută ultima oară lângă sala telescopului. Pe pardoseala de marmură a fost găsit un bilet cu o succesiune misterioasă de numere:',
    c1Question: 'Ce număr urmează în șir?',
    c1Verify: 'Verifică Răspunsul',
    c1Hint: 'Ai nevoie de un indiciu?',
    c1WorkLabel: 'Arată calculele și explică regula șirului:',
    c1WorkPlaceholder: 'Exemplu: 3 + 3 = 6, apoi + 4 = 10, apoi + 5 = 15, deci 15 + 6 = 21',
    c1ClueTitle: 'INDICIUL DETECTIVULUI:',
    c1ClueText:
      'Șirul nu este o simplă adunare constantă. Privește cum crește diferența dintre numere! Fiecare pas adaugă cu 1 mai mult (+3, +4, +5...).',
    c1VaultClue: 'Indiciul Seif #1: Cod Frecvență 1 = ',

    // Page 6: Challenge 2
    c2Title: 'Provocarea Timpului',
    c2Subtitle: 'Indiciul din Miez de Noapte',
    c2Badge: 'Provocarea 2',
    c2Story:
      'Alarma observatorului a sunat la ora 23:45. Înregistrările de securitate arată însă o siluetă misterioasă intrând prin ușa serei cu exact 1 oră și 35 de minute mai devreme!',
    c2AlarmSounded: 'Alarma a Sunat: 23:45',
    c2ShadowSpotted: 'Siluetă Observată: ? : ?',
    c2ObservedTime: 'Ora Înregistrată',
    c2TargetPrompt: 'Desenează limbile sau introdu ora',
    c2Question: 'La ce oră a fost observată silueta?',
    c2Verify: 'Verifică Ora',
    c2ClueTitle: 'INDICIUL DETECTIVULUI:',
    c2ClueText: 'Verifică dosarul suspecților! Cine a declarat că se afla lângă seră în jurul orei 22:10?',
    c2VaultClue: 'Cifra Cilindru 2: Ora = ',

    // Page 7: Challenge 3
    c3Title: 'Provocarea Coordonatelor',
    c3Subtitle: 'Grila Hărții Stelare',
    c3Badge: 'Provocarea 3',
    c3Story:
      'Senzorii lui Pip au cartografiat patru probe găsite pe o grilă de coordonate stelare. Amintește-ți: pentru (x, y), mergi mai întâi pe orizontală (x), apoi urci pe verticală (y)!',
    c3QuestionsHeader: 'Identifică Coordonatele Probelor:',
    c3Items: {
      key: '🔑 Cheie de Alamă',
      lens: '🔍 Lentilă Scăpată',
      star: '⭐ Fragment Stelat',
      print: '👣 Urmă cu Noroi',
    },
    c3PipAnalysisTitle: 'ANALIZA COORDONATELOR (PIP):',
    c3PipAnalysisText:
      'Urma de bocanc cu noroi a fost găsită la (2, 4), chiar în fața ușii serei. Aceasta leagă direct traseul hoțului de grădina botanică!',

    // Page 8: Challenge 4
    c4Title: 'Provocare de Logică',
    c4Subtitle: 'Cei Patru Suspecți',
    c4Badge: 'Provocarea 4',
    c4Story:
      'Patru persoane se aflau în observator în acea noapte. Citește declarațiile cu atenție. Exact UNA dintre ele spune adevărul.',
    c4Question: 'Cine a furat Piatra Lunii?',
    c4StepTitle: 'DEDUCȚIA LOGICĂ PAS CU PAS:',
    c4Step1:
      'Pasul 1: Privește declarația lui Max: "Luna spune adevărul." Dacă Luna ar spune adevărul, atunci și Max ar spune adevărul. Asta ar însemna DOI oameni sinceri! Însă doar UNUL spune adevărul. Deci Luna minte și Max minte!',
    c4Step2:
      'Pasul 2: Rămân Orion și Dr. Vega. Întrucât alibiul lui Orion a fost verificat, declarația lui Vega că a fost în grădină este SINGURA adevărată—plasându-l exact la locul urmelor de noroi și al efracției!',
    c4CulpritIdentified: 'Suspectul Principal Identificat:',

    // Page 9: Challenge 5
    c5Title: 'Provocare de Geometrie',
    c5Subtitle: 'Modelul Stelat',
    c5Badge: 'Provocarea 5',
    c5Story:
      'O stea cerească detaliată a fost gravată pe pardoseala seifului. Examinează figura geometrică pentru a descifra unghiurile secrete.',
    c5Q1: '1. Câte triunghiuri poți număra în total?',
    c5Q2: '2. Vârfurile stelei sunt unghiuri ascuțite, drepte sau obtuze?',
    c5Q2Ans: 'Ascuțite (36° fiecare < 90°)',
    c5Q3: '3. Ce poligon regulat se află în centrul stelei?',
    c5Q3Ans: 'Pentagon Regulat (5 laturi)',
    c5ClueTitle: 'STRUCTURA GEOMETRICĂ A DETECTIVULUI:',
    c5ClueText:
      'Nu număra doar cele 5 mici triunghiuri din vârfuri. Există încă 5 triunghiuri mari suprapuse formate de corzile interioare. 5 + 5 = 10 triunghiuri în total!',

    // Page 10: Challenge 6
    c6Title: 'Provocare cu Fracții',
    c6Subtitle: 'Calibrarea Lentilei',
    c6Badge: 'Provocarea 6',
    c6Story:
      'Hoțul a spart lentila telescopului în segmente fracționare! Detectivul Nova a recuperat două fragmente. Adună fracțiile pentru a afla cât din lentilă a fost refăcută:',
    c6Question: 'Cât face 1/4 + 2/8 sub formă ireductibilă?',
    c6Verify: 'Verifică Fracția',
    c6ClueTitle: 'CHEIA CILINDRULUI 3:',
    c6ClueText:
      'Numărătorul nesimplificat al fracției 2/4 este 2. Această cifră setează al 3-lea cilindru al seifului!',

    // Page 11: Challenge 7
    c7Title: 'Arie & Perimetru',
    c7Subtitle: 'Misterul Planului',
    c7Badge: 'Provocarea 7',
    c7Story:
      'Pentru a dezactiva bariera laser a camerei blindate, calculează Aria și Perimetrul pe baza planului arhitectural:',
    c7AreaFormula: 'Aria = Lungime × Lățime',
    c7PerimeterFormula: 'Perimetrul = 2 × (Lungime + Lățime)',
    c7Verify: 'Verifică Dimensiunile',
    c7ClueTitle: 'CHEIA CILINDRULUI 4:',
    c7ClueText:
      'Aria este 48 m². Privește CIFRA ZECILOR din 48 (cifra 4). Aceasta setează al 4-lea cilindru al seifului!',

    // Page 12: Challenge 8
    c8Title: 'Cifru Secret',
    c8Subtitle: 'Codul Constelațiilor',
    c8Badge: 'Provocarea 8',
    c8Story:
      'Un cifru astronomic a fost gravat pe ocularul telescopului. Rezolvă înmulțirile de pe fiecare stea și asociază rezultatele cu literele pentru a afla direcția de evadare!',
    c8MatrixTitle: '★ Matricea Stelară de Decriptare ★',
    c8Question: 'Care este expresia secretă decodificată?',
    c8Verify: 'Decriptează',
    c8ClueTitle: 'DESCOPERIREA DETECTIVULUI:',
    c8ClueText:
      'Expresia "LOOK UP" (Privește în sus) i-a condus pe Nova și Pip direct la luminatorul de sticlă de pe acoperiș, unde hoțul lăsase un ham și un tăietor de sticlă!',

    // Page 13: Challenge 9
    c9Title: 'Grafice & Date',
    c9Subtitle: 'Rețeaua Electrică Nocturnă',
    c9Badge: 'Provocarea 9',
    c9Story:
      'Când seiful a fost forțat, generatorul a înregistrat un consum uriaș de energie. Analizează graficul de bare înregistrat între orele 23:30 și miezul nopții:',
    c9Q1: '1. Ce aripă a înregistrat cel mai mare vârf de consum?',
    c9Q1Ans: 'Seiful (65 kW)',
    c9Q2: '2. Cu câți kW a depășit Seiful Cupola (40 kW)?',
    c9Q3: '3. Consumul total pe cele 5 aripi:',
    c9Q3Ans: '15 + 25 + 40 + 20 + 65 = 165 kW',
    c9ClueTitle: 'DOVADA REȚELEI ELECTRICE:',
    c9ClueText:
      'Vârful de 25 kW din Seif a început la 23:42, demonstrând că hoțul a folosit aparate grele de tăiere cu laser chiar înainte de declanșarea alarmei!',

    // Page 14: Challenge 10
    c10Title: 'Ordinea Operațiilor',
    c10Subtitle: 'Mecanismul Seifului cu Roți Dințate',
    c10Badge: 'Provocarea 10',
    c10Story:
      'Mecanismul de rezervă este blocat de un cifru rotativ. Respectă ordinea operațiilor matematice (paranteze, înmulțiri/împărțiri, adunări/scăderi) pentru a roti angrenajele corect!',
    c10Question: 'Care este codul final al seifului?',
    c10Verify: 'Deblochează Roțile',
    c10ClueTitle: 'CHEIA CILINDRULUI 5:',
    c10ClueText:
      'Seiful se deschide cu codul 68. CIFRA UNITĂȚILOR din 68 este 8. Aceasta reprezintă a cincea și ultima cifră pentru deschiderea Seifului!',

    // Page 15: Challenge 11
    c11Title: 'Măsurare & Criminalistică',
    c11Subtitle: 'Traseul Urmelor de Pași',
    c11Badge: 'Provocarea 11',
    c11Story:
      'Nova și Pip au cercetat coridorul serei și au descoperit urme adânci de bocanci. Măsoară talpa în centimetri și asociaz-o cu registrul încălțămintei suspecților!',
    c11RegisterTitle: 'Registrul Încălțămintei Suspecților:',
    c11ClueTitle: 'POTRIVIRE BOTANICĂ:',
    c11ClueText:
      'Talpa de 28 cm se potrivește perfect cu Dr. Vega (mărimea 44). În plus, particulele verzi fluorescente de pe talpă au fost identificate chimic ca polen de cactus Selenicereus, prezent doar în sera lui privată!',

    // Page 16: Challenge 12
    c12Title: 'Provocarea Finală',
    c12Subtitle: 'Seiful Pietrei Lunii',
    c12Badge: 'Marea Finală',
    c12Story:
      'Ai ajuns în camera blindată! Combină cele 5 indicii adunate pe parcursul anchetei pentru a introduce codul maestru și a recupera Piatra Lunii!',
    c12VaultHeader: '✦ SANCTUARUL SEIFULUI PRINCIPAL STARFALL ✦',
    c12Locked: 'BLOCAT',
    c12Unlocked: 'SEIF DESCHIS! PIATRA LUNII RECUPERATĂ!',
    c12AutoFill: 'Completează Automat Indiciile & Deschide Seiful',

    // Page 17: Solution Reveal
    p17Title: 'Misterul a Fost Dezlegat!',
    p17Subtitle: 'Caz Închis la Starfall',
    p17CulpritBanner: 'Făptașul a fost Dr. Vega!',
    p17Motive:
      'Motivat să folosească lumina rară a Pietrei Lunii pentru a-și face orhideele nocturne să strălucească în întuneric!',
    p17FivePillarsTitle: 'Cei 5 Piloni ai Demonstrației Matematice:',
    p17Congratulations:
      '"Ai rezolvat fiecare provocare fără greșeală! Piatra Lunii este din nou la locul ei în cupolă, strălucind mai puternic ca niciodată!"',

    // Page 18: Evidence Log
    p18Title: 'Jurnalul de Probe',
    p18Subtitle: 'Sinteza Cazului & Grila de Deducție',
    p18Desc:
      'Examinează matricea finală a anchetei. Detectivii adevărați țin evidența fiecărui alibi, probă și calcul matematic.',

    // Page 19: Bonus Maze
    p19Title: 'Bonus 1: Labirintul Telescopului',
    p19Subtitle: 'Alinierea Fasciculului Optic',
    p19Desc:
      'Sistemul de oglinzi are nevoie de recalibrare. Ghidează raza laser de la Emițător (START) până la Ocular (FINISH), reflectând la unghiuri de 90°.',

    // Page 20: Bonus Crossword
    p20Title: 'Bonus 2: Rebus Matematic',
    p20Subtitle: 'Vocabular Astronomic & Matematic',
    p20Desc:
      'Verifică-ți vocabularul matematic! Completează termenii folosiți de Detectivul Nova și Robotul Pip:',

    // Pages 21 & 22: Answer Keys
    p21Title: 'Ghidul Răspunsurilor (Partea 1)',
    p21Subtitle: 'Explicații pentru Provocările 1 - 6',
    p22Title: 'Ghidul Răspunsurilor (Partea 2)',
    p22Subtitle: 'Provocările 7 - 12 & Puzzle-urile Bonus',

    // Page 23: Scratchpad
    p23Title: 'Caietul de Notițe al Detectivului',
    p23Subtitle: 'Calcule & Însemnări pe Teren',

    // Page 24: Certificate
    p24Title: 'Certificat de Detectiv',
    p24Subtitle: 'Distincție Oficială a Academiei',
    p24Header: 'CERTIFICAT OFICIAL AL ACADEMIEI DE DETECTIVI',
    p24Hero: 'BRAVO, DETECTIV MATEMATICIAN!',
    p24Body:
      'Această distincție oficială atestă că investigatorul menționat a descifrat cu succes toate cele 12 provocări matematice și a recuperat Piatra Lunii a Observatorului Starfall!',
    p24AwardedTo: 'Acest Certificat se Acordă lui:',
    p24Rank: 'Criptograf Matematician Senior',
    p24Case: 'Piatra Lunii Dispărută #77',
    p24LeadInvestigator: 'Investigator Principal',
    p24CalcEngine: 'Motor de Calcul',
    p24IssueDate: 'Data Emiterii',
  },

  de: {
    // Top Bar UI
    appTitle: 'DER GEHEIME MATHE-DETEKTIV',
    editionTag: 'Kommerzielle Ausgabe',
    appSub: '24-seitiges druckbares Arbeitsbuch & Innenraum-Studio',
    singlePage: 'Einzelseite',
    spreadView: '2-Seiten-Ansicht',
    allPages: 'Alle 24 Seiten',
    fullColor: '🎨 Vollfarbe',
    ecoPrint: '🌱 Spar-Druck S/W',
    trimMarks: '✂️ Schnittmarken',
    printPage: 'Seite drucken',
    exportPdf: '24-Seiten-PDF exportieren',
    language: 'Sprache',
    jumpToPage: 'Zu Seite springen:',
    progressTracker: 'Fall-Fortschritt',
    investigation: 'Ermittlungs-Fortschritt:',
    vaultTumblerCode: 'Tresor-Zylinder-Code:',
    fiveCylinders: '5 Zylinder',
    moonstoneVault: 'Mondstein-Tresor',
    certificate: 'Zertifikat',
    solvedStatus: 'Gelöst',
    previous: 'Zurück',
    next: 'Weiter',
    pageOf: 'Seite {current} von {total}',
    pagesOf: 'Seiten {p1} & {p2} von {total}',
    galleryTitle: 'Galerie aller 24 Innenseiten',
    gallerySub: 'Klicke auf eine Vorschau, um die Seite interaktiv zu öffnen',
    printCompleteBook: 'Komplettes 24-Seiten-Buch drucken',
    printRenderingNotice: 'Bereite alle 24 Seiten für den Druck vor. Klicke zum Starten:',
    printSavePdf: 'Drucken / Als PDF speichern',

    // Book Cover (Page 1)
    coverCaseTag: 'Offizielle Fallakte #77',
    observatoryName: 'Sternenfall-Observatorium',
    agesTag: 'Alter 8-12',
    theSecret: 'DER GEHEIME',
    bookTitle: 'MATHE-DETEKTIV',
    bookSubtitle: '✦ Der verschwundene Mondstein ✦',
    bookDescription: 'Ein Rätselabenteuer mit 12 Mathe-Herausforderungen',
    badges: {
      logic: 'LOGIK-RÄTSEL',
      number: 'ZAHLEN-RÄTSEL',
      geometry: 'GEOMETRIE & FORMEN',
      graphs: 'DIAGRAMME & DATEN',
      more: 'UND VIELES MEHR!',
    },
    detectiveNameLabel: 'Name des Detektivs:',
    detectiveNamePlaceholder: 'Deinen Detektivnamen eingeben...',
    workbookEditionTag: 'Vollständige 24-seitige druckbare Ausgabe',

    // Shared Header/Footer
    headerSeries: 'Der geheime Mathe-Detektiv • Fall #77',
    footerAgeTag: '★ Alter 8-12 Jahre',
    footerAdventure: 'Mathe-Rätsel-Abenteuer',
    footerGoal: 'Löse die Rätsel, um den Mondstein-Tresor zu öffnen!',

    // Page 2: Briefing
    briefingTitle: 'Die Einsatzbesprechung',
    briefingSubtitle: 'Ein mysteriöser Diebstahl',
    briefingBadge: 'Geschichte & Mission',
    confidentialStamp: 'VERTRAULICHE FALLAKTE',
    reportHeader: 'Ereignisbericht #882-B',
    reportLocation: 'Ort: Kuppel des Sternenfall-Observatoriums',
    reportTime: 'Tatzeit: 23:45 Uhr (Nachtschicht)',
    reportObject: 'Gestohlener Gegenstand: Der uralte Mondstein',
    reportStatus: 'Status: Tresor durch Mathe-Codes geknackt',
    reportStory:
      'Gestern Nacht um 23:45 Uhr schrillte der Alarm durch die Hallen des Sternenfall-Observatoriums. Der unbezahlbare himmlische Mondstein ist aus seinem Hochsicherheitstresor verschwunden! Das Schloss war mit 12 mathematischen Codes gesichert, doch der Dieb knackte sie alle und entkam in die Nacht.',
    novaSays: 'Detektivin Nova sagt:',
    novaDialogue:
      '"Der Dieb hinterließ mathematische Rätsel und Chiffren! Vier Personen waren im Gebäude. Genau EINE Person sagt die Wahrheit! Wir brauchen deinen scharfen Verstand, um die Codes zu knacken!"',
    pipProtocol: 'Roboter Pips Systemprotokoll:',
    pipDialogue:
      '"Piep-piep! Meine Logik-Schaltkreise haben 12 Rätselzonen erfasst. Jedes gelöste Rätsel liefert eine Ziffer für das Hauptschloss. Halte deinen Bleistift bereit!"',
    academyRulesTitle: 'Regeln der Detektiv-Akademie:',
    rule1: '1. Rechenweg aufschreiben: Echte Detektive notieren ihre Schritte sauber.',
    rule2: '2. Hinweise sammeln: Notiere jede gefundene Zahl im Fallbericht.',
    rule3: '3. Alibis prüfen: Finde mit logischem Denken den echten Täter.',
    signatureLabel: 'Unterschrift des Detektivs:',
    badgeIssued: 'Dienstmarke: Sternenfall-Division',

    // Page 3: Dossier
    dossierTitle: 'Die Verdächtigen-Akte',
    dossierSubtitle: 'Vier Personen im Visier',
    dossierBadge: 'Ermittlung',
    dossierDesc:
      'Als der Alarm auslöste, befanden sich nur vier Personen im Observatorium. Prüfe ihre Aussagen genau. Achtung: Genau EINE dieser vier Personen sagt die Wahrheit!',
    alibiChecked: 'Alibi geprüft',
    suspectLabel: 'Verdächtig',
    dossierTip:
      '"Achte genau darauf, wer wen unterstützt! Wenn Max behauptet, dass Luna die Wahrheit sagt, kann Luna dann wirklich ehrlich sein? Denk an die Regel: Genau EINE Person sagt die Wahrheit!"',

    // Suspects
    suspects: {
      orion: {
        name: 'Professor Orion',
        role: 'Chef-Astronom',
        quote: '"Ich war den ganzen Abend in der Bibliothek und habe Mondzyklen erfasst."',
        statement: 'Ich war in der Bibliothek.',
      },
      luna: {
        name: 'Luna',
        role: 'Observatoriums-Lehrling',
        quote: '"Ich habe eine dunkle Gestalt beim Riesenteleskop gesehen!"',
        statement: 'Ich habe den Dieb beim Teleskop gesehen.',
      },
      vega: {
        name: 'Dr. Vega',
        role: 'Geologe & Botaniker',
        quote: '"Ich war im Gewächshaus und untersuchte nachtblühende Orchideen."',
        statement: 'Ich war im Garten.',
      },
      max: {
        name: 'Max',
        role: 'Mechaniker & Techniker',
        quote: '"Luna sagt die Wahrheit. Ich vertraue ihr voll und ganz!"',
        statement: 'Luna sagt die Wahrheit.',
      },
    },

    // Page 4: Map
    mapTitle: 'Die Observatoriums-Karte',
    mapSubtitle: 'Grundriss & Rätselroute',
    mapBadge: 'Kartenführer',
    mapDesc:
      'Erkunde die 12 Räume des Sternenfall-Observatoriums. Jeder Raum enthält ein entscheidendes mathematisches Puzzleteil!',
    northDome: 'Ausrichtung Nordkuppel',
    checkpointIndex: 'Kontrollpunkt-Übersicht',

    // Page 5: Challenge 1
    c1Title: 'Zahlen-Herausforderung',
    c1Subtitle: 'Der Sternen-Code',
    c1Badge: 'Rätsel 1',
    c1Story:
      'Der Mondstein wurde zuletzt beim Teleskopraum gesehen. Auf dem Marmorboden fand Nova diesen geheimnisvollen Zettel mit Zahlen:',
    c1Question: 'Welche Zahl kommt als Nächstes?',
    c1Verify: 'Antwort prüfen',
    c1Hint: 'Brauchst du einen Tipp?',
    c1WorkLabel: 'Zeige deinen Rechenweg und erkläre das Muster:',
    c1WorkPlaceholder: 'Beispiel: 3 + 3 = 6, dann + 4 = 10, dann + 5 = 15, also 15 + 6 = 21',
    c1ClueTitle: 'DETEKTIV-HINWEIS:',
    c1ClueText:
      'Es ist keine einfache Addition. Schau dir die Abstände zwischen den Zahlen an! Jeder Schritt addiert eine Zahl mehr (+3, +4, +5...).',
    c1VaultClue: 'Tresor-Hinweis #1: Frequenzcode 1 = ',

    // Page 6: Challenge 2
    c2Title: 'Zeit-Herausforderung',
    c2Subtitle: 'Der nächtliche Hinweis',
    c2Badge: 'Rätsel 2',
    c2Story:
      'Der Alarm schrillte um 23:45 Uhr. Die Überwachungskameras zeigen jedoch eine Gestalt, die genau 1 Stunde und 35 Minuten früher durch die Gartentür schlich!',
    c2AlarmSounded: 'Alarmzeit: 23:45 Uhr',
    c2ShadowSpotted: 'Schatten gesichtet: ? : ? Uhr',
    c2ObservedTime: 'Beobachtete Zeit',
    c2TargetPrompt: 'Zeiger zeichnen oder Zeit eingeben',
    c2Question: 'Um wie viel Uhr wurde die Gestalt gesehen?',
    c2Verify: 'Zeit prüfen',
    c2ClueTitle: 'DETEKTIV-HINWEIS:',
    c2ClueText: 'Sieh in der Verdächtigen-Akte nach! Wer gab an, gegen 22:10 Uhr beim Garten gewesen zu sein?',
    c2VaultClue: 'Tresor-Zylinder 2 Ziffer: Stunde = ',

    // Page 7: Challenge 3
    c3Title: 'Koordinaten-Rätsel',
    c3Subtitle: 'Das Sternenkarten-Gitter',
    c3Badge: 'Rätsel 3',
    c3Story:
      'Pips Sensoren haben vier Beweisstücke auf einem Koordinatengitter erfasst. Denk daran: Bei (x, y) gehst du zuerst nach rechts (x), dann nach oben (y)!',
    c3QuestionsHeader: 'Bestimme die Beweis-Koordinaten:',
    c3Items: {
      key: '🔑 Messingschlüssel',
      lens: '🔍 Linse',
      star: '⭐ Sternsplitter',
      print: '👣 Schlammspur',
    },
    c3PipAnalysisTitle: 'PIPS KOORDINATEN-ANALYSE:',
    c3PipAnalysisText:
      'Der schlammige Stiefelabdruck lag bei (2, 4) direkt vor der Gewächshaustür. Das beweist den Fluchtweg durch den Garten!',

    // Page 8: Challenge 4
    c4Title: 'Logik-Herausforderung',
    c4Subtitle: 'Die vier Verdächtigen',
    c4Badge: 'Rätsel 4',
    c4Story:
      'Vier Personen waren in jener Nacht im Gebäude. Lies ihre Aussagen genau. Genau EINE Person sagt die Wahrheit.',
    c4Question: 'Wer hat den Mondstein gestohlen?',
    c4StepTitle: 'LOGISCHE SCHRITT-FÜR-SCHRITT-ANALYSE:',
    c4Step1:
      'Schritt 1: Prüfe Max Aussage: "Luna sagt die Wahrheit." Würde Luna die Wahrheit sagen, wäre auch Max ehrlich. Das wären ZWEI ehrliche Personen! Es gibt aber nur EINE. Also lügen Luna und Max!',
    c4Step2:
      'Schritt 2: Bleiben Orion und Dr. Vega. Da Orions Alibi bewiesen ist, ist Dr. Vegas Aussage, im Garten gewesen zu sein, die EINZIGE Wahrheit – und platziert ihn direkt am Tatort!',
    c4CulpritIdentified: 'Hauptverdächtiger identifiziert:',

    // Page 9: Challenge 5
    c5Title: 'Geometrie-Rätsel',
    c5Subtitle: 'Das Sternenmuster',
    c5Badge: 'Rätsel 5',
    c5Story:
      'Ein geometrischer Stern ziert den Tresorboden. Untersuche die geometrische Figur, um das Winkel-Rätsel zu lösen.',
    c5Q1: '1. Wie viele Dreiecke findest du insgesamt?',
    c5Q2: '2. Sind die Spitzen spitz, rechtwinklig oder stumpf?',
    c5Q2Ans: 'Spitz (je 36° < 90°)',
    c5Q3: '3. Welches regelmäßige Vieleck liegt in der Mitte?',
    c5Q3Ans: 'Regelmäßiges Fünfeck (Pentagon)',
    c5ClueTitle: 'DETEKTIV-GEOMETRIE-ANALYSE:',
    c5ClueText:
      'Zähle nicht nur die 5 kleinen Außendreiecke. Es gibt noch 5 größere, überlappende Dreiecke entlang der Innenlinien. 5 + 5 = insgesamt 10 Dreiecke!',

    // Page 10: Challenge 6
    c6Title: 'Bruch-Herausforderung',
    c6Subtitle: 'Linsen-Kalibrierung',
    c6Badge: 'Rätsel 6',
    c6Story:
      'Der Dieb hat die Teleskoplinse in Bruchstücke zersplittert! Nova hat zwei Teile geborgen. Addiere die Brüche, um zu sehen, wie viel von der Linse repariert ist:',
    c6Question: 'Was ergibt 1/4 + 2/8 gekürzt?',
    c6Verify: 'Bruch prüfen',
    c6ClueTitle: 'TRESOR-ZYLINDER 3 CODE:',
    c6ClueText:
      'Der ungekürzte Zähler von 2/4 ist 2. Diese Zahl stellt den 3. Zylinder am Mondstein-Tresor ein!',

    // Page 11: Challenge 7
    c7Title: 'Fläche & Umfang',
    c7Subtitle: 'Das Bauplan-Geheimnis',
    c7Badge: 'Rätsel 7',
    c7Story:
      'Um das Lasergitter des Tresorraums zu deaktivieren, musst du Fläche und Umfang aus dem Bauplan berechnen:',
    c7AreaFormula: 'Fläche = Länge × Breite',
    c7PerimeterFormula: 'Umfang = 2 × (Länge + Breite)',
    c7Verify: 'Maße prüfen',
    c7ClueTitle: 'TRESOR-ZYLINDER 4 CODE:',
    c7ClueText:
      'Die Fläche beträgt 48 m². Schau auf die ZEHNERSCHWELLE der Fläche (die 4 in 48). Das ist Zylinder 4!',

    // Page 12: Challenge 8
    c8Title: 'Geheim-Chiffre',
    c8Subtitle: 'Der Sternbild-Code',
    c8Badge: 'Rätsel 8',
    c8Story:
      'Eine Sternen-Chiffre war ins Teleskop-Okular eingeritzt. Multipliziere die Zahlen auf den Sternen und entschlüssele die Fluchtrichtung des Diebes!',
    c8MatrixTitle: '★ Kosmische Entschlüsselungs-Matrix ★',
    c8Question: 'Wie lautet die geheime englische Entschlüsselung?',
    c8Verify: 'Entschlüsseln',
    c8ClueTitle: 'DETEKTIV-ENTDECKUNG:',
    c8ClueText:
      '"LOOK UP" (Schau nach oben) führte Nova und Pip direkt zum Dachfenster, wo der Dieb ein Kletterseil und Glasschneider befestigt hatte!',

    // Page 13: Challenge 9
    c9Title: 'Diagramme & Daten',
    c9Subtitle: 'Das mitternächtliche Stromnetz',
    c9Badge: 'Rätsel 9',
    c9Story:
      'Als der Tresor manipuliert wurde, registrierte das Netz einen massiven Stromstoß. Analysiere das Balkendiagramm zwischen 23:30 und 00:00 Uhr:',
    c9Q1: '1. Welcher Trakt hatte den höchsten Spitzenstrom?',
    c9Q1Ans: 'Tresor (65 kW)',
    c9Q2: '2. Um wie viel kW überstieg der Tresor die Kuppel (40 kW)?',
    c9Q3: '3. Gesamtstromverbrauch aller 5 Trakte:',
    c9Q3Ans: '15 + 25 + 40 + 20 + 65 = 165 kW',
    c9ClueTitle: 'STROMNETZ-BEWEIS:',
    c9ClueText:
      'Der 25-kW-Stromstoß im Tresor begann um 23:42 Uhr – der Dieb nutzte schwere Laserschneider kurz vor dem Alarm!',

    // Page 14: Challenge 10
    c10Title: 'Punkt vor Strich (PEMDAS)',
    c10Subtitle: 'Der Zahnrad-Mechanismus',
    c10Badge: 'Rätsel 10',
    c10Story:
      'Das Notschloss öffnet sich nur durch Einhalten der Rechenregeln (Klammern zuerst, dann Punkt- vor Strichrechnung):',
    c10Question: 'Wie lautet der finale Tresorcode?',
    c10Verify: 'Zahnrad entriegeln',
    c10ClueTitle: 'TRESOR-ZYLINDER 5 CODE:',
    c10ClueText:
      'Der Tresor öffnet mit 68. Die EINERSTELLE von 68 ist 8. Das ist die fünfte Ziffer des Haupttresors!',

    // Page 15: Challenge 11
    c11Title: 'Messung & Forensik',
    c11Subtitle: 'Die Fußspur-Spur',
    c11Badge: 'Rätsel 11',
    c11Story:
      'Nova und Pip sicherten schlammige Stiefelspuren vor dem Gewächshaus. Miss die Sohlenlänge in cm und vergleiche mit dem Verdächtigen-Register!',
    c11RegisterTitle: 'Schuh-Register der Verdächtigen:',
    c11ClueTitle: 'BOTANISCHER FORENSIK-TREFFER:',
    c11ClueText:
      'Die 28-cm-Sohle passt exakt zu Dr. Vega (Größe 44). Grüne fluoreszierende Partikel an der Sohle wurden als Pollen seiner privaten Mondorchidee identifiziert!',

    // Page 16: Challenge 12
    c12Title: 'Die finale Herausforderung',
    c12Subtitle: 'Der Mondstein-Tresor',
    c12Badge: 'Finales Rätsel',
    c12Story:
      'Du stehst vor dem Haupttresor! Kombiniere die fünf Ziffern deiner Ermittlung, um den 5-Zylinder-Meistercode einzustellen und den Mondstein zu retten!',
    c12VaultHeader: '✦ STERNENFALL HAUPTTRESOR-HEILIGTUM ✦',
    c12Locked: 'VERSCHLOSSEN',
    c12Unlocked: 'TRESOR GEÖFFNET! MONDSTEIN GEBORGEN!',
    c12AutoFill: 'Hinweise automatisch eintragen & Tresor öffnen',

    // Page 17: Solution Reveal
    p17Title: 'Das Rätsel ist gelöst!',
    p17Subtitle: 'Fall abgeschlossen',
    p17CulpritBanner: 'Der Täter war Dr. Vega!',
    p17Motive:
      'Er wollte das Mondlicht nutzen, um seine seltenen Nachtorchideen im Dunkeln leuchten zu lassen!',
    p17FivePillarsTitle: 'Die 5 Säulen des mathematischen Beweises:',
    p17Congratulations:
      '"Du hast jedes Rätsel meisterhaft gelöst! Der Mondstein erstrahlt wieder in voller Pracht über der Sternwarte!"',

    // Page 18: Evidence Log
    p18Title: 'Das Beweis-Protokoll',
    p18Subtitle: 'Fallzusammenfassung & Deducer-Gitter',
    p18Desc:
      'Prüfe die Übersicht aller Alibis und Beweise. Echte Detektive halten jeden Rechenschritt fest.',

    // Page 19: Bonus Maze
    p19Title: 'Bonus 1: Das Teleskop-Labyrinth',
    p19Subtitle: 'Laserstrahl-Ausrichtung',
    p19Desc:
      'Leite den Laserstrahl von START zu FINISH durch Reflektion an Spiegeln im 90°-Winkel.',

    // Page 20: Bonus Crossword
    p20Title: 'Bonus 2: Mathe-Kreuzworträtsel',
    p20Subtitle: 'Astronomisches Fachvokabular',
    p20Desc:
      'Teste dein mathematisches Wissen mit den Begriffen aus Novas und Pips Abenteuer:',

    // Pages 21 & 22: Answer Keys
    p21Title: 'Lösungs-Leitfaden (Teil 1)',
    p21Subtitle: 'Erklärungen zu Rätseln 1 bis 6',
    p22Title: 'Lösungs-Leitfaden (Teil 2)',
    p22Subtitle: 'Rätsel 7 bis 12 & Bonus-Rätsel',

    // Page 23: Scratchpad
    p23Title: 'Detektiv-Notizblock',
    p23Subtitle: 'Berechnungen & Feldnotizen',

    // Page 24: Certificate
    p24Title: 'Detektiv-Zertifikat',
    p24Subtitle: 'Offizielle Auszeichnung der Akademie',
    p24Header: 'OFFIZIELLES ZERTIFIKAT DER DETEKTIV-AKADEMIE',
    p24Hero: 'GUT GEMACHT, MATHE-DETEKTIV!',
    p24Body:
      'Dieses Dokument bestätigt feierlich, dass der genannte Ermittler alle 12 mathematischen Herausforderungen erfolgreich gelöst und den himmlischen Mondstein geborgen hat!',
    p24AwardedTo: 'Dieses Zertifikat wird verliehen an:',
    p24Rank: 'Chef-Kryptograph für Mathematik',
    p24Case: 'Der verschwundene Mondstein #77',
    p24LeadInvestigator: 'Leitende Ermittlerin',
    p24CalcEngine: 'Recheneinheit',
    p24IssueDate: 'Ausstellungsdatum',
  },

  fr: {
    // Top Bar UI
    appTitle: 'LE SECRET DU DÉTECTIVE EN MATHS',
    editionTag: 'Édition Commerciale',
    appSub: 'Cahier Imprimable de 24 Pages & Studio de Pages Intérieures',
    singlePage: 'Page Unique',
    spreadView: 'Double Page',
    allPages: 'Toutes les 24 Pages',
    fullColor: '🎨 Pleine Couleur',
    ecoPrint: '🌱 Éco N&B',
    trimMarks: '✂️ Repères de Coupe',
    printPage: 'Imprimer la Page',
    exportPdf: 'Exporter le PDF 24 Pages',
    language: 'Langue',
    jumpToPage: 'Aller à la Page :',
    progressTracker: 'Suivi de l’Enquête',
    investigation: 'Progression du Mystère :',
    vaultTumblerCode: 'Code des Cylindres :',
    fiveCylinders: '5 Cylindres',
    moonstoneVault: 'Coffre de la Pierre de Lune',
    certificate: 'Certificat',
    solvedStatus: 'Résolu',
    previous: 'Précédent',
    next: 'Suivant',
    pageOf: 'Page {current} sur {total}',
    pagesOf: 'Pages {p1} & {p2} sur {total}',
    galleryTitle: 'Galerie des 24 Pages Intérieures',
    gallerySub: 'Cliquez sur une miniature pour l’ouvrir en mode interactif',
    printCompleteBook: 'Imprimer le Cahier Complet (24 Pages)',
    printRenderingNotice: 'Préparation des 24 pages pour l’impression. Cliquez pour lancer l’impression :',
    printSavePdf: 'Imprimer / Enregistrer en PDF',

    // Book Cover (Page 1)
    coverCaseTag: 'Dossier Officiel #77',
    observatoryName: 'Observatoire de Starfall',
    agesTag: 'Âges 8-12',
    theSecret: 'LE SECRET DU',
    bookTitle: 'DÉTECTIVE EN MATHS',
    bookSubtitle: '✦ La Pierre de Lune Disparue ✦',
    bookDescription: 'Une Aventure Mystérieuse avec 12 Défis Mathématiques',
    badges: {
      logic: 'ÉNIGMES DE LOGIQUE',
      number: 'DÉFIS NUMÉRIQUES',
      geometry: 'GÉOMÉTRIE & FORMES',
      graphs: 'GRAPHIQUES & DONNÉES',
      more: 'ET BIEN PLUS !',
    },
    detectiveNameLabel: 'Nom du Détective :',
    detectiveNamePlaceholder: 'Entrez votre nom de détective...',
    workbookEditionTag: 'Édition Complète Imprimable de 24 Pages',

    // Shared Header/Footer
    headerSeries: 'Le Secret du Détective en Maths • Affaire #77',
    footerAgeTag: '★ Âges 8-12 Ans',
    footerAdventure: 'Aventure Mathématique Mystérieuse',
    footerGoal: 'Résolvez les indices pour ouvrir le Coffre de la Pierre de Lune !',

    // Page 2: Briefing
    briefingTitle: 'Le Rapport Initial',
    briefingSubtitle: 'Un Vol Mystérieux',
    briefingBadge: 'Histoire & Mission',
    confidentialStamp: 'DOSSIER CONFIDENTIEL',
    reportHeader: 'Rapport d’Incident #882-B',
    reportLocation: 'Lieu : Dôme de l’Observatoire de Starfall',
    reportTime: 'Heure de l’Incident : 23h45 (Garde de Nuit)',
    reportObject: 'Objet Dérobe : L’Antique Pierre de Lune Céleste',
    reportStatus: 'État : Coffre Forcé par des Codes Mathématiques',
    reportStory:
      'Hier soir à 23h45, l’alarme a retenti dans l’Observatoire de Starfall. L’inestimable Pierre de Lune—capable de focaliser la lumière des étoiles—a disparu de son socle sécurisé ! Le coffre était verrouillé par 12 serrures mathématiques chiffrées, mais un voleur astucieux a réussi à les déjouer.',
    novaSays: 'La Détective Nova dit :',
    novaDialogue:
      '"Le voleur a laissé des énigmes mathématiques et des messages codés ! Quatre personnes se trouvaient dans le bâtiment. Une seule personne dit la vérité ! Nous avons besoin de tes compétences mathématiques pour examiner les pièces et ouvrir le coffre final !"',
    pipProtocol: 'Protocole Système du Robot Pip :',
    pipDialogue:
      '"Bip-bip ! Mes circuits logiques ont cartographié 12 zones de défi. Chaque énigme résolue révèle un chiffre secret pour le coffre principal. Aiguise ton crayon !"',
    academyRulesTitle: 'Règles de l’Académie des Détectives :',
    rule1: '1. Écris tes Calculs : Les vrais détectives posent leurs calculs avec soin.',
    rule2: '2. Récolte les Indices : Note chaque chiffre trouvé sur ta fiche d’enquête.',
    rule3: '3. Teste Chaque Alibi : Utilise la logique pour démasquer le menteur.',
    signatureLabel: 'Signature du Détective :',
    badgeIssued: 'Insigne Délivré : Division Starfall',

    // Page 3: Dossier
    dossierTitle: 'Le Dossier des Suspects',
    dossierSubtitle: 'Quatre Personnes d’Intérêt',
    dossierBadge: 'Enquête',
    dossierDesc:
      'Lors du déclenchement de l’alarme, quatre personnes étaient présentes. Examinez attentivement leurs déclarations. Attention : Exactement UNE personne dit la vérité !',
    alibiChecked: 'Alibi Vérifié',
    suspectLabel: 'Suspect',
    dossierTip:
      '"Regarde bien qui soutient qui ! Si Max affirme que Luna dit la vérité, Luna peut-elle vraiment être sincère ? Rappelle-toi de la règle : exactement UNE personne dit la vérité !"',

    // Suspects
    suspects: {
      orion: {
        name: 'Professeur Orion',
        role: 'Astronome en Chef',
        quote: '"J’étais dans la bibliothèque toute la soirée à répertorier les cycles lunaires."',
        statement: 'J’étais dans la bibliothèque.',
      },
      luna: {
        name: 'Luna',
        role: 'Apprentie de l’Observatoire',
        quote: '"J’ai vu une silhouette sombre près du grand télescope !"',
        statement: 'J’ai vu le voleur près du télescope.',
      },
      vega: {
        name: 'Dr Vega',
        role: 'Géologue & Botaniste',
        quote: '"J’étais dans la serre en train d’étudier les orchidées nocturnes."',
        statement: 'J’étais dans le jardin.',
      },
      max: {
        name: 'Max',
        role: 'Mécanicien & Technicien',
        quote: '"Luna dit la vérité. J’ai totale confiance en elle !"',
        statement: 'Luna dit la vérité.',
      },
    },

    // Page 4: Map
    mapTitle: 'La Carte de l’Observatoire',
    mapSubtitle: 'Plan des Salles & Itinéraire des Défis',
    mapBadge: 'Guide Carte',
    mapDesc:
      'Explorez les 12 salles de l’Observatoire de Starfall dans l’ordre. Chaque pièce contient un indice mathématique essentiel pour ouvrir le Coffre !',
    northDome: 'Orientation Dôme Nord',
    checkpointIndex: 'Index des Points de Contrôle',

    // Page 5: Challenge 1
    c1Title: 'Défi Numérique',
    c1Subtitle: 'Le Code Étoilé',
    c1Badge: 'Défi 1',
    c1Story:
      'La Pierre de Lune a été vue pour la dernière fois près du télescope. Un parchemin avec une suite mystérieuse de nombres a été retrouvé sur le marbre :',
    c1Question: 'Quel nombre vient ensuite ?',
    c1Verify: 'Vérifier la Réponse',
    c1Hint: 'Besoin d’un indice ?',
    c1WorkLabel: 'Montre tes calculs et explique la règle de la suite :',
    c1WorkPlaceholder: 'Exemple : 3 + 3 = 6, puis + 4 = 10, puis + 5 = 15, donc 15 + 6 = 21',
    c1ClueTitle: 'INDICE DU DÉTECTIVE :',
    c1ClueText:
      'Ce n’est pas une simple addition constante. Regarde comment la différence grandit à chaque étape (+3, +4, +5...) !',
    c1VaultClue: 'Indice Coffre #1 : Code Fréquence 1 = ',

    // Page 6: Challenge 2
    c2Title: 'Défi Temporel',
    c2Subtitle: 'L’Indice Nocturne',
    c2Badge: 'Défi 2',
    c2Story:
      'L’alarme a sonné à 23h45. Mais les caméras ont capté une silhouette entrant par la porte de la serre exactement 1 heure et 35 minutes plus tôt !',
    c2AlarmSounded: 'Alarme Déclenchée : 23h45',
    c2ShadowSpotted: 'Silhouette Vue : ? : ?',
    c2ObservedTime: 'Heure Enregistrée',
    c2TargetPrompt: 'Dessine les aiguilles ou saisis l’heure',
    c2Question: 'À quelle heure la silhouette a-t-elle été vue ?',
    c2Verify: 'Vérifier l’Heure',
    c2ClueTitle: 'INDICE DU DÉTECTIVE :',
    c2ClueText: 'Consulte le dossier des suspects ! Qui a affirmé être dans le jardin vers 22h10 ?',
    c2VaultClue: 'Chiffre Cylindre 2 : Heure = ',

    // Page 7: Challenge 3
    c3Title: 'Défi des Coordonnées',
    c3Subtitle: 'La Grille de la Carte Stellaire',
    c3Badge: 'Défi 3',
    c3Story:
      'Les capteurs de Pip ont localisé quatre indices sur un quadrillage. Rappel : pour (x, y), avance d’abord horizontalement (x), puis monte verticalement (y) !',
    c3QuestionsHeader: 'Identifie les Coordonnées des Indices :',
    c3Items: {
      key: '🔑 Clé en Laiton',
      lens: '🔍 Lentille Échappée',
      star: '⭐ Éclat Stellaire',
      print: '👣 Trace de Boue',
    },
    c3PipAnalysisTitle: 'ANALYSE DES COORDONNÉES (PIP) :',
    c3PipAnalysisText:
      'La trace de boue se trouve à (2, 4), juste devant la porte vitrée de la serre. Cela relie la fuite du voleur au jardin botanique !',

    // Page 8: Challenge 4
    c4Title: 'Défi de Logique',
    c4Subtitle: 'Les Quatre Suspects',
    c4Badge: 'Défi 4',
    c4Story:
      'Quatre personnes étaient dans l’observatoire. Lisez leurs déclarations avec attention. Exactement UNE personne dit la vérité.',
    c4Question: 'Qui a volé la Pierre de Lune ?',
    c4StepTitle: 'DÉDUCTION LOGIQUE ÉTAPE PAR ÉTAPE :',
    c4Step1:
      'Étape 1 : Regarde la phrase de Max : "Luna dit la vérité." Si Luna disait la vérité, Max dirait aussi la vérité (2 personnes sincères, impossible !). Donc Luna ment et Max ment !',
    c4Step2:
      'Étape 2 : Il reste Orion et Dr Vega. L’alibi d’Orion étant vérifié, la déclaration de Vega disant qu’il était dans le jardin est la SEULE vraie déclaration—le plaçant sur les lieux du vol !',
    c4CulpritIdentified: 'Suspect Principal Identifié :',

    // Page 9: Challenge 5
    c5Title: 'Défi Géométrique',
    c5Subtitle: 'Le Motif Étoilé',
    c5Badge: 'Défi 5',
    c5Story:
      'Une étoile géométrique est gravée sur le sol. Examine la figure pour décoder le puzzle d’angles.',
    c5Q1: '1. Combien de triangles comptes-tu au total ?',
    c5Q2: '2. Les sommets sont-ils aigus, droits ou obtus ?',
    c5Q2Ans: 'Aigus (36° chacun < 90°)',
    c5Q3: '3. Quel polygone régulier se trouve au centre ?',
    c5Q3Ans: 'Pentagone Régulier (5 côtés)',
    c5ClueTitle: 'STRUCTURE GÉOMÉTRIQUE DU DÉTECTIVE :',
    c5ClueText:
      'Ne compte pas seulement les 5 petits triangles extérieurs. Il y a aussi 5 grands triangles intérieurs superposés. 5 + 5 = 10 triangles au total !',

    // Page 10: Challenge 6
    c6Title: 'Défi des Fractions',
    c6Subtitle: 'Calibration de la Lentille',
    c6Badge: 'Défi 6',
    c6Story:
      'Le voleur a brisé la lentille en fractions ! Nova a récupéré deux fragments. Additionne-les pour connaître la portion réparée :',
    c6Question: 'Combien font 1/4 + 2/8 sous forme simplifiée ?',
    c6Verify: 'Vérifier la Fraction',
    c6ClueTitle: 'CLÉ DU CYLINDRE 3 :',
    c6ClueText:
      'Le numérateur non simplifié de 2/4 est 2. Ce chiffre règle le 3e cylindre du coffre !',

    // Page 11: Challenge 7
    c7Title: 'Aire & Périmètre',
    c7Subtitle: 'Le Mystère du Plan',
    c7Badge: 'Défi 7',
    c7Story:
      'Pour désactiver le champ laser, calcule l’Aire et le Périmètre à partir du plan d’architecte :',
    c7AreaFormula: 'Aire = Longueur × Largeur',
    c7PerimeterFormula: 'Périmètre = 2 × (Longueur + Largeur)',
    c7Verify: 'Vérifier les Mesures',
    c7ClueTitle: 'CLÉ DU CYLINDRE 4 :',
    c7ClueText:
      'L’Aire est de 48 m². Regarde le CHIFFRE DES DIZAINES (le 4 dans 48). Il règle le 4e cylindre du coffre !',

    // Page 12: Challenge 8
    c8Title: 'Chiffre Secret',
    c8Subtitle: 'Le Code des Constellations',
    c8Badge: 'Défi 8',
    c8Story:
      'Un message codé astronomique a été gravé sur l’oculaire. Multiplie les facteurs sur chaque étoile pour révéler la direction de fuite !',
    c8MatrixTitle: '★ Matrice Stellaire de Décryptage ★',
    c8Question: 'Quelle est la phrase secrète décodée (en anglais) ?',
    c8Verify: 'Décrypter',
    c8ClueTitle: 'DÉCOUVERTE DU DÉTECTIVE :',
    c8ClueText:
      '"LOOK UP" (Regardez en haut) a guidé Nova et Pip vers la verrière du toit, où un harnais de fuite et un coupe-verre ont été découverts !',

    // Page 13: Challenge 9
    c9Title: 'Graphiques & Données',
    c9Subtitle: 'Le Réseau Électrique de Minuit',
    c9Badge: 'Défi 9',
    c9Story:
      'Pendant le forçage du coffre, le générateur a enregistré un pic d’énergie. Analyse le graphique à barres entre 23h30 et minuit :',
    c9Q1: '1. Quelle aile a connu le plus grand pic de consommation ?',
    c9Q1Ans: 'Le Coffre (65 kW)',
    c9Q2: '2. De combien de kW le Coffre dépasse-t-il le Dôme (40 kW) ?',
    c9Q3: '3. Consommation totale des 5 ailes :',
    c9Q3Ans: '15 + 25 + 40 + 20 + 65 = 165 kW',
    c9ClueTitle: 'PREUVE DU RÉSEAU ÉLECTRIQUE :',
    c9ClueText:
      'La surtension de 25 kW dans le Coffre a commencé à 23h42, prouvant l’usage de découpeurs laser juste avant l’alarme !',

    // Page 14: Challenge 10
    c10Title: 'Ordre des Opérations',
    c10Subtitle: 'Le Mécanisme de l’Engrenage',
    c10Badge: 'Défi 10',
    c10Story:
      'Le verrou de secours s’ouvre en respectant les priorités opératoires (parenthèses, multiplications/divisions, soustractions) :',
    c10Question: 'Quel est le code final de l’engrenage ?',
    c10Verify: 'Déverrouiller',
    c10ClueTitle: 'CLÉ DU CYLINDRE 5 :',
    c10ClueText:
      'Le mécanisme s’ouvre avec le nombre 68. Le CHIFFRE DES UNITÉS de 68 est 8. C’est le cinquième et dernier chiffre du coffre !',

    // Page 15: Challenge 11
    c11Title: 'Mesure & Police Scientifique',
    c11Subtitle: 'La Piste des Traces de Pas',
    c11Badge: 'Défi 11',
    c11Story:
      'Nova et Pip ont relevé des empreintes boueuses. Mesure la semelle en cm et compare avec le registre des chaussures des suspects !',
    c11RegisterTitle: 'Registre des Chaussures des Suspects :',
    c11ClueTitle: 'CORRESPONDANCE BOTANIQUE :',
    c11ClueText:
      'La semelle de 28 cm correspond à la pointure 44 du Dr Vega. De plus, les grains verts fluorescents ont été identifiés comme le pollen de cactus Selenicereus de sa serre !',

    // Page 16: Challenge 12
    c12Title: 'Le Grand Défi Final',
    c12Subtitle: 'Le Coffre de la Pierre de Lune',
    c12Badge: 'Grande Finale',
    c12Story:
      'Te voilà devant la chambre forte ! Combine les 5 indices récoltés pour déverrouiller le coffre et sauver la Pierre de Lune !',
    c12VaultHeader: '✦ SANCTUAIRE DU GRAND COFFRE DE STARFALL ✦',
    c12Locked: 'VERROUILLÉ',
    c12Unlocked: 'COFFRE OUVERT ! PIERRE DE LUNE RÉCUPÉRÉE !',
    c12AutoFill: 'Remplir Automatiquement les Indices & Ouvrir',

    // Page 17: Solution Reveal
    p17Title: 'Le Mystère est Résolu !',
    p17Subtitle: 'Affaire Classée à Starfall',
    p17CulpritBanner: 'Le coupable était le Dr Vega !',
    p17Motive:
      'Il voulait s’emparer du rayonnement lunaire pour faire briller ses orchidées nocturnes !',
    p17FivePillarsTitle: 'Les 5 Piliers de la Démonstration Mathématique :',
    p17Congratulations:
      '"Tu as résolu chaque défi avec brio ! La Pierre de Lune brille à nouveau dans son dôme céleste !"',

    // Page 18: Evidence Log
    p18Title: 'Le Registre des Preuves',
    p18Subtitle: 'Synthèse de l’Enquête & Dépouillement',
    p18Desc:
      'Consultez la matrice finale de l’enquête. Les vrais détectives conservent la trace de chaque calcul et indice.',

    // Page 19: Bonus Maze
    p19Title: 'Bonus 1 : Le Labyrinthe du Télescope',
    p19Subtitle: 'Alignement du Faisceau Optique',
    p19Desc:
      'Guidez le faisceau laser de START à FINISH en le réfléchissant sur les miroirs à 90°.',

    // Page 20: Bonus Crossword
    p20Title: 'Bonus 2 : Mots Croisés Mathématiques',
    p20Subtitle: 'Vocabulaire Astronomique & Mathématique',
    p20Desc:
      'Testez votre vocabulaire avec les mots-clés de l’enquête de Nova et Pip :',

    // Pages 21 & 22: Answer Keys
    p21Title: 'Guide des Réponses (Partie 1)',
    p21Subtitle: 'Explications des Défis 1 à 6',
    p22Title: 'Guide des Réponses (Partie 2)',
    p22Subtitle: 'Défis 7 à 12 & Puzzles Bonus',

    // Page 23: Scratchpad
    p23Title: 'Bloc-Notes du Détective',
    p23Subtitle: 'Calculs & Notes de Terrain',

    // Page 24: Certificate
    p24Title: 'Certificat de Détective',
    p24Subtitle: 'Récompense Officielle de l’Académie',
    p24Header: 'CERTIFICAT OFFICIEL DE L’ACADÉMIE DES DÉTECTIVES',
    p24Hero: 'BIEN JOUÉ, DÉTECTIVE EN MATHS !',
    p24Body:
      'Cette attestation officielle certifie que l’enquêteur désigné a résolu avec succès l’ensemble des 12 défis mathématiques et récupéré la Pierre de Lune de l’Observatoire de Starfall !',
    p24AwardedTo: 'Ce Certificat est Décerné à :',
    p24Rank: 'Cryptographe Mathématicien Senior',
    p24Case: 'La Pierre de Lune Disparue #77',
    p24LeadInvestigator: 'Enquêteur Principal',
    p24CalcEngine: 'Moteur de Calcul',
    p24IssueDate: 'Date d’Émission',
  },

  es: {
    // Top Bar UI
    appTitle: 'EL SECRETO DEL DETECTIVE MATEMÁTICO',
    editionTag: 'Edición Comercial',
    appSub: 'Cuaderno Imprimible de 24 Páginas & Estudio de Páginas Interiores',
    singlePage: 'Página Única',
    spreadView: 'Doble Página',
    allPages: 'Las 24 Páginas',
    fullColor: '🎨 Todo Color',
    ecoPrint: '🌱 Eco B/N',
    trimMarks: '✂️ Marcas de Corte',
    printPage: 'Imprimir Página',
    exportPdf: 'Exportar PDF de 24 Páginas',
    language: 'Idioma',
    jumpToPage: 'Ir a la Página:',
    progressTracker: 'Progreso del Caso',
    investigation: 'Investigación del Misterio:',
    vaultTumblerCode: 'Código de Cilindros:',
    fiveCylinders: '5 Cilindros',
    moonstoneVault: 'Cámara de la Piedra Lunar',
    certificate: 'Certificado',
    solvedStatus: 'Resuelto',
    previous: 'Anterior',
    next: 'Siguiente',
    pageOf: 'Página {current} de {total}',
    pagesOf: 'Páginas {p1} & {p2} de {total}',
    galleryTitle: 'Galería de las 24 Páginas Interiores',
    gallerySub: 'Haz clic en cualquier miniatura para abrirla en vista interactiva',
    printCompleteBook: 'Imprimir Libro Completo (24 Páginas)',
    printRenderingNotice: 'Preparando las 24 páginas para imprimir. Haz clic para abrir el diálogo de impresión:',
    printSavePdf: 'Imprimir / Guardar en PDF',

    // Book Cover (Page 1)
    coverCaseTag: 'Expediente Oficial #77',
    observatoryName: 'Observatorio Starfall',
    agesTag: 'Edades 8-12',
    theSecret: 'EL SECRETO DEL',
    bookTitle: 'DETECTIVE MATEMÁTICO',
    bookSubtitle: '✦ La Piedra Lunar Desaparecida ✦',
    bookDescription: 'Una Aventura de Misterio con 12 Desafíos Matemáticos',
    badges: {
      logic: 'ACERTIJOS LÓGICOS',
      number: 'RETOS NUMÉRICOS',
      geometry: 'GEOMETRÍA & FORMAS',
      graphs: 'GRÁFICOS & DATOS',
      more: '¡Y MUCHO MÁS!',
    },
    detectiveNameLabel: 'Nombre del Detective:',
    detectiveNamePlaceholder: 'Escribe tu nombre de detective...',
    workbookEditionTag: 'Edición Completa Imprimible de 24 Páginas',

    // Shared Header/Footer
    headerSeries: 'El Secreto del Detective Matemático • Caso #77',
    footerAgeTag: '★ Edades 8-12 Años',
    footerAdventure: 'Aventura de Misterio Matemático',
    footerGoal: '¡Resuelve las pistas para abrir la Cámara de la Piedra Lunar!',

    // Page 2: Briefing
    briefingTitle: 'El Informe Inicial',
    briefingSubtitle: 'Un Robo Misterioso',
    briefingBadge: 'Historia & Misión',
    confidentialStamp: 'EXPEDIENTE CONFIDENCIAL',
    reportHeader: 'Informe de Incidente #882-B',
    reportLocation: 'Lugar: Cúpula del Observatorio Starfall',
    reportTime: 'Hora del Suceso: 23:45 (Turno de Medianoche)',
    reportObject: 'Objeto Sustraído: La Legendaria Piedra Lunar Celeste',
    reportStatus: 'Estado: Bóveda Forzada con Códigos Matemáticos',
    reportStory:
      'Anoche a las 23:45, la alarma resonó en el Observatorio Starfall. La valiosa Piedra Lunar—capaz de concentrar la luz de las estrellas—desapareció de su pedestal protegido. La bóveda contaba con 12 cerraduras matemáticas encriptadas, pero un hábil ladrón logró descifrarlas y huir en la noche.',
    novaSays: 'La Detective Nova dice:',
    novaDialogue:
      '"¡El ladrón dejó un rastro de acertijos matemáticos y notas cifradas! Cuatro personas estaban en el edificio. ¡Solo una persona dice la verdad! Necesitamos tu ingenio matemático para inspeccionar las salas y abrir la bóveda final."',
    pipProtocol: 'Protocolo de Robot Pip:',
    pipDialogue:
      '"¡Bip-bip! Mis procesadores han trazado 12 zonas de desafío. Cada problema resuelto revela un dígito secreto para la bóveda principal. ¡Mantén tu lápiz afilado!"',
    academyRulesTitle: 'Reglas de la Academia de Detectives:',
    rule1: '1. Muestra tus Cálculos: Los detectives reales escriben cada operación con claridad.',
    rule2: '2. Reúne las Pistas: Anota cada dígito descifrado en tu hoja de caso.',
    rule3: '3. Comprueba los Alibis: Usa la lógica para averiguar quién dice la verdad.',
    signatureLabel: 'Firma del Detective:',
    badgeIssued: 'Placa Emitida: División Starfall',

    // Page 3: Dossier
    dossierTitle: 'El Expediente de Sospechosos',
    dossierSubtitle: 'Cuatro Personas de Interés',
    dossierBadge: 'Investigación',
    dossierDesc:
      'Cuando saltó la alarma, solo cuatro personas estaban en el observatorio. Revisa sus declaraciones oficiales. Advertencia: ¡Exactamente UNA de estas cuatro personas dice la verdad!',
    alibiChecked: 'Alibi Comprobado',
    suspectLabel: 'Sospechoso',
    dossierTip:
      '"¡Presta atención a quién apoya a quién! Si Max dice que Luna dice la verdad, ¿puede Luna realmente estar diciendo la verdad? Recuerda la regla: ¡exactamente UNA persona dice la verdad!"',

    // Suspects
    suspects: {
      orion: {
        name: 'Profesor Orion',
        role: 'Astrónomo Jefe',
        quote: '"Estuve en la biblioteca toda la noche catalogando ciclos lunares."',
        statement: 'Estaba en la biblioteca.',
      },
      luna: {
        name: 'Luna',
        role: 'Aprendiz del Observatorio',
        quote: '"¡Vi una figura oscura escabulléndose cerca del telescopio gigante!"',
        statement: 'Vi al ladrón cerca del telescopio.',
      },
      vega: {
        name: 'Dr. Vega',
        role: 'Geólogo & Botánico',
        quote: '"Estuve en el invernadero estudiando flores nocturnas."',
        statement: 'Estaba en el jardín.',
      },
      max: {
        name: 'Max',
        role: 'Mecánico & Técnico',
        quote: '"Luna dice la verdad. ¡Confío totalmente en ella!"',
        statement: 'Luna está diciendo la verdad.',
      },
    },

    // Page 4: Map
    mapTitle: 'El Mapa del Observatorio',
    mapSubtitle: 'Plano del Edificio & Ruta de Desafíos',
    mapBadge: 'Guía de Mapa',
    mapDesc:
      'Explora las 12 salas del Observatorio Starfall en orden. ¡Cada habitación oculta una clave matemática para abrir la Bóveda!',
    northDome: 'Orientación Cúpula Norte',
    checkpointIndex: 'Índice de Puntos de Control',

    // Page 5: Challenge 1
    c1Title: 'Reto Numérico',
    c1Subtitle: 'El Código Estelar',
    c1Badge: 'Desafío 1',
    c1Story:
      'La Piedra Lunar fue vista por última vez cerca del telescopio. En el suelo de mármol se encontró una nota con una misteriosa serie de números:',
    c1Question: '¿Qué número sigue en la secuencia?',
    c1Verify: 'Comprobar Respuesta',
    c1Hint: '¿Necesitas una pista?',
    c1WorkLabel: 'Muestra tus operaciones y explica el patrón:',
    c1WorkPlaceholder: 'Ejemplo: 3 + 3 = 6, luego + 4 = 10, luego + 5 = 15, así que 15 + 6 = 21',
    c1ClueTitle: 'PISTA DEL DETECTIVE:',
    c1ClueText:
      'El patrón no es una suma simple constante. ¡Fíjate cómo cambia la diferencia entre números! En cada paso se suma uno más (+3, +4, +5...).',
    c1VaultClue: 'Pista de Bóveda #1: Código de Frecuencia 1 = ',

    // Page 6: Challenge 2
    c2Title: 'Reto de Tiempo',
    c2Subtitle: 'La Pista Nocturna',
    c2Badge: 'Desafío 2',
    c2Story:
      'La alarma sonó exactamente a las 23:45. Sin embargo, las cámaras de seguridad registraron a una figura entrando por el invernadero ¡exactamente 1 hora y 35 minutos antes!',
    c2AlarmSounded: 'Alarma Activada: 23:45',
    c2ShadowSpotted: 'Figura Vista: ? : ?',
    c2ObservedTime: 'Hora Registrada',
    c2TargetPrompt: 'Dibuja las agujas o escribe la hora',
    c2Question: '¿A qué hora fue vista la figura sospechosa?',
    c2Verify: 'Comprobar Hora',
    c2ClueTitle: 'PISTA DEL DETECTIVE:',
    c2ClueText: '¡Consulta el expediente de sospechosos! ¿Quién afirmó estar cerca del jardín sobre las 22:10?',
    c2VaultClue: 'Dígito Cilindro 2: Hora = ',

    // Page 7: Challenge 3
    c3Title: 'Reto de Coordenadas',
    c3Subtitle: 'La Cuadrícula Estelar',
    c3Badge: 'Desafío 3',
    c3Story:
      'Los sensores de Pip mapearon cuatro pistas en una cuadrícula. Recuerda: para (x, y), avanza primero en horizontal (x) y luego sube en vertical (y).',
    c3QuestionsHeader: 'Identifica las Coordenadas de las Pistas:',
    c3Items: {
      key: '🔑 Llave de Latón',
      lens: '🔍 Lente Caída',
      star: '⭐ Fragmento Estelar',
      print: '👣 Huella con Barro',
    },
    c3PipAnalysisTitle: 'ANÁLISIS DE COORDENADAS (PIP):',
    c3PipAnalysisText:
      'La huella con barro se localizó en (2, 4), justo delante de la puerta del invernadero. ¡Esto conecta la fuga del ladrón con el jardín!',

    // Page 8: Challenge 4
    c4Title: 'Reto de Lógica',
    c4Subtitle: 'Los Cuatro Sospechosos',
    c4Badge: 'Desafío 4',
    c4Story:
      'Cuatro personas se encontraban en el observatorio. Lee atentamente sus declaraciones. Exactamente UNA de ellas dice la verdad.',
    c4Question: '¿Quién robó la Piedra Lunar?',
    c4StepTitle: 'DEDUCCIÓN LÓGICA PASO A PASO:',
    c4Step1:
      'Paso 1: Mira lo que dice Max: "Luna está diciendo la verdad." Si Luna dijera la verdad, Max también diría la verdad (¡dos personas sinceras, imposible!). Por lo tanto, ¡Luna miente y Max miente!',
    c4Step2:
      'Paso 2: Quedan Orion y Dr. Vega. Dado que el alibi de Orion está verificado, la afirmación de Vega de haber estado en el jardín es la ÚNICA verdadera, ¡situándolo en el lugar del robo!',
    c4CulpritIdentified: 'Sospechoso Principal Identificado:',

    // Page 9: Challenge 5
    c5Title: 'Reto de Geometría',
    c5Subtitle: 'El Patrón Estelar',
    c5Badge: 'Desafío 5',
    c5Story:
      'Una estrella geométrica está grabada en el suelo de la bóveda. Examina la figura para resolver los ángulos ocultos.',
    c5Q1: '1. ¿Cuántos triángulos puedes encontrar en total?',
    c5Q2: '2. ¿Las puntas son ángulos agudos, rectos u obtusos?',
    c5Q2Ans: 'Agudos (36° cada uno < 90°)',
    c5Q3: '3. ¿Qué polígono regular está en el centro de la estrella?',
    c5Q3Ans: 'Pentágono Regular (5 lados)',
    c5ClueTitle: 'DESGLOSE GEOMÉTRICO DEL DETECTIVE:',
    c5ClueText:
      'No cuentes solo las 5 pequeñas puntas triangulares. Hay también 5 triángulos mayores superpuestos formados por las cuerdas internas. 5 + 5 = ¡10 triángulos en total!',

    // Page 10: Challenge 6
    c6Title: 'Reto de Fracciones',
    c6Subtitle: 'Calibración de la Lente',
    c6Badge: 'Desafío 6',
    c6Story:
      '¡El ladrón rompió la lente del telescopio en fracciones! Nova rescató dos fragmentos. Suma las fracciones para saber qué parte está reparada:',
    c6Question: '¿Cuánto es 1/4 + 2/8 en su forma más simple?',
    c6Verify: 'Comprobar Fracción',
    c6ClueTitle: 'CLAVE DEL CILINDRO 3:',
    c6ClueText:
      'El numerador sin simplificar de 2/4 es 2. ¡Este número ajusta el tercer cilindro de la bóveda!',

    // Page 11: Challenge 7
    c7Title: 'Área & Perímetro',
    c7Subtitle: 'El Misterio del Plano',
    c7Badge: 'Desafío 7',
    c7Story:
      'Para desactivar la barrera láser, calcula el Área y el Perímetro a partir del plano arquitectónico:',
    c7AreaFormula: 'Área = Largo × Ancho',
    c7PerimeterFormula: 'Perímetro = 2 × (Largo + Ancho)',
    c7Verify: 'Comprobar Medidas',
    c7ClueTitle: 'CLAVE DEL CILINDRO 4:',
    c7ClueText:
      'El Área es 48 m². Fíjate en la CIFRA DE LAS DECENAS de 48 (el 4). ¡Ese es el cuarto cilindro de la bóveda!',

    // Page 12: Challenge 8
    c8Title: 'Cifrado Secreto',
    c8Subtitle: 'El Código de las Constelaciones',
    c8Badge: 'Desafío 8',
    c8Story:
      'Un mensaje astronómico cifrado fue grabado en el ocular. ¡Multiplica los factores de cada estrella para descifrar la dirección de huida!',
    c8MatrixTitle: '★ Matriz Estelar de Descifrado ★',
    c8Question: '¿Cuál es la frase secreta descodificada (en inglés)?',
    c8Verify: 'Descifrar',
    c8ClueTitle: 'HALLAZGO DEL DETECTIVE:',
    c8ClueText:
      '"LOOK UP" (Mira hacia arriba) guio a Nova y Pip a la claraboya del tejado, ¡donde encontraron un arnés y un cortavidrios!',

    // Page 13: Challenge 9
    c9Title: 'Gráficos & Datos',
    c9Subtitle: 'La Red Eléctrica de Medianoche',
    c9Badge: 'Desafío 9',
    c9Story:
      'Cuando se forzó la bóveda, el generador registró una sobrecarga eléctrica. Analiza el gráfico de barras entre las 23:30 y medianoche:',
    c9Q1: '1. ¿Qué ala registró el mayor consumo de energía?',
    c9Q1Ans: 'La Bóveda (65 kW)',
    c9Q2: '2. ¿Por cuántos kW superó la Bóveda a la Cúpula (40 kW)?',
    c9Q3: '3. Consumo total entre las 5 alas:',
    c9Q3Ans: '15 + 25 + 40 + 20 + 65 = 165 kW',
    c9ClueTitle: 'EVIDENCIA DE LA RED ELÉCTRICA:',
    c9ClueText:
      'La sobretensión de 25 kW en la Bóveda empezó a las 23:42, ¡demostrando el uso de potentes cortadores láser justo antes de la alarma!',

    // Page 14: Challenge 10
    c10Title: 'Jerarquía de Operaciones',
    c10Subtitle: 'El Mecanismo de Engranajes',
    c10Badge: 'Desafío 10',
    c10Story:
      'El cierre de seguridad solo se abre siguiendo la jerarquía matemática (paréntesis, multiplicaciones/divisiones, restas):',
    c10Question: '¿Cuál es el código final del engranaje?',
    c10Verify: 'Desbloquear Engranaje',
    c10ClueTitle: 'CLAVE DEL CILINDRO 5:',
    c10ClueText:
      'El engranaje se abre con el número 68. La CIFRA DE LAS UNIDADES de 68 es 8. ¡Es el quinto y último dígito para abrir la Bóveda!',

    // Page 15: Challenge 11
    c11Title: 'Medición & Forense',
    c11Subtitle: 'El Rastro de Huellas',
    c11Badge: 'Desafío 11',
    c11Story:
      'Nova y Pip recogieron huellas embarradas. ¡Mide la suela en centímetros y compárala con el registro de calzado de los sospechosos!',
    c11RegisterTitle: 'Registro de Calzado de Sospechosos:',
    c11ClueTitle: 'COINCIDENCIA BOTÁNICA:',
    c11ClueText:
      'La suela de 28 cm coincide exactamente con la talla 44 del Dr. Vega. Además, las partículas verdes fluorescentes corresponden al polen de cactus Selenicereus de su invernadero privado.',

    // Page 16: Challenge 12
    c12Title: 'El Gran Reto Final',
    c12Subtitle: 'La Cámara de la Piedra Lunar',
    c12Badge: 'Gran Final',
    c12Story:
      '¡Has llegado a la cámara acorazada! Combina las 5 pistas reunidas para abrir los 5 cilindros y recuperar la Piedra Lunar.',
    c12VaultHeader: '✦ SANTUARIO DE LA BÓVEDA PRINCIPAL STARFALL ✦',
    c12Locked: 'BLOQUEADA',
    c12Unlocked: '¡BÓVEDA ABIERTA! ¡PIEDRA LUNAR RECUPERADA!',
    c12AutoFill: 'Rellenar Pistas Automáticamente & Abrir',

    // Page 17: Solution Reveal
    p17Title: '¡El Misterio ha Sido Resuelto!',
    p17Subtitle: 'Caso Cerrado en Starfall',
    p17CulpritBanner: '¡El culpable fue el Dr. Vega!',
    p17Motive:
      '¡Quería la radiación de la Piedra Lunar para hacer brillar sus orquídeas nocturnas en la oscuridad!',
    p17FivePillarsTitle: 'Los 5 Pilares de la Demostración Matemática:',
    p17Congratulations:
      '"¡Resolviste cada desafío sin fallos! ¡La Piedra Lunar vuelve a brillar con fuerza en lo alto de la cúpula!"',

    // Page 18: Evidence Log
    p18Title: 'El Registro de Evidencias',
    p18Subtitle: 'Resumen del Caso & Cuadrícula de Deducción',
    p18Desc:
      'Examina la matriz final del caso. Los detectives reales guardan constancia de cada cálculo y alibi.',

    // Page 19: Bonus Maze
    p19Title: 'Bonus 1: El Laberinto del Telescopio',
    p19Subtitle: 'Alineación del Haz Óptico',
    p19Desc:
      'Guía el rayo láser desde START hasta FINISH rebotando en los espejos a 90°.',

    // Page 20: Bonus Crossword
    p20Title: 'Bonus 2: Crucigrama Matemático',
    p20Subtitle: 'Vocabulario Astronómico & Matemático',
    p20Desc:
      '¡Pon a prueba tu vocabulario matemático con los términos de la investigación de Nova y Pip!',

    // Pages 21 & 22: Answer Keys
    p21Title: 'Guía de Respuestas (Parte 1)',
    p21Subtitle: 'Explicaciones de los Desafíos 1 a 6',
    p22Title: 'Guía de Respuestas (Parte 2)',
    p22Subtitle: 'Desafíos 7 a 12 & Acertijos Bonus',

    // Page 23: Scratchpad
    p23Title: 'Bloc de Notas del Detective',
    p23Subtitle: 'Cálculos & Anotaciones de Campo',

    // Page 24: Certificate
    p24Title: 'Certificado de Detective',
    p24Subtitle: 'Premio Oficial de la Academia',
    p24Header: 'CERTIFICADO OFICIAL DE LA ACADEMIA DE DETECTIVES',
    p24Hero: '¡BIEN HECHO, DETECTIVE MATEMÁTICO!',
    p24Body:
      'Este documento oficial certifica que el investigador nombrado ha resuelto con éxito los 12 desafíos matemáticos y recuperado la Piedra Lunar del Observatorio Starfall.',
    p24AwardedTo: 'Este Certificado se Otorga a:',
    p24Rank: 'Criptógrafo Matemático Superior',
    p24Case: 'La Piedra Lunar Desaparecida #77',
    p24LeadInvestigator: 'Investigador Principal',
    p24CalcEngine: 'Motor de Cálculo',
    p24IssueDate: 'Fecha de Emisión',
  },
};
