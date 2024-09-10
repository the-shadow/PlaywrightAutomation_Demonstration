//Include Playwright Module
const { expect } = require('@playwright/test')

exports.PrivacyPage = class PrivacyPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://www.doximity.com/clinicians/privacy';
        this.pageTitle = "Doximity Privacy Policy";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}