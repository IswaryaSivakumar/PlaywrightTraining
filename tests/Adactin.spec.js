const {test, expect} = require('@playwright/test');     

test('Adactin title assertion @reg', async({page})=>
{
    test.slow();
    //login page
    await page.goto("https://adactinhotelapp.com/");
    await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");  
    //await page.locator('//input[@id="username"]').type('IswaryaSivakumar');
    await page.locator('id=username').fill('IswaryaSivakumar');
    await page.locator('//input[@id="password"]').type('AishJan@2024');
    await page.locator('//input[@id="login"]').click();
    //const error = await (await page.locator('//div[@class="auth_error"]//b').textContent()).trim();
    //expect (success).toHaveAttribute('value', 'Hello IswaryaSivakumar!');
    //page.waitForTimeout(60000);
    const success = await page.locator('//input[@id="username_show"]').getAttribute('value');
    console.log("Attribute Value: "+success)
    expect (success).toBe('Hello IswaryaSivakumar!');

    await page.locator('//select[@id="location"]').selectOption('Sydney'); //SelectByValue
    await page.locator('//select[@id="hotels"]').selectOption({index:1});    //SelectByIndex
    await page.locator('//select[@id="room_type"]').selectOption({label:'Standard'}); //SelectByLabel
    await page.locator('//select[@id="room_nos"]').selectOption('2'); 
    await page.locator('//input[@id="Submit"]').click();
    await expect(page).toHaveTitle("Adactin.com - Select Hotel");  
    //await page.locator('//input[@id="radiobutton_0"]').click();
    //await page.click("//input[@id='radiobutton_0']");              //click Method
    await page.check("//input[@id='radiobutton_0']");              //Check method
    await expect(page.locator("//input[@id='radiobutton_0']")).toBeChecked(); //1st Method
    expect(await page.locator("//input[@id='radiobutton_0']").isChecked()).toBeTruthy();  //2nd method to check radio button
    //expect(await page.locator("//input[@id='radiobutton_0']").isChecked()).toBeFalsy(); --> for negative
    await page.locator('//input[@id="continue"]').click()

    //Book Hotel Page
    await expect(page).toHaveTitle("Adactin.com - Book A Hotel");
    await page.locator('//input[@id="first_name"]').fill("Aish");
    await page.locator('//input[@id="last_name"]').fill("Sivakumar");
    await page.locator('//textarea[@id="address"]').fill("India");
    await page.locator('//input[@id="cc_num"]').fill("1234567890098765");
    await page.locator('//select[@id="cc_type"]').selectOption({index:1});
    await page.locator('//select[@id="cc_exp_month"]').selectOption({label:'June'});
    await page.locator('//select[@id="cc_exp_year"]').selectOption({label:'2024'});
    await page.locator('//input[@id="cc_cvv"]').fill("123");
    await page.locator('//input[@id="book_now"]').click();

    const OrderId = await page.locator('//input[@id="order_no"]').getAttribute('value');
    console.log("The Order Id:"+ OrderId);
    await page.locator('//a[text()="Book Itinerary"').click();

    //Cancel Booking
    //await page.locator('//input[@type="checkbox"]').click();
    await page.locator.click("(//input[@type='checkbox'])[2]");
    await page.locator.check("(//input[@type='checkbox'])[3]");
    await page.locator.uncheck("(//input[@type='checkbox'])[3]");

    expect(await page.locator.click("(//input[@type='checkbox'])[2]").isChecked()).toBeTruthy();
    expect(await page.locator.click("(//input[@type='checkbox'])[2]").isChecked()).toBeFalsy();

}
);
