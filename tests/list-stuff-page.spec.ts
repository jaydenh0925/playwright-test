import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/signin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Sign in' }).click();
});
