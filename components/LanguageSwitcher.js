import { useRouter } from 'next/router';
import Link from 'next/link';

/**
 * Renders a simple list of locale links so the user can switch
 * between available languages. Only locales defined in
 * next.config.js are shown. The current locale is not displayed
 * as a link. When clicked, the locale links will navigate to
 * the same path in the selected language.
 */
export default function LanguageSwitcher() {
  const router = useRouter();
  const { locales, locale: currentLocale, asPath } = router;

  return (
    <div className="language-switcher">
      {locales
        .filter((l) => l !== currentLocale)
        .map((l) => (
          <Link key={l} href={asPath} locale={l} className="lang-link">
            {l.toUpperCase()}
          </Link>
        ))}
      <style jsx>{`
        .language-switcher {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .lang-link {
          text-transform: uppercase;
          color: var(--color-primary);
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        .lang-link:hover {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}