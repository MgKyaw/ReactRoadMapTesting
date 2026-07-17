import { test, expect } from '@playwright/test';

test('open example homepage', async ({ page }) => {

 await page.goto('https://example.com');

});

test('navigate to more information page', async ({ page }) => {

 await page.goto('https://example.com');

 await page.getByRole('link', { name: 'More information' }).click();

});