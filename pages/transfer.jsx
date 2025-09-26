// pages/transfer-hizmetleri.jsx
import Head from "next/head";
import Header2 from "../components/Header2";
import useTranslation from "../hooks/useTranslation"; // senin hook

export default function TransferHizmetleriPage() {
  // Tüm metinler hook'tan
  const M = useTranslation();

  // Mevcut JSON yapısı: M.transfers.trtansfer[0]
  // (evet 'trtansfer' typo ama JSON'u değiştirmiyoruz)
  const T = M?.transfers?.trtansfer?.[0] || {};

  // Site adı: önce sözlükten, yoksa fallback
  const siteName = T?.siteName || M?.siteName || "Atabey VIP";

  // Kartlar tamamen sözlükten —> transfers
  const transfers = Array.isArray(T?.services?.items) ? T.services.items : [];

  // JSON-LD de sözlükten
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: T?.schema?.serviceName || "VIP Transfer Hizmetleri",
    provider: {
      "@type": "LocalBusiness",
      name: siteName,
      areaServed: T?.schema?.providerAreaServed || "Paris, Île-de-France",
    },
    serviceType:
      T?.schema?.serviceType || "Airport Transfer, City Transfer, Private Driver",
    areaServed:
      T?.schema?.areaServed || [
        "Paris",
        "Charles de Gaulle Airport (CDG)",
        "Orly Airport (ORY)",
        "Disneyland Paris",
      ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: T?.schema?.catalogName || "Transfer Hizmetleri",
      itemListElement: transfers.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s?.title || "",
          description: s?.desc || "",
        },
      })),
    },
  };

  return (
    <>
      <Head>
        <title>
          {(T?.meta?.title || "Transfer Hizmetlerimiz | {site}").replace(
            "{site}",
            siteName
          )}
        </title>
        <meta
          name="description"
          content={
            T?.meta?.description ||
            "CDG/Orly havaalanı transferi, Disneyland transferi, şehir içi saatlik şoförlü araç ve talebe özel VIP transfer hizmetleri. Sabit fiyat, bekleme dahil."
          }
        />
        <meta name="robots" content={T?.meta?.robots || "index,follow"} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header2 />

      <main style={{ marginTop: "4%" }}>
        {/* Hero */}
        <section className="hero">
          <div className="container hero-inner">
            <span className="eyebrow">{T?.hero?.eyebrow || ""}</span>
            <h1>{T?.hero?.title || ""}</h1>
            <p className="lead">{T?.hero?.lead || ""}</p>
            <div className="hero-cta">
              <a href="https://wa.me/33652906443" className="btn btn-primary">
                {T?.hero?.ctaPrimary || ""}
              </a>
              <a href="#hizmetler" className="btn btn-ghost">
                {T?.hero?.ctaSecondary || ""}
              </a>
            </div>
          </div>
        </section>

        {/* Transfers (Services) */}
        <section id="hizmetler" className="section">
          <div className="container">
            <h2>{T?.services?.heading || ""}</h2>
            <div className="grid">
              {transfers.map((s) => (
                <article className="card" key={s?.key || `k-${Math.random()}`}>
                  <div className="card-body">
                    <h3>{s?.title || ""}</h3>
                    <p>{s?.desc || ""}</p>
                    <ul className="bullets">
                      {(s?.bullets || []).map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <p className="sample">{s?.sample || ""}</p>
                    <a
                      href="https://wa.me/33652906443"
                      className="btn btn-secondary"
                    >
                      {T?.services?.whatsappCta || "İletişime Geç"}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Styles */}
      <style jsx>{`
        :root {
          --bg: #0f1115;
          --panel: #151923;
          --muted: #8b90a3;
          --text: #e7e9f3;
          --brand: #4f7cff;
          --brand-2: #7aa2ff;
          --accent: #111729;
          --card: #0f1422;
          --ring: rgba(79, 124, 255, 0.35);
          --border: #23283a;
        }
        * {
          box-sizing: border-box;
        }
        body {
          background: var(--bg);
          color: var(--text);
          margin: 0;
        }
        main {
          display: block;
        }
        .container {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* HERO / Banner */
        .hero {
          background: radial-gradient(1200px 600px at 10% 10%, #19213a, transparent),
            radial-gradient(1000px 600px at 90% 0%, #0e1530, transparent),
            linear-gradient(180deg, #0f1115, #0c0f17);
          padding: 80px 0 64px;
          border-bottom: 1px solid var(--border);

          /* >>> KONTRASTLI METİN RENKLERİ <<< */
          color: #f2f6ff;
        }
        .hero-inner {
          text-align: center;
        }
        .hero .eyebrow {
          color: #c6d4ff; /* lacivertte daha okunaklı */
        }
        .hero h1 {
          color: #ffffff;          /* tam beyaz başlık */
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
          font-size: 42px;
          margin: 10px 0 10px;
          line-height: 1.15;
        }
        .hero .lead {
          color: #dfe7ff;          /* açık mavi-gri metin */
          max-width: 760px;
          margin: 0 auto 24px;
          font-size: 18px;
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
        }
        .hero-cta {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .section {
          padding: 56px 0;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 20px;
        }
        .card {
          grid-column: span 12;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
        }
        @media (min-width: 820px) {
          .card {
            grid-column: span 6;
          }
        }
        .card-body {
          padding: 22px 22px 24px;
        }
        h2 {
          font-size: 28px;
          margin: 0 0 20px;
        }
        h3 {
          font-size: 20px;
          margin: 0 0 8px;
        }
        .bullets {
          list-style: none;
          padding: 0;
          margin: 12px 0;
        }
        .bullets li {
          margin: 6px 0;
          position: relative;
          padding-left: 20px;
        }
        .bullets li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--brand-2);
        }
        .sample {
          color: #8b90a3;
          font-size: 14px;
          margin: 8px 0 14px;
        }

        /* --- Buttons (genel) --- */
        a.btn,
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 12px;
          border: 1px solid transparent;
          text-decoration: none !important;
          font-weight: 600;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
        }

        /* Primary (Hero'da öne çıkan CTA) */
        a.btn.btn-primary,
        .btn.btn-primary {
          background: var(--brand);
          color: #ffffff !important;
          border-color: #3f6bff;
          box-shadow: 0 0 0 0 transparent;
        }
        a.btn.btn-primary:hover,
        .btn.btn-primary:hover {
          background: #3f6bff;
          border-color: #365fe6;
        }
        a.btn.btn-primary:focus-visible,
        .btn.btn-primary:focus-visible {
          outline: none;
          box-shadow: 0 0 0 4px var(--ring);
        }

        /* Ghost (şeffaf, koyu zemin üzerinde açık renk metin) */
        a.btn.btn-ghost,
        .btn.btn-ghost {
          background: transparent;
          color: #f2f6ff !important;
          border-color: rgba(255, 255, 255, 0.28);
        }
        a.btn.btn-ghost:hover,
        .btn.btn-ghost:hover {
          border-color: rgba(255, 255, 255, 0.45);
          background: rgba(255, 255, 255, 0.06);
        }
        a.btn.btn-ghost:focus-visible,
        .btn.btn-ghost:focus-visible {
          outline: none;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.18);
        }

        /* Secondary (WhatsApp "İletişime Geç") */
        a.btn.btn-secondary,
        .btn.btn-secondary {
          background: #19213a;
          color: #e7e9f3 !important;
          border-color: var(--border);
          box-shadow: none;
        }
        a.btn.btn-secondary:hover,
        .btn.btn-secondary:hover {
          background: #202a49;
          border-color: #2b3350;
        }
        a.btn.btn-secondary:focus-visible,
        .btn.btn-secondary:focus-visible {
          outline: none;
          border-color: var(--brand);
          box-shadow: 0 0 0 4px var(--ring);
        }
        a.btn.btn-secondary:active,
        .btn.btn-secondary:active {
          transform: translateY(1px);
        }

        /* Global "a" rengi varsa ezelim */
        a.btn:link,
        a.btn:visited {
          color: inherit;
        }
      `}</style>
    </>
  );
}
