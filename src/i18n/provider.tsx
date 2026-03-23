"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Locale, defaultLocale, isRtl } from "./config";

import en from "./translations/en.json";
import fr from "./translations/fr.json";
import ha from "./translations/ha.json";
import ar from "./translations/ar.json";

const translations: Record<Locale, typeof en> = { en, fr, ha, ar };

type TranslationKey = string;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = isRtl(newLocale) ? "rtl" : "ltr";
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return getNestedValue(
        translations[locale] as unknown as Record<string, unknown>,
        key
      );
    },
    [locale]
  );

  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
