//Include Playwright Module
const { expect } = require('@playwright/test')

exports.TOSPage = class TOSPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://www.doximity.com/terms-of-service';
        this.pageTitle = "Doximity Terms of Service";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}