import Link from 'next/link';
import useTranslation from '../hooks/useTranslation.js';
import LanguageSwitcher from './LanguageSwitcher.js';


export default function Header() {
  const t = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            Atabey Transport
          </Link>
        </div>
        <nav className="nav">
          <a href="#about">{t.nav.about}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <LanguageSwitcher />
      </div>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.9);
          border-bottom: 1px solid #e5e5e5;
          z-index: 1000;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo a {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-primary);
          text-decoration: none;
        }
        .nav {
          display: flex;
          gap: 1rem;
        }
        .nav a {
          color: var(--color-text);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .nav a:hover {
          color: var(--color-primary);
        }
        @media (max-width: 768px) {
          .nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}