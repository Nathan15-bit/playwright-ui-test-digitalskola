const { expect } = require("@playwright/test");

export class CartPage {
    constructor(page) {
        this.cartTitle = page.getByText('Your Cart');
        this.itemName = page.getByText('Sauce Labs Backpack');
    }

    async validateOnCartIcon() {
        await expect(this.cartTitle).toBeVisible();
    }

    async validateAddedImteDisplayed() {
        await expect(this.itemName).toBeVisible();
    }
}