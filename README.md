# 🔎 The Secret Math Detective

### The Vanishing Moonstone

**A math mystery adventure for curious minds aged 8–12.**

Explore Starfall Observatory, investigate suspects, and solve mathematical clues to uncover the mystery of the missing Moonstone. This interactive web workbook combines illustrated storytelling with hands-on problem solving and printable activities.

**[▶ Open the live app](https://the-secret-math-detective.ai.studio/)** · **[Browse the source](https://github.com/msg4u/The-Secret-Math-Detective)**

## ✨ Features

- **24 illustrated pages** with a complete detective story, challenges, and supporting activities.
- **12 math challenges** covering number patterns, time, coordinates, logic, geometry, fractions, area and perimeter, multiplication ciphers, graphs, order of operations, measurement, and a final vault puzzle.
- **Interactive answers and progress tracking** to follow the investigation.
- **Three viewing modes:** single page, two-page spread, and a gallery of all pages.
- **Five language options:** English, Romanian, German, French, and Spanish. English is selected by default.
- **Personalized detective name** on the cover and completion certificate.
- **Full-color and Eco B&W modes**, plus optional crop marks.
- **Print one page or the complete workbook**, with browser-based Save as PDF.
- **Bonus activities, answer keys, an evidence log, and a scratchpad.**

Suitable for family activities, independent practice, and guided classroom or homeschool sessions.

## 📖 Inside the workbook

| Pages | Contents |
| --- | --- |
| 1–4 | Cover, case briefing, suspect dossier, and observatory map |
| 5–16 | Twelve mathematical investigation challenges |
| 17–18 | Mystery reveal and detective evidence log |
| 19–20 | Telescope maze and detective crossword |
| 21–22 | Answer keys and explanations |
| 23 | Detective’s scratchpad |
| 24 | Personalized detective certificate |

## 🚀 Getting started

### Use online

1. Visit the [live app](https://the-secret-math-detective.ai.studio/).
2. Choose a language and enter your detective name on the cover.
3. Read the briefing, examine the suspects, and work through the challenges.
4. Follow your progress and complete the final vault puzzle.
5. Print your workbook or completion certificate if desired.

Progress and entered answers are currently held in application memory. Refreshing or closing the page resets the session.

### Run locally

Install a recent Node.js LTS release compatible with Vite 8, such as Node.js 22.12+ or Node.js 24, and npm.

```bash
git clone https://github.com/msg4u/The-Secret-Math-Detective.git
cd The-Secret-Math-Detective
npm install
npm run dev
```

Open **http://localhost:3000**.

The current workbook runs in the browser and does not call Gemini APIs. Although the project includes an AI Studio environment template and the Google Gen AI SDK dependency, no Gemini API key is needed for the existing workbook features.

## 🖨️ Printing and PDF export

1. Select the language, detective name, and color or Eco B&W mode.
2. Choose **Print Page** for the current page or **Export 24-Page PDF** for the full workbook.
3. In the browser print dialog, select a printer or **Save as PDF**.
4. Use **US Letter (8.5 × 11 inches)** and portrait orientation to match the workbook layout.
5. Disable browser headers and footers. For color output, enable background graphics if required by your browser.
6. Review the preview before saving or printing; browser settings can affect pagination and colors.

PDF export uses the browser’s print engine rather than a separate PDF generation service. The complete workbook includes the answer keys and story reveal; use page selection in the print dialog when preparing learner-only copies.

## 🛠️ Technology

| Area | Tools |
| --- | --- |
| UI | React 19 and TypeScript |
| Development and build | Vite 8 |
| Styling | Tailwind CSS 4 and custom print styles |
| Icons | Lucide React |
| Illustrations | React-based SVG components and bundled assets |
| Localization | In-repository translation dictionaries |
| Printing | Browser print API and CSS print layouts |

## 📁 Project structure

```text
src/
├── App.tsx                        # Application entry component
├── main.tsx                       # React bootstrap
├── index.css                      # Global styles and print layout
├── components/
│   ├── WorkbookViewer.tsx         # Navigation, session state, and printing
│   ├── InteractiveClueTracker.tsx # Investigation progress
│   ├── PageContainer.tsx          # Shared workbook page layout
│   ├── illustrations/            # Character and suspect illustrations
│   └── pages/                    # Story, puzzles, solutions, and certificate
├── data/
│   └── workbookData.ts            # Page definitions and challenge data
├── i18n/
│   └── translations.ts            # English, Romanian, German, French, Spanish
└── types/
    └── workbook.ts                # Shared TypeScript types
public/
└── assets/                        # Bundled static assets
```

## ⚙️ Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server on port 3000 |
| `npm run build` | Generate a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript checking with `tsc --noEmit` |
| `npm run clean` | Remove `dist/` and `server.js` using a Unix-style command |

To preview a production build:

```bash
npm run build
npm run preview
```

The frontend build can be served by a static hosting provider. The current public version is hosted at [the-secret-math-detective.ai.studio](https://the-secret-math-detective.ai.studio/).

## 🤝 Contributing

Suggestions, bug reports, translation improvements, and educational feedback are welcome through [GitHub Issues](https://github.com/msg4u/The-Secret-Math-Detective/issues).

When proposing changes, check challenge answers, language consistency, responsive layouts, and print previews. Run `npm run lint` and `npm run build` before submitting a pull request.

## 📄 License

This repository currently has no top-level `LICENSE` file. Some source files contain Apache-2.0 notices; preserve those notices. Consult the repository owner before reusing or redistributing the complete workbook, illustrations, or other content. This README does not grant an additional license.

---

Created by [Raul Portan · msg4u](https://github.com/msg4u).

**Follow the clues. Solve the math. Crack the case.**
