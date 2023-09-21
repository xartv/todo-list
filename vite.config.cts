import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import { visualizer } from 'rollup-plugin-visualizer';
import eslintPlugin from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    tsconfigPaths(),
    eslintPlugin({
      include: '**/*.{js,jsx,ts,tsx}',
      cache: false,
      exclude: [/virtual:/, /node_modules/],
    }),
    visualizer({
      open: true,
      gzipSize: true,
    }),
  ],
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      localsConvention: 'camelCase',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    clearMocks: true,
    setupFiles: './.tests/setup.cjs',
    reporters: ['html'],
  },
  define: {
    __APP_BASE_URL__: JSON.stringify(process.env.VITE_BASE_URL),
    __PROJECT__: JSON.stringify(process.env.VITE_PROJECT),
  },
});
