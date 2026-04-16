import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  // Replace with your repository name if not using a custom domain
  basePath: "/Wedding-Van-Thuong-Va-Thi-Nhan",
};

export default nextConfig;
