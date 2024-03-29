/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "http2.mlstatic.com",
      "res.cloudinary.com",
      "xsgames.co",
      "pbs.twimg.com",
      "cdn.discordapp.com",
      "i.imgur.com",
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/sync",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://sistema-academico.utec.edu.pe",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "OPTIONS,POST",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Authorization, Content-Type",
          },
        ],
      },
    ]
  },
}

export default nextConfig
