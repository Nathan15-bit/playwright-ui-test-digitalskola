const { afterEach } = require('node:test');
const { test } = require('./base/base-test');

test('TC 1 - Successfull login & add item to cart using STANDARD user', async ({ loginPage, dashboardPage, cartPage }) => {

    await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD)
    await dashboardPage.validateOnPage()

    await dashboardPage.clickItem()
    await dashboardPage.clickCartIcon()
    await cartPage.validateOnCartIcon()
    await cartPage.validateAddedImteDisplayed()
});


test('TC 2 - Successfull login & add item to cart using VISUAL user', async ({ loginPage, dashboardPage, cartPage }) => {
   
    await loginPage.login(process.env.VISUAL_USER, process.env.PASSWORD)
    await dashboardPage.validateOnPage()

    await dashboardPage.clickItem()
    await dashboardPage.clickCartIcon()
    await cartPage.validateOnCartIcon()
    await cartPage.validateAddedImteDisplayed()
});

// test.beforeAll(async () => {
//     console.log('Setup test Env');
// });

// test.beforeEach(async () => {
//     console.log('Clean cart item');
// });

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status != testInfo.expectedStatus){
       await page.screenshot({ path: 'failed-screenshot.png', fullPage: true }) 
    }
    await page.close()
});
