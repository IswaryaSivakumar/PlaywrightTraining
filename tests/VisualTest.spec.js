const {test, expect, chromium} = require('@playwright/test');     

test('Visual test', async({browser})=> 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://adactinhotelapp.com/");
    await expect(await page.screenshot()).toMatchSnapshot('loginPage.png');
}
)