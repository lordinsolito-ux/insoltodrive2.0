import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock Data for "God Mode"
const DEMO_TRANSACTIONS = [
    {
        id: "TRX-8821",
        client_real: "Marco Rossi (Industriale)",
        client_public: "Insolito Logistics",
        asset_real: "Rolex Daytona 'Paul Newman'",
        invoice_title: "Consulting & Procurement Services",
        cost: 22000,
        invoice_amount: 27500,
        status: "SECURED"
    },
    {
        id: "TRX-9932",
        client_real: "Giulia B. (Avvocato)",
        client_public: "Insolito Events",
        asset_real: "Weekend @ Ritz Paris (Secret)",
        invoice_title: "Event Planning Logistica",
        cost: 4500,
        invoice_amount: 5800,
        status: "PENDING"
    }
];

export const AdminDashboard: React.FC = () => {
    const [viewMode, setViewMode] = useState<'FACADE' | 'TRUTH'>('TRUTH');

    return (
        <div className="min-h-screen bg-[#050505] text-[#FFFFFF] p-8 font-sans">
            {/* HEADER */}
            <div className="flex justify-between items-end mb-12 border-b border-[#C5A059]/20 pb-8">
                <div>
                    <h1 className="serif text-3xl text-[#C5A059] tracking-widest">GOD MODE</h1>
                    <p className="text-xs text-[#FFFFFF]/40 uppercase tracking-[0.3em] mt-2">Empire Control Unit</p>
                </div>
                <div className="flex space-x-4">
                    <div className="text-right">
                        <div className="text-[10px] text-[#FFFFFF]/40 uppercase">Total Revenue</div>
                        <div className="text-xl text-[#FFFFFF]">€ 33.300</div>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] text-[#C5A059] uppercase">Net Profit</div>
                        <div className="text-xl text-[#C5A059]">€ 6.800 (20.4%)</div>
                    </div>
                </div>
            </div>

            {/* CONTROL SWITCH */}
            <div className="flex justify-center mb-12">
                <div className="bg-[#FFFFFF]/5 p-1 rounded-full flex space-x-2">
                    <button
                        onClick={() => setViewMode('FACADE')}
                        className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all ${viewMode === 'FACADE' ? 'bg-[#FFFFFF] text-[#000000]' : 'text-[#FFFFFF]/40'}`}
                    >
                        Public Facade
                    </button>
                    <button
                        onClick={() => setViewMode('TRUTH')}
                        className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all ${viewMode === 'TRUTH' ? 'bg-[#C5A059] text-[#000000]' : 'text-[#FFFFFF]/40'}`}
                    >
                        The Truth (Admin)
                    </button>
                </div>
            </div>

            {/* DATA GRID */}
            <div className="grid gap-4">
                {DEMO_TRANSACTIONS.map((trx) => (
                    <motion.div
                        key={trx.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border border-[#FFFFFF]/5 bg-[#FFFFFF]/[0.02] p-6 grid grid-cols-12 gap-4 items-center hover:border-[#C5A059]/30 transition-colors"
                    >
                        <div className="col-span-2 text-[10px] text-[#FFFFFF]/30 mono">{trx.id}</div>

                        {/* CLIENT COLUMN */}
                        <div className="col-span-3">
                            <div className="text-[10px] text-[#FFFFFF]/40 uppercase mb-1">Client</div>
                            <div className={`${viewMode === 'TRUTH' ? 'text-[#C5A059]' : 'text-[#FFFFFF]'}`}>
                                {viewMode === 'TRUTH' ? trx.client_real : trx.client_public}
                            </div>
                        </div>

                        {/* ASSET COLUMN */}
                        <div className="col-span-4">
                            <div className="text-[10px] text-[#FFFFFF]/40 uppercase mb-1">Asset / Service</div>
                            <div className={`${viewMode === 'TRUTH' ? 'text-[#C5A059]' : 'text-[#FFFFFF]'}`}>
                                {viewMode === 'TRUTH' ? trx.asset_real : trx.invoice_title}
                            </div>
                        </div>

                        {/* FINANCIAL COLUMN */}
                        <div className="col-span-3 text-right">
                            <div className="text-[10px] text-[#FFFFFF]/40 uppercase mb-1">
                                {viewMode === 'TRUTH' ? 'Profit Margin' : 'Invoice Total'}
                            </div>
                            <div className="text-lg">
                                {viewMode === 'TRUTH' ? (
                                    <span className="text-[#C5A059]">
                                        + € {trx.invoice_amount - trx.cost}
                                    </span>
                                ) : (
                                    <span>€ {trx.invoice_amount.toLocaleString()}</span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
