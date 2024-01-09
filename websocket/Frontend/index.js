// Frontend/script.js

const socket = new WebSocket('ws://localhost:8080');

socket.onopen = function () {
  console.log('Connected to server');
};
socket.onclose=function(){
    console.log("disconnected")
}

socket.onmessage = function (event) {
//   const receivedMessage = event.data;
//   console.log('Received message:', receivedMessage);
  // You can handle the received message here, such as displaying it on the UI
  const messages = document.getElementById('chatMessages');
  messages.innerHTML += `<p>${event.data}</p>`;
};

function sendMessage() {
  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;
  const fullMessage = `${username}: ${message}`;
  socket.send(fullMessage);
}
