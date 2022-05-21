module.exports = (io, socket) => {
  // set a board of new squares
  const emitCards = function ({ cards }) {
    console.log('HERE => ', { cards });
    io.emit('newCards', cards);
  };

  const emitSelected = function ({ cards }) {
    io.emit('newCards', { cards });
    console.log({ cards });
  };

  socket.on('setCards', emitCards);
};
