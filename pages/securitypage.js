//Include Playwright Module
const { expect } = require('@playwright/test')

exports.SecurityPage = class SecurityPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://www.doximity.com/about/security';
        this.pageTitle = "Our Commitment to Security";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }

}