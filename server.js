const express = require('express')
const app = express();
const port = 3000;

const {Board, Led} = require('johnny-five');
const webSocket =  require('ws');
const webS = new webSocket.Server({port:8080});
const board = new Board();

app.use('/led', express.static('public'));

board.on('ready', () => {
  let rgbLed = new Led.RGB({
    pins:{
      red:7,
      green:6,
      blue:5
    }
  });

  rgbLed.on();
  rgbLed.color('#FF0000');

  webS.on('connection', (ws, req) => {
    console.log('Live');
    ws.on('message', (data) => {
      rgbLed.color(data)
      console.log(data)
    });
  });


});

app.listen(port, () => { console.log('hhhhh') } );