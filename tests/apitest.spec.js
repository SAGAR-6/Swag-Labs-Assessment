import { test, expect } from '@playwright/test'

test('Get request and validate status code is 200', async function({request}) {

    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    await expect (response.status()).toBe(200);

})