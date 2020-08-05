describe('Cafetownsend Homepage' , function(){
    it('Validate login',function(){
        browser.get("http://cafetownsend-angular-rails.herokuapp.com/login")
        browser.sleep(3000);
        browser.manage().window().maximize()

        expect(browser.getTitle()).toBe("CafeTownsend-AngularJS-Rails")
        element(by.model('user.name')).sendKeys('Luke');
        element(by.model('user.password')).sendKeys('Skywalker');
        element(by.buttonText('Login')).click();
        browser.sleep(3000);
        let greetmsg = element(by.id('greetings'));
        expect(greetmsg.getText()).toBe("Hello Luke");
        let logout = element(by.css('[ng-click="logout()"]'));
        expect(logout.isPresent()).toBe(true);
        logout.click();

    })



});