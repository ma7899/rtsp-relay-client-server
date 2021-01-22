const fs = require('fs');
const http = require('http');


module.exports = http.createServer(function (req, res) {


  // if(req.url.indexOf('index.html') != -1){ //req.url has the pathname, check if it conatins '.html'
  if(req.url === '/') { //req.url has the pathname, check if it conatins '.html'

    fs.readFile(__dirname + '/public/index.html', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

  }

  if(req.url.indexOf('index.js') != -1){ //req.url has the pathname, check if it conatins '.js'

    fs.readFile(__dirname + '/public/index.js', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });

  }

  
  if(req.url.indexOf('jsmpeg.min.js') != -1){ //req.url has the pathname, check if it conatins '.js'

    fs.readFile(__dirname + '/public/jsmpeg.min.js', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });

  }

  if(req.url.indexOf('index.css') != -1){ //req.url has the pathname, check if it conatins '.css'

    fs.readFile(__dirname + '/public/index.css', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });

  }

});