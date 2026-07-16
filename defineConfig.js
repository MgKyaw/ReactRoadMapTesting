export default defineConfig({

  workers: process.env.CI ? 2 : 4,

});