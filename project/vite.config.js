import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Your API backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
