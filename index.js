const express = require('express');
const app = express();
const path = require('path');
const cookies = require('cookie-parser');
const session = require('express-session');

// read express static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// parse all form data
app.use(express.urlencoded({ extended: true }));   
app.use(express.json());

// setup ejs view engine
app.set('view engine', 'ejs');

// setup cookies and sessions
app.use(cookies());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

// import routers
const HomeRouter = require('./routers/HomeRouter');
const QuestionRouter = require('./routers/QuestionRouter'); 
const AnswerRouter = require('./routers/AnswerRouter');
const ExamRouter = require('./routers/ExamRouter');
app.use('/', HomeRouter);
app.use('/questions', QuestionRouter);
app.use('/answers', AnswerRouter);
app.use('/exams', ExamRouter);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});