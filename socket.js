const socketio = require("socket.io");

function initializeSocket(server) {
  const io = socketio(server);
}

module.exports = initializeSocket;
