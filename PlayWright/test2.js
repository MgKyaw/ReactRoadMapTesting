import { test, expect } from '@playwright/test';




test.beforeEach(async ({ page }) => {

  await page.goto('https://app.example.com');

});



test.afterEach(async ({ page }) => {

  // runs after every test, useful for cleanup

});



test.beforeAll(async () => {

  // runs once before all tests in this file

  // does not receive page, use browser or request fixtures instead

});



test.afterAll(async () => {

  // runs once after all tests in this file complete

});