var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var port = process.env.PORT || 3000;
var example_data = '15 - 20';
var entrance_data = '150/200';

app.get('/ticketprice1', function (req, res) {
  // res.sendFile(__dirname+'/ticketPrice1.html');
  res.sendFile(path.join(__dirname + '/../ticketPrice1.html'));
});

app.get('/entrance', function (req, res) {
  // res.sendFile(__dirname+'/ticketPrice1.html');
  res.sendFile(path.join(__dirname + '/../entrance.html'));
});

app.get('/slider', function (req, res) {
  // res.sendFile(__dirname+'/ticketPrice1.html');
  res.sendFile(path.join(__dirname + '/../slider.html'));
});


io.on('connection', function () {

  // //example do something and then emit 'new data' with example_data
  // io.emit('new data', example_data);

  // io.on('new data', function(data){
  //   io.emit('left column data', example_data);
  // });

  // for testing: immediately emit 'left column data'
  io.emit('left column data', example_data);
  io.emit('top entrance data', example_data);
  io.emit('bottom entrance data', entrance_data);
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});
