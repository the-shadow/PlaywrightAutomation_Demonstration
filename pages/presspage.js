//Include Playwright Module
const { expect } = require('@playwright/test')

exports.PressPage = class PressPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://press.doximity.com/';
        this.pageTitle = "Doximity in the Press";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}