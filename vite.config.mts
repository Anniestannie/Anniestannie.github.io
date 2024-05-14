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
        project1_1: resolve(__dirname, 'project-1/second-page.html'),
        project1_2: resolve(__dirname, 'project-1/third-page.html'),
        project1_3: resolve(__dirname, 'project-1/fourth-page.html'),
        project1_4: resolve(__dirname, 'project-1/fifth-page.html'),
        project1_5: resolve(__dirname, 'project-1/sixth-page.html'),
        project1_6: resolve(__dirname, 'project-1/seventh-page.html'),
        project1_7: resolve(__dirname, 'project-1/eighth-page.html'),
  
        project2: resolve(__dirname, 'project-2/index.html'),

        heartscapes: resolve(__dirname, 'heartscapes/index.html'),
        heartscapes_about: resolve(__dirname, 'heartscapes/about_page.html'),
        heartscapes_loading: resolve(__dirname, 'heartscapes/loading.html'),
        heartscapes_april28: resolve(__dirname, 'heartscapes/past_pages/April28.html'),
        heartscapes_april29: resolve(__dirname, 'heartscapes/past_pages/April29.html'),
        heartscapes_april30: resolve(__dirname, 'heartscapes/past_pages/April30.html'),
        heartscapes_may1: resolve(__dirname, 'heartscapes/past_pages/May1.html'),
        heartscapes_may2: resolve(__dirname, 'heartscapes/past_pages/May2.html'),
        heartscapes_may3: resolve(__dirname, 'heartscapes/past_pages/May3.html'),
        heartscapes_may4: resolve(__dirname, 'heartscapes/past_pages/May4.html'),
        heartscapes_pop: resolve(__dirname, 'heartscapes/audio/happy-pop-2-185287.mp3'),

        project3: resolve(__dirname, 'Project-3/index.html'),
      },
    },
  },
})

