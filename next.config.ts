import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 importante para S3
  images: {
    unoptimized: true, // evita uso de Image Optimization API
  },
  trailingSlash: true, // asegura rutas correctas en S3
  reactStrictMode: false,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
