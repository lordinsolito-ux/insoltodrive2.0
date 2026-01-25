
import React from 'react';

export const SOLOMON_KNOT = (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[1.5px]">
    <path d="M50 10 C30 10, 10 30, 10 50 C10 70, 30 90, 50 90 C70 90, 90 70, 90 50 C90 30, 70 10, 50 10 Z" />
    <path d="M10 50 L90 50 M50 10 L50 90" opacity="0.2"/>
    <circle cx="50" cy="50" r="15" />
    <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" />
  </svg>
);

export const SYSTEM_ALERTS = [
  "STAGE_I: ESTABLISHMENT_VERIFIED",
  "STAGE_II: FIDUCIARY_EXECUTION_ACTIVE",
  "STAGE_III: DATA_OBLIVION_SCHEDULED",
  "SYSTEM: ASYMMETRIC_ENCRYPTION_ACTIVE"
];
