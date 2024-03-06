import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { WomenCategoryPage } from '../pages/WomenCategoryPage';
import { ShortAndSleveePage } from '../pages/ShortAndSleveePage';
import { SummaryPage } from '../pages/SummaryPage';
import { LoginPage } from '../pages/LoginPage';
import { AccountCreationPage } from '../pages/AccountCreationPage';
import { creationAccount as dataAccount} from '../data/creationAccount.js';
import { AddressPage } from '../pages/AddressPage.js';
import { AddressSelectionPage } from '../pages/AddressSelectionPage.js';
import { ShippingPage } from '../pages/ShippingPage.js';
import { PaymentPage } from '../pages/PaymentPage.js';
import { BankWirePage } from '../pages/BankWirePage.js';
import { OrderConfirmationPage } from '../pages/OrderConfirmationPage.js';

const randomEmail = Math.random().toString(14).substring(7);

test.beforeEach('Go to the automation practice page', async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.visit();
  });

test.describe('purchase' , () => {
  test('Purchase flow', async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.clickOnWomenTopMenu();

    //Women Catergoy Page
    const womenCategoryPage = new WomenCategoryPage(page);
    await womenCategoryPage.clickOnShortAndSleveeBlue();
    
    //PDP Short and Slevee
    const shortAndSleveePage = new ShortAndSleveePage(page);
    await shortAndSleveePage.clickOnPlusToCart();
    await shortAndSleveePage.clickOnMinusToCart();
    await shortAndSleveePage.selectSize('3');
    await shortAndSleveePage.clickOnColorBlue();
    await shortAndSleveePage.clickOnAddToCart();
    await shortAndSleveePage.clickOnContinueShopping();
    expect(await shortAndSleveePage.getCartQuantity()).toBe(' Cart 1 Product');
    await shortAndSleveePage.clickOnColorOrange();
    await shortAndSleveePage.clickOnAddToCart();
    await shortAndSleveePage.clickOnProceedToCheckout();
    expect(await shortAndSleveePage.getCartQuantity()).toBe(' Cart 2 Products');
    
    //Summary Page
    const summaryPage = new SummaryPage(page);
    expect(await summaryPage.getSumOfArticles([summaryPage.artShortAndSleveeBlue, summaryPage.artShortAndSleveeOrange])).toBe(await summaryPage.getTotalProduct()); //validate the sum of the articles is === to the total product
    expect(await summaryPage.getTotalProduct() + await summaryPage.getTotalShipping()).toBe(await summaryPage.getTotalPrice()); //validate the sum of the total product and total shipping is === to the order total
    if (await summaryPage.isMobileViewPort() === false) {
      expect(await summaryPage.getTextInStock(0)).toBe('In stock');
      expect(await summaryPage.getTextInStock(1)).toBe('In stock');
    } 
    await summaryPage.clickProceedToCheckout();

    //Login Page
    const loginPage = new LoginPage(page);
    await loginPage.fillEmailCreateAccount(`${ randomEmail }@mailinator.com`);
    await loginPage.clickOnCreateAnAccountButton();

    //Account Creation Page
    const accountCreationPage = new AccountCreationPage(page);
    await accountCreationPage.clickOnRadioBoxMr();
    await accountCreationPage.fillFirstName(dataAccount.firstName);
    await accountCreationPage.fillLastName(dataAccount.lastName);
    await accountCreationPage.fillPassword(dataAccount.password);
    await accountCreationPage.selectDayOfBirth(dataAccount.dayOfBirth);
    await accountCreationPage.selectMonthOfBirth(dataAccount.monthOfBirth);
    await accountCreationPage.selectYearOfBirth(dataAccount.yearOfBirth);
    await accountCreationPage.clickOnRegisterButton();

    //Address Page
    const addressPage = new AddressPage(page);
    expect(await addressPage.getInfoAddressForm()).toBe('To add a new address, please fill out the form below.');
    await addressPage.fillCompany(dataAccount.address.company);
    await addressPage.fillAddress1(dataAccount.address.address);
    await addressPage.fillAddress2(dataAccount.address.address2);
    await addressPage.fillCity(dataAccount.address.city);
    await addressPage.selectState(dataAccount.address.state);
    await addressPage.fillPostCode(dataAccount.address.zipCode);
    await addressPage.fillHomePhone(dataAccount.homePhone);
    await addressPage.fillMobilePhone(dataAccount.mobilePhone);
    await addressPage.fillAdditionalInformation(dataAccount.additionalInformation);
    await addressPage.fillAlias(dataAccount.alias);
    await addressPage.clickOnSubmitAddressButton();

    //Address Selection Page
    const addressSelectionPage = new AddressSelectionPage(page);
    expect(await addressSelectionPage.getAddressAlias()).toBe(dataAccount.alias);
    await addressSelectionPage.clickProceedToCheckout();

    //Shipping Page
    const shippingPage = new ShippingPage(page);
    expect(await shippingPage.getShippingForAddress()).toContain(dataAccount.alias);
    await shippingPage.clickCheckBoxTermsOfServices();
    await shippingPage.clickProceedToCheckout();

    //Payment Page
    const paymentPage = new PaymentPage(page);
    expect(await paymentPage.getCartContain()).toBe('2 products');
    await paymentPage.clickOnPayByBankWire();

    //Bank Wire Page
    const bankWirePage = new BankWirePage(page);
    expect(await bankWirePage.getBankWirePayment()).toBe('BANK-WIRE PAYMENT');
    await bankWirePage.clickOnConfirmOrder();

    //Order Confirmation Page
    const orderConfirmationPage = new OrderConfirmationPage(page);
    expect(await orderConfirmationPage.getOrderConfirmation()).toBe('Your order on My Shop is complete.');
    });
});