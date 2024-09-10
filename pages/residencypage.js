//Include Playwright Module
const { expect } = require('@playwright/test')

exports.ResidencyPage = class ResidencyPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://www.doximity.com/residency/';
        this.pageTitle = "Welcome to Residency Navigator | Doximity";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}