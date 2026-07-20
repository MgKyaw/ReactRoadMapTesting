test('loads without analytics', async ({ page }) => {

  await page.route('**/*google-analytics*', route => route.abort());

  await page.route('**/*hotjar*', route => route.abort());



  await page.goto('https://app.example.com');

});