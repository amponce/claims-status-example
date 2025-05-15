import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  // Handle the @department-of-veterans-affairs packages properly
  optimizeDeps: {
    include: ['@department-of-veterans-affairs/component-library'],
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
