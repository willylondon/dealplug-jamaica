'use client';

import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-gradient-to-br from-gold/10 to-green/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm border border-gold/20">
      <div className="bg-white/50 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-sm">
        💌
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-jakarta">Never Miss a <span className="text-green relative inline-block">Deal<span className="absolute bottom-1 left-0 w-full h-2 bg-gold/30 -z-10 rounded-full"></span></span></h2>
      <p className="text-slate-600 mb-8 max-w-xl mx-auto text-lg">
        Join the DealPlug community and get the hottest Temu and AliExpress discounts sent straight to your inbox weekly.
      </p>
      
      {status === 'success' ? (
        <div className="bg-green/10 border border-green/30 text-green rounded-2xl p-6 flex flex-col items-center animate-fade-in max-w-md mx-auto">
          <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p className="font-bold text-lg">You're on the list!</p>
          <p className="text-sm opacity-80 mt-1">Get ready for massive savings.</p>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">@</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full pl-10 pr-4 py-4 rounded-full border-2 border-slate-200 focus:border-gold focus:ring-4 focus:ring-gold/20 outline-none transition-all shadow-sm"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="bg-black hover:bg-slate-800 text-gold hover:text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center min-w-[140px]"
          >
            {status === 'loading' ? (
              <svg className="animate-spin h-5 w-5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : 'Plug Me In'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="text-red-500 mt-4 text-sm font-medium">Oops! Something went wrong. Please try again.</p>
      )}
      <p className="text-slate-400 text-xs mt-4">We respect your privacy. No spam, ever.</p>
    </div>
  );
}
