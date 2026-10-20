export type Language = 'en' | 'ro' | 'de' | 'fr' | 'es';

export interface PageDefinition {
  pageNumber: number;
  title: string;
  category: 'cover' | 'story' | 'challenge' | 'evidence' | 'bonus' | 'answers' | 'certificate' | 'notes';
  subtitle?: string;
  shortDesc: string;
}

export interface Suspect {
  id: string;
  name: string;
  role: string;
  quote: string;
  statement: string;
  avatarColor: string;
  isGuilty: boolean;
  alibiAnalysis: string;
}

export interface WorkbookAnswers {
  [challengeId: string]: any;
}

export interface PrintSettings {
  language: Language;
  mode: 'color' | 'eco'; // color or ink-saving black & white lineart
  showCropMarks: boolean;
  detectiveName: string;
  solvedStatus: Record<number, boolean>;
}

