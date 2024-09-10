//Include Playwright Module
const { expect } = require('@playwright/test')

exports.MarketingDownloadPage = class MarketingDownloadPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://doximity-marketing.doximity.com/download/general?c=logged_out_dialer_video_page&pid=internal_marketing';
        this.pageTitle = "Download the Doximity App";
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }

}