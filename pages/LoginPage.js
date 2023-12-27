import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    // Constructor
    constructor(page) {
        super(page);
        
        this.emailInputCreate = page.locator('#email_create');
        this.createAccountButton = page.locator('role=button[name=" Create an account"i]');
    }

    // Methods
    fillEmailCreateAccount = async (email) => {
        const specificEmailInputCreate = this.emailInputCreate;
        await specificEmailInputCreate.waitFor();
        await specificEmailInputCreate.fill(email);
    }

    clickOnCreateAnAccountButton = async () => {
        const specificCreateAccountButton = this.createAccountButton;
        await specificCreateAccountButton.waitFor();
        await specificCreateAccountButton.click();
   }
}