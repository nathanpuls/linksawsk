import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $stores: '/src/stores',
      $c: '/src/components', // Adjust the path accordingly
      $: '/src/*'

      // Add more aliases as needed
    },
  },
});
