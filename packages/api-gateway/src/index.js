"use strict";

const HttpServer = require("./drivers/http/server");

HttpServer.start().catch((err) =>
  console.error("Somethin went wrong running server", err)
);
