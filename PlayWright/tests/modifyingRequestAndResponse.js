test('handles modified response', async ({ page }) => {

  await page.route('**/api/profile', async route => {

    const response = await route.fetch();

    const body = await response.json();


    body.role = 'admin';


    route.fulfill({

      response,

      body: JSON.stringify(body),

    });

  });


  await page.goto('https://app.example.com/profile');

  await expect(page.getByText('Admin')).toBeVisible();

});