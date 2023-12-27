import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    // Constructor
    constructor(page) {
        super(page);

        this.signInMenu = page.getByRole('link', { name: 'Sign in' });
        this.womenTopMenu = page.locator('#block_top_menu').getByRole('link', { name: 'Women' });
        this.menuCategoriesMobile = page.locator("[class='cat-title']");
        this.womenTopMenuMobile = page.locator("[title='Women']").nth(0);
    }

    // Methods
    visit = async () => {
        await this.page.goto('/');
    }

    clickOnSignIn = async () => {
        const specificSignInMenu = this.signInMenu;
        await specificSignInMenu.waitFor();
        await specificSignInMenu.click();
        await this.page.waitForURL('/index.php?controller=authentication&back=my-account')
     }
    
     clickOnWomenTopMenu = async () => {
        const specificWomenTopMenu = this.womenTopMenu;
        const specificMenuCategoriesMobile = this.menuCategoriesMobile;
        const specificWomenTopMenuMobile = this.womenTopMenuMobile;
        if (await this.isMobileViewPort()) {
            await specificMenuCategoriesMobile.waitFor();
            await specificMenuCategoriesMobile.click();
            await specificWomenTopMenuMobile.waitFor();
            await specificWomenTopMenuMobile.click();
        } else {
            await specificWomenTopMenu.waitFor();
            await specificWomenTopMenu.click();
        }
        await this.page.waitForURL('/index.php?id_category=3&controller=category')
    }
}
