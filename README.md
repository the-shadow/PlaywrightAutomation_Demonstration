This project uses Playwright in VSCode to automate front end and functionality testing for websites.

Automation tests are run on https://www.doximity.com/dialer in this example demonstration.

The main tests are in 2 files

1) https://github.com/the-shadow/PlaywrightAutomation_Demonstration/blob/main/tests/logintest.spec.js
2) https://github.com/the-shadow/PlaywrightAutomation_Demonstration/blob/main/tests/testsuite.spec.js

Page Object Model is used, so basic webpage information is stored in page files in the page subdirectory so that the .spec test files can access data in a centralized location.

To Run the tests you can open the root directory in VSCode and use the Testing Panel (Recommended).

You can also open a terminal from the project root directory with one of these Playwright commands for the test files:
1) npx playwright test testsuite.spec.js
2) npx playwright test logintest.spec.js

A report is automatically generated in the playwright-report folder and can be viewed by opening "index" in a browser.
