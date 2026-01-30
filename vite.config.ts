import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Adjust based on your framework (e.g., Vue, Svelte)

export default defineConfig({
  plugins: [react()],
});

export default defineConfig(({ mode }) => {
  let build: UserConfig['build'] = {}
  let esbuild: UserConfig['esbuild'] = {}
  let define: UserConfig['define'] = {}

  if (mode === 'development') {
    build = {
      minify: false,
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    }

    esbuild = {
      jsxDev: true,
      keepNames: true,
      minifyIdentifiers: false,
    }

    define = {
      'process.env.NODE_ENV': '"development"',
      '__DEV__': 'true',
    }
  }

  return {
    plugins: [react()],
    build,
    esbuild,
    define,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  }
})
