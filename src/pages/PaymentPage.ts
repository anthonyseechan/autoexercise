import { type Page, type Locator } from '@playwright/test';

export class PaymentPage {
    readonly page: Page;
    inputCardName: Locator;
    inputCardNumber: Locator;
    inputExpiryMonth: Locator;
    inputExpiryYear: Locator;
    inputCVC: Locator;
    buttonConfirmOrder: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputCardName = this.page.locator('[data-qa="name-on-card"]');
        this.inputCardNumber = this.page.locator('[data-qa="card-number"]');
        this.inputExpiryMonth = this.page.locator('[data-qa="expiry-month"]');
        this.inputExpiryYear = this.page.locator('[data-qa="expiry-year"]');
        this.inputCVC = this.page.locator('[data-qa="cvc"]');
        this.buttonConfirmOrder = this.page.locator('[data-qa="pay-button"]');
    } 

    async payAndConfirmOrder(data: {
        cardName: string,
        cardNumber: string,
        expiryMonth: string,
        expiryYear: string,
        cvc: string
    }) {
        await this.inputCardName.fill(data.cardName);
        await this.inputCardNumber.fill(data.cardNumber);
        await this.inputExpiryMonth.fill(data.expiryMonth);
        await this.inputExpiryYear.fill(data.expiryYear);
        await this.inputCVC.fill(data.cvc);
        await this.buttonConfirmOrder.click();
    }
}

