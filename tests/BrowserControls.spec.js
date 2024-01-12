const {test, expect} = require('@playwright/test'); 
const { TIMEOUT } = require('dns');

test('Browser Control', async({page})=>
{
    //await page.goto('http://google.com', TIMEOUT(2000));
    await page.goto('http://google.com');
    await page.goto('https://adactinhotelapp.com/');
    await page.goBack();            //Goto back page
    await expect(page).toHaveTitle("Google"); 
    await page.goForward();         //Goto forward page
    await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System"); 

}
);