import { BasePage } from "./BasePage";

export class OrderConfirmationPage extends BasePage{
    //Constructor
    constructor(page){
        super(page);

        this.orderConfirmation = page.locator("[class='alert alert-success']");
    }

    //Methods

    getOrderConfirmation = async () => {
        const specificOrderConfirmation = this.orderConfirmation;
        await specificOrderConfirmation.waitFor();
        return await specificOrderConfirmation.innerText();
    }
}