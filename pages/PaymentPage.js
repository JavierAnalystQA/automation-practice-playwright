import { BasePage } from "./BasePage";

export class PaymentPage extends BasePage{
    //Constructor
    constructor(page){
        super(page);

        this.cartContain = page.locator("[id='summary_products_quantity']")
        this.clickPayByBankWire = page.locator("[title='Pay by bank wire']");
    }

    //Methods

    getCartContain = async () => {
        const specificCartContain = this.cartContain;
        await specificCartContain.waitFor();
        return await specificCartContain.innerText();
    }

    clickOnPayByBankWire = async () => {
        const specificClickPayByBankWire = this.clickPayByBankWire;
        await specificClickPayByBankWire.waitFor();
        await specificClickPayByBankWire.click();
        await this.page.waitForURL('/index.php?fc=module&module=bankwire&controller=payment')
    }
}