import express from 'express';
import compression from 'compression';
import { createRequestHandler } from '@remix-run/express';
import * as serverBuild from '@remix-run/dev/server-build';
// import { errorLogging, generalLogging } from './app/logging/index';
const MessageHandlers = require('./socketHandlers/messagingHandler');
const CardHandlers = require('./socketHandlers/cardHandlers');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by');

// Remix fingerprints its assets so we can cache forever.
app.use(
  '/build',
  express.static('public/build', { immutable: true, maxAge: '1y' }),
);

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static('public', { maxAge: '1h' }));

// LOGGING
// app.use(generalLogging);
// app.use(errorLogging);

app.all(
  '*',
  createRequestHandler({
    build: serverBuild,
    mode: process.env.NODE_ENV,
  }),
);

const http = require('http').createServer(app);
const io = require('socket.io')(http);

const registerHandlers = (socket) => {
  MessageHandlers(io, socket);
  CardHandlers(io, socket);
};

io.on('connection', registerHandlers);

http.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

// app.listen(port, () => {
//   console.log(`Express server listening on port ${port}`);
// });
