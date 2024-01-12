const {test, expect}=require('@playwright/test');
 
test('test', async ({ browser }) => {
 
    const context=await browser.newContext();
    const page=await context.newPage();
 
    await page.goto('https://practice.expandtesting.com/');
    await page.locator("//a[text()='Multiple Windows']").click();
 
 
   const [newPage] = await Promise.all([
   context.waitForEvent('page'),
   await page.locator("//a[contains(text(),'Click Here')]").click()]);
 
 
   const msg = await (newPage.locator("//h1[text()='Example of a new window']").textContent());
   expect (msg).toBe('Example of a new window');
 
});