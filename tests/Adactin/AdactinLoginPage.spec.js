const {test,expect} = require('@playwright/test');
 
const {LoginPage} = require('../../page/LoginPage');
 
test('Login Test', async({page})=>{
 
const name="IswaryaSivakumar";
const pwd="Aish@1234";
 
const lp = new LoginPage(page);
await lp.goTo();
await lp.login(name,pwd);
 
 
})
