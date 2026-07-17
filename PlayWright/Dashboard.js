import { test } from './fixtures';



test('dashboard loads correctly', async ({ authenticatedPage }) => {

  await expect(authenticatedPage.getByText('Welcome back')).toBeVisible();

});