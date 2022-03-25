const HttpServer = require('./drivers/http/server');

HttpServer.start()
    .catch(err => console.error('Something went wrong running http server', err));