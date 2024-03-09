const { test , expect } = require('@playwright/test');

const baseUrl = 'http://localhost:3000';
const navBarElement = 'nav.navbar';

test('verify if all-links page is visible', async({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector(navBarElement);
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true)
});
test('verify if login button is visible', async({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector(navBarElement);
    const loginButtonElement = await page.$('a[href="/login"]');
    const isLinkVisible = await loginButtonElement.isVisible();
    expect(isLinkVisible).toBe(true)
});
test('verify if register button is visible', async({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector(navBarElement);
    const registerButtonElement = await page.$('a[href="/register"]');
    const isLinkVisible = await registerButtonElement.isVisible();
    expect(isLinkVisible).toBe(true)
});
test('verify "All Books" link is visible after sucessfull login ', async({ page }) => {
    await page.goto(`${baseUrl}/login`);
    await page.waitForSelector(navBarElement);

    //register
    await page.fill('input[name="email"]' , 'peter@abv.bg');
    await page.fill('input[name="password"]' , '123456');
    await page.click('input[type="submit"]');

    const allBooksLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true)
});
test('verify "My Books" link is visible after sucessfull login ', async({ page }) => {
    await page.goto(baseUrl);
    await page.click('#guest > a:nth-child(1)')
    await page.waitForSelector(navBarElement);

    //register
    await page.fill('input[name="email"]' , 'peter@abv.bg');
    await page.fill('input[name="password"]' , '123456');
    await page.click('input[type="submit"]');

    const myBookLink = await page.$('#user > a:nth-child(2)');
    const isLinkVisible = await myBookLink.isVisible();
    expect(isLinkVisible).toBe(true)
});