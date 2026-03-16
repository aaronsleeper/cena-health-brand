import { resolve } from 'path';
import { defineConfig } from 'vite';
import { globSync } from 'glob';
import htmlInject from 'vite-plugin-html-inject';
import tailwindcss from '@tailwindcss/vite';

// Auto-discover all HTML entry points.
// New pattern library pages are picked up automatically — no manual registration needed.
function getHtmlEntries() {
  const files = globSync([
    'index.html',
    'pattern-library/**/*.html',
  ]);

  return Object.fromEntries(
    files.map((file) => {
      const key = file.replace(/\.html$/, '').replace(/\//g, '-');
      return [key, resolve(__dirname, file)];
    })
  );
}

export default defineConfig({
  server: {
    port: 5174,
    // Distinct port from haven-ui (5173) so both can run simultaneously.
    strictPort: true,
  },
  plugins: [
    htmlInject(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: getHtmlEntries(),
      output: {
        entryFileNames: 'assets/cena-health.js',
        assetFileNames: 'assets/cena-health.[ext]',
      },
    },
  },
});
