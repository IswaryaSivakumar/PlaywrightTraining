const { test, expect } = require('@playwright/test');
const{path} = require('path');
 
require('dotenv').config();
 
test(`test with ${process.env.USERNAME}`,async({page})=>
    {
        console.log(process.env.USERNAME,process.env.PASSWORD)
        await page.goto('https://www.adactinhotelapp.com');
        await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
        await page.locator('id=username').type(process.env.USERNAME);  //id locator
        await page.locator('//input[@id="password"]').type(process.env.PASSWORD);   //xpath
        await page.locator('//input[@id="login"]').click();
        await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
       
    })
 