import Head from "next/head";
import useTranslation from "../hooks/useTranslation.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Link from "next/link";

const faCar = {
  viewBox: "0 0 512 512",
  path: "M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z",
};
const faUserTie = {
  viewBox: "0 0 448 512",
  path: "M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z",
};
const faPlane = {
  viewBox: "0 0 640 512",
  path: "M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2l137.7 0c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48l-57.4 0c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32l576 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448c-17.7 0-32 14.3-32 32z",
};

export default function Home() {
  const t = useTranslation();

  return (
    <>
      <Head>
        <title>{t.hero.title}</title>
        <meta
          name="description"
          content="VIP taşımacılık hizmetlerimiz hakkında bilgi alın"
        />
      </Head>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-banner">
            <img
              src="/car4.jpeg"
              alt="VIP Transport Banner"
              className="banner-image"
            />
          </div>
          <div className="container hero-content">
            <h1>PARIS</h1>
            <h1>ATABEY VIP</h1>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.subtitle}</p>
            <a href="#contact" className="cta-button">
              {t.hero.cta}
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="container about-content">
            <h2>{t.about.heading}</h2>
            <p>{t.about.text}</p>
          </div>
        </section>

        {/* Services Section */}
        <section className="services" id="services">
          <div className="container">
            <h2>{t.services.heading}</h2>
            <div className="service-grid">
              {t.services.items.map((item, idx) => {
                const icon =
                  idx === 0 ? faCar : idx === 1 ? faUserTie : faPlane;
                return (
                  <Link href={item.route}>
                    <div className="service-card" key={idx}>
                      <div className="icon-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox={icon.viewBox}
                          aria-hidden="true"
                        >
                          <path d={icon.path} fill="currentColor" />
                        </svg>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        main {
          margin-top: 4rem; /* offset for fixed header */
        }

        /* Contact Section */
        .contact {
          padding: var(--spacing-large) 0;
          background-color: #f7f7f7;
          text-align: center;
        }
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
        }
        .contact h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .contact p {
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
        }
        .cta-button {
          display: inline-block;
          background-color: var(--color-primary);
          color: var(--color-secondary);
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          font-weight: 600;
          transition: background-color 0.2s ease;
        }
        .cta-button:hover {
          background-color: #a8852a;
        }

        /* Hero Styles */
        .video {
          position: absolute;
          z-index: -1;
          width: 100vw; /* Ekranı tam kapla */
          height: 100%; /* Yüksekliği tam kapla */
          object-fit: cover; /* Video içeriğini kırpmadan kapla */
        }
        .hero {
          position: relative;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-large) var(--spacing-small);
          overflow: hidden;
          height: 100vh; /* Hero kısmını tam ekran yap */
        }
        .hero-banner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-content {
          max-width: 600px;
          text-align: left;
          position: relative;
          z-index: 1; /* Video altında kalmaması için */
        }
        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .hero p {
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
        }

        /* About Section */
        .about {
          padding: var(--spacing-large) 0;
          background-color: var(--color-background);
          color: var(--color-text);
        }
        .about-content {
          max-width: 800px;
          text-align: left;
        }
        .about h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .about p {
          font-size: 1.125rem;
        }

        /* Services Section */
        .services {
          padding: var(--spacing-large) 0;
          background-color: #f7f7f7;
        }
        .services h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .service-card {
          background-color: #fff;
          border: 1px solid #e5e5e5;
          padding: 1.5rem;
          text-align: center;
          border-radius: 8px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .icon-wrapper {
          width: 50px;
          height: 50px;
          margin: 0 auto 1rem;
          color: var(--color-primary);
        }
        .icon-wrapper svg {
          width: 100%;
          height: 100%;
        }
        .service-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .service-card p {
          font-size: 1rem;
          color: #666;
        }
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            padding-top: 6rem;
          }
          .hero-icon {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
