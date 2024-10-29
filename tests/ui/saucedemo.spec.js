const { test, expect } = require('@playwright/test');

test.describe('Web UI Demo', {tag: ['@smoke']}, () => {
    test('TC-1 Successful login using standard user until checkout item', async ({ page }) => {

        //Login
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill("standard_user")
        await page.waitForTimeout(1000)
        await page.locator('[id="password"]').fill("secret_sauce")
        await page.waitForTimeout(1000)
        await page.getByText('Login').click()
        
        //Validate Home page after login
        await expect(page.getByText('Swag Labs')).toBeVisible()
        await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible()
        await page.waitForTimeout(1000)


        //Add item to cart
        await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click()
        await page.waitForTimeout(1000)
        await page.locator('[id="shopping_cart_container"]').click()
        await page.waitForTimeout(1000)

        //Validate after add item to cart 
        await expect(page.getByText('Your Cart')).toBeVisible()
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible()
        await page.waitForTimeout(1000)

        
        //Checkout item
        await page.locator('[id="checkout"]').click()
        await page.waitForTimeout(1000)
        await page.locator('[id="first-name"]').fill('Sangan')
        await page.locator('[id="last-name"]').fill('Nathan')
        await page.locator('[id="postal-code"]').fill('15148')
        await page.waitForTimeout(1000)
        await page.locator('[id="continue"]').click()
        await page.waitForTimeout(1000)
        await page.locator('[id="finish"]').click()
        await page.waitForTimeout(1000)

        //Validate after successfully checkout item
        await expect(page.getByText('Checkout: Complete!')).toBeVisible()
        await expect(page.getByText('Thank you for your order!')).toBeVisible()
        await page.waitForTimeout(1000)
    });    

    test('TC-2 Successful login using Visual user', async ({ page }) => {

        //Login
        await page.goto('https://www.saucedemo.com/')
        await page.getByPlaceholder('Username').fill("visual_user")
        await page.waitForTimeout(1000)
        await page.locator('[id="password"]').fill("secret_sauce")
        await page.waitForTimeout(1000)
        await page.getByText('Login').click()
        
        //Validate Home page after login
        await expect(page.getByText('Swag Labs')).toBeVisible()
        await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible()
        await page.waitForTimeout(1000)
    });  
});


// test.describe('Web UI Demo', () => {
//     test('TC-2 Successful login using Visual user', async ({ page }) => {

//         //Login
//         await page.goto('https://www.saucedemo.com/')
//         await page.getByPlaceholder('Username').fill("visual_user")
//         await page.waitForTimeout(1000)
//         await page.locator('[id="password"]').fill("secret_sauce")
//         await page.waitForTimeout(1000)
//         await page.getByText('Login').click()
        
//         //Validate Home page after login
//         await expect(page.getByText('Swag Labs')).toBeVisible()
//         await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible()
//         await page.waitForTimeout(1000)
//     });    
// });