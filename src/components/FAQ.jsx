import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Does Bartingale Mechanical provide 24/7 emergency service for commercial HVAC and piping failures?',
      a: 'Yes. We maintain active, on-call mechanical crews 24 hours a day, 365 days a year across Western Wisconsin. When a critical rooftop chiller trips, an industrial boiler goes offline, or high-pressure water piping ruptures, call our emergency dispatch line at (715) 835-3169. Our trucks roll equipped with digital diagnostic instruments, recovery units, and emergency isolation fittings to minimize downtime.',
    },
    {
      q: 'What trade unions do your technicians belong to, and what are their certifications?',
      a: 'Our craftspeople are proud members of UA Local 434 (Plumbers, Steamfitters, and HVAC/R Service Technicians) and the Sheet Metal Workers International Association (SMWIA). Every journeyman completes a rigorous 5-year apprenticeship encompassing over 8,500 hours of accredited on-the-job and classroom technical training, alongside state master plumbing licenses, medical gas certifications, and ASME pipe welding credentials.',
    },
    {
      q: 'Can you fabricate custom industrial ductwork and heavy-gauge sheet metal in-house?',
      a: 'Yes. Unlike contractors who outsource ductwork to third parties, Bartingale operates a fully equipped sheet metal fabrication shop directly at our Eau Claire facility on Louis Avenue. With automated CNC plasma tables, spiral duct formers, and heavy-gauge brakes, we fabricate custom SMACNA-compliant ducting, industrial exhaust plenums, and architectural flashing with rapid turnaround.',
    },
    {
      q: 'What are the tangible financial benefits of retrofitting DDC Building Automation Controls?',
      a: 'Legacy pneumatic or uncoordinated standalone thermostats result in simultaneous heating and cooling, runaway energy bills, and persistent tenant complaints. Our direct digital control (DDC) building automation systems centralize scheduling, implement automated night/weekend setbacks, optimize economizer dampers, and provide remote alarm notifications — typically reducing facility energy expenditures by 15% to 30%.',
    },
    {
      q: 'How does Bartingale’s affiliation with The Jamar Company and APi Group benefit local clients?',
      a: 'In 2021, Bartingale joined The Jamar Company and APi Group family. This structure gives our western Wisconsin clients the best of both worlds: personal, attentive local service from the Eau Claire team they have trusted for decades, backed by multi-million dollar bonding capacity, virtual design construction (VDC/BIM) technology, and the safety culture of an international engineering organization.',
    },
    {
      q: 'Do you offer customized preventive maintenance agreements for commercial properties?',
      a: 'Yes. We tailor quarterly, semi-annual, and annual preventive maintenance programs for healthcare clinics, school districts, manufacturing plants, and retail plazas. Regular filter rotations, motor megohmmeter checks, coil cleanings, and combustion analyses dramatically extend equipment service life, prevent catastrophic mid-winter freeze-ups, and ensure factory warranty compliance.',
    },
  ];

  return (
    <section id="faq" className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson-700 bg-crimson-100/80 border border-crimson-300 px-3.5 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-crimson-600" />
            <span>Clear Answers from Union Mechanical Engineers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-iron-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Straightforward technical explanations regarding commercial HVAC contracts, emergency response, and union credentials.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-iron-950">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-crimson-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-10 p-6 bg-crimson-50/70 rounded-2xl border border-crimson-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-iron-950">Have a specific commercial mechanical or engineering question?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Call our Eau Claire main office directly to consult with a project manager.</p>
          </div>
          <a
            href="tel:7158353169"
            className="shrink-0 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            <span>(715) 835-3169</span>
          </a>
        </div>

      </div>
    </section>
  );
}
