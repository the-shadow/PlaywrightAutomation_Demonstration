//Include Playwright module
const { test, expect } = require('@playwright/test');


const { DialerPage } = require('../pages/dialerpage');
const { MainPage } = require('../pages/mainpage');
const { AppPage } = require('../pages/apppage');
const { PartnersPage } = require('../pages/partnerspage');
const { AboutPage } = require('../pages/aboutpage');
const { LoginPage } = require('../pages/loginpage');
const { PressPage } = require('../pages/presspage');
const { InvestorsPage } = require('../pages/investorspage');
const { BlogPage } = require('../pages/blogpage');
const { WorkAtPage } = require('../pages/workatpage');
const { ContactPage } = require('../pages/contactpage');
const { OpMedPage } = require('../pages/opmedpage');
const { ResearchPage } = require('../pages/reasearchpage');
const { DirectoryPage } = require('../pages/directorypage');
const { TOSPage } = require('../pages/tospage');
const { PrivacyPage } = require('../pages/privacy');
const { ResidencyPage } = require('../pages/residencypage');
const { DevAPIPage } = require('../pages/devapipage');
const { HiringSolutionsPage } = require('../pages/hiringsolutionspage');
const { HospitalSolutionsPage } = require('../pages/hospitalsolutionspage');
const { HelpCenterPage } = require('../pages/helpcenterpage');
const { SocialMedia } = require('../pages/socialmedia');
const { MarketingDownloadPage } = require('../pages/marketingdownload');
const { ProPage } = require('../pages/propage');
const { EnterprisePage } = require('../pages/enterprisepage');
const { SecurityPage } = require('../pages/securitypage');
const { SupportPage } = require('../pages/supportpage');
const { PatentsPage } = require('../pages/patentspage');

//Hooks
//Go to the Dialer Page before running each test
test.beforeEach(async ({ page }) => {
    const dialerPage = new DialerPage(page);
    dialerPage.goto();
});

//Header
test.describe('Dialer Header Tests', () => {
    test('Test the Company Logo Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const mainPage = new MainPage(page);

        //wait for the DOM to load on the page
        await page.waitForLoadState('domcontentloaded');

        await dialerPage.clickElement(dialerPage.headerCompanyLogo);

        await page.waitForLoadState("load");

        //Assert that the company Logo goes to the correct URL
        await expect.soft(page).toHaveURL(mainPage.pageURL);
        await expect.soft(page).toHaveTitle(mainPage.pageTitle);
    })

    test('Test the App Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const appPage = new AppPage(page);

        //wait for the DOM to load on the page
        await page.waitForLoadState('domcontentloaded');

        //Assert the button Text
        await expect.soft(dialerPage.headerAppButton).toHaveText(dialerPage.headerAppButtonText);

        await dialerPage.clickElement(dialerPage.headerAppButton);

        await page.waitForLoadState("load");

        //Assert that the App Page Button goes to the correct URL
        await expect.soft(page).toHaveURL(appPage.pageURL);
        await expect.soft(page).toHaveTitle(appPage.pageTitle);
    })

    test('Test the Dialer Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        //wait for the DOM to load on the page
        await page.waitForLoadState('domcontentloaded');

        //Assert the button Text
        await expect.soft(dialerPage.headerDialerButton).toHaveText(dialerPage.headerDialerButtonText);

        await dialerPage.clickElement(dialerPage.headerDialerButton);

        await page.waitForLoadState("load");

        //Assert that the Dialer Button goes to the correct URL
        await expect.soft(page).toHaveURL(dialerPage.pageURL);
        await expect.soft(page).toHaveTitle(dialerPage.pageTitle);
    })

    test('Test the Partners Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const partnersPage = new PartnersPage(page);

        //wait for the DOM to load on the page
        await page.waitForLoadState('domcontentloaded');

        //Assert the button Text
        await expect.soft(dialerPage.headerPartnersButton).toHaveText(dialerPage.headerPartnersButtonText);

        await dialerPage.clickElement(dialerPage.headerPartnersButton);

        await page.waitForLoadState("load");

        //Assert that the Partners Button goes to the correct URL
        await expect.soft(page).toHaveURL(partnersPage.pageURL);
        await expect.soft(page).toHaveTitle(partnersPage.pageTitle);
    })

    test('Test the About Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const aboutPage = new AboutPage(page);

        //wait for the DOM to load on the page
        await page.waitForLoadState('domcontentloaded');

        //Assert the button Text
        await expect.soft(dialerPage.headerAboutButton).toHaveText(dialerPage.headerAboutButtonText);

        await dialerPage.clickElement(dialerPage.headerAboutButton);

        await page.waitForLoadState("load");

        //Assert that the Partners Button goes to the correct URL
        await expect.soft(page).toHaveURL(aboutPage.pageURL);
        await expect.soft(page).toHaveTitle(aboutPage.pageTitle);
    })

    test('Test the Download App Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const appPage = new AppPage(page);

        //wait for the DOM to load on the page
        await page.waitForLoadState('domcontentloaded');

        //Assert the button Text
        await expect.soft(dialerPage.headerDownloadAppButton).toHaveText(dialerPage.headerDownloadAppButtonText);

        await dialerPage.clickElement(dialerPage.headerDownloadAppButton);

        await page.waitForLoadState("load");

        //Assert that the Download App Button goes to the correct URL
        await expect.soft(page).toHaveURL(appPage.downloadURL);
        await expect.soft(page).toHaveTitle(appPage.pageTitle);
    })

    test('Test the Sign In Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        //wait for the DOM to load on the page
        await page.waitForLoadState('domcontentloaded');

        //Assert the button Text
        await expect.soft(dialerPage.headerSignInButton).toHaveText(dialerPage.headerSignInButtonText);

        await dialerPage.clickElement(dialerPage.headerSignInButton);

        await page.waitForLoadState("load");

        //Assert that the Sign In Button goes to the correct URL
        await expect.soft(page).toHaveURL(loginPage.pageURL);
        await expect.soft(page).toHaveTitle(loginPage.pageTitle);
        await page.waitForLoadState("load");
    })
});

