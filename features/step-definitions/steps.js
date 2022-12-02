const { Given, When, Then,  } = require('@wdio/cucumber-framework');

Given("Open the home page", async () => {
    await browser.url(`https://www.newegg.com`);
});

//I'm not sure about the correctness of this step. Unfortunately, this banner has stopped showing up for me.
Given ("Close the promo banner if it appears", async () => {
    const promoBanner= await $('//*[@id="modal-Website"]/div[2]/div');
    if(promoBanner.isExisting()){
            browser.refresh()
    }
        
});

When ("Entry the word {string} in the search bar", async (goods) => {
    await $('//input[@type="search"]').setValue(goods);
});

When ("Click the search", async () => {
    await $('//*[@class="ico ico-search"]').click();
});
Then ("Check that at least one item appears", async () => {
    const elems= await $('//*[@class="item-cell"]');
    await expect(elems).toBeExisting(); 
});

When ("Open Today's Best Deals tab", async () => {
    await $('//*[@id="trendingBanner_720202"]').click();
});

When ("Click on the Internet shop logo", async () => {
    await $('//*[@class="header2021-logo-img"]').click();
});
Then ("Check that the main page opened", async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/')
});