
import React, { useState } from 'react';
import { Mandate, ProtocolStage } from './types';
import { LandingPage } from './components/LandingPage';
import { ExecutiveDesk } from './components/ExecutiveDesk';
import { notifyProtocolSigma } from './services/communicationService';

console.log(
  "%cINSOLITO DRIVE - IMPERIAL SELECTION",
  "color: #B59A7D; font-size: 24px; font-weight: bold; letter-spacing: 0.2em; text-shadow: 2px 2px #000; padding: 10px 0;"
);

console.log(
  "%cProtocol 1705 C.C. // Absolute Fiduciary Shield",
  "color: #E8E2D6; font-size: 11px; font-weight: 300; letter-spacing: 0.15em; border-top: 1px solid #222; padding-top: 5px; text-transform: uppercase;"
);

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');
  const [mandates, setMandates] = useState<Mandate[]>([
    {
      id: 'ID-5711-2026',
      created_at: new Date(Date.now() - 432000000).toISOString(),
      expires_at: new Date(Date.now() + 86400000).toISOString(),
      client_id: 'PRV-01',
      asset_subject: 'Patek Philippe Nautilus 5711/1A-014 (Olive Green Dial)',
      budget_escrow: 485000,
      fiduciary_fee: 14550,
      status: 'PROCUREMENT',
      art_1705_compliance: true,
      stage: ProtocolStage.PROCUREMENT
    },
    {
      id: 'ID-BIRK-SHADOW',
      created_at: new Date(Date.now() - 172800000).toISOString(),
      client_id: 'PRV-01',
      asset_subject: 'Hermès Birkin 35 Shadow (Ebène Swift)',
      budget_escrow: 52000,
      fiduciary_fee: 3120,
      status: 'FUNDED',
      art_1705_compliance: true,
      stage: ProtocolStage.ESTABLISHMENT
    }
  ]);

  const handleAuthorization = () => {
    setView('dashboard');
  };

  const createInterposition = () => {
    const id = `ID-${Math.random().toString(36).substr(2, 4).toUpperCase()}-2026`;
    const newMandate: Mandate = {
      id,
      created_at: new Date().toISOString(),
      client_id: 'PRV-01',
      asset_subject: 'Mandate Specification Pending Appraisal',
      budget_escrow: 0,
      fiduciary_fee: 0,
      status: 'PENDING',
      art_1705_compliance: false,
      stage: ProtocolStage.ESTABLISHMENT
    };
    setMandates([newMandate, ...mandates]);
    notifyProtocolSigma("+39-FIDUCIARY", `Initiating Fiduciary Protocol: ${id}`);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] selection:bg-[#E8E2D6] selection:text-[#0D0D0D]">
      {view === 'landing' ? (
        <LandingPage onInitialize={handleAuthorization} />
      ) : (
        <ExecutiveDesk mandates={mandates} onNewMandate={createInterposition} />
      )}
    </div>
  );
};

export default App;
