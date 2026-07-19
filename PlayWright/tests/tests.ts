// test('admin can see content user cannot', async ({ browser }) => {

//   const adminContext = await browser.newContext({

//     storageState: 'playwright/.auth/admin.json',

//   });

//   const userContext = await browser.newContext({

//     storageState: 'playwright/.auth/user.json',

//   });



//   const adminPage = await adminContext.newPage();

//   const userPage = await userContext.newPage();



//   await adminPage.goto('https://app.example.com/admin');

//   await expect(adminPage.getByText('Admin Panel')).toBeVisible();



//   await userPage.goto('https://app.example.com/admin');

//   await expect(userPage.getByText('Access denied')).toBeVisible();




//   await adminContext.close();

//   await userContext.close();

// });