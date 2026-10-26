import React from 'react';
import { Star, CheckCircle2, Quote, MapPin } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Mark D.',
      location: 'Chippewa Falls, WI',
      title: 'Plant Operations Director',
      project: 'Industrial Chiller Emergency Rebuild & Process Piping',
      text: 'When our process cooling loop failed on a Friday night, our entire packaging line was threatened with shut down. Bartingale Mechanical had two union steamfitters on site within 45 minutes. They isolated the ruptured section, welded in replacement spool pieces, and had us running before the morning shift. Over 100 years of experience truly shows in their speed and professionalism.',
      rating: 5,
      verified: true,
      tag: 'Industrial Facility',
    },
    {
      name: 'Sarah L.',
      location: 'Eau Claire, WI',
      title: 'Facility Operations Manager',
      project: 'Medical Gas Certification & Boiler System Overhaul',
      text: 'Managing healthcare HVAC and sanitary plumbing requires flawless precision. Bartingale Mechanical handles our quarterly backflow certifications, boiler tune-ups, and DDC controls. Their technicians are always polite, exceptionally clean, and strictly adhere to infection control standards. We wouldn’t trust anyone else in western Wisconsin.',
      rating: 5,
      verified: true,
      tag: 'Healthcare Complex',
    },
    {
      name: 'David W.',
      location: 'Altoona, WI',
      title: 'Commercial Property Owner',
      project: 'Multi-Tenant Rooftop Unit (RTU) Upgrades & Building Automation',
      text: 'Replacing 8 aging rooftop units on our commercial plaza was a massive undertaking. Bartingale’s engineering team managed the crane lift, gas lines, and custom sheet metal curbs with zero disruption to our retail tenants. The new digital automation system has already shaved 22% off our energy bills.',
      rating: 5,
      verified: true,
      tag: 'Commercial Plaza',
    },
    {
      name: 'Thomas R.',
      location: 'Menomonie, WI',
      title: 'General Contractor',
      project: 'Turnkey Commercial Mechanical & Sheet Metal Fabrication',
      text: 'Having Bartingale’s custom sheet metal shop right in Eau Claire saves us weeks on construction schedules. When field duct modifications are needed, their shop turns fittings around the same afternoon. Their UA Local 434 crews work seamlessly with our carpenters and electricians.',
      rating: 5,
      verified: true,
      tag: 'General Contractor',
    },
  ];

  return (
    <section id="reviews" className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson-700 bg-crimson-100/80 border border-crimson-300 px-3.5 py-1 rounded-full mb-3">
            <Star className="w-3.5 h-3.5 fill-amberGold-500 text-amberGold-500" />
            <span>Documented Institutional Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-iron-950 tracking-tight">
            Trusted by Western Wisconsin Facility Leaders
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Read direct feedback from healthcare directors, plant managers, and property owners across Eau Claire, Chippewa Falls, and Menomonie.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Meta: Stars, Project Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amberGold-400 text-amberGold-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-crimson-700 bg-crimson-50 border border-crimson-200 px-2.5 py-0.5 rounded-full">
                    {rev.tag}
                  </span>
                </div>

                {/* Project Subhead */}
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Project: {rev.project}
                </span>

                {/* Body Text */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-iron-950">
                    {rev.name} <span className="text-xs font-normal text-slate-500">({rev.title})</span>
                  </h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-crimson-600" />
                    <span>{rev.location}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-crimson-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Trust Badge Bar */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amberGold-50 rounded-xl text-amberGold-600 font-black text-xl">
              110+ YRS
            </div>
            <div>
              <p className="text-sm font-black text-iron-950">Western Wisconsin’s Leading Mechanical Partner</p>
              <p className="text-xs text-slate-500">UA Local 434 Union Certified • APi Group / The Jamar Company</p>
            </div>
          </div>

          <a
            href="tel:7158353169"
            className="text-xs sm:text-sm font-bold text-crimson-700 bg-crimson-50 border border-crimson-200 px-5 py-2.5 rounded-xl hover:bg-crimson-100 transition-colors whitespace-nowrap"
          >
            Call Dispatch (715) 835-3169
          </a>
        </div>

      </div>
    </section>
  );
}
