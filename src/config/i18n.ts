export const locales = ["en", "cs"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "en";

// Label shown in the language switcher.
export const langLabels: Record<Lang, string> = { en: "EN", cs: "CZ" };

/** A string translated into every supported language. */
export type Localized = Record<Lang, string>;

/** Replaces every `{ en, cs }` object in T with a plain string. */
export type Resolved<T> = T extends Localized
  ? string
  : T extends readonly (infer U)[]
    ? Resolved<U>[]
    : T extends object
      ? { [K in keyof T]: Resolved<T[K]> }
      : T;

const isLocalized = (value: unknown): value is Localized =>
  typeof value === "object" &&
  value !== null &&
  !Array.isArray(value) &&
  locales.every((l) => typeof (value as Record<string, unknown>)[l] === "string");

export function localize<T>(value: T, lang: Lang): Resolved<T> {
  if (isLocalized(value)) return value[lang] as Resolved<T>;
  if (Array.isArray(value)) return value.map((v) => localize(v, lang)) as Resolved<T>;
  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, localize(v, lang)])
    ) as Resolved<T>;
  }
  return value as Resolved<T>;
}

export const toLang = (value?: string): Lang =>
  (locales as readonly string[]).includes(value ?? "") ? (value as Lang) : defaultLang;

export const langPath = (lang: Lang) => (lang === defaultLang ? "/" : `/${lang}/`);
