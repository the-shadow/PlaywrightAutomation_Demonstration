//Include Playwright Module
const { expect } = require('@playwright/test')

exports.HiringSolutionsPage = class HiringSolutionsPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://finder.doximity.com/';
        this.pageTitle = "Home | Doximity Talent Finder: Discover Candidates and Post Physician Jobs on Doximity's Physician Recruitment Platform";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}