import React, { useState } from 'react';
import { Camera, ShieldCheck, Award, Eye, Wrench, CheckCircle, X } from 'lucide-react';

export default function CraftsmanshipGallery({ onOpenCallModal }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      image: '/images/boiler_piping.jpg',
      title: 'Precision Hydronic Boiler Loop & Steam Header',
      category: 'Industrial Steam & Boilers',
      caption: 'Custom carbon steel boiler header with ASME-certified welded joints, air separators, and multi-zone distribution pumps in an Eau Claire educational facility.',
    },
    {
      image: '/images/hvac_chiller.jpg',
      title: 'Multi-Ton Commercial Chiller & Condenser Array',
      category: 'Commercial HVAC',
      caption: 'High-efficiency rooftop chiller installation engineered with vibration spring isolators, aerodynamic duct plenums, and low-ambient wind baffles.',
    },
    {
      image: '/images/hero_technicians.jpg',
      title: 'UA Local 434 Commissioning & Diagnostics',
      category: 'Union Steamfitters',
      caption: 'Certified union technicians conducting computerized airflow balancing, static pressure testing, and combustion safety analysis.',
    },
    {
      image: '/images/commercial_plumbing.jpg',
      title: 'Commercial Domestic Water Manifold & Backflow',
      category: 'Sanitary Plumbing',
      caption: 'High-volume commercial copper distribution manifold with dual reduced pressure zone (RPZ) backflow assemblies for total water safety.',
    },
    {
      image: '/images/copper_valves.png',
      title: 'Laser-Straight Copper Soldering & Ball Valves',
      category: 'Piping & Valves',
      caption: 'Heavy-duty full-port brass isolation ball valves soldered with lead-free silver alloy for industrial cooling loops in western Wisconsin.',
    },
    {
      image: '/images/fleet_van.jpg',
      title: '24/7 Mobile Mechanical Diagnostic Fleet',
      category: 'Eau Claire Dispatch',
      caption: 'Our mobile trucks carry digital manifold gauges, combustion analyzers, replacement circulators, and pipe repair fittings for immediate field resolution.',
    },
  ];

  return (
    <section id="craftsmanship" className="bg-iron-950 py-16 sm:py-24 text-white border-b border-iron-850 scroll-mt-20 relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#c8102e_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson-400 bg-iron-900/80 border border-crimson-500/40 px-3 py-1 rounded-full mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Engineering Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Craftsmanship In Action • Wisconsin Installations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              Inspect real mechanical, piping, and HVAC projects completed across Eau Claire and the Chippewa Valley. Built to institutional standards.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 hidden sm:inline">100% Real Wisconsin Installations</span>
            <a
              href="tel:7158353169"
              className="bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              <span>Request On-Site Assessment</span>
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-iron-900 border border-iron-800 hover:border-crimson-500/60 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iron-950 via-transparent to-black/10"></div>
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-iron-950/80 backdrop-blur-md text-crimson-300 text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-crimson-500/30">
                  {item.category}
                </span>

                {/* Hover zoom eye */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-iron-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-crimson-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-iron-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-amberGold-400 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Project
                  </span>
                  <span className="text-crimson-400 font-bold group-hover:underline">Inspect</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="max-w-3xl w-full bg-iron-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-iron-950/80 text-white flex items-center justify-center hover:bg-crimson-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.title} 
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-3 bg-iron-900 text-white">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-crimson-400 bg-crimson-950/80 px-2.5 py-0.5 rounded border border-crimson-500/30">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs text-slate-400">• Western Wisconsin Project</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedPhoto.caption}
              </p>
              
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Planning a facility mechanical project?</span>
                <a
                  href="tel:7158353169"
                  className="bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-all"
                >
                  Call (715) 835-3169
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
