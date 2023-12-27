import { expect, test } from '@playwright/test';
import { HomePage } from './../pages/HomePage.js';
import { LoginPage } from './../pages/LoginPage.js';
import { AccountCreationPage } from '../pages/AccountCreationPage.js';
import { MyAccountPage } from '../pages/MyAccountPage.js';
import { creationAccount as dataAccount} from '../data/creationAccount.js';

const randomEmail = Math.random().toString(14).substring(7);

test.beforeEach('Go to the automation practice page', async ({page}) => {
  const homePage = new HomePage(page);
  await homePage.visit();
});

test('Create an account', async ({page}) => {
    //home page
    const homePage = new HomePage(page);
    await homePage.clickOnSignIn();

    //login page
    const loginPage = new LoginPage(page);
    await loginPage.fillEmailCreateAccount(`${ randomEmail }@mailinator.com`);
    await loginPage.clickOnCreateAnAccountButton();

    //account creation page
    const accountCreationPage = new AccountCreationPage(page);
    await accountCreationPage.clickOnRadioBoxMr();
    await accountCreationPage.fillFirstName(dataAccount.firstName);
    await accountCreationPage.fillLastName(dataAccount.lastName);
    await accountCreationPage.fillPassword(dataAccount.password);
    await accountCreationPage.selectDayOfBirth(dataAccount.dayOfBirth);
    await accountCreationPage.selectMonthOfBirth(dataAccount.monthOfBirth);
    await accountCreationPage.selectYearOfBirth(dataAccount.yearOfBirth);
    await accountCreationPage.clickOnRegisterButton();

    //My account page
    const myAccountPage = new MyAccountPage(page);
    expect(await myAccountPage.getTextAccountCreated()).toBe(' Your account has been created.');
});