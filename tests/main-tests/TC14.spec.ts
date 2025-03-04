import { test, expect } from '../../src/fixtures/UITest.fixture';
import userTestData from '../../test-data/userTestData.json';
import paymentTestData from '../../test-data/paymentTestData.json';

test('TC14 - User adds an order then registers to pay and complete the order', async ({ homePage, viewCartPage, loginPage, signUpPage, accountCreatedPage, checkoutPage, paymentPage, page }) => {
  
  //Navigate to home page
  await homePage.gotoHomePage();

  //Add product 1 to cart and click view cart
  await homePage.addProduct1();
  await homePage.clickViewCart();
  
  //Verify product is added in the cart then checkout
  await expect(await viewCartPage.getProductDescription()).toContainText('Blue Top');
  await viewCartPage.clickCheckOut();

  //Navigate to the login page and register
  await viewCartPage.clickRegisterOrLogin();
  await loginPage.signUp(userTestData[0].firstName, userTestData[0].email);

  //Create an account
  await signUpPage.EnterAccountInformation(userTestData[0]);
  await signUpPage.clickCreateAccount();

  //Verify account is created then continue
  await expect(await accountCreatedPage.getAccountCreatedText()).toHaveText('Account Created!');
  await accountCreatedPage.clickContinue();

  //Verify correct user is logged in
  //await expect(await homePage.getLoggedInUser()).toHaveText(testData.accountInformation.firstName);
  await expect(await homePage.getLoggedInUser()).toHaveText(userTestData[0].firstName);

  //Go to View Cart page and proceed to checkout
  await homePage.clickCart();
  await viewCartPage.clickCheckOut();

  //Verify address details
  const deliveryAddress = await checkoutPage.getDeliveryAddress();
  expect(deliveryAddress[1]).toBe(userTestData[0].gender + ' ' + userTestData[0].firstName + ' ' + userTestData[0].lastName);
  expect(deliveryAddress[3]).toBe(userTestData[0].address);
  expect(deliveryAddress[5]).toBe(userTestData[0].city + ' ' + userTestData[0].state + ' ' + userTestData[0].zipcode);
  expect(deliveryAddress[6]).toBe(userTestData[0].country);
  expect(deliveryAddress[7]).toBe(userTestData[0].mobile);

  //Place comment and Order
  await checkoutPage.enterComment(userTestData[0].comment);
  await checkoutPage.clickPlaceOrder();

  //Enter payment details and confirm order
  await paymentPage.payAndConfirmOrder(paymentTestData[0]);
  await expect(page.getByText('Order Placed!')).toBeVisible();

  //Delete account
  await homePage.deleteAccount();
  await expect(page.getByText('Account Deleted!')).toBeVisible();
  await homePage.clickContinue();
});


