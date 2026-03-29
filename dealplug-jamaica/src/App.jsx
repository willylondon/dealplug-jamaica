import React, { useState, useEffect } from 'react';

// SEO Meta Component (for reference - would be in document head)
const SEOHead = () => (
  <>
    {/* 
    <title>DealPlug Jamaica | Best Deals & Discounts in Jamaica</title>
    <meta name="description" content="Jamaica's #1 deals platform. Save 20-80% on electronics, fashion, home goods & more. Curated daily deals for smart Jamaican shoppers." />
    <meta name="keywords" content="Jamaica deals, Jamaican discounts, online shopping Jamaica, best prices Jamaica, DealPlug" />
    <meta property="og:title" content="DealPlug Jamaica - Never Pay Full Price" />
    <meta property="og:description" content="Jamaica's trusted source for the best online deals. Save big every day." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="https://dealplugjamaica.com" />
    */}
  </>
);

const DealPlugJamaica = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleDeals, setVisibleDeals] = useState([]);

  const categories = [
    { id: 'all', name: 'All Deals', icon: '🔥' },
    { id: 'electronics', name: 'Electronics', icon: '💻' },
    { id: 'fashion', name: 'Fashion', icon: '👔' },
    { id: 'home', name: 'Home & Living', icon: '🏠' },
    { id: 'grocery', name: 'Grocery', icon: '🛒' },
    { id: 'travel', name: 'Travel', icon: '✈️' },
  ];

  const deals = [
    { id: 1, category: 'electronics', title: 'TWS Wireless Earbuds Bluetooth 5.3', originalPrice: 29.99, salePrice: 8.99, discount: 70, tag: 'HOT', rating: 4.8, reviews: 2341 },
    { id: 2, category: 'home', title: 'Air Fryer 4.5L Digital Touch Screen', originalPrice: 89.99, salePrice: 32.99, discount: 63, tag: 'TRENDING', rating: 4.9, reviews: 5672 },
    { id: 3, category: 'electronics', title: 'Portable Bluetooth Speaker Waterproof', originalPrice: 45.00, salePrice: 12.50, discount: 72, tag: 'NEW', rating: 4.7, reviews: 1893 },
    { id: 4, category: 'fashion', title: 'Men\'s Running Shoes Breathable Sneakers', originalPrice: 68.00, salePrice: 18.99, discount: 72, tag: 'POPULAR', rating: 4.6, reviews: 4456 },
    { id: 5, category: 'home', title: 'Electric Pressure Cooker 6L Multi-Function', originalPrice: 79.99, salePrice: 28.99, discount: 64, tag: 'BESTSELLER', rating: 4.9, reviews: 8203 },
    { id: 6, category: 'travel', title: 'Carry-On Luggage 20" Spinner Hardside', originalPrice: 120.00, salePrice: 42.50, discount: 65, tag: 'LIMITED', rating: 4.8, reviews: 987 },
    { id: 7, category: 'electronics', title: 'Smart Watch Fitness Tracker Heart Rate', originalPrice: 59.99, salePrice: 15.99, discount: 73, tag: 'VERIFIED', rating: 4.8, reviews: 12341 },
    { id: 8, category: 'home', title: 'Cordless Vacuum Cleaner 25000Pa Suction', originalPrice: 159.00, salePrice: 54.99, discount: 65, tag: 'PREMIUM', rating: 4.7, reviews: 3876 },
  ];

  const blogPosts = [
    { id: 1, title: 'Top 10 Money-Saving Tips for Jamaican Shoppers', excerpt: 'Discover proven strategies to stretch your dollar further when shopping online...', date: 'Mar 28, 2026', category: 'Tips', readTime: '5 min' },
    { id: 2, title: 'Black Friday Jamaica 2026: What to Expect', excerpt: 'Get ready for the biggest shopping event of the year with our complete guide...', date: 'Mar 25, 2026', category: 'Events', readTime: '8 min' },
    { id: 3, title: 'How to Spot Fake Deals Online', excerpt: 'Protect yourself from scams with these essential verification techniques...', date: 'Mar 22, 2026', category: 'Guide', readTime: '6 min' },
  ];

  const filteredDeals = activeCategory === 'all' 
    ? deals 
    : deals.filter(d => d.category === activeCategory);

  useEffect(() => {
    setVisibleDeals([]);
    filteredDeals.forEach((_, i) => {
      setTimeout(() => {
        setVisibleDeals(prev => [...prev, i]);
      }, i * 80);
    });
  }, [activeCategory]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(price);
  };

  const tagColors = {
    'HOT': 'bg-red-500',
    'NEW': 'bg-emerald-500',
    'TRENDING': 'bg-amber-500',
    'BESTSELLER': 'bg-violet-500',
    'POPULAR': 'bg-blue-500',
    'LIMITED': 'bg-rose-500',
    'VERIFIED': 'bg-green-600',
    'PREMIUM': 'bg-slate-700',
  };

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        
        :root {
          --gold: #D4A84B;
          --gold-light: #E8C878;
          --gold-dark: #B8923F;
          --green: #2D8B4E;
          --green-light: #3AA862;
          --green-dark: #236B3C;
          --navy: #1E3A5F;
          --navy-light: #2D4F7A;
          --black: #0F0F0F;
        }
        
        .brand-gradient {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
        }
        
        .green-gradient {
          background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
        }
        
        .trust-gradient {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #0F0F0F 0%, #1a1a2e 50%, #16213e 100%);
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
        }
        
        .deal-enter {
          animation: dealEnter 0.5s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes dealEnter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .text-gold { color: var(--gold); }
        .text-green { color: var(--green); }
        .bg-gold { background-color: var(--gold); }
        .bg-green { background-color: var(--green); }
        .border-gold { border-color: var(--gold); }
        .border-green { border-color: var(--green); }
        
        .social-icon {
          transition: all 0.2s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-3px);
        }
      `}</style>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        {/* Top Bar */}
        <div className="bg-black text-white text-sm py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <p className="flex items-center gap-2">
              <span className="text-amber-400">🔥</span>
              <span className="hidden sm:inline">New deals added every hour — </span>
              <span className="font-semibold text-amber-400">Save up to 80% today!</span>
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors social-icon" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors social-icon" aria-label="TikTok">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors social-icon" aria-label="Telegram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <span className="text-gold">Deal</span>
                  <span className="text-green">Plug</span>
                </span>
                <span className="ml-2 text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:block">Jamaica 🇯🇲</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#deals" className="font-semibold text-slate-700 hover:text-green transition-colors">Deals</a>
              <a href="#categories" className="font-semibold text-slate-700 hover:text-green transition-colors">Categories</a>
              <a href="#blog" className="font-semibold text-slate-700 hover:text-green transition-colors">Blog</a>
              <a href="#about" className="font-semibold text-slate-700 hover:text-green transition-colors">About</a>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white green-gradient hover:opacity-90 transition-opacity shadow-lg shadow-green/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                Get Alerts
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-slate-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
              <div className="flex flex-col gap-4">
                <a href="#deals" className="font-semibold text-slate-700">Deals</a>
                <a href="#categories" className="font-semibold text-slate-700">Categories</a>
                <a href="#blog" className="font-semibold text-slate-700">Blog</a>
                <a href="#about" className="font-semibold text-slate-700">About</a>
                <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white green-gradient">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  Get Deal Alerts
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">Live deals updating now</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Jamaica's Trusted
              <span className="block text-gold">Deal Destination</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              We find the best deals across the internet so you don't have to. 
              <span className="text-white font-semibold"> Verified savings, curated daily </span> 
              for smart Jamaican shoppers.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="font-bold text-white">50,000+</p>
                  <p className="text-xs text-slate-400">Happy Shoppers</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-white">$2.5M+</p>
                  <p className="text-xs text-slate-400">Saved This Year</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-white">100%</p>
                  <p className="text-xs text-slate-400">Verified Deals</p>
                </div>
              </div>
            </div>

            {/* Email Signup */}
            <div className="max-w-md">
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    required
                  />
                  <button 
                    type="submit"
                    className="px-8 py-4 rounded-xl font-bold brand-gradient text-black hover:opacity-90 transition-opacity shadow-lg shadow-gold/20 whitespace-nowrap"
                  >
                    Get Daily Deals
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 bg-green/20 border border-green/30 rounded-xl px-5 py-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="font-semibold">You're in! Check your inbox for today's deals.</span>
                </div>
              )}
              <p className="text-slate-500 text-sm mt-3">Join 50,000+ Jamaicans saving daily. No spam, unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section id="deals" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Today's Best Deals
              </h2>
              <p className="text-slate-600">Hand-picked savings, verified and updated hourly</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 font-semibold text-green hover:underline">
              View all deals
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDeals.map((deal, index) => (
              <article
                key={deal.id}
                className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-hover ${
                  visibleDeals.includes(index) ? 'deal-enter' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Image Area */}
                <div className="relative bg-gradient-to-br from-slate-100 to-slate-50 p-8 flex items-center justify-center min-h-[180px]">
                  <span className={`absolute top-3 left-3 ${tagColors[deal.tag]} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {deal.tag}
                  </span>
                  <span className="absolute top-3 right-3 bg-black text-gold text-sm font-bold px-3 py-1 rounded-full">
                    -{deal.discount}%
                  </span>
                  <div className="w-24 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(deal.rating) ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <span className="text-sm text-slate-500">({deal.reviews})</span>
                  </div>

                  <h3 className="font-bold text-slate-900 mb-3 line-clamp-2 leading-snug">{deal.title}</h3>
                  
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-2xl font-extrabold text-green">{formatPrice(deal.salePrice)}</span>
                    <span className="text-slate-400 line-through text-sm">{formatPrice(deal.originalPrice)}</span>
                  </div>

                  <button className="w-full py-3 rounded-xl font-bold text-white green-gradient hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    Get Deal
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2 border-slate-300 text-slate-700 hover:border-green hover:text-green transition-colors">
              Load More Deals
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              How We Save You Money
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our dedicated team works around the clock to find, verify, and deliver the best deals directly to you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">We Hunt</h3>
              <p className="text-slate-600">Our team scours hundreds of retailers daily to find the deepest discounts and best values.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">We Verify</h3>
              <p className="text-slate-600">Every deal is checked and validated. No expired codes, no fake discounts — only real savings.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">You Save</h3>
              <p className="text-slate-600">Get the best deals delivered to your inbox or browse them right here. Saving made simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                From the Blog
              </h2>
              <p className="text-slate-600">Tips, guides, and insights to help you shop smarter</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 font-semibold text-green hover:underline">
              View all posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden card-hover">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-green bg-green/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-slate-500">{post.readTime} read</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{post.date}</span>
                    <a href="#" className="text-sm font-semibold text-green hover:underline flex items-center gap-1">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Never Miss a Deal Again
          </h2>
          <p className="text-slate-300 text-lg mb-8">Join 50,000+ Jamaicans who get the hottest deals delivered to their inbox every morning.</p>
          <button className="px-10 py-4 rounded-xl font-bold brand-gradient text-black hover:opacity-90 transition-opacity shadow-lg shadow-gold/20 text-lg">
            Subscribe Free — No Spam, Ever
          </button>
          <p className="text-slate-500 text-sm mt-4">Unsubscribe anytime with one click</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <span className="text-gold">Deal</span>
                  <span className="text-green">Plug</span>
                </span>
                <span className="text-xs text-slate-500">🇯🇲</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Jamaica's trusted source for verified deals and savings. We curate the best discounts so you can shop smarter.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors social-icon" aria-label="Twitter/X">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors social-icon" aria-label="TikTok">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors social-icon" aria-label="Telegram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Categories</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-gold transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Home & Living</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Grocery</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Travel</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Affiliate Disclosure</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                <span className="text-gold font-semibold">Affiliate Disclosure:</span> We may earn a commission for purchases made through our links.
              </p>
              <p className="text-slate-500 text-sm">© 2026 DealPlug Jamaica. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DealPlugJamaica;
