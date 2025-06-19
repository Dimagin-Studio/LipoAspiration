import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Optimisations pour le SEO
  build: {
    // Génère un manifest pour PWA/SEO
    manifest: true,
    // Optimisation des chunks
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["motion"],
          ui: ["react-helmet", "react-icons"],
        },
      },
    },
  },

  // Optimisation des performances
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "motion",
      "react-helmet",
    ],
  },

  // Headers SEO pour le développement
  server: {
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
    },
  },
});
