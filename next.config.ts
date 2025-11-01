import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export the site as static HTML/CSS assets usable with GitHub Pages
  output: "export",
  images: {
    // Disable Next's image optimization for static export
    unoptimized: true,
  },
  // If you'd rather generate folder-style routes (e.g. /about/index.html),
  // uncomment the following line. For a user site (timothynn.github.io) it's
  // usually safe to leave it disabled.
  // trailingSlash: true,
};

export default nextConfig;
