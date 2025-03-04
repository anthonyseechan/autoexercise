import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    inputSignupName: Locator;
    inputSignupEmail: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputSignupName = this.page.locator('[data-qa="signup-name"]');
        this.inputSignupEmail = this.page.locator('[data-qa="signup-email"]');
    }

    async signUp(name: string, email: string) {
        await this.inputSignupName.fill(name);
        await this.inputSignupEmail.fill(email);
        await this.page.getByRole('button').getByText('Signup').click();
    }    
}

