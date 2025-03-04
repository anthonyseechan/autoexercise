import { type Page, type Locator } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    deliveryAddress: Locator;
    inputComment: Locator;
    buttonPlaceOrder: Locator;

    constructor(page: Page) {
        this.page = page;
        this.deliveryAddress = this.page.locator('#address_delivery').locator('li');
        this.inputComment = this.page.locator('[name="message"]');
        this.buttonPlaceOrder = this.page.getByText('Place Order');
    }

    async getDeliveryAddress() {
        return this.deliveryAddress.allInnerTexts();
    }

    async enterComment(comment: string) {
        await this.inputComment.fill(comment);
    }

    async clickPlaceOrder() {
        await this.buttonPlaceOrder.click();
    }
}

