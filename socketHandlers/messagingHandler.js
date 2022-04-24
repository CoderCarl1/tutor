module.exports = (io, socket) => {
  const connection = function () {
    console.log(`user: ${socket.id} connected`);
  };
  const disconnection = function () {
    console.log(`user ${socket.id} dis-connected`);
  };

  const emitMessage = function ({ userName, msg }) {
    io.emit('message', { userName, msg });
  };

  const serverMessage = function () {
    io.emit(`user: ${socket.id}`);
  };

  socket.on('connection', connection);
  socket.on('serverMsg', serverMessage);
  socket.on('message', emitMessage);
  socket.on('disconnect', disconnection);
};
