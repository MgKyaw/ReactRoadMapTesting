 import { test, expect } from '@playwright/test';

// Enable parallel execution inside this file

test.describe.configure({ mode: 'parallel' });

test('open Google', async ({ page }) => {

  await page.goto('https://www.google.com/');

  await expect(page).toHaveTitle(/Google/);

});

test('open GitHub', async ({ page }) => {

  await page.goto('https://github.com/');

  await expect(page).toHaveTitle(/GitHub/);

});

test('open Playwright', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);

});