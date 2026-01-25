
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
