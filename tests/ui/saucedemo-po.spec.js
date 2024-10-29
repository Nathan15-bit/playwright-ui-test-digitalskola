const { afterEach } = require('node:test');
const { test } = require('./base/base-test');

test('TC 1 - Successfull login until Checkout item from Cart using STANDARD user', {tag: ['@page-object', '@smoke']}, async ({ loginPage, dashboardPage, cartPage }) => {

    await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD)
    await dashboardPage.validateOnPage()

    await dashboardPage.clickItem()
    await dashboardPage.clickCartIcon()
    await cartPage.validateOnCartIcon()
    await cartPage.validateAddedImteDisplayed()
    await cartPage.checkoutTheItem()
    await cartPage.checkoutInformation(process.env.FIRSTNAME, process.env.LASTNAME, process.env.POSTALCODE)
    await cartPage.continueToCheckout()
    await cartPage.finishCheckout()
    await cartPage.validateSuccessfulCheckoutPage()
});


test('TC 2 - Successfull login until Checkout item from Cart using VISUAL user', {tag: ['@mobile']}, async ({ loginPage, dashboardPage, cartPage }) => {
   
    await loginPage.login(process.env.VISUAL_USER, process.env.PASSWORD)
    await dashboardPage.validateOnPage()

    await dashboardPage.clickItem()
    await dashboardPage.clickCartIcon()
    await cartPage.validateOnCartIcon()
    await cartPage.validateAddedImteDisplayed()
    await cartPage.checkoutTheItem()
    await cartPage.checkoutInformation(process.env.FIRSTNAME, process.env.LASTNAME, process.env.POSTALCODE)
    await cartPage.continueToCheckout()
    await cartPage.finishCheckout()
    await cartPage.validateSuccessfulCheckoutPage()
});

// test.beforeAll(async () => {
//     console.log('Setup test Env');
// });

// test.beforeEach(async () => {
//     console.log('Clean cart item');
// });

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status != testInfo.expectedStatus){
       const image = await page.screenshot({ fullPage: true }) 
       testInfo.attach('failed test', {
        body: image,
        contentType: 'image/png',
       })
       //await page.screenshot({ path: 'failed-screenshot.png', fullPage: true }) 
    }
    await page.close()
});
