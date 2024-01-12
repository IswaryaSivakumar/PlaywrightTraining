const {test, expect} = require('@playwright/test');     //importing folder

test('Google title assertion', async({page})=>
{
    await page.goto("http://google.com");
    await expect(page).toHaveTitle("Google");       //await only used with async keyword
}
);