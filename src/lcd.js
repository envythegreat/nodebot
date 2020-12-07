var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var lcd = new five.LCD({ controller: "PCF8574"});
  let myName = "King Envy"
  let index = 0;

  setInterval(() => {
    if(index >= myName.length){
      lcd.clear()
      index = 0
    }
    lcd.print(myName[index])
    index++
  }, 500);
});
