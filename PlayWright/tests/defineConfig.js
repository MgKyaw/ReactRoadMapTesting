// export default defineConfig({

//   projects: [

//     { name: 'chromium', use: { ...devices['Desktop Chrome'] } },

//     { name: 'firefox', use: { ...devices['Desktop Firefox'] } },

//     { name: 'webkit', use: { ...devices['Desktop Safari'] } },

//   ],

// });

export default defineConfig({

  projects: [

    {

      name: 'mobile chrome',

      use: { ...devices['Pixel 5'] },

    },

    {

      name: 'mobile safari',

      use: { ...devices['iPhone 13'] },

    },

  ],

});