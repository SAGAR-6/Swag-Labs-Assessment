import { test , expect }  from '@playwright/test'


test.beforeEach(async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    const pageTitle = await page.title();
    console.log('page title is - ', pageTitle);
    await expect(page).toHaveTitle('Swag Labs');

    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  });

test.describe('test1', () => {

    test('Home page and cart',async function({page}) {

        const productName = await page.textContent('#item_4_title_link');
        console.log('First product on List is', productName);

        await page.click('#add-to-cart-sauce-labs-backpack');
        await expect(page.getByText('Remove')).toBeVisible();
        
        await page.click('[class="shopping_cart_link"]');
        await expect(page.getByText('Sauce Labs BackPack')).toBeVisible();

        await page.click('#react-burger-menu-btn');
        await page.click('#logout_sidebar_link');
        await expect(page).toHaveURL('https://www.saucedemo.com/')
        await page.close();
    });
});