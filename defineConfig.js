// export default defineConfig({

//   workers: process.env.CI ? 2 : 4,

// });

export default defineConfig({

  retries: process.env.CI ? 2 : 0,

});