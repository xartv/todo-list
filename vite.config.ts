import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    tsconfigPaths(),
    eslintPlugin({
      include: '**/*.{js,jsx,ts,tsx}',
      cache: false,
    }),
  ],
});
