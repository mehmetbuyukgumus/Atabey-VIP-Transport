"use client";
import Image from "next/image";
import Header2 from "../components/Header2";
import useTranslation from "../hooks/useTranslation";
import Head from "next/head";

export default function SoforCV() {
  // Tüm metinler hook'tan
  const M = useTranslation();
  const D = M?.driver || {};
  const S = D?.sections || {};

  // Hero alanı
  const name = D?.hero?.name || "Mehmet Abi";
  const title = D?.hero?.title || "VIP Şoför";
  const years = D?.hero?.years ?? 10;
  const ledeTpl =
    D?.hero?.lede ||
    "{years}+ yıl deneyimli, güvenlik ve mahremiyete önem veren, şehir içi ve şehirlerarası VIP taşımacılıkta uzman profesyonel sürücü.";
  const lede = ledeTpl.replace("{years}", years);
  const ctaCall = D?.hero?.ctaCall || "Hemen Ara";
  const ctaEmail = D?.hero?.ctaEmail || "Rezervasyon E-posta";
  const phoneHref = D?.hero?.phoneHref;
  const emailHref =
    D?.hero?.emailHref ||
    "mailto:rezervasyon@viptransfer.com?subject=VIP%20Transfer";
  const imgAltTpl = D?.hero?.imgAlt || "{name} profil fotoğrafı";
  const imgAlt = imgAltTpl.replace("{name}", name);

  // Bölümler
  const bio = S?.bio || {};
  const skills = S?.skills || {};
  const services = S?.services || {};
  const areas = S?.areas || {};
  const contact = S?.contact || {};

  return (
    <>
      <Head>
        <title>Drivers</title>
      </Head>
      <Header2 />
      <main className="wrap" style={{ marginTop: "4%" }}>
        {/* HERO */}
        <header className="hero" role="banner">
          <div className="photo">
            <Image
              src="/mehmetabi.jpeg"
              alt={imgAlt}
              width={192}
              height={192}
              priority
            />
            <span className="online" aria-hidden />
          </div>

          <div className="headings">
            <h1>{name}</h1>
            <p className="subtitle">{title}</p>
            <p className="lede">{lede}</p>

            <div className="cta">
              <a className="btn primary" href={phoneHref}>
                {ctaCall}
              </a>
              <a className="btn ghost" href={emailHref}>
                {ctaEmail}
              </a>
            </div>
          </div>
        </header>

        {/* KARTLAR */}
        <section className="grid" aria-label={D?.ariaLabel || "Şoför Özgeçmiş"}>
          <article className="card">
            <h2 className="cardTitle">{bio?.title || "Kısa Özgeçmiş"}</h2>
            <p>{bio?.text}</p>
            <ul className="meta">
              {bio?.meta?.license && (
                <li>
                  <strong>{bio?.meta?.labels?.license || "Ehliyet"}:</strong>{" "}
                  {bio?.meta?.license}
                </li>
              )}
              {bio?.meta?.certificates && (
                <li>
                  <strong>
                    {bio?.meta?.labels?.certificates || "Belgeler"}:
                  </strong>{" "}
                  {bio?.meta?.certificates}
                </li>
              )}
              {bio?.meta?.vehicleExp && (
                <li>
                  <strong>
                    {bio?.meta?.labels?.vehicleExp || "Araç deneyimi"}:
                  </strong>{" "}
                  {bio?.meta?.vehicleExp}
                </li>
              )}
            </ul>
          </article>

          <article className="card">
            <h2 className="cardTitle">{skills?.title || "Yetenekler"}</h2>
            <ul className="chips" role="list">
              {(skills?.chips || []).map((s) => (
                <li className="chip" key={s}>
                  {s}
                </li>
              ))}
            </ul>

            <div className="progressList" role="list">
              {(skills?.progress || []).map((p) => (
                <Progress key={p.label} label={p.label} value={p.value} />
              ))}
            </div>
          </article>

          <article className="card">
            <h2 className="cardTitle">{services?.title || "Hizmetler"}</h2>
            <ul className="tags">
              {(services?.list || []).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {services?.hint && <p className="hint">{services.hint}</p>}
          </article>

          <article className="card">
            <h2 className="cardTitle">{areas?.title || "Çalışma Bölgeleri"}</h2>
            <p className="areas">{areas?.text}</p>
            <ul className="badges">
              {(areas?.badges || []).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2 className="cardTitle">{contact?.title || "İletişim"}</h2>
            <ul className="list">
              {contact?.phone && (
                <li>
                  <strong>{contact?.labels?.phone || "Telefon"}:</strong>{" "}
                  <a href={contact?.phoneHref || phoneHref}>
                    {contact.phoneDisplay || contact.phone}
                  </a>
                </li>
              )}
              {contact?.email && (
                <li>
                  <strong>{contact?.labels?.email || "E-posta"}:</strong>{" "}
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              )}
              {contact?.whatsappHref && (
                <li>
                  <strong>
                    {contact?.labels?.whatsapp || "WhatsApp"}:
                  </strong>{" "}
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contact.whatsappText || "Hızlı mesaj"}
                  </a>
                </li>
              )}
            </ul>
          </article>
        </section>

        {/* STYLED-JSX — (mevcut stillerin aynen bırakıldı) */}
        <style jsx>{`
          /* ... mevcut CSS'in tamamını birebir korudum ... */
          *, *::before, *::after { box-sizing: border-box; }
          html, body, #__next { height: 100%; }
          body { margin: 0; }

          :root {
            --bg: #0b0d10;
            --bg-soft: #0e141b;
            --card: #121821;
            --muted: #0e141b;
            --text: #0e141b;
            --accent: #67e8f9;
            --accent-2: #6ee7b7;
            --line: #1e2630;
          }

          .wrap {
            min-height: 100dvh;
            background:
              radial-gradient(1000px 500px at 10% -10%, #0f1724 0%, transparent 60%),
              var(--bg);
            color: var(--text);
            padding: 24px;
            display: grid;
            gap: 28px;
          }
          .hero {
            max-width: 1100px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 24px;
            align-items: center;
          }
          .photo { position: relative; width: 180px; height: 180px; border-radius: 20px; overflow: hidden; border: 1px solid var(--line); box-shadow: 0 10px 40px rgba(0,0,0,.35); }
          .photo :global(img) { width: 100%; height: 100%; object-fit: cover; display: block; }
          .online { position: absolute; right: 8px; bottom: 8px; width: 14px; height: 14px; border-radius: 50%; background: var(--accent-2); border: 3px solid rgba(0,0,0,.6); box-shadow: 0 0 0 6px rgba(110,231,183,.15); }

          .headings h1 { margin: 0 0 6px; font-size: clamp(26px, 3.2vw, 38px); letter-spacing: .2px; }
          .subtitle { margin: 0 0 14px; color: var(--muted); font-weight: 500; }
          .lede { margin: 0 0 16px; line-height: 1.6; max-width: 70ch; color: black; }

          .cta { display: flex; gap: 12px; flex-wrap: wrap; }
          .btn { display: inline-flex; align-items: center; gap: 10px; padding: 12px 16px; border-radius: 12px; border: 1px solid var(--line); font-weight: 600; text-decoration: none; transition: transform .05s ease, background .2s ease, opacity .2s ease; will-change: transform; }
          .btn:hover { transform: translateY(-1px); }
          .primary { background: linear-gradient(90deg, var(--accent), var(--accent-2)); color: #0b0d10; border: none; }
          .ghost { background: rgba(255,255,255,.02); color: var(--text); }

          .grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px; }
          .card { background: linear-gradient(180deg, var(--card), var(--bg-soft)); border: 1px solid var(--line); padding: 18px 18px 16px; border-radius: 16px; grid-column: span 6; box-shadow: 0 10px 30px rgba(0,0,0,.25); }
          .card:nth-child(1) { grid-column: span 7; }
          .card:nth-child(2) { grid-column: span 5; }

          .cardTitle { margin: 2px 0 12px; font-size: 18px; letter-spacing: .2px; }
          .meta { margin: 12px 0 0; display: grid; gap: 6px; color: #0e141b; padding-left: 18px; }

          .chips { display: flex; gap: 8px; flex-wrap: wrap; margin: 8px 0 12px; padding: 0; list-style: none; }
          .chip { padding: 8px 10px; border-radius: 999px; border: 1px solid var(--line); background: rgba(255,255,255,.03); font-size: 13px; }

          .progressList { display: grid; gap: 10px; margin-top: 6px; }

          .tags { display: flex; gap: 8px; flex-wrap: wrap; padding: 0; list-style: none; margin: 4px 0 10px; }
          .tags li { padding: 8px 12px; border-radius: 10px; border: 1px dashed var(--line); font-size: 13px; background: rgba(255,255,255,.02); }

          .hint { margin: 8px 0 0; color: var(--muted); font-size: 13px; }
          .areas { margin: 0 0 12px; color: #0e141b; }

          .badges { display: flex; gap: 8px; list-style: none; padding: 0; margin: 0; }
          .badges li { border: 1px solid var(--line); padding: 6px 10px; border-radius: 8px; font-size: 12px; background: rgba(103,232,249,.06); }

          .list { display: grid; gap: 8px; margin: 6px 0 0; padding-left: 18px; }

          .footer { max-width: 1100px; margin: 4px auto 0; padding: 12px 4px 20px; color: var(--muted); border-top: 1px solid var(--line); text-align: center; }

          @media (max-width: 920px) {
            .hero { grid-template-columns: 1fr; text-align: center; gap: 16px; }
            .photo { margin: 0 auto; }
            .grid { grid-template-columns: 1fr; }
            .card, .card:nth-child(1), .card:nth-child(2) { grid-column: auto; }
            .cta { justify-content: center; }
          }
        `}</style>
      </main>
    </>
  );
}

/** Progress bar — kendi scoped stiliyle */
function Progress({ label, value }) {
  return (
    <div className="progItem" aria-label={`${label} ${value}%`}>
      <div className="progTop">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="bar">
        <i style={{ width: `${value}%` }} />
      </div>

      <style jsx>{`
        .progTop {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #0e141b;
          margin-bottom: 6px;
        }
        .bar {
          height: 8px;
          border-radius: 999px;
          border: 1px solid #1e2630;
          background: rgba(255, 255, 255, 0.03);
          overflow: hidden;
        }
        .bar i {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, #67e8f9, #6ee7b7);
        }
      `}</style>
    </div>
  );
}
