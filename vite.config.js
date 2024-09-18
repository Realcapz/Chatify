import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Keep sourcemaps for debugging if necessary
    rollupOptions: {
      external: [], // Don't exclude any necessary modules like react-router-dom
    },
  },
});
