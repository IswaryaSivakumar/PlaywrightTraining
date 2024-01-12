import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://adactinhotelapp.com/');
  await page.getByRole('img', { name: 'AdactIn Group', exact: true }).click();
  await page.locator('#username').click();
  await page.locator('#username').fill('IswaryaSivakumar');
  await page.locator('#password').click();
  await page.locator('#password').fill('AishJan@2024');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#username_show')).toBeVisible();
  await expect(page.locator('body')).toContainText('Search Hotel');
});
