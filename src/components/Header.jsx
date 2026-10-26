import React, { useState } from 'react';
import { Phone, Clock, ShieldCheck, MapPin, Menu, X, ChevronRight, ChevronDown, Award, Droplets, Flame, Wrench, Snowflake, Cpu, Layers } from 'lucide-react';

export default function Header({ onOpenCallModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const serviceDropdownItems = [
    { name: 'Commercial & High-Spec Plumbing', tag: 'Medical Gas & Backflow', icon: Droplets, href: '#services' },
    { name: 'HVAC Heating & Chiller Systems', tag: '24/7 Emergency Dispatch', icon: Flame, href: '#services' },
    { name: 'Commercial Refrigeration Systems', tag: 'Cold Storage & Chillers', icon: Snowflake, href: '#services' },
    { name: 'Building Automation & DDC Controls', tag: 'Energy Management', icon: Cpu, href: '#services' },
    { name: 'Custom Metal Fabrication & Piping', tag: 'Industrial Fabrication', icon: Layers, href: '#services' },
    { name: 'Hydronic Boiler & Radiant Systems', tag: 'High-Efficiency Loops', icon: Wrench, href: '#services' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top Engineering & Trust Announcement Bar */}
      <div className="bg-iron-950 text-slate-300 text-xs py-1.5 px-4 font-medium border-b border-iron-850">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-crimson-400 font-semibold tracking-wide whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson-500"></span>
              </span>
              24/7 MECHANICAL DISPATCH • EAU CLAIRE &amp; WESTERN WI
            </span>
            <span className="hidden md:inline text-iron-700">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-amberGold-400 shrink-0" />
              Eau Claire • Chippewa Falls • Menomonie • St. Croix Valley
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden lg:inline-flex items-center gap-1 text-amberGold-400 whitespace-nowrap font-semibold">
              <Award className="w-3.5 h-3.5 text-amberGold-400 shrink-0" />
              110+ Years of Excellence • Est. 1913 • UA Local 434 Union Craftsmen
            </span>
            <span className="flex items-center gap-1 text-slate-300 whitespace-nowrap">
              <Clock className="w-3 h-3 text-slate-400 shrink-0" />
              Emergency Response: (715) 835-3169
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Authentic Bartingale Mechanical Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none shrink-0" aria-label="Bartingale Mechanical Home">
          <img 
            src="/images/logo.png" 
            alt="Bartingale Mechanical - An APi Group Company" 
            className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* 5 Professional Separated Tabs inside Capsule */}
        <nav className="hidden lg:flex items-center bg-slate-100/90 p-1.5 rounded-full border border-slate-200/90 shadow-inner shrink-0">
          
          {/* Tab 1: Services (with Dropdown) */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <a 
              href="#services" 
              className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold transition-all duration-200 flex items-center gap-1 whitespace-nowrap ${
                servicesDropdownOpen 
                  ? 'bg-white text-crimson-700 shadow-sm' 
                  : 'text-slate-700 hover:text-crimson-700 hover:bg-white/80'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-crimson-700' : ''}`} />
            </a>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 space-y-1">
                  <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Industrial &amp; Commercial Capabilities
                  </div>
                  {serviceDropdownItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-crimson-50 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover/item:bg-crimson-100 flex items-center justify-center text-crimson-700 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-iron-950 group-hover/item:text-crimson-700 truncate">
                            {item.name}
                          </p>
                          <p className="text-[10px] text-slate-500 font-medium">
                            {item.tag}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <span className="w-px h-4 bg-slate-300/80 mx-0.5"></span>

          {/* Tab 2: Pricing / Estimator */}
          <a 
            href="#calculator" 
            className="px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold text-slate-700 hover:text-crimson-700 hover:bg-white hover:shadow-sm transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Pricing</span>
            <span className="text-[9px] uppercase tracking-wider bg-crimson-100 text-crimson-700 px-1.5 py-0.5 rounded font-black">Live</span>
          </a>

          <span className="w-px h-4 bg-slate-300/80 mx-0.5"></span>

          {/* Tab 3: Real Work (Projects & Craftsmanship) */}
          <a 
            href="#craftsmanship" 
            className="px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold text-slate-700 hover:text-crimson-700 hover:bg-white hover:shadow-sm transition-all duration-200 whitespace-nowrap"
          >
            Real Work
          </a>

          <span className="w-px h-4 bg-slate-300/80 mx-0.5"></span>

          {/* Tab 4: 110-Yr Heritage (About Us) */}
          <a 
            href="#about" 
            className="px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold text-slate-700 hover:text-crimson-700 hover:bg-white hover:shadow-sm transition-all duration-200 whitespace-nowrap"
          >
            About Us
          </a>

          <span className="w-px h-4 bg-slate-300/80 mx-0.5"></span>

          {/* Tab 5: Reviews & Areas */}
          <a 
            href="#reviews" 
            className="px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold text-slate-700 hover:text-crimson-700 hover:bg-white hover:shadow-sm transition-all duration-200 whitespace-nowrap"
          >
            Reviews
          </a>

        </nav>

        {/* Header CTAs */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Dispatch Phone (Call or Text) */}
          <div className="hidden sm:flex flex-col items-end text-right whitespace-nowrap">
            <span className="text-[11px] font-bold uppercase tracking-wider text-crimson-700 flex items-center gap-1 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-pulse"></span>
              24/7 Live Emergency Line
            </span>
            <a 
              href="tel:7158353169"
              onClick={(e) => {
                if (window.innerWidth >= 1024) {
                  e.preventDefault();
                  onOpenCallModal();
                }
              }}
              className="text-lg font-black text-iron-950 hover:text-crimson-700 transition-colors tracking-tight flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-crimson-600 shrink-0" />
              <span>(715) 835-3169</span>
            </a>
          </div>

          {/* Mobile Direct Tap Call Button */}
          <a
            href="tel:7158353169"
            className="sm:hidden flex items-center gap-1.5 bg-crimson-600 text-white px-3.5 py-2 rounded-lg font-bold text-sm shadow-md btn-emergency-glow whitespace-nowrap"
            aria-label="Call Bartingale Mechanical Dispatch"
          >
            <Phone className="w-4 h-4 fill-white shrink-0" />
            <span>(715) 835-3169</span>
          </a>

          {/* Desktop "Book / Estimate" Button */}
          <button
            onClick={() => {
              const formEl = document.getElementById('dispatch-form');
              if (formEl) {
                formEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden xl:flex items-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            <span>Request Dispatch</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Separated Tab Buttons */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="p-3 bg-crimson-50 rounded-xl border border-crimson-200 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-crimson-800">EMERGENCY HVAC OR PIPING FAILURE?</p>
              <p className="text-sm font-black text-iron-950">Dispatch Line: (715) 835-3169</p>
            </div>
            <a
              href="tel:7158353169"
              className="px-3.5 py-1.5 bg-crimson-600 text-white text-xs font-bold rounded-lg shadow-sm"
            >
              Call
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-slate-700 pt-2">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-crimson-400 hover:bg-crimson-50 transition-colors flex items-center gap-2"
            >
              <Droplets className="w-4 h-4 text-crimson-600" />
              <span>Services</span>
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-crimson-400 hover:bg-crimson-50 transition-colors flex items-center justify-between"
            >
              <span>Pricing Guide</span>
              <span className="text-[10px] bg-crimson-100 text-crimson-700 px-1 rounded font-bold">Live</span>
            </a>
            <a 
              href="#craftsmanship" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-crimson-400 hover:bg-crimson-50 transition-colors flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-amberGold-600" />
              <span>Real Work</span>
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-crimson-400 hover:bg-crimson-50 transition-colors flex items-center gap-2"
            >
              <Wrench className="w-4 h-4 text-crimson-600" />
              <span>110-Yr Heritage</span>
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-crimson-400 hover:bg-crimson-50 transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-amberGold-500" />
              <span>Reviews</span>
            </a>
            <a 
              href="#dispatch-form" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-crimson-600 text-white font-bold hover:bg-crimson-700 transition-colors flex items-center justify-between"
            >
              <span>Claim Web Voucher</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
