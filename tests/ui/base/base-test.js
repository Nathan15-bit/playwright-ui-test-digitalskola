const { test:base, expect } = require('@playwright/test');
const { LoginPage } = require('../page-object/login-page');
const { DashboardPage } = require('../page-object/dashboard-page');
const { CartPage } = require('../page-object/cart-page');


export const test = base.extend({
    loginPage: async({page}, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.navigate()

        await use(loginPage);
    },

    dashboardPage: async({page}, use) => {
        await use(new DashboardPage(page));
    },

    cartPage: async({page}, use) =>{
        await use(new CartPage(page));
    }
});