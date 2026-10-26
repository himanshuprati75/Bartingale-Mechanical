import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, ShieldCheck, DollarSign, Clock, Zap, CheckCircle2, AlertCircle, Sparkles, Flame, Droplets, Wrench, Snowflake, Cpu, Layers } from 'lucide-react';

export default function CostCalculator({ selectedIssue, onSelectIssue, onApplyVoucher }) {
  const serviceOptions = [
    {
      id: 'commercial_hvac',
      category: 'hvac',
      name: 'Commercial Rooftop HVAC & Chiller Diagnostic',
      baseRange: '$149 Diagnostic / $1,200 - $4,500 Typical Repair',
      dispatchTime: 'Immediate Western WI Dispatch (Under 60 Min)',
      typicalSavings: 'Eliminates Costly Facility Downtime',
      description: 'Comprehensive electrical, compressor, economizer, and refrigerant charge analysis by UA Local 434 technicians.',
    },
    {
      id: 'boiler_piping',
      category: 'piping',
      name: 'Hydronic Boiler & High-Pressure Steam Piping',
      baseRange: '$189 Diagnostic / $2,500 - $8,900 Service',
      dispatchTime: '24/7 Priority Steamfitter Dispatch',
      typicalSavings: '20% - 35% System Longevity & Fuel Efficiency',
      description: 'Primary/secondary hydronic loop testing, ASME certified pipe welding, steam trap testing, and refractory tuning.',
    },
    {
      id: 'commercial_plumbing',
      category: 'plumbing',
      name: 'Commercial Plumbing & Backflow Certification',
      baseRange: '$129 - $380 / Project Scope Dependent',
      dispatchTime: 'Same-Day Eau Claire & Chippewa Valley',
      typicalSavings: 'Guaranteed State & Municipal Code Compliance',
      description: 'State-certified backflow preventer testing, commercial water heater installations, drain clearing, and medical gas lines.',
    },
    {
      id: 'refrigeration',
      category: 'refrigeration',
      name: 'Industrial Refrigeration & Cold Storage Chillers',
      baseRange: '$199 Diagnostic / Custom Maintenance Agreements',
      dispatchTime: 'Rapid Emergency Response (Protects Inventory)',
      typicalSavings: 'Prevents Tens of Thousands in Perishable Spoilage',
      description: 'Supermarket racks, walk-in coolers, industrial chillers, refrigerant leak detection, and compressor rebuilds.',
    },
    {
      id: 'building_automation',
      category: 'automation',
      name: 'Building Automation Systems & DDC Controls',
      baseRange: '$1,500 - $12,000 Modular Retrofits',
      dispatchTime: 'Comprehensive Energy Audit Scheduled',
      typicalSavings: '15% - 30% Annual Energy Consumption Savings',
      description: 'Centralized computerized temperature scheduling, BACnet integration, pneumatic to digital conversion, and remote diagnostics.',
    },
    {
      id: 'sheet_metal',
      category: 'fabrication',
      name: 'Custom Metal Fabrication & Industrial Ductwork',
      baseRange: 'Free Engineering Estimate / Custom CAD Pricing',
      dispatchTime: 'Precision In-House Shop Turnaround',
      typicalSavings: 'Custom Engineered Fit Without Field Re-work',
      description: 'Computerized plasma cutting, architectural metal, heavy-gauge industrial exhaust, and cleanroom ventilation ducting.',
    },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [activeService, setActiveService] = useState(selectedIssue || 'commercial_hvac');
  const [facilityType, setFacilityType] = useState('commercial');
  const [urgency, setUrgency] = useState('immediate');

  const filterTabs = [
    { id: 'all', label: 'All Services (6)' },
    { id: 'hvac', label: 'HVAC & Chillers' },
    { id: 'piping', label: 'Boilers & Piping' },
    { id: 'plumbing', label: 'Commercial Plumbing' },
    { id: 'refrigeration', label: 'Refrigeration' },
    { id: 'automation', label: 'DDC Controls' },
  ];

  useEffect(() => {
    if (selectedIssue) {
      setActiveService(selectedIssue);
    }
  }, [selectedIssue]);

  const currentService = serviceOptions.find(s => s.id === activeService) || serviceOptions[0];

  const filteredOptions = activeCategory === 'all'
    ? serviceOptions
    : serviceOptions.filter(s => s.category === activeCategory);

  const handleApplyToForm = () => {
    onSelectIssue(activeService);
    if (onApplyVoucher) {
      onApplyVoucher({
        service: currentService.name,
        serviceId: activeService,
        voucherApplied: true,
      });
    }
    const formElement = document.getElementById('dispatch-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="bg-slate-100/80 py-12 sm:py-16 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson-700 bg-crimson-100/70 border border-crimson-300 px-3 py-1 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5 text-crimson-600" />
            <span>Interactive Mechanical Estimator &amp; ROI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-iron-950 tracking-tight">
            Transparent Commercial &amp; Mechanical Pricing Guide
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Century-proven union mechanical engineering. Zero hidden truck charges. Honest scope assessments.
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Options Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-6">
              
              {/* Category Filter Tabs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Step 1: Filter &amp; Select Mechanical System
                </label>
                
                {/* 6 Separated Category Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-3">
                  {filterTabs.map((tab) => {
                    const isSelected = activeCategory === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveCategory(tab.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                          isSelected
                            ? 'bg-crimson-600 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-600 hover:text-iron-950 hover:bg-slate-200'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {filteredOptions.map((service) => {
                    const isSelected = activeService === service.id;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => {
                          setActiveService(service.id);
                          onSelectIssue(service.id);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          isSelected 
                            ? 'bg-crimson-50 border-crimson-600 text-crimson-900 shadow-sm ring-1 ring-crimson-600' 
                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className="text-xs font-bold">{service.name}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-crimson-600 shrink-0" />}
                        </div>
                        <span className="text-xs font-extrabold text-amberGold-600">{service.baseRange}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Facility Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Step 2: Facility / Property Classification
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'commercial', label: 'Commercial Office / Retail' },
                    { id: 'industrial', label: 'Industrial / Manufacturing' },
                    { id: 'institutional', label: 'Healthcare / Education' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setFacilityType(p.id)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                        facilityType === p.id
                          ? 'bg-iron-900 text-white border-iron-900 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Step 3: Response Priority
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'immediate', label: 'Active Emergency (24/7)' },
                    { id: 'scheduled', label: 'Next-Day Service Route' },
                    { id: 'proposal', label: 'Project Bid / RFP' },
                  ].map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setUrgency(u.id)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                        urgency === u.id
                          ? 'bg-crimson-600 text-white border-crimson-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guarantee Note */}
              <div className="p-3.5 bg-amberGold-50/70 rounded-xl border border-amberGold-200 text-xs text-amberGold-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amberGold-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Union Craftsmanship Assurance:</strong> All mechanical, piping, and sheet metal works are executed by certified UA Local 434 and SMWIA craftsmen adhering strictly to ASME, ASHRAE, and Wisconsin state codes.
                </p>
              </div>

            </div>

            {/* Right Value & Estimate Output Box (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-iron-950 via-iron-900 to-iron-950 text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Mechanical Estimate &amp; SLA
                  </span>
                  <span className="text-xs bg-crimson-600/30 text-crimson-400 border border-crimson-500/30 px-2 py-0.5 rounded font-black uppercase">
                    Eau Claire Hub
                  </span>
                </div>

                {/* Estimate Title */}
                <div className="mt-4">
                  <h3 className="text-lg font-black text-white leading-tight">
                    {currentService.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {currentService.description}
                  </p>
                </div>

                {/* Big Price Display */}
                <div className="my-6 p-4 rounded-2xl bg-iron-900/90 border border-slate-700/80">
                  <span className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                    Typical Cost &amp; Diagnostic Scope:
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 via-rose-300 to-amberGold-400">
                    {currentService.baseRange}
                  </div>
                  <div className="mt-2 text-xs text-amberGold-300 flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-amberGold-400" />
                    <span>{currentService.typicalSavings}</span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amberGold-400" />
                      Expected Dispatch:
                    </span>
                    <span className="font-bold text-white text-right">
                      {currentService.dispatchTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-crimson-400" />
                      Labor &amp; Union Standards:
                    </span>
                    <span className="font-bold text-white">
                      UA Local 434 Certified
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-crimson-400" />
                      Priority Web Dispatch:
                    </span>
                    <span className="font-bold text-crimson-400 bg-crimson-950/60 border border-crimson-800/80 px-2 py-0.5 rounded">
                      -$50 Diagnostic Credit
                    </span>
                  </div>
                </div>
              </div>

              {/* Reciprocity Transition CTA */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleApplyToForm}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-crimson-700 via-crimson-600 to-crimson-700 hover:from-crimson-600 hover:to-crimson-500 text-white font-black py-4 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 btn-emergency-glow"
                >
                  <span>Apply Estimate &amp; Lock In Priority Dispatch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Queues direct to Eau Claire mechanical desk. Zero credit card needed.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
