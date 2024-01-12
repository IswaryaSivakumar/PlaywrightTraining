const {test, expect} = require('@playwright/test');     

test('Alert 1 @tag', async({page})=>
{
    await page.goto("http://autopract.com/selenium/alert5/");
    page.on('Alert', async dialog =>{
    expect (dialog.type()).toContain('Alert');
    expect (dialog.message()).toContain('This is an Alert Box.');
    await dialog.accept();

    });
    await page.locator('//button[@id="alert-button"]').click();
    await expect(page.locator('//p[@id="msg"]')).toHaveText('You clicked on Ok button.');

})
test('Alert 2', async({page})=>
{
    await page.goto("http://autopract.com/selenium/alert5/");
    page.on('dialog', async dialog =>{
    expect (dialog.type()).toContain('confirm');
    expect (dialog.message()).toContain('Do you want to save changes?');
    await dialog.accept();

    });
    await page.locator('//button[@id="confirm-button"]').click();
    await expect(page.locator('//p[@id="msg"]')).toHaveText('Data saved successfully!');


}
)
test('Alert 3', async({page})=>
{
    await page.goto("http://autopract.com/selenium/alert5/");
    page.on('dialog', async dialog =>{
    expect (dialog.type()).toContain('prompt');
    expect (dialog.message()).toContain('Please enter any number');
    await dialog.accept('20');

    });
    await page.locator('//button[@id="prompt-button"]').click();
    await expect(page.locator('//p[@id="msg"]')).toHaveText('You have entered number: 20');


}
)