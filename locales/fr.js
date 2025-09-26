export default {
  nav: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    contact: "Contact",
  },
  hero: {
    title: "Transport Confortable et Sécurisé",
    subtitle:
      "Nous proposons des services de transport de luxe pour vos trajets en ville ou en dehors.",
    cta: "Contactez-nous",
  },
  about: {
    heading: "À propos de nous",
    text: "Fort de plusieurs années d’expérience, nous offrons à nos clients un service de transport sûr, confortable et premium. Avec notre équipe professionnelle et notre flotte de véhicules modernes, nous rendons chaque voyage unique.",
  },
  services: {
    heading: "Nos Services",
    items: [
      {
        title: "Notre Flotte de Véhicules de Luxe",
        description:
          "Nous vous offrons une expérience de voyage haut de gamme avec nos limousines, berlines et minibus dernier modèle.",
        route: "vehicles",
      },
      {
        title: "Chauffeurs Professionnels",
        description:
          "Nos chauffeurs sont expérimentés, courtois et fiables. Profitez simplement de votre trajet.",
        route: "driver",
      },
      {
        title: "Transfert",
        description:
          "Avec nos services d’accueil et de dépose à l’aéroport planifiés selon vos horaires de vol, nous garantissons une arrivée ponctuelle.",
        route: "transfer",
      },
    ],
  },
  contact: {
    heading: "Contact",
    phoneLabel: "Téléphone",
    whatsappLabel: "WhatsApp",
    emailLabel: "E-mail",
    addressLabel: "Adresse",
    phone: "+33 6 52 90 64 43",
    whatsapp: "+33 6 52 90 64 43",
    email: "atabeyvipparis@gmail.com",
    address: "Paris, France",
  },
  footer: {
    rights: "Tous droits réservés.",
  },
  transfers: {
    trtansfer: [
      {
        siteName: "Atabey VIP",

        meta: {
          title: "Nos Services de Transfert | {site}",
          description:
            "Transfert aéroport CDG/Orly, transfert Disneyland, voiture avec chauffeur à l’heure dans Paris et services VIP personnalisés. Prix fixe, attente incluse.",
          robots: "index,follow",
        },

        schema: {
          serviceName: "Services de Transfert VIP",
          providerAreaServed: "Paris, Île-de-France",
          serviceType: "Transfert Aéroport, Transfert en Ville, Chauffeur Privé",
          areaServed: [
            "Paris",
            "Aéroport Charles de Gaulle (CDG)",
            "Aéroport d’Orly (ORY)",
            "Disneyland Paris",
          ],
          catalogName: "Services de Transfert",
        },

        hero: {
          eyebrow: "VIP • Professionnel • Sécurisé",
          title: "Nos Services de Transfert",
          lead: "Nous avons pensé à chaque détail pour un transport confortable, ponctuel et sans souci à Paris.",
          ctaPrimary: "Faire une demande",
          ctaSecondary: "Voir les services",
        },

        services: {
          heading: "Options de Transfert Populaires",
          whatsappCta: "Nous contacter",
          items: [
            {
              key: "airport",
              title: "Transfert Aéroport (CDG / Orly)",
              desc: "Accueil VIP et transfert porte-à-porte depuis les aéroports Charles de Gaulle (CDG) et Orly (ORY) vers votre hôtel ou adresse.",
              bullets: [
                "Suivi de vol et attente inclus",
                "Accueil avec pancarte nominative",
                "Prix fixe • Aucun frais caché",
              ],
              sample: "Exemple : CDG ➜ Centre de Paris 1-3 personnes, Berline",
            },
            {
              key: "disney",
              title: "Transfert Disneyland® Paris",
              desc: "Transport confortable aller simple ou aller-retour entre Paris/aéroports et Disneyland®.",
              bullets: [
                "Véhicules adaptés aux familles",
                "Option siège enfant",
                "Planifié selon les horaires d’ouverture du parc",
              ],
              sample: "Exemple : Centre de Paris ➜ Disneyland 1-7 personnes, Minivan",
            },
            {
              key: "city",
              title: "Transfert Horaire en Ville",
              desc: "Location d’une voiture avec chauffeur à l’heure pour réunions, shopping, dîner ou visite de la ville.",
              bullets: ["Minimum 2 heures", "Itinéraire flexible", "Arrêts multiples"],
              sample: "Exemple : location 3 heures (Berline ou Minivan)",
            },
            {
              key: "custom",
              title: "Services de Transfert Personnalisés",
              desc: "Versailles, région de Champagne, transferts salons & foires, ou itinéraire de votre choix.",
              bullets: [
                "Plan personnalisé",
                "Chauffeurs multilingues",
                "Facturation pour entreprises",
              ],
              sample: "Exemple : Paris ➜ Reims (tour en Champagne) journée entière",
            },
          ],
        },
      },
    ],
  },
   driver: {
    ariaLabel: "CV Chauffeur",
    hero: {
      name: "Mehmet Albayrak",
      title: "Chauffeur VIP",
      years: 10,
      lede:
        "Plus de {years} ans d’expérience ; chauffeur professionnel attaché à la sécurité et à la confidentialité, spécialisé dans le transport VIP en ville et interurbain.",
      ctaCall: "Appeler maintenant",
      ctaEmail: "E-mail de réservation",
      phoneHref: "tel:+33 6 52 90 64 43",
      emailHref: "mailto:atabeyvipparis@gmail.com?subject=VIP%20Transfer",
      imgAlt: "Photo de profil de {name}"
    },
    sections: {
      bio: {
        title: "Brève biographie",
        text:
          "Expérience avec des invités diplomatiques, des dirigeants et des participants à des événements. Optimisation d’itinéraire en trafic dense, suivi des vols, service porte-à-porte et protocole VIP.",
        meta: {
          labels: {
            license: "Permis",
            certificates: "Certificats",
            vehicleExp: "Expérience véhicule"
          },
          license: "B, BE",
          certificates: "SRC2/3, Psychotechnique, Premiers secours",
          vehicleExp: "Mercedes S/E-Class, Vito/V-Class, Sprinter"
        }
      },
      skills: {
        title: "Compétences",
        chips: [
          "Conduite défensive & avancée",
          "Protocole VIP",
          "Navigation / itinéraire",
          "Gestion du temps",
          "Confidentialité & NDA",
          "Communication client"
        ],
        progress: [
          { label: "Conduite sécurisée", value: 100 },
          { label: "Connaissance de la ville", value: 100 },
          { label: "Navigation", value: 100 },
          { label: "Satisfaction client", value: 100 }
        ]
      },
      services: {
        title: "Services",
        list: [
          "Transfert aéroport",
          "Mise à disposition journalière",
          "Réunion d’entreprise",
          "Événement & réception",
          "Tour de ville"
        ],
        hint:
          "* NDA disponible et références anonymisées peuvent être fournies."
      },
      areas: {
        title: "Zones d’intervention",
        text:
          "Paris — CDG — Orly — Disneyland — Musée du Louvre — Musée d’Orsay",
        badges: ["24/7", "Suivi de vol", "Souplesse d’attente"]
      },
      contact: {
        title: "Contact",
        labels: { phone: "Téléphone", email: "E-mail", whatsapp: "WhatsApp" },
        phone: "+33 6 52 90 64 43",
        phoneDisplay: "+33 6 52 90 64 43",
        phoneHref: "tel:+33652906443",
        email: "atabeyvipparis@gmail.com",
        whatsappHref: "https://wa.me/33652906443",
        whatsappText: "Message rapide"
      }
    }
  }
};
