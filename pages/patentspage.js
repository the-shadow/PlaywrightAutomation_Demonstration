//Include Playwright Module
const { expect } = require('@playwright/test')

exports.PatentsPage = class PatentsPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://www.doximity.com/patents';
        this.pageTitle = "Doximity Patent Information";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }

}