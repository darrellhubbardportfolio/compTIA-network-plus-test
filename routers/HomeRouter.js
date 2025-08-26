const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

/*
    session example
    req.session.user = { 
        name: 'John Doe',
        exam: { 
            examId: 123, 
            currentQuestion: 1, 
            questions: [], // load all questions here
            answerSheet: [],
            totalQuestions: questions.length
            }
        };
*/

module.exports = router;