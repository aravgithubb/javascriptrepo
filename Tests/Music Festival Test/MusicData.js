//IMPORTING THE SELENIUM WEBDRIVER AND CHROME
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

 
async function MusicSelec(){       
        // browser launch     
	let driver = await new Builder().forBrowser("chrome").build();       
	// launch url       
	await driver.get("http://localhost:4200/festivals");     
	// implicit wati to sync with webdriver.       
	await driver.manage().setTimeouts( {implicit : 10000} );   
	// maximize the browser       
	await driver.manage().window().fullscreen();      
	// find elements and return value     
	let elements= await driver.findElements(By.xpath("//ol[@style='user-select: auto;']/li[5]")).getText().then(function(value){       
	return value      });
	// EXTRACTING THE ELEMENTS AND PRINTING THE TEXT ON THE CONSOLE.
	  for(let elem of elements){
		console.log("Element " + elem.getText());
	  }

}    
MusicSelec()
