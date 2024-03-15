import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/random-quote-machine/',
  server: {
    port: 80,
    host: '0.0.0.0',
  },
});