//Footer
test.describe('Dialer Footer Tests', () => {
    test('Test the Company Footer Logo', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const mainPage = new MainPage(page);

        //wait for the DOM to load on the page
        await page.waitForLoadState('domcontentloaded');

        await dialerPage.clickElement(dialerPage.footerLogoButton);

        await page.waitForLoadState("load");

        //Assert that the Company Logo goes to the correct URL
        await expect.soft(page).toHaveURL(mainPage.pageURL);
        await expect.soft(page).toHaveTitle(mainPage.pageTitle);

        await page.waitForLoadState("load");
    })

    test('Test the About Us Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const aboutPage = new AboutPage(page);

        //wait for the DOM to load on the page
        await page.waitForLoadState('domcontentloaded');

        //Assert the button Text
        await expect.soft(dialerPage.footerAboutUsButton).toHaveText(dialerPage.footerAboutUsButtonText);

        await dialerPage.clickElement(dialerPage.footerAboutUsButton);

        await page.waitForLoadState("load");

        //Assert that the About Us button goes to the correct URL
        await expect.soft(page).toHaveURL(aboutPage.pageURL);
        await expect.soft(page).toHaveTitle(aboutPage.pageTitle);
    })

    test('Test the Press Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const pressPage = new PressPage(page);

        //wait for the DOM to load on the page
        await page.waitForLoadState('domcontentloaded');

        //Assert the button Text
        await expect.soft(dialerPage.footerPressButton).toHaveText(dialerPage.footerPressButtonText);

        await dialerPage.clickElement(dialerPage.footerPressButton);

        await page.waitForLoadState("load");

        //Assert that the Press button goes to the correct URL
        await expect.soft(page).toHaveURL(pressPage.pageURL);
        await expect.soft(page).toHaveTitle(pressPage.pageTitle);
    })

    test('Test the Investors Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const investorsPage = new InvestorsPage(page);

        //wait for the DOM to load on the page
        await page.waitForLoadState('domcontentloaded');

        //Assert the button Text
        await expect.soft(dialerPage.footerInvestorsButton).toHaveText(dialerPage.footerInvestorsButtonText);

        await dialerPage.clickElement(dialerPage.footerInvestorsButton);

        await page.waitForLoadState("load");

        //Assert that the Investors button goes to the correct URL
        await expect.soft(page).toHaveURL(investorsPage.pageURL);
        await expect.soft(page).toHaveTitle(investorsPage.pageTitle);
    })

    test('Test the Blog Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const blogpage = new BlogPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerBlogButton).toHaveText(dialerPage.footerBlogButtonText);

        await dialerPage.clickElement(dialerPage.footerBlogButton);

        await page.waitForLoadState("load");

        //Assert that the Blog button goes to the correct URL
        await expect.soft(page).toHaveURL(blogpage.pageURL);
        await expect.soft(page).toHaveTitle(blogpage.pageTitle);
    })

    test('Test the Work@ Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const workAtPage = new WorkAtPage(page);

        //wait for the DOM to load on the page
        await page.waitForLoadState('domcontentloaded');

        await dialerPage.clickElement(dialerPage.footerWorkAtButton);

        //NOTE: This button opens the Work@ page in a new tab
        const [pages] = await Promise.all([page.context().waitForEvent("page")]);
        const tabs = pages.context().pages();
        //console.log(tabs.length);

        await tabs[1].waitForLoadState("load");

        //Assert that the Work@ button goes to the correct URL (in a seperate tab)
        await expect.soft(tabs[1]).toHaveURL(workAtPage.pageURL);
        await expect.soft(tabs[1]).toHaveTitle(workAtPage.pageTitle);

        //console.log("first" + (await tabs[0].title()));
        //console.log("second" + (await tabs[1].title()));      
    })

    test('Test the Contact Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const contactPage = new ContactPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerContactButton).toHaveText(dialerPage.footerContactButtonText);

        await dialerPage.clickElement(dialerPage.footerContactButton);

        await page.waitForLoadState("load");

        //Assert that the Contact button goes to the correct URL
        await expect.soft(page).toHaveURL(contactPage.pageURL);
        await expect.soft(page).toHaveTitle(contactPage.pageTitle);
    })

    test('Test the App Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const appPage = new AppPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerDoximityAppButton).toHaveText(dialerPage.footerDoximityAppButtonText);

        await dialerPage.clickElement(dialerPage.footerDoximityAppButton);

        await page.waitForLoadState("load");

        //Assert that the Footer/App button goes to the correct URL
        await expect.soft(page).toHaveURL(appPage.pageURL);
        await expect.soft(page).toHaveTitle(appPage.pageTitle);
    })

    test('Test the Op-Med Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const opMedPage = new OpMedPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerOpMedButton).toHaveText(dialerPage.footerOpMedButtonText);

        await dialerPage.clickElement(dialerPage.footerOpMedButton);

        await page.waitForLoadState("load");

        //Assert that the Op-Med button goes to the correct URL
        await expect.soft(page).toHaveURL(opMedPage.pageURL);
        await expect.soft(page).toHaveTitle(opMedPage.pageTitle);
    })

    test('Test the Research Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const researchPage = new ResearchPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerResearchButton).toHaveText(dialerPage.footerResearchButtonText);

        await dialerPage.clickElement(dialerPage.footerResearchButton);

        await page.waitForLoadState("load");

        //Assert that the Research button goes to the correct URL
        await expect.soft(page).toHaveURL(researchPage.pageURL);
        await expect.soft(page).toHaveTitle(researchPage.pageTitle);
    })

    test('Test the Directory Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const directoryPage = new DirectoryPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerDirectoryButton).toHaveText(dialerPage.footerDirectoryButtonText);

        await dialerPage.clickElement(dialerPage.footerDirectoryButton);

        await page.waitForLoadState("load");

        //Assert that the Directory button goes to the correct URL
        await expect.soft(page).toHaveURL(directoryPage.pageURL);
        await expect.soft(page).toHaveTitle(directoryPage.pageTitle);
    })

    test('Test the TOS Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const tosPage = new TOSPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerTOSButton).toHaveText(dialerPage.footerTOSButtonText);

        await dialerPage.clickElement(dialerPage.footerTOSButton);

        await page.waitForLoadState("load");

        //Assert that the TOS button goes to the correct URL
        await expect.soft(page).toHaveURL(tosPage.pageURL);
        await expect.soft(page).toHaveTitle(tosPage.pageTitle);
    })

    test('Test the Privacy Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const privacyPage = new PrivacyPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerPrivacyButton).toHaveText(dialerPage.footerPrivacyButtonText);

        await dialerPage.clickElement(dialerPage.footerPrivacyButton);

        await page.waitForLoadState("load");

        //Assert that the Privacy button goes to the correct URL
        await expect.soft(page).toHaveURL(privacyPage.pageURL);
        await expect.soft(page).toHaveTitle(privacyPage.pageTitle);
    })

    test('Test the Partners Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const partnersPage = new PartnersPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerPartnerOverview).toHaveText(dialerPage.footerPartnerOverviewText);

        await dialerPage.clickElement(dialerPage.footerPartnerOverview);

        await page.waitForLoadState("load");

        //Assert that the Partners button goes to the correct URL
        await expect.soft(page).toHaveURL(partnersPage.pageURL);
        await expect.soft(page).toHaveTitle(partnersPage.pageTitle);
    })

    test('Test the Residency Navigator Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const residencyPage = new ResidencyPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerResidencyNavigatorButton).toHaveText(dialerPage.footerResidencyNavigatorButtonText);

        await dialerPage.clickElement(dialerPage.footerResidencyNavigatorButton);

        await page.waitForLoadState("load");

        //Assert that the Residency Navigator button goes to the correct URL
        await expect.soft(page).toHaveURL(residencyPage.pageURL);
        await expect.soft(page).toHaveTitle(residencyPage.pageTitle);
    })

    test('Test the Developer API Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const devAPIPage = new DevAPIPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerDeveloperAPIButton).toHaveText(dialerPage.footerDeveloperAPIButtonText);

        await dialerPage.clickElement(dialerPage.footerDeveloperAPIButton);

        await page.waitForLoadState("load");

        //Assert that the Developer API button goes to the correct URL
        await expect.soft(page).toHaveURL(devAPIPage.pageURL);
        await expect.soft(page).toHaveTitle(devAPIPage.pageTitle);
    })

    test('Test the Hiring Solutions Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const hiringSolutionsPage = new HiringSolutionsPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerHiringSolutionsButton).toHaveText(dialerPage.footerHiringSolutionsButtonText);

        await dialerPage.clickElement(dialerPage.footerHiringSolutionsButton);

        await page.waitForLoadState("load");

        //Assert that the Hiring Solutions button goes to the correct URL
        await expect.soft(page).toHaveURL(hiringSolutionsPage.pageURL);
        await expect.soft(page).toHaveTitle(hiringSolutionsPage.pageTitle);
    })

    test('Test the Hospital Solutions Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const hospitalSolutionsPage = new HospitalSolutionsPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerHospitalSolutionsButton).toHaveText(dialerPage.footerHospitalSolutionsButtonText);

        await dialerPage.clickElement(dialerPage.footerHospitalSolutionsButton);

        await page.waitForLoadState("load");

        //Assert that the Hospital Solutions button goes to the correct URL
        await expect.soft(page).toHaveURL(hospitalSolutionsPage.pageURL);
        await expect.soft(page).toHaveTitle(hospitalSolutionsPage.pageTitle);
    })

    test('Test the Help Center Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const helpCenterPage = new HelpCenterPage(page);

        await page.waitForLoadState("load");

        //Assert the button Text
        await expect.soft(dialerPage.footerHelpButton).toHaveText(dialerPage.footerHelpButtonText);

        await dialerPage.clickElement(dialerPage.footerHelpButton);

        await page.waitForLoadState("load");

        //Assert that the Help Center button goes to the correct URL
        await expect.soft(page).toHaveURL(helpCenterPage.pageURL);
        await expect.soft(page).toHaveTitle(helpCenterPage.pageTitle);
    })

    test('Test the Twitter Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const socialMedia = new SocialMedia(page);

        await page.waitForLoadState("load");

        await dialerPage.clickElement(dialerPage.twitterButton);

        //NOTE: This button opens the Twitter(X) page in a new tab
        const [pages] = await Promise.all([page.context().waitForEvent("page")]);
        const tabs = pages.context().pages();

        await tabs[1].waitForLoadState("load");

        //Assert that the Twitter button goes to the correct URL (in a seperate tab)
        await expect.soft(tabs[1]).toHaveURL(socialMedia.twitterURL);
        await expect.soft(tabs[1]).toHaveTitle(socialMedia.twitterTitle);
    })

    test('Test the Facebook Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const socialMedia = new SocialMedia(page);

        await page.waitForLoadState("load");

        await dialerPage.clickElement(dialerPage.facebookButton);

        //NOTE: This button opens the Facebook page in a new tab
        const [pages] = await Promise.all([page.context().waitForEvent("page")]);
        const tabs = pages.context().pages();

        await tabs[1].waitForLoadState("load");

        //Assert that the Facebook button goes to the correct URL (in a seperate tab)
        await expect.soft(tabs[1]).toHaveURL(socialMedia.facebookURL);
        await expect.soft(tabs[1]).toHaveTitle(socialMedia.facebookTitle);
    })

    test('Test the LinkedIn Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const socialMedia = new SocialMedia(page);

        await page.waitForLoadState("load");

        await dialerPage.clickElement(dialerPage.linkedInButton);

        //NOTE: This button opens the LinkedIn page in a new tab
        const [pages] = await Promise.all([page.context().waitForEvent("page")]);
        const tabs = pages.context().pages();

        await tabs[1].waitForLoadState("load");

        //Assert that the LinkedIn button goes to the correct URL (in a seperate tab)
        await expect.soft(tabs[1]).toHaveURL(socialMedia.linkedInURL);
        await expect.soft(tabs[1]).toHaveTitle(socialMedia.linkedInTitle);
    })

    test('Test the Youtube Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const socialMedia = new SocialMedia(page);

        await page.waitForLoadState("load");

        await dialerPage.clickElement(dialerPage.youtubeButton);

        //NOTE: This button opens the Youtube page in a new tab
        const [pages] = await Promise.all([page.context().waitForEvent("page")]);
        const tabs = pages.context().pages();

        await tabs[1].waitForLoadState("load");

        //Assert that the Youtube button goes to the correct URL (in a seperate tab)
        await expect.soft(tabs[1]).toHaveURL(socialMedia.youtubeURL);
        await expect.soft(tabs[1]).toHaveTitle(socialMedia.youtubeTitle);
    })

    test('Test the Apple Trademark Text', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await page.waitForLoadState("load");

        //Assert that the Apple Trademark text appears
        await expect.soft(dialerPage.appleLegalTextLocator).toBeVisible();
        await expect.soft(dialerPage.appleLegalTextLocator).toHaveText(dialerPage.appleLegalFullText);

        //Need to wait to avoid error
        await page.waitForLoadState("load");
    })

    test('Test the Company Copyright Text', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await page.waitForLoadState("load");

        //Assert that the Compay Copyright text appears
        await expect.soft(dialerPage.companyCopyright).toBeVisible();

        //Need to wait to avoid error
        await page.waitForLoadState("load");
    })
});

