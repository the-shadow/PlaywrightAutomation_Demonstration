//Include Playwright Module
const { expect } = require('@playwright/test')

exports.DevAPIPage = class DevAPIPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://www.doximity.com/developers/home';
        this.pageTitle = "Doximity API";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}