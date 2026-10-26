import { Award, ShieldCheck, HeartHandshake, CheckCircle2, Wrench, Users, PhoneCall, Building2, Calendar, MapPin, Clock } from 'lucide-react';

export default function AboutUs({ onOpenCallModal }) {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Story & Heritage Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl group">
              <img 
                src="/images/hero_technicians.jpg" 
                alt="Bartingale Mechanical Team in Eau Claire, WI" 
                className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-iron-950 via-iron-950/20 to-transparent"></div>

              {/* 110-Year Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200 text-slate-800">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-crimson-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-iron-950">
                    Established 1913 • 110+ Years Continuous Service
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  From Bert &amp; Tom Bartingale’s first piping contracts in 1913 to today’s high-tech building automation systems across Western Wisconsin.
                </p>
              </div>
            </div>

            {/* APi Group / Jamar Affiliation Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
              <img 
                src="/images/fleet_van.jpg" 
                alt="Bartingale fleet service van" 
                className="w-16 h-12 object-cover rounded-xl shrink-0 border border-slate-300"
              />
              <div className="text-xs text-slate-700">
                <strong className="block text-iron-950 font-bold text-sm mb-0.5">An APi Group / Jamar Company</strong>
                National engineering scale, multi-million dollar bonding capacity, and deep hometown commitment based right here in Eau Claire.
              </div>
            </div>
          </div>

          {/* Right Column: Narrative History & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson-700 bg-crimson-50 border border-crimson-300 px-3.5 py-1 rounded-full">
              <Award className="w-3.5 h-3.5 text-crimson-600" />
              <span>Our 110-Year Wisconsin Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-iron-950 tracking-tight leading-tight">
              A Century of Mechanical Leadership in the Chippewa Valley
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              In the early 1900s, brothers <strong className="text-iron-950 font-semibold">Bert and Tom Bartingale</strong> plied their piping trade for the historic Hobbs Supply Company in Eau Claire. When Hobbs shifted toward wholesale distribution, the brothers recognized an opportunity to build a premier mechanical contracting firm — formally incorporating the <strong>Bartingale Company in 1913</strong>.
            </p>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Through successive generations — from Bert’s son Wes in the 1950s to Wes’s son Jack in the 1970s, and the launch of <strong>Bartingale Mechanical Inc. in 1989</strong> — the company expanded into western Wisconsin’s foremost authority on commercial plumbing, industrial piping, and complex HVAC climate systems.
              </p>

              <p>
                In 2021, Bartingale Mechanical joined <strong>The Jamar Company</strong> and the <strong>APi Group</strong> family of companies. This union empowers us with state-of-the-art virtual design construction (VDC), computerized energy modeling, and immense industrial resources, while preserving our local Eau Claire team, values, and prompt neighborhood dispatch.
              </p>
            </div>

            {/* 3 Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-crimson-600 mb-1.5" />
                <h4 className="text-xs font-bold text-iron-950 uppercase">UA Local 434 Union</h4>
                <p className="text-[11px] text-slate-500 mt-1">Certified steamfitters and master plumbers with rigorous 5-year apprenticeship training.</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Building2 className="w-5 h-5 text-amberGold-600 mb-1.5" />
                <h4 className="text-xs font-bold text-iron-950 uppercase">APi Group Scale</h4>
                <p className="text-[11px] text-slate-500 mt-1">Multi-million dollar bonding capacity and comprehensive safety certification.</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Clock className="w-5 h-5 text-crimson-600 mb-1.5" />
                <h4 className="text-xs font-bold text-iron-950 uppercase">24/7/365 On-Call</h4>
                <p className="text-[11px] text-slate-500 mt-1">Live dispatchers standing by day and night for emergency facility failures.</p>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="tel:7158353169"
                className="bg-crimson-600 hover:bg-crimson-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-amberGold-300" />
                <span>Call (715) 835-3169 Dispatch</span>
              </a>

              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-crimson-600 shrink-0" />
                <span>3213 Louis Avenue, Suite G, Eau Claire, WI 54703</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
