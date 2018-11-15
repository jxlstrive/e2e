import puppeteer from 'puppeteer';

describe('Login', () => {
  it('should login with success', async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("http://test.aircos.com/login")
    await page.type('#username', '15102214596');
    await page.type('#password', 'jxl123456');
    await page.click('button.login-form-button');
    await page.waitForNavigation();
    await page.screenshot({ path: './screenshot/login.png', type: 'png', fullPage: true })
    await page.close();
    browser.close();
  });
});
