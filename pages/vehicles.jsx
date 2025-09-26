"use client";
import { useState, useEffect, useCallback } from "react";
import Header2 from "../components/Header2";
import Image from "next/image";
import useTranslation from "../hooks/useTranslation";

const CAR = {
  brand: "Mercedes",
  model: "Mercedes-Benz VIP",
  description: "Mercedes classe, V 220 cdi 2021 model",
  images: [
    { src: "/car3.jpeg", w: 1600, h: 1000, alt: "Mercedes — Ön üç çeyrek" },
    { src: "/car4.jpeg", w: 1600, h: 1000, alt: "Mercedes — Ön üç çeyrek" },
    { src: "/car5.jpeg", w: 1600, h: 1000, alt: "Mercedes — Ön üç çeyrek" },
    { src: "/car6.jpeg", w: 1600, h: 1000, alt: "Mercedes — Ön üç çeyrek" },
    { src: "/car7.jpeg", w: 1600, h: 1000, alt: "Mercedes — Ön üç çeyrek" },
  ],
  images_mercedes_s: [
    { src: "/mercedes_s.jpeg", w: 1600, h: 1000, alt: "BMW — Ön üç çeyrek" },
  ],
  images_bmw: [
    { src: "/bmw_photo.jpeg", w: 1600, h: 1000, alt: "BMW — Ön üç çeyrek" },
  ],
  images_range: [
    { src: "/range_photo.jpeg", w: 1600, h: 1000, alt: "Range Rover — Ön üç çeyrek" },
  ],
};

// Galeri koleksiyonları ve tema ayarları
const GALLERIES = {
  mercedes: CAR.images,
  bmw: CAR.images_bmw,
  range: CAR.images_range,
  mercedes: CAR.images_mercedes_s,
};

const THEMES = {
  mercedes: { badge: "Mercedes", accent: "#00A1FF", overlay: "rgba(0,0,0,.82)" },
  bmw: { badge: "BMW", accent: "#1C69D4", overlay: "rgba(4,12,24,.86)" },
  range: { badge: "Range Rover", accent: "#2E8B57", overlay: "rgba(5,12,8,.86)" },
};

