export type Locale = "en" | "zh";

export type LocalizedText = Record<Locale, string>;

export type Project = {
  id: string;
  title: LocalizedText;
  type: LocalizedText;
  description: LocalizedText;
  cover: string;
  status: LocalizedText;
  href?: string;
  video?: string;
};
