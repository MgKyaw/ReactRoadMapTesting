// test('shows error state when API fails', async ({ page }) => {

//   await page.route('**/api/users', route => {

//     route.fulfill({

//       status: 500,

//       body: JSON.stringify({ error: 'Internal server error' }),

//     });

//   });


//   await page.goto('https://app.example.com/users');

//   await expect(page.getByText('Something went wrong')).toBeVisible();

// });