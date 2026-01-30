
import React from 'react';

export const SOLOMON_KNOT = (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current">
    {/* Double-Bordered Fiduciary Shield */}
    <path d="M50 90C50 90 85 72 85 42V18L50 10L15 18V42C15 72 50 90 50 90Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M50 82C50 82 78 68 78 42V22L50 15L22 22V42C22 68 50 82 50 82Z" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />

    {/* Architectural Serif 'I' */}
    <path d="M44 25H56M50 25V55M44 55H56" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M43 25V28M57 25V28M43 52V55M57 52V55" strokeWidth="1.2" strokeLinecap="round" />

    {/* The Eye of Strategic Vision */}
    <path d="M32 68C40 60 60 60 68 68" strokeWidth="1" strokeLinecap="round" />
    <path d="M32 68C40 76 60 76 68 68" strokeWidth="1" strokeLinecap="round" />
    <circle cx="50" cy="68" r="3" fill="currentColor" />
  </svg>
);

export const SYSTEM_ALERTS = [
  "STAGE_I: ESTABLISHMENT_VERIFIED",
  "STAGE_II: FIDUCIARY_EXECUTION_ACTIVE",
  "STAGE_III: DATA_OBLIVION_SCHEDULED",
  "SYSTEM: ASYMMETRIC_ENCRYPTION_ACTIVE"
];

export const CONTENT = {
  HERO: {
    TITLE_LIN_1: "L’arte del silenzio",
    TITLE_LIN_2: "è l’ultimo vero lusso.",
    CAPTION: "Un privilegio riservato a chi ha imparato a esistere senza apparire."
  },
  ESSENCE: {
    QUOTE: "\"In un’era di trasparenza forzata, la discrezione è l'unica vera forma di libertà.\"",
    BODY: "InsolitoDrive nasce per restituirvi il controllo della vostra traccia, trasformando la riservatezza in un asset strategico."
  },
  PILLARS: {
    TITLE: "I Pilastri del Silenzio.",
    ITEMS: [
      { id: 'I', title: "Architettura dell'Identità", body: "Schermiamo la vostra presenza nelle negoziazioni più sensibili." },
      { id: 'II', title: "Custodia Fiduciaria", body: "Gestione di asset di alto valore nel massimo riserbo pubblico." },
      { id: 'III', title: "Diplomazia d'Immagine", body: "Protezione della reputazione attraverso il distacco strategico dal rumore digitale." }
    ]
  },
  FOUNDER: {
    NAME: "Michael Jara.",
    QUOTE: "\"Curatore di equilibri fiduciari. La mia missione è agire come il filtro necessario tra la vostra ambizione e lo sguardo del mondo.\"",
    SIGNATURE: "Michael Jara",
    SIGNATURE_LABEL: "[ LEGGI LA VISIONE ]"
  },
  ACCESS: {
    TITLE_1: "Ogni grande alleanza",
    TITLE_2: "inizia con un dialogo riservato.",
    BUTTON: "[ ACCESSO PRIVATO ]",
    LEGAL_1: "Insolito Experiences di Jara Lloctun Michael Sergio",
    LEGAL_2: "P.IVA 14379200968 | Cernusco sul Naviglio",
    COPYRIGHT: "© 2026 INSOLITO DRIVE"
  },
  NAV: {
    ESSENCE: "ESSENZA",
    EXPERTISE: "PROTOCOLLI",
    ACCESS: "ACCESSO PRIVATO"
  }
};
