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
        senior_project: resolve(__dirname, '/Senior_Project/index.html'),
      },
    },
  },
})
