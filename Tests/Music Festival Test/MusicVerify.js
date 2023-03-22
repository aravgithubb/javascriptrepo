//IMPORTING THE SELENIUM WEBDRIVER AND CHROME

const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function verifyTitle()
{
 
 	     // LAUNCHING THE BROWSER 
       let driver = await new Builder().forBrowser("chrome").build();
      	// LAUNCH THE URL
       await driver.get("http://localhost:4200/s");
       // declaring the expected string.
       var expectedtitle="EaCodingTests";
       // getting the actual string
       var actualtitle=driver.getTitle();
       // verifying the actual and expected titles
       Assert.assertEquals(actualtitle, expectedtitle);

}    
verifyTitle()
