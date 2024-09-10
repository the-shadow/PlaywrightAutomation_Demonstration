//Include Playwright Module
const { expect } = require('@playwright/test')

exports.HelpCenterPage = class HelpCenterPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://support.doximity.com/hc/en-us';
        this.pageTitle = "Help Center";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}