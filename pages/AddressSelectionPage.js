import { BasePage } from "./BasePage";

export class AddressSelectionPage extends BasePage{
    // Constructor
    constructor(page) {
        super(page);

        this.dropdownAddress = page.locator("[id='id_address_delivery']");
        this.buttonProceedToCheckout = page.locator("[name='processAddress']");
    }

    // Methods
    getAddressAlias = async () => {
        const specificDropdownAddress = this.dropdownAddress;
        await specificDropdownAddress.waitFor();
        return await specificDropdownAddress.innerText();
    }

    clickProceedToCheckout = async () => {
        const specificButtonProceedToCheckout = this.buttonProceedToCheckout;
        await specificButtonProceedToCheckout.waitFor();
        await specificButtonProceedToCheckout.click();
        await this.page.waitForURL('/index.php?controller=order')
    }
}