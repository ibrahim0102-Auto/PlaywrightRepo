import { test, chromium } from '@playwright/test';

//without page fixture
test("Launch Browser", async() =>
{
   const browser= await chromium.launch();
   const context=await browser.newContext();
   const page=await context.newPage();
   await page.goto("https://www.google.com");
   console.log("Test Case 1 Executed...");
});

//with page fixture
test("Launch Browser with page fixture", async({page}) =>
{
 
   await page.goto("https://playwright.dev/docs/api/class-test");
      console.log("Test Case 2 Executed...");


});
