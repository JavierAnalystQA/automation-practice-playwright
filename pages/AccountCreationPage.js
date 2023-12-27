import { BasePage } from "./BasePage";

export class AccountCreationPage extends BasePage{
    //Constructor
    constructor(page) {
        super(page);

        this.radioBoxMr = page.getByLabel('Mr.');
        this.inputFirstName = page.getByLabel('First name *');
        this.inputLastName = page.getByLabel('Last name *');
        this.inputPassword = page.getByLabel('Password *');
        this.selectDay = page.locator('#days');
        this.selectMonth = page.locator('#months');
        this.selectYear = page.locator('#years');
        this.buttonRegister = page.getByRole('button', { name: 'Register ' });
    }

    // Methods
    clickOnRadioBoxMr = async () => {
        const specificRadioBoxMr = this.radioBoxMr;
        await specificRadioBoxMr.waitFor();
        await specificRadioBoxMr.click();
    }
    
    fillFirstName = async (firstName) => {
        const specificInputFirstName = this.inputFirstName;
        await specificInputFirstName.waitFor();
        await specificInputFirstName.fill(firstName);
    }

    fillLastName = async (lastName) => {
        const specificInputLastName = this.inputLastName;
        await specificInputLastName.waitFor();
        await specificInputLastName.fill(lastName);
    }

    fillPassword = async (password) => {
        const specificInputPassword = this.inputPassword;
        await specificInputPassword.waitFor();
        await specificInputPassword.fill(password);
    }

    selectDayOfBirth = async (day) => {
        const specificSelectDay = this.selectDay;
        await specificSelectDay.waitFor();
        await specificSelectDay.selectOption(day);
    }

    selectMonthOfBirth = async (month) => {
        const specificSelectMonth = this.selectMonth;
        await specificSelectMonth.waitFor();
        await specificSelectMonth.selectOption(month);
    }

    selectYearOfBirth = async (year) => {
        const specificSelectYear = this.selectYear;
        await specificSelectYear.waitFor();
        await specificSelectYear.selectOption(year);
    }

    clickOnRegisterButton = async () => {
        const specificButtonRegister = this.buttonRegister;
        await specificButtonRegister.waitFor();
        await specificButtonRegister.click();
    }
}