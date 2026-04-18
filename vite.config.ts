import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from "./public/manifest.json" with { type: "json" };
import type { ManifestOptions } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    manifest: manifest as ManifestOptions,
  })],
  base:process.env.VITE_BASE_PATH || "/Class-Routine",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
