import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import imageMin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    imageMin({
      optipng: { optimizationLevel: 5 },
      gifsicle: { optimizationLevel: 3 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.65, 0.9] },
      svgo: { plugins: [{ removeViewBox: false }] },
    }),
  ],
});
