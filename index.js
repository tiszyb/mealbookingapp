'use strict'



const http = require('http');
const express = require('express');
const fs = require('fs');


fs.readFile('./config.json', 'utf8', function(err, data) {

  const app  = express();
  const config = JSON.parse(data);

  app.use(express.static(config.webserver.folder))

  const httpserver = http.createServer(app);

  httpserver.listen(config.webserver.port , function(err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`webserver listening on port ${config.webserver.port}`);
  })

})
