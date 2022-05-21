module.exports = (io, socket) => {
  const connection = function () {
    console.log(`user: ${socket.id} connected`);
  };
  const disconnection = function () {
    console.log(`user ${socket.id} dis-connected`);
  };

  const emitMessage = function ({ userName, message }) {
    console.log('emit from Server', { userName, message });
    io.emit('message', { userName, message });
  };

  const serverMessage = function () {
    io.emit(`user: ${socket.id}`);
  };

  socket.on('connect', connection);
  socket.on('serverMsg', serverMessage);
  socket.on('message', emitMessage);
  socket.on('disconnect', disconnection);
};
