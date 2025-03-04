import { type Page, type Locator } from '@playwright/test';

export class ViewCartPage {
    readonly page: Page;
    textProductDescription: Locator;
    buttonCheckOut: Locator;
    buttonRegisterOrLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textProductDescription = this.page.locator('tr#product-1');
        this.buttonCheckOut = this.page.locator('[class="btn btn-default check_out"]');
        this.buttonRegisterOrLogin = this.page.getByRole('link').getByText('Register / Login');
    }

    async gotoViewCartPage() {
        await this.page.goto('https://automationexercise.com/view_cart');
    }

    async getProductDescription() {
        await this.textProductDescription.waitFor();
        return this.textProductDescription;
    }

    async clickCheckOut() {
        await this.buttonCheckOut.click();
    }

    async clickRegisterOrLogin() {
        await this.buttonRegisterOrLogin.waitFor();
        await this.buttonRegisterOrLogin.click();
    }

    
}

