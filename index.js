'use strict'


      /* let fadeOutFrom = 10;

      const fadeout = element =>{
        element = "dd";
        var target = document.getElementById(element)
        var newSetting = fadeOutFrom / 10 ;
        target.style.opacity = newSetting;
        fadeOutFrom--;
        if (fadeOutFrom == 0) {
          target.style.opacity = 0;
          target.style.display = none;
          clearTimeout(loopTimer);
          fadeOutFrom = 10;
          return false;
        }
 
        const loopTimer = setTimeout('fadeout(\''+element+'\')', 500);
      }

      var myVar = setInterval(fadeout, 500); */

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
