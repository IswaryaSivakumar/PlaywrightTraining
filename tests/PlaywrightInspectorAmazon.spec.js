import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page.getByPlaceholder('Search Amazon.in')).toBeVisible();
  await expect(page.getByLabel('Amazon.in', { exact: true })).toContainText('.in');
  await expect(page.locator('#nav-xshop')).toContainText('Mobiles');
});