import { BasePage } from "./BasePage.js";

export class SummaryPage extends BasePage{
    //Constructor
    constructor(page){
        super(page);
        
        this.cart = page.locator('[title="View my shopping cart"]');
        
        this.artShortAndSleveeBlue = page.locator('[id="total_product_price_1_6_0"]');
        this.artShortAndSleveeOrange = page.locator('[id="total_product_price_1_5_0"]');
        this.buttonProceedToCheckout = page.locator('[title="Proceed to checkout"]').nth(1);
        this.textInStock = page.locator('[class="label label-success"]');
        this.totalProduct = page.locator('[id="total_product"]');
        this.totalShipping = page.locator('[id="total_shipping"]');
        this.totalPrice = page.locator('[id="total_price"]');
    }

    //Methods
    clickProceedToCheckout = async () => {
        const specificButtonProceedToCheckout = this.buttonProceedToCheckout;
        await specificButtonProceedToCheckout.waitFor();
        await specificButtonProceedToCheckout.click();
    }

    getTextInStock = async (item) => {
        const specificTextInStock = this.textInStock.nth(item);
        await specificTextInStock.waitFor();
        return await specificTextInStock.innerText();
    }

    getArticlePrice = async (article) => {
        await article.waitFor();
        let price = await article.innerText();
        return price;
    }

    getSumOfArticles = async (articles) => {
        let sumArticles = 0;
        for (let article of articles){
            let priceArticle = await this.getArticlePrice(article);
            priceArticle = parseInt(priceArticle.replace('$', ''));
            sumArticles += priceArticle;
        }
        return sumArticles;
    }

    getTotalProduct = async () => {
        const specificTotalProduct = this.totalProduct;
        let totalProduct = await specificTotalProduct.innerText();
        totalProduct = parseInt(totalProduct.replace('$', ''));
        return totalProduct;
    }

    getTotalShipping = async () => {
        const specificTotalShipping = this.totalShipping;
        let totalShipping = await specificTotalShipping.innerText();
        totalShipping = parseInt(totalShipping.replace('$', ''));
        return totalShipping;
    }

    getTotalPrice = async () => {
        const specificTotalPrice = this.totalPrice;
        let totalPrice = await specificTotalPrice.innerText();
        totalPrice = parseInt(totalPrice.replace('$', ''));
        return totalPrice;
    }
}