//Include Playwright Module
const { expect } = require('@playwright/test')

//Create the Class
exports.MainPage = class MainPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        //Elements - defining locators for each page element
        this.pageURL = 'https://www.doximity.com/';
        this.pageTitle = "Clinician's Network & Healthcare Directory for Doctors, NPs, PAs & RNs";


    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}