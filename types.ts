
export type MandateStatus = 'PENDING' | 'FUNDED' | 'PROCUREMENT' | 'EXECUTED' | 'DELIVERED' | 'WIPED';

export enum ProtocolStage {
  ESTABLISHMENT = 'ESTABLISHMENT', 
  PROCUREMENT = 'PROCUREMENT',
  OBLIVION = 'OBLIVION',
}

export interface Mandate {
  id: string;
  created_at: string;
  expires_at?: string; // 48h Data-Wipe Protocol
  client_id: string;
  asset_subject: string;
  budget_escrow: number;
  fiduciary_fee: number;
  status: MandateStatus;
  art_1705_compliance: boolean;
  stage: ProtocolStage;
  technical_evaluation?: string;
}

export interface ClientProfile {
  id: string;
  tier: 'SIGNATURE' | 'BLACK' | 'LEGACY';
}
