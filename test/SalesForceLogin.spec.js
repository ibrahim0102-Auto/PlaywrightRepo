import { test, expect } from '@playwright/test';

test("Login SalesForce Website",async( {page} ) =>
{
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator("input[type='email']").fill("vidyar@testleaf.com")
    await page.locator("input[type='password']").fill("Sales@123")
    await page.locator("input[type='submit']").click();

    await page.waitForTimeout(8000);
    const titleofPage=await page.title();
    console.log(titleofPage);

    expect(titleofPage).toEqual("Verify Your Identity | Salesforce")
    
    
}
);