import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { viteSourceLocator } from '@metagptx/vite-plugin-source-locator';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "/Portfolio/",
  server: {
    watch: { usePolling: true, interval: 800 /* 300~1500 */ },
    open: true,
    port: 3001,
  },
}));
