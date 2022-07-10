const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


//mongo connection
const connection = require("./db");
connection();


const indexRouter = require('./routes/index');
const meetingsRouter = require('./routes/meetings');
const usersRouter = require('./routes/users');

// Login/SignUp router
const newUserRouter = require('./routes/SignLog/newUser');
const authRouter = require('./routes/SignLog/auth');

const app = express();

// middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use('/', indexRouter);
app.use('/meetings', meetingsRouter);
app.use('/users', usersRouter);


//login/signUp routes
app.use('/register', newUserRouter);
app.use('/auth',authRouter );




app.listen(5000,()=>{  // listens on port 3000 for connections
    console.log("Server started on port 5000");
})

module.exports = app;
