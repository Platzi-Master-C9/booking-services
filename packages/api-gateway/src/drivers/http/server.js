"use strict";

const Fastify = require("fastify");
const Autoload = require("fastify-autoload");
const path = require("path");

const app = Fastify({ logger: true });

app.register(Autoload, { dir: path.join(__dirname, "routes") });
app.register(Autoload, { dir: path.join(__dirname, "plugins") });

async function start() {
  try {
    await app.listen(process.env.SERVER_PORT || 3000, "0.0.0.0");
  } catch (error) {
    app.log.error(
      `[http-server]: Error with message ${error.message} has happened`
    );
    process.exit(1);
  }
}

module.exports = {
  app,
  start,
};
