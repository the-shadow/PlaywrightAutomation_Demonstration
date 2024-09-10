//Include Playwright Module
const { expect } = require('@playwright/test')


exports.DialerPage = class DialerPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = 'https://www.doximity.com/dialer';
        this.pageTitle = "Doximity Dialer for iPhone and Android";

        this.fullPageScreenshot = 'Doximity/DialerPage.png';
        
        //Elements - defining locators for each page element
        //header
        this.headerCompanyLogo = page.getByRole('navigation').getByRole('link', { name: 'Go to Doximity home' });
        this.headerAppButton = page.getByRole('link', { name: 'App', exact: true });
        this.headerAppButtonText = 'App';
        this.headerDialerButton = page.getByRole('link', { name: 'Dialer' });
        this.headerDialerButtonText = 'Dialer';
        this.headerPartnersButton = page.getByRole('link', { name: 'Partners' });
        this.headerPartnersButtonText = 'Partners';
        this.headerAboutButton = page.getByRole('link', { name: 'About', exact: true });
        this.headerAboutButtonText = 'About';
        this.headerDownloadAppButton = page.getByRole('link', { name: 'Download App' });
        this.headerDownloadAppButtonText = 'Download App';
        this.headerSignInButton = page.getByRole('link', { name: 'Sign In' });
        this.headerSignInButtonText = 'Sign In';

        //CTA Section
        this.inputBoxMobileNumber = page.getByPlaceholder('Enter your mobile number');
        this.textMeALinkButton = page.getByRole('button', { name: 'Text Me A Link' });
        this.emptyMobileNumberResponseLocator = page.getByText('Phone number');
        this.successMobileNumberResponseLocator = page.getByText('Download link sent');
        this.validTestNumber = '0000120033';
        this.playVideoButton = page.locator('p').filter({ hasText: 'See How Dialer Works' }).locator('span').first();
        this.playVideoTextButton = page.getByText('See How Dialer Works');
        this.videoLightBoxLocator = page.locator('#dialer-mktg-video');
        this.videoURL = "https://c8y.doxcdn.com/video/upload/Dialer/marketing/introducing-dialer-video.mp4";

        //Glider Carousel
        this.featuresAndBenefitsLocator = page.getByText('Features and benefitsCall');
        this.callShieldingScreenshotName = 'Features-CallShielding.png';
        this.videoCallsScreenshotName = 'Features-VideoCalls.png';
        this.noReplyTextingScreenshotName = 'Features-NoReplyTexting.png';
        this.holdForMeScreenshotName = 'Features-HoldForMe.png';

        // this.callShield = "callShield";
        // this.videoCalls = "videoCalls";
        // this.noReplyTexting = "noReplyTexting";
        // this.holdforMe = "holdForMe";

        // this.screenshotMap.set(this.callShield, 'Features-CallShielding.png');
        // this.screenshotMap.set(this.videoCalls, 'Features-VideoCalls.png');
        // this.screenshotMap.set(this.noReplyTexting, 'Features-NoReplyTexting.png');
        // this.screenshotMap.set(this.holdforMe, 'Features-HoldForMe.png');

        this.defaultActiveCarouselElementClass = 'dialer-marketing-features-segmented-button active glide__bullet--active';
        this.activeCarouselBulletClass = 'dialer-marketing-features-segmented-button glide__bullet--active';
        this.inactiveCarouselElementClass = 'dialer-marketing-features-segmented-button';
        this.carouselCallShieldingButton = page.getByRole('button', { name: 'Call shielding' });
        this.carouselVideoCallsButton = page.getByRole('button', { name: 'Video calls' });
        this.carouselVideoCallsBody = page.locator("[class='dialer-marketing-features-carousel-item glide__slide glide__slide--active']");
        this.carouselNoReplyTextingButton = page.getByRole('button', { name: 'No-reply texting' });
        this.carouselHoldForMeButton = page.getByRole('button', { name: 'Hold For Me' });

        //Marketing Section
        this.marketingSectionHeaderLocator = page.getByText('Convert your smart phone to a mobile medical office.');
        this.marketSectionScreenshotName = 'Marketing-DialerValueHeader.png';

        //Reviews Carousel
        this.reviewsCarouselLocator = page.locator('.dialer-marketing-review-carousel');
        this.reviewsScreenshot1 = 'Reviews-1.png';
        this.reviewsScreenshot2 = 'Reviews-2.png';
        this.reviewsScreenshot3 = 'Reviews-3.png';
        this.reviewsScreenshot4 = 'Reviews-4.png';
        this.reviewsScreenshot5 = 'Reviews-5.png';

        this.activeReviewCarouselButton = 'dialer-marketing-review-carousel-bullet glide__bullet--active';
        this.inactiveReviewCarouselButton = 'dialer-marketing-review-carousel-bullet';

        this.reviewCarouselButton1 = page.getByLabel('review carousel bullet 1');
        this.reviewCarouselButton2 = page.getByLabel('review carousel bullet 2');
        this.reviewCarouselButton3 = page.getByLabel('review carousel bullet 3');
        this.reviewCarouselButton4 = page.getByLabel('review carousel bullet 4');
        this.reviewCarouselButton5 = page.getByLabel('review carousel bullet 5');
        
        //Mobile Buttons
        this.downloadForIOSButton = page.getByLabel('Download For iOS');
        this.downloadForAndroidButton = page.getByLabel('Download For Android');
        this.partialURLMobileDownload = new RegExp('^https://doximity-marketing.doximity.com/download/general?c=');

        //Plans & Pricing
        this.upgradeToProButton = page.getByRole('link', { name: 'Upgrade to Pro' });
        this.viewPlansAndPricingButton = page.getByRole('link', { name: 'View Plans & Pricing' });
        this.enterpriseInquiriesButton = page.getByRole('link', { name: 'Enterprise Inquiries' });

        //Additional Info
        this.securityInformationButton = page.getByRole('link', { name: 'Security Information' });
        this.featureFAQButton = page.getByRole('link', { name: 'Feature FAQ' });
        this.patentInformationButton = page.getByRole('link', { name: 'Patent Information' });

        //Footer
        this.footerLogoButton = page.getByRole('contentinfo').getByLabel('Go to Doximity home');
        this.footerAboutUsButton = page.getByRole('link', { name: 'About Us' });
        this.footerAboutUsButtonText = 'About Us';
        this.footerPressButton = page.getByRole('link', { name: 'Press' });
        this.footerPressButtonText = 'Press';
        this.footerInvestorsButton = page.getByRole('link', { name: 'Investors' });
        this.footerInvestorsButtonText = 'Investors';
        this.footerBlogButton = page.getByRole('link', { name: 'Blog' });
        this.footerBlogButtonText = 'Blog';
        this.footerWorkAtButton = page.getByRole('link', { name: 'Work@' });
        this.footerWorkAtButtonText = 'Work@';
        this.footerContactButton = page.getByRole('link', { name: 'Contact' });
        this.footerContactButtonText = 'Contact';
        this.footerDoximityAppButton = page.getByRole('link', { name: 'Doximity App' });
        this.footerDoximityAppButtonText = 'Doximity App';
        this.footerOpMedButton = page.getByRole('link', { name: 'Op-Med' });
        this.footerOpMedButtonText = 'Op-Med';
        this.footerResearchButton = page.getByRole('link', { name: 'Research' });
        this.footerResearchButtonText = 'Research';
        this.footerDirectoryButton = page.getByRole('link', { name: 'Directory' });
        this.footerDirectoryButtonText = 'Directory';
        this.footerTOSButton = page.getByRole('link', { name: 'Terms of Service' });
        this.footerTOSButtonText = 'Terms of Service';
        this.footerPrivacyButton = page.getByRole('link', { name: 'Privacy' });
        this.footerPrivacyButtonText = 'Privacy';
        this.footerPartnerOverview = page.getByRole('link', { name: 'Partner Overview' });
        this.footerPartnerOverviewText = 'Partner Overview';
        this.footerResidencyNavigatorButton = page.getByRole('link', { name: 'Residency Navigator' });
        this.footerResidencyNavigatorButtonText = 'Residency Navigator';
        this.footerDeveloperAPIButton = page.getByRole('link', { name: 'Developer API' });
        this.footerDeveloperAPIButtonText = 'Developer API';
        this.footerHiringSolutionsButton = page.getByRole('link', { name: 'Hiring Solutions' });
        this.footerHiringSolutionsButtonText = 'Hiring Solutions';
        this.footerHospitalSolutionsButton = page.getByRole('link', { name: 'Hospital Solutions' });
        this.footerHospitalSolutionsButtonText  = 'Hospital Solutions';
        this.footerHelpButton = page.getByRole('link', { name: 'Help' });
        this.footerHelpButtonText = 'Help';

        //Social Media
        this.twitterButton = page.getByLabel('Doximity on Twitter');
        this.facebookButton = page.getByLabel('Doximity on Facebook');
        this.linkedInButton = page.getByLabel('Doximity on LinkedIn');
        this.youtubeButton = page.getByLabel('Doximity on Youtube');

        //Legal Text
        this.appleLegalTextLocator = page.getByText('iPhone and iPad are');
        this.appleLegalFullText = 'iPhone and iPad are trademarks of Apple Inc., registered in the U.S. and other countries.';
        this.companyCopyright = page.getByText('© 2024 Doximity, Inc.');
        
    }
    
    async goto() {
        await this.page.goto(this.pageURL);
    }

    async clickElement(pageElement) {
        pageElement.click();
    }
}