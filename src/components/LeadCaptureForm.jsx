import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, ShieldCheck, Clock, Ticket, AlertTriangle, Send, Sparkles, Building2 } from 'lucide-react';

export default function LeadCaptureForm({ selectedIssue, voucherData, onOpenCallModal }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    city: 'Eau Claire',
    service: 'commercial_hvac',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (selectedIssue) {
      setFormData(prev => ({ ...prev, service: selectedIssue }));
    }
  }, [selectedIssue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const randomTicket = 'BM-WI-' + Math.floor(1000 + Math.random() * 9000);
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  return (
    <section id="dispatch-form" className="bg-white py-12 sm:py-16 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reciprocity Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson-800 bg-crimson-50 border border-crimson-300 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-crimson-600" />
            <span>Priority Commercial Dispatch + $50 Web Credit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-iron-950 tracking-tight">
            Schedule Mechanical Service &amp; Project Estimation
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Submit your facility requirements below to lock in your <strong className="text-crimson-700 font-bold">$50 Web Courtesy Discount</strong> and immediate engineering queue assignment.
          </p>
        </div>

        {/* Voucher Banner */}
        <div className="bg-gradient-to-r from-crimson-700 via-crimson-800 to-iron-950 rounded-2xl p-4 sm:p-5 text-white mb-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <Ticket className="w-5 h-5 text-amberGold-300" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-amberGold-300 block">
                Exclusive Web Courtesy
              </span>
              <p className="text-sm font-bold text-white">
                $50 OFF Any Commercial Diagnostic / Service Call
              </p>
            </div>
          </div>
          <div className="text-center sm:text-right shrink-0">
            <span className="text-[11px] font-mono bg-iron-950/80 text-crimson-200 px-3 py-1 rounded-md border border-crimson-400/40 inline-block">
              CODE: BARTINGALE50-DISPATCH
            </span>
            <span className="block text-[10px] text-slate-300 mt-0.5">Auto-applied upon dispatch</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          
          {submitted ? (
            /* Instant Confirmation State */
            <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-crimson-100 text-crimson-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-crimson-700 bg-crimson-100 px-3 py-1 rounded-full">
                  Ticket #{ticketId} Active
                </span>
                <h3 className="text-2xl font-black text-iron-950 mt-2">
                  Mechanical Dispatch Assigned!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Thank you, <strong className="text-iron-950">{formData.name}</strong> {formData.company && `from ${formData.company}`}. A Bartingale Mechanical dispatcher is reviewing your request for <strong className="text-iron-950">{formData.city}, WI</strong>.
                </p>
              </div>

              {/* Status Board */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service Category:</span>
                  <span className="font-bold text-iron-900 uppercase">{formData.service.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dispatch Hub:</span>
                  <span className="font-bold text-iron-900">{formData.city}, WI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Web Credit:</span>
                  <span className="font-bold text-crimson-700">-$50.00 Applied</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Response SLA:</span>
                  <span className="font-bold text-crimson-700">Within 15 Minutes</span>
                </div>
              </div>

              {/* Emergency Callout */}
              <div className="pt-2">
                <p className="text-xs text-crimson-700 font-bold mb-2">
                  Critical heating, refrigeration, or piping shutdown?
                </p>
                <a
                  href="tel:7158353169"
                  className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white font-extrabold px-6 py-3 rounded-xl shadow-lg transition-all btn-emergency-glow"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call (715) 835-3169 for Priority Live Line</span>
                </a>
              </div>
            </div>
          ) : (
            /* Lead Capture Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name / Contact Person <span className="text-crimson-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Henderson"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-200 outline-none text-sm transition-all"
                  />
                </div>

                {/* Company / Facility Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Company / Facility Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Chippewa Medical Center / Residence"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-200 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number <span className="text-crimson-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. (715) 555-0144"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-200 outline-none text-sm transition-all"
                  />
                </div>

                {/* City Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Location / City
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-200 outline-none text-sm bg-white transition-all font-medium"
                  >
                    <option value="Eau Claire">Eau Claire, WI (Hub)</option>
                    <option value="Chippewa Falls">Chippewa Falls, WI</option>
                    <option value="Menomonie">Menomonie, WI</option>
                    <option value="Altoona">Altoona, WI</option>
                    <option value="Hudson">Hudson, WI</option>
                    <option value="Rice Lake">Rice Lake, WI</option>
                    <option value="River Falls">River Falls, WI</option>
                    <option value="Fall Creek">Fall Creek, WI</option>
                    <option value="Black River Falls">Black River Falls, WI</option>
                    <option value="Other Western WI">Other Western Wisconsin</option>
                  </select>
                </div>

                {/* Primary Service */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-200 outline-none text-sm bg-white transition-all font-medium"
                  >
                    <option value="commercial_hvac">Commercial HVAC / Rooftop Unit</option>
                    <option value="boiler_piping">Hydronic Boiler &amp; Steam Piping</option>
                    <option value="commercial_plumbing">Commercial Plumbing &amp; Backflow</option>
                    <option value="refrigeration">Chillers &amp; Industrial Refrigeration</option>
                    <option value="building_automation">Building Automation &amp; DDC Controls</option>
                    <option value="sheet_metal">Sheet Metal &amp; Custom Fabrication</option>
                  </select>
                </div>
              </div>

              {/* Issue Details / Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Scope of Work / Emergency Symptoms
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Rooftop unit compressor locked up, need backflow certification, hydronic loop losing pressure, bidding on new fabrication..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-200 outline-none text-sm transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-crimson-700 via-crimson-800 to-iron-950 hover:from-crimson-600 hover:to-crimson-800 text-white font-black py-4 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 text-base"
                >
                  <Send className="w-5 h-5 text-amberGold-400" />
                  <span>Submit Dispatch Request &amp; Lock In $50 Credit</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-slate-500 border-t border-slate-200 gap-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-crimson-600" />
                  Confidential Commercial Inquiry
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-amberGold-600" />
                  Typical 15-Minute Response Window
                </span>
                <span className="flex items-center gap-1">
                  <Ticket className="w-4 h-4 text-crimson-600" />
                  $50 Web Courtesy Applied
                </span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
