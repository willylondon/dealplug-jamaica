import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DealCard from '@/components/DealCard';
import Newsletter from '@/components/Newsletter';
import { deals, categories, blogPosts, socialLinks } from '@/lib/data';

// Add dynamic metadata for the homepage
export const metadata = {
  title: 'DealPlug Jamaica | Top Temu & AliExpress Deals Hand-Curated',
  description: 'The #1 affiliate platform for Jamaicans to find curated tech, fashion, and home deals from Temu and AliExpress. Hand-picked, verified, and shipped to Jamaica.',
  alternates: {
    canonical: 'https://dealplugjamaica.com',
  },
  openGraph: {
    title: 'DealPlug Jamaica | Top Temu & AliExpress Deals',
    description: 'Find the absolute best tech, fashion, and home deals hand-curated for the Jamaican market.',
    url: 'https://dealplugjamaica.com',
    siteName: 'DealPlug Jamaica',
    locale: 'en_JM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DealPlug Jamaica | Top Temu & AliExpress Deals',
    description: 'Hand-curated tech, fashion, and home deals from Temu and AliExpress for Jamaica.',
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-100 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/10 text-green font-bold text-sm mb-6 border border-green/20">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span>
              Live: 24 New Deals Added Today
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-jakarta">
              <span className="block text-slate-900">Affordable</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold to-green">Online Shopping</span>
              <span className="block text-slate-800">Made Easy.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              We curate the absolute best tech, fashion, and home deals from Temu & AliExpress. <strong className="text-slate-900 font-bold">Tested. Verified. Delivered to Jamaica.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#deals" className="bg-green hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-green/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group">
                Browse Deals <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full font-bold transition-all border-2 border-slate-200 hover:border-slate-300 shadow-sm flex items-center justify-center gap-2">
                Join Telegram
              </a>
            </div>
          </div>
          <div className="relative z-10 animate-fade-in hidden md:block">
            <div className="absolute inset-0 bg-gold blur-3xl opacity-20 rounded-full animate-pulse-slow"></div>
            <div className="relative h-[600px] w-full rounded-3xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden z-10">
              <Image 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80" 
                alt="Online Shopping Jamaica" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-jakarta mb-4 text-slate-900">Shop by Category</h2>
              <p className="text-slate-500 text-lg">Find exactly what you're looking for</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.id === 'all' ? '#deals' : `/deals/${cat.id}`}
                className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 text-slate-600 hover:border-gold hover:bg-white hover:text-gold hover:shadow-lg transition-all duration-300 group cursor-pointer h-32"
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
                <span className="font-bold text-sm text-center">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section id="deals" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-red-200">Ending Soon</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold font-jakarta text-slate-900">Today's Top Plugs</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-500 hidden sm:block">Sort by:</span>
              <select className="bg-white border-2 border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-gold focus:border-gold block w-full p-2.5 font-bold shadow-sm outline-none cursor-pointer">
                <option>Highest Discount</option>
                <option>Price: Low to High</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {deals.slice(0, 8).map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-white text-slate-900 hover:bg-slate-50 border-2 border-slate-200 px-8 py-4 rounded-full font-bold transition-all shadow-sm flex items-center gap-3 inline-flex">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              Load More Plugs
            </button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold font-jakarta mb-4 text-slate-900">How It Works</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We cut through the noise to bring the best quality products at wholesale prices straight to Jamaica.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-green to-gold opacity-30 z-0"></div>
            
            <div className="text-center relative z-10 group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-green/30 transition-all duration-300">
              <div className="w-20 h-20 bg-white shadow-xl rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl border-2 border-slate-100 group-hover:border-green group-hover:-translate-y-2 transition-all duration-300">
                🔎
              </div>
              <h3 className="text-xl font-bold mb-3 font-jakarta text-slate-900">1. We Find Em</h3>
              <p className="text-slate-500 leading-relaxed">Our team scours AliExpress and Temu daily for the highest-rated, lowest-price items.</p>
            </div>
            
            <div className="text-center relative z-10 group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-gold/30 transition-all duration-300">
              <div className="w-20 h-20 bg-white shadow-xl rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl border-2 border-slate-100 group-hover:border-gold group-hover:-translate-y-2 transition-all duration-300">
                ✅
              </div>
              <h3 className="text-xl font-bold mb-3 font-jakarta text-slate-900">2. We Verify Em</h3>
              <p className="text-slate-500 leading-relaxed">We check reviews, seller reputation, and shipping times to ensure quality.</p>
            </div>

            <div className="text-center relative z-10 group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-green/30 transition-all duration-300">
              <div className="w-20 h-20 bg-white shadow-xl rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl border-2 border-slate-100 group-hover:border-green group-hover:-translate-y-2 transition-all duration-300">
                🛍️
              </div>
              <h3 className="text-xl font-bold mb-3 font-jakarta text-slate-900">3. You Save</h3>
              <p className="text-slate-500 leading-relaxed">Click the link, buy direct from the app, and save up to 80% on local Jamaican retail prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Telegram CTA Section */}
      <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-gold/10 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green/10 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span>
                Free to Join — 0 Spam
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-jakarta text-white leading-tight mb-6">
                Get Deals <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">Before Everyone Else</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                Our Telegram channel is where the real deals drop first — before they hit the website, before they sell out. Join 100% free and never miss a plug again.
              </p>

              {/* Benefits */}
              <ul className="space-y-4 mb-10">
                {[
                  { icon: '⚡', title: 'First Access', desc: 'Hot deals hit Telegram hours before anywhere else.' },
                  { icon: '🔥', title: 'Daily Deal Drops', desc: 'Fresh deals sent directly to your phone every day.' },
                  { icon: '💰', title: 'Exclusive Price Alerts', desc: 'Flash sales and limited-time drops only for members.' },
                  { icon: '📦', title: 'Shipping & Customs Tips', desc: 'Jamaica-specific advice so you never overpay on delivery.' },
                ].map((b) => (
                  <li key={b.title} className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-xl shrink-0">{b.icon}</span>
                    <div>
                      <p className="text-white font-bold text-sm">{b.title}</p>
                      <p className="text-slate-400 text-sm leading-snug">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0088CC] hover:bg-[#007ab8] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl shadow-sky-900/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                {/* Telegram icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Join Our Telegram Channel
              </a>
            </div>

            {/* Right: Phone mockup card */}
            <div className="hidden md:flex justify-center">
              <div className="relative w-72">
                {/* Glow */}
                <div className="absolute inset-0 bg-[#0088CC]/20 blur-3xl rounded-full"></div>
                {/* Card */}
                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
                  {/* Channel header */}
                  <div className="flex items-center gap-3 mb-5 pb-5 border-b border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-green flex items-center justify-center text-xl font-extrabold text-white shadow-lg">D</div>
                    <div>
                      <p className="text-white font-bold text-sm">DealPlug Jamaica 🇯🇲</p>
                      <p className="text-slate-400 text-xs">Telegram Channel</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-2 h-2 rounded-full bg-green animate-pulse"></div>
                    </div>
                  </div>
                  {/* Fake messages */}
                  {[
                    { emoji: '🔥', text: 'LED Strip 5M RGB — only $3.99!', time: '9:01 AM', hot: true },
                    { emoji: '⚡', text: 'Phone case 4-pack under $5 — link inside', time: '11:43 AM', hot: false },
                    { emoji: '💰', text: 'Air fryer 4.5L — $32 (was $90)', time: '2:15 PM', hot: true },
                    { emoji: '📦', text: 'Shipping tip: stay under US$100 for zero customs duty!', time: '5:30 PM', hot: false },
                  ].map((msg, i) => (
                    <div key={i} className={`mb-3 last:mb-0 rounded-2xl rounded-tl-sm px-4 py-3 text-sm ${msg.hot ? 'bg-gold/20 border border-gold/30' : 'bg-white/5 border border-white/5'}`}>
                      <p className="text-white leading-snug">{msg.emoji} {msg.text}</p>
                      <p className="text-slate-500 text-xs mt-1">{msg.time}</p>
                    </div>
                  ))}
                  {/* CTA inside card */}
                  <a
                    href={socialLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full flex items-center justify-center gap-2 bg-[#0088CC] hover:bg-[#007ab8] text-white py-3 rounded-2xl font-bold text-sm transition-colors"
                  >
                    Join Channel →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Blog Teaser Section */}
      <section id="blog" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-jakarta mb-4 text-slate-900">Plug Knowledge</h2>
              <p className="text-slate-500 text-lg">Tips and tricks for online shopping</p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-green font-bold hover:text-emerald-700 transition-colors">
              View all posts <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {post.category}
                  </span>
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-4 text-xs text-slate-400 font-medium mb-3">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-jakarta text-slate-900 group-hover:text-gold transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-slate-900 font-bold items-center gap-1 inline-flex group-hover:text-gold transition-colors">
                    Read article <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-gold/10 blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-green/10 blur-3xl z-0"></div>
        <div className="relative z-10 px-4">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
