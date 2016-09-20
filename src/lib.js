'use strict';

const express = require('express');

module.exports = config => {
  config.port = process.env.PORT || process.env.MXD_PORT || config.port;
  config.host = process.env.MXD_HOST || config.host;

  const app = express();
  app.set('x-powered-by', false);
  app.get('/ping', (req, res) => {
    res.send();
  });
  app.listen(config.port, config.host);

  return { app: app, express: express };
};
