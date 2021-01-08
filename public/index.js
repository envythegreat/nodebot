let socket = new WebSocket('ws://localhost:8080');
let input = document.getElementById('myColor');

input.addEventListener('change', (e) => {
  socket.send(e.target.value)
})