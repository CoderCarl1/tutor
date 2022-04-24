import morgan from "morgan";
import fs from "fs";
import path from "path";

// STREAMS
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);
const errorLogStream = fs.createWriteStream(path.join(__dirname, "error.log"), {
  flags: "a",
});

// TOKENS
morgan.token("body", (req) => JSON.stringify(req.body));
morgan.token("json", function (req, res) {
  return JSON.stringify({
    m: req.method,
    url: req.url,
    http: req.httpVersion,
  });
});

// FORMATS

function errorStatus(req, res) {
  return res.statusCode < 400;
}

export const errorLogging = morgan(
  `:json - [:date[iso]] :body - STATUS :status`,
  {
    stream: errorLogStream,
    skip: errorStatus,
  }
);
export const generalLogging = morgan(
  `"METHOD - :method DATE - [:date[iso]] URL - :url" STATUS :status`,
  {
    stream: accessLogStream,
    skip: !errorStatus,
  }
);
