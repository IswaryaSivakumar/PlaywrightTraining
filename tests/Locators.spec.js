const {test,expect} = require('@playwright/test');
 
test("Amazon Product Search" , async({page})=>
{
    await page.goto("https://www.amazon.in/");
    //Implicit Role Method
    //await page.getByRole("link", {name: "Hello, sign in Account & Lists"}).click();
    //await page.getByRole("textbox", {name: "Email or mobile phone number"}).fill("123@gmail.com");
    //await page.getByRole("button", {name: "Continue"}).click();

    //Explicit Role Method
    //await page.getByRole("button", {name: "Open Menu"}).click();

    //GetByPlaceHolder
    //await page.getByPlaceholder("Search Amazon").fill('Laptop');
    await page.getByRole("link", {name: "Hello, sign in Account & Lists"}).click();
    await expect(page.locator('//label[@class="a-form-label"]')).toHaveText('Email or mobile phone number');
    //await expect(page.locator('//label[@class="a-form-label"]')).toContainText('phone');        //Positive assert
    //await expect(page.locator('//label[@class="a-form-label"]')).not.toContainText('laptop');  //Negative Assert
    //await page.locator('//input[@input="submit"]').click();

}
);