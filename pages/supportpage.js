//Include Playwright Module
const { expect } = require('@playwright/test')

exports.SupportPage = class SupportPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.featureFAQURL = 'https://support.doximity.com/hc/en-us/articles/204761134-Dialer-FAQ';
        this.featureFAQTitle = "Dialer FAQ – Help Center";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }

}