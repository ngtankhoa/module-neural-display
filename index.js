var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var port = process.env.PORT || 3000;
var example_data = '15 - 20';
var entrance_data = '150/200';

app.use(express.static('assets'));

app.get('/ticketprice', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/ticketPrice1.html'));
});

app.get('/entrance', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/entrance.html'));
});

app.get('/slider', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/slider.html'));
});


io.on('connection', function () {
  io.emit('left column data', example_data);
  io.emit('top entrance data', example_data);
  io.emit('bottom entrance data', entrance_data);
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});
