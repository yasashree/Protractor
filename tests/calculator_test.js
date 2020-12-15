

let HomePage = require('../pages/HomePage');

describe('POM for calculator',function(){

    browser.sleep(2000);  
HomePage.get('https://juliemr.github.io/protractor-demo/');

HomePage.EnterFirst_input('54');
browser.sleep(1000);
HomePage.EnterSecond_input('452');
browser.sleep(1000);
HomePage.EnterOperator_select();
browser.sleep(1000);
HomePage.ClickButton();
browser.sleep(3000);
HomePage.Calculation('24408');
browser.sleep(1000);
});