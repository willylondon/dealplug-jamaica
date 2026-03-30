import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { ArticleSchema, BreadcrumbListSchema } from '@/components/StructuredData';

// Generates correct SEO for the specific article
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | DealPlug Jamaica`,
    description: post.excerpt,
    alternates: {
      canonical: `https://dealplugjamaica.com/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: `${post.title} | DealPlug Jamaica`,
      description: post.excerpt,
      url: `https://dealplugjamaica.com/blog/${post.slug}`,
      publishedTime: new Date(post.date).toISOString(),
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    }
  };
}

// Generate static versions for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div className="text-center py-20 text-2xl font-bold">Article not found</div>;
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://dealplugjamaica.com' },
    { name: 'Blog', url: 'https://dealplugjamaica.com/blog' },
    { name: post.title, url: `https://dealplugjamaica.com/blog/${post.slug}` }
  ];

  return (
    <article className="bg-slate-50 min-h-screen py-12">
      <ArticleSchema article={post} />
      <BreadcrumbListSchema items={breadcrumbs} />

      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb nav */}
        <nav className="text-sm font-medium text-slate-500 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 truncate max-w-xs">{post.title}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden mb-12">
          {/* Header Image */}
          <div className="relative h-64 md:h-96 w-full bg-slate-200">
            <span className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm text-slate-800 text-sm font-bold px-4 py-2 rounded-full shadow-md">
              {post.category}
            </span>
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex gap-4 text-sm text-slate-500 font-medium mb-6">
              <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime} read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold font-jakarta mb-8 text-slate-900 leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-jakarta prose-headings:font-extrabold prose-a:text-green hover:prose-a:text-emerald-700">
              {post.content.map((block, index) => {
                if (block.type === 'h2') {
                  return <h2 key={index} className="text-2xl mt-12 mb-6">{block.text}</h2>;
                }
                if (block.type === 'p') {
                  return <p key={index} className="mb-6 leading-relaxed text-slate-700 border-l-4 border-transparent hover:border-gold pl-4 transition-colors">{block.text}</p>;
                }
                return null;
              })}
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100">
              <Link href="/#deals" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:-translate-y-0.5">
                Browse Deals <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
