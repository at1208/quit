import socketio from "socket.io";

function initializeSocket(server) {
  const io = socketio(server);
}

export default initializeSocket;
