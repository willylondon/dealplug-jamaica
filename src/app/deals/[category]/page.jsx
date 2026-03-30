import React from 'react';
import Link from 'next/link';
import DealCard from '@/components/DealCard';
import { deals, categories } from '@/lib/data';

// Generate dynamic metadata for the category
export async function generateMetadata({ params }) {
  const { category: categoryId } = await params;
  const category = categories.find((c) => c.id === categoryId);
  const titleName = category ? category.name : 'All';

  return {
    title: `${titleName} Deals Jamaica | Up to 80% Off | DealPlug`,
    description: `Shop the best ${titleName.toLowerCase()} deals from Temu & AliExpress. Hand-curated for the Jamaican market with free and affordable shipping.`,
    alternates: {
      canonical: `https://dealplugjamaica.com/deals/${categoryId}`,
    },
    openGraph: {
      title: `${titleName} Deals Jamaica | DealPlug`,
      description: `Shop the best ${titleName.toLowerCase()} deals from Temu & AliExpress.`,
      url: `https://dealplugjamaica.com/deals/${categoryId}`,
    }
  };
}

// Statically generate these category paths at build time
export function generateStaticParams() {
  return categories.filter(c => c.id !== 'all').map((category) => ({
    category: category.id,
  }));
}

export default async function CategoryPage({ params }) {
  const { category: categoryId } = await params;
  const categoryData = categories.find((c) => c.id === categoryId);
  
  if (!categoryData && categoryId !== 'all') {
    return <div className="text-center py-20 text-2xl font-bold">Category not found</div>;
  }

  const filteredDeals = deals.filter(deal => deal.category === categoryId || categoryId === 'all');
  const catName = categoryData ? categoryData.name : 'Category';

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Category Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="text-slate-500 hover:text-green font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-jakarta text-slate-900 mb-4 capitalize">
            {catName} Deals
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Browse the highest-rated <strong>{catName.toLowerCase()}</strong> products directly from Temu and AliExpress. Rated by users, verified by our team, and shipped to Jamaica.
          </p>
        </div>
      </div>

      {/* Dynamic Content Details (SEO requirement) */}
      <div className="max-w-7xl mx-auto px-4 py-8 prose prose-slate max-w-none text-slate-600">
        <h3>Why shop {catName.toLowerCase()} on Temu/AliExpress?</h3>
        <p>
          By cutting out the local middlemen, you can save anywhere from 40% to 80% on {catName.toLowerCase()} products. The items listed below have been extensively reviewed by global buyers to ensure the quality matches the massive savings.
        </p>
        <h3>Shipping {catName} to Jamaica</h3>
        <p>
          We recommend using reliable fright forwarders (like SSMC Express, Courier Box, or Mailpac) to import these items safely into Jamaica for minimal cost. Remember to bundle your purchases to save on weight fees!
        </p>
      </div>

      {/* Deals Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {filteredDeals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl font-bold text-slate-400">No deals found in this category.</p>
            <Link href="/" className="mt-4 inline-block text-green font-bold hover:underline">Browse all deals</Link>
          </div>
        )}
      </div>
    </div>
  );
}
