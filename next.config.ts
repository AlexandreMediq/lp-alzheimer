import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  distDir: 'out',   
  //basePath: "/chatai", 
  trailingSlash: true, 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
