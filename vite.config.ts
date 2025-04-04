import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/skytraiding/', // ⚠️ Remplacez "skytraiding" par votre nom de repo
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});