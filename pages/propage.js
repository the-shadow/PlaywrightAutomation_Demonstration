//Include Playwright Module
const { expect } = require('@playwright/test')

exports.ProPage = class ProPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://www.doximity.com/dialer/pro';
        this.pageTitle = "Simple, Secure Telemedicine | Unlimited Visits & Group Calling | Doximity Dialer Pro";
        this.purchasePageURL = 'https://www.doximity.com/dialer/pro/purchase?utm_campaign=dialerpage';
        this.purchasePageTitle = 'Doximity - Dialer Pro Subscription';

        
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}