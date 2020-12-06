const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  console.log("Ready!");

  const rgb = new Led.RGB([5,6,7]);
  // const led5  = new Led(5);
  // const led6  = new Led(6);
  // const led7  = new Led(7);
  let index = 0;
  const rainbow = [
                    "FF0000",
                    "FF7F00",
                    "FFFF00",
                    "00FF00",
                    "FFFFFF",
                    "00FFFF",
                    "0000FF",
                    "4B0082",
                    "8F00FF",
                  ];
    // board.loop(1000, () => {
      // rgb.color(rainbow[index++]);
      // if(index === rainbow.length){
      //   index = 0;
      // }
    // })
    setInterval(() => {
      rgb.color(rainbow[index++]);
      if(index === rainbow.length){
        index = 0;
      }
    }, 500);
  // rgb.color('7531A9')
  // let brigh = 0
  // const led = new Led(8);
  // let i = 0
  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max) + 1 ;
  // }
  // setInterval(()=>{
  //   let rand = getRandomInt(25) * 10
  //   if(rand >= 255){
  //     rand = 250;
  //   }
  //   led.brightness(rand);
  //   console.log(rand)
  // }, 800)
  // setInterval(()=>{
  //   i +=10;
  //   if((brigh + i) >= 255){
  //     i = 10;
  //     brigh = 10;
  //   }
  //   led.brightness(brigh+i);
  //   console.log(brigh+i)
  // }, 500)
  // led.on()
});