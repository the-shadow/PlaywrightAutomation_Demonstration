//Include Playwright Module
const { expect } = require('@playwright/test')

exports.HospitalSolutionsPage = class HospitalSolutionsPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://doximity.hospitalsolutions.com/';
        this.pageTitle = "Doximity Hospital Solutions";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}