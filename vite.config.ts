import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,

    proxy: {
      "/api/query": {
        target: "https://casagrand.jitglobalinfosystems.com",
        changeOrigin: true,
        secure: false,
      },
    },

    headers: {
      "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-src 'self' https://ap-south-1.quicksight.aws.amazon.com https://*.quicksight.aws.amazon.com; frame-ancestors 'self';"
    }
  },

  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true,
  },
});
