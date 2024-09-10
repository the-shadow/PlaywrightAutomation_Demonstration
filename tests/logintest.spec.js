//Include Playwright module
const { test, expect } = require('@playwright/test');

const { DialerPage } = require('../pages/dialerpage');
const { LoginPage } = require('../pages/loginpage');

//Hooks
//Go to the Dialer Page before running each test
test.beforeEach(async ({ page }) => {
    const dialerPage = new DialerPage(page);
    dialerPage.goto();
});


test.describe('Doximity Sign In Tests', () => {

    test('Test the Visual Page Layout', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        //Assert a Visual Comparison
        await expect(loginPage.page).toHaveScreenshot(loginPage.signInScreenshot, { maxDiffPixelRatio: parseFloat(process.env.MaxPixelRatioComparion) });

        await page.waitForLoadState('load');
    })

    test('Test an Invalid Sign In using Empty Information', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.signInButton.click();

        //Assert that the Orange notice locator appears
        await expect(loginPage.noticeLocator).toBeVisible();
        //Assert that the text within the orange notice locator is visible
        await expect(loginPage.noticeTextLocator).toBeVisible();
        //Assert that the Registration button appears within the notice locator section
        await expect(loginPage.noticeRegistrationButton).toBeVisible();

        //Assert that the Sign in Button Becomes Disabled
        //the html that this is based on
        //<button aria-label="Sign In" class="btn blue solid full btn-signin" data-sel-signin-button="" data-da-event="auth_login_button_signin" id="signinbutton" name="button" tabindex="0" type="submit" disabled="">
        await expect(loginPage.signInButton).toHaveAttribute('disabled', '');

        //Assert a Visual Comparison
        await expect(loginPage.page).toHaveScreenshot(loginPage.signInErrorScreenshot, { maxDiffPixelRatio: parseFloat(process.env.MaxPixelRatioComparion) });

        await page.waitForLoadState('load');
    })

    test('Test an Invalid Sign In using Incorrect Information', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.emailEntryField.fill('znebaejrei0091@notarealzzzmail.com');
        await loginPage.passwordEntryField.fill('completelybadpassword0123');

        await loginPage.signInButton.click();

        //Assert that the Orange notice locator appears
        await expect(loginPage.noticeLocator).toBeVisible();
        //Assert that the text within the orange notice locator is visible
        await expect(loginPage.noticeTextLocator).toBeVisible();
        //Assert that the Registration button appears within the notice locator section
        await expect(loginPage.noticeRegistrationButton).toBeVisible();

        //Assert that the Sign in Button Becomes Disabled
        //the html that this is based on
        //<button aria-label="Sign In" class="btn blue solid full btn-signin" data-sel-signin-button="" data-da-event="auth_login_button_signin" id="signinbutton" name="button" tabindex="0" type="submit" disabled="">
        await expect(loginPage.signInButton).toHaveAttribute('disabled', '');

        //Assert a Visual Comparison
        await expect(loginPage.page).toHaveScreenshot(loginPage.signInErrorScreenshot, { maxDiffPixelRatio: parseFloat(process.env.MaxPixelRatioComparion) });

        await page.waitForLoadState('load');
    })

    test.skip('Test an Valid Sign In using Correct Information', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        //Insert Tester Email / Password here
        //await loginPage.emailEntryField.fill('tester123@companyemail.com');
        //await loginPage.passwordEntryField.fill('p@ssword');

        await loginPage.signInButton.click();

        //Assert the expected URL for successful login
        //await expect(page).toHaveURL('replace with url');

        //Assert the expected page title for successful login
        //await expect(page).toHaveTitle('replace with expected title');

        await page.waitForLoadState('load');
    })

    test('Test SSO Invalid Sign In', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.ssoButton.click();

        //Fill out bad login info and click submit
        await page.getByPlaceholder('Email Address').click();
        await page.getByPlaceholder('Email Address').fill('testerfakeemail123@nyu.edu');
        await page.getByRole('button', { name: 'Submit' }).click();

        //Assert 
        await expect(page.getByText('Your organization does not have SSO with Doximity. Return to sign in')).toBeVisible();

        await expect(page.getByRole('link', { name: 'Return to sign in' })).toBeVisible();

        await expect(page.locator('#wcag-main-content')).toContainText('Your organization does not have SSO with Doximity.');

        await page.waitForLoadState('load');
    })

    test.skip('Test SSO Valid Sign In', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.ssoButton.click();

        //Visual Page Check
        await expect.soft(page).toHaveScreenshot('SSOSignIn.png', { maxDiffPixelRatio: parseFloat(process.env.MaxPixelRatioComparion) });

        //Fill out bad login info and click submit
        await page.getByPlaceholder('Email Address').click();
        await page.getByPlaceholder('Email Address').fill('replace with valid email');
        await page.getByRole('button', { name: 'Submit' }).click();

        //Assert the expected URL for successful login
        //await expect(page).toHaveURL('replace with url');

        //Assert the expected page title for successful login
        //await expect(page).toHaveTitle('replace with expected title');

    })

    test('Test Apple Login Page', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.appleButton.click();


        //Assert that we land on apple login page
        await expect.soft(page).toHaveTitle('Sign in with Apple ID');

        //Visual Page Check
        await expect.soft(page).toHaveScreenshot('AppleSignIn.png', { maxDiffPixelRatio: parseFloat(process.env.MaxPixelRatioComparion) });
    })

    test('Test Google Login Page', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.googleButton.click();


        //Assert that we land on google login page
        await expect.soft(page).toHaveTitle('Sign in - Google Accounts');

        //Visual Page Check
        await expect.soft(page).toHaveScreenshot('GoogleSignIn.png', { maxDiffPixelRatio: parseFloat(process.env.MaxPixelRatioComparion) });
    })

    test('Test Microsoft Login Page', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.microsoftButton.click();

        //Assert that we land on Microsoft login page
        await expect.soft(page).toHaveTitle('Sign in to your account');

        //Visual Page Check
        await expect.soft(page).toHaveScreenshot('MicrosoftSignIn.png', { maxDiffPixelRatio: parseFloat(process.env.MaxPixelRatioComparion) });

    })

    test('Test The Registration Button (Find Your Profile)', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.registrationButton.click();

        await page.waitForLoadState('load');

        //Assertions
        await expect.soft(page).toHaveURL('https://www.doximity.com/registration/search?bucket=sign_in_find_profile&return_to=https%3A%2F%2Fwww.doximity.com%2F');
        await expect.soft(page).toHaveTitle('Doximity - Sign Up - Search');
    })

    test('Test The Forgot Your Password Button', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.forgotPasswordButton.click();

        await page.waitForLoadState('load');

        //Assertions for page url and title
        await expect.soft(page).toHaveURL('https://auth.doximity.com/password_reset?redirect_to=https%3A%2F%2Fwww.doximity.com%2F');
        await expect.soft(page).toHaveTitle('Forgot your Doximity password?');

        await page.getByPlaceholder('Email Address').click();
        await page.getByPlaceholder('Email Address').fill('testemail123@pwetest.com');
        await page.getByRole('button', { name: 'Submit' }).click();

        //Assertions for sent text
        await expect.soft(page.getByText('Check your spam folder. Still')).toBeVisible();
        await expect.soft(page.locator('#wcag-main-content')).toContainText('Check your spam folder. Still having problems? Contact support.');
        await expect.soft(page.getByText('If you don\'t receive the')).toBeVisible();
        await expect.soft(page.locator('#wcag-main-content')).toContainText('If you don\'t receive the email we sent you, it\'s possible you don\'t have an account or it\'s under a different email.');
        await expect.soft(page.getByRole('link', { name: 'Contact support' })).toBeVisible();
        await expect.soft(page.locator('#wcag-main-content')).toContainText('Contact support');
        
        //Assertions for landing on help center submit a request page
        await page.getByRole('link', { name: 'Contact support' }).click();
        await page.waitForLoadState('load');
        await expect.soft(page).toHaveURL('https://support.doximity.com/hc/en-us/requests/new');
        await expect.soft(page).toHaveTitle('Submit a request – Help Center');
    })
});

