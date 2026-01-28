"use client";
import React, { useState } from 'react';
import { Search, TrendingUp, PieChart, ArrowUpRight, Calculator, Info, Wallet, ShieldCheck } from 'lucide-react';

export default function DhansagarHome() {
  // --- CALCULATOR LOGIC ---
  const [monthlySip, setMonthlySip] = useState(5000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const calculateWealth = () => {
    const P = monthlySip;
    const r = expectedReturn / 12 / 100;
    const n = years * 12;
    if (r === 0) return (P * n).toLocaleString('en-IN');
    const fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    return Math.round(fv).toLocaleString('en-IN');
  };

  const totalInvestment = monthlySip * years * 12;
  const wealthGained = parseInt(calculateWealth().replace(/,/g, '')) - totalInvestment;

  // --- MOCK DATA ---
  const featuredFunds = [
    { name: "Dhansagar Bluechip Direct", cat: "Equity", ret: "+15.4%", sip: 500, risk: "Very High" },
    { name: "Sagar Midcap Growth", cat: "Equity", ret: "+22.1%", sip: 1000, risk: "High" },
    { name: "Oceanic Liquid Fund", cat: "Debt", ret: "+7.2%", sip: 5000, risk: "Low" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="bg-white border-b sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-black text-blue-800 tracking-tighter">
          DHAN<span className="text-emerald-500">SAGAR</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-bold text-slate-600">
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Mutual Funds</a>
          <a href="#" className="hover:text-blue-600 transition">Calculators</a>
          <a href="#" className="hover:text-blue-600 transition">My Portfolio</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition shadow-md">
          Get Started
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="bg-white pt-16 pb-12 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-blue-100 uppercase tracking-widest">
            <ShieldCheck size={14} /> Direct Mutual Funds Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 leading-tight">
            Dive into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-500">Wealth.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
            Commission-free investing at your fingertips. Calculate, Invest, and Grow with Dhansagar.
          </p>
          <div className="relative max-w-xl mx-auto mb-16">
            <Search className="absolute left-4 top-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search for funds (e.g. Index Fund)..." 
              className="w-full p-4 pl-12 rounded-2xl border-2 border-slate-100 focus:border-blue-500 focus:outline-none shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 3. PRO SIP CALCULATOR */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
          <h2 className="text-3xl font-black mb-10 flex items-center gap-3">
            <Calculator className="text-emerald-400" size={28} /> SIP Pro Estimator
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              {/* Monthly SIP */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-slate-400 font-bold text-xs uppercase tracking-widest">Monthly SIP</label>
                  <span className="text-emerald-400 font-black text-xl">₹{monthlySip.toLocaleString('en-IN')}</span>
                </div>
                <input type="range" min="500" max="100000" step="500" value={monthlySip} onChange={(e) => setMonthlySip(Number(e.target.value))} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>
              {/* Returns % */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-slate-400 font-bold text-xs uppercase tracking-widest">Expected Return (p.a)</label>
                  <span className="text-emerald-400 font-black text-xl">{expectedReturn}%</span>
                </div>
                <input type="range" min="1" max="30" step="0.5" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>
              {/* Duration */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-slate-400 font-bold text-xs uppercase tracking-widest">Duration</label>
                  <span className="text-emerald-400 font-black text-xl">{years} Years</span>
                </div>
                <input type="range" min="1" max="40" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>
            </div>

            {/* Result Box */}
            <div className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-10 border border-white/10 text-center flex flex-col justify-center">
              <p className="text-slate-400 font-bold text-sm uppercase mb-4 tracking-widest">Estimated Wealth</p>
              <h3 className="text-6xl font-black text-white mb-6">₹{calculateWealth()}</h3>
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5 text-left">
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Total Invested</p>
                  <p className="text-white font-bold text-lg">₹{totalInvestment.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Wealth Gained</p>
                  <p className="text-emerald-400 font-bold text-lg">₹{wealthGained.toLocaleString('en-IN')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FUND GRID (The content that vanished) */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">Top Performing Funds</h2>
            <p className="text-slate-500 font-medium italic">Handpicked for the Dhansagar community.</p>
          </div>
          <button className="text-blue-600 font-bold hover:underline flex items-center gap-1">
            View all <ArrowUpRight size={18} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredFunds.map((fund, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-white hover:border-blue-100 transition-all cursor-pointer group">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <PieChart size={24} />
              </div>
              <h3 className="font-black text-xl mb-4 leading-tight">{fund.name}</h3>
              <div className="flex justify-between items-end pt-4 border-t border-slate-50">
                <div>
                  <p className="text-slate-400 text-[10px] font-black uppercase mb-1">3Y Returns</p>
                  <p className="text-emerald-500 font-black text-2xl">{fund.ret}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-[10px] font-black uppercase mb-1">Min SIP</p>
                  <p className="font-black text-xl text-slate-800">₹{fund.sip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}