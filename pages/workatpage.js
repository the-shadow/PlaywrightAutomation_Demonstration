//Include Playwright Module
const { expect } = require('@playwright/test')

exports.WorkAtPage = class WorkAtPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://workat.doximity.com/';
        this.pageTitle = "Work @ Doximity";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}