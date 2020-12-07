var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var lcd = new five.LCD({ controller: "PCF8574" });
  let myName = ["E","N","V","Y"," ","T","H","E"," ","G","R","E","A","T"]
  let index = 0;
  setInterval(() => {
    if(index >= myName.length){
      lcd.clear()
      index = 0
    }
    lcd.print(myName[index])
    index++
  }, 600);
});
