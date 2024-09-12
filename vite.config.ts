import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@nivo/line'], // 여기 추가
  },
  build: {
    outDir: 'dist',
  },
});
