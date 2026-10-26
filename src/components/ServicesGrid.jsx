import React, { useState } from 'react';
import { Droplets, Flame, Wrench, Snowflake, Cpu, Layers, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function ServicesGrid({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const allServices = [
    {
      id: 'commercial_plumbing',
      category: 'plumbing',
      title: 'Commercial & High-Spec Facility Plumbing',
      tag: 'Medical Gas & Backflow',
      image: '/images/commercial_plumbing.jpg',
      points: [
        'State-certified annual backflow preventer testing & installation',
        'Healthcare NFPA 99 medical gas piping and certified braze joints',
        'High-capacity commercial water heaters & recirculating loops',
        'Industrial grease interceptors, lift stations, and drain jetting',
      ],
      description: 'From multi-story hospitals to manufacturing production floors, our licensed union plumbers engineer sanitary, code-compliant, high-volume water and waste systems.',
    },
    {
      id: 'commercial_hvac',
      category: 'hvac',
      title: 'Commercial HVAC, Rooftop Units & Chillers',
      tag: '24/7 Breakdown Dispatch',
      image: '/images/rooftop_hvac.jpg',
      points: [
        'Packaged rooftop units (RTUs), chillers, and split DX systems',
        'Economizer optimization, ventilation balancing, and IAQ filtration',
        'Computerized combustion analysis and heat exchanger testing',
        'Custom preventive maintenance agreements to protect capital equipment',
      ],
      description: 'Keep your tenants, workforce, and sensitive operations comfortable. Bartingale delivers rapid emergency response and factory-grade maintenance on all commercial HVAC equipment.',
    },
    {
      id: 'boiler_piping',
      category: 'piping',
      title: 'Hydronic Boilers & High-Pressure Process Piping',
      tag: 'Steam & High-Pressure',
      image: '/images/boiler_piping.jpg',
      points: [
        'ASME section IX certified pipe welding in carbon steel & stainless',
        'Steam boiler plants, condensates, deaerators, and boiler feedwater',
        'Hydronic in-floor radiant heating manifolds and variable circulators',
        'Laser-guided pipe alignment and vibration isolation mounting',
      ],
      description: 'Steam and hydronic heating systems demand rigorous engineering. Our UA Local 434 steamfitters fabricate and install robust piping that withstands decades of extreme thermal cycling.',
    },
    {
      id: 'refrigeration',
      category: 'refrigeration',
      title: 'Industrial Refrigeration & Cold Storage',
      tag: 'Perishable Protection',
      image: '/images/hvac_chiller.jpg',
      points: [
        'Supermarket parallel rack systems, walk-in freezers, and reach-ins',
        'Process fluid chillers for brewing, dairy, and manufacturing',
        'Electronic expansion valves (EEVs) and subcooling charge tuning',
        '24/7 critical temperature monitoring and rapid compressor replacement',
      ],
      description: 'A refrigeration failure can wipe out tens of thousands of dollars in inventory. Bartingale protects Wisconsin food processors, distributors, and supermarkets with 24/7 dispatch.',
    },
    {
      id: 'building_automation',
      category: 'automation',
      title: 'Building Automation Systems & DDC Controls',
      tag: 'Energy Optimization',
      image: '/images/copper_valves.png',
      points: [
        'Open-protocol BACnet, LonWorks, and Modbus control architecture',
        'Remote cloud dashboard monitoring and automated alarm thresholds',
        'Pneumatic-to-direct digital control (DDC) modernizations',
        'Time-of-day temperature setback algorithms that reduce utility bills',
      ],
      description: 'Transform uncoordinated mechanical equipment into an intelligently orchestrated system. Cut facility energy consumption by 15% to 30% while eliminating comfort complaints.',
    },
    {
      id: 'sheet_metal',
      category: 'fabrication',
      title: 'Custom Sheet Metal & Precision Fabrication',
      tag: 'In-House Eau Claire Shop',
      image: '/images/fleet_van.jpg',
      points: [
        'Fully equipped Eau Claire sheet metal shop with CNC plasma tables',
        'Heavy-gauge industrial dust collection and fume extraction ducting',
        'Architectural metal flashing, louvers, and weatherproof equipment curbs',
        'SMACNA-compliant fabrication ensuring minimal static pressure loss',
      ],
      description: 'Because we fabricate custom ductwork in our own Eau Claire facility, we eliminate project delays, guarantee precise fitment, and adapt quickly to field design changes.',
    },
  ];

  const categoryTabs = [
    { id: 'all', label: 'All Capabilities (6)', icon: Sparkles },
    { id: 'plumbing', label: 'Commercial Plumbing', icon: Droplets },
    { id: 'hvac', label: 'HVAC & Chillers', icon: Flame },
    { id: 'piping', label: 'Boilers & Steam Piping', icon: Wrench },
    { id: 'refrigeration', label: 'Refrigeration', icon: Snowflake },
    { id: 'automation', label: 'Building Automation', icon: Cpu },
  ];

  const displayedServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(s => s.category === activeTab);

  const handleSelect = (serviceId) => {
    onSelectService(serviceId);
    const target = document.getElementById('calculator');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-slate-50 py-14 sm:py-20 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-widest font-bold text-crimson-700 bg-crimson-100/70 border border-crimson-300 px-3 py-1 rounded-full inline-block mb-3">
            Comprehensive Mechanical Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-iron-950 tracking-tight">
            Complete Mechanical Contracting for Western Wisconsin
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Backed by 110+ years of institutional experience, our union-trained crews deliver turn-key mechanical solutions from engineering design through 24/7 service.
          </p>
        </div>

        {/* Professional Separated Category Tabs */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center bg-white p-1.5 rounded-full border border-slate-200 shadow-sm gap-1">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-crimson-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-iron-950 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group animate-in fade-in duration-200"
            >
              <div>
                {/* Image Header with Badge Overlay */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-iron-950/80 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-crimson-700/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {service.tag}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-black text-iron-950 group-hover:text-crimson-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-xs uppercase font-bold text-slate-400 mb-2">
                      Key Technical Deliverables:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-crimson-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0 mt-2">
                <button
                  type="button"
                  onClick={() => handleSelect(service.id)}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-crimson-600 text-slate-800 hover:text-white font-extrabold py-3 px-4 rounded-xl transition-all duration-200 group-hover:shadow-md text-xs sm:text-sm"
                >
                  <span>Check Pricing &amp; Dispatch</span>
                  <ArrowRight className="w-4 h-4 text-amberGold-500 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
