import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],  
  build: {
    outDir: 'build', 
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './src/index.jsx', // Точка входа
      },
    },
  },
  base: '/boardgame-stats-react/',
});


