// import { defineConfig } from 'vite';

// export default defineConfig({
//   base: './'
// });

// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        project1: resolve(__dirname, 'project-1/index.html'),
        project2: resolve(__dirname, 'project-2/index.html'),
        heartscapes: resolve(__dirname, 'heartscapes/index.html'),
        heartscapes_about: resolve(__dirname, 'heartscapes/about_page.html'),
        heartscapes_past: resolve(__dirname, 'heartscapes/past.html'),
        heartscapes_april28: resolve(__dirname, 'heartscapes/past_pages/April28.html'),
      },
    },
  },
})
