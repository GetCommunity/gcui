import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [solidPlugin()],
  esbuild: {
    include: /\.[jt]sx?$/,
    exclude: [],
    loader: 'jsx',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['@testing-library/jest-dom/vitest'],
    isolate: false,
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
