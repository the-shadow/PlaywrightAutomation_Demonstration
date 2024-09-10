//Include Playwright Module
const { expect } = require('@playwright/test')

exports.AppPage = class AppPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://www.doximity.com/app';
        this.pageTitle = "Doximity Mobile for iPhone and Android";

        //Elements - defining locators for each page element
        //Partial Text Locator
        this.downloadURL = new RegExp('^https://www.doximity.com/app\\?referrer=singular_click_id%');
        this.headerDownloadAppButton = page.getByRole('navigation').getByLabel('Download App');
        this.headerDownloadAppButtonText = 'Download App';

    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}