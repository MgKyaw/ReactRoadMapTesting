// // tests/setup/auth.setup.ts

// setup('authenticate as admin', async ({ page }) => {

//   await page.goto('https://app.example.com/login');

//   await page.getByLabel('Email').fill('admin@example.com');

//   await page.getByLabel('Password').fill('adminpass');

//   await page.getByRole('button', { name: 'Sign in' }).click();

//   await page.context().storageState({ path: 'playwright/.auth/admin.json' });

// });



// setup('authenticate as user', async ({ page }) => {

//   await page.goto('https://app.example.com/login');

//   await page.getByLabel('Email').fill('user@example.com');

//   await page.getByLabel('Password').fill('userpass');

//   await page.getByRole('button', { name: 'Sign in' }).click();

//   await page.context().storageState({ path: 'playwright/.auth/user.json' });

// });