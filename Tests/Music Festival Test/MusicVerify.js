//IMPORTING THE SELENIUM WEBDRIVER AND CHROME

const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
var assert=require("assert");
 
async function verifyTitle()
{
 
 	     // LAUNCHING THE BROWSER 
       let driver = await new Builder().forBrowser("chrome").build();
      	// LAUNCH THE URL
       await driver.get("http://localhost:4200/s");
       // implicit wati to sync with webdriver.
       await driver.manage().setTimeouts( {implicit : 10000} );
       // maximize the browser
       await driver.manage().window().fullscreen();
       // declaring the expected string.
       var expectedtitle="EaCodingTests";
       // getting the actual string
       var actualtitle=driver.getTitle();
       // validating the actual and expected text 
      assert.strictEqual(actualtitle,expectedtitle);
      // quit the browser
      await driver.quit();

}    
verifyTitle()
