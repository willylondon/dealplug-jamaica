import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { deals } from '@/lib/data';
import { ProductSchema, BreadcrumbListSchema } from '@/components/StructuredData';

// Generates correct SEO for the specific product
export function generateMetadata({ params }) {
  const deal = deals.find(d => d.slug === params.slug);
  if (!deal) return { title: 'Deal Not Found' };

  return {
    title: `${deal.title} - $${deal.salePrice} | DealPlug Jamaica`,
    description: `${deal.description.substring(0, 150)}... Ships to Jamaica. ${deal.discount}% off!`,
    alternates: {
      canonical: `https://dealplugjamaica.com/deals/${deal.category}/${deal.slug}`,
    },
    openGraph: {
      title: `${deal.title} - $${deal.salePrice} | DealPlug Jamaica`,
      description: `${deal.description.substring(0, 150)}... Ships to Jamaica.`,
      url: `https://dealplugjamaica.com/deals/${deal.category}/${deal.slug}`,
      images: [
        {
          url: `https://dealplugjamaica.com${deal.image}`,
          width: 800,
          height: 600,
          alt: `${deal.title} - DealPlug Jamaica`
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${deal.title} | DealPlug Jamaica`,
      description: `${deal.discount}% off - DealPlug Jamaica`,
      images: [`https://dealplugjamaica.com${deal.image}`],
    }
  };
}

// Generate static versions for all deals
export function generateStaticParams() {
  return deals.map((deal) => ({
    category: deal.category,
    slug: deal.slug,
  }));
}

export default function ProductPage({ params }) {
  const deal = deals.find(d => d.slug === params.slug);

  if (!deal) {
    return <div className="text-center py-20 text-2xl font-bold">Deal not found</div>;
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://dealplugjamaica.com' },
    { name: deal.category, url: `https://dealplugjamaica.com/deals/${deal.category}` },
    { name: deal.title, url: `https://dealplugjamaica.com/deals/${deal.category}/${deal.slug}` }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <ProductSchema product={deal} />
      <BreadcrumbListSchema items={breadcrumbs} />

      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb nav */}
        <nav className="text-sm font-medium text-slate-500 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/deals/${deal.category}`} className="hover:text-gold transition-colors capitalize">{deal.category}</Link>
          <span>/</span>
          <span className="text-slate-900 truncate max-w-xs">{deal.title}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Image Section */}
            <div className="bg-slate-100 relative h-96 md:h-full min-h-[400px]">
              <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                {deal.tag && (
                  <span className="bg-black text-gold text-sm font-bold px-4 py-2 rounded-full shadow-md uppercase tracking-wider backdrop-blur-sm bg-black/80">
                    {deal.tag}
                  </span>
                )}
                <span className="bg-green text-white text-sm font-bold px-4 py-2 rounded-full shadow-md backdrop-blur-sm bg-green/90">
                  Save {deal.discount}%
                </span>
              </div>
              <Image
                src={deal.image}
                alt={`${deal.title} - ${deal.tag || 'Sale'} | DealPlug Jamaica`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl font-extrabold font-jakarta mb-6 text-slate-900 leading-tight">
                {deal.title}
              </h1>

              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center text-amber-500 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 shadow-sm">
                  <span className="text-base font-bold">{deal.rating}</span>
                  <svg className="w-5 h-5 ml-1 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <span className="text-sm font-medium text-slate-500 tracking-wide underline decoration-slate-300 underline-offset-4">{deal.reviews.toLocaleString()} verified orders</span>
              </div>

              <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-slate-500 text-lg line-through decoration-slate-300 font-medium mb-1">
                  MSRP: ${deal.originalPrice.toFixed(2)} USD
                </p>
                <div className="flex items-end gap-3">
                  <p className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    ${deal.salePrice.toFixed(2)}
                  </p>
                  <span className="text-2xl font-bold text-green pb-1 md:pb-2">USD</span>
                </div>
              </div>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed border-l-4 border-gold pl-4 py-2">
                {deal.description}
              </p>

              <a
                href={deal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black hover:bg-slate-800 text-gold text-lg py-5 px-8 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 text-center flex items-center justify-center gap-3 border-2 border-slate-800"
              >
                <span>Get This Deal</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <p className="text-center text-sm text-slate-400 font-medium mt-4">
                Opens directly in Temu / AliExpress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
