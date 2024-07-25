import { solidPlugin } from 'esbuild-plugin-solid';
import { type Options, defineConfig } from 'tsup';
/**
 * Adapted from https://github.com/corvudev/corvu/blob/b1f36db096867a88ef5b62bec1e46cc0c8e09089/packages/corvu/tsup.config.ts
 */

function generateConfig(jsx: boolean): Options {
  return {
    target: 'esnext',
    platform: 'browser',
    format: 'esm',
    clean: true,
    dts: !jsx,
    minify: true,
    sourcemap: true,
    treeshake: { preset: 'smallest' },
    replaceNodeEnv: true,
    splitting: true,
    outDir: 'dist/',
    entry: ['src/index.ts', 'src/*/index.ts'],
    esbuildOptions(options) {
      if (jsx) {
        options.jsx = 'preserve';
      }
      options.chunkNames = '[name]/[hash]';
      options.drop = ['console', 'debugger'];
    },
    outExtension() {
      return jsx ? { js: '.jsx' } : {};
    },
    // @ts-ignore
    esbuildPlugins: !jsx ? [solidPlugin({ solid: { generate: 'dom' } })] : [],
  };
}

export default defineConfig([generateConfig(false), generateConfig(true)]);
