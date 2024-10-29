const { expect } = require("@playwright/test");

export class DashboardPage {
    constructor(page) {
        this.page = page
        this.pageTitle = page.getByText('Swag Labs');
        this.menuButton = page.getByRole('button', { name: 'Open Menu' });
        this.addItem = page.locator('[id="add-to-cart-sauce-labs-backpack"]');
        this.cartButton = page.locator('[id="shopping_cart_container"]');
    }

    async validateOnPage() {
        await expect(this.pageTitle).toBeVisible();
        await expect(this.menuButton).toBeVisible();
        await expect(this.page).toHaveScreenshot('dashboard-page.png');
    }

    async clickItem(){
        await this.addItem.click();
    }

    async clickCartIcon(){
        await this.cartButton.click();
    }
}