import { test, expect } from '@playwright/test';

test('open example homepage', async ({ page }) => {

 await page.goto('https://example.com');

});