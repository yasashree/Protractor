
let HomePage = function(){
    let first_input = element(by.model('first'));
    let second_input = element(by.model('second'));
    let operator_select = element(by.cssContainingText('option','*'));
    let goButton = element(by.id('gobutton'));
    
       
    this.get = function(url){
        browser.get(url);
    };
    this.EnterFirst_input = function(firstno){
        first_input.sendKeys(firstno);
    };
    this.EnterSecond_input = function(secondno){
        second_input.sendKeys(secondno);
    };
    this.EnterOperator_select = function(){
        operator_select.click();
    };
    this.ClickButton = function(){
        goButton.click();
    };
    this.Calculation = function(result){
        //let output = element(by.xpath("//h2[@class='ng-binding']",result));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.textToBePresentInElement(by.xpath("//h2[@class='ng-binding']"), result), 5000);
        

        browser.wait(3000);
        //expect(output.getText()).toEqual(result);      
    };
};
module.exports = new HomePage();