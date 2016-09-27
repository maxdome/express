'use strict';

const express = require('express');

module.exports = config => {
  config.port = process.env.PORT || process.env.MXD_PORT || config.port;
  config.hostname = process.env.MXD_HOSTNAME || config.hostname;

  const app = express();
  app.set('x-powered-by', false);
  app.use('/ping', (req, res) => {
    res.send();
  });
  app.listen(config.port, config.hostname);

  return { app: app, express: express };
};
