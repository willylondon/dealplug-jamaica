import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';

export const metadata = {
  title: 'Plug Knowledge Blog | DealPlug Jamaica',
  description: 'Tips, guides, and strategies for Jamaican online shoppers — from customs duty rates to freight forwarder comparisons and the best deals on Temu and AliExpress.',
  alternates: {
    canonical: 'https://dealplugjamaica.com/blog',
  },
  openGraph: {
    title: 'Plug Knowledge Blog | DealPlug Jamaica',
    description: 'Tips, guides, and strategies for Jamaican online shoppers.',
    url: 'https://dealplugjamaica.com/blog',
    siteName: 'DealPlug Jamaica',
    locale: 'en_JM',
    type: 'website',
  },
};

export default function BlogIndex() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold font-jakarta text-slate-900 mb-4">
            Plug Knowledge
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Tips, guides, and strategies for smarter online shopping in Jamaica.
          </p>
        </div>

        {/* Featured Post */}
        <article className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 mb-12 group hover:shadow-xl transition-all duration-300">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden bg-slate-200">
              <span className="absolute top-5 left-5 z-10 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                {featured.category}
              </span>
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-gold/10 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                Featured Post
              </div>
              <div className="flex gap-4 text-xs text-slate-400 font-medium mb-4">
                <time dateTime={featured.date}>{featured.date}</time>
                <span>•</span>
                <span>{featured.readTime} read</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold font-jakarta text-slate-900 mb-4 group-hover:text-gold transition-colors leading-tight">
                <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">{featured.excerpt}</p>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-full font-bold transition-all shadow-md hover:-translate-y-0.5 w-fit"
              >
                Read article <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Rest of posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-300"
            >
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
                <h2 className="text-xl font-bold mb-3 font-jakarta text-slate-900 group-hover:text-gold transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-slate-900 font-bold items-center gap-1 inline-flex group-hover:text-gold transition-colors text-sm"
                >
                  Read article <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Back to Deals CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/#deals"
            className="inline-flex items-center gap-2 bg-green hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:-translate-y-0.5"
          >
            Browse Today's Deals <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
