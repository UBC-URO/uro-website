import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        // Enable modern formats (smaller file sizes)
        formats: ["image/avif", "image/webp"],

        // Tell Next.js what screen widths you actually design for
        deviceSizes: [360, 640, 768, 1024, 1280, 1536],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],

        // Optional: make cache stick longer so you don’t keep regenerating
        minimumCacheTTL: 60 * 60 * 24, // 1 day
    },
};

export default nextConfig;
