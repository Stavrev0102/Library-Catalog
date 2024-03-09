const { test , expect } = require('@playwright/test')

test('verify if all-links page is visible', async({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true)
})
test('verify if login button is visible', async({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');
    const loginButtonElement = await page.$('a[href="/login"]');
    const isLinkVisible = await loginButtonElement.isVisible();
    expect(isLinkVisible).toBe(true)
})
test('verify if register button is visible', async({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');
    const registerButtonElement = await page.$('a[href="/register"]');
    const isLinkVisible = await registerButtonElement.isVisible();
    expect(isLinkVisible).toBe(true)
})