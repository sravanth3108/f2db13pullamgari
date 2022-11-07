var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var curriculum = require("./models/curriculum");

require('dotenv').config(); 
const connectionString =  
process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://sravanthp:sravanth@cluster0.a9f5hne.mongodb.net/?retryWrites=true&w=majority',  
{useNewUrlParser: true, 
useUnifiedTopology: true}); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var curriculumRouter = require('./routes/curriculum');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/curriculum', curriculumRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function recreateDB(){
  // Delete everything
  await curriculum.deleteMany();
  let instance1 = new
  curriculum({courseName:"Dev Web Apps", department:'ACS',
  credits:3});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });
  
  let instance2 = new
  curriculum({courseName:"ADB", department:'ACS',
  credits:3});
  instance2.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second object saved")
  });
  
  let instance3 = new
  curriculum({courseName:"ISAD", department:'IS',
  credits:3});
  instance3.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Third object saved")
  });
  
  let instance4 = new
  curriculum({courseName:"OOPS", department:'ACS',
  credits:3});
  instance4.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Fourth object saved")
  });
}
  
  let reseed = true;
  if (reseed) { recreateDB();}



module.exports = app;
