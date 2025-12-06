// src/app/i18n-config.ts

export const i18n = {
  defaultLocale: 'ar', // Changed from 'en' to 'ar'
  locales: ['ar', 'en', 'fr'], // Arabic first in the list
} as const;

export type Locale = (typeof i18n)['locales'][number];