import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // TMDB_BASE_URL: process.env.TMDB_BASE_URL ?? "",
    NEXT_PUBLIC_TMDB_KEY: process.env.NEXT_PUBLIC_TMDB_KEY ?? "",
  },
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;

