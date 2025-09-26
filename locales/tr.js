export default {
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    contact: "İletişim",
  },
  hero: {
    title: "Konforlu ve Güvenli Taşımacılık",
    subtitle:
      "Şehir içi veya şehir dışı seyahatleriniz için lüks taşıma hizmetleri sunuyoruz.",
    cta: "Bize Ulaşın",
  },
  about: {
    heading: "Hakkımızda",
    text: "Yılların deneyimiyle misafirlerimize güvenli, konforlu ve premium taşımacılık hizmeti sunuyoruz. Profesyonel ekibimiz ve modern araç filomuzla her yolculuğu özel kılıyoruz.",
  },
  services: {
    heading: "Hizmetlerimiz",
    items: [
      {
        title: "Lüks Araç Filosumuz",
        description:
          "En yeni model limuzin, sedan ve minibüslerimizle yüksek standartta seyahat deneyimi sunuyoruz.",
        route: "vehicles",
      },
      {
        title: "Profesyonel Sürücüler",
        description:
          "Sürücülerimiz yılların deneyimine sahip, güler yüzlü ve güvenlidir. Siz sadece yolculuğun keyfini çıkarın.",
        route: "driver",
      },
      {
        title: "Transfer",
        description:
          "Uçuş saatlerinize göre planlanan havalimanı karşılama ve uğurlama hizmetlerimizle zamanında varış garantisi.",
        route: "transfer",
      },
    ],
  },
  contact: {
    heading: "İletişim",
    phoneLabel: "Telefon",
    whatsappLabel: "Whatsapp",
    emailLabel: "E‑posta",
    addressLabel: "Adres",
    phone: "+33 6 52 90 64 43",
    whatsapp: "+33 6 52 90 64 43",
    email: "atabeyvipparis@gmail.com",
    address: "Paris, Fransa",
  },
  footer: {
    rights: "Tüm hakları saklıdır.",
  },
  transfers: {
    trtansfer: [
      {
        siteName: "Atabey VIP",

        meta: {
          title: "Transfer Hizmetlerimiz | {site}",
          description:
            "CDG/Orly havaalanı transferi, Disneyland transferi, şehir içi saatlik şoförlü araç ve talebe özel VIP transfer hizmetleri. Sabit fiyat, bekleme dahil.",
          robots: "index,follow",
        },

        schema: {
          serviceName: "VIP Transfer Hizmetleri",
          providerAreaServed: "Paris, Île-de-France",
          serviceType: "Airport Transfer, City Transfer, Private Driver",
          areaServed: [
            "Paris",
            "Charles de Gaulle Airport (CDG)",
            "Orly Airport (ORY)",
            "Disneyland Paris",
          ],
          catalogName: "Transfer Hizmetleri",
        },

        hero: {
          eyebrow: "VIP • Profesyonel • Güvenli",
          title: "Transfer Hizmetlerimiz",
          lead: "Paris’te konforlu, zamanında ve sorunsuz ulaşım için her detayı düşündük.",
          ctaPrimary: "Hemen Talep Oluştur",
          ctaSecondary: "Hizmetleri İncele",
        },

        services: {
          heading: "Popüler Transfer Seçenekleri",
          whatsappCta: "Iletisime gec",
          items: [
            {
              key: "airport",
              title: "Havaalanı (CDG / Orly) Transferi",
              desc: "Charles de Gaulle (CDG) ve Orly (ORY) havaalanlarından otelinize ya da adresinize VIP karşılama ve kapıdan kapıya transfer.",
              bullets: [
                "Sabit fiyat • Gizli ücret yok",
                "120€’dan başlayan fiyatlarla",
                "Rezervasyon talepleri en az bir hafta önceden yapılmalıdır",
                "Özel araç tercihleri için en az 20 gün önceden bildirilmelidir",
              ],
              sample: "Örnek: CDG ➜ Paris Merkez 1-3 kişi, Sedan",
            },
            {
              key: "disney",
              title: "Disneyland® Paris Transferi",
              desc: "Paris/havaalanı – Disneyland® tek yön veya gidiş-dönüş konforlu ulaşım.",
              bullets: [
                "Aile dostu araçlar",
                "Çocuk koltuğu opsiyonu",
                "Park giriş saatine göre planlama",
                "150€’dan başlayan fiyatlarla",
                "Rezervasyon talepleri en az bir hafta önceden yapılmalıdır",
                "Özel araç tercihleri için en az 20 gün önceden bildirilmelidir",
              ],
              sample: "Örnek: Paris Merkez ➜ Disneyland 1-7 kişi, Minivan",
            },
            {
              key: "city",
              title: "Şehir İçi Saatlik Transfer",
              desc: "Toplantı, alışveriş, akşam yemeği ya da şehir turu için saatlik sürücülü araç tahsisi.",
              bullets: [
                "Minimum 2 saat",
                "Esnek güzergâh",
                "Çoklu durak",
                "80 €/saat",
                "Rezervasyon talepleri en az bir hafta önceden yapılmalıdır",
                "Özel araç tercihleri için en az 20 gün önceden bildirilmelidir",
              ],
              sample: "Örnek: 3 saatlik tahsis (Sedan veya Minivan)",
            },
            {
              key: "custom",
              title: "Özel Transfer Hizmetleri",
              desc: "Versailles, Champagne bölgesi, sergi & fuar transferleri veya sizin belirlediğiniz rota.",
              bullets: [
                "Kişiselleştirilmiş plan",
                "Çok dilli sürücüler",
                "Kurumsal faturalama",
                "Gelecek talepleriniz için teklif alın",
                "Rezervasyon talepleri en az bir hafta önceden yapılmalıdır",
                "Özel araç tercihleri için en az 20 gün önceden bildirilmelidir",
              ],
              sample: "Örnek: Paris ➜ Reims (Şampanya turu) gün boyu",
            },
          ],
        },
      },
    ],
  },
  driver: {
    ariaLabel: "Şoför Özgeçmiş",
    hero: {
      name: "Mehmet Albayrak",
      title: "VIP Şoför",
      years: 10,
      lede: "{years}+ yıl deneyimli, güvenlik ve mahremiyete önem veren, şehir içi ve şehirlerarası VIP taşımacılıkta uzman profesyonel sürücü.",
      ctaCall: "Hemen Ara",
      ctaEmail: "Rezervasyon E-posta",
      phoneHref: "tel:+33 6 52 90 64 43",
      emailHref: "mailto:atabeyvipparis@gmail.com?subject=VIP%20Transfer",
      imgAlt: "{name} profil fotoğrafı",
    },
    sections: {
      bio: {
        title: "Kısa Özgeçmiş",
        text: "Diplomatik misafirler, iş insanları ve etkinlik konuklarına eşlik/transfer tecrübesi. Yoğun trafikte rota optimizasyonu, uçuş takibi, kapıdan kapıya hizmet ve VIP protokol kuralları.",
        meta: {
          labels: {
            license: "Ehliyet",
            certificates: "Belgeler",
            vehicleExp: "Araç deneyimi",
          },
          license: "B, BE",
          certificates: "SRC2/3, Psikoteknik, İlk Yardım",
          vehicleExp: "Mercedes S/E-Class, Vito/V-Class, Sprinter",
        },
      },
      skills: {
        title: "Yetenekler",
        chips: [
          "Güvenli & ileri sürüş",
          "VIP protokol",
          "Navigasyon / rota",
          "Zaman yönetimi",
          "Gizlilik & NDA",
          "Müşteri iletişimi",
        ],
        progress: [
          { label: "Güvenli sürüş", value: 100 },
          { label: "Şehir bilgisi", value: 100 },
          { label: "Navigasyon", value: 100 },
          { label: "Müşteri memnuniyeti", value: 100 },
        ],
      },
      services: {
        title: "Hizmetler",
        list: [
          "Havalimanı Transfer",
          "Günlük Tahsis",
          "Kurumsal Toplantı",
          "Etkinlik & Davet",
          "Şehir Turu",
        ],
        hint: "* Gizlilik sözleşmesi (NDA) ve isimsiz referans sağlanır.",
      },
      areas: {
        title: "Çalışma Bölgeleri",
        text: "Paris — CDG — Orly — Disneyland — Paris'in tüm turistik bölgeleri ve çevresi",
        badges: ["24/7", "Uçuş Takip", "Bekleme Esnekliği"],
      },
      contact: {
        title: "İletişim",
        labels: { phone: "Telefon", email: "E-posta", whatsapp: "WhatsApp" },
        phone: "+33 6 52 90 64 43",
        phoneDisplay: "+33 6 52 90 64 43",
        phoneHref: "tel:+33652906443",
        email: "atabeyvipparis@gmail.com",
        whatsappHref: "https://wa.me/33652906443",
        whatsappText: "Hızlı mesaj",
      },
    },
  },
};
