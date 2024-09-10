//Include Playwright Module
const { expect } = require('@playwright/test')

exports.InvestorsPage = class InvestorsPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://investors.doximity.com/overview/default.aspx';
        this.pageTitle = "Doximity - Investor Relations";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}