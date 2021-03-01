describe('Main Page', () => {
    it('Verify list items', () => {
        browser.url('/');

        const listExamples = $$("ul li"); //findElements

        expect(listExamples).toBeElementsArrayOfSize({gte: 1});
    });
});