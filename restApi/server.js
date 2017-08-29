var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000, 
  mongoose = require('mongoose'),
  Task = require('./models/restModel');
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:32769/todoList');
mongoose.connect('mongodb://imranjaved728:fucklifE@ds163053.mlab.com:63053/todolist123');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require('path');
app.use(express.static(path.resolve('../','webApp')));   //this sets the path for resources public folder thing. js files

var routes = require('./routes/restRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
