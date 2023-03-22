//IMPORTING THE SELENIUM WEBDRIVER AND CHROME
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function festival()
{
 	// LAUNCHING THE BROWSER
       let driver = await new Builder().forBrowser("chrome").build();
	// LAUNCH THE URL
       await driver.get("http://localhost:4200/s");
	//FIND ELEMENTS
	  let elements= await driver.findelements(By.xpath("/html/body/app-root/app-festivals/ol/li"));
	// EXTRACTING THE ELEMENTS AND PRINTING THE TEXT ON THE CONSOLE and validating the element is displayed
	  for(let elem of elements){
		Assert.assertTrue(await elem.isDisplayed());
		console.log("Element " + elem.getText());
	  }

}    
festival()
