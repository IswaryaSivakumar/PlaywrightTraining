const {test, expect} = require('@playwright/test');     

test.describe.configure({mode: 'serial'})
let page;
test.beforeAll('Before All', async({ browser}) =>
{
     page = await browser.newPage();

}
)
test('Runs 1st', async() =>
{
    await page.goto("https://adactinhotelapp.com/");
})
test('Runs 2nd', async() =>
{
    await page.locator('id=username').fill('IswaryaSivakumar');
    await page.pause();
    await page.locator('id=password').fill('Aish@1234');
    await page.locator('id=login').click();

})

test('Runs 3rd', async() =>
{
    await page.locator('//select[@id="location"]').selectOption('Sydney'); //SelectByValue
    await page.locator('//select[@id="hotels"]').selectOption({index:1});    //SelectByIndex
    await page.locator('//select[@id="room_type"]').selectOption({label:'Standard'}); //SelectByLabel
    await page.locator('//select[@id="room_nos"]').selectOption('2'); 
    await page.locator('//input[@id="Submit"]').click();
})

test.afterAll('After All', async() =>
{
    await page.close();
}
)
