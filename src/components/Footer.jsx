import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, Building2 } from 'lucide-react';

export default function Footer({ onOpenCallModal }) {
  return (
    <footer className="bg-iron-950 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-iron-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="bg-white/95 rounded-xl p-3 inline-block shadow-md">
              <img 
                src="/images/logo.png" 
                alt="Bartingale Mechanical - An APi Group Company" 
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Western Wisconsin’s premier mechanical contractor since 1913. Commercial HVAC, industrial piping, commercial plumbing, refrigeration, and building automation.
            </p>
            <div className="flex items-center gap-2 text-xs text-amberGold-400 font-semibold">
              <Award className="w-4 h-4 text-amberGold-400" />
              <span>110+ Years of Excellence • Est. 1913</span>
            </div>
          </div>

          {/* Col 2: Mechanical Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-iron-800 pb-2">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-crimson-400 transition-colors">Commercial &amp; High-Spec Plumbing</a></li>
              <li><a href="#services" className="hover:text-crimson-400 transition-colors">Commercial Rooftop HVAC &amp; Chillers</a></li>
              <li><a href="#services" className="hover:text-crimson-400 transition-colors">Hydronic Boilers &amp; Process Steam Piping</a></li>
              <li><a href="#services" className="hover:text-crimson-400 transition-colors">Industrial Refrigeration &amp; Cold Storage</a></li>
              <li><a href="#services" className="hover:text-crimson-400 transition-colors">Building Automation Systems (DDC)</a></li>
              <li><a href="#services" className="hover:text-crimson-400 transition-colors">Custom Sheet Metal &amp; Plasma Fabrication</a></li>
              <li><a href="#services" className="hover:text-crimson-400 transition-colors">State-Certified Backflow Testing</a></li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-iron-800 pb-2">
              Western WI Coverage
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Eau Claire, WI (Headquarters &amp; Shop)</li>
              <li>Chippewa Falls &amp; Chippewa County</li>
              <li>Menomonie &amp; Dunn County</li>
              <li>Altoona &amp; Fall Creek</li>
              <li>Hudson &amp; St. Croix Valley</li>
              <li>Rice Lake &amp; Barron County</li>
              <li>River Falls &amp; Black River Falls</li>
            </ul>
          </div>

          {/* Col 4: NAP & Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-iron-800 pb-2">
              Facility &amp; Dispatch
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-crimson-400 shrink-0 mt-0.5" />
                <span>
                  3213 Louis Avenue, Suite G<br />
                  Eau Claire, Wisconsin 54703
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-crimson-400 shrink-0" />
                <a href="tel:7158353169" className="font-bold text-white hover:text-crimson-400 transition-colors text-sm whitespace-nowrap">
                  (715) 835-3169
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-crimson-400 shrink-0" />
                <a href="mailto:info@bartingalemechanical.com" className="hover:text-crimson-400 transition-colors">
                  info@bartingalemechanical.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-iron-800">
                <Clock className="w-4 h-4 text-amberGold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">Emergency Response:</span>
                  <span>24/7/365 On-Call Dispatch</span>
                  <span className="block text-crimson-400 font-semibold mt-0.5">UA Local 434 Union Certified</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-iron-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Bartingale Mechanical Inc. (An APi Group Company / The Jamar Company). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">UA Local 434 Plumbers &amp; Steamfitters</span>
            <span>•</span>
            <span className="text-amberGold-400">Founded 1913</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
