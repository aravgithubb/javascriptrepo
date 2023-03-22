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
	// extracting the elements and getting text of the selected webelement.
	  for(let elem of elements)
      {
        // checking element is interactable or not
         Assert.assertFalse(elem.isEnabled());
	      // giving condition to check
        if (elem.getText().equals("Propeller")){
            console.log(await elem.getText());

        }
	  }

}    
festival()
