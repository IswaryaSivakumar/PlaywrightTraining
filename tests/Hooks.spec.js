const { test, expect } = require('@playwright/test');
 
test.beforeEach('Before Hook', async ({ page }) => {
    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}
);
 
test('login', async ({ page }) => {
   
    // page.waitForLoadState();
    // await expect(page.locator('//h5[text()="Login"]')).toHaveText("Login");
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page.getByRole("textbox", { name: "password" }).fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    await expect (await page.locator('//title[text()="OrangeHRM"]')).toHaveText("OrangeHRM");
 
}
);
 
test('login2', async ({ page }) => {
   
    // page.waitForLoadState();
    // await expect(page.locator('//h5[text()="Login"]')).toHaveText("Login");
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page.getByRole("textbox", { name: "password" }).fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    await expect (await page.locator('//title[text()="OrangeHRM"]')).toHaveText("OrangeHRM");
 
}
);