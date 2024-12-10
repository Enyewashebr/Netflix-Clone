import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into a separate chunk
          vendor: ["react", "react-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit (optional)
  },
});
