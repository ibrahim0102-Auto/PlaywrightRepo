
import { test, chromium,firefox } from '@playwright/test';


test.skip("Red Bus in Edge & Flipkart in FireFox ",async() =>
{

     const browser= await chromium.launch({channel:'msedge'});
      const context=await browser.newContext();
      const page=await context.newPage();
      await page.goto("https://www.redbus.in");
      await page.waitForTimeout(8000);

      const pageTitle=await page.title();
      console.log(`Title of the Red Bus page is ${pageTitle}`)

      const Url= page.url();
      console.log(`URL of the Red Bus page is ${Url}`)

      console.log("****************************************************")

      const browser1= await firefox.launch();
      const context1=await browser1.newContext();
      const page1=await context1.newPage();
      await page1.goto("https://www.flipkart.com");
      await page1.waitForTimeout(8000);

      const pageTitle1=await page1.title();
      console.log(`Title of the Flipkart page is ${pageTitle1}`)

      const Url1=await page1.url();
      console.log(`URL of the Flipkart page is ${Url1}`)

}



);

