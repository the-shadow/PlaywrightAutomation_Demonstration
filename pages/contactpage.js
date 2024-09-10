//Include Playwright Module
const { expect } = require('@playwright/test')

exports.ContactPage = class ContactPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://www.doximity.com/about/contact';
        this.pageTitle = "Contact Doximity";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}