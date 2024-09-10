//Include Playwright Module
const { expect } = require('@playwright/test')

exports.OpMedPage = class OpMedPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://www.doximity.com/opmed';
        this.pageTitle = "Op-Med";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}