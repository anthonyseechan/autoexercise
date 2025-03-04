import { type Page, type Locator } from '@playwright/test';

export class AccountCreatedPage {
    readonly page: Page;
    buttonContinue: Locator;
    textAccountCreated: Locator;


    constructor(page: Page) {
        this.page = page;
        this.textAccountCreated = this.page.locator('[data-qa="account-created"]');
        this.buttonContinue = this.page.locator('[data-qa="continue-button"]');
    }

    async clickContinue() {
        await this.buttonContinue.click();
    }

    async getAccountCreatedText() {
        return this.textAccountCreated;
    }
}

