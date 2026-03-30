import { NextResponse } from 'next/server';
import { deals } from '@/lib/data';

/**
 * GET /api/deals/latest
 * returns a JSON feed of the latest deals for social media automation (n8n, Make.com, etc.)
 */
export async function GET() {
  try {
    // Sort by id descending to get the newest first (assuming higher ID = newer)
    const latestDeals = [...deals].sort((a, b) => b.id - a.id);

    // Filter to the top 10 for the feed
    const feed = latestDeals.slice(0, 10).map(deal => ({
      id: deal.id,
      title: deal.title,
      description: deal.description,
      price: deal.salePrice,
      originalPrice: deal.originalPrice,
      discount: deal.discount,
      category: deal.category,
      imageUrl: deal.image,
      affiliateLink: deal.link,
      affiliateType: deal.affiliateType,
      slug: deal.slug,
      fullUrl: `https://dealplugjamaica.com/deals/${deal.category}/${deal.slug}`,
      socialCopy: `🔥 PLUG ALERT: ${deal.title} is now 💸 $${deal.salePrice} USD (${deal.discount}% OFF!)\n\nHand-picked for Jamaica 🇯🇲\n\nShop here: https://dealplugjamaica.com/deals/${deal.category}/${deal.slug}`
    }));

    return NextResponse.json(feed, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch deals' }, { status: 500 });
  }
}
