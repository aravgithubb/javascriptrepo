//IMPORTING THE SELENIUM WEBDRIVER AND CHROME

const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function MusicSelec()
{
       // browser launch
       let driver = await new Builder().forBrowser("chrome").build();
       // launch url
       await driver.get("http://localhost:4200/festivals");
       // implicit wati to sync with webdriver.
       await driver.manage().setTimeouts( {implicit : 10000} );
       // maximize the browser
       await driver.manage().window().fullscreen();
       // find element and return value
      let element= await driver.findElement(By.xpath("//ol[@style='user-select: auto;']/li[5]")).getText().then(function(value){
        return value
      });
      // validating the actual and expected text 
      assert.strictEqual(element,"cold capsicu");
      // quit the browser
      await driver.quit();

} ;
MusicSelec()
