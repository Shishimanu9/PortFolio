import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Vercel deploy target: build output defaults to /dist, which Vercel's
// static/SPA preset picks up automatically. No extra config needed there,
// but see vercel.json for the SPA rewrite rule (client-side routing).
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
