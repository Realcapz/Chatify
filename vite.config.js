import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps for debugging
    rollupOptions: {
      external: ['react-router-dom'], // Exclude react-router-dom from the build
    },
  },
});

