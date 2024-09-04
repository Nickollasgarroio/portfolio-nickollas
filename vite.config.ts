import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-nickollas/#/home",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
