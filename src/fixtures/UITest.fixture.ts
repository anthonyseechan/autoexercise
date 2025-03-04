import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage.ts';
import { ViewCartPage } from '../pages/ViewCartPage.ts';
import { LoginPage } from '../pages/LoginPage.ts';
import { SignUpPage } from '../pages/SignUpPage.ts';
import { AccountCreatedPage } from '../pages/AccountCreatedPage.ts';
import { CheckoutPage } from '../pages/CheckoutPage.ts';
import { PaymentPage } from '../pages/PaymentPage.ts';

type HomePageFixture = {
    homePage: HomePage;
    viewCartPage: ViewCartPage;
    loginPage: LoginPage;
    signUpPage: SignUpPage;
    accountCreatedPage: AccountCreatedPage;
    checkoutPage: CheckoutPage;
    paymentPage: PaymentPage;
}

export const test = base.extend<HomePageFixture>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    viewCartPage: async ({ page }, use) => {
        await use(new ViewCartPage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    signUpPage: async ({ page }, use) => {
        await use(new SignUpPage(page));
    },

    accountCreatedPage: async ({ page }, use) => {
        await use(new AccountCreatedPage(page));
    },

    checkoutPage: async ({ page }, use) => {    
        await use(new CheckoutPage(page));
    },

    paymentPage: async ({ page }, use) => {   
        await use(new PaymentPage(page));
    }
});

export { expect } from '@playwright/test';