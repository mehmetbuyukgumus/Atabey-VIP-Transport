export default {
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact",
  },
  hero: {
    title: "Comfortable and Safe Transportation",
    subtitle:
      "We offer luxury transportation services for your city or intercity travels.",
    cta: "Contact Us",
  },
  about: {
    heading: "About Us",
    text: "With years of experience, we provide our guests with safe, comfortable, and premium transportation services. With our professional team and modern vehicle fleet, we make every journey special.",
  },
  services: {
    heading: "Our Services",
    items: [
      {
        title: "Luxury Vehicle Fleet",
        description:
          "We offer a high-standard travel experience with our latest model limousines, sedans, and minibuses.",
        route: "vehicles",
      },
      {
        title: "Professional Drivers",
        description:
          "Our drivers are experienced, friendly, and reliable. All you need to do is enjoy the ride.",
        route: "driver",
      },
      {
        title: "Transfer",
        description:
          "With airport pick-up and drop-off services scheduled according to your flight times, we guarantee on-time arrivals.",
        route: "transfer",
      },
    ],
  },
  contact: {
    heading: "Contact",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    addressLabel: "Address",
    phone: "+33 6 52 90 64 43",
    whatsapp: "+33 6 52 90 64 43",
    email: "atabeyvipparis@gmail.com",
    address: "Paris, France",
  },
  footer: {
    rights: "All rights reserved.",
  },
  transfers: {
    trtansfer: [
      {
        siteName: "Atabey VIP",

        meta: {
          title: "Our Transfer Services | {site}",
          description:
            "CDG/Orly airport transfers, Disneyland transfers, hourly chauffeured car service, and custom VIP transfer services. Fixed price, waiting included.",
          robots: "index,follow",
        },

        schema: {
          serviceName: "VIP Transfer Services",
          providerAreaServed: "Paris, Île-de-France",
          serviceType: "Airport Transfer, City Transfer, Private Driver",
          areaServed: [
            "Paris",
            "Charles de Gaulle Airport (CDG)",
            "Orly Airport (ORY)",
            "Disneyland Paris",
          ],
          catalogName: "Transfer Services",
        },

        hero: {
          eyebrow: "VIP • Professional • Safe",
          title: "Our Transfer Services",
          lead: "We’ve thought of every detail for comfortable, on-time, and hassle-free transportation in Paris.",
          ctaPrimary: "Request Now",
          ctaSecondary: "Explore Services",
        },

        services: {
          heading: "Popular Transfer Options",
          whatsappCta: "Contact Us",
          items: [
            {
              key: "airport",
              title: "Airport (CDG / Orly) Transfer",
              desc: "VIP pick-up and door-to-door transfer from Charles de Gaulle (CDG) and Orly (ORY) airports to your hotel or address.",
              bullets: [
                "Fixed price • No hidden fees",
                "From €120",
                "Reservation requests must be made at least one week in advance",
                "Special vehicle preferences must be requested at least 20 days in advance",
              ],
              sample: "Example: CDG ➜ Paris Center 1-3 people, Sedan",
            },
            {
              key: "disney",
              title: "Disneyland® Paris Transfer",
              desc: "Comfortable one-way or round-trip transportation between Paris/airports and Disneyland®",
              bullets: [
                "Family-friendly vehicles",
                "Child seat option",
                "Planned according to park entry time",
                "From €150",
                "Reservation requests must be made at least one week in advance",
                "Special vehicle preferences must be requested at least 20 days in advance",
              ],
              sample: "Example: Paris Center ➜ Disneyland 1-7 people, Minivan",
            },
            {
              key: "city",
              title: "Hourly City Transfer",
              desc: "Hourly chauffeured car hire for meetings, shopping, dinner, or city tours.",
              bullets: [
                "Minimum 2 hours",
                "Flexible route",
                "Multiple stops",
                "From €80/hour",
                "Reservation requests must be made at least one week in advance",
                "Special vehicle preferences must be requested at least 20 days in advance",
              ],
              sample: "Example: 3-hour hire (Sedan or Minivan)",
            },
            {
              key: "custom",
              title: "Custom Transfer Services",
              desc: "Versailles, Champagne region, exhibition & fair transfers, or a route of your choice.",
              bullets: [
                "Personalized plan",
                "Multilingual drivers",
                "Corporate invoicing",
                "Request a quote for your future needs",
                "Reservation requests must be made at least one week in advance",
                "Special vehicle preferences must be requested at least 20 days in advance",
              ],
              sample: "Example: Paris ➜ Reims (Champagne tour) full day",
            },
          ],
        },
      },
    ],
  },
  driver: {
    ariaLabel: "Driver Resume",
    hero: {
      name: "Mehmet Albayrak",
      title: "VIP Driver",
      years: 10,
      lede: "{years}+ years of experience, prioritizing safety and privacy, an expert professional driver in city and intercity VIP transportation.",
      ctaCall: "Call Now",
      ctaEmail: "Reservation Email",
      phoneHref: "tel:+33 6 52 90 64 43",
      emailHref: "mailto:atabeyvipparis@gmail.com?subject=VIP%20Transfer",
      imgAlt: "{name} profile photo",
    },
    sections: {
      bio: {
        title: "Short Biography",
        text: "Experience in accompanying/transferring diplomatic guests, business people, and event attendees. Expertise in route optimization in heavy traffic, flight tracking, door-to-door service, and VIP protocol rules.",
        meta: {
          labels: {
            license: "License",
            certificates: "Certificates",
            vehicleExp: "Vehicle Experience",
          },
          license: "B, BE",
          certificates: "SRC2/3, Psychotechnical, First Aid",
          vehicleExp: "Mercedes S/E-Class, Vito/V-Class, Sprinter",
        },
      },
      skills: {
        title: "Skills",
        chips: [
          "Safe & advanced driving",
          "VIP protocol",
          "Navigation / route planning",
          "Time management",
          "Confidentiality & NDA",
          "Customer communication",
        ],
        progress: [
          { label: "Safe driving", value: 100 },
          { label: "City knowledge", value: 100 },
          { label: "Navigation", value: 100 },
          { label: "Customer satisfaction", value: 100 },
        ],
      },
      services: {
        title: "Services",
        list: [
          "Airport Transfer",
          "Daily Hire",
          "Corporate Meeting",
          "Event & Invitation",
          "City Tour",
        ],
        hint: "* Non-disclosure agreement (NDA) and anonymous references are provided.",
      },
      areas: {
        title: "Service Areas",
        text: "Paris — CDG — Orly — Disneyland — Louvre Museum — Orsay Museum",
        badges: ["24/7", "Flight Tracking", "Flexible Waiting"],
      },
      contact: {
        title: "Contact",
        labels: { phone: "Phone", email: "Email", whatsapp: "WhatsApp" },
        phone: "+33652906443",
        phoneDisplay: "+33 6 52 90 64 43",
        phoneHref: "tel:+33652906443",
        email: "atabeyvipparis@gmail.com",
        whatsappHref: "https://wa.me/33652906443",
        whatsappText: "Quick message",
      },
    },
  },
};
