//Include Playwright Module
const { expect } = require('@playwright/test')

exports.DirectoryPage = class DirectoryPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://www.doximity.com/directory';
        this.pageTitle = "Directories of U.S. Clinicians";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}