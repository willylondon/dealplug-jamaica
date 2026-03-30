import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DealCard from '@/components/DealCard';
import Newsletter from '@/components/Newsletter';
import { deals, categories, blogPosts, socialLinks } from '@/lib/data';

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
            {deals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 group flex flex-col h-full">
                <Link href={`/deals/${deal.category}/${deal.slug}`} className="block relative h-56 md:h-64 overflow-hidden bg-slate-100">
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {deal.tag && (
                      <span className="bg-black text-gold text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider backdrop-blur-sm bg-black/80">
                        {deal.tag}
                      </span>
                    )}
                    <span className="bg-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm bg-green/90">
                      -{deal.discount}%
                    </span>
                  </div>
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <Link href={`/deals/${deal.category}/${deal.slug}`}>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-green transition-colors mb-2 line-clamp-2">
                      {deal.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-amber-400 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                      <span className="text-sm font-bold">{deal.rating}</span>
                      <svg className="w-3 h-3 ml-1 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    </div>
                    <span className="text-xs text-slate-400">({deal.reviews} sold)</span>
                  </div>
                  <div className="mt-auto flex items-end justify-between items-center gap-4">
                    <div>
                      <p className="text-slate-400 text-sm line-through decoration-slate-300">${deal.originalPrice.toFixed(2)} USD</p>
                      <p className="text-2xl font-extrabold text-slate-900 font-jakarta">
                        ${deal.salePrice.toFixed(2)} <span className="text-sm font-bold text-green">USD</span>
                      </p>
                    </div>
                    <a
                      href={deal.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 bg-slate-900 hover:bg-black text-white p-3 md:px-5 md:py-3 rounded-2xl md:rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 border border-slate-800 flex items-center gap-2"
                    >
                      <span className="hidden md:inline">Plug Me</span>
                      <svg className="w-5 h-5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
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

      {/* Blog Teaser Section */}
      <section id="blog" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-jakarta mb-4 text-slate-900">Plug Knowledge</h2>
              <p className="text-slate-500 text-lg">Tips and tricks for online shopping</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-green font-bold hover:text-emerald-700 transition-colors">
              View all posts <span aria-hidden="true">&rarr;</span>
            </a>
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
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <a href="#" className="text-slate-900 font-bold items-center gap-1 inline-flex group-hover:text-gold transition-colors">
                    Read article <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
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
