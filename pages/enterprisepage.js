//Include Playwright Module
const { expect } = require('@playwright/test')

exports.EnterprisePage = class EnterprisePage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://doximity.hospitalsolutions.com/dialer-enterprise';
        this.pageTitle = "Dialer Enterprise | HIPPA-Compliant Telehealth | Doximity Hospital";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }
}