test.describe('Doximity Get the Phone App Tests', () => {
    test('Test Phone Entry for Doximity App - Empty Field', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.phoneEntrySendButton.click();

        //Assertions
        await expect(page.getByText('There was an error processing')).toBeVisible();
        await expect(page.locator('#formErrorsText')).toContainText('There was an error processing the request');
    })

    test('Test Phone Entry for Doximity App - Invalid Input', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.phoneEntryField.fill('123');
        await loginPage.phoneEntrySendButton.click();

        //Assertions
        await expect(page.getByText('There was an error processing')).toBeVisible();
        await expect(page.locator('#formErrorsText')).toContainText('There was an error processing the request');
    })

    test.skip('Test Phone Entry for Doximity App - Correct input', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.phoneEntryField.fill('insert a real test phone number here');
        await loginPage.phoneEntrySendButton.click();

        //Assertion - Assert the success message here
    })
});

test.describe('Doximity Login Footer Tests', () => {
    test('Test Footer Help Button', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.footerHelpButton.click();

        await page.waitForLoadState('load');

        //Assertions
        await expect.soft(page).toHaveURL('https://support.doximity.com/hc/en-us');
        await expect.soft(page).toHaveTitle('Help Center');
    })

    test('Test Footer TOS Button', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.footerTOSButton.click();

        await page.waitForLoadState('load');

        //Assertions
        await expect.soft(page).toHaveURL('https://www.doximity.com/terms-of-service');
        await expect.soft(page).toHaveTitle('Doximity Terms of Service');
    })

    test('Test Footer Privacy Button', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.footerPrivacyButton.click();

        await page.waitForLoadState('load');

        //Assertions
        await expect.soft(page).toHaveURL('https://www.doximity.com/clinicians/privacy');
        await expect.soft(page).toHaveTitle('Doximity Privacy Policy');
    })

    test('Test Footer Google Privacy Button', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.footerGooglePrivacyPolicyButton.click();

        //Google Privacy Page opens in a separate Tab
        const [pages] = await Promise.all([page.context().waitForEvent("page")]);
        const tabs = pages.context().pages();

        await tabs[1].waitForLoadState("load");

        //Assertions
        await expect.soft(tabs[1]).toHaveURL('https://policies.google.com/privacy');
        await expect.soft(tabs[1]).toHaveTitle('Privacy Policy – Privacy & Terms – Google');
    })

    test('Test Footer Google TOS Button', async ({ page }) => {
        const dialerPage = new DialerPage(page);
        const loginPage = new LoginPage(page);

        await page.waitForLoadState('load');

        await dialerPage.headerSignInButton.click();

        await page.waitForLoadState('load');

        await loginPage.footerGoogleTOSButton.click();

        //Google Privacy Page opens in a separate Tab
        const [pages] = await Promise.all([page.context().waitForEvent("page")]);
        const tabs = pages.context().pages();

        await tabs[1].waitForLoadState("load");

        //Assertions
        await expect.soft(tabs[1]).toHaveURL('https://policies.google.com/terms');
        await expect.soft(tabs[1]).toHaveTitle('Google Terms of Service – Privacy & Terms – Google');
    })
});

   