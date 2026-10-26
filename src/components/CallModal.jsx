import React, { useState } from 'react';
import { Phone, Copy, Check, X, Clock, ShieldCheck, UserCheck, Building2, AlertCircle } from 'lucide-react';

export default function CallModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [callbackRequested, setCallbackRequested] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState('');

  if (!isOpen) return null;

  const phoneNumber = '(715) 835-3169';
  const rawNumber = 'tel:7158353169';

  const handleCopy = () => {
    navigator.clipboard.writeText('7158353169');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (!callbackPhone) return;
    setCallbackRequested(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-iron-950 via-iron-900 to-crimson-900 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-crimson-400 bg-iron-950/80 px-2.5 py-0.5 rounded-full border border-crimson-500/30 mb-2">
            <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse"></span>
            <span>Western Wisconsin Live Mechanical Dispatch</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Connect With Bartingale Mechanical
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Zero third-party call centers. Direct connection with our Eau Claire engineering &amp; dispatch desk.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Clickable / Copyable Phone Box */}
          <div className="bg-slate-50 border-2 border-crimson-500/40 rounded-2xl p-5 text-center space-y-3 shadow-inner">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Direct Emergency &amp; Service Line
            </span>
            
            <a 
              href={rawNumber}
              className="text-2xl sm:text-3xl font-black text-iron-950 hover:text-crimson-700 tracking-tight block transition-colors"
            >
              {phoneNumber}
            </a>

            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href={rawNumber}
                className="inline-flex items-center gap-1.5 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs px-5 py-2.5 rounded-lg shadow transition-all btn-emergency-glow"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Call Dispatch Now</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-lg border border-slate-300 transition-all shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-crimson-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Quick Callback Section */}
          <div className="border-t border-slate-200 pt-5">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Prefer an Engineering Callback?
            </span>

            {callbackRequested ? (
              <div className="p-4 bg-crimson-50 border border-crimson-200 rounded-xl text-center text-xs text-crimson-900 space-y-1">
                <Check className="w-5 h-5 text-crimson-600 mx-auto" />
                <p className="font-bold">Callback Queued!</p>
                <p className="text-slate-600">Our dispatcher will call {callbackPhone} within approximately 10 to 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="flex gap-2">
                <input
                  type="tel"
                  required
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  placeholder="Enter your phone number..."
                  className="flex-1 px-3 py-2.5 rounded-xl border border-slate-300 focus:border-crimson-600 focus:ring-1 focus:ring-crimson-200 text-xs outline-none"
                />
                <button
                  type="submit"
                  className="bg-iron-900 hover:bg-iron-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-all shrink-0"
                >
                  Request Callback
                </button>
              </form>
            )}
          </div>

          {/* Dispatch Credentials */}
          <div className="pt-2 border-t border-slate-200 grid grid-cols-2 gap-3 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amberGold-500" />
              24/7/365 Western WI
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-crimson-600" />
              UA Local 434 Union
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
