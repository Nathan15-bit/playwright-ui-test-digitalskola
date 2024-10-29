const { expect } = require("@playwright/test");

export class CartPage {
    constructor(page) {
        this.page = page
        this.cartTitle = page.getByText('Your Cart');
        this.itemName = page.getByText('Sauce Labs Backpack');
        this.checkoutButton = page.locator('[id="checkout"]');
        this.firstNameTextbox = page.locator('[id="first-name"]');
        this.lastNameTextbox = page.locator('[id="last-name"]');
        this.postalCode = page.locator('[id="postal-code"]');
        this.continueCheckout = page.locator('[id="continue"]');
        this.finishTransaction = page.locator('[id="finish"]');
        this.checkoutCompletedPage = page.getByText('Thank you for your order!');
    }

    async validateOnCartIcon() {
        await expect(this.cartTitle).toBeVisible();
        await expect(this.page).toHaveScreenshot('cart-page.png');
    }

    async validateAddedImteDisplayed() {
        await expect(this.itemName).toBeVisible();
        await expect(this.page).toHaveScreenshot('cart-page.png');
    }

    async checkoutTheItem(){
        await this.checkoutButton.click();
    }

    async inputFirstname(firstname) {
        await this.firstNameTextbox.fill(firstname)
    }

    async inputLastname(lastname) {
        await this.lastNameTextbox.fill(lastname)
    }

    async inputPostalcode(postalcode) {
        await this.postalCode.fill(postalcode)
    }

    async checkoutInformation(firstname, lastname, postalcode){
        await this.inputFirstname(firstname)
        await this.inputLastname(lastname)
        await this.inputPostalcode(postalcode)
    }

    async continueToCheckout(){
        await this.continueCheckout.click();
    }

    async finishCheckout(){
        await this.finishTransaction.click();
    }

    async validateSuccessfulCheckoutPage() {
        await expect(this.checkoutCompletedPage).toBeVisible();
        await expect(this.page).toHaveScreenshot('successful-checkout-page.png');
    }

}