function Vehicles() {
    const [open, setOpen] = useState(null);
    const M = useTranslation();    
  // (Opsiyonel) ESC/ok tuşları ile kontrol
  const onKeyDown = useCallback(
    (e) => {
      if (!open) return;
      const list = GALLERIES[open.gallery];
      if (!list?.length) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") {
        setOpen({ gallery: open.gallery, idx: (open.idx + 1) % list.length });
      }
      if (e.key === "ArrowLeft") {
        setOpen({
          gallery: open.gallery,
          idx: (open.idx + list.length - 1) % list.length,
        });
      }
    },
    [open]
  );

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [open, onKeyDown]);

  const handleOpen = (gallery, idx) => setOpen({ gallery, idx });

  const currentList = open ? GALLERIES[open.gallery] : null;
  const theme = open ? THEMES[open.gallery] : null;

  return (
    <>
      <Header2 />
      <div style={{ marginTop: "6%" }}>
        <main className="wrap">
          {/* Mercedes */}
          <header className="header">
            <div className="title">
              <span className="brand">Mercedes</span>
              <h1 className="model">Mercedes-Benz VIP</h1>
            </div>
            <p className="desc">{CAR.description}</p>
          </header>

          <section className="grid">
            {CAR.images.map((img, i) => (
              <button
                key={`mercedes-${i}`}
                className="thumb"
                onClick={() => handleOpen("mercedes", i)}
                aria-label={`${img.alt ?? "görsel"} büyüt`}
              >
                <div className="thumbInner">
                  <Image
                    src={img.src}
                    alt={img.alt ?? "Araç görseli"}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="img"
                    priority={i < 2}
                  />
                </div>
              </button>
            ))}
          </section>

          {/* Mercedes */}
          <header className="header" style={{ marginTop: "4%" }}>
            <div className="title">
              <span className="brand">Mercedes</span>
              <h1 className="model">Mercedes</h1>
            </div>
            <p className="desc">Mercedes Classe A</p>
          </header>

          <section className="grid">
            {CAR.images_mercedes_s.map((img, i) => (
              <button
                key={`bmw-${i}`}
                className="thumb"
                onClick={() => handleOpen("bmw", i)}
                aria-label={`${img.alt ?? "görsel"} büyüt`}
              >
                <div className="thumbInner">
                  <Image
                    src={img.src}
                    alt={img.alt ?? "Araç görseli"}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="img"
                  />
                </div>
              </button>
            ))}
          </section>
          {/* BMW */}
          <header className="header" style={{ marginTop: "4%" }}>
            <div className="title">
              <span className="brand">BMW</span>
              <h1 className="model">BMW</h1>
            </div>
            <p className="desc">BMW Seri 7 2025</p>
          </header>

          <section className="grid">
            {CAR.images_bmw.map((img, i) => (
              <button
                key={`bmw-${i}`}
                className="thumb"
                onClick={() => handleOpen("bmw", i)}
                aria-label={`${img.alt ?? "görsel"} büyüt`}
              >
                <div className="thumbInner">
                  <Image
                    src={img.src}
                    alt={img.alt ?? "Araç görseli"}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="img"
                  />
                </div>
              </button>
            ))}
          </section>

          {/* Range Rover */}
          <header className="header" style={{ marginTop: "4%" }}>
            <div className="title">
              <span className="brand">Range Rover</span>
              <h1 className="model">Range Rover</h1>
            </div>
            <p className="desc">Vogue 2025</p>
          </header>

          <section className="grid">
            {CAR.images_range.map((img, i) => (
              <button
                key={`range-${i}`}
                className="thumb"
                onClick={() => handleOpen("range", i)}
                aria-label={`${img.alt ?? "görsel"} büyüt`}
              >
                <div className="thumbInner">
                  <Image
                    src={img.src}
                    alt={img.alt ?? "Araç görseli"}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="img"
                  />
                </div>
              </button>
            ))}
          </section>

          {/* Lightbox — galeriye göre özelleştirilmiş */}
          {open && currentList && (
            <div
              className="lightbox"
              onClick={() => setOpen(null)}
              role="dialog"
              aria-modal="true"
              // Tema değişkenlerini buradan besliyoruz
              style={{
                // CSS değişkenleri (styled-jsx içinde kullanıyoruz)
                "--overlay": theme?.overlay,
                "--accent": theme?.accent,
              }}
            >
              <div
                className="lightboxInner"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="lbTop">
                  <span className="lbBrand">{theme?.badge}</span>
                  <span className="lbCount">
                    {open.idx + 1}/{currentList.length}
                  </span>
                </div>

                <div className="lightboxImgWrap">
                  <Image
                    src={currentList[open.idx].src}
                    alt={currentList[open.idx].alt ?? "Büyük görsel"}
                    fill
                    sizes="100vw"
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <button
                  className="close"
                  onClick={() => setOpen(null)}
                  aria-label="Kapat"
                  title="Kapat (Esc)"
                >
                  ✕
                </button>
                <button
                  className="nav left"
                  onClick={() =>
                    setOpen({
                      gallery: open.gallery,
                      idx:
                        (open.idx + currentList.length - 1) %
                        currentList.length,
                    })
                  }
                  aria-label="Önceki"
                  title="Önceki (←)"
                >
                  ‹
                </button>
                <button
                  className="nav right"
                  onClick={() =>
                    setOpen({
                      gallery: open.gallery,
                      idx: (open.idx + 1) % currentList.length,
                    })
                  }
                  aria-label="Sonraki"
                  title="Sonraki (→)"
                >
                  ›
                </button>
              </div>
            </div>
          )}

          <style jsx>{`
            .wrap {
              max-width: 1120px;
              margin: 0 auto;
              padding: 24px 16px 48px;
            }
            .header {
              display: grid;
              gap: 12px;
              margin-bottom: 20px;
            }
            .title {
              display: flex;
              align-items: baseline;
              gap: 10px;
              flex-wrap: wrap;
            }
            .brand {
              background: #111;
              color: #fff;
              border-radius: 999px;
              padding: 6px 10px;
              font-size: 12px;
              letter-spacing: 0.04em;
            }
            .model {
              font-size: clamp(24px, 3.4vw, 36px);
              line-height: 1.1;
              margin: 0;
            }
            .desc {
              color: #5f6368;
              max-width: 60ch;
            }

            /* Galeri grid – mobilde 2, md 3, lg 4 kolon */
            .grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
            }
            @media (min-width: 640px) {
              .grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 14px;
              }
            }
            @media (min-width: 1024px) {
              .grid {
                grid-template-columns: repeat(4, 1fr);
                gap: 16px;
              }
            }

            .thumb {
              border: 0;
              padding: 0;
              background: none;
              cursor: pointer;
            }
            .thumbInner {
              position: relative;
              width: 100%;
              aspect-ratio: 4 / 3;
              overflow: hidden;
              border-radius: 12px;
              background: #e7e7e7;
            }
            .img {
              object-fit: cover;
              transition: transform 0.28s ease;
            }
            .thumb:hover .img {
              transform: scale(1.04);
            }

            /* Lightbox (markaya göre özelleştirilebilir) */
            .lightbox {
              position: fixed;
              inset: 0;
              background: var(--overlay, rgba(0, 0, 0, 0.82));
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 16px;
              backdrop-filter: blur(2px);
              z-index: 100000; /* navbar'dan yüksek => en üstte */
            }
            .lightboxInner {
              position: relative;
              width: min(96vw, 1200px);
              height: 100dvh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .lbTop {
              position: absolute;
              top: 8px;
              left: 12px;
              right: 12px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 12px;
              pointer-events: none; /* tıklamalar görsele geçsin */
            }
            .lbBrand {
              pointer-events: auto;
              background: var(--accent, #fff);
              color: #fff;
              mix-blend-mode: normal;
              border-radius: 999px;
              padding: 6px 10px;
              font-size: 12px;
              letter-spacing: 0.04em;
            }
            .lbCount {
              pointer-events: auto;
              background: rgba(255, 255, 255, 0.9);
              color: #111;
              border-radius: 999px;
              padding: 4px 8px;
              font-size: 12px;
            }

            .lightboxImgWrap {
              position: relative;
              width: 100%;
              height: 80vh;
              border-radius: 12px;
              overflow: hidden;
              background: #000;
            }
            @media (max-width: 640px) {
              .lightboxImgWrap {
                height: 70vh;
              }
            }

            .close,
            .nav {
              background: rgba(255, 255, 255, 0.95);
              border: 2px solid var(--accent, transparent);
              border-radius: 999px;
              cursor: pointer;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
            }
            .close {
              position: absolute;
              top: 12px;
              right: 12px;
              padding: 6px 10px;
              font-size: 14px;
            }
            .nav {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              padding: 6px 12px;
              font-size: 18px;
              line-height: 1;
              user-select: none;
            }
            .nav.left {
              left: 8px;
            }
            .nav.right {
              right: 8px;
            }
          `}</style>
        </main>
      </div>
    </>
  );
}

export default Vehicles;
