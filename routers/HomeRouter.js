const express = require('express');
const router = express.Router();

// home page
router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

/*
    session example
    req.session.user = { 
        username: 'John Doe',
        exam: { 
            examId: 123, 
            currentQuestion: 1, 
            questions: [], // load all questions here
            answerSheet: [], // add and modify answers here
            totalQuestions: questions.length
        }
    };
*/

module.exports = router;