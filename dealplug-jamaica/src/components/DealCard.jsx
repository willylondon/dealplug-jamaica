import React from 'react';
import Link from 'next/link';

export default function DealCard({ deal }) {
  return (
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
  );
}
