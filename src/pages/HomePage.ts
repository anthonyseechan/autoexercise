import { type Page, type Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    private readonly primaryNav: Locator;
    pictureProduct1: Locator;
    pictureProduct: Locator;
    buttonAddCart1: Locator;
    buttonViewCart: Locator;
    menuButtonCart: Locator;
    menuButtonDeleteAccount: Locator
    buttonContinue: Locator;


    constructor(page: Page) {
        this.page = page;
        this.pictureProduct1 = this.page.locator('[src="/get_product_picture/1"]');
        this.buttonAddCart1 = this.page.locator('[data-product-id="1"]').getByText('Add to cart').nth(2);
        this.buttonViewCart = this.page.getByText('View Cart');
        this.menuButtonCart = this.page.locator('[class="nav navbar-nav"]').locator('li').locator('a').locator('[class="fa fa-shopping-cart"]');
        this.menuButtonDeleteAccount = this.page.locator('[class="nav navbar-nav"]').locator('li').locator('a').locator('[class="fa fa-trash-o"]');
        this.buttonContinue = this.page.locator('[data-qa="continue-button"]');
    }

    async gotoHomePage() {
    await this.page.goto('https://automationexercise.com/');
    }

    async addProduct1() {
        await this.pictureProduct1.hover();
        await this.buttonAddCart1.click();
    }

    async clickViewCart() {
        await this.buttonViewCart.click();
    }

    async getLoggedInUser() {
        return this.page.locator('[class="nav navbar-nav"]').locator('li').locator('a').locator('b');
    }

    async deleteAccount() {
        await this.menuButtonDeleteAccount.click();
    }

    async clickCart() {
        await this.menuButtonCart.click();
    }

    async clickContinue() {
        await this.buttonContinue.click();
    }
}

