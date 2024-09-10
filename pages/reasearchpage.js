//Include Playwright Module
const { expect } = require('@playwright/test')

exports.ResearchPage = class ResearchPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://press.doximity.com/research';
        this.pageTitle = "Doximity Research Archive";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}