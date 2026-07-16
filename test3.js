 import { test, expect } from '@playwright/test';

// Runs once before all tests

test.beforeAll(async () => {

  console.log('Starting test suite');

});

// Runs before every test

test.beforeEach(async ({ page }) => {

  // Open website before each test

  await page.goto('https://example.com');

  console.log('Opened website');

});

// Test 1

test('has title', async ({ page }) => {

  await expect(page).toHaveTitle(/Example Domain/);

});

// Test 2

test('page contains heading', async ({ page }) => {

  await expect(page.getByRole('heading')).toBeVisible();

});

// Runs after every test

test.afterEach(async () => {

  console.log('Test completed');

});

// Runs once after all tests

test.afterAll(async () => {

  console.log('Finished test suite');

});