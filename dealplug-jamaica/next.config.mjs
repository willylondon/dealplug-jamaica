/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Since app is a static export or basic Next setup
    domains: ['images.unsplash.com'],
  },
}

export default nextConfig