test.describe('Dialer Page Body Tests', () => {

    //Test Requires whitelisting to get around Captcha
    test.skip('Test Empty Mobile Number Entry Response', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await page.waitForLoadState("load");

        //Click the "Text Me a Link Button"
        await dialerPage.textMeALinkButton.click();

        //Check that the text: "Phone number can't be blank" is displayed
        await expect.soft(dialerPage.emptyMobileNumberResponseLocator).toBeVisible();

        //Need to wait to avoid error
        await page.waitForLoadState("load");
    })

    //Test Requires whitelisting to get around Captcha
    test.skip('Test Valid Format Mobile Number Entry Response', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await page.waitForLoadState("load");

        //Click the Mobile Number Input Box
        await dialerPage.inputBoxMobileNumber.click();
        await dialerPage.inputBoxMobileNumber.fill(dialerPage.validTestNumber);


        //Click the "Text Me a Link Button"
        await dialerPage.textMeALinkButton.click();

        //Check the success message
        await expect.soft(dialerPage.successMobileNumberResponseLocator).toBeVisible();

        await page.waitForLoadState("load");
    })

    test('Test the "See How Dialer Works" Video Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await page.waitForLoadState("load");

        //Tried other methods to wait for the content specific to the video and modal link to be ready for clicking but those methods did not work
        await page.waitForTimeout(5000);

        await page.locator('.dialer-marketing-modal-link').click("left");

        //Assert that the Video is displayed and is the correct video URL
        await expect.soft(dialerPage.videoLightBoxLocator).toBeVisible();
        await expect.soft(dialerPage.videoLightBoxLocator).toHaveAttribute('src', dialerPage.videoURL);

        //Need to wait to avoid error
        await page.waitForLoadState("load");
    })

    //Features & Benefits
    test('Test that Call Shielding is the default selection in Carousel', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await dialerPage.page.waitForLoadState("load");

        //Assert that the Shielding button is the default active button
        await expect.soft(dialerPage.carouselCallShieldingButton).toHaveAttribute('class', dialerPage.defaultActiveCarouselElementClass);
        //Assert that other buttons in the Carousel are not active
        await expect.soft(dialerPage.carouselVideoCallsButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass);
        await expect.soft(dialerPage.carouselNoReplyTextingButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass);
        await expect.soft(dialerPage.carouselHoldForMeButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass);

        //Assert Visual Check for the Default Content for that section (Call Shielding)
        await expect(dialerPage.featuresAndBenefitsLocator).toHaveScreenshot(dialerPage.callShieldingScreenshotName);

        await dialerPage.page.waitForLoadState("load");
    })

    test('Test the Video Calls Button in the Carousel', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await dialerPage.page.waitForLoadState("load");

        //Assert that Video Calls is inactive by default
        await expect.soft(dialerPage.carouselVideoCallsButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass);

        await dialerPage.carouselVideoCallsButton.click();
        await dialerPage.page.waitForTimeout(1000);

        //Assert that the Video calls button is now active
        await expect.soft(dialerPage.carouselVideoCallsButton).toHaveAttribute('class', dialerPage.activeCarouselBulletClass);
        //Assert that the other buttons are inactive
        await expect.soft(dialerPage.carouselCallShieldingButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass + ' active');
        await expect.soft(dialerPage.carouselNoReplyTextingButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass);
        await expect.soft(dialerPage.carouselHoldForMeButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass);

        //Assert Visual Check
        await expect.soft(dialerPage.featuresAndBenefitsLocator).toHaveScreenshot(dialerPage.videoCallsScreenshotName, { maxDiffPixelRatio: parseFloat(process.env.MaxPixelRatioComparion) });

        await dialerPage.page.waitForLoadState("load");
    })

    test('Test the No Reply texting Button in the Carousel', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await dialerPage.page.waitForLoadState("load");

        //Assert that No Reply Texting is inactive by default
        await expect.soft(dialerPage.carouselNoReplyTextingButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass);

        await dialerPage.carouselNoReplyTextingButton.click();
        await dialerPage.page.waitForTimeout(1000);

        //Assert that the No Reply Texting button is now active
        await expect.soft(dialerPage.carouselNoReplyTextingButton).toHaveAttribute('class', dialerPage.activeCarouselBulletClass);
        //Assert that the other buttons are inactive
        await expect.soft(dialerPage.carouselCallShieldingButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass + ' active');
        await expect.soft(dialerPage.carouselVideoCallsButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass);
        await expect.soft(dialerPage.carouselHoldForMeButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass);

        //Assert Visual Check
        await expect.soft(dialerPage.featuresAndBenefitsLocator).toHaveScreenshot(dialerPage.noReplyTextingScreenshotName, { maxDiffPixelRatio: parseFloat(process.env.MaxPixelRatioComparion) });

        await dialerPage.page.waitForLoadState("load");
    })

    test('Test the Hold For Me Button in the Carousel', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await dialerPage.page.waitForLoadState("load");

        //Assert that Hold For Me is inactive by default
        await expect.soft(dialerPage.carouselHoldForMeButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass);

        await dialerPage.carouselHoldForMeButton.click();
        await dialerPage.page.waitForTimeout(1500);

        //Assert that the Hold For Me button is now active
        await expect.soft(dialerPage.carouselHoldForMeButton).toHaveAttribute('class', dialerPage.activeCarouselBulletClass);
        //Assert that the other buttons are inactive
        await expect.soft(dialerPage.carouselCallShieldingButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass + ' active');
        await expect.soft(dialerPage.carouselVideoCallsButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass);
        await expect.soft(dialerPage.carouselNoReplyTextingButton).toHaveAttribute('class', dialerPage.inactiveCarouselElementClass);

        //Assert Visual Check
        await expect.soft(dialerPage.featuresAndBenefitsLocator).toHaveScreenshot(dialerPage.holdForMeScreenshotName);

        await dialerPage.page.waitForLoadState("load");
    })

    test('Test the Reviews Carousel Button 1', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await dialerPage.page.waitForLoadState("load");

        //Assert that the Carousel Button 1 is active by default
        await expect.soft(dialerPage.reviewCarouselButton1).toHaveAttribute('class', dialerPage.activeReviewCarouselButton);
        //Assert that the other buttons are inactive
        await expect.soft(dialerPage.reviewCarouselButton2).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton3).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton4).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton5).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);

        //Assert Visual Check
        await expect(dialerPage.reviewsCarouselLocator).toHaveScreenshot(dialerPage.reviewsScreenshot1);

        await dialerPage.page.waitForLoadState("load");
    })

    //TODO test review carousel button 2,3,4
    //Test the apple and android download buttons
    //Test 6 buttons for upgrade and
    //Then move on to Sign In testing
    test('Test the Reviews Carousel Button 2', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await dialerPage.page.waitForLoadState("load");

        //Assert that the Carousel Button 1 is active by default
        await expect.soft(dialerPage.reviewCarouselButton1).toHaveAttribute('class', dialerPage.activeReviewCarouselButton);

        //Click the Button and check that it is active
        await dialerPage.reviewCarouselButton2.click();
        await page.waitForTimeout(1000);
        await expect.soft(dialerPage.reviewCarouselButton2).toHaveAttribute('class', dialerPage.activeReviewCarouselButton);

        //Assert that the other buttons are inactive
        await expect.soft(dialerPage.reviewCarouselButton1).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton3).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton4).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton5).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);

        //Assert Visual Check
        await expect(dialerPage.reviewsCarouselLocator).toHaveScreenshot(dialerPage.reviewsScreenshot2);

        await dialerPage.page.waitForLoadState("load");
    })

    test('Test the Reviews Carousel Button 3', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await dialerPage.page.waitForLoadState("load");

        //Assert that the Carousel Button 1 is active by default
        await expect.soft(dialerPage.reviewCarouselButton1).toHaveAttribute('class', dialerPage.activeReviewCarouselButton);

        //Click the Button and check that it is active
        await dialerPage.reviewCarouselButton3.click();
        await page.waitForTimeout(1000);
        await expect.soft(dialerPage.reviewCarouselButton3).toHaveAttribute('class', dialerPage.activeReviewCarouselButton);

        //Assert that the other buttons are inactive
        await expect.soft(dialerPage.reviewCarouselButton1).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton2).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton4).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton5).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);

        //Assert Visual Check
        await expect.soft(dialerPage.reviewsCarouselLocator).toHaveScreenshot(dialerPage.reviewsScreenshot3);

        await dialerPage.page.waitForLoadState("load");
    })

    test('Test the Reviews Carousel Button 4', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await dialerPage.page.waitForLoadState("load");

        //Assert that the Carousel Button 1 is active by default
        await expect.soft(dialerPage.reviewCarouselButton1).toHaveAttribute('class', dialerPage.activeReviewCarouselButton);

        //Click the Button and check that it is active
        await dialerPage.reviewCarouselButton4.click();
        await page.waitForTimeout(1000);
        await expect.soft(dialerPage.reviewCarouselButton4).toHaveAttribute('class', dialerPage.activeReviewCarouselButton);

        //Assert that the other buttons are inactive
        await expect.soft(dialerPage.reviewCarouselButton1).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton2).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton3).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton5).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);

        //Assert Visual Check
        await expect.soft(dialerPage.reviewsCarouselLocator).toHaveScreenshot(dialerPage.reviewsScreenshot4);

        await dialerPage.page.waitForLoadState("load");
    })

    test('Test the Reviews Carousel Button 5', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await dialerPage.page.waitForLoadState("load");

        //Assert that the Carousel Button 1 is active by default
        await expect.soft(dialerPage.reviewCarouselButton1).toHaveAttribute('class', dialerPage.activeReviewCarouselButton);

        //Click the Button and check that it is active
        await dialerPage.reviewCarouselButton5.click();
        await page.waitForTimeout(1000);
        await expect.soft(dialerPage.reviewCarouselButton5).toHaveAttribute('class', dialerPage.activeReviewCarouselButton);

        //Assert that the other buttons are inactive
        await expect.soft(dialerPage.reviewCarouselButton1).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton2).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton3).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);
        await expect.soft(dialerPage.reviewCarouselButton4).toHaveAttribute('class', dialerPage.inactiveReviewCarouselButton);

        //Assert Visual Check
        await expect.soft(dialerPage.reviewsCarouselLocator).toHaveScreenshot(dialerPage.reviewsScreenshot5, { maxDiffPixelRatio: parseFloat(process.env.MaxPixelRatioComparion) });

        await dialerPage.page.waitForLoadState("load");
    })

    test('Test the Download for IOS Button (Logged Out)', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const marketingDownloadPage = new MarketingDownloadPage(page);

        page.waitForLoadState('load');

        await dialerPage.downloadForIOSButton.click();

        page.waitForLoadState('load');

        //Assert that the Press button goes to the correct URL
        await expect.soft(page).toHaveURL(marketingDownloadPage.pageURL);
        await expect.soft(page).toHaveTitle(marketingDownloadPage.pageTitle);
    })

    test('Test the Get it on Google Play  Button (Logged Out)', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const marketingDownloadPage = new MarketingDownloadPage(page);

        page.waitForLoadState('load');

        await dialerPage.downloadForAndroidButton.click();

        page.waitForLoadState('load');

        //Assert that the Press button goes to the correct URL
        await expect.soft(page).toHaveURL(marketingDownloadPage.pageURL);
        await expect.soft(page).toHaveTitle(marketingDownloadPage.pageTitle);
    })

    test('Test the Upgrade to Pro Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const proPage = new ProPage(page);

        await page.waitForLoadState('load');

        await expect(page.locator('#wcag-main-content')).toContainText('Upgrade to Pro');

        await dialerPage.clickElement(dialerPage.upgradeToProButton);

        //NOTE: This button opens the Upgrade Page in a new tab
        const [pages] = await Promise.all([page.context().waitForEvent("page")]);
        const tabs = pages.context().pages();

        await tabs[1].waitForLoadState("load");

        //Assert that the Upgrade button goes to the correct URL (in a seperate tab)
        await expect.soft(tabs[1]).toHaveURL(proPage.purchasePageURL);
        await expect.soft(tabs[1]).toHaveTitle(proPage.purchasePageTitle);
    })

    test('Test the View Plans & Pricing Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const proPage = new ProPage(page);

        await page.waitForLoadState('load');

        await expect(page.locator('#wcag-main-content')).toContainText('View Plans & Pricing');

        await dialerPage.clickElement(dialerPage.viewPlansAndPricingButton);

        await page.waitForLoadState("load");

        //Assert that the button goes to the correct URL
        await expect.soft(page).toHaveURL(proPage.pageURL);
        await expect.soft(page).toHaveTitle(proPage.pageTitle);
    })

    test('Test the Enterprise Inquiries Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const enterprisePage = new EnterprisePage(page);

        await page.waitForLoadState('load');

        await expect(page.locator('#wcag-main-content')).toContainText('Enterprise Inquiries');

        await dialerPage.clickElement(dialerPage.enterpriseInquiriesButton);

        //Assert that the button goes to the correct URL
        await expect.soft(page).toHaveURL(enterprisePage.pageURL);
        await expect.soft(page).toHaveTitle(enterprisePage.pageTitle);

        await page.waitForLoadState('load');
    })

    test('Test the Security Information Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const securityPage = new SecurityPage(page);

        await page.waitForLoadState('load');

        await expect(page.locator('#wcag-main-content')).toContainText('Security Information');

        await dialerPage.clickElement(dialerPage.securityInformationButton);

        //Assert that the button goes to the correct URL
        await expect.soft(page).toHaveURL(securityPage.pageURL);
        await expect.soft(page).toHaveTitle(securityPage.pageTitle);

        await page.waitForLoadState('load');
    })

    test('Test the Features FAQ Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const supportPage = new SupportPage(page);

        await page.waitForLoadState('load');

        await expect(page.locator('#wcag-main-content')).toContainText('Feature FAQ');

        await dialerPage.clickElement(dialerPage.featureFAQButton);

        //Assert that the button goes to the correct URL
        await expect.soft(page).toHaveURL(supportPage.featureFAQURL);
        await expect.soft(page).toHaveTitle(supportPage.featureFAQTitle);

        await page.waitForLoadState('load');
    })

    test('Test the Patents Information Button', async ({ page }) => {

        const dialerPage = new DialerPage(page);
        const patentsPage = new PatentsPage(page);

        await page.waitForLoadState('load');

        await expect(page.locator('#wcag-main-content')).toContainText('Patent Information');

        await dialerPage.clickElement(dialerPage.patentInformationButton);

        //Assert that the button goes to the correct URL
        await expect.soft(page).toHaveURL(patentsPage.pageURL);
        await expect.soft(page).toHaveTitle(patentsPage.pageTitle);

        await page.waitForLoadState('load');
    })

    test('Test the Page Body Section Headers', async ({ page }) => {

        await expect(page.getByRole('heading', { name: 'Your mobile medical office.' })).toBeVisible();
        await expect(page.locator('#wcag-main-content')).toContainText('Your mobile medical office.');
        await expect(page.getByRole('heading', { name: 'Features and benefits' })).toBeVisible();
        await expect(page.locator('#wcag-main-content')).toContainText('Features and benefits');
        await expect(page.getByRole('heading', { name: 'Convert your smart phone to a' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'The reviews are in' })).toBeVisible();
        await expect(page.locator('#wcag-main-content')).toContainText('The reviews are in');
        await expect(page.getByRole('heading', { name: 'Upgrade to Dialer Pro or' })).toBeVisible();
        await expect(page.locator('#wcag-main-content')).toContainText('Upgrade to Dialer Pro or Enterprise');

        await page.waitForLoadState('load');
    })

    test('Test the Full Page Visual Layout', async ({ page }) => {

        const dialerPage = new DialerPage(page);

        await page.waitForLoadState("load");
        await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(3000);
        //Assert Visual Check for the full page at https://www.doximity.com/dialer
        await expect(page).toHaveScreenshot(dialerPage.fullPageScreenshot, { maxDiffPixelRatio: parseFloat(process.env.MaxPixelRatioComparion) });

        await page.waitForLoadState("load");
    })
});