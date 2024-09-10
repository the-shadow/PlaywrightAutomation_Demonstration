//Include Playwright Module
const { expect } = require('@playwright/test')

exports.SocialMedia = class SocialMedia {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.twitterURL = 'https://x.com/doximity';
        this.twitterTitle = 'Doximity (@doximity) / X';
        this.facebookURL = 'https://www.facebook.com/doximity';
        this.facebookTitle = 'Doximity | Facebook';
        this.linkedInURL = 'https://www.linkedin.com/company/doximity';
        this.linkedInTitle = 'Doximity | LinkedIn';
        this.youtubeURL = 'https://www.youtube.com/channel/UCma3yFf-hHxQA90Mal3Biwg';
        this.youtubeTitle = 'Doximity - YouTube';
        this.pageTitle = "About Doximity";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }


    async clickElement(pageElement) {
        pageElement.click();
    }
}