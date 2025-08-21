import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://eleventechsolutions.in",
      outDir: "dist",
      urls: [
        "/", 
        "/about",
        "/contact",
        "/services",
      ],
    }),
  ],
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
