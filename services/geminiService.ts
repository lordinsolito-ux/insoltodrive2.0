
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function conductFiduciaryAppraisal(asset: string, budget: number) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `CONDUCT IMPERIAL FIDUCIARY ANALYSIS.
    ASSET: "${asset}"
    ESCROW PROVISION: ${budget} EUR
    PROTOCOL: Art. 1705 C.C. (Interposizione Reale Senza Rappresentanza)
    
    Inquadra la transazione secondo la dottrina "Invisibilità come Architettura".
    Analizza i rischi di profilazione e proponi una strategia di schermatura totale.
    
    Ritorna un JSON formattato con:
    1. privacyIndex (0-100): Grado di integrità dell'identità finale.
    2. strategy (string): Descrizione architettonica della schermatura (Michael Voice: autoritaria, asettica).
    3. fiduciaryStructures (string[]): Lista di veicoli proxy consigliati (Trust, Holdings, Trust Svizzero, ecc.).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          privacyIndex: { type: Type.NUMBER },
          strategy: { type: Type.STRING },
          fiduciaryStructures: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["privacyIndex", "strategy", "fiduciaryStructures"]
      }
    }
  });

  return JSON.parse(response.text);
}
