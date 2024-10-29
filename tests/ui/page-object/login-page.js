import { expect } from "@playwright/test";

export class LoginPage {

    constructor(page) {
        this.page = page
        this.usernameTextbox = page.getByPlaceholder('Username');
        this.passwordTextbox = page.getByPlaceholder('Password');
        this.loginButton = page.getByText('Login');

    }

    async navigate(){
        await this.page.goto('https://www.saucedemo.com/');
        await expect(this.page).toHaveScreenshot('login-page.png')
    }

    async inputUsername(username) {
        await this.usernameTextbox.fill(username)
    }

    async inputPassword(password) {
        await this.passwordTextbox.fill(password)
    }

    async clickLoginButton() {
        await this.loginButton.click()
    }

    async login(username, password){
        await this.inputUsername(username)
        await this.inputPassword(password)
        await this.clickLoginButton()
    }

}