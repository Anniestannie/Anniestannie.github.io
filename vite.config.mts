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
        heartscapes_april29: resolve(__dirname, 'heartscapes/past_pages/April29.html'),
        heartscapes_april30: resolve(__dirname, 'heartscapes/past_pages/April30.html'),
        heartscapes_may1: resolve(__dirname, 'heartscapes/past_pages/May1.html'),
        heartscapes_may2: resolve(__dirname, 'heartscapes/past_pages/May2.html'),
        heartscapes_may3: resolve(__dirname, 'heartscapes/past_pages/May3.html'),
        heartscapes_pop: resolve(__dirname, 'heartscapes/audio/happy-pop-2-185287.mp3'),
      },
    },
  },
})
