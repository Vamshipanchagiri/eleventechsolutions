import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // <-- add this

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@emailjs/browser"]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // <-- tells Vite @ = src
    }
  }
});
