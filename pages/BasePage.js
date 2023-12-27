export class BasePage {
    constructor(page) {
        this.page = page;
    }

    isMobileViewPort = async () => {
        const size = await this.page.viewportSize();
        return size.width < 768;
    }
}