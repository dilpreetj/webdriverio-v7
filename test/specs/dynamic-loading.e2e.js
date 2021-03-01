describe('Dynamic Loading Page', () => {
    it('wait for the hidden element to show', () => {
        const btnStart = $("#start button");
        const textFinish = $("#finish h4");
        const elLoading = $("#loading");

        browser.url('/dynamic_loading/1');

        btnStart.click();

        // browser.pause(5000); 

        elLoading.waitForDisplayed();

        elLoading.waitForDisplayed({reverse: true});

        // textFinish.waitForDisplayed();

        expect(textFinish.getText()).toEqual("Hello World!");
    });
});