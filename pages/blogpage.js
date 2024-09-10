//Include Playwright Module
const { expect } = require('@playwright/test')

exports.BlogPage = class BlogPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://blog.doximity.com/';
        this.pageTitle = "Doximity Insider";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}