describe('addItemForm', () => {
    it('base example, visually looks correct', async () => {
        await page.goto('http://localhost:6006/iframe.html?id=personal-information--example-1&viewMode=story');
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    })
})