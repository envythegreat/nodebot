const {Led, Button, Board} = require('johnny-five')


const board = new Board();

board.on('ready', function(){
  const button = new Button(2);
  // const led1 = new Led(3)
  // const led2 = new Led(4)
  // const led3 = new Led(5)
  const led = [
    {led: new Led(3)},
    {led: new Led(4)},
    {led: new Led(5)}
  ]
  board.repl.inject({
    button: button
  });
  console.log(led.length)
  let index = 0;
  setInterval(()=>{
    if(index >= led.length){
      index = 0
      // led[0].led.off()
      // led[1].led.off()
      // led[2].led.off()
    }else {
      led[index].led.on()
      index ++
    }
    
    if(index !== 0) {
      console.log(index - 1)
      led[index - 1].led.fadeOut()
    }
  }, 1000)
});