import React from 'react';
import { Award, ShieldCheck, Clock, CheckCircle, PhoneCall, Building2, Wrench, Factory } from 'lucide-react';

export default function TrustShield() {
  const credentials = [
    {
      icon: Award,
      badge: 'Established 1913',
      title: '110+ Years of Excellence',
      description: 'Founded by brothers Bert and Tom Bartingale over a century ago in Eau Claire, delivering multi-generational mechanical dependability.',
      color: 'amberGold',
    },
    {
      icon: ShieldCheck,
      badge: 'Union Standard',
      title: 'UA Local 434 Certified',
      description: 'Our technicians are highly trained union steamfitters, master plumbers, and certified pipe welders completing 5-year apprenticeships.',
      color: 'crimson',
    },
    {
      icon: Factory,
      badge: 'Enterprise Scale',
      title: 'APi Group & Jamar Backing',
      description: 'Part of The Jamar Company and APi Group family — pairing local Eau Claire dedication with multi-state engineering resources.',
      color: 'iron',
    },
    {
      icon: Clock,
      badge: 'Rapid Response',
      title: '24/7/365 Emergency Dispatch',
      description: 'Immediate live dispatch across Western Wisconsin for commercial chiller trips, boiler shutdowns, and active plumbing failures.',
      color: 'crimson',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10 sm:py-14 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtext */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-bold text-crimson-700 bg-crimson-50 border border-crimson-200 px-3 py-1 rounded-full inline-block mb-2">
            The Bartingale Standard
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-iron-950 tracking-tight">
            Why Western Wisconsin Facilities &amp; Businesses Rely on Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Century-proven craftsmanship, union training, and emergency responsiveness guarantee system reliability.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 hover:bg-crimson-50/40 rounded-2xl p-6 border border-slate-200 hover:border-crimson-300 transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 group-hover:border-crimson-400 flex items-center justify-center text-crimson-700 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-crimson-600" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-iron-950 mb-2 group-hover:text-crimson-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-semibold text-crimson-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prompt Arrival Banner Quote */}
        <div className="mt-8 bg-gradient-to-r from-iron-950 via-iron-900 to-iron-950 rounded-2xl p-4 sm:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg border border-slate-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-crimson-500/20 border border-crimson-400 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-crimson-400" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-white">
                "From healthcare facilities and cleanrooms to commercial complexes, we keep Western Wisconsin operating without failure."
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                — Bartingale Mechanical • 3213 Louis Avenue, Suite G, Eau Claire, WI
              </p>
            </div>
          </div>

          <a 
            href="tel:7158353169"
            className="shrink-0 flex items-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow transition-all whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Emergency Dispatch (715) 835-3169</span>
          </a>
        </div>

      </div>
    </section>
  );
}
