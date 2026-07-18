import { test, expect } from '@playwright/test';


test('user can navigate to more information page', async ({ page }) => {

 await page.goto('https://example.com');


 await page.getByRole('link', { name: 'More information' }).click();


 await expect(page).toHaveURL(/.*iana.org/);

});