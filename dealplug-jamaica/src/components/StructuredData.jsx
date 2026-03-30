import React from 'react';

export const OrganizationSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DealPlug Jamaica",
          "url": "https://www.dealplugjamaica.com",
          "logo": "https://www.dealplugjamaica.com/logo.png",
          "description": "Jamaica's source for the best Temu and AliExpress deals",
          "areaServed": {
            "@type": "Country",
            "name": "Jamaica"
          }
        })
      }}
    />
  );
};

export const ProductSchema = ({ product }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.title,
          "description": product.description,
          "image": `https://dealplugjamaica.com${product.image}`,
          "brand": {
            "@type": "Brand",
            "name": "Platform Deals"
          },
          "offers": {
            "@type": "Offer",
            "url": `https://dealplugjamaica.com/deals/${product.category}/${product.slug}`,
            "priceCurrency": "USD",
            "price": product.salePrice,
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "DealPlug Jamaica Approved Source"
            }
          }
        })
      }}
    />
  );
};

export const BreadcrumbListSchema = ({ items }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        })
      }}
    />
  );
};

export const ArticleSchema = ({ article }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "image": [
            article.image
          ],
          "datePublished": new Date(article.date).toISOString(),
          "dateModified": new Date(article.date).toISOString(),
          "author": [{
            "@type": "Organization",
            "name": "DealPlug Jamaica",
            "url": "https://dealplugjamaica.com"
          }],
          "description": article.excerpt
        })
      }}
    />
  );
};
