test('shows local results', async ({ browser }) => {

  const context = await browser.newContext({

    geolocation: { latitude: 22.5726, longitude: 88.3639 },

    permissions: ['geolocation'],

  });


  const page = await context.newPage();

  await page.goto('https://app.example.com/nearby');

  await expect(page.getByText('Kolkata')).toBeVisible();


  await context.close();

});