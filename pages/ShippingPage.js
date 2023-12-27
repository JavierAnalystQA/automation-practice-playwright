import { BasePage } from "./BasePage";

export class ShippingPage extends BasePage{
    // Constructor
    constructor(page) {
        super(page);

        this.textShippingForAddress = page.locator("[class='carrier_title']").nth(0);
        this.checkBoxTermsOfServices = page.locator("[id='cgv']");
        this.buttonProceedToCheckout = page.locator("[name='processCarrier']");
    }

    // Methods
    getShippingForAddress = async () => {
        const specificTextShippingForAddress = this.textShippingForAddress;
        await specificTextShippingForAddress.waitFor();
        return await specificTextShippingForAddress.innerText();
    }

    clickCheckBoxTermsOfServices = async () => {
        const specificCheckBoxTermsOfServices = this.checkBoxTermsOfServices;
        await specificCheckBoxTermsOfServices.waitFor();
        await specificCheckBoxTermsOfServices.click();
    }

    clickProceedToCheckout = async () => {
        const specificButtonProceedToCheckout = this.buttonProceedToCheckout;
        await specificButtonProceedToCheckout.waitFor();
        await specificButtonProceedToCheckout.click();
        await this.page.waitForURL('/index.php?controller=order')
    }


}