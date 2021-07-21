const express = require('express'),
      path    = require('path'),
      cors    = require('cors'),
      route   = require('./route.js'),
      app     = express(),
      port    = 8080;
      
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(cors());

route(app);

app.listen(port);

console.log(`API server is listening on port:${port}`);