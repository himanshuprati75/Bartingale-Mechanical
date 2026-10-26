import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Navigation, Clock, Phone } from 'lucide-react';

export default function ServiceAreas({ onSelectLocation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const locations = [
    { city: 'Eau Claire', county: 'Eau Claire County', status: 'Headquarters & Shop', responseTime: 'Within 20-30 Mins' },
    { city: 'Chippewa Falls', county: 'Chippewa County', status: 'Immediate Dispatch', responseTime: 'Within 25-35 Mins' },
    { city: 'Altoona', county: 'Eau Claire County', status: 'Immediate Dispatch', responseTime: 'Within 20-30 Mins' },
    { city: 'Menomonie', county: 'Dunn County', status: 'Active Crew Available', responseTime: 'Within 30-45 Mins' },
    { city: 'Hudson', county: 'St. Croix County', status: 'Commercial Service Route', responseTime: 'Within 45-60 Mins' },
    { city: 'Rice Lake', county: 'Barron County', status: 'Industrial Scheduled', responseTime: 'Within 50-60 Mins' },
    { city: 'River Falls', county: 'Pierce County', status: 'Active Crew Available', responseTime: 'Within 45-60 Mins' },
    { city: 'Fall Creek', county: 'Eau Claire County', status: 'Immediate Dispatch', responseTime: 'Within 25-35 Mins' },
    { city: 'Elk Mound', county: 'Dunn County', status: 'Immediate Dispatch', responseTime: 'Within 25-35 Mins' },
    { city: 'Bloomer', county: 'Chippewa County', status: 'Daily Service Route', responseTime: 'Within 35-50 Mins' },
    { city: 'Black River Falls', county: 'Jackson County', status: 'Regional Facility Coverage', responseTime: 'Within 45-60 Mins' },
    { city: 'St. Croix Valley', county: 'Western WI Region', status: 'Commercial & Institutional', responseTime: 'Scheduled Projects' },
  ];

  const filteredLocations = locations.filter(loc => 
    loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.county.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="service-areas" className="bg-white py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson-700 bg-crimson-50 border border-crimson-300 px-3.5 py-1 rounded-full mb-3">
            <Navigation className="w-3.5 h-3.5 text-crimson-600" />
            <span>Western Wisconsin Regional Service Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-iron-950 tracking-tight">
            Chippewa Valley &amp; Western Wisconsin Coverage
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Headquartered at 3213 Louis Avenue, Suite G, Eau Claire, WI with fully equipped mobile fleets dispatched across Western Wisconsin.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Wisconsin city or county (e.g. Chippewa Falls, Menomonie)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-500/20 text-sm shadow-sm"
            />
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredLocations.map((loc, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 hover:bg-crimson-50/50 border border-slate-200 hover:border-crimson-400 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-base font-bold text-iron-950 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-crimson-600 shrink-0" />
                    {loc.city}
                  </h3>
                  <span className="text-[10px] uppercase font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {loc.county}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-crimson-700 font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse"></span>
                  <span>{loc.status}</span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {loc.responseTime}
                </span>
                <a
                  href="tel:7158353169"
                  className="font-bold text-crimson-700 hover:text-crimson-900"
                >
                  Dispatch &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Note */}
        <div className="mt-10 bg-slate-100 rounded-2xl p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto border border-slate-200">
          <p>
            <strong>Operating an industrial or commercial plant outside these cities?</strong> Through The Jamar Company and APi Group network, we service multi-million dollar mechanical and piping projects throughout Wisconsin and eastern Minnesota. Call <a href="tel:7158353169" className="text-crimson-700 font-black underline">(715) 835-3169</a> for engineering consultation.
          </p>
        </div>

      </div>
    </section>
  );
}
