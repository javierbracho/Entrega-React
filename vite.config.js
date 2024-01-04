import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';


export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-bootstrap'],
      output: {
        // Esto puede ser necesario dependiendo de cómo esté estructurada tu aplicación
        globals: {
          'react-bootstrap': 'react-bootstrap',
        },
      },
    },
  },
  resolve: {
    alias: {
      'react-bootstrap/Container': path.resolve(__dirname, 'node_modules/react-bootstrap/esm/Container.js'),
    },
  },
});