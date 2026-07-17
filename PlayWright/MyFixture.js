// import { test as base, expect } from '@playwright/test';



// type MyFixtures = {

//   authenticatedPage: Page;

// };


// export const test = base.extend<MyFixtures>({

//   authenticatedPage: async ({ page }, use) => {

//     // setup: runs before the test

//     await page.goto('https://app.example.com/login');

//     await page.getByLabel('Email').fill('test@example.com');

//     await page.getByLabel('Password').fill('password123');

//     await page.getByRole('button', { name: 'Sign in' }).click();

//     await page.waitForURL('/dashboard');


//     // hand the fixture to the test

//     await use(page);



//     // teardown: runs after the test completes

//     await page.goto('https://app.example.com/logout');

//   },

// });