import { socialLinks } from '@/lib/data';
import { OrganizationSchema } from '@/components/StructuredData';
import '../index.css';

export const metadata = {
  title: 'DealPlug Jamaica | Best Temu & AliExpress Deals with Free Shipping',
  description: 'Find the hottest deals from Temu and AliExpress delivered to Jamaica. Save up to 90% on electronics, fashion, home goods and more. Updated daily!',
  keywords: 'Jamaica deals, Temu Jamaica, AliExpress Jamaica, online shopping Jamaica, cheap shipping Jamaica',
  openGraph: {
    title: 'DealPlug Jamaica | Best Temu & AliExpress Deals',
    description: 'Find the hottest deals from Temu and AliExpress delivered to Jamaica. Save up to 90% on electronics, fashion, home goods and more.',
    url: 'https://dealplugjamaica.com',
    siteName: 'DealPlug Jamaica',
    images: [
      {
        url: 'https://dealplugjamaica.com/images/desktop_full_page.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_JM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DealPlug Jamaica | Best Temu & AliExpress Deals',
    description: 'Find the hottest deals from Temu and AliExpress delivered to Jamaica. Save up to 90%!',
    images: ['https://dealplugjamaica.com/images/desktop_full_page.png'],
  },
  alternates: {
    canonical: 'https://dealplugjamaica.com',
  },
};

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const TikTokIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" /></svg>
);
const TelegramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet" />
        <OrganizationSchema />
      </head>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900">
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
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors" aria-label="Twitter/X">
                  <TwitterIcon />
                </a>
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors" aria-label="TikTok">
                  <TikTokIcon />
                </a>
                <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors" aria-label="Telegram">
                  <TelegramIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Main Nav */}
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center">
                <span className="text-2xl md:text-3xl font-extrabold tracking-tight font-jakarta">
                  <span className="text-gold">Deal</span>
                  <span className="text-green">Plug</span>
                </span>
                <span className="ml-2 text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:block">Jamaica 🇯🇲</span>
              </a>

              <div className="hidden md:flex items-center gap-8">
                <a href="/#deals" className="font-semibold text-slate-700 hover:text-green transition-colors">Deals</a>
                <a href="/#categories" className="font-semibold text-slate-700 hover:text-green transition-colors">Categories</a>
                <a href="/#blog" className="font-semibold text-slate-700 hover:text-green transition-colors">Blog</a>
              </div>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-black text-white py-16 mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-extrabold font-jakarta">
                    <span className="text-gold">Deal</span>
                    <span className="text-green">Plug</span>
                  </span>
                  <span className="text-xs text-slate-500">🇯🇲</span>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Jamaica's trusted source for verified deals and savings. We curate the best discounts so you can shop smarter.
                </p>
                <div className="flex gap-4">
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                    <TwitterIcon />
                  </a>
                  <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                    <TikTokIcon />
                  </a>
                  <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                    <TelegramIcon />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Categories</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><a href="/deals/electronics" className="hover:text-gold transition-colors">Electronics</a></li>
                  <li><a href="/deals/fashion" className="hover:text-gold transition-colors">Fashion</a></li>
                  <li><a href="/deals/home" className="hover:text-gold transition-colors">Home & Living</a></li>
                  <li><a href="/deals/grocery" className="hover:text-gold transition-colors">Grocery</a></li>
                  <li><a href="/deals/travel" className="hover:text-gold transition-colors">Travel</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Company</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Legal</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-gold transition-colors">Affiliate Disclosure</a></li>
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
      </body>
    </html>
  );
}
