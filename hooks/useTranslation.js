import { useRouter } from 'next/router';
import tr from '../locales/tr.js';
import en from '../locales/en.js';
import fr from '../locales/fr.js';

// This custom hook returns translation strings for the active locale. The
// locale is derived from Next.js's router. If an unsupported locale is
// requested, Turkish is used as a fallback. See
// https://nextjs.org/docs/advanced-features/i18n-routing for locale details.
export default function useTranslation() {
  const { locale } = useRouter();
  const messages = { tr, en, fr };
  // Default to 'tr' if locale is undefined or not in our messages object.
  const current = messages[locale] ?? messages.tr;
  return current;
}