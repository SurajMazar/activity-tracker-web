/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_TOKEN_SECRET:process.env.NEXT_PUBLIC_TOKEN_SECRET
  },
}

module.exports = nextConfig
