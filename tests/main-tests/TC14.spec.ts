import { test, expect } from '../../src/fixtures/UITest.fixture';
import testData from '../../test-data/testData.json';

test('Navigate', async ({ homePage, viewCartPage, loginPage, signUpPage, accountCreatedPage, page }) => {
  
  //Navigate to home page and verify URL
  await homePage.gotoHomePage();
  await expect(page).toHaveURL('https://automationexercise.com/');

  //Add product 1 to cart and click view cart
  await homePage.addProduct1();
  await homePage.clickViewCart();
  
  //Verify product is added in the cart then checkout
  await expect(page).toHaveURL('https://automationexercise.com/view_cart');
  await expect(await viewCartPage.getProductDescription()).toContainText('Blue Top');
  await viewCartPage.clickCheckOut();

  //Navigate to the login page and register
  await viewCartPage.clickRegisterOrLogin();
  await loginPage.signUp(testData.accountInformation.firstName, testData.accountInformation.email);

  //Create an account
  await expect(page).toHaveURL('https://automationexercise.com/signup');
  await signUpPage.EnterAccountInformation(testData.accountInformation);
  await signUpPage.clickCreateAccount();

  //Verify account is created then continue
  await expect(page).toHaveURL('https://automationexercise.com/account_created');
  await expect(await accountCreatedPage.getAccountCreatedText()).toHaveText('Account Created!');
  await accountCreatedPage.clickContinue();

  //Verify correct user is logged in
  await expect(page).toHaveURL('https://automationexercise.com/');
  await expect(await homePage.getLoggedInUser()).toHaveText(testData.accountInformation.firstName);



  //Delete account
  await homePage.deleteAccount();
  await expect(page.getByText('Account Deleted!')).toBeVisible();

});


