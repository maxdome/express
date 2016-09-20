'use strict';

const express = require('express');

module.exports = config => {
  config.port = process.env.PORT || config.port;

  const app = express();
  app.set('x-powered-by', false);
  app.get('/ping', (req, res) => {
    res.send();
  });
  app.listen(config.port);

  return { app: app, express: express };
};
