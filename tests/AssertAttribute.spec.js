const {test, expect} = require('@playwright/test');     

test('Adactin title assertion', async({page})=>
{
    await page.goto("https://adactinhotelapp.com/");
    //Hard Assert
    await expect(page.locator('id=username')).toHaveAttribute('class', 'login_input');
    await expect(page.locator('id=username')).toHaveAttribute('class', /input/);
    await expect(page.locator('id=username')).toHaveAttribute('value', '');
    await expect(page.locator('id=username')).toHaveClass('login_input');

    //Soft Assert
    await expect.soft(page.locator('id=username')).toHaveAttribute('class', 'login_input_1');  //soft assert
    await expect(page.locator('id=username')).toHaveAttribute('class', /input/);
    await expect(page.locator('id=username')).toHaveAttribute('value', '');
    await expect(page.locator('id=username')).toHaveClass('login_input');

}
);