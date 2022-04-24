module.exports = (io, socket) => {
  const emitSquares = function (squareData) {
    io.emit('newSquares', squareData);
    console.log({ squareData });
  };

  const emitSelected = function (squareData) {
    io.emit('newSquares', squareData);
    console.log({ squareData });
  };

  socket.on('setSquares', emitSquares);
};
