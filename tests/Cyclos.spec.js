const {test, expect} = require('@playwright/test');     

test('Popup Window', async({page})=>
{
    await page.locator("https://demo.cyclos.org/ui/dashboard");
    await page.locator('//a[@id="login-link"]').click();
    await page.locator('//input[@type="text"]').fill('demo');
    await page.locator('//input[@type="password"]').fill('1234');
    await page.locator('//span[text()="Submit"]').click();
    await page.locator("//div[text()=' Pay user ']").click();
    await page.locator('//button[@class="btn btn-icon ml-2"]').click();

    console.log(await page.locator('//a[text()=" Active Walking "]').textContent());
    await page.locator('//a[text()=" Active Walking "]').click();
    



}
);