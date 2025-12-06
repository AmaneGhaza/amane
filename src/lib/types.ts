import type { i18n } from '@/app/i18n-config';
import type ar from '@/dictionaries/ar.json';

export type Dictionary = typeof ar;
export type Locale = (typeof i18n)['locales'][number];
