const {Led, Button, Board} = require('johnny-five')


const board = new Board();

board.on('ready', function(){
  const button = new Button(2);
  const led = new Led(3)
  board.repl.inject({
    button: button
  });
  let ledCheck = false
  function checkLed() {
    if(ledCheck){
      led.off()
      ledCheck = false
      console.log('Led off')
    } else {
      led.on()
      ledCheck = true
      console.log('Led On')
    }
  }
  button.on('down', () => {
    checkLed()
  })
});