//Include Playwright Module
const { expect } = require('@playwright/test')

exports.LoginPage = class LoginPage {

    /**
     * 
     * @param {import  ('@playwright/test').Page} page 
     */
    constructor(page) {
        //Init page object
        this.page = page;

        this.pageURL = new RegExp('^https://auth.doximity.com/sessions/login\\?client_id=');
        this.pageTitle = "Sign In to Doximity";

        //Elements - defining locators for each page element
        //Sign In
        this.signInField = page.getByRole('heading', { name: 'Sign in' });
        this.emailEntryField = page.getByPlaceholder('Email');
        this.passwordEntryField = page.getByPlaceholder('Password');
        this.sharedComputerCheckBox = page.getByRole('checkbox', { name: 'This is a shared computer' });
        this.signInErrorToolTipCSSLocator = page.locator("[aria-label= 'We can't find that email address']");

        this.signInErrorScreenshot = 'SignInScreenShotError.png';
        this.signInScreenshot = 'SignInScreenshot.png';

        //Notice - Displays Error Messages on Sign in
        this.noticeLocator = page.locator('#notice')
        this.noticeRegistrationButton = page.locator('#notice').getByRole('link', { name: 'Find your profile' });
        this.noticeTextLocator = page.getByText('The email you entered isn’t');

        //Sign in Button
        this.signInButton = page.locator("[id='signinbutton']");

        //Continue With Buttons
        this.ssoButton = page.getByLabel('Sign In with single sign on (');
        this.appleButton = page.getByLabel('Sign In with Apple');
        this.googleButton = page.getByLabel('Sign In with Google');
        this.microsoftButton = page.getByLabel('Sign In with Microsoft');

        //Phone Entry
        this.phoneEntryField = page.getByPlaceholder('Enter your mobile number');
        this.phoneEntrySendButton = page.getByRole('button', { name: 'Send' });
        this.phoneEntryErrorLocator = page.locator('#formErrors');

        //Registration
        this.registrationButton = page.getByRole('link', { name: 'Find your profile' });
        //Forgot Password
        this.forgotPasswordButton = page.getByRole('link', { name: 'Forgot your password?' });

        //Footer
        this.footerHelpButton = page.getByLabel('Get Help or Support');
        this.footerTOSButton = page.getByLabel('Doximity Terms of Service');
        this.footerPrivacyButton = page.getByLabel('Doximity Privacy Policy');

        this.footerGooglePrivacyPolicyButton = page.getByLabel('Google Privacy Policy');
        this.footerGoogleTOSButton = page.getByLabel('Google Terms of Service');
        
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }
}