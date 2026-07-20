test('renders user list from API', async ({ page }) => {

  await page.route('**/api/users', route => {

    route.fulfill({

      status: 200,

      contentType: 'application/json',

      body: JSON.stringify([

        { id: 1, name: 'Alice' },

        { id: 2, name: 'Bob' },

      ]),

    });

  });


  await page.goto('https://app.example.com/users');

  await expect(page.getByText('Alice')).toBeVisible();

  await expect(page.getByText('Bob')).toBeVisible();

});