import { BasePage } from "./BasePage";

export class ShortAndSleveePage extends BasePage{ 
    // Constructor
    constructor(page) {
        super(page);

        this.buttonPlusToCart = page.locator('[class="icon-plus"]');
        this.buttonMinusToCart = page.locator( '[class="icon-minus"]');
        this.dropdownSize = page.getByLabel('Size');
        this.colorBlue = page.getByRole('link', { name: 'Blue' });
        this.buttonAddToCart = page.locator('[name="Submit"]');
        this.buttonContinueShopping = page.getByText('Continue shopping');
        this.colorOrange = page.getByRole('link', { name: 'Orange' });
        this.buttonProceedToCheckout = page.getByRole('link', { name: 'Proceed to checkout ' });
        this.cart = page.locator('[title="View my shopping cart"]');
    }
    
    // Methods
    clickOnPlusToCart = async () => {
        const specificButtonPlusToCart = this.buttonPlusToCart;
        await specificButtonPlusToCart.waitFor();
        await specificButtonPlusToCart.click();
    }

    clickOnMinusToCart = async () => {
        const specificButtonMinusToCart = this.buttonMinusToCart;
        await specificButtonMinusToCart.waitFor();
        await specificButtonMinusToCart.click();
    }

    selectSize = async (size) => {
        const specificDropdownSize = this.dropdownSize;
        await specificDropdownSize.waitFor();
        await specificDropdownSize.selectOption(size);
    }

    clickOnColorBlue = async () => {
        const specificColorBlue = this.colorBlue;
        await specificColorBlue.waitFor();
        await specificColorBlue.click();
    }
    
    clickOnAddToCart = async () => {
        const specificButtonAddToCart = this.buttonAddToCart;
        await specificButtonAddToCart.waitFor();
        await specificButtonAddToCart.click();
    }

    clickOnContinueShopping = async () => {
        const specificButtonContinueShopping = this.buttonContinueShopping;
        await specificButtonContinueShopping.waitFor();
        await specificButtonContinueShopping.click();
    }

    clickOnColorOrange = async () => {
        const specificColorOrange = this.colorOrange;
        await specificColorOrange.waitFor();
        await specificColorOrange.click();
    }

    clickOnProceedToCheckout = async () => {
        const specificButtonProceedToCheckout = this.buttonProceedToCheckout;
        await specificButtonProceedToCheckout.waitFor();
        await specificButtonProceedToCheckout.click();
    }

    getCartQuantity = async () => {
        const specificCart = this.cart;
        await specificCart.waitFor();
        return  await specificCart.innerText();
    }

}