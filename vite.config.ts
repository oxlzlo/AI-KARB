// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['@nivo/line'], // 여기 추가
//   },
//   build: {
//     outDir: 'dist',
//   },
// });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   root: '.', // 프로젝트 루트 디렉토리
//   plugins: [react()],
//   build: {
//     outDir: 'dist', // 빌드 파일들이 저장될 폴더
//     emptyOutDir: true,
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // public 폴더 설정 확인
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
