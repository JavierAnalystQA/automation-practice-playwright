import { BasePage } from "./BasePage";

export class BankWirePage extends BasePage{
    //Constructor
    constructor(page){
        super(page);

        this.bankWirePayment = page.locator("[class='page-subheading']");
        this.confirmOrder = page.locator("[class='button btn btn-default button-medium']");
    }

    //Methods

    getBankWirePayment = async () => {
        const specificBankWirePayment = this.bankWirePayment;
        await specificBankWirePayment.waitFor();
        return await specificBankWirePayment.innerText();
    }

    clickOnConfirmOrder = async () => {
        const specificConfirmOrder = this.confirmOrder;
        await specificConfirmOrder.waitFor();
        await specificConfirmOrder.click();
        await this.page.waitForURL(/index\.php\?controller=order-confirmation&id_cart=\d+&id_module=\d+&id_order=\d+&key=[a-fA-F\d]+/);
    }
}