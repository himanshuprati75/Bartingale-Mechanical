import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, Award, CheckCircle2, Flame, Droplets, Wrench, Snowflake, Cpu, Layers, Building2 } from 'lucide-react';

export default function Hero({ onSelectIssue, onOpenCallModal }) {
  const quickIssues = [
    { id: 'commercial_hvac', label: 'Commercial HVAC / RTU Failure', icon: Flame, tag: 'Urgent 24/7 Dispatch' },
    { id: 'boiler_piping', label: 'Boilers & Industrial Piping', icon: Wrench, tag: 'High-Pressure Steam' },
    { id: 'commercial_plumbing', label: 'Commercial Plumbing & Backflow', icon: Droplets, tag: 'Code & Medical Gas' },
    { id: 'refrigeration', label: 'Refrigeration & Process Chillers', icon: Snowflake, tag: 'Cold Storage Safe' },
    { id: 'building_automation', label: 'Building Automation & DDC', icon: Cpu, tag: 'Energy Management' },
    { id: 'sheet_metal', label: 'Custom Sheet Metal & Ducts', icon: Layers, tag: 'In-House Fabrication' },
  ];

  const handleIssueClick = (issueId) => {
    onSelectIssue(issueId);
    const target = document.getElementById('calculator');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-iron-950 via-iron-900 to-iron-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Subtle Tech & Piping Grid Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#c8102e_1px,transparent_1px)] [background-size:28px_28px] opacity-10"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-crimson-700/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-amberGold-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Psychological Value & Core Proposition (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Dispatch & 110-Year Heritage Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-iron-900/90 border border-crimson-500/40 rounded-full px-3.5 py-1.5 text-xs sm:text-sm text-slate-200 shadow-inner">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-crimson-500"></span>
              </span>
              <span className="font-semibold text-crimson-400">Western Wisconsin Engineering Dispatch:</span>
              <span>Eau Claire • Chippewa Falls • Menomonie • St. Croix</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-white">
              Western Wisconsin's Premier <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 via-rose-300 to-amberGold-400">
                Mechanical Contractor.
              </span>{' '}
              Built on 110+ Years of Trust.
            </h1>

            {/* Psychological Calming & Enterprise Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              When critical HVAC chillers trip, commercial boilers shut down, or facility plumbing fails, downtime costs thousands per hour. 
              Founded in 1913, <strong className="text-white font-semibold">Bartingale Mechanical</strong> (an APi Group Company) 
              deploys UA Local 434 union certified craftsmen, computerized building automation, and rapid 24/7 emergency dispatch across the Chippewa Valley.
            </p>

            {/* Interactive Issue Dispatch Quick-Selector */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amberGold-400"></span>
                Select Your System To Check Immediate Response &amp; Estimator:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {quickIssues.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleIssueClick(item.id)}
                      className="group flex flex-col items-start p-2.5 sm:p-3 rounded-xl bg-iron-900/80 hover:bg-crimson-950/70 border border-slate-700 hover:border-crimson-500 text-left transition-all hover:scale-[1.02] shadow-sm"
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <Icon className="w-4 h-4 text-crimson-400 group-hover:text-amberGold-400 transition-colors" />
                        <span className="text-[10px] text-slate-400 group-hover:text-slate-200 font-medium">{item.tag}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-white">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="tel:7158353169"
                onClick={(e) => {
                  if (window.innerWidth >= 1024) {
                    e.preventDefault();
                    onOpenCallModal();
                  }
                }}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-crimson-700 via-crimson-600 to-crimson-700 hover:from-crimson-600 hover:to-crimson-500 text-white font-extrabold text-base sm:text-lg px-7 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 btn-emergency-glow"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call (715) 835-3169 Now</span>
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById('dispatch-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-iron-850/90 hover:bg-iron-800 border border-slate-600 hover:border-slate-500 text-slate-100 hover:text-white font-bold text-base px-6 py-4 rounded-xl shadow transition-all"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4 text-amberGold-400" />
              </button>
            </div>

            {/* Trust Anchors Under Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-crimson-400" />
                <span>Established 1913 • 110+ Years</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amberGold-400" />
                <span>UA Local 434 Union Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-crimson-400" />
                <span>An APi Group Company</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Proof & Heritage Badges (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image Card: Techs on Site */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-iron-900 group">
                <img 
                  src="/images/hero_technicians.jpg" 
                  alt="Bartingale Mechanical Engineers & Technicians in Eau Claire" 
                  className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-iron-950 via-transparent to-transparent opacity-90"></div>

                {/* Bottom Card Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-iron-950/85 backdrop-blur-md rounded-xl border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase font-bold text-amberGold-400 tracking-wider">UA Local 434 Union Dispatch</p>
                    <p className="text-sm font-black text-white">Commercial Steamfitters &amp; Plumbers</p>
                    <p className="text-[11px] text-slate-300">Eau Claire, WI • 24/7 Mobile Fleet</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-crimson-600/30 text-crimson-400 border border-crimson-500/40 text-[10px] font-black uppercase px-2 py-0.5 rounded">
                      24/7 On-Call
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating 110+ Years Heritage Badge */}
              <div className="absolute -top-6 -left-6 sm:-left-8 bg-iron-950/95 border-2 border-amberGold-500/80 rounded-2xl p-2.5 shadow-2xl backdrop-blur-md flex items-center gap-3 max-w-[240px] animate-bounce-subtle">
                <img 
                  src="/images/badge_110years.png" 
                  alt="110 Years of Excellence" 
                  className="w-12 h-12 rounded-lg object-contain border border-amberGold-500/40 flex-shrink-0"
                />
                <div>
                  <p className="text-[10px] font-black uppercase text-amberGold-400 tracking-wide">FOUNDED IN 1913</p>
                  <p className="text-xs font-bold text-white leading-tight">110+ Years of Mechanical Leadership</p>
                </div>
              </div>

              {/* Floating Emergency Badge */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-iron-900/95 border border-crimson-500/50 rounded-2xl p-3 shadow-2xl backdrop-blur-md items-center gap-3 max-w-[250px]">
                <div className="p-2 bg-crimson-700/30 text-crimson-400 rounded-xl border border-crimson-500/30">
                  <Wrench className="w-5 h-5 text-amberGold-400" />
                </div>
                <div>
                  <p className="text-xs font-black text-white">APi Group / Jamar</p>
                  <p className="text-[11px] text-slate-300">Backed by national engineering scale &amp; local service!</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
