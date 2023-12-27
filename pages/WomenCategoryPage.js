import { BasePage } from "./BasePage";

export class WomenCategoryPage extends BasePage{
    // Constructor
    constructor(page) {
        super(page);
        
        this.shortAndSleveeBlue = page.locator('#color_2');
        this.messageInStock = page.locator('.available-now');
    }

    // Methods
    clickOnShortAndSleveeBlue = async () => {
        const specificShortAndSleveeBlue = this.shortAndSleveeBlue;
        await specificShortAndSleveeBlue.waitFor();
        await specificShortAndSleveeBlue.click();
    }

    getMessageInStock = async (index) => {
        const specificMessageInStock = this.messageInStock.nth(index);
        await specificMessageInStock.waitFor();
        return await specificMessageInStock.innerText();
    }
}