import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/OnCaardB/',  // ← THIS MUST MATCH THE REPO NAME
  plugins: [react()],
